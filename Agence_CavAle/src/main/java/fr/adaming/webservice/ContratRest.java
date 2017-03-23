package fr.adaming.webservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import fr.adaming.model.Contrat;
import fr.adaming.service.IContratService;

@RestController
@RequestMapping("/contrat")
public class ContratRest {

	@Autowired
	IContratService contratService;

	public void setContratService(IContratService contratService) {
		this.contratService = contratService;
	}
	
	@RequestMapping(value="/contrats",method=RequestMethod.GET,produces="application/json")
	public List<Contrat> getAllContratWS(){
		return contratService.getAllContratService();
	}
	
	@RequestMapping(value="/contrat/{id}",method=RequestMethod.GET,produces="application/json")
	public Contrat getContratbyIdWS(@PathVariable("id") int id){
		
		return contratService.getContratbyIdService(id);
		
	}
	
	@RequestMapping(value="/add",method=RequestMethod.POST,consumes="application/json")
	public void addContratWS(@RequestBody Contrat c){
		contratService.addContratService(c);
	}
	
	@RequestMapping(value="/del/{id}",method=RequestMethod.DELETE,consumes="application/json")
	public void delContratWS(@PathVariable("id")  int id){
		contratService.delContratService(id);
	}
	
	@RequestMapping(value="/update",method=RequestMethod.POST,consumes="application/json")
	public void updateContratWS(@RequestBody Contrat c){
		contratService.updateContratService(c);
	}
}
