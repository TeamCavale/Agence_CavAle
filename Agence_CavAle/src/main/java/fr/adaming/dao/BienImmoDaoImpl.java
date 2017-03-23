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

}
