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
import java.util.Scanner;

public class MainServlet extends HttpServlet {
    Gson gson = new GsonBuilder().create();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        List<User> userList = getUserList();

        req.setAttribute("users", userList);

        req.getRequestDispatcher("WEB-INF/view/test.jsp").forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String name = req.getParameter("name");
        String surname = req.getParameter("surname");

        List<User> userList = getUserList();

        userList.add(new User(name, surname));
        String json = gson.toJson(userList);

        Writer writer = new FileWriter(getServletContext().getRealPath("WEB-INF/data.json"));
        writer.write(json);
        writer.flush();
        writer.close();

        doGet(req, resp);
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
