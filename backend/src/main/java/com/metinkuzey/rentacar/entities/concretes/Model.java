package com.metinkuzey.rentacar.entities.concretes;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.GenerationType;



@Table(name="models")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Model {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="model_id")
    private int modelId;

    @Column(name="brand_id")
    private int brandId;

    @Column(name="model_name",unique = true)
    private String modelName;

    @Column(name="model_year")
    private int modelYear;

}
