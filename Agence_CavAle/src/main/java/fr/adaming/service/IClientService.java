package fr.adaming.service;

import java.util.List;

import fr.adaming.model.Client;

public interface IClientService {

	public List<Client> getAllClientService();
	public Client getClientByIdService(int id);
	public void addClientService(Client client);
	public void updateClientService(Client client);
	public void deleteService(int id);
	
}
