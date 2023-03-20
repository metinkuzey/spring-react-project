package com.metinkuzey.rentacar.business.requests;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateInvoiceRequest {
    private int invoiceId;
    private BigDecimal invoiceAmount;
    private Date createDate;
    private Date paymentDate;
    private int paymentType;
    private String currency;
    private boolean isPayed;
    private boolean isActive;
}
