package com.metinkuzey.rentacar.entities.concretes;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Date;

@Table(name="customers")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="customer_id")
    private int customerId;

    @Column(name="user_name",unique = true)
    private String userName;

    @Column(name="first_name")
    private String firstName;

    @Column(name="last_name")
    private String lastName;

    @Column(name="email",unique = true)
    private String email;

    @Column(name="phone",unique = true)
    private String phone;

    @Column(name="password")
    private String password;
    @Column(name="is_active")
    private boolean isActive;
    @Column(name="register_date")
    private Date registerDate;

}
