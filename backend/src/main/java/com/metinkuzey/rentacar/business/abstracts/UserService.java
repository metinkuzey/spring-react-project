package com.metinkuzey.rentacar.business.abstracts;

import com.metinkuzey.rentacar.business.responses.GetAllUserResponse;
import com.metinkuzey.rentacar.business.responses.GetByIdUserResponse;

import java.util.List;

public interface UserService {

    List<GetAllUserResponse> getAll();

    GetByIdUserResponse getById(int id);

}
