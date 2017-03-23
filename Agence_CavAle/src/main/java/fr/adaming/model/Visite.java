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
@Table(name = "visites")
@XmlRootElement
public class Visite implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_vi")
	private int id;

	@Column(name = "date_vi")
	private Date date;

	@ManyToOne
	@JoinColumn(name = "fk_cl", referencedColumnName = "id_cl")
	private Client client;

	@ManyToOne
	@JoinColumn(name = "fk_ag", referencedColumnName = "id_ag")
	private Agent agent;

	@ManyToOne
	@JoinColumn(name = "fk_bl", referencedColumnName = "id_bi")
	private BienALouer bienALouer;

	@ManyToOne
	@JoinColumn(name = "fk_ba", referencedColumnName = "id_bi")
	private BienAAcheter bienAAcheter;

	public Visite() {
		super();
	}

	public Visite(int id, Date date) {
		super();
		this.id = id;
		this.date = date;
	}

	public Visite(Date date) {
		super();
		this.date = date;
	}

	@XmlElement
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@XmlElement
	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	@XmlElement
	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	@XmlTransient
	public Agent getAgent() {
		return agent;
	}

	public void setAgent(Agent agent) {
		this.agent = agent;
	}

	@XmlTransient
	public BienALouer getBienALouer() {
		return bienALouer;
	}

	public void setBienALouer(BienALouer bienALouer) {
		this.bienALouer = bienALouer;
	}

	@XmlTransient
	public BienAAcheter getBienAAcheter() {
		return bienAAcheter;
	}

	public void setBienAAcheter(BienAAcheter bienAAcheter) {
		this.bienAAcheter = bienAAcheter;
	}

}
