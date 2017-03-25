package fr.adaming.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import fr.adaming.model.Adresse;
import fr.adaming.model.Client;
/**
 * 
 * @author inti0242
 *
 */
@Repository
public class ClientDaoImpl implements IClientDao{

	@Autowired
	private SessionFactory sf;
	

	@Override
	public List<Client> getAllClientDao() {
		Session s=sf.getCurrentSession();
		String req="From Client";
		Query query=s.createQuery(req);
		return query.list();
	
	}

	@Override
	public Client getClientByIdDao(int id) {
		Session s=sf.getCurrentSession();
		Client c=(Client) s.get(Client.class, id);
		return c;
	}

	@Override
	public void addClientDao(Client client) {
		Session s=sf.getCurrentSession();
		Adresse adresse=new Adresse(client.getAdresse().getRue(), client.getAdresse().getCodePostal(), client.getAdresse().getVille());
		s.save(adresse);
		adresse.setClient(client);
		s.save(client);
		
	}

	@Override
	public void updateClientDao(Client client) {
		Session s=sf.getCurrentSession();
		s.saveOrUpdate(client);
		
	}

	@Override
	public void deleteClient(int id) {
		Session s=sf.getCurrentSession();
		Client c=(Client) s.get(Client.class, id);
		s.delete(c);
		
	}

}
