import React from 'react'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Classic Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/15569150/pexels-photo-15569150.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <span>Shashank</span>
        <button>logout</button>
      </div>
    </div>
  )
}
