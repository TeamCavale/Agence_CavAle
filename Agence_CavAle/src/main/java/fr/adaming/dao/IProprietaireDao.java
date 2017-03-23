package fr.adaming.dao;

import java.util.List;

import fr.adaming.model.Proprietaire;

/**
 * 
 * @author TeamCavale
 *  
 */

public interface IProprietaireDao {
	
	public List<Proprietaire> getAllProprietaires();
	
	public void addProprietaire(Proprietaire proprietaire);
	
	public void updateProprietaire(Proprietaire proprietaire);
	
	public void deleteProprietaire(int id_proprietaire);
	
	public Proprietaire getProprietaireById(int id_proprietaire);
	

	
}
