package fr.adaming.dao;

import java.util.List;

import fr.adaming.model.BienAAcheter;
import fr.adaming.model.BienALouer;

public interface IBienImmoDao {

	public List<BienAAcheter> getAllBienAAcheter();

	public List<BienALouer> getAllBienALouer();

	public void addBienImmoAchat(BienAAcheter bienImmo);
	
	public void addBienImmoLocation(BienALouer bienImmo);

	public void delBienAAcheter(int id);

	public void delBienALouer(int id);

	public void updateBienAAcheter(BienAAcheter bienImmo);

	public void updateBienALouer(BienALouer bienImmo);

	public BienAAcheter getBienAAcheterById(int id);

	public BienALouer getBienALouerById(int id);

}
