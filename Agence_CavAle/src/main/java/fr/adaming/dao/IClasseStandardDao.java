package fr.adaming.dao;

import java.util.List;

import fr.adaming.model.ClasseStandard;


public interface IClasseStandardDao {
	public List<ClasseStandard> getAllClasseStandardDao();
	public ClasseStandard getClasseStandardByIdDao(int id);
	public void addClasseStandardDao(ClasseStandard classeStandard);
	public void updateClasseStandardDao(ClasseStandard classeStandard);
	public void deleteClasseStandardDao(int id);
}
