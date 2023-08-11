package com.mj.webPOS.entity;

import com.mj.webPOS.dao.util.SuperEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
@Table(name = "customer")
public class Customer extends SuperEntity implements Serializable {
    @Id
    @Column(name = "id")
    private String id;
    @Column(name="name")
    private String name;
    @Column(name = "address")
    private String address;
    @Column(name = "email")
    private String email;

//    @OneToMany(mappedBy = "customer",targetEntity = Orders.class)
//    private List<Orders> ordersList=new ArrayList<>();
}
