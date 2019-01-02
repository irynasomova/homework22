package org.itstep.userlist.dao;

import org.itstep.userlist.enteties.User;

import java.util.List;
import java.util.Objects;

public interface UsersDao {
    List<User> getAll();

    void add(User user);

    void removeByID(int index);

    void removeByName(String name);
}

