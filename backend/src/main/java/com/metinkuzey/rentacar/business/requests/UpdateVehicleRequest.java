package com.metinkuzey.rentacar.business.requests;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdateVehicleRequest {
    private int vehicleId;
    private String plateNr;
    private int modelId;
    private String vehiclePicture;
}
