package com.metinkuzey.rentacar.business.requests;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateBrandRequest {
    private int brandId;
    @NotBlank
    @NotNull
    @Size(min=3,max=20)
    private String name;
}
