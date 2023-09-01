package com.metinkuzey.rentacar.repository.abstracts;

import com.metinkuzey.rentacar.entities.concretes.Model;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ModelRepository extends JpaRepository<Model,Integer> {
    boolean existsByModelName(String modelName);

    boolean existsByModelNameAndModelYearAndBrandId(String modelName, int modelYear, int brandId);
}
