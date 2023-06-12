package com.metinkuzey.rentacar.business.requests;

import com.metinkuzey.rentacar.entities.concretes.enums.Gender;
import com.metinkuzey.rentacar.entities.concretes.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private String address;
    private String mobileNumber;
    private Gender gender;
    private Role role;
}
