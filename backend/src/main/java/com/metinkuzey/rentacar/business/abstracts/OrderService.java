package com.metinkuzey.rentacar.business.abstracts;

import com.metinkuzey.rentacar.business.requests.CreateOrderRequest;
import com.metinkuzey.rentacar.business.requests.UpdateOrderRequest;
import com.metinkuzey.rentacar.business.responses.GetAllOrdersResponse;
import com.metinkuzey.rentacar.business.responses.GetByIdOrderResponse;

import java.util.List;

public interface OrderService {
    List<GetAllOrdersResponse> getAll();

    GetByIdOrderResponse getById(int id);
    void add(CreateOrderRequest createOrderRequest);

    void update(UpdateOrderRequest updateOrderRequest);

    void delete(int id);
}
