package fr.adaming.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * 
 * @author inti0295
 *
 */
@Entity
@Table(name = "proprietaires")
@XmlRootElement
public class Proprietaire implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_prop")
	private int id;

	@Column(name = "nom_prop")
	private String nom;

	@Column(name = "tel_prive_prop")
	private String tel_prive;

	@Column(name = "tel_travail_prop")
	private String tel_travail;

	@OneToOne(mappedBy = "proprietaire")
	private Adresse adresse;

	@OneToMany(mappedBy="proprietaire")
	private List<BienALouer> listeBiensALouer;
	
	@OneToMany(mappedBy="proprietaire")
	private List<BienAAcheter> listeBiensAAcheter;
	
	public Proprietaire() {
		super();
	}

	public Proprietaire(String nom, String tel_prive, String tel_travail) {
		super();
		this.nom = nom;
		this.tel_prive = tel_prive;
		this.tel_travail = tel_travail;
	}

	public Proprietaire(int id, String nom, String tel_prive, String tel_travail) {
		super();
		this.id = id;
		this.nom = nom;
		this.tel_prive = tel_prive;
		this.tel_travail = tel_travail;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getTel_prive() {
		return tel_prive;
	}

	public void setTel_prive(String tel_prive) {
		this.tel_prive = tel_prive;
	}

	public String getTel_travail() {
		return tel_travail;
	}

	public void setTel_travail(String tel_travail) {
		this.tel_travail = tel_travail;
	}

	public Adresse getAdresse() {
		return adresse;
	}

	public void setAdresse(Adresse adresse) {
		this.adresse = adresse;
	}

}
