import './App.css';
import React, {useState} from 'react';
import Topbar from './topbar/TopBar';
import Rightbar from './rightbar/RightBar';
import Footer from './footer/Footer';
import Leftbar from './leftbar/LeftBar';
function App() {
  const [currMessage, setCurrentMessage] = useState(""); // entered  message
  const [messages, setMessages] = useState([]);// All  messages
  const [time, setTime]=useState([]);
  const [naMe, setName] = useState("");
  var date = new Date();
  const formSubmitHandler = (e) => {
      e.preventDefault();
      setMessages(prevMessage => [...prevMessage, currMessage]); /// spread out  previous state and then updating new value
      // there is no automatic merging instead everything get override by new value hence we use 
      //  ...prevMessage to first store all previous value in object and then we add new one by , currMessage
      setCurrentMessage("")
      setName("")
      setTime(prevTime => [...prevTime, date.getHours()+':'+ date.getMinutes()+':'+date.getSeconds()])
  }
  return (
    <div className="App ">
      <Topbar/>
      <div className="centerBar flex mr-10">
        <div className="flex-1 ">
         <Leftbar submitfunction = {formSubmitHandler} currMsg = {currMessage} currMsgFunction={setCurrentMessage} currName = {naMe} currNameFunction ={setName}/>
        </div>

        <div className="flex-1 ml-10 font-josefinsans mr-10 text-2xl text-gray-500">
          <Rightbar messagedata ={messages} timeto={time} name ={naMe}/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
