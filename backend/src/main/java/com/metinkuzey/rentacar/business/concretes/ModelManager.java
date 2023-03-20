package com.metinkuzey.rentacar.business.concretes;

import com.metinkuzey.rentacar.business.abstracts.ModelService;
import com.metinkuzey.rentacar.business.requests.CreateModelRequest;
import com.metinkuzey.rentacar.business.requests.UpdateModelRequest;
import com.metinkuzey.rentacar.business.responses.GetAllModelsResponse;
import com.metinkuzey.rentacar.business.responses.GetByIdModelResponse;
import com.metinkuzey.rentacar.core.utilities.mappers.ModelMapperService;
import com.metinkuzey.rentacar.entities.concretes.Model;
import com.metinkuzey.rentacar.repository.abstracts.ModelRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ModelManager implements ModelService {
    private ModelRepository modelRepository;
    private ModelMapperService modelMapperService;

    @Override
    public List<GetAllModelsResponse> getAll() {
        List<Model> models =  modelRepository.findAll();
        return models.stream()
                .map(model -> this.modelMapperService
                        .forResponse().map(model, GetAllModelsResponse.class))
                .collect(Collectors.toList());
    }

    @Override
    public GetByIdModelResponse getById(int id) {
        Model model = this.modelRepository.findById(id).orElseThrow();
        return this.modelMapperService.forResponse().map(model,GetByIdModelResponse.class);
    }


    public void add(CreateModelRequest createModelRequest) {
        Model model = this.modelMapperService
                .forRequest()
                .map(createModelRequest,Model.class);
        this.modelRepository.save(model);
    }


    public void update(UpdateModelRequest updateModelRequest) {
        Model model =  this.modelMapperService.forRequest().map(updateModelRequest,Model.class);
        this.modelRepository.save(model);
    }

    @Override
    public void delete(int id) {
        this.modelRepository.deleteById(id);
    }
}
