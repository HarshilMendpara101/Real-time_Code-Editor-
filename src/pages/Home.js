import React, { useState } from 'react'
import "../App.css";
import { toast, Toaster } from 'react-hot-toast';
import { v4 as uuidV4 } from 'uuid';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState('');
  const [Username, setUsername] = useState('');
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success("Created a new Room!");
  }

  const joinRoom = () => {
    if (!roomId || !Username) {
      toast.error("Room ID & Username are Required!");
      return;
    }
    navigate(`/editor/${roomId}`, {
      state: { Username, },
    });

  };

  const handleInputEnter = (e) => {
    if (e.key === 'Enter') {
      joinRoom();
    }
  }

  return (
    <div className="homePageWrapper">
      <div className="formWrapper">

        <h1>LOGO</h1>

        <h4 className='mainLabel'>Paste Invitation ROOM ID</h4>

        <div className='inputGroup'>

          <input
            type='text'
            className='inputBox'
            placeholder='ROOM ID'
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
            onKeyUp={handleInputEnter}>
          </input>

          <input type='text' className='inputBox' placeholder='USERNAME'
            onChange={(e) => setUsername(e.target.value)}
            value={Username}
            onKeyUp={handleInputEnter}>

          </input>

          <button className='btn joinBtn' onClick={joinRoom}>Join</button>

          <span className='createInfo'>
            If you don't have an invite then create &nbsp; <a onClick={createNewRoom} href="/" className='createNewBtn'>New Room</a>

          </span>
        </div>
      </div>
    </div>
  );
};

export default Home
