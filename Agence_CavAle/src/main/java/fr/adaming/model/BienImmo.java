package fr.adaming.model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MappedSuperclass;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * 
 * @author inti0295
 *
 */
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@MappedSuperclass
@XmlRootElement
public class BienImmo implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_bi")
	private int id;

	// dispo, loué, acheté
	@Column(name = "statut_bi")
	private String statut;

	// date ajout db
	@Column(name = "dateSoumission_bi")
	private Date dateSoumission;

	@Column(name = "dateDispo_bi")
	private Date dateDispo;

	@Column(name = "revenuCadastral_bi")
	private double revenuCadastral;


	public BienImmo() {
		super();
	}

	public BienImmo(String statut, Date dateSoumission, Date dateDispo, double revenuCadastral) {
		super();
		this.statut = statut;
		this.dateSoumission = dateSoumission;
		this.dateDispo = dateDispo;
		this.revenuCadastral = revenuCadastral;
	}

	public BienImmo(int id, String statut, Date dateSoumission, Date dateDispo, double revenuCadastral) {
		super();
		this.id = id;
		this.statut = statut;
		this.dateSoumission = dateSoumission;
		this.dateDispo = dateDispo;
		this.revenuCadastral = revenuCadastral;
	}

	@XmlElement
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@XmlElement
	public String getStatut() {
		return statut;
	}

	public void setStatut(String statut) {
		this.statut = statut;
	}

	@XmlElement
	public Date getDateSoumission() {
		return dateSoumission;
	}

	public void setDateSoumission(Date dateSoumission) {
		this.dateSoumission = dateSoumission;
	}

	@XmlElement
	public Date getDateDispo() {
		return dateDispo;
	}

	public void setDateDispo(Date dateDispo) {
		this.dateDispo = dateDispo;
	}

	@XmlElement
	public double getRevenuCadastral() {
		return revenuCadastral;
	}

	public void setRevenuCadastral(double revenuCadastral) {
		this.revenuCadastral = revenuCadastral;
	}


}
