import React from 'react';

const index = (props) => {

    let { foto } = props

    return (

        <div className="tweets-border d-flex w-100">
        <div className="col-md-2 d-none justify-content-center align-items-start mt-2 d-md-flex">
          <img src="/images/136ywx.jpg"  width="100%" />
        </div>
        <div className="col-md-10 col-12">
          <small style={{fontWeight:"700"}}>jessie</small>
          <a href=""><small>@fessiepinkman</small></a>
          <div className="post-img">
            <img src={foto ? foto : "/images/E1NX6j6UcAQrLCy.png" } width="70%" />
          </div>
          <div
            className="fav-retweet-section d-flex justify-content-between align-items-center">
            <a href=""><i className="far fa-comment"></i></a>
            <a href=""><i className="fas fa-retweet"></i></a>
            <a href=""><i className="far fa-heart"></i></a>
          </div>
        </div>
      </div>


    )
};

export default index;
