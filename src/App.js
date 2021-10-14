import './App.css';
import React, {useState} from 'react';
// import Leftbar from './leftbar/LeftBar';
import Topbar from './topbar/TopBar';
// import Rightbar from './rightbar/RightBar';
import Footer from './footer/Footer';
function App() {
  const [currMessage, setCurrentMessage] = useState(""); // entered  message
  const [messages, setMessages] = useState([]);// All  messages
  const formSubmitHandler = (e) => {
  e.preventDefault();
  setMessages(prevMessage => [...prevMessage, currMessage]);
  setCurrentMessage("")
  }
  return (
    <div className="App ">
      <Topbar/>
      <div className="centerBar flex mr-10">
        <div className="flex-1 ">
        <form className="formdetails" onSubmit={formSubmitHandler}>
          <label className="font-josefinsans mr-10 text-2xl text-gray-500">Enter your Memo</label>
          <input className="enterMessages w-full text-blue-500 pb-5 border-2 " type="text" autoComplete="off" required value={currMessage} onChange={(e) => setCurrentMessage(e.target.value)}></input>
        </form>
        </div>

        <div className="flex-1 ml-10 font-josefinsans mr-10 text-2xl text-gray-500">
          Memories
          {messages.map((message) => (
            <div className="text-lg bg-red-200 w-full text-blue-500 pb-5 border-2 ">{message}</div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
