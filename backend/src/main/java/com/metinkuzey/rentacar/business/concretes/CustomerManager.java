package com.metinkuzey.rentacar.business.concretes;

import com.metinkuzey.rentacar.business.abstracts.CustomerService;
import com.metinkuzey.rentacar.business.requests.CreateCustomerRequest;
import com.metinkuzey.rentacar.business.requests.UpdateCustomerRequest;
import com.metinkuzey.rentacar.business.responses.GetAllCustomersResponse;
import com.metinkuzey.rentacar.business.responses.GetByIdCustomerResponse;
import com.metinkuzey.rentacar.core.utilities.mappers.ModelMapperService;
import com.metinkuzey.rentacar.entities.concretes.Customer;
import com.metinkuzey.rentacar.repository.abstracts.CustomerRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CustomerManager implements CustomerService {

    private CustomerRepository customerRepository;
    private ModelMapperService modelMapperService;

    @Override
    public List<GetAllCustomersResponse> getAll() {
        List<Customer> customers =  customerRepository.findAll();
        return customers.stream()
                .map(brand -> this.modelMapperService
                        .forResponse().map(brand, GetAllCustomersResponse.class))
                .collect(Collectors.toList());
    }

    @Override
    public GetByIdCustomerResponse getById(int id) {
        Customer customer = this.customerRepository.findById(id).orElseThrow();
        return this.modelMapperService.forResponse().map(customer,GetByIdCustomerResponse.class);
    }


    public void add(CreateCustomerRequest createCustomerRequest) {
        Customer customer = this.modelMapperService
                .forRequest()
                .map(createCustomerRequest,Customer.class);
        this.customerRepository.save(customer);
    }


    public void update(UpdateCustomerRequest updateCustomerRequest) {
        Customer customer = this.modelMapperService.forRequest().map(updateCustomerRequest,Customer.class);
        this.customerRepository.save(customer);
    }

    @Override
    public void delete(int id) {
        this.customerRepository.deleteById(id);
    }
}
