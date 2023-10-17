package br.com.thushima.crud.repository;

import br.com.thushima.crud.model.Product;
import java.util.ArrayList;
import java.util.List;

public class ProductRepository {
    private static List<Product> products = new ArrayList<>();

    public static List<Product> getAllProducts() {
        return ProductRepository.products;
    }

    public static Product getProductById(int id) {
        for (Product product : products) {
            if (product.getId() == id) {
                return product;
            }
        }
        return null;
    }

    public static void addProduct(Product product) {
        products.add(product);
    }

    public static void updateProduct(Product updatedProduct) {
        for (Product product : products) {
            if (product.getId() == updatedProduct.getId()) {
                product.setName(updatedProduct.getName());
                product.setPrice(updatedProduct.getPrice());
                return;
            }
        }
    }

    public static void deleteProduct(int id) {
        products.removeIf(product -> product.getId() == id);
    }
}
