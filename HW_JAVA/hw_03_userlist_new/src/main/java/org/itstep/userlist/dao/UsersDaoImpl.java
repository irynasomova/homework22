package org.itstep.userlist.dao;

import org.itstep.userlist.enteties.User;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class UsersDaoImpl implements UsersDao{

    List<User> users = new ArrayList<>();

    public List<User> getAll(){
        return users;
    }

    public void add(User user){
        users.add(user);
    }
    public void removeByID(int index) {
        users.remove(index);
    }
    public void removeByName(String name) {
        int n = 0;
        int index = -1;
        for (User i:users) {
            if (Objects.equals(i.toString(), name)) {
                index = n;
                break;
            }
            n++;
        }
        if (index > -1) {
            users.remove(index);
        }
    }
}
