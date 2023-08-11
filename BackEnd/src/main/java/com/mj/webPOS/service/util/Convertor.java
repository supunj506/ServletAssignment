package com.mj.webPOS.service.util;

import com.mj.webPOS.dto.CustomerDTO;
import com.mj.webPOS.entity.Customer;

public class Convertor {

    public Customer customerDTOToEntity (CustomerDTO customerDTO){
        return new Customer(customerDTO.getId(), customerDTO.getName(), customerDTO.getAddress(), customerDTO.getEmail());
    }
    public CustomerDTO customerEntityToDTO (Customer customer){
        return new CustomerDTO(customer.getId(), customer.getName(), customer.getAddress(), customer.getEmail());
    }
}
