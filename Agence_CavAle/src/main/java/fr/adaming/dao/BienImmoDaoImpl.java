package fr.adaming.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import fr.adaming.model.BienAAcheter;
import fr.adaming.model.BienALouer;
import fr.adaming.model.BienImmo;

@Repository
public class BienImmoDaoImpl implements IBienImmoDao {

	@Autowired
	SessionFactory sf;

	public void setSf(SessionFactory sf) {
		this.sf = sf;
	}

	@Override
	public List<BienAAcheter> getAllBienAAcheter() {
		String req = "SELECT bi FROM BienAAcheter bi WHERE bi.statut='disponible'";
		return sf.getCurrentSession().createQuery(req).list();
	}

	@Override
	public List<BienALouer> getAllBienALouer() {
		String req = "SELECT bi FROM BienALouer bi WHERE bi.statut='disponible'";
		return sf.getCurrentSession().createQuery(req).list();
	}

	@Override
	public void addBienImmo(BienImmo bienImmo) {

		sf.getCurrentSession().save(bienImmo);
	}

	@Override
	public void delBienAAcheter(int id) {
		sf.getCurrentSession().delete(sf.getCurrentSession().get(BienAAcheter.class, id));		
	}
	
	@Override
	public void delBienALouer(int id) {
		sf.getCurrentSession().delete(sf.getCurrentSession().get(BienALouer.class, id));		
	}

	@Override
	public void updateBienAAcheter(BienAAcheter bienImmo) {
		sf.getCurrentSession().update(bienImmo);
	}
	
	@Override
	public void updateBienALouer(BienALouer bienImmo) {
		sf.getCurrentSession().update(bienImmo);
	}

	@Override
	public BienAAcheter getBienAAcheterById(int id) {
		return (BienAAcheter) sf.getCurrentSession().get(BienAAcheter.class, id);
	}

	@Override
	public BienALouer getBienALouerById(int id) {
		return (BienALouer) sf.getCurrentSession().get(BienALouer.class, id);
	}

}
