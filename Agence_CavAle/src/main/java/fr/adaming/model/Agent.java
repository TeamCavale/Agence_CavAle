package fr.adaming.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * 
 * @author inti0295
 *
 */

@Entity
@Table(name = "agents")
@XmlRootElement
public class Agent implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_ag")
	private int id;
	
	@Column(name = "nom_ag")
	private String nom;
	
	@Column(name = "mail_ag")
	private String mail;
	
	@Column(name = "telephone_ag")
	private String telephone;
	
	@Column(name = "mdp_ag")
	private String mdp;
	
	@OneToMany(mappedBy="agent")
	private List<Visite> listeVisites;

	public Agent() {
		super();
	}

	public Agent(String nom, String mail, String telephone, String mdp) {
		super();
		this.nom = nom;
		this.mail = mail;
		this.telephone = telephone;
		this.mdp = mdp;
	}

	public Agent(int id, String nom, String mail, String telephone, String mdp) {
		super();
		this.id = id;
		this.nom = nom;
		this.mail = mail;
		this.telephone = telephone;
		this.mdp = mdp;
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

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getMdp() {
		return mdp;
	}

	public void setMdp(String mdp) {
		this.mdp = mdp;
	}

	public List<Visite> getListeVisites() {
		return listeVisites;
	}

	public void setListeVisites(List<Visite> listeVisites) {
		this.listeVisites = listeVisites;
	}

}
