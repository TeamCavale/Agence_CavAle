package fr.adaming.webservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import fr.adaming.model.Visite;
import fr.adaming.service.IVisitesService;

@RestController
@RequestMapping("/visite")
public class VisiteRest {

	@Autowired
	IVisitesService visiteService;

	public void setVisiteService(IVisitesService visiteService) {
		this.visiteService = visiteService;
	}
	
	@RequestMapping(value="/visites",method=RequestMethod.GET,produces="application/json")
	public List<Visite> getAllVisiteWS(){
		return visiteService.getAllVisiteService();
	}
	
	@RequestMapping(value="/visite/{id}",method=RequestMethod.GET,produces="application/json")
	public Visite getVisitebyIdWS(@PathVariable("id") int id){
		return visiteService.getVisitebyIdService(id);
	}
	
	@RequestMapping(value="/add",method=RequestMethod.POST,consumes="application/json")
	public void addVisiteWS(@RequestBody Visite v){
		visiteService.addVisiteService(v);
	}
	
	@RequestMapping(value="/del",method=RequestMethod.GET)
	public void delVisiteWS(@RequestParam("id_param")int id){
		visiteService.delVisiteService(id);
	}
	
	@RequestMapping(value="/update",method=RequestMethod.PUT,consumes="application/json")
	public void updateVisiteWS(@RequestBody Visite v){
		visiteService.updateVisiteService(v);
	}
}
