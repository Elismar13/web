<%@ page import="br.com.thushima.crud.repository.ProductRepository" %>

<html>
<head>
    <title>Criar Produto</title>
</head>
<body>
    <h1>Criar Produto</h1>
    <form action="CreateProductServlet" method="post">
        Nome: <input type="text" name="name"><br>
        Preço: <input type="text" name="price"><br>
        <input type="submit" value="Criar Produto">
    </form>
    <br>
</body>
</html>
