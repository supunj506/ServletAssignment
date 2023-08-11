package com.mj.webPOS.service.custom.impl;

import com.mj.webPOS.FactoryConfiguration;
import com.mj.webPOS.dao.custom.CustomerDAO;
import com.mj.webPOS.dao.util.DAOFactory;
import com.mj.webPOS.dao.util.DAOType;
import com.mj.webPOS.dto.CustomerDTO;
import com.mj.webPOS.entity.Customer;
import com.mj.webPOS.service.custom.CustomerService;
import com.mj.webPOS.service.util.Convertor;
import org.hibernate.Session;

import javax.persistence.Convert;
import java.util.List;

public class CustomerServiceImpl implements CustomerService {

    private final CustomerDAO customerDAO;

    private final Convertor convertor;

    private final Session session;

    public CustomerServiceImpl(){
        session= FactoryConfiguration.getInstance().getSession();
        customerDAO = DAOFactory.getInstance().getDAO(session , DAOType.CUSTOMER);
        convertor = new Convertor();

    }


    @Override
    public boolean saveCustomer(CustomerDTO customerDTO) {
        Customer customer = customerDAO.save(convertor.customerDTOToEntity(customerDTO));
        if (customer==null){
            return false;
        }
        return true;
    }

    @Override
    public boolean updateCustomer(CustomerDTO customerDTO) {
        return false;
    }

    @Override
    public CustomerDAO deleteCustomer(CustomerDTO customerDTO) {
        return null;
    }

    @Override
    public CustomerDTO getCustomer(String id) {
        return null;
    }

    @Override
    public List<CustomerDTO> getAllCustomer() {
        return null;
    }
}
