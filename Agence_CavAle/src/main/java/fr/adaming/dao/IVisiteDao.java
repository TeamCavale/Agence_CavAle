package fr.adaming.dao;

import java.util.List;

import fr.adaming.model.Visite;



public interface IVisiteDao {

public List<Visite> getAllVisiteDao();
	
	public Visite getVisitebyIdDao(int id);
	
	public void addVisiteDao(Visite v);
	
	public void delVisiteDao(int id);
	
	public void updateVisiteDao(Visite v);
}
