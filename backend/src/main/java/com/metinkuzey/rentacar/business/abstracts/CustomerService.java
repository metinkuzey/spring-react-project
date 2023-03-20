package com.metinkuzey.rentacar.business.abstracts;

import com.metinkuzey.rentacar.business.requests.CreateCustomerRequest;
import com.metinkuzey.rentacar.business.requests.UpdateCustomerRequest;
import com.metinkuzey.rentacar.business.responses.GetAllCustomersResponse;
import com.metinkuzey.rentacar.business.responses.GetByIdCustomerResponse;

import java.util.List;

public interface CustomerService {
    List<GetAllCustomersResponse> getAll();

    GetByIdCustomerResponse getById(int id);
    void add(CreateCustomerRequest createCustomerRequest);

    void update(UpdateCustomerRequest updateCustomerRequest);

    void delete(int id);
}
