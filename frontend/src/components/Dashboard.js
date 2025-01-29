import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [reminders, setReminders] = useState(() => {
    const savedReminders = localStorage.getItem('reminders');
    return savedReminders ? JSON.parse(savedReminders) : [];
  });
  const [newNote, setNewNote] = useState('');
  const [newReminder, setNewReminder] = useState('');
  const [reminderTime, setReminderTime] = useState('');

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('reminders', JSON.stringify(reminders));
  }, [reminders]);

  const handleNoteChange = (e) => setNewNote(e.target.value);
  const handleReminderChange = (e) => setNewReminder(e.target.value);
  const handleTimeChange = (e) => setReminderTime(e.target.value);

  const addNote = () => {
    if (newNote.trim()) {
      setNotes([...notes, { id: Date.now(), text: newNote }]);
      setNewNote('');
    }
  };

  const addReminder = () => {
    if (newReminder.trim() && reminderTime) {
      setReminders([...reminders, { 
        id: Date.now(), 
        text: newReminder,
        time: reminderTime 
      }]);
      setNewReminder('');
      setReminderTime('');
    }
  };

  const deleteNote = (id) => setNotes(notes.filter(note => note.id !== id));
  const deleteReminder = (id) => setReminders(reminders.filter(reminder => reminder.id !== id));

  return (
    <div className="container py-4">
      <div className="row mb-4">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="card-title mb-3">Quick Actions</h4>
              <div className="d-flex gap-2">
                <Link 
                  to="/salary-calculator" 
                  className="btn btn-primary"
                >
                  💰 Salary Calculator
                </Link>
                <Link 
                  to="/investment-analysis" 
                  className="btn btn-primary"
                >
                  📈 Investment Analysis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h4 className="card-title mb-3">📝 Notes</h4>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add a new note..."
                  value={newNote}
                  onChange={handleNoteChange}
                  onKeyPress={(e) => e.key === 'Enter' && addNote()}
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={addNote}
                >
                  Add
                </button>
              </div>
              <div className="notes-list" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                {notes.length === 0 ? (
                  <p className="text-muted text-center">No notes yet. Add your first note!</p>
                ) : (
                  <ul className="list-group">
                    {notes.map((note) => (
                      <li key={note.id} 
                          className="list-group-item d-flex justify-content-between align-items-center animate__animated animate__fadeIn">
                        <span>{note.text}</span>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => deleteNote(note.id)}
                        >
                          ✖
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h4 className="card-title mb-3">⏰ Reminders</h4>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add a new reminder..."
                  value={newReminder}
                  onChange={handleReminderChange}
                />
                <input
                  type="time"
                  className="form-control"
                  value={reminderTime}
                  onChange={handleTimeChange}
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={addReminder}
                >
                  Add
                </button>
              </div>
              <div className="reminders-list" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                {reminders.length === 0 ? (
                  <p className="text-muted text-center">No reminders yet. Add your first reminder!</p>
                ) : (
                  <ul className="list-group">
                    {reminders.map((reminder) => (
                      <li key={reminder.id} 
                          className="list-group-item d-flex justify-content-between align-items-center animate__animated animate__fadeIn">
                        <span>{reminder.text} - {reminder.time}</span>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => deleteReminder(reminder.id)}
                        >
                          ✖
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 