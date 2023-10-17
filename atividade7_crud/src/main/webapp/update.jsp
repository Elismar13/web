<%@ page import="br.com.thushima.crud.model.Product" %>
<%@ page import="br.com.thushima.crud.repository.ProductRepository" %>

<html>
<head>
    <title>Atualizar Produto</title>
</head>
<body>
    <h1>Atualizar Produto</h1>
    <form action="UpdateProductServlet" method="post">
        ID: <input type="number" name="id" value="${product.id}"><br>
        Nome: <input type="text" name="name" value="${product.name}"><br>
        Preço: <input type="text" name="price" value="${product.price}"><br>
        <input type="submit" value="Atualizar Produto">
    </form>
    <br>
    <a href="list.jsp">Voltar para a Listagem</a>
</body>
</html>
