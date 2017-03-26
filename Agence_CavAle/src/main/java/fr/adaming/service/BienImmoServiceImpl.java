package fr.adaming.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fr.adaming.dao.IBienImmoDao;
import fr.adaming.model.Adresse;
import fr.adaming.model.BienAAcheter;
import fr.adaming.model.BienALouer;
import fr.adaming.model.BienImmo;
import fr.adaming.model.Client;
import fr.adaming.model.Contrat;
import fr.adaming.model.Proprietaire;

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
		if (adresse != null) {
			adresse.setBienAAcheter(bienImmo);
			bienImmo.setAdresse(adresse);
		}
		
		Contrat contrat = bienImmo.getContrat();
		if(contrat != null){
			Client client = contrat.getClient();
			if(client != null){
				List<Contrat> lc = client.getListeContrats();
				if(lc == null){
					lc = new ArrayList<>();
				}
				lc.add(contrat);
				client.setListeContrats(lc);
				contrat.setClient(client);
			}
			
			contrat.setBienAAcheter(bienImmo);
			bienImmo.setContrat(contrat);
		}
		
		Proprietaire proprietaire = bienImmo.getProprietaire();
		if(proprietaire != null){
			List<BienAAcheter> lbal = proprietaire.getListeBiensAAcheter();
			if(lbal == null){
				lbal = new ArrayList<>();
			}
			lbal.add(bienImmo);
			proprietaire.setListeBiensAAcheter(lbal);
			bienImmo.setProprietaire(proprietaire);
		}
		bienImmoDao.addBienImmoAchat(bienImmo);
	}

	@Override
	public void addBienImmoLocation(BienALouer bienImmo) {
		Adresse adresse = bienImmo.getAdresse();
		if (adresse != null) {
			adresse.setBienALouer(bienImmo);
			bienImmo.setAdresse(adresse);
		}
		
		Contrat contrat = bienImmo.getContrat();
		if(contrat != null){			
			Client client = contrat.getClient();
			if(client != null){
				List<Contrat> lc = client.getListeContrats();
				if(lc == null){
					lc = new ArrayList<>();
				}
				lc.add(contrat);
				client.setListeContrats(lc);
				contrat.setClient(client);
			}
			
			contrat.setBienALouer(bienImmo);
			bienImmo.setContrat(contrat);
		}
		
		Proprietaire proprietaire = bienImmo.getProprietaire();
		if(proprietaire != null){
			List<BienALouer> lbal = proprietaire.getListeBiensALouer();
			if(lbal == null){
				lbal = new ArrayList<>();
			}
			lbal.add(bienImmo);
			proprietaire.setListeBiensALouer(lbal);
			bienImmo.setProprietaire(proprietaire);
		}
		
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
		if (adresse != null) {
			adresse.setBienAAcheter(bienImmo);
			bienImmo.setAdresse(adresse);
		}
		
		Contrat contrat = bienImmo.getContrat();
		if(contrat != null){
			Client client = contrat.getClient();
			if(client != null){
				List<Contrat> lc = client.getListeContrats();
				if(lc == null){
					lc = new ArrayList<>();
				}
				lc.add(contrat);
				client.setListeContrats(lc);
				contrat.setClient(client);
			}
			
			contrat.setBienAAcheter(bienImmo);
			bienImmo.setContrat(contrat);
		}
		
		Proprietaire proprietaire = bienImmo.getProprietaire();
		if(proprietaire != null){
			List<BienAAcheter> lbal = proprietaire.getListeBiensAAcheter();
			if(lbal == null){
				lbal = new ArrayList<>();
			}
			lbal.add(bienImmo);
			proprietaire.setListeBiensAAcheter(lbal);
			bienImmo.setProprietaire(proprietaire);
		}
		bienImmoDao.updateBienAAcheter(bienImmo);

	}

	@Override
	public void updateBienALouer(BienALouer bienImmo) {
		Adresse adresse = bienImmo.getAdresse();
		if (adresse != null) {
			adresse.setBienALouer(bienImmo);
			bienImmo.setAdresse(adresse);
		}
		
		Contrat contrat = bienImmo.getContrat();
		if(contrat != null){
			Client client = contrat.getClient();
			if(client != null){
				List<Contrat> lc = client.getListeContrats();
				if(lc == null){
					lc = new ArrayList<>();
				}
				lc.add(contrat);
				client.setListeContrats(lc);
				contrat.setClient(client);
			}
			
			contrat.setBienALouer(bienImmo);
			bienImmo.setContrat(contrat);
		}
		
		Proprietaire proprietaire = bienImmo.getProprietaire();
		if(proprietaire != null){
			List<BienALouer> lbal = proprietaire.getListeBiensALouer();
			if(lbal == null){
				lbal = new ArrayList<>();
			}
			lbal.add(bienImmo);
			proprietaire.setListeBiensALouer(lbal);
			bienImmo.setProprietaire(proprietaire);
		}
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
