import React, { useState } from 'react'



const Popup = (props) => {

  let { setPopup, dataTweet } = props;

  return (
    <div className='popup-border d-flex justify-content-center align-items-center'>
      <div className="popup">
        <button href="#" className="close-popup" onClick={() => setPopup(false)}><i className="far fa-times"></i></button>

        <div className="tweets-border d-flex w-100" style={{ borderTop: "1px solid rgb(230, 222, 222)" }} onClick={() => { setPopup(true); setDataTweet(data) }}>
          <div className="col-md-2 d-none justify-content-center align-items-center d-md-flex">
            <img src="/images/136ywx.jpg" width="100%" />
          </div>
          <div className="col-md-10 col-12 mt-5 ">
            <small style={{ fontWeight: "700" }}>{dataTweet.user_name || ""}</small>
            <a href=""><small>{dataTweet.user_nick}</small></a>
            <p>{dataTweet.content}
              <div className='tweet-content-image d-flex justify-content-between align-items-center'>
                {
                  dataTweet?.image_url && <img style={{ borderRadius: "none" }} src={dataTweet.image_url} width="100%" />
                }

              </div>
            </p>
            <div className="fav-retweet-section d-flex justify-content-between align-items-center">
              <a href=""><i className="far fa-comment"></i>{dataTweet.comment_count}</a>
              <a href=""><i className="fas fa-retweet"></i>{dataTweet.rt_count}</a>
              <a href=""><i className="far fa-heart"></i>{dataTweet.fav_count}</a>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Popup