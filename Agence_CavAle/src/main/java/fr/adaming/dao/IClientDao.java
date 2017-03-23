package fr.adaming.dao;

import java.util.List;

import fr.adaming.model.Client;
/**
 * 
 * @author TeamCavale
 *
 */
public interface IClientDao {

/**
 * 
 * @return
 */
	public List<Client> getAllClientDao();
	public Client getClientByIdDao(int id);
	public void addClientDao(Client client);
	public void updateClientDao(Client client);
	public void deleteClient(int id);
}
