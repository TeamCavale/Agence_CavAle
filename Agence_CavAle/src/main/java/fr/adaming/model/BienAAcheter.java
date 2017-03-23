package fr.adaming.model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

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
import javax.xml.bind.annotation.XmlTransient;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

/**
 * 
 * @author inti0295
 *
 */
@Entity
@Table(name = "biensAAcheter")
@XmlRootElement
public class BienAAcheter extends BienImmo implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column(name = "prixAchat_ba")
	private double prixAchat;

	// a restaurer , correcte, impec
	@Column(name = "etat_ba")
	private String etat;
	
	@ManyToOne
	@JoinColumn(name = "fk_cs", referencedColumnName = "id_cs")
	private ClasseStandard classeStandard;

	@OneToOne(mappedBy = "bienAAcheter")
	private Adresse adresse;

	@OneToMany(mappedBy = "bienAAcheter", fetch=FetchType.EAGER)
	@Fetch(value=FetchMode.SUBSELECT)
	private List<Visite> listeVisites;

	@OneToOne(mappedBy = "bienAAcheter")
	private Contrat contrat;
	
	@ManyToOne
	@JoinColumn(name="fk_prop",referencedColumnName="id_prop")
	private Proprietaire proprietaire;

	public BienAAcheter() {
		super();
	}

	public BienAAcheter(int id, String statut, Date dateSoumission, Date dateDispo, double revenuCadastral,
			double prixAchat, String etat) {
		super(id, statut, dateSoumission, dateDispo, revenuCadastral);
		this.prixAchat = prixAchat;
		this.etat = etat;
	}

	public BienAAcheter(String statut, Date dateSoumission, Date dateDispo, double revenuCadastral, double prixAchat,
			String etat) {
		super(statut, dateSoumission, dateDispo, revenuCadastral);
		this.prixAchat = prixAchat;
		this.etat = etat;
	}

	@XmlElement
	public double getPrixAchat() {
		return prixAchat;
	}

	public void setPrixAchat(double prixAchat) {
		this.prixAchat = prixAchat;
	}

	@XmlElement
	public String getEtat() {
		return etat;
	}

	public void setEtat(String etat) {
		this.etat = etat;
	}

	@XmlTransient
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

	@XmlElement
	public List<Visite> getListeVisites() {
		return listeVisites;
	}

	public void setListeVisites(List<Visite> listeVisites) {
		this.listeVisites = listeVisites;
	}

	@XmlTransient
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
