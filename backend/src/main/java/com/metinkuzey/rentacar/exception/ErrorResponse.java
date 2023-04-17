package com.metinkuzey.rentacar.exception;

import lombok.AllArgsConstructor;

import java.util.List;

@AllArgsConstructor
public class ErrorResponse {
    private String message;
    private List<String> details;
}
