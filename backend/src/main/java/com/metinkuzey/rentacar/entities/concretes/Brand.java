package com.metinkuzey.rentacar.entities.concretes;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.persistence.*;


@Table(name="brands")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Brand {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="brand_id")
    private int brandId;

    @Column(name = "brand_name",unique = true)
    private String name;

}
