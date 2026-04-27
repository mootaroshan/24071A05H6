import React, { useState } from 'react';
import { FiSearch, FiCalendar, FiMapPin, FiFilter } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { mockEvents } from '../data/mockEvents';
import '../pages/Home.css'; // Reusing event card styles
import './Events.css';

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');

  const categories = ['All', 'Music', 'Technology', 'Art', 'Food', 'Sports', 'Entertainment'];

  const filteredEvents = mockEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'All' || event.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="events-page container">
      <div className="page-header animate-fade-in">
        <h1 className="page-title">Discover <span className="text-gradient">Events</span></h1>
        <p className="page-subtitle">Find your next unforgettable experience</p>
      </div>

      <div className="filters-section glass-panel animate-fade-in delay-100">
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Search events..." 
            className="form-input search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="category-filters">
          <FiFilter className="filter-icon" />
          <div className="category-badges">
            {categories.map(cat => (
              <button 
                key={cat}
                className={`category-badge ${category === cat ? 'active' : ''}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="event-grid">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <div 
              key={event.id} 
              className={`event-card glass-panel animate-fade-in delay-${(index % 3 + 1) * 100}`}
            >
              <div className="event-img-container">
                <img src={event.image} alt={event.title} className="event-img" />
                <div className="event-category">{event.category}</div>
              </div>
              <div className="event-info">
                <h3 className="event-title">{event.title}</h3>
                <div className="event-meta">
                  <span className="meta-item"><FiCalendar /> {event.date}</span>
                  <span className="meta-item"><FiMapPin /> {event.location}</span>
                </div>
                <div className="event-footer">
                  <span className="event-price">${event.price}</span>
                  <Link to={`/booking/${event.id}`} className="btn btn-primary btn-sm">Book Ticket</Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No events found matching your criteria.</p>
            <button className="btn btn-outline" onClick={() => {setSearchTerm(''); setCategory('All');}}>
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
