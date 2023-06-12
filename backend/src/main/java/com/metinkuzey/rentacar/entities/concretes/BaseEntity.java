package com.metinkuzey.rentacar.entities.concretes;

import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.io.Serializable;
import java.time.LocalDate;

@MappedSuperclass
@Data
public class BaseEntity implements Serializable {

    @Column(name = "Status", nullable = false, columnDefinition = "boolean default true")
    private boolean status;

    @Column(name = "CreatedBy", nullable = false)
    private String createdBy;

    @Column(name = "CreatedDate", nullable = false)
    @CreationTimestamp
    private LocalDate createdDate;

    @Column(name = "UpdatedBy", nullable = true)
    private String updatedBy;

    @Column(name = "UpdatedDate", nullable = true)
    @UpdateTimestamp
    private LocalDate updatedDate;
}
