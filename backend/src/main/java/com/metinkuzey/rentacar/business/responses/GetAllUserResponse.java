package com.metinkuzey.rentacar.business.responses;

import com.metinkuzey.rentacar.entities.concretes.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetAllUserResponse {
    private Integer id;
    private String firstname;
    private String lastname;
    private String email;
    private Role role;
}
