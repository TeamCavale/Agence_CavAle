package fr.adaming.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fr.adaming.dao.IVisiteDao;
import fr.adaming.model.Visite;

@Service
@Transactional
public class VisiteServiceImpl implements IVisitesService {

	@Autowired
	public IVisiteDao visiteDao;
	
	

	public void setVisiteDao(IVisiteDao visiteDao) {
		this.visiteDao = visiteDao;
	}

	@Override
	public List<Visite> getAllVisiteService() {
		// TODO Auto-generated method stub
		return visiteDao.getAllVisiteDao();
	}

	@Override
	public Visite getVisitebyIdService(int id) {
		// TODO Auto-generated method stub
		return visiteDao.getVisitebyIdDao(id);
	}

	@Override
	public void addVisiteService(Visite v) {
//mise en place de la condition d'ajout (ajout impossible si meme bien et meme heure)
		int service=0;
		List<Visite> listVisite=visiteDao.getAllVisiteDao();
		
		System.out.println(v.getBienAAcheter().getId());
		System.out.println(v.getDate());
		for (Visite visite : listVisite) {
			System.out.println(visite.getBienAAcheter().getId());
			System.out.println(visite.getDate());
			if((visite.getBienAAcheter().getId()==v.getBienAAcheter().getId() || visite.getBienALouer().getId()==v.getBienALouer().getId() ) && visite.getDate()==v.getDate() ){
				
				service=1;
			}
		}
		System.out.println(service);
		if(service==0){
			visiteDao.addVisiteDao(v);
		}else{
			System.out.println("ajout impossible");
		}
	}
		
		
	

	@Override
	public void delVisiteService(int id) {

		visiteDao.delVisiteDao(id);

	}

	@Override
	public void updateVisiteService(Visite v) {

		visiteDao.updateVisiteDao(v);

	}

}
