package fr.adaming.model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import com.fasterxml.jackson.annotation.JsonIgnore;


/**
 * 
 * @author inti0295
 *
 */
@Entity
@Table(name = "biensALouer")
@XmlRootElement
public class BienALouer extends BienImmo implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column(name="caution_bl")
	private double caution;

	@Column(name="loyer_bl")
	private double loyer;

	@Column(name="charges_bl")
	private double charges;

	@Column(name="typeBail_bl")
	private String typeBail;

	@Column(name="garniture_bl")
	private String garniture;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name = "fk_cs", referencedColumnName = "id_cs")
	private ClasseStandard classeStandard;

	@OneToOne(mappedBy = "bienALouer",fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	private Adresse adresse;

	@OneToMany(mappedBy = "bienALouer", fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@Fetch(value=FetchMode.SUBSELECT)
	private List<Visite> listeVisites;

	@OneToOne(mappedBy = "bienALouer",fetch=FetchType.LAZY, cascade=CascadeType.ALL)
	private Contrat contrat;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="fk_prop",referencedColumnName="id_prop")
	private Proprietaire proprietaire;
	
	

	public BienALouer() {
		super();
	}

	public BienALouer(int id, String statut, Date dateSoumission, Date dateDispo, double revenuCadastral,
			double caution, double loyer, double charges, String typeBail, String garniture) {
		super(id, statut, dateSoumission, dateDispo, revenuCadastral);
		this.caution = caution;
		this.loyer = loyer;
		this.charges = charges;
		this.typeBail = typeBail;
		this.garniture = garniture;
	}

	public BienALouer(String statut, Date dateSoumission, Date dateDispo, double revenuCadastral, double caution,
			double loyer, double charges, String typeBail, String garniture) {
		super(statut, dateSoumission, dateDispo, revenuCadastral);
		this.caution = caution;
		this.loyer = loyer;
		this.charges = charges;
		this.typeBail = typeBail;
		this.garniture = garniture;
	}

	@XmlElement
	public double getCaution() {
		return caution;
	}

	public void setCaution(double caution) {
		this.caution = caution;
	}

	@XmlElement
	public double getLoyer() {
		return loyer;
	}

	public void setLoyer(double loyer) {
		this.loyer = loyer;
	}

	@XmlElement
	public double getCharges() {
		return charges;
	}

	public void setCharges(double charges) {
		this.charges = charges;
	}

	@XmlElement
	public String getTypeBail() {
		return typeBail;
	}

	public void setTypeBail(String typeBail) {
		this.typeBail = typeBail;
	}

	@XmlElement
	public String getGarniture() {
		return garniture;
	}

	public void setGarniture(String garniture) {
		this.garniture = garniture;
	}

	public ClasseStandard getClasseStandard() {
		return classeStandard;
	}

	public void setClasseStandard(ClasseStandard classeStandard) {
		this.classeStandard = classeStandard;
	}

	@XmlElement
	public Adresse getAdresse() {
		return adresse;
	}

	public void setAdresse(Adresse adresse) {
		this.adresse = adresse;
	}

	@JsonIgnore
	public List<Visite> getListeVisites() {
		return listeVisites;
	}

	public void setListeVisites(List<Visite> listeVisites) {
		this.listeVisites = listeVisites;
	}

	public Contrat getContrat() {
		return contrat;
	}

	public void setContrat(Contrat contrat) {
		this.contrat = contrat;
	}

	@XmlElement
	public Proprietaire getProprietaire() {
		return proprietaire;
	}

	public void setProprietaire(Proprietaire proprietaire) {
		this.proprietaire = proprietaire;
	}

}
