import React, {useState} from "react"
const TweetInput = (props) => {
    let {tweets, setTweets} = props
    let [inputText, setInputText] = useState("")
    let yenitweetolustur = () =>{
        if(inputText){
            setTweets([ {
                
                content: inputText,
                comment_count: 0,
                fav_count: 0,
                rt_count: 0,
                user_name: "jessie pinkman",
                user_nick: "@jessie"
              
        },...tweets,])

        setInputText("")

        } 
    }
    return (

        <div className='whatshapen d-flex justify-conten-center align-items-center'>

                <div className="col-md-12">
                   <div className="tweet-item-profile-picture">
                   <img src="/images/136ywx.jpg" alt="" width="13%" className="img-tweet"/>
                   </div>
                    <input value={inputText} type="text" placeholder="Neler oluyor?" onChange={(e) => {setInputText(e.target.value)}} />
                    <div className="tweet-input d-flex justify-content-between align-items-center">
                        <div className="sub-tweet">
                            <a href=""><i className="far fa-smile"></i></a>
                            <a href=""><i className="fas fa-gift"></i></a>
                            <a href=""><i className="far fa-heart"></i></a>
                            <a href=""><i className="fab fa-twitter"></i></a>
                            <a href=""><i className="fas fa-map-marker-alt"></i></a>
                        </div>
                        <div className="side-bar-button d-flex justify-content-end">
                            <button onClick={yenitweetolustur}> Tweetle</button>
                        </div>
                    </div>
                </div>
            
        </div>
    )

}

export default TweetInput;