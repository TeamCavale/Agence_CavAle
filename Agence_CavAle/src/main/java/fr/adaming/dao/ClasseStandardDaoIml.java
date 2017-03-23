package fr.adaming.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import fr.adaming.model.ClasseStandard;
import fr.adaming.model.Client;

@Repository
public class ClasseStandardDaoIml implements IClasseStandardDao {

	@Autowired
	private SessionFactory sf;
	
	
	@Override
	public List<ClasseStandard> getAllClasseStandardDao() {
		Session s=sf.getCurrentSession();
		String req="From ClasseStandard";
		Query query=s.createQuery(req);
		return query.list();
	}

	@Override
	public ClasseStandard getClasseStandardByIdDao(int id) {
		Session s=sf.getCurrentSession();
		ClasseStandard c=(ClasseStandard) s.get(ClasseStandard.class, id);
		return c;
	}

	@Override
	public void addClasseStandardDao(ClasseStandard classeStandard) {
		Session s=sf.getCurrentSession();
		s.save(classeStandard);
		
	}

	@Override
	public void updateClasseStandardDao(ClasseStandard classeStandard) {
		Session s=sf.getCurrentSession();
		s.saveOrUpdate(classeStandard);
	}

	@Override
	public void deleteClasseStandardDao(int id) {
		Session s=sf.getCurrentSession();
		ClasseStandard c=(ClasseStandard) s.get(ClasseStandard.class, id);
		s.delete(c);
		
	}

}
