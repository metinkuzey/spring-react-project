package com.metinkuzey.rentacar.business.abstracts;

import com.metinkuzey.rentacar.business.requests.CreateInvoiceRequest;
import com.metinkuzey.rentacar.business.requests.UpdateInvoiceRequest;
import com.metinkuzey.rentacar.business.responses.GetAllInvoicesResponse;
import com.metinkuzey.rentacar.business.responses.GetByIdInvoiceResponse;

import java.util.List;

public interface InvoiceService {
    List<GetAllInvoicesResponse> getAll();

    GetByIdInvoiceResponse getById(int id);
    void add(CreateInvoiceRequest createInvoiceRequest);

    void update(UpdateInvoiceRequest updateInvoiceRequest);

}
