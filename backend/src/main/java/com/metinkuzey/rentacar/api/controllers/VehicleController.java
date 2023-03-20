package com.metinkuzey.rentacar.api.controllers;

import com.metinkuzey.rentacar.business.abstracts.VehicleService;
import com.metinkuzey.rentacar.business.requests.CreateVehicleRequest;
import com.metinkuzey.rentacar.business.requests.UpdateVehicleRequest;
import com.metinkuzey.rentacar.business.responses.GetAllVehiclesResponse;
import com.metinkuzey.rentacar.business.responses.GetByIdVehicleResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vehicles")
@AllArgsConstructor
public class VehicleController {
    private VehicleService vehicleService;

    @GetMapping()
    public List<GetAllVehiclesResponse> getAll() {
        return vehicleService.getAll();
    }

    @PostMapping()
    @ResponseStatus(code = HttpStatus.CREATED)
    public void add(@RequestBody CreateVehicleRequest createVehicleRequest){
        this.vehicleService.add(createVehicleRequest);
    }

    @GetMapping("/{id}")
    public GetByIdVehicleResponse getById(@PathVariable int id){
        return vehicleService.getById(id);
    }

    @PutMapping
    public  void update(@RequestBody UpdateVehicleRequest updateVehicleRequest){
        this.vehicleService.update(updateVehicleRequest);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id){
        this.vehicleService.delete(id);
    }
}
