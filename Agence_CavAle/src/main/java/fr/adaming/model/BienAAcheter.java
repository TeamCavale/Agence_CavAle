package fr.adaming.model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

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

	@OneToMany(mappedBy = "bienAAcheter")
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

	public double getPrixAchat() {
		return prixAchat;
	}

	public void setPrixAchat(double prixAchat) {
		this.prixAchat = prixAchat;
	}

	public String getEtat() {
		return etat;
	}

	public void setEtat(String etat) {
		this.etat = etat;
	}

	public ClasseStandard getClasseStandard() {
		return classeStandard;
	}

	public void setClasseStandard(ClasseStandard classeStandard) {
		this.classeStandard = classeStandard;
	}

	public Adresse getAdresse() {
		return adresse;
	}

	public void setAdresse(Adresse adresse) {
		this.adresse = adresse;
	}

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

	public Proprietaire getProprietaire() {
		return proprietaire;
	}

	public void setProprietaire(Proprietaire proprietaire) {
		this.proprietaire = proprietaire;
	}
	

}
