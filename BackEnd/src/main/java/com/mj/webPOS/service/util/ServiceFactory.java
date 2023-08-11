package com.mj.webPOS.service.util;

import com.mj.webPOS.service.custom.impl.CustomerServiceImpl;

public class ServiceFactory {

    private static ServiceFactory serviceFactory;

    public ServiceFactory(){}


    public static ServiceFactory getInstance(){
        return serviceFactory == null ? (serviceFactory = new ServiceFactory()) : serviceFactory ;
    }

    public <T extends SuperService> T getService(ServiceType serviceTypes){
        switch (serviceTypes){
            case CUSTOMER:
                return (T)new CustomerServiceImpl();
            default:
                return null;
        }
    }


}
