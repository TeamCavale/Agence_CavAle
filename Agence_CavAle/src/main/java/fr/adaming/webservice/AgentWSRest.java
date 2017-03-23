package fr.adaming.webservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import fr.adaming.model.Agent;
import fr.adaming.model.BienImmo;
import fr.adaming.model.ClasseStandard;
import fr.adaming.model.Client;
import fr.adaming.model.Contrat;
import fr.adaming.model.Proprietaire;
import fr.adaming.model.Visite;
import fr.adaming.service.IAgentService;

/**
 * 
 * @author TeamCavale
 *  
 */
@RestController
@RequestMapping("/agent")
public class AgentWSRest {
	
	@Autowired
	IAgentService agentService;

	public void setAgentService(IAgentService agentService) {
		this.agentService = agentService;
	}

	@RequestMapping(value="/visites", method=RequestMethod.POST, produces="application/json",consumes="application/json")
	public List<Visite> getAllVisites(@RequestBody Agent agent){
		return agentService.getAllVisites(agent);
	}
	
	@RequestMapping(value="/all", method=RequestMethod.GET, produces="application/json")
	public List<Agent> getAllAgents(){
		return agentService.getAllAgents();
	}
	
	@RequestMapping(value="/contrats", method=RequestMethod.POST, produces="application/json",consumes="application/json")
	public List<Contrat> getAllContrats(@RequestBody Agent agent){
		return agentService.getAllContrats(agent);
	}
	
	@RequestMapping(value="/clientsByClasseStandard", method=RequestMethod.POST, produces="application/json",consumes="application/json")
	public List<Client> getClientsByClasseStandard(@RequestBody ClasseStandard classeStandard){
		return agentService.getAllClientsByClasseStandard(classeStandard);
	}
	
	@RequestMapping(value="/biensByProprietaire", method=RequestMethod.POST, produces="application/json",consumes="application/json")
	public List<BienImmo> getBiensByProprietaire(@RequestBody Proprietaire proprietaire){
		return agentService.getAllBiensByProprietaire(proprietaire);
	}
	
	
}
