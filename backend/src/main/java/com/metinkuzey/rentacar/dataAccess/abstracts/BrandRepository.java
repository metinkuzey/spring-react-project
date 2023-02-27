package com.metinkuzey.rentacar.dataAccess.abstracts;

import com.metinkuzey.rentacar.entities.concretes.Brand;

import java.util.List;

public interface BrandRepository {
    List<Brand> getAll();
}
