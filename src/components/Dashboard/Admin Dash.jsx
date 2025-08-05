import React from 'react';
import Header from '../other/Header';
import Alltasks from '../other/Alltasks';
import '../../styles/AdminDash.css';

const AdminDash = () => {
  return (
    <>
      <Header />
      {/* 👇 Style fix for date picker icon */}
      <style>
        {`
          input[type="date"]::-webkit-calendar-picker-indicator {
            filter: invert(1);
            cursor: pointer;
          }
        `}
      </style>

      <div className="admin-container">
        <form className="admin-form">
          {/* Left Side */}
          <div className="form-left">
            <div className="form-field">
              <label>Task Title</label>
              <input className="form-input" type="text" placeholder="Make a UI design" />
            </div>
            <div className="form-field">
              <label>Date</label>
              <input className="form-input" type="date" placeholder="dd/mm/yyyy" />
            </div>
            <div className="form-field">
              <label>Assign to</label>
              <input className="form-input" type="text" placeholder="employee name" />
            </div>
            <div className="form-field">
              <label>Category</label>
              <input className="form-input" type="text" placeholder="design, dev, etc" />
            </div>
          </div>

          {/* Right Side */}
          <div className="form-right">
            <div className="form-field">
              <label>Description</label>
              <textarea
                className="form-input description-input"
                placeholder="Enter task details..."
              />
            </div>
            <button type="submit" className="submit-btn">Create Task</button>
          </div>
        </form>
      </div>
      <Alltasks />
    </>
  );
};

export default AdminDash;
