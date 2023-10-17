package br.com.thushima.crud.servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

import br.com.thushima.crud.model.Product;
import br.com.thushima.crud.repository.ProductRepository;

@WebServlet("/CreateProductServlet")
public class CreateProductServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String name = request.getParameter("name");
        double price = Double.parseDouble(request.getParameter("price"));
        int id = ProductRepository.getAllProducts().size();
        
        Product newProduct = new Product(id ,name, price);
        ProductRepository.addProduct(newProduct);
        response.sendRedirect("ListProductServlet");
    }
}

