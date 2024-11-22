import {assets} from "../../assets/assets.js";
import './main.css'
const MainContainer = ()=>{
    return (
        <div className="main">
            <div className="nav">
                <p className="buzzbot">#BuzzBot</p>
                <img className="user-img" src={assets.user_icon} alt=""/>
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello....</span></p>
                    <p>How can I help you today?</p>


                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon}/>
                    </div>
                    <div className="card">
                        <p>Briefly summarize this concept: urban planning</p>
                        <img src={assets.bulb_icon}/>
                    </div>
                    <div className="card">
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <img src={assets.message_icon}/>
                    </div>
                    <div className="card">
                        <p>Improve the readability of the following code</p>
                        <img src={assets.code_icon}/>
                    </div>
                </div>
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder="Enter a prompt here"/>
                        <div>
                            <img src={assets.gallery_icon} alt=""/>
                            <img src={assets.mic_icon} alt=""/>

                            <img src={assets.send_icon} alt=""/>
                        </div>

                    </div>
                    <p className="bottom-info">
                        BuzzBot may display inaccurate info, including about people, so double-check its responses. Your privacy and BuzzBot Apps
                    </p>

                </div>

            </div>


        </div>
    )
}
export default MainContainer;