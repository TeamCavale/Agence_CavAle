package fr.adaming.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 * 
 * @author inti0295
 *
 */

@Entity
@Table(name = "clients")
@XmlRootElement
public class Client implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_cl")
	private int id;

	@Column(name = "nom_cl")
	private String nom;

	@Column(name = "telephone_cl")
	private String telephone;

	@OneToOne(mappedBy="client")
	private Adresse adresse;

	@ManyToMany(mappedBy="listeClients")
	private List<ClasseStandard> listeClassesStandards;

	@OneToMany(mappedBy="client")
	private List<Contrat> listeContrats;
	
	@OneToMany(mappedBy="client")
	private List<Visite> listeVisites;

	public Client() {
		super();
	}

	public Client(String nom, String telephone) {
		super();
		this.nom = nom;
		this.telephone = telephone;
	}

	public Client(int id, String nom, String telephone) {
		super();
		this.id = id;
		this.nom = nom;
		this.telephone = telephone;
	}
	
	@XmlElement
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@XmlElement
	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	@XmlElement
	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}
	
	@XmlElement
	public Adresse getAdresse() {
		return adresse;
	}

	public void setAdresse(Adresse adresse) {
		this.adresse = adresse;
	}

	@XmlTransient
	public List<ClasseStandard> getListeClassesStandards() {
		return listeClassesStandards;
	}

	public void setListeClassesStandards(List<ClasseStandard> listeClassesStandards) {
		this.listeClassesStandards = listeClassesStandards;
	}

	@XmlTransient
	public List<Contrat> getListeContrats() {
		return listeContrats;
	}

	public void setListeContrats(List<Contrat> listeContrats) {
		this.listeContrats = listeContrats;
	}

	@XmlElement
	public List<Visite> getListeVisites() {
		return listeVisites;
	}
	
	
	public void setListeVisites(List<Visite> listeVisites) {
		this.listeVisites = listeVisites;
	}


}
