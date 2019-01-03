package org.itstep.connection;

import org.itstep.connection.View.NotesView;
import org.itstep.connection.View.NotesViewCmd;
import org.itstep.connection.dao.NotesDao;
import org.itstep.connection.dao.NotesDaoImpl;
import org.itstep.connection.presenters.NotesPresenter;

public class Main {
    public static void main(String[] args) {

        NotesView view = new NotesViewCmd();
        NotesDao dao = new NotesDaoImpl();
        NotesPresenter presenter = new NotesPresenter(view, dao);
        presenter.run();
    }
}
