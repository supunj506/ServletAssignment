package com.mj.webPOS.api;

import com.mj.webPOS.dto.CustomerDTO;
import com.mj.webPOS.service.custom.CustomerService;
import com.mj.webPOS.service.util.ServiceFactory;
import com.mj.webPOS.service.util.ServiceType;
import jakarta.json.bind.Jsonb;
import jakarta.json.bind.JsonbBuilder;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(urlPatterns = "/customer")
public class CustomerServlet extends HttpServlet {

    Jsonb jsonb = JsonbBuilder.create();
    CustomerService customerService = ServiceFactory.getInstance().getService(ServiceType.CUSTOMER);
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("running get");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("running post");
        if (req.getContentType()==null || !req.getContentType().toLowerCase().startsWith("application/json")){
            resp.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED);
        }
        Jsonb jsonb = JsonbBuilder.create();
        CustomerDTO customerDTO = jsonb.fromJson(req.getReader(), CustomerDTO.class);
        System.out.println(customerDTO);
        {
            boolean b = customerService.saveCustomer(customerDTO);
            try {
                System.out.println(b);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    @Override
    protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("running put");
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("running delete");
    }
}
