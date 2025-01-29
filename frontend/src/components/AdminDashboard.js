import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/messages');
        setMessages(response.data);
      } catch (err) {
        setError('Failed to fetch messages');
        console.error('Error fetching messages:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) return <div className="text-center mt-5">Loading messages...</div>;
  if (error) return <div className="alert alert-danger m-5">{error}</div>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Contact Messages</h2>
      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <div className="row">
          {messages.map((msg) => (
            <div key={msg._id} className="col-12 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{msg.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{msg.email}</h6>
                  <p className="card-text">{msg.message}</p>
                  <small className="text-muted">
                    Received: {new Date(msg.createdAt).toLocaleString()}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard; 