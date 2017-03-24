package fr.adaming.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fr.adaming.dao.IBienImmoDao;
import fr.adaming.model.Adresse;
import fr.adaming.model.BienAAcheter;
import fr.adaming.model.BienALouer;
import fr.adaming.model.BienImmo;

@Service
@Transactional
public class BienImmoServiceImpl implements IBienImmoService {

	@Autowired
	IBienImmoDao bienImmoDao;

	public void setBienImmoDao(IBienImmoDao bienImmoDao) {
		this.bienImmoDao = bienImmoDao;
	}
	
	@Override
	public List<BienAAcheter> getAllBienAAcheter() {
		return bienImmoDao.getAllBienAAcheter();
	}

	@Override
	public List<BienALouer> getAllBienALouer() {
		
		return bienImmoDao.getAllBienALouer();
	}

	@Override
	public void addBienImmoAchat(BienAAcheter bienImmo) {
		Adresse adresse = bienImmo.getAdresse();
		adresse.setBienAAcheter(bienImmo);
		bienImmo.setAdresse(adresse);
		bienImmoDao.addBienImmoAchat(bienImmo);
	}
	
	@Override
	public void addBienImmoLocation(BienALouer bienImmo) {
		Adresse adresse = bienImmo.getAdresse();
		adresse.setBienALouer(bienImmo);
		bienImmo.setAdresse(adresse);
		bienImmoDao.addBienImmoLocation(bienImmo);
	}

	@Override
	public void delBienAAcheter(int id) {
		bienImmoDao.delBienAAcheter(id);
	}

	@Override
	public void delBienALouer(int id) {
		bienImmoDao.delBienALouer(id);
		
	}

	@Override
	public void updateBienAAcheter(BienAAcheter bienImmo) {
		Adresse adresse = bienImmo.getAdresse();
		adresse.setBienAAcheter(bienImmo);
		bienImmo.setAdresse(adresse);
		bienImmoDao.updateBienAAcheter(bienImmo);
		
	}
	
	@Override
	public void updateBienALouer(BienALouer bienImmo) {
		Adresse adresse = bienImmo.getAdresse();
		adresse.setBienALouer(bienImmo);
		bienImmo.setAdresse(adresse);
		bienImmoDao.updateBienALouer(bienImmo);
		
	}

	@Override
	public BienAAcheter getBienAAcheterById(int id) {
		return bienImmoDao.getBienAAcheterById(id);
	}

	@Override
	public BienALouer getBienALouerById(int id) {
		return bienImmoDao.getBienALouerById(id);
	}

	

}
