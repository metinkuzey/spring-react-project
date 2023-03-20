package com.metinkuzey.rentacar.business.abstracts;

import com.metinkuzey.rentacar.business.requests.CreateVehicleRequest;
import com.metinkuzey.rentacar.business.requests.UpdateVehicleRequest;
import com.metinkuzey.rentacar.business.responses.GetAllVehiclesResponse;
import com.metinkuzey.rentacar.business.responses.GetByIdVehicleResponse;

import java.util.List;

public interface VehicleService {
    List<GetAllVehiclesResponse> getAll();

    GetByIdVehicleResponse getById(int id);
    void add(CreateVehicleRequest createVehicleRequest);

    void update(UpdateVehicleRequest updateVehicleRequest);

    void delete(int id);
}
