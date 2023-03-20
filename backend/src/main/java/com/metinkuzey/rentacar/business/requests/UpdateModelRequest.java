package com.metinkuzey.rentacar.business.requests;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdateModelRequest {
    private int modelId;
    private int brandId;
    private String modelName;
    private int modelYear;
}
