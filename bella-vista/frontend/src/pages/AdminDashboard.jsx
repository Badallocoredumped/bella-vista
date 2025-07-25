import React, { useState, useEffect } from 'react';
import { useAuth, useUser } from '@clerk/clerk-react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { signOut } = useAuth();
  const { user, isLoaded } = useUser();
  
  // State management
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterDate, setFilterDate] = useState('');

  // Fetch reservations
  useEffect(() => {
    if (!isLoaded || user?.publicMetadata?.role !== 'admin') {
      return;
    }

    const fetchReservations = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/reservations');
        
        if (!response.ok) {
          throw new Error('Failed to fetch reservations');
        }
        
        const data = await response.json();
        setReservations(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching reservations:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, [isLoaded, user?.publicMetadata?.role]);

  // Show loading state
  if (!isLoaded) {
    return (
      <div className="loading-container">
        <div className="loading-content">
          <div className="spinner"></div>
          <p className="loading-text">Loading...</p>
        </div>
      </div>
    );
  }

  // Check admin access
  if (user?.publicMetadata?.role !== 'admin') {
    return (
      <div className="access-denied">
        <div className="access-denied-content">
          <h2>🚫 Access Denied</h2>
          <p>You are not authorized to access this page.</p>
          <button 
            onClick={() => window.location.href = '/'} 
            className="btn-primary"
          >
            Go Back to Homepage
          </button>
        </div>
      </div>
    );
  }

  // Helper functions
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusBadgeClass = (status) => {
    switch (status?.toLowerCase()) {
      case 'confirmed':
        return 'status-badge confirmed';
      case 'cancelled':
        return 'status-badge cancelled';
      case 'pending':
      default:
        return 'status-badge pending';
    }
  };

  // Filter reservations based on search and filters
  const filteredReservations = reservations.filter(reservation => {
    const matchesSearch = 
      reservation.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.phone?.includes(searchTerm);
    
    const matchesStatus = filterStatus === 'all' || reservation.status === filterStatus;
    const matchesDate = !filterDate || reservation.date === filterDate;
    
    return matchesSearch && matchesStatus && matchesDate;
  });

  // Calculate stats
  const stats = {
    total: reservations.length,
    today: reservations.filter(r => r.date === new Date().toISOString().split('T')[0]).length,
    pending: reservations.filter(r => r.status === 'pending' || !r.status).length,
    confirmed: reservations.filter(r => r.status === 'confirmed').length
  };

  // Update reservation status
  const updateReservationStatus = async (reservationId, newStatus) => {
    try {
      const response = await fetch(`http://localhost:5000/api/reservations/${reservationId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error('Failed to update reservation');
      }

      // Update local state
      setReservations(prev => 
        prev.map(reservation => 
          reservation._id === reservationId 
            ? { ...reservation, status: newStatus }
            : reservation
        )
      );
    } catch (err) {
      console.error('Error updating reservation:', err);
      alert('Failed to update reservation');
    }
  };

  // Delete reservation
  const deleteReservation = async (reservationId) => {
    if (!confirm('Are you sure you want to delete this reservation?')) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/reservations/${reservationId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete reservation');
      }

      // Update local state
      setReservations(prev => prev.filter(reservation => reservation._id !== reservationId));
    } catch (err) {
      console.error('Error deleting reservation:', err);
      alert('Failed to delete reservation');
    }
  };

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-container">
          <div className="header-content">
            <div>
              <h1 className="header-title">🍽️ Bella Vista Admin</h1>
              <p className="header-subtitle">Welcome back, {user.firstName || 'Admin'}!</p>
            </div>
            <button onClick={() => signOut()} className="btn-logout">
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="dashboard-nav">
        <div className="nav-container">
          <div className="nav-tabs">
            {[
              { id: 'overview', label: '📊 Overview' },
              { id: 'reservations', label: '📅 All Reservations' }
            ].map((tab) => (
              <button
                key={tab.id}
                className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="dashboard-main">
        {activeTab === 'overview' && (
          <div className="content-section">
            {/* Stats Cards */}
            <div className="stats-grid">
              <div className="stat-card blue">
                <div className="stat-content">
                  <div className="stat-info">
                    <p className="stat-number">{stats.total}</p>
                    <p className="stat-label">Total Reservations</p>
                  </div>
                  <div className="stat-icon">📊</div>
                </div>
              </div>
              
              <div className="stat-card green">
                <div className="stat-content">
                  <div className="stat-info">
                    <p className="stat-number">{stats.today}</p>
                    <p className="stat-label">Today's Reservations</p>
                  </div>
                  <div className="stat-icon">📅</div>
                </div>
              </div>
              
              <div className="stat-card yellow">
                <div className="stat-content">
                  <div className="stat-info">
                    <p className="stat-number">{stats.pending}</p>
                    <p className="stat-label">Pending Reservations</p>
                  </div>
                  <div className="stat-icon">⏰</div>
                </div>
              </div>
              
              <div className="stat-card purple">
                <div className="stat-content">
                  <div className="stat-info">
                    <p className="stat-number">{stats.confirmed}</p>
                    <p className="stat-label">Confirmed Reservations</p>
                  </div>
                  <div className="stat-icon">✅</div>
                </div>
              </div>
            </div>

            {/* Recent Reservations Preview */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Recent Reservations</h3>
                <span 
                  onClick={() => setActiveTab('reservations')}
                  className="view-all-link"
                >
                  View All →
                </span>
              </div>
              
              <div className="card-content">
                {loading ? (
                  <div className="loading-state">Loading reservations...</div>
                ) : error ? (
                  <div className="error-state">Error: {error}</div>
                ) : (
                  <div className="reservation-list">
                    {reservations.slice(0, 5).map((reservation) => (
                      <div key={reservation._id} className="reservation-item">
                        <div className="reservation-info">
                          <h4>{reservation.name}</h4>
                          <p>
                            {formatDate(reservation.date)} at {reservation.time} • {reservation.guests} guests
                          </p>
                        </div>
                        <span className={getStatusBadgeClass(reservation.status)}>
                          {reservation.status || 'Pending'}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reservations' && (
          <div className="content-section">
            {/* Filters */}
            <div className="card">
              <div className="card-content">
                <div className="filters-grid">
                  <div className="filter-group">
                    <label className="filter-label">Search</label>
                    <input
                      type="text"
                      placeholder="Search by name, email, or phone..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="filter-input"
                    />
                  </div>
                  
                  <div className="filter-group">
                    <label className="filter-label">Status</label>
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="filter-select"
                    >
                      <option value="all">All Status</option>
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>
                  
                  <div className="filter-group">
                    <label className="filter-label">Date</label>
                    <input
                      type="date"
                      value={filterDate}
                      onChange={(e) => setFilterDate(e.target.value)}
                      className="filter-input"
                    />
                  </div>
                  
                  <div className="filter-button-container">
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setFilterStatus('all');
                        setFilterDate('');
                      }}
                      className="btn-clear"
                    >
                      Clear Filters
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Reservations Table */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  All Reservations ({filteredReservations.length})
                </h3>
              </div>
              
              {loading ? (
                <div className="loading-state">
                  <div className="spinner"></div>
                  Loading reservations...
                </div>
              ) : error ? (
                <div className="error-state">
                  Error loading reservations: {error}
                </div>
              ) : filteredReservations.length === 0 ? (
                <div className="empty-state">
                  No reservations found matching your criteria.
                </div>
              ) : (
                <div className="table-container">
                  <table className="reservations-table">
                    <thead className="table-header">
                      <tr>
                        <th>Customer</th>
                        <th>Contact</th>
                        <th>Date & Time</th>
                        <th>Guests</th>
                        <th>Status</th>
                        <th>Message</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody className="table-body">
                      {filteredReservations.map((reservation) => (
                        <tr key={reservation._id}>
                          <td>
                            <div className="table-text">{reservation.name}</div>
                          </td>
                          <td>
                            <div className="table-text">{reservation.email}</div>
                            <div className="table-text secondary">{reservation.phone}</div>
                          </td>
                          <td>
                            <div className="table-text">{formatDate(reservation.date)}</div>
                            <div className="table-text secondary">{reservation.time}</div>
                          </td>
                          <td className="table-text">
                            {reservation.guests}
                          </td>
                          <td>
                            <span className={getStatusBadgeClass(reservation.status)}>
                              {reservation.status || 'Pending'}
                            </span>
                          </td>
                          <td className="message-cell">
                            <div className="table-text truncate" title={reservation.message}>
                              {reservation.message || 'No message'}
                            </div>
                          </td>
                          <td>
                            <div className="action-buttons">
                              {reservation.status !== 'confirmed' && (
                                <button
                                  onClick={() => updateReservationStatus(reservation._id, 'confirmed')}
                                  className="btn-action btn-confirm"
                                >
                                  Confirm
                                </button>
                              )}
                              {reservation.status !== 'cancelled' && (
                                <button
                                  onClick={() => updateReservationStatus(reservation._id, 'cancelled')}
                                  className="btn-action btn-cancel"
                                >
                                  Cancel
                                </button>
                              )}
                              <button
                                onClick={() => deleteReservation(reservation._id)}
                                className="btn-action btn-delete"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;