package fr.adaming.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fr.adaming.dao.IClientDao;
import fr.adaming.model.Client;

@Service
@Transactional
public class ClientServiceImpl implements IClientService{

	@Autowired
	private IClientDao clientDao;
	
	
	public void setClientDao(IClientDao clientDao) {
		this.clientDao = clientDao;
	}

	@Override
	public List<Client> getAllClientService() {
		
		return clientDao.getAllClientDao();
	}

	@Override
	public Client getClientByIdService(int id) {
		
		return clientDao.getClientByIdDao(id);
	}

	@Override
	public void addClientService(Client client) {
		clientDao.addClientDao(client);
		
	}

	@Override
	public void updateClientService(Client client) {
		clientDao.updateClientDao(client);
		
	}

	@Override
	public void deleteService(int id) {
		clientDao.deleteClient(id);
		
	}

}
