package com.metinkuzey.rentacar.business.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetAllVehiclesResponse {
    private int vehicleId;
    private String plateNr;
    private int modelId;
}
