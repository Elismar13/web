package br.com.thushima.crud.servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.RequestDispatcher;
import java.io.IOException;
import java.util.List;

import br.com.thushima.crud.model.Product;
import br.com.thushima.crud.repository.ProductRepository;

@WebServlet("/ListProductServlet")
public class ListProductServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        List<Product> products = ProductRepository.getAllProducts();
        System.out.println("TAMANHO: " + products.size());	

        RequestDispatcher dispatcher = request.getRequestDispatcher("/list.jsp");
        request.setAttribute("products", products);
        dispatcher.forward(request, response);
    }
}
