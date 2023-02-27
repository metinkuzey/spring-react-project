package com.metinkuzey.rentacar.business.abstracts;

import com.metinkuzey.rentacar.entities.concretes.Brand;

import java.util.List;

public interface BrandService {
    List<Brand> getAll();
}
