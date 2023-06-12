package com.metinkuzey.rentacar.business.responses;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.metinkuzey.rentacar.entities.concretes.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {

    @JsonProperty("access_token")
    private String accessToken;
    @JsonProperty("refresh_token")
    private String refreshToken;

    @JsonProperty("user_role")
    private Role role;
}
