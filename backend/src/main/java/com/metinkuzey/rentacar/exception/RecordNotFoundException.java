package com.metinkuzey.rentacar.exception;

public class RecordNotFoundException extends RuntimeException{
    public RecordNotFoundException(String exception){
        super(exception);
    }
}
