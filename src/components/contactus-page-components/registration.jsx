import React, { useState } from 'react';
import '../../CSS/registration.css';

const Registration = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    title: '', // Added title field
    firstName: '',
    surname: '',
    institute: '',
    graduationYear: '',
    contactNumber: '',
    event: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('https://meerkat-saving-seriously.ngrok-free.app/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('Registration successful!');
        setFormData({
          email: '',
          title: '', // Reset title
          firstName: '',
          surname: '',
          institute: '',
          graduationYear: '',
          contactNumber: '',
          event: '',
        });
      } else {
        throw new Error(result.message || 'Failed to register.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('Failed to register. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="registration">
      <div className="blocks">
        <div className="register">
          <form className="register-form" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div className="name-inputs">
              <select
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Title
                </option>
                <option value="Mr">Mr</option>
                <option value="Ms">Ms</option>
              </select>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                value={formData.surname}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="text"
              name="institute"
              placeholder="Institute Name"
              value={formData.institute}
              onChange={handleChange}
              required
            />
            <select
              name="graduationYear"
              value={formData.graduationYear}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Graduation Year
              </option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
            </select>
            <input
              type="text"
              name="contactNumber"
              placeholder="Contact Number"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
            <select
              name="event"
              value={formData.event}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select an event you wish to register for
              </option>
              <option value="Event 1">Drone Race</option>
              <option value="Event 2">Shark Tank</option>
              <option value="Event 3">Mystery Box</option>
            </select>
            <button type="submit" className="register-button" disabled={isSubmitting}>
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
          </form>
          {message && <p>{message}</p>}
        </div>
        <div className="contact">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.008948715852!2d72.8345381739519!3d19.10726335099286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sSVKM&#39;s%20Dwarkadas%20J.%20Sanghvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1736944861022!5m2!1sen!2sin"
            width="430"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <p>
            No.U-15, J.V.P.D. Scheme, Bhaktivedanta Swami Marg, Opp. Cooper Hospital, Vile Parle (West),
            Mumbai-400 056. India
          </p>
          <div className="details">
            <div className="phone">
              <p>For Assistance:</p>
              <p>Deval: +91 81697 95099</p>
              <p>Aditya: +91 89281 02714</p>
            </div>
            {/* <div className="social">
              <a href="https://www.instagram.com/djsce.trinity/" target="_blank" rel="noopener noreferrer">
                <p>@djsce.trinity</p>
              </a>
              <a href="mailto:djscetrinity@gmail.com">
                <p>djscetrinity25@gmail.com</p>
              </a>
            </div> */}
          </div> 
        </div>
      </div>
      {/* <div className="footer">
        <div className="icons">
          <a href="https://www.youtube.com/@djscetrinity1543/videos" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="https://www.instagram.com/djsce.trinity" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
        <div className="text">
          <p>SVKM's Dwarkadas J Sanghvi College of Engineering</p>
        </div>
      </div>  */}
    </div>
  );
};

export default Registration;
