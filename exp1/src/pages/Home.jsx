import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCalendar, FiMapPin } from 'react-icons/fi';
import { mockEvents } from '../data/mockEvents';
import './Home.css';

const Home = () => {
  const featuredEvents = mockEvents.slice(0, 3);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content animate-fade-in">
          <h1 className="hero-title">
            Discover & Book <br />
            <span className="text-gradient">Unforgettable Experiences</span>
          </h1>
          <p className="hero-subtitle">
            Your premier destination for the most exclusive events, concerts, and conferences worldwide.
          </p>
          <div className="hero-actions">
            <Link to="/events" className="btn btn-primary">
              Explore Events <FiArrowRight />
            </Link>
            <Link to="/register" className="btn btn-outline">
              Join Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header animate-fade-in delay-100">
            <h2 className="section-title">Trending <span className="text-gradient">Events</span></h2>
            <Link to="/events" className="view-all">View All <FiArrowRight /></Link>
          </div>

          <div className="event-grid">
            {featuredEvents.map((event, index) => (
              <div 
                key={event.id} 
                className={`event-card glass-panel animate-fade-in delay-${(index + 2) * 100}`}
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
