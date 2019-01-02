package org.itstep.userlist.views;

import org.itstep.userlist.enteties.MenuItem;
import org.itstep.userlist.enteties.User;

import java.util.Collection;
import java.util.List;

public interface UserListView {
    int printMenu(Collection<MenuItem> menuItems);

    void showUsers(List<User> userList);

    String inputUserName();

    int inputRemoveUsersById();

    String inputRemoveUsersByName();
}
