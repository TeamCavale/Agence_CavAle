package fr.adaming.dao;

import java.util.List;

import fr.adaming.model.Agent;
import fr.adaming.model.BienImmo;
import fr.adaming.model.ClasseStandard;
import fr.adaming.model.Client;
import fr.adaming.model.Contrat;
import fr.adaming.model.Proprietaire;
import fr.adaming.model.Visite;

/**
 * 
 * @author TeamCavale
 *
 */
public interface IAgentDao {
	
	
	public List<Agent> getAllAgents();
	
	public List<Visite> getAllVisites(Agent agent);
	
	public List<Contrat> getAllContrats(Agent agent);
	
	public List<Client> getAllClientsByClasseStandard(ClasseStandard classeStandard);
	
//	public List<BienImmo> getAllBiensByClasseStandard(ClasseStandard classeStandard);
	
	public List<BienImmo> getAllBiensByProprietaire(Proprietaire proprietaire);
	

	
	
	

}
