package org.itstep.userlist;

import org.itstep.userlist.dao.UsersDao;
import org.itstep.userlist.presenters.UserListPresenter;
import org.itstep.userlist.views.UserListView;

public class Main {
    public static void main(String[] args) {

        UserListView view = new UserListView();
        UsersDao dao = new UsersDao();
        UserListPresenter presenter = new UserListPresenter(view, dao);
        presenter.run();
    }
}
