package fr.adaming.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

import org.hibernate.annotations.ManyToAny;

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

	@ManyToOne
	@JoinColumn(name="fk_ag", referencedColumnName="id_ag")
	private Agent agent;

	@ManyToOne
	@JoinColumn(name="fk_cl", referencedColumnName="id_cl")
	private Client client;
	
	@OneToOne
	@JoinColumn(name="fk_bl",referencedColumnName="id_bi")
	private BienALouer bienALouer;
	
	@OneToOne
	@JoinColumn(name="fk_ba",referencedColumnName="id_bi")
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

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getPrixEffectif() {
		return prixEffectif;
	}

	public void setPrixEffectif(double prixEffectif) {
		this.prixEffectif = prixEffectif;
	}

	public Date getDateAchat() {
		return dateAchat;
	}

	public void setDateAchat(Date dateAchat) {
		this.dateAchat = dateAchat;
	}

	public Agent getAgent() {
		return agent;
	}

	public void setAgent(Agent agent) {
		this.agent = agent;
	}

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	public BienALouer getBienALouer() {
		return bienALouer;
	}

	public void setBienALouer(BienALouer bienALouer) {
		this.bienALouer = bienALouer;
	}

	public BienAAcheter getBienAAcheter() {
		return bienAAcheter;
	}

	public void setBienAAcheter(BienAAcheter bienAAcheter) {
		this.bienAAcheter = bienAAcheter;
	}

	

}
