package com.mj.webPOS.dao.custom.impl;

import com.mj.webPOS.dao.custom.CustomerDAO;
import com.mj.webPOS.entity.Customer;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

public class CustomerDAOImpl implements CustomerDAO {

    private Session session;
    public CustomerDAOImpl(Session session) {
        this.session=session;
    }

    @Override
    public Customer save(Customer entity) {
        Transaction transaction;
        try {

            Customer customer = session.get(Customer.class, entity.getId());
            if (customer==null) {
                transaction=session.beginTransaction();
                String id = (String) session.save(entity);
                entity.setId(id);
                transaction.commit();
            }else {
                transaction=session.beginTransaction();
                customer.setAddress(entity.getAddress());
                customer.setName(entity.getName());
                customer.setEmail(entity.getEmail());
                session.update(customer);
                transaction.commit();
            }
            return entity;
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }


    }

    @Override
    public Customer update(Customer entity) {
        return null;
    }

    @Override
    public Customer find(String pk) {
        return null;
    }

    @Override
    public Customer delete(Customer entity) {
        return null;
    }

    @Override
    public List<Customer> getAll() {
        return null;
    }
}
