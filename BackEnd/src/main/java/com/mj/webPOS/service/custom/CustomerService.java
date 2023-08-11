package com.mj.webPOS.service.custom;

import com.mj.webPOS.dao.custom.CustomerDAO;
import com.mj.webPOS.dto.CustomerDTO;
import com.mj.webPOS.service.util.SuperService;

import java.util.List;

public interface CustomerService extends SuperService {
    boolean saveCustomer(CustomerDTO customerDTO);

    boolean updateCustomer (CustomerDTO customerDTO);

    CustomerDAO deleteCustomer (CustomerDTO customerDTO);

    CustomerDTO getCustomer (String id);

    List<CustomerDTO> getAllCustomer();


}
