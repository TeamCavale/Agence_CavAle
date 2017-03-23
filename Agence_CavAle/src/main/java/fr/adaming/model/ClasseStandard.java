package fr.adaming.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
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
@Table(name = "classeStandards")
@XmlRootElement
public class ClasseStandard implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_cs")
	private int id;

	// Appelation de la gamme de bien (= nom de la categorie)
	@Column(name = "code_cs")
	private String code;

	@Column(name = "typeOffre_cs")
	private String typeOffre;

	@Column(name = "prixMax_cs")
	private double prixMax;

	@Column(name = "superficieMin_cs")
	private String superficieMin;
	
	@OneToOne(mappedBy="classeStandard")
	private TypeBien typeBien;
	
	@ManyToMany(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinTable(name="jointure_cs_cl", 
	joinColumns=@JoinColumn(name="fk_cl"),
	inverseJoinColumns=@JoinColumn(name="fk_cs"))
	@Fetch(value = FetchMode.SUBSELECT)
	private List<Client> listeClients;
	
	@OneToMany(mappedBy="classeStandard", fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@Fetch(value = FetchMode.SUBSELECT)
	private List<BienAAcheter> listeBiensAAcheter;
	
	@OneToMany(mappedBy="classeStandard", fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@Fetch(value = FetchMode.SUBSELECT)
	private List<BienALouer> listeBiensALouer;

	public ClasseStandard() {
		super();
	}

	public ClasseStandard(String code, String typeOffre, double prixMax, String superficieMin) {
		super();
		this.code = code;
		this.typeOffre = typeOffre;
		this.prixMax = prixMax;
		this.superficieMin = superficieMin;
	}

	public ClasseStandard(int id, String code, String typeOffre, double prixMax, String superficieMin) {
		super();
		this.id = id;
		this.code = code;
		this.typeOffre = typeOffre;
		this.prixMax = prixMax;
		this.superficieMin = superficieMin;
	}

	@XmlElement
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@XmlElement
	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	@XmlElement
	public String getTypeOffre() {
		return typeOffre;
	}

	public void setTypeOffre(String typeOffre) {
		this.typeOffre = typeOffre;
	}

	@XmlElement
	public double getPrixMax() {
		return prixMax;
	}

	public void setPrixMax(double prixMax) {
		this.prixMax = prixMax;
	}

	@XmlElement
	public String getSuperficieMin() {
		return superficieMin;
	}

	public void setSuperficieMin(String superficieMin) {
		this.superficieMin = superficieMin;
	}

	@XmlElement
	public TypeBien getTypeBien() {
		return typeBien;
	}

	public void setTypeBien(TypeBien typeBien) {
		this.typeBien = typeBien;
	}

	@XmlElement
	public List<Client> getListeClients() {
		return listeClients;
	}

	public void setListeClients(List<Client> listeClients) {
		this.listeClients = listeClients;
	}

	@JsonIgnore
	public List<BienAAcheter> getListeBiensAAcheter() {
		return listeBiensAAcheter;
	}

	public void setListeBiensAAcheter(List<BienAAcheter> listeBiensAAcheter) {
		this.listeBiensAAcheter = listeBiensAAcheter;
	}

	@JsonIgnore
	public List<BienALouer> getListeBiensALouer() {
		return listeBiensALouer;
	}

	public void setListeBiensALouer(List<BienALouer> listeBiensALouer) {
		this.listeBiensALouer = listeBiensALouer;
	}



}
