package fr.adaming.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import fr.adaming.model.Contrat;

@Repository
public class ContratDaoImpl implements IContratDao {

	@Autowired
	private SessionFactory sf;
	
	
	
	
	
	public void setSf(SessionFactory sf) {
		this.sf = sf;
	}

	@Override
	public List<Contrat> getAllContratDao() {
		String req="SELECT c FROM Contrat c";
		Session s=sf.getCurrentSession();
		Query query=s.createQuery(req);
		
		return query.list();
	}

	@Override
	public Contrat getContratbyIdDao(int id) {
		Session s=sf.getCurrentSession();
		Contrat contrat=(Contrat) s.get(Contrat.class, id);
		
		return contrat;
	}

	@Override
	public void addContratDao(Contrat c) {
		Session s=sf.getCurrentSession();
		
		s.save(c);

	}

	@Override
	public void delContratDao(int id) {
		Session s=sf.getCurrentSession();
		Contrat contrat=(Contrat) s.get(Contrat.class, id);
		s.delete(contrat);

	}

	@Override
	public void updateContratDao(Contrat c) {
		Session s=sf.getCurrentSession();
		s.update(c);

	}

}
