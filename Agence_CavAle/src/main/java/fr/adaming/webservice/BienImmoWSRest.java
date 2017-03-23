package fr.adaming.webservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import fr.adaming.model.BienAAcheter;
import fr.adaming.model.BienALouer;
import fr.adaming.service.IBienImmoService;

@RestController
@RequestMapping("/bienimmo")
public class BienImmoWSRest {

	@Autowired
	IBienImmoService bienImmoService;

	public void setBienImmoService(IBienImmoService bienImmoService) {
		this.bienImmoService = bienImmoService;
	}

	@RequestMapping(value = "/achat/getAll", method = RequestMethod.GET, produces = "application/json")
	public List<BienAAcheter> getAllBienAAcheterWS() {

		return bienImmoService.getAllBienAAcheter();
	}

	@RequestMapping(value = "/location/getAll", method = RequestMethod.GET, produces = "application/json")
	public List<BienALouer> getAllBienALouerWS() {

		return bienImmoService.getAllBienALouer();
	}

	@RequestMapping(value = "/achat/add", method = RequestMethod.POST, consumes = "application/json")
	public void addBienAAcheter(@RequestBody BienAAcheter bienImmoAcheter) {
		bienImmoService.addBienImmo(bienImmoAcheter);
	}

	@RequestMapping(value = "/location/add", method = RequestMethod.POST, consumes = "application/json")
	public void addBienALouer(@RequestBody BienALouer bienImmoLouer) {
		bienImmoService.addBienImmo(bienImmoLouer);
	}
	
	@RequestMapping(value = "/achat/del/{id}", method = RequestMethod.DELETE)
	public void delBienAAcheter(@PathVariable int id) {
		bienImmoService.delBienAAcheter(id);
	}
	
	@RequestMapping(value = "/location/del/{id}", method = RequestMethod.DELETE)
	public void delBienALouer(@PathVariable int id) {
		bienImmoService.delBienALouer(id);
	}
	
	@RequestMapping(value = "/achat/update", method = RequestMethod.PUT, consumes = "application/json")
	public void updateBienAAcheter(@RequestBody BienAAcheter bienImmoAcheter) {
		bienImmoService.updateBienAAcheter(bienImmoAcheter);
	}

	@RequestMapping(value = "/location/update", method = RequestMethod.PUT, consumes = "application/json")
	public void updateBienALouer(@RequestBody BienALouer bienImmoLouer) {
		System.out.println(bienImmoLouer);
		bienImmoService.updateBienALouer(bienImmoLouer);
	}

}
