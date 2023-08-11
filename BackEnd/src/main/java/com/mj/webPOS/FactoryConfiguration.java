package com.mj.webPOS;

import com.mj.webPOS.entity.Customer;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class FactoryConfiguration {
    public static FactoryConfiguration factoryConfiguration;
    private final SessionFactory sessionFactory;

    public FactoryConfiguration(){
        Configuration configuration =new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(Customer.class);
        sessionFactory = configuration.buildSessionFactory();

    }


    public static FactoryConfiguration getInstance(){
        return factoryConfiguration == null ? (factoryConfiguration = new FactoryConfiguration()) : factoryConfiguration ;

    }

    public Session getSession(){
        return sessionFactory.openSession();
    }

}
