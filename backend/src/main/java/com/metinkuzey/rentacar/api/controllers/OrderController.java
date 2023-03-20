package com.metinkuzey.rentacar.api.controllers;

import com.metinkuzey.rentacar.business.abstracts.OrderService;
import com.metinkuzey.rentacar.business.requests.CreateOrderRequest;
import com.metinkuzey.rentacar.business.requests.UpdateOrderRequest;
import com.metinkuzey.rentacar.business.responses.GetAllOrdersResponse;
import com.metinkuzey.rentacar.business.responses.GetByIdOrderResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@AllArgsConstructor
public class OrderController {

    private OrderService orderService;

    @GetMapping()
    public List<GetAllOrdersResponse> getAll() {
        return orderService.getAll();
    }

    @PostMapping()
    @ResponseStatus(code = HttpStatus.CREATED)
    public void add(@RequestBody CreateOrderRequest createOrderRequest){
        this.orderService.add(createOrderRequest);
    }

    @GetMapping("/{id}")
    public GetByIdOrderResponse getById(@PathVariable int id){
        return orderService.getById(id);
    }

    @PutMapping
    public  void update(@RequestBody UpdateOrderRequest updateOrderRequest){
        this.orderService.update(updateOrderRequest);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id){
        this.orderService.delete(id);
    }
}
