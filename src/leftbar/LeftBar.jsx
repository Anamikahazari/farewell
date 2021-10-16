import './leftbar.css'

export default function Leftbar(props) {
    return (
        <div className="leftbar bg-green-200">
            <form className="formdetails" onSubmit={props.submitfunction}>
                <label className="font-josefinsans mr-10 text-2xl text-gray-500">Enter your Memo</label>
                <input className="enterMessages w-full text-blue-500 pb-5 border-2 " type="text" autoComplete="off" required value={props.currMsg} onChange={(e) => props.currMsgFunction(e.target.value)}></input>
                {/* <label className="font-josefinsans mr-10 text-2xl text-gray-500">Enter your name</label>
                <input className="enterMessages w-full text-blue-500 pb-5 border-2 " type="text" autoComplete="off" required value={props.currName} onChange={(e) => props.currNameFunction(e.target.value)}></input> */}
                     {/* when we remove second label and input form submitfunction works dont know??? */}
            </form>
        </div>
    )
}
