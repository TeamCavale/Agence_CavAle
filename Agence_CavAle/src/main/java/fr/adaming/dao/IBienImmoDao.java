package fr.adaming.dao;

import java.util.List;

import fr.adaming.model.BienAAcheter;
import fr.adaming.model.BienALouer;
import fr.adaming.model.BienImmo;

public interface IBienImmoDao {
	
	public List<BienAAcheter> getAllBienAAcheter();

	public List<BienALouer> getAllBienALouer();
	
	public void addBienImmo(BienImmo bienImmo);
	

}
