package org.itstep.userlist.presenters;

import org.itstep.userlist.dao.UsersDao;
import org.itstep.userlist.enteties.MenuItem;
import org.itstep.userlist.enteties.User;
import org.itstep.userlist.views.UserListView;

import java.util.Arrays;
import java.util.List;

public class UserListPresenter {
   private UserListView view;
   private UsersDao dao;

   private boolean active = true;
   private List<MenuItem> menuItems = Arrays.asList(
            new MenuItem("add new user", this::addUsers),
            new MenuItem("remove user by ID", this::removeUsersById),
            new MenuItem("remove user by name", this::removeUsersByName),
            new MenuItem("show all users", this::showUsers),
            new MenuItem("exit", ()->active = false)
            );

    public UserListPresenter(UserListView view, UsersDao dao) {
        this.view = view;
        this.dao = dao;
    }

    public void run(){
        while (active){
            int choise = view.printMenu(menuItems);
            choise--;
            if(choise<menuItems.size()){
                menuItems.get(choise).getCallBack().call();
            }
        }
    }

    private void addUsers(){
        String name = view.inputUserName();
        User user = new User(name);
        dao.add(user);
    }

    private void removeUsersById() {
        try {
            int id = view.inputRemoveUsersById();
            dao.removeByID(id);
        } catch (Exception e) {

        }
    }

    private void removeUsersByName() {
        try {
            String name = view.inputRemoveUsersByName();
            dao.removeByName(name);
        } catch (Exception e) {

        }
    }

    private void showUsers(){
        List<User> users = dao.getAll();
        view.showUsers(users);
    }

}
