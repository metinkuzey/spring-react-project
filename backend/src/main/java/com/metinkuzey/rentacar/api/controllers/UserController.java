package com.metinkuzey.rentacar.api.controllers;

import com.metinkuzey.rentacar.business.abstracts.UserService;
import com.metinkuzey.rentacar.business.responses.GetAllUserResponse;
import com.metinkuzey.rentacar.business.responses.GetByIdUserResponse;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@AllArgsConstructor
public class UserController {

    private UserService userService;

    @GetMapping()
    public List<GetAllUserResponse> getAll() {
        return userService.getAll();
    }

    @GetMapping("/{id}")
    public GetByIdUserResponse getById(@PathVariable int id){
        return userService.getById(id);
    }
}
