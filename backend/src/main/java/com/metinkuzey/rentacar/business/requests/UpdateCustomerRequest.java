package com.metinkuzey.rentacar.business.requests;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdateCustomerRequest {

    private int customerId;
    private String userName;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private Date registerDate;
    private boolean isActive;
    private String password;
}
