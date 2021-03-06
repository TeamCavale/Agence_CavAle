package fr.adaming.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * 
 * @author inti0295
 *
 */

@Entity
@Table(name = "adresses")
@XmlRootElement
public class Adresse implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_adresse")
	private int id;

	@Column(name = "rue_adr")
	private String rue;
	
	@Column(name = "codePostale_adr")
	private String codePostal;
	
	@Column(name = "ville_adr")
	private String ville;
	
	@OneToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="fk_prop", referencedColumnName="id_prop")
	private Proprietaire proprietaire;
	
	@OneToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="fk_cl", referencedColumnName="id_cl")
	private Client client;
	
	@OneToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="fk_bl",referencedColumnName="id_bi")
	private BienALouer bienALouer;
	
	@OneToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="fk_ba",referencedColumnName="id_bi")
	private BienAAcheter bienAAcheter;

	public Adresse() {
		super();
	}

	public Adresse(String rue, String codePostal, String ville) {
		super();
		this.rue = rue;
		this.codePostal = codePostal;
		this.ville = ville;
	}

	public Adresse(int id, String rue, String codePostal, String ville) {
		super();
		this.id = id;
		this.rue = rue;
		this.codePostal = codePostal;
		this.ville = ville;
	}

	@XmlElement
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@XmlElement
	public String getRue() {
		return rue;
	}

	public void setRue(String rue) {
		this.rue = rue;
	}

	@XmlElement
	public String getCodePostal() {
		return codePostal;
	}

	public void setCodePostal(String codePostal) {
		this.codePostal = codePostal;
	}

	@XmlElement
	public String getVille() {
		return ville;
	}

	public void setVille(String ville) {
		this.ville = ville;
	}

	@JsonIgnore
	public Proprietaire getProprietaire() {
		return proprietaire;
	}

	public void setProprietaire(Proprietaire proprietaire) {
		this.proprietaire = proprietaire;
	}

	@JsonIgnore
	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	@JsonIgnore
	public BienALouer getBienALouer() {
		return bienALouer;
	}

	public void setBienALouer(BienALouer bienALouer) {
		this.bienALouer = bienALouer;
	}

	@JsonIgnore
	public BienAAcheter getBienAAcheter() {
		return bienAAcheter;
	}

	public void setBienAAcheter(BienAAcheter bienAAcheter) {
		this.bienAAcheter = bienAAcheter;
	}


	

}
