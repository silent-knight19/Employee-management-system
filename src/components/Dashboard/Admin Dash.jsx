import React from "react";
import Header from "../other/Header";
import Alltasks from "../other/Alltasks";
const AdminDash = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '80%',
    margin: '50px auto',
    padding: '30px',
    borderRadius: '10px',
    backgroundColor: '#1e1e1e',
    color: '#fff',
    boxShadow: '0 0 20px rgba(0,0,0,0.3)',
    gap: '30px',
  };

  const leftFormStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '50%',
    margin: '20px auto',
  };

  const rightFormStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '50%',
    margin: '20px auto',
    marginLeft: '25px',
  };

  const fieldStyle = {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '20px',
    fontWeight: '500',
    gap: '5px',
  };

  const inputStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #666',
    backgroundColor: '#111',
    color: '#fff',
    fontSize: '20px',
  };

  const buttonStyle = {
    backgroundColor: '#34D399',
    color: 'black',
    border: 'none',
    padding: '12px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '20px',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    width: '150px',
    marginLeft: '145px',
  };

  return (
    <>
    <Header/>
    <div style={containerStyle}>
      <form style={{ display: 'flex', width: '100%' }}>
        {/* Left side */}
        <div style={leftFormStyle}>
          <div style={fieldStyle}>
            <label>Task Title</label>
            <input style={inputStyle} type="text" placeholder="Make a UI design" />
          </div>
          <div style={fieldStyle}>
            <label>Date</label>
            <input style={inputStyle} type="date" placeholder="dd/mm/yyyy" />
          </div>
          <div style={fieldStyle}>
            <label>Assign to</label>
            <input style={inputStyle} type="text" placeholder="employee name" />
          </div>
          <div style={fieldStyle}>
            <label>Category</label>
            <input style={inputStyle} type="text" placeholder="design, dev, etc" />
          </div>
        </div>

        {/* Right side */}
        <div style={rightFormStyle}>
          <div style={fieldStyle}>
            <label>Description</label>
            <textarea style={{ ...inputStyle, height: '160px', resize: 'none' }} placeholder="Enter task details..." />
          </div>
          <button type="submit" style={buttonStyle}>Create Task</button>
        </div>
      </form>
    </div>
    <Alltasks/>
    </>
  );
};

export default AdminDash;
