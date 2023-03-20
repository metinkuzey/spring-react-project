package com.metinkuzey.rentacar.repository.abstracts;

import com.metinkuzey.rentacar.entities.concretes.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order,Integer> {
}
