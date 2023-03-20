package com.metinkuzey.rentacar.business.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetAllOrdersResponse {
    private int orderId;
    private int customerId;
    private int invoiceId;
    private BigDecimal invoiceAmount;
    private Date orderDate;
    private Date orderStartDate;
    private Date orderEndDate;
    private int vehicleId;
    private int paymentTypeId;
}
