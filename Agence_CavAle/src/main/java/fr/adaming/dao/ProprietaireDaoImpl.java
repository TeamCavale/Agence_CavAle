package fr.adaming.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import fr.adaming.model.Proprietaire;

/**
 * 
 * @author TeamCavale
 * 
 */
@Repository
public class ProprietaireDaoImpl implements IProprietaireDao {

	@Autowired
	private SessionFactory sf;

	public void setSf(SessionFactory sf) {
		this.sf = sf;
	}

	@Override
	public List<Proprietaire> getAllProprietaires() {
		Session s = sf.getCurrentSession();

		String req = "select p from Proprietaire p";

		Query query = s.createQuery(req);

		return query.list();
	}

	@Override
	public void addProprietaire(Proprietaire proprietaire) {

		Session s = sf.getCurrentSession();

		s.save(proprietaire);

	}

	@Override
	public void updateProprietaire(Proprietaire proprietaire) {
		Session s = sf.getCurrentSession();

		s.saveOrUpdate(proprietaire);

	}

	@Override
	public void deleteProprietaire(int id_proprietaire) {
		Session s = sf.getCurrentSession();

		s.delete(s.get(Proprietaire.class,id_proprietaire));

	}

	@Override
	public Proprietaire getProprietaireById(int id_proprietaire) {
		Session s = sf.getCurrentSession();
		
		return (Proprietaire) s.get(Proprietaire.class, id_proprietaire);
	}

}
