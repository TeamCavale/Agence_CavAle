package fr.adaming.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fr.adaming.dao.IProprietaireDao;
import fr.adaming.model.Adresse;
import fr.adaming.model.Proprietaire;

/**
 * 
 * @author TeamCavale
 * 
 */
@Service
@Transactional
public class ProprietaireServiceImpl implements IProprietaireService {

	@Autowired
	IProprietaireDao proprioDao;

	public void setProprioDao(IProprietaireDao proprioDao) {
		this.proprioDao = proprioDao;
	}

	@Override
	public List<Proprietaire> getAllProprietaires() {

		return proprioDao.getAllProprietaires();
	}

	@Override
	public void addProprietaire(Proprietaire proprietaire) {
		Adresse adresse = proprietaire.getAdresse();
		if (adresse != null) {
			adresse.setProprietaire(proprietaire);
			proprietaire.setAdresse(adresse);
		}
		proprioDao.addProprietaire(proprietaire);

	}

	@Override
	public void updateProprietaire(Proprietaire proprietaire) {
		Adresse adresse = proprietaire.getAdresse();
		if (adresse != null) {
			adresse.setProprietaire(proprietaire);
			proprietaire.setAdresse(adresse);
		}
		proprioDao.updateProprietaire(proprietaire);

	}

	@Override
	public void deleteProprietaire(int id_proprietaire) {
		proprioDao.deleteProprietaire(id_proprietaire);

	}

	@Override
	public Proprietaire getProprietaireById(int id_proprietaire) {

		return proprioDao.getProprietaireById(id_proprietaire);
	}

}
