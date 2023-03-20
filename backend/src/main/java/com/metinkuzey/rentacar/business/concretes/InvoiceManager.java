package com.metinkuzey.rentacar.business.concretes;

import com.metinkuzey.rentacar.business.abstracts.InvoiceService;
import com.metinkuzey.rentacar.business.requests.CreateInvoiceRequest;
import com.metinkuzey.rentacar.business.requests.UpdateInvoiceRequest;
import com.metinkuzey.rentacar.business.responses.GetAllInvoicesResponse;
import com.metinkuzey.rentacar.business.responses.GetByIdInvoiceResponse;
import com.metinkuzey.rentacar.core.utilities.mappers.ModelMapperService;
import com.metinkuzey.rentacar.entities.concretes.Invoice;
import com.metinkuzey.rentacar.repository.abstracts.InvoiceRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class InvoiceManager implements InvoiceService {

    private InvoiceRepository invoiceRepository;
    private ModelMapperService modelMapperService;

    @Override
    public List<GetAllInvoicesResponse> getAll() {
        List<Invoice> invoices =  invoiceRepository.findAll();
        return invoices.stream()
                .map(invoice -> this.modelMapperService
                        .forResponse().map(invoice, GetAllInvoicesResponse.class))
                .collect(Collectors.toList());
    }

    @Override
    public GetByIdInvoiceResponse getById(int id) {
        Invoice invoice = this.invoiceRepository.findById(id).orElseThrow();
        return this.modelMapperService.forResponse().map(invoice,GetByIdInvoiceResponse.class);
    }


    public void add(CreateInvoiceRequest createInvoiceRequest) {
        Invoice invoice = this.modelMapperService
                .forRequest()
                .map(createInvoiceRequest,Invoice.class);
        this.invoiceRepository.save(invoice);
    }


    public void update(UpdateInvoiceRequest updateInvoiceRequest) {
        Invoice invoice = this.modelMapperService.forRequest().map(updateInvoiceRequest,Invoice.class);
        this.invoiceRepository.save(invoice);
    }

}
