package com.metinkuzey.rentacar.exception;

public class BusinessException extends RuntimeException{
    public BusinessException(String businessException){
        super(businessException);
    }
}
