package fr.adaming.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import fr.adaming.model.Agent;
import fr.adaming.model.BienAAcheter;
import fr.adaming.model.BienALouer;
import fr.adaming.model.BienImmo;
import fr.adaming.model.ClasseStandard;
import fr.adaming.model.Client;
import fr.adaming.model.Contrat;
import fr.adaming.model.Proprietaire;
import fr.adaming.model.Visite;

/**
 * 
 * @author TeamCavale
 *
 */
@Repository
public class AgentDaoImpl implements IAgentDao {

	@Autowired
	private SessionFactory sf;

	public void setSf(SessionFactory sf) {
		this.sf = sf;
	}

	@Override
	public List<Visite> getAllVisites(Agent agent) {
		Session s = sf.getCurrentSession();

		String req = "select v from Visite v where v.agent.id=:idAgent";

		Query query = s.createQuery(req);

		query.setParameter("idAgent", agent.getId());

		return query.list();
	}

	@Override
	public List<Contrat> getAllContrats(Agent agent) {

		Session s = sf.getCurrentSession();

		String req = "select c from Contrat c where c.agent.id=:idAgent";

		Query query = s.createQuery(req);

		query.setParameter("idAgent", agent.getId());
		
		

		return query.list();
	}

	@Override
	public List<Client> getAllClientsByClasseStandard(ClasseStandard classeStandard) {

		Session s = sf.getCurrentSession();

		// Récup au cas ou celle reçue par la méthode n'a que l'id
		ClasseStandard cs = (ClasseStandard) s.get(ClasseStandard.class, classeStandard.getId());

		return cs.getListeClients();
	}

	// @Override
	// public List<BienImmo> getAllBiensByClasseStandard(ClasseStandard
	// classeStandard) {
	// Session s = sf.getCurrentSession();
	//
	//
	//
	// return query.list();
	// }

	@Override
	public List<BienImmo> getAllBiensByProprietaire(Proprietaire proprietaire) {
		Session s = sf.getCurrentSession();

		// Récupération des BienALouer du proprio
		String reqL = "select l from BienALouer l where l.proprietaire.id=:IdProprietaire";

		Query queryL = s.createQuery(reqL);

		queryL.setParameter("IdProprietaire", proprietaire.getId());

		List<BienALouer> listeBiensALouer = queryL.list();

		// Récupération des BienAAcheter du proprio
		String reqA = "select a from BienAAcheter a where a.proprietaire.id=:IdProprietaire";

		Query queryA = s.createQuery(reqA);

		queryA.setParameter("IdProprietaire", proprietaire.getId());

		List<BienAAcheter> listeBiensAAcheter = queryA.list();

		// Fusion des deux listes
		List<BienImmo> listeBiensProprietaire = new ArrayList<BienImmo>();

		if (listeBiensAAcheter.size() > 0) {
			for (BienAAcheter ba : listeBiensAAcheter) {

				listeBiensProprietaire.add(ba);
			}
		}

		if (listeBiensALouer.size() > 0) {
			for (BienALouer bl : listeBiensALouer) {

				listeBiensProprietaire.add(bl);
			}
		}

		// retour
		if (listeBiensProprietaire.size() > 0) {
			return listeBiensProprietaire;
		} else {
			return null;
		}

	}

	@Override
	public List<Agent> getAllAgents() {
		Session s = sf.getCurrentSession();

		String req = "select a from Agent a";

		Query query = s.createQuery(req);

		return query.list();
	}

	@Override
	public boolean isExist(Agent agent) {
		String req = "SELECT a FROM Agent a WHERE a.mail=:pMail AND a.mdp=:pMdp";
		
		Session s = sf.getCurrentSession();
		Query query = s.createQuery(req);
		query.setParameter("pMail", agent.getMail());
		query.setParameter("pMdp", agent.getMdp());
		
		List<Agent> la = query.list();
		
		if(la.size() == 1){
			return true;
		}
		
		return false;
	}

}
