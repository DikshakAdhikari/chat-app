import React from 'react'

export const Message = () => {
  return (
    <div className='message owner'> {/*in the chat window we have two types of message exist- one is white colored one and another is blue colored one*/}
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/15569150/pexels-photo-15569150.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="https://images.pexels.com/photos/15569150/pexels-photo-15569150.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />

      </div>
    </div>

  )
}
