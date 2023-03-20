package com.metinkuzey.rentacar.api.controllers;

import com.metinkuzey.rentacar.business.abstracts.CustomerService;
import com.metinkuzey.rentacar.business.requests.CreateCustomerRequest;
import com.metinkuzey.rentacar.business.requests.UpdateCustomerRequest;
import com.metinkuzey.rentacar.business.responses.GetAllCustomersResponse;
import com.metinkuzey.rentacar.business.responses.GetByIdCustomerResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
@AllArgsConstructor
public class CustomerController {
    private CustomerService customerService;

    @GetMapping()
    public List<GetAllCustomersResponse> getAll() {
        return customerService.getAll();
    }

    @PostMapping()
    @ResponseStatus(code = HttpStatus.CREATED)
    public void add(@RequestBody CreateCustomerRequest createCustomerRequest){
        this.customerService.add(createCustomerRequest);
    }

    @GetMapping("/{id}")
    public GetByIdCustomerResponse getById(@PathVariable int id){
        return customerService.getById(id);
    }

    @PutMapping
    public  void update(@RequestBody UpdateCustomerRequest updateCustomerRequest){
        this.customerService.update(updateCustomerRequest);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id){
        this.customerService.delete(id);
    }
}
