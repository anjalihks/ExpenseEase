import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteStatus, setDeleteStatus] = useState({ show: false, message: '', type: '' });

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/messages');
      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }
      const data = await response.json();
      setMessages(data);
      setLoading(false);
    } catch (err) {
      setError('Error loading messages');
      setLoading(false);
    }
  };

  const handleDelete = async (messageId) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        const response = await fetch(`http://localhost:5000/api/messages/${messageId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to delete message');
        }

        // Update messages list
        setMessages(messages.filter(msg => msg._id !== messageId));
        
        // Show success message
        setDeleteStatus({
          show: true,
          message: 'Message deleted successfully',
          type: 'success'
        });

        // Hide status message after 3 seconds
        setTimeout(() => {
          setDeleteStatus({ show: false, message: '', type: '' });
        }, 3000);

      } catch (err) {
        console.error('Delete error:', err);
        setDeleteStatus({
          show: true,
          message: err.message || 'Failed to delete message',
          type: 'danger'
        });
      }
    }
  };

  if (loading) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2 className="mb-4">Admin Dashboard</h2>

      {deleteStatus.show && (
        <div className={`alert alert-${deleteStatus.type} alert-dismissible fade show`} role="alert">
          {deleteStatus.message}
          <button 
            type="button" 
            className="btn-close" 
            onClick={() => setDeleteStatus({ show: false, message: '', type: '' })}
          ></button>
        </div>
      )}

      <div className="card shadow-sm">
        <div className="card-header">
          <h5 className="card-title mb-0">Messages</h5>
        </div>
        <div className="card-body">
          {messages.length === 0 ? (
            <p className="text-muted text-center">No messages found</p>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Message</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map((message) => (
                    <tr key={message._id}>
                      <td>{message.name}</td>
                      <td>{message.email}</td>
                      <td>{message.subject}</td>
                      <td>{message.message}</td>
                      <td>{new Date(message.createdAt).toLocaleDateString()}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(message._id)}
                        >
                          <i className="bi bi-trash"></i> Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin; 