import React from "react";
import image from "../../assets/images/px3.jpg";
import image2 from "../../assets/images/px2.jpg";
import image3 from "../../assets/images/px.jpg";
import './Blog.css'

export default function () {
  return (
    <div className="blog">
      <div className="container ">
        <div className="text-center mt-5 mb-4 ">
          <h1>Latest Post From Blog</h1>
          <h3>OUR BLOG POST</h3>
        </div>

        <div className="row">
          <div className="col-md">
            <img src={image} alt="" />
            <div className="text-start">
              <span>08 April, 2019 -</span>
              <span> 25 likes -</span>
              <span>28 views</span>
              <h3>Latest Fashion Trend for Women new trens, new fashion</h3>
              <a href="" className="text-black text-decoration-none ">
                Read More
              </a>
            </div>
          </div>

          <div className="col-md">
            <img src={image2} alt="" />
            <div className="text-start">
              <span>08 April, 2019 -</span>
              <span> 25 likes -</span>
              <span>28 views</span>
              <h3>Latest Fashion Trend for Women new trens, new fashion</h3>
              <a href="" className="text-black text-decoration-none ">
                Read More
              </a>
            </div>
          </div>

          <div className="col-md">
            <img src={image3} alt="" />
            <div className="text-start">
              <span>08 April, 2019 -</span>
              <span> 25 likes -</span>
              <span>28 views</span>
              <h3>Latest Fashion Trend for Women new trens, new fashion</h3>
              <a href="" className="text-black text-decoration-none ">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
