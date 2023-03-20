package com.metinkuzey.rentacar.api.controllers;

import com.metinkuzey.rentacar.business.abstracts.InvoiceService;
import com.metinkuzey.rentacar.business.requests.CreateInvoiceRequest;
import com.metinkuzey.rentacar.business.requests.UpdateInvoiceRequest;
import com.metinkuzey.rentacar.business.responses.GetAllInvoicesResponse;
import com.metinkuzey.rentacar.business.responses.GetByIdInvoiceResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/invoices")
@AllArgsConstructor
public class InvoiceController {
    private InvoiceService invoiceService;

    @GetMapping()
    public List<GetAllInvoicesResponse> getAll() {
        return invoiceService.getAll();
    }

    @PostMapping()
    @ResponseStatus(code = HttpStatus.CREATED)
    public void add(@RequestBody CreateInvoiceRequest createInvoiceRequest){
        this.invoiceService.add(createInvoiceRequest);
    }

    @GetMapping("/{id}")
    public GetByIdInvoiceResponse getById(@PathVariable int id){
        return invoiceService.getById(id);
    }

    @PutMapping
    public  void update(@RequestBody UpdateInvoiceRequest updateInvoiceRequest){
        this.invoiceService.update(updateInvoiceRequest);
    }

}
