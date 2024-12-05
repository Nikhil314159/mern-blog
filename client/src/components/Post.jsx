import React from "react";

export default function Post() {
  return (
    <div>
      <div className="post">
        <div className="image">
          <img
            src="https://terra-drone.com.sa/wp-content/uploads/2023/10/6-2-768x432.png"
            alt=""
          ></img>
        </div>
        <div className="texts">
          <h2>DJI Mavic 3 Pro Drone</h2>
          <p className="info">
            <a className="author">Nikhil Belvalkar</a>
            <time>2024-12-05 00:24</time>
          </p>
          <p className="summary">
            4/3 CMOS Hasselblad Camera | Dual Tele Cameras | Cine Only
            Tri-Camera Apple ProRes Support | 43-Min Max Flight Time |
            Omnidirectional Obstacle Sensing | 15km HD Video Transmission
          </p>
        </div>
      </div>
    </div>
  );
}
