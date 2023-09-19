package com.metinkuzey.rentacar.security.config;

import com.metinkuzey.rentacar.business.requests.AuthenticationRequest;
import com.metinkuzey.rentacar.business.requests.RegisterRequest;
import com.metinkuzey.rentacar.business.responses.AuthenticationResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.ResponseEntity;

import java.io.IOException;

public interface AuthenticationService {

    AuthenticationResponse register(RegisterRequest request);

    AuthenticationResponse authenticate(AuthenticationRequest request);

    AuthenticationResponse authenticateWithCookie(AuthenticationRequest request, HttpServletResponse response);

    void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException;

    ResponseEntity<?> refreshTokenWithCookie(String refreshToken);

}
