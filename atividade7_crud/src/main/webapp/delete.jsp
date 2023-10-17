<%@ page import="br.com.thushima.crud.model.Product" %>
<%@ page import="br.com.thushima.crud.repository.ProductRepository" %>

<html>
<head>
    <title>Excluir Produto</title>
</head>
<body>
    <h1>Excluir Produto</h1>
    <p>Conforme o ID do produto</p>
    <form action="DeleteProductServlet" method="post">
        <input type="number" name="id" value="${product.id}">
        <input type="submit" value="Confirmar Exclusão">
    </form>
    <br>
    <a href="list.jsp">Cancelar e Voltar para a Listagem</a>
</body>
</html>
