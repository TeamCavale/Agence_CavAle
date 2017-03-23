package fr.adaming.webservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import fr.adaming.model.Proprietaire;
import fr.adaming.service.IProprietaireService;

/**
 * 
 * @author TeamCavale
 *  
 */
@RestController
@RequestMapping("/proprietaire")
public class ProprietaireWSRest {
	
	@Autowired
	IProprietaireService proprioService;

	public void setProprioService(IProprietaireService proprioService) {
		this.proprioService = proprioService;
	}
	
	@RequestMapping(value="/all", method=RequestMethod.GET, produces="application/json")
	public List<Proprietaire> getAllProprietaires(){
		
		return proprioService.getAllProprietaires();
	}
	
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public void addProprietaire(@RequestBody Proprietaire proprietaire){
		
		proprioService.addProprietaire(proprietaire);;
	}
	
	@RequestMapping(value="/upd", method=RequestMethod.PUT)
	public void updateProprietaire(@RequestBody Proprietaire proprietaire){
		
		proprioService.updateProprietaire(proprietaire);
	}
	
	@RequestMapping(value="/del/{id}", method=RequestMethod.GET)
	public void deleteProprietaire(@PathVariable("id") int id_proprietaire){
		
		proprioService.deleteProprietaire(id_proprietaire);
	}
	
	@RequestMapping(value="/get/{id}", method=RequestMethod.GET, produces="application/json")
	public Proprietaire getProprietaireById(@PathVariable("id") int id_proprietaire){
		
		return proprioService.getProprietaireById(id_proprietaire);
	}
	
	

	
	
	
}
