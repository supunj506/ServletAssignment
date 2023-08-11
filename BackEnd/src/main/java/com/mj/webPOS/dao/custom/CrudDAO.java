package com.mj.webPOS.dao.custom;

import com.mj.webPOS.dao.util.SuperDAO;
import com.mj.webPOS.dao.util.SuperEntity;

import java.io.Serializable;
import java.util.List;

public interface CrudDAO<T extends SuperEntity , ID extends Serializable>extends SuperDAO {

    T save (T entity) ;
    T update(T entity);

    T find(ID pk);

    T delete(T entity);

    List<T> getAll();

}
