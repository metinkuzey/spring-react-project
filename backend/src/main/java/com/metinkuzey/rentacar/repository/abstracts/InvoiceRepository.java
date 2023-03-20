package com.metinkuzey.rentacar.repository.abstracts;

import com.metinkuzey.rentacar.entities.concretes.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvoiceRepository extends JpaRepository<Invoice,Integer> {
}
