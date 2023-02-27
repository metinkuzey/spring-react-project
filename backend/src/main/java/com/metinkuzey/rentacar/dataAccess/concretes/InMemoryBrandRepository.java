package com.metinkuzey.rentacar.dataAccess.concretes;

import com.metinkuzey.rentacar.dataAccess.abstracts.BrandRepository;
import com.metinkuzey.rentacar.entities.concretes.Brand;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class InMemoryBrandRepository implements BrandRepository {

    List<Brand> brands;

    public InMemoryBrandRepository() {
        brands = new ArrayList<Brand>();
        brands.add(new Brand(1,"BMW"));
        brands.add(new Brand(2,"Ford"));
        brands.add(new Brand(3,"Mercedes"));
        brands.add(new Brand(4,"Volvo"));
    }

    @Override
    public List<Brand> getAll() {
        return brands;
    }
}
