package fr.adaming.service;

import java.util.List;

import fr.adaming.model.ClasseStandard;

public interface IClasseStandardService {
	public List<ClasseStandard> getAllClasseStandardService();
	public ClasseStandard getClasseStandardByIdService(int id);
	public void addClasseStandardService(ClasseStandard classeStandard);
	public void updateClasseStandardService(ClasseStandard classeStandard);
	public void deleteClasseStandardService(int id);
}
