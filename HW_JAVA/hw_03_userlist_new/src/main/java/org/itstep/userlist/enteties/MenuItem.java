package org.itstep.userlist.enteties;

import org.itstep.userlist.presenters.UserListPresenter;

public class MenuItem {
   private String name;
   private MenuCallBack callBack;

    public MenuItem(String name, MenuCallBack callBack) {
        this.name = name;
        this.callBack = callBack;
    }

    public String getName() {
        return name;
    }

    public MenuCallBack getCallBack() {
        return callBack;
    }

    public interface MenuCallBack {
        void call();
    }
}
