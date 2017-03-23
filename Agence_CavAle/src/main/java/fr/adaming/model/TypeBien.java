package fr.adaming.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
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
@Table(name = "typeBiens")
@XmlRootElement
public class TypeBien implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_tb")
	private int id;

	@Column(name = "categorie_tb")
	// Habitation ou commercial
	private String categorie;

	@Column(name = "typeDeBien_tb")
	private String typeDeBien;

	@OneToOne
	@JoinColumn(name = "fk_cs", referencedColumnName = "id_cs")
	private ClasseStandard classeStandard;

	public TypeBien() {
		super();
	}

	public TypeBien(String categorie, String typeDeBien) {
		super();
		this.categorie = categorie;
		this.typeDeBien = typeDeBien;
	}

	public TypeBien(int id, String categorie, String typeDeBien) {
		super();
		this.id = id;
		this.categorie = categorie;
		this.typeDeBien = typeDeBien;
	}

	@XmlElement
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@XmlElement
	public String getCategorie() {
		return categorie;
	}

	public void setCategorie(String categorie) {
		this.categorie = categorie;
	}

	@XmlElement
	public String getTypeDeBien() {
		return typeDeBien;
	}

	public void setTypeDeBien(String typeDeBien) {
		this.typeDeBien = typeDeBien;
	}

	@XmlTransient
	public ClasseStandard getClasseStandard() {
		return classeStandard;
	}

	public void setClasseStandard(ClasseStandard classeStandard) {
		this.classeStandard = classeStandard;
	}

}
