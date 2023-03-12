package com.metinkuzey.rentacar.business.concretes;

import com.metinkuzey.rentacar.business.abstracts.BrandService;
import com.metinkuzey.rentacar.business.requests.CreateBrandRequest;
import com.metinkuzey.rentacar.business.requests.UpdateBrandRequest;
import com.metinkuzey.rentacar.business.responses.GelAllBrandsResponse;
import com.metinkuzey.rentacar.business.responses.GetByIdBrandResponse;
import com.metinkuzey.rentacar.core.utilities.mappers.ModelMapperService;
import com.metinkuzey.rentacar.entities.concretes.Brand;
import com.metinkuzey.rentacar.repository.abstracts.BrandRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class BrandManager implements BrandService {

    private BrandRepository brandRepository;
    private ModelMapperService modelMapperService;

/*
    @Override
    public List<Brand> getAll() {
        return brandRepository.findAll();
    }

  @Override
    public List<GelAllBrandsResponse> getAll() {
        List<Brand> brands =  brandRepository.findAll();
        List<GelAllBrandsResponse> gelAllBrandsResponses =new ArrayList<GelAllBrandsResponse>();
        for (Brand brand:brands
             ) {
            GelAllBrandsResponse gelAllBrandsResponse = new GelAllBrandsResponse();
            gelAllBrandsResponse.setId(brand.getId());
            gelAllBrandsResponse.setName(brand.getName());
            gelAllBrandsResponses.add(gelAllBrandsResponse);
        }
        return gelAllBrandsResponses;
    }
*/
    @Override
    public List<GelAllBrandsResponse> getAll() {
        List<Brand> brands =  brandRepository.findAll();
        return brands.stream()
                .map(brand -> this.modelMapperService
                                .forResponse().map(brand,GelAllBrandsResponse.class))
                .collect(Collectors.toList());
    }

    @Override
    public GetByIdBrandResponse getById(int id) {
        Brand brand = this.brandRepository.findById(id).orElseThrow();
        return this.modelMapperService.forResponse().map(brand,GetByIdBrandResponse.class);
    }

    /*
        @Override
        public void add(CreateBrandRequest createBrandRequest) {
            Brand brand = new Brand();
            brand.setName(createBrandRequest.getName());
            this.brandRepository.save(brand);
        }
    */
    @Override
    public void add(CreateBrandRequest createBrandRequest) {
        Brand brand = this.modelMapperService
                            .forRequest()
                            .map(createBrandRequest,Brand.class);
        this.brandRepository.save(brand);
    }

    @Override
    public void update(UpdateBrandRequest updateBrandRequest) {
        Brand brand = this.modelMapperService.forRequest().map(updateBrandRequest,Brand.class);
        this.brandRepository.save(brand);
    }

    @Override
    public void delete(int id) {
        this.brandRepository.deleteById(id);
    }

}
