package com.metinkuzey.rentacar.business.concretes;

import com.metinkuzey.rentacar.business.abstracts.UserService;
import com.metinkuzey.rentacar.business.responses.GetAllUserResponse;
import com.metinkuzey.rentacar.business.responses.GetByIdUserResponse;
import com.metinkuzey.rentacar.core.utilities.mappers.ModelMapperService;
import com.metinkuzey.rentacar.entities.concretes.User;
import com.metinkuzey.rentacar.repository.abstracts.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service
@AllArgsConstructor
public class UserManager implements UserService {

    private UserRepository userRepository;

    private ModelMapperService modelMapperService;
    @Override
    public List<GetAllUserResponse> getAll() {
        List<User> orders =  userRepository.findAll();
        return orders.stream()
                .map(order -> this.modelMapperService
                        .forResponse().map(order, GetAllUserResponse.class))
                .collect(Collectors.toList());
    }

    @Override
    public GetByIdUserResponse getById(int id) {
        User User = this.userRepository.findById(id).orElseThrow();
        return this.modelMapperService.forResponse().map(User,GetByIdUserResponse.class);
    }
}
