package com.metinkuzey.rentacar.business.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetAllModelsResponse {
    private int modelId;
    private int brandId;
    private String modelName;
    private int modelYear;

    private String modelPicture;
}
