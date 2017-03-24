package fr.adaming.service;

import java.util.List;

import fr.adaming.model.BienAAcheter;
import fr.adaming.model.BienALouer;
import fr.adaming.model.BienImmo;

public interface IBienImmoService {
	
	public List<BienAAcheter> getAllBienAAcheter();

	public List<BienALouer> getAllBienALouer();
	
	public void addBienImmo(BienImmo bienImmo);
	
	public void delBienAAcheter(int id);
	
	public void delBienALouer(int id);
	
	public void updateBienAAcheter(BienAAcheter bienImmo);
	
	public void updateBienALouer(BienALouer bienImmo);

	public BienAAcheter getBienAAcheterById(int id);
	
	public BienALouer getBienALouerById(int id);
}
