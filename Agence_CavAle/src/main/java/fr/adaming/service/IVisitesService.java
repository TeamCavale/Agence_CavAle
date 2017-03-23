package fr.adaming.service;

import java.util.List;

import fr.adaming.model.Visite;

public interface IVisitesService {
	
	public List<Visite> getAllVisiteService();

public Visite getVisitebyIdService(int id);
	
	public void addVisiteService(Visite v);
	
	public void delVisiteService(int id);
	
	public void updateVisiteService(Visite v);
}
