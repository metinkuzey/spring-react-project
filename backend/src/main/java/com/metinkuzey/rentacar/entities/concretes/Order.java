package com.metinkuzey.rentacar.entities.concretes;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;
@Table(name="orders")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="order_id")
    private int orderId;

    @Column(name = "customer_id")
    private int customerId;
    @Column(name="invoice_id")
    private int invoiceId;
    @Column(name="invoice_amount")
    private BigDecimal invoiceAmount;
    @Column(name="payment_type_id")
    private int paymentTypeId;
    @Column(name="order_date")
    private Date orderDate;
    @Column(name="order_start_date")
    private Date orderStartDate;
    @Column(name="order_end_date")
    private Date orderEndDate;
    @Column(name="vehicle_id")
    private int vehicleId;

}
