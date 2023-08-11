package com.mj.webPOS.dao.util;

import com.mj.webPOS.dao.custom.impl.CustomerDAOImpl;
import org.hibernate.Session;

public class DAOFactory {
    private static DAOFactory daoFactory;

    public static DAOFactory getInstance(){
        return daoFactory == null ? (daoFactory = new DAOFactory()) : (daoFactory);
    }

    public <T extends SuperDAO> T getDAO(Session session,DAOType daoType){
        switch (daoType){
            case CUSTOMER :
                return (T)new CustomerDAOImpl(session);

            default:
                return null;
        }
    }
}
