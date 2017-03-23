package fr.adaming.dao;

import java.util.List;

import fr.adaming.model.Contrat;

public interface IContratDao {
	
	public List<Contrat> getAllContratDao();
	
	public Contrat getContratbyIdDao(int id);
	
	public void addContratDao(Contrat c);
	
	public void delContratDao(int id);
	
	public void updateContratDao(Contrat c);

}
