import './rightbar.css'

export default function Rightbar(props) {
    return (
        <div className="rightBar  bg-black">
         Memories
          {props.messagedata.map((message) => (
            <div className="text-lg bg-red-200 w-full text-blue-500 pb-5 border-2 ">{message}</div>
          ))}
        </div>
    )
}
