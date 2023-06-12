package com.metinkuzey.rentacar.api.controllers;

import com.metinkuzey.rentacar.business.abstracts.ModelService;
import com.metinkuzey.rentacar.business.requests.CreateModelRequest;
import com.metinkuzey.rentacar.business.requests.UpdateModelRequest;
import com.metinkuzey.rentacar.business.responses.GetAllModelsResponse;
import com.metinkuzey.rentacar.business.responses.GetByIdModelResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/models")
@AllArgsConstructor
public class ModelController {

    private ModelService modelService;

    @GetMapping()
    public List<GetAllModelsResponse> getAll() {
        return modelService.getAll();
    }

    @PostMapping()
    @ResponseStatus(code = HttpStatus.CREATED)
    public void add(@RequestBody @Valid CreateModelRequest createModelRequest){
        this.modelService.add(createModelRequest);
    }

    @GetMapping("/{id}")
    public GetByIdModelResponse getById(@PathVariable int id){
        return modelService.getById(id);
    }

    @PutMapping
    public  void update(@RequestBody UpdateModelRequest updateModelRequest){

        this.modelService.update(updateModelRequest);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id){
        this.modelService.delete(id);
    }
}
