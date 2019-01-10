package org.itstep.firstwebapp;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import org.itstep.firstwebapp.models.User;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Writer;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Scanner;

public class UserRemoverServlet extends HttpServlet {
    Gson gson = new GsonBuilder().create();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String name = req.getParameter("name");
        String surname = req.getParameter("surname");

        List<User> userList = getUserList();

        int index = -1;
        int n = 0;
        for (User u : userList) {
            if (Objects.equals(u.getName(), name) && Objects.equals(u.getSurname(), surname)) {
                index = n;
                break;
            }
            n++;
        }
        if (index >= 0) {
            userList.remove(index);
            String json = gson.toJson(userList);

            Writer writer = new FileWriter(getServletContext().getRealPath("WEB-INF/data.json"));
            writer.write(json);
            writer.flush();
            writer.close();
        }

        //resp.getWriter().write("<h1>hello world 2222</h1>");
        //req.getRequestDispatcher("MainServlet").forward(req, resp);
        resp.sendRedirect("/firstwebapp/");
    }

    protected List<User> getUserList() throws ServletException, IOException {
        String path = getServletContext().getRealPath("WEB-INF/data.json");
        Scanner scanner = new Scanner(new FileReader(path));
        StringBuilder dataJsonBuilder = new StringBuilder();

        while (scanner.hasNext()) {
            dataJsonBuilder.append(scanner.nextLine());
        }
        scanner.close();
        String json = dataJsonBuilder.toString();

        Type listType = new TypeToken<ArrayList<User>>() {
        }.getType();
        List<User> userList = gson.fromJson(json, listType);

        return userList;
    }
}