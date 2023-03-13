package com.metinkuzey.rentacar.entities.concretes;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Table;

@Table(name="customers")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Customer {
}
