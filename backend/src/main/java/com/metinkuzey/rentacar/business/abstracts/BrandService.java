package com.metinkuzey.rentacar.business.abstracts;

import com.metinkuzey.rentacar.business.requests.CreateBrandRequest;
import com.metinkuzey.rentacar.business.requests.UpdateBrandRequest;
import com.metinkuzey.rentacar.business.responses.GelAllBrandsResponse;
import com.metinkuzey.rentacar.business.responses.GetByIdBrandResponse;

import java.util.List;

public interface BrandService {
    List<GelAllBrandsResponse> getAll();

    GetByIdBrandResponse getById(int id);
    void add(CreateBrandRequest createBrandRequest);

    void update(UpdateBrandRequest updateBrandRequest);

    void delete(int id);
}
