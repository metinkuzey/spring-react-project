package com.metinkuzey.rentacar.entities.concretes;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.persistence.*;

@Table(name="vehicles")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="vehicle_id")
    private int vehicleId;

    @Column(name="plate_nr",unique = true)
    private String plateNr;

    @Column(name="model_id")
    private int modelId;

    @Column(name="vehicle_picture")
    private String vehiclePicture;

}
