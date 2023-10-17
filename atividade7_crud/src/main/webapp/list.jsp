<%@ page import="java.util.List" %>
<%@ page import="br.com.thushima.crud.model.Product" %>
<%@ page import="br.com.thushima.crud.repository.ProductRepository" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>

<html>
<head>
    <title>Listagem de Produtos</title>
</head>
<body>
    <h1>Listagem de Produtos</h1>
    <% 
	List<Product> products = (List<Product>) request.getAttribute("products");
	System.out.println("Size of products list: " + products.size());
	%>

	<table border="1">
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Ações</th>
        </tr>
        <c:forEach var="product" items="${products}">
            <tr>
                <td><c:out value="${product.id}" /></td>
                <td><c:out value="${product.name}" /></td>
                <td><c:out value="${product.price}" /></td>
                <td>
                    <a href="update.jsp?id=<c:out value="${product.id}" />">Editar</a>
                    <a href="delete.jsp?id=<c:out value="${product.id}" />">Excluir</a>
                </td>
            </tr>
        </c:forEach>
    </table>

    <c:if test="${empty products}">
        <p>Nenhum produto disponível.</p>
    </c:if>
</body>
</html>