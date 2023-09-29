package com.metinkuzey.rentacar.api.controllers;

import com.metinkuzey.rentacar.business.requests.AuthenticationRequest;
import com.metinkuzey.rentacar.business.requests.RegisterRequest;
import com.metinkuzey.rentacar.business.responses.AuthenticationResponse;
import com.metinkuzey.rentacar.security.config.AuthenticationService;
import com.metinkuzey.rentacar.util.StandardResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@Tag(name = "Auth", description = "Auth management APIs")
public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody RegisterRequest request) {
        return new ResponseEntity(new StandardResponse("200", "Done", service.register(request)), HttpStatus.OK);
    }

    @PostMapping("/register-cookie")
    public ResponseEntity registerWithCookie(@RequestBody RegisterRequest request, HttpServletResponse response) {
        return new ResponseEntity(new StandardResponse("200", "Done", service.registerWithCookie(request,response)), HttpStatus.OK);
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        return new ResponseEntity(new StandardResponse("200", "Done", service.authenticate(request)), HttpStatus.OK);
    }

    @PostMapping("/authenticate-cookie")
    public ResponseEntity<AuthenticationResponse> authenticateWithCookie(@RequestBody AuthenticationRequest request, HttpServletResponse response) {
        return new ResponseEntity(new StandardResponse("200", "Done", service.authenticateWithCookie(request, response)), HttpStatus.OK);
    }

    @PostMapping("/refresh-token")
    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
        service.refreshToken(request, response);
    }

    @PostMapping("/refresh-token-cookie")
    public ResponseEntity<?> refreshTokenWithCookie(@CookieValue(name = "refreshToken", required = false) String refreshToken) {
        // Check if the refreshToken is null or empty
        if (refreshToken == null || refreshToken.isEmpty()) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Refresh token not provided");
        }

        return service.refreshTokenWithCookie(refreshToken);
    }

}