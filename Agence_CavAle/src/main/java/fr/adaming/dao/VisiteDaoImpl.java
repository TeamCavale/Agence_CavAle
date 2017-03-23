package fr.adaming.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import fr.adaming.model.Contrat;
import fr.adaming.model.Visite;

@Repository
public class VisiteDaoImpl implements IVisiteDao {

	@Autowired
	private SessionFactory sf;
	
	
	
	public void setSf(SessionFactory sf) {
		this.sf = sf;
	}

	@Override
	public List<Visite> getAllVisiteDao() {
		String req="SELECT v FROM Visite v";
		Session s=sf.getCurrentSession();
		Query query=s.createQuery(req);
		
		return query.list();
	}

	@Override
	public Visite getVisitebyIdDao(int id) {
		Session s=sf.getCurrentSession();
		Visite visite=(Visite) s.get(Visite.class, id);
		return visite;
	}

	@Override
	public void addVisiteDao(Visite v) {
		Session s=sf.getCurrentSession();
		
		s.save(v);

	}

	@Override
	public void delVisiteDao(int id) {
		Session s=sf.getCurrentSession();
		Visite visite=(Visite) s.get(Visite.class, id);
		s.delete(visite);
	}

	@Override
	public void updateVisiteDao(Visite v) {
		Session s=sf.getCurrentSession();
		s.update(v);

	}

}
