package com.metinkuzey.rentacar.business.concretes;

import com.metinkuzey.rentacar.business.abstracts.OrderService;
import com.metinkuzey.rentacar.business.requests.CreateOrderRequest;
import com.metinkuzey.rentacar.business.requests.UpdateOrderRequest;
import com.metinkuzey.rentacar.business.responses.GetAllOrdersResponse;
import com.metinkuzey.rentacar.business.responses.GetByIdOrderResponse;
import com.metinkuzey.rentacar.core.utilities.mappers.ModelMapperService;
import com.metinkuzey.rentacar.entities.concretes.Order;
import com.metinkuzey.rentacar.repository.abstracts.OrderRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class OrderManager implements OrderService {
    private OrderRepository orderRepository;
    private ModelMapperService modelMapperService;

    @Override
    public List<GetAllOrdersResponse> getAll() {
        List<Order> orders =  orderRepository.findAll();
        return orders.stream()
                .map(order -> this.modelMapperService
                        .forResponse().map(order, GetAllOrdersResponse.class))
                .collect(Collectors.toList());
    }

    @Override
    public GetByIdOrderResponse getById(int id) {
        Order order = this.orderRepository.findById(id).orElseThrow();
        return this.modelMapperService.forResponse().map(order,GetByIdOrderResponse.class);
    }


    public void add(CreateOrderRequest createOrderRequest) {
        Order order= this.modelMapperService
                .forRequest()
                .map(createOrderRequest,Order.class);
        this.orderRepository.save(order);
    }


    public void update(UpdateOrderRequest updateOrderRequest) {
        Order order =  this.modelMapperService.forRequest().map(updateOrderRequest,Order.class);
        this.orderRepository.save(order);
    }

    @Override
    public void delete(int id) {
        this.orderRepository.deleteById(id);
    }

}
