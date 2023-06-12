package com.metinkuzey.rentacar.business.requests;

import com.metinkuzey.rentacar.entities.concretes.enums.Gender;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdateUserRequest {
    private Integer id;
    private String firstname;
    private String lastname;
    private String username;
    private String address;
    private String mobileNumber;
    private Gender gender;
    private String email;
    private String password;
}
