package com.metinkuzey.rentacar.repository.abstracts;

import com.metinkuzey.rentacar.entities.concretes.Brand;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BrandRepository extends JpaRepository <Brand,Integer>{

    boolean existsByName(String brandName);
}
