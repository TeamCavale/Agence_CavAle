package fr.adaming.service;

import java.util.List;

import fr.adaming.model.Contrat;

public interface IContratService {
	
	public List<Contrat> getAllContratService();
	
	public Contrat getContratbyIdService(int id);
	
	public void addContratService(Contrat c);
	
	public void delContratService(int id);
	
	public void updateContratService(Contrat c);

}
