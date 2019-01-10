<%@ page import="org.itstep.firstwebapp.models.User" %>
<%@ page import="java.util.List" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <h1>Hello world</h1>
    <%
        List<User> a = (List<User>) request.getAttribute("users");
    %>
    <form action="/firstwebapp/" method="post">
        <p>Add user:</p>
        <input type="text" name="name" placeholder="Name..." />
        <input type="text" name="surname" placeholder="Surname..." />
        <input type="submit" />
    </form>

    <form action="/firstwebapp/remove-user" method="get">
        <p>Remove user:</p>
        <input type="text" name="name" placeholder="Name..." />
        <input type="text" name="surname" placeholder="Surname..." />
        <input type="submit" />
    </form>

    <table border="1">
        <% for (User u: a) { %>
            <tr>
                <td><%=u.getName()%></td>
                <td><%=u.getSurname()%></td>
            </tr>
        <% } %>
    </table>
</body>
</html>
