package fr.adaming.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fr.adaming.dao.IAgentDao;
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
@Service
@Transactional
public class AgentServiceImpl implements IAgentService {

	@Autowired
	IAgentDao agentDao;
	
	public void setAgentDao(IAgentDao agentDao) {
		this.agentDao = agentDao;
	}

	@Override
	public List<Visite> getAllVisites(Agent agent) {
		
		return agentDao.getAllVisites(agent);
	}

	@Override
	public List<Contrat> getAllContrats(Agent agent) {
		
		return agentDao.getAllContrats(agent);
	}

	@Override
	public List<Client> getAllClientsByClasseStandard(ClasseStandard classeStandard) {
		
		return agentDao.getAllClientsByClasseStandard(classeStandard);
	}

//	@Override
//	public List<BienImmo> getAllBiensByClasseStandard(ClasseStandard classeStandard) {
//		// TODO Auto-generated method stub
//		return null;
//	}

	@Override
	public List<BienImmo> getAllBiensByProprietaire(Proprietaire proprietaire) {
		
		return agentDao.getAllBiensByProprietaire(proprietaire);
	}

	@Override
	public List<Agent> getAllAgents() {
		
		return agentDao.getAllAgents();
	}

	@Override
	public boolean isExist(Agent agent) {
		return agentDao.isExist(agent);
	}

}
