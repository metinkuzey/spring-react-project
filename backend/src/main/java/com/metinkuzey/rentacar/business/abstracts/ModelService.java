package com.metinkuzey.rentacar.business.abstracts;

import com.metinkuzey.rentacar.business.requests.CreateModelRequest;
import com.metinkuzey.rentacar.business.requests.UpdateModelRequest;
import com.metinkuzey.rentacar.business.responses.GetAllModelsResponse;
import com.metinkuzey.rentacar.business.responses.GetByIdModelResponse;

import java.util.List;

public interface ModelService {
    List<GetAllModelsResponse> getAll();

    GetByIdModelResponse getById(int id);
    void add(CreateModelRequest createModelRequest);

    void update(UpdateModelRequest updateModelRequest);

    void delete(int id);
}
