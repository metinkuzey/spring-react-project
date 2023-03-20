package com.metinkuzey.rentacar.business.concretes;

import com.metinkuzey.rentacar.business.abstracts.VehicleService;
import com.metinkuzey.rentacar.business.requests.CreateVehicleRequest;
import com.metinkuzey.rentacar.business.requests.UpdateVehicleRequest;
import com.metinkuzey.rentacar.business.responses.GetAllVehiclesResponse;
import com.metinkuzey.rentacar.business.responses.GetByIdVehicleResponse;
import com.metinkuzey.rentacar.core.utilities.mappers.ModelMapperService;
import com.metinkuzey.rentacar.entities.concretes.Vehicle;
import com.metinkuzey.rentacar.repository.abstracts.VehicleRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class VehicleManager implements VehicleService {
    private VehicleRepository vehicleRepository;
    private ModelMapperService modelMapperService;

    @Override
    public List<GetAllVehiclesResponse> getAll() {
        List<Vehicle> vehicles =  vehicleRepository.findAll();
        return vehicles.stream()
                .map(vehicle -> this.modelMapperService
                        .forResponse().map(vehicle, GetAllVehiclesResponse.class))
                .collect(Collectors.toList());
    }

    @Override
    public GetByIdVehicleResponse getById(int id) {
        Vehicle vehicle = this.vehicleRepository.findById(id).orElseThrow();
        return this.modelMapperService.forResponse().map(vehicle,GetByIdVehicleResponse.class);
    }


    public void add(CreateVehicleRequest createVehicleRequest) {
        Vehicle vehicle= this.modelMapperService
                .forRequest()
                .map(createVehicleRequest,Vehicle.class);
        this.vehicleRepository.save(vehicle);
    }


    public void update(UpdateVehicleRequest updateVehicleRequest) {
        Vehicle vehicle =  this.modelMapperService.forRequest().map(updateVehicleRequest,Vehicle.class);
        this.vehicleRepository.save(vehicle);
    }

    @Override
    public void delete(int id) {
        this.vehicleRepository.deleteById(id);
    }
}
