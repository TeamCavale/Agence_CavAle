package fr.adaming.webservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import fr.adaming.model.Client;
import fr.adaming.service.IClientService;

@RestController
@RequestMapping("client")
public class ClientWSRest {

	@Autowired
	private IClientService clientService;

	//setter
	public void setClientService(IClientService clientService) {
		this.clientService = clientService;
	}
	
	//methodes
	@RequestMapping(value="/clients", method=RequestMethod.GET, produces="application/json")
	public List<Client> getAllClientRest(){
		
		return clientService.getAllClientService();
		}

	@RequestMapping(value="/add", method=RequestMethod.POST, consumes="application/json")
	public void addClientRest(@RequestBody Client client){
		
		clientService.addClientService(client);
	}
	@RequestMapping(value="/client/{id_param}", method=RequestMethod.GET, produces="application/json")
	public Client getClientByIdRest(@PathVariable("id_param") int id){
		
		return clientService.getClientByIdService(id);
		}
	@RequestMapping(value="/update", method=RequestMethod.PUT, consumes="application/json")
	public void updateClientRest(@RequestBody Client client){
		
		clientService.updateClientService(client);
	}
	
	@RequestMapping(value="/delete", method=RequestMethod.GET)
	public void deleteClientRest(@RequestParam("id_param")int id){
		clientService.deleteService(id);
	}
}
