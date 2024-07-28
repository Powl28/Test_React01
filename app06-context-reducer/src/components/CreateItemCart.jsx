import "./CreateItemCart.css"
import React from 'react'


export default function CreateItemCart() {
  return (
   <div>
  <div className="box">
    <a href="#popup-box">Create</a>
  </div>
  <div id="popup-box" className="modal">
    <div className="content">
      <h1 style={{color: 'green'}}>Input  Field</h1>
      <form>
        <label>Name</label>
        <input type="text" name="name" />
      </form>

      
      <a href="#" style={{position: 'absolute', top: 10, right: 10, color: '#fe0606', fontSize: 30, textDecoration: 'none'}}>
        ×
      </a>
    </div>
  </div>
</div>

  );
}
