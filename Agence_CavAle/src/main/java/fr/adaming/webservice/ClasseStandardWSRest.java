package fr.adaming.webservice;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import fr.adaming.model.ClasseStandard;
import fr.adaming.model.Client;
import fr.adaming.service.IClasseStandardService;

@RestController
@RequestMapping("classeStandard")
public class ClasseStandardWSRest {

	@Autowired
	private IClasseStandardService classeStandardService;
//setter injection
	public void setClasseStandardService(IClasseStandardService classeStandardService) {
		this.classeStandardService = classeStandardService;
	}
	
	//methodes
		@RequestMapping(value="/classeStandards", method=RequestMethod.GET, produces="application/json")
		public List<ClasseStandard> getAllClasseStandardRest(){
			
			return classeStandardService.getAllClasseStandardService();
			}

		@RequestMapping(value="/add", method=RequestMethod.POST, consumes="application/json")
		public void addClasseStandardRest(@RequestBody ClasseStandard classeStandard){

			classeStandardService.addClasseStandardService(classeStandard);
		}
		@RequestMapping(value="/classeStandard/{id_param}", method=RequestMethod.GET, produces="application/json")
		public ClasseStandard getClasseStandardByIdRest(@PathVariable("id_param") int id){
			
			return classeStandardService.getClasseStandardByIdService(id);
			}
		@RequestMapping(value="/update", method=RequestMethod.PUT, consumes="application/json")
		public void updateClasseStandardRest(@RequestBody ClasseStandard classeStandard){
			classeStandardService.updateClasseStandardService(classeStandard);
		}
		
		@RequestMapping(value="/delete", method=RequestMethod.GET)
		public void deleteClasseStandardRest(@RequestParam("id_param")int id){
			classeStandardService.deleteClasseStandardService(id);
		}
	
}
