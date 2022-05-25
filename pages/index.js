import React, { useState } from "react"
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Tweet from "../components/Tweet/index"
import TweetInput from '../components/TweetInput'
import Popup from '../components/TweetPopup/Popup'
import JournalPopup from "../components/JournalPopup"


let tweetler = [
  {
    content: "tweet icerigi",
    comment_count: 521,
    fav_count: 62535,
    rt_count: 19,
    user_name: "jessie pinkman",
    user_nick: "@jessie"
  },
  {
    content: "tweet icerigi1",
    comment_count: 575,
    fav_count: 624243,
    rt_count: 19,
    user_name: "jessie pinkman",
    user_nick: "@jessie"
  },
  {
    content: "tweet icerigi2",
    comment_count: 543,
    fav_count: 62213,
    rt_count: 19,
    user_name: "jessie pinkman",
    user_nick: "@jessie"
  },
  {
    content: "tweet icerigi3",
    comment_count: 5897,
    fav_count: 6235,
    rt_count: 19,
    user_name: "jessie pinkman",
    user_nick: "@jessie",
    video_url: "https://www.w3schools.com/html/mov_bbb.mp4",
    media_type: "video",
  },
  {
    content: "tweet icerigi3",
    comment_count: 5897,
    fav_count: 6235,
    rt_count: 19,
    user_name: "jessie pinkman",
    user_nick: "@jessie",
    image_url: "https://www.camhotel.com.tr/uploads/ulkemizin-dort-bir-yanindan-guzel-manzara-fotograflari.jpg",
    media_type: "video",
  },
  {
    content: "tweet icerigi3",
    comment_count: 5897,
    fav_count: 6235,
    rt_count: 19,
    user_name: "jessie pinkman",
    user_nick: "@jessie",
    video_url: "https://www.w3schools.com/html/mov_bbb.mp4",
    media_type: "video",
  },
  {
    content: "tweet icerigi3",
    comment_count: 5897,
    fav_count: 6235,
    rt_count: 19,
    user_name: "jessie pinkman",
    user_nick: "@jessie",
    image_url: "https://www.camhotel.com.tr/uploads/ulkemizin-dort-bir-yanindan-guzel-manzara-fotograflari.jpg",
    media_type: "video",
  },
  ,
  {
    content: "tweet icerigi3",
    comment_count: 5897,
    fav_count: 6235,
    rt_count: 19,
    user_name: "jessie pinkman",
    user_nick: "@jessie",
    video_url: "https://www.w3schools.com/html/mov_bbb.mp4",
    media_type: "video",
  },
  {
    content: "tweet icerigi3",
    comment_count: 5897,
    fav_count: 6235,
    rt_count: 19,
    user_name: "jessie pinkman",
    user_nick: "@jessie",
    image_url: "https://www.camhotel.com.tr/uploads/ulkemizin-dort-bir-yanindan-guzel-manzara-fotograflari.jpg",
    media_type: "video",
  },
]
export default function Home() {
  let [tweets, setTweets] = useState(tweetler)
  const [popup, setPopup] = useState(false)
  const [dataTweet, setDataTweet] = useState(null)

  console.log(dataTweet)

  return (

    <>

      {
        popup && <Popup setPopup={setPopup} dataTweet={dataTweet} />
      }

      <div className='container-fluid'>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-light d-md-none d-flex">
          <a className="navbar-brand" href="#" style={{ color: "black" }}>
            <img src="/images/136ywx.jpg" width='30px' height='30px' className='d-inline-block align-top' style={{ borderRadius: "50%" }} />
            Anasayfa
          </a>
          <i className="far fa-star"></i>
        </nav>
        <div className="container-fluid " style={{ marginTop: "0px" }}>

          <div className="side-bar ">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-2 col-sm-1 only p-0">
                <div className="sidebar-navigation mt-3">
                  <div className="twitter-logo">
                    <i className="fab fa-twitter"></i>
                  </div>
                  <div className="side-bar-nav active ">
                    <a href="" ><i className="fas fa-home"></i>
                      <span className="d-none d-lg-flex">Anasayfa</span></a>
                  </div>
                  <div className="side-bar-nav ">
                    <a href=""><i className="fas fa-hashtag"></i>
                      <span className="d-none d-lg-flex">Keşfet</span></a>
                  </div>
                  <div className="side-bar-nav">
                    <a href=""><i className="far fa-bell"></i>
                      <span className="d-none d-lg-flex">Bildirimler</span></a>
                  </div>
                  <div className="side-bar-nav">
                    <a href=""><i className="far fa-envelope"></i>
                      <span className="d-none d-lg-flex">Mesajlar</span></a>
                  </div>
                  <div className="side-bar-nav">
                    <a href=""><i className="far fa-user"></i>
                      <span className="d-none d-lg-flex">Profil</span></a>
                  </div>
                  <div className="side-bar-nav">
                    <a href=""><i className="fas fa-ellipsis-h"></i>
                      <span className="d-none d-lg-flex">Daha fazla</span></a>
                  </div>
                  <div className="side-bar-button w-100 mt-3">
                    <button className="d-none d-lg-block">Tweetle</button>
                  </div>
                  <div className="sidebar-user-account mt-3">

                    <div className="row d-flex justify-content-between align-items-center mr-0" >
                      <div className="user-name d-flex align-items-center float-left ml-2 " >
                        <img src="/images/136ywx.jpg" alt="" width="10%" style={{ borderRadius: "50%" }} />
                        <div className="column-user d-flex justify-content-center align-items-center flex-column ml-3">
                          <a href="" style={{ fontSize: "14px", color: "rgba(49, 49, 49, 0.836)" }}><strong>walter white</strong></a>
                          <a href="" style={{ fontSize: "14px", color: "rgba(48, 47, 47, 0.836)" }}><small>@walterwhite</small></a></div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-11 anasayfa">
                <div className="row d-flex justify-content-between align-items-center home-none ">
                  <div className="col-md-4">
                    <div className="twitter-header-none">
                    <div className="home-text d-flex justify-content-between align-items-center">
                      <img src="/images/136ywx.jpg" alt="" width="15%" style={{ borderRadius: "50%", display: "none" }} />
                      <p>Anasayfa</p>
                    </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="home-text-icon d-flex justify-content-center align-items-center">
                      <i className="far fa-star"></i>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-md-12 "> 
                    <div className="neler-oluyor">

                      <TweetInput tweets={tweets} setTweets={setTweets} />
                      <div className="tweets">
                        <div className="row">
                          {
                            tweets && tweets.map((data, key) => (
                              <>
                                <div className="tweets-border d-flex w-100" style={{ borderTop: "1px solid rgb(230, 222, 222)" }} onClick={() => { setPopup(true); setDataTweet(data) }}>
                                  <div className="col-md-2 d-none justify-content-center align-items-center d-md-flex">
                                    <img src="/images/136ywx.jpg" width="100%" />
                                  </div>
                                  <div className="col-md-10 col-12 ">
                                    <small style={{ fontWeight: "700" }}>{data.user_name || ""}</small>
                                    <a href=""><small>{data.user_nick}</small></a>
                                    <p>{data.content}
                                      <div className='tweet-content-image d-flex justify-content-between align-items-center'>
                                        {
                                          data?.image_url && <img style={{ borderRadius: "none" }} src={data.image_url} width="100%" />
                                        }

                                      </div>
                                    </p>
                                    <div className="fav-retweet-section d-flex justify-content-between align-items-center">
                                      <a href=""><i className="far fa-comment"></i>  {data.comment_count}</a>
                                      <a href=""><i className="fas fa-retweet"></i>  {data.rt_count}</a>
                                      <a href=""><i className="far fa-heart"></i>  {data.fav_count}</a>
                                    </div>
                                  </div>
                                </div>
                              </>
                            ))
                          }

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 rightbar ">
                <div className="tw-search">
                  <div className="inp-icn d-flex  align-items-center">
                    <i className="fas fa-search" ></i>
                    <input type="text" placeholder="Twitter'da Ara" />
                  </div>
                </div>
                <div className="right-hastage">
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-12 ">
                      <div className="daily d-flex justify-content-between align-items-center">
                        <p style={{ fontSize: "13px", fontWeight: "600" }}>Gündemdekiler</p>
                        <i className="fas fa-cog float-right" id="journal"  style={{ fontSize: "13px", cursor:"pointer"}}></i>
                      </div>
                    </div>

                  </div>
                  <div className="hastage-gundem">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="trending d-flex justify-content-between align-items-center">
                          <small>1-Sadece Twitterda</small>
                          <i className="fas fa-ellipsis-h"></i>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="hashtag d-flex float-left align-items-center flex-column">
                          <strong>#Sigarayazam</strong>
                          <small>23B Tweet</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hastage-gundem">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="trending d-flex justify-content-between align-items-center">
                          <small>2-Politika</small>
                          <i className="fas fa-ellipsis-h"></i>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="hashtag d-flex float-left align-items-center flex-column">
                          <strong>#ÖzürdileTrump</strong>
                          <small>23B Tweet</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hastage-gundem">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="trending d-flex justify-content-between align-items-center">
                          <small>3-Gündemdekiler</small>
                          <i className="fas fa-ellipsis-h"></i>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="hashtag d-flex float-left align-items-center flex-column">
                          <strong>#Haddinibilamerika</strong>
                          <small>23B Tweet</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="daha-fazla">
                    <a href="">Daha fazla göster</a>
                  </div>
                </div>
                <div className="who-follow">
                  <p>Kimi takip etmeli</p>
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-7">
                      <div className="kullanici-resim d-flex">
                        <img src="/images/136ywx.jpg" alt="" width="50%" />
                        <div className="user-nics d-flex flex-column">
                          <strong>Ahmet</strong>
                          <small>@ahmet
                          </small>
                        </div>
                      </div>

                    </div>

                    <div className="col-md-5">
                      <div className="follow-btn">
                        <button>Takip et</button>
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-between align-items-center mt-2">
                    <div className="col-md-7">
                      <div className="kullanici-resim d-flex">
                        <img src="/images/136ywx.jpg" alt="" width="50%" />
                        <div className="user-nics d-flex flex-column ">
                          <strong>Ahmet</strong>
                          <small>@ahmet</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="follow-btn">
                        <button>Takip et</button>
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-between align-items-center mt-2">
                    <div className="col-md-7">
                      <div className="kullanici-resim d-flex">
                        <img src="/images/136ywx.jpg" alt="" width="50%" />
                        <div className="user-nics d-flex flex-column">
                          <strong>Ahmet</strong>
                          <small>@ahmet</small>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-5">
                      <div className="follow-btn">
                        <button>Takip et</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer_section d-flex p-2">
                  <div className="row d-flex ">
                    <div className="col-12">
                      <a href="">Hizmet sartlari</a>
                      <a href="">gizlilik politikasi</a>
                      <a href="">cerez politikasi</a>
                      <a href="">iletisim bilgileri</a>
                      <a href="">erisebilirlik</a>
                      <a href="">reklam bilgileri</a>
                      <a href="">daha fazla</a>
                      <a href="">© 2022 Twitter, Inc.</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
          <div className="mobile-nav justify-content-between align-items-center d-flex d-md-none">
            <div className="row d-flex d-md-none justify-content-center align-items-center w-100">
              <div className="mobile-icon d-flex d-md-none justify-content-center align-items-center w-100 ">
                <div className="col-3">
                  <i className="fas fa-home"></i>
                </div>
                <div className="col-3">
                  <i className="fas fa-search"></i>
                </div>
                <div className="col-3">
                  <i className="far fa-bell"></i>
                </div>
                <div className="col-3">
                  <i className="far fa-envelope"></i>
                </div>
              </div>
            </div>
          </div>


        </div>

      </div>



    </>

  )
}
