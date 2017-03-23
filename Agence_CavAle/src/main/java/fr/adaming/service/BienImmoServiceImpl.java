package fr.adaming.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fr.adaming.dao.IBienImmoDao;
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
	public void addBienImmo(BienImmo bienImmo) {
		bienImmoDao.addBienImmo(bienImmo);
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
		bienImmoDao.updateBienAAcheter(bienImmo);
		
	}
	
	@Override
	public void updateBienALouer(BienALouer bienImmo) {
		bienImmoDao.updateBienALouer(bienImmo);
		
	}

	

}
