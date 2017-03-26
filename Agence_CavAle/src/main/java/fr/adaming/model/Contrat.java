package fr.adaming.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.annotations.ManyToAny;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * 
 * @author inti0295
 *
 */
@Entity
@Table(name = "contrats")
@XmlRootElement
public class Contrat implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_con")
	private int id;

	@Column(name = "prixEffectif_con")
	private double prixEffectif;

	@Column(name = "dateAchat_con")
	private Date dateAchat;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "fk_ag", referencedColumnName = "id_ag")
	private Agent agent;

	@ManyToOne(fetch = FetchType.EAGER)
	@Fetch(value=FetchMode.SELECT)
	@JoinColumn(name = "fk_cl", referencedColumnName = "id_cl")
	private Client client;

	@OneToOne(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
	@Fetch(value = FetchMode.SELECT)
	@JoinColumn(name = "fk_bl", referencedColumnName = "id_bi")
	private BienALouer bienALouer;

	@OneToOne(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
	@Fetch(value = FetchMode.SELECT)
	@JoinColumn(name = "fk_ba", referencedColumnName = "id_bi")
	private BienAAcheter bienAAcheter;

	public Contrat() {
		super();
	}

	public Contrat(double prixEffectif, Date dateAchat) {
		super();
		this.prixEffectif = prixEffectif;
		this.dateAchat = dateAchat;
	}

	public Contrat(int id, double prixEffectif, Date dateAchat) {
		super();
		this.id = id;
		this.prixEffectif = prixEffectif;
		this.dateAchat = dateAchat;
	}

	@XmlElement
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@XmlElement
	public double getPrixEffectif() {
		return prixEffectif;
	}

	public void setPrixEffectif(double prixEffectif) {
		this.prixEffectif = prixEffectif;
	}

	@XmlElement
	public Date getDateAchat() {
		return dateAchat;
	}

	public void setDateAchat(Date dateAchat) {
		this.dateAchat = dateAchat;
	}

	@XmlElement
	public Agent getAgent() {
		return agent;
	}

	public void setAgent(Agent agent) {
		this.agent = agent;
	}

	@XmlElement
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
