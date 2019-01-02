package org.itstep.userlist;

import org.itstep.userlist.dao.UsersDao;
import org.itstep.userlist.dao.UsersDaoImpl;
import org.itstep.userlist.presenters.UserListPresenter;
import org.itstep.userlist.views.UserListView;
import org.itstep.userlist.views.UserListViewCmd;

public class Main {
    public static void main(String[] args) {

        UserListView view = new UserListViewCmd();
        UsersDao dao = new UsersDaoImpl();
        UserListPresenter presenter = new UserListPresenter(view, dao);
        presenter.run();
    }
}
