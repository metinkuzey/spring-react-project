package com.metinkuzey.rentacar.rules;

import com.metinkuzey.rentacar.exception.BusinessException;
import com.metinkuzey.rentacar.repository.abstracts.BrandRepository;
import com.metinkuzey.rentacar.repository.abstracts.CustomerRepository;
import com.metinkuzey.rentacar.repository.abstracts.ModelRepository;
import com.metinkuzey.rentacar.repository.abstracts.VehicleRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class BusinessRules {

    private BrandRepository brandRepository;
    private CustomerRepository customerRepository;
    private ModelRepository modelRepository;
    private VehicleRepository vehicleRepository;

    public void checkIfBrandNameExists(String brandName){
        if(this.brandRepository.existsByName(brandName)){
            throw new BusinessException("Brand name is already exist!!!");
        }
    }

    public void checkIfModelNameExists(String modelName){
        if(this.modelRepository.existsByModelName(modelName)){
            throw new BusinessException("Model name is already exist!!!");
        }
    }

    public void checkIfModelExistsByModelNameAndModelYearAndBrandId(String modelName, int modelYear, int brandId) {
        if (this.modelRepository.existsByModelNameAndModelYearAndBrandId(modelName, modelYear, brandId)) {
            throw new BusinessException("Model is already exist!!!");
        }
    }

    public void checkIfUserNameExists(String userName){
        if(this.customerRepository.existsByUserName(userName)){
            throw new BusinessException("User name is already exist! Please enter different username.");
        }
    }

    public void checkIfVehiclePlateNrExist(String plateNr){
        if(this.vehicleRepository.existsByPlateNr(plateNr)){
            throw new BusinessException("Plate Number is already exist!!!");
        }
    }


}
