package fr.adaming.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fr.adaming.dao.IContratDao;
import fr.adaming.model.Contrat;

@Service
@Transactional
public class ContratServiceImpl implements IContratService {

	@Autowired
	private IContratDao contratDao;

	
	public void setContratDao(IContratDao contratDao) {
		this.contratDao = contratDao;
	}

	@Override
	public List<Contrat> getAllContratService() {
		
		return contratDao.getAllContratDao();
	}

	@Override
	public Contrat getContratbyIdService(int id) {
		// TODO Auto-generated method stub
		return contratDao.getContratbyIdDao(id);
	}

	@Override
	public void addContratService(Contrat c) {
		
		contratDao.addContratDao(c);

	}

	@Override
	public void delContratService(int id) {
		contratDao.delContratDao(id);

	}

	@Override
	public void updateContratService(Contrat c) {
		contratDao.updateContratDao(c);

	}

}
