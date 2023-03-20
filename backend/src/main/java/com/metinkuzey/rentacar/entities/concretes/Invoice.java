package com.metinkuzey.rentacar.entities.concretes;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;

@Table(name="invoices")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Invoice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="invoice_id")
    private int invoiceId;
    @Column(name="create_date")
    private Date createDate;
    @Column(name="payment_date")
    private Date paymentDate;
    @Column(name="invoice_amount")
    private BigDecimal invoiceAmount;
    @Column(name="currency")
    private String currency;
    @Column(name="payment_type")
    private int paymentType;
    @Column(name="is_payed")
    private boolean isPayed;
    @Column(name="is_active")
    private boolean isActive;



}
