package org.itstep.userlist.views;

import org.itstep.userlist.enteties.User;
import org.itstep.userlist.enteties.MenuItem;

import java.util.Collection;
import java.util.List;
import java.util.Scanner;

public class UserListView {
    public int printMenu(Collection<MenuItem> menuItems){
        int i = 1;
        for (MenuItem menuItem : menuItems) {
            System.out.println(String.format("%d - %s", i++, menuItem.getName()));
        }
        System.out.print("Enter the number of menu: ");
        try{
            Scanner sc = new Scanner(System.in);
            return Integer.parseInt(sc.nextLine());
        } catch (NumberFormatException e){
            System.out.println("INCORRECT INPUT! TRY AGAIN!");
            return printMenu(menuItems);
        }
    }

    public void showUsers(List<User> userList){
        int i = 0;
        System.out.println("----Users----");
        for (User user : userList) {
            System.out.println(String.format("%d - %s", i++, user.getName()));
        }
        System.out.println("----End Users----");
    }

    public String inputUserName() {
        System.out.print("Enter the user's name: ");
        Scanner sc = new Scanner(System.in);
        return sc.nextLine();
    }

    public int inputRemoveUsersById() {
        System.out.print("Enter the user's ID for remove: ");
        Scanner sc = new Scanner(System.in);
        return Integer.parseInt(sc.nextLine());
    }

    public String inputRemoveUsersByName() {
        System.out.print("Enter the user's name for remove: ");
        Scanner sc = new Scanner(System.in);
        return sc.nextLine();
    }
}
