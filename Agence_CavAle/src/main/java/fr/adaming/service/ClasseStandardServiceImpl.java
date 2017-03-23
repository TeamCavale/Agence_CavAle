package fr.adaming.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fr.adaming.dao.IClasseStandardDao;
import fr.adaming.model.ClasseStandard;

@Service
@Transactional
public class ClasseStandardServiceImpl implements IClasseStandardService{

	@Autowired
	private IClasseStandardDao classeStandardDao;
	//setter injection
	public void setClasseStandardDao(IClasseStandardDao classeStandardDao) {
		this.classeStandardDao = classeStandardDao;
	}

	@Override
	public List<ClasseStandard> getAllClasseStandardService() {
		
		return classeStandardDao.getAllClasseStandardDao();
	}

	@Override
	public ClasseStandard getClasseStandardByIdService(int id) {
		
		return classeStandardDao.getClasseStandardByIdDao(id);
	}

	@Override
	public void addClasseStandardService(ClasseStandard classeStandard) {
		classeStandardDao.addClasseStandardDao(classeStandard);
		
	}

	@Override
	public void updateClasseStandardService(ClasseStandard classeStandard) {
		classeStandardDao.updateClasseStandardDao(classeStandard);
		
	}

	@Override
	public void deleteClasseStandardService(int id) {
		classeStandardDao.deleteClasseStandardDao(id);
		
	}

}
