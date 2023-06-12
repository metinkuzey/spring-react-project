package com.metinkuzey.rentacar.repository.abstracts;

import com.metinkuzey.rentacar.entities.concretes.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByEmail(String email);

    Optional<User> findById(Long id);

    boolean existsByEmail(String email);


}
