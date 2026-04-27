import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FiCalendar, FiMapPin, FiClock, FiCheckCircle, FiArrowLeft } from 'react-icons/fi';
import { mockEvents } from '../data/mockEvents';
import './Booking.css';

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [tickets, setTickets] = useState(1);
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    const foundEvent = mockEvents.find(e => e.id === parseInt(id));
    if (foundEvent) {
      setEvent(foundEvent);
    }
  }, [id]);

  if (!event) {
    return <div className="container mt-100"><p>Loading event details...</p></div>;
  }

  const handleBooking = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsBooked(true);
    }, 1000);
  };

  const totalAmount = event.price * tickets;

  if (isBooked) {
    return (
      <div className="booking-page container">
        <div className="success-container glass-panel animate-fade-in">
          <FiCheckCircle className="success-icon text-gradient" />
          <h2>Booking <span className="text-gradient">Successful!</span></h2>
          <p>You have successfully booked {tickets} ticket(s) for <strong>{event.title}</strong>.</p>
          <div className="receipt">
            <div className="receipt-row"><span>Order ID:</span> <span>#{Math.floor(Math.random() * 100000)}</span></div>
            <div className="receipt-row"><span>Amount Paid:</span> <span>${totalAmount}</span></div>
          </div>
          <p className="email-note">A confirmation email has been sent to your registered address.</p>
          <div className="success-actions">
            <Link to="/events" className="btn btn-outline">Browse More Events</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-page container">
      <Link to="/events" className="back-link"><FiArrowLeft /> Back to Events</Link>
      
      <div className="booking-container">
        <div className="event-details glass-panel animate-fade-in">
          <img src={event.image} alt={event.title} className="booking-img" />
          <div className="booking-info">
            <span className="category-tag">{event.category}</span>
            <h1 className="booking-title">{event.title}</h1>
            
            <div className="booking-meta">
              <div className="meta-block">
                <FiCalendar className="meta-icon" />
                <div>
                  <span className="meta-label">Date</span>
                  <span className="meta-value">{event.date}</span>
                </div>
              </div>
              <div className="meta-block">
                <FiClock className="meta-icon" />
                <div>
                  <span className="meta-label">Time</span>
                  <span className="meta-value">{event.time}</span>
                </div>
              </div>
              <div className="meta-block">
                <FiMapPin className="meta-icon" />
                <div>
                  <span className="meta-label">Location</span>
                  <span className="meta-value">{event.location}</span>
                </div>
              </div>
            </div>

            <div className="booking-desc">
              <h3>About this event</h3>
              <p>{event.description}</p>
            </div>
          </div>
        </div>

        <div className="booking-sidebar glass-panel animate-fade-in delay-100">
          <h3 className="summary-title">Booking Summary</h3>
          
          <form onSubmit={handleBooking} className="booking-form">
            <div className="ticket-selection">
              <label>Number of Tickets</label>
              <div className="ticket-counter">
                <button type="button" className="counter-btn" onClick={() => setTickets(Math.max(1, tickets - 1))}>-</button>
                <span className="ticket-count">{tickets}</span>
                <button type="button" className="counter-btn" onClick={() => setTickets(Math.min(10, tickets + 1))}>+</button>
              </div>
            </div>

            <div className="price-breakdown">
              <div className="breakdown-row">
                <span>Ticket Price</span>
                <span>${event.price}</span>
              </div>
              <div className="breakdown-row">
                <span>Quantity</span>
                <span>x {tickets}</span>
              </div>
              <div className="breakdown-row">
                <span>Taxes & Fees</span>
                <span>${(totalAmount * 0.1).toFixed(2)}</span>
              </div>
              <div className="breakdown-row total">
                <span>Total Amount</span>
                <span className="text-gradient">${(totalAmount * 1.1).toFixed(2)}</span>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
