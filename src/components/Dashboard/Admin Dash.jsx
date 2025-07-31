import React from "react";
import Header from "../other/Header";

const AdminDash = () => {
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
    height: 'auto',
    margin: '20px auto',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid black',
    padding: '20px',
    gap: '20px',
    borderRadius: '10px',
    backgroundColor: '#f0f0f0',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  };

  const fieldStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    fontSize: '16px',
    fontWeight: '500',
    gap: '5px',
  };

  const inputStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  };

  return (
    <>
      <Header />
      <div style={formStyle}>
        <form style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={fieldStyle}>
            <label>Task Title</label>
            <input style={inputStyle} type="text" placeholder="Enter Task Title" />
          </div>
          <div style={fieldStyle}>
            <label>Description</label>
            <textarea style={{ ...inputStyle, height: '150px' }} placeholder="Enter Task Description" />
          </div>
          <div style={fieldStyle}>
            <label>Date</label>
            <input style={inputStyle} type="date" />
          </div>
          <div style={fieldStyle}>
            <label>Assign To</label>
            <input style={inputStyle} type="text" placeholder="Enter Assignee" />
          </div>
          <div style={fieldStyle}>
            <label>Category</label>
            <input style={inputStyle} type="text" placeholder="Enter Task Category" />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: '#10B981',
              color: 'white',
              border: 'none',
              padding: '10px 15px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '18px',
              fontWeight: 'bold',
              alignSelf: 'center',
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AdminDash;
