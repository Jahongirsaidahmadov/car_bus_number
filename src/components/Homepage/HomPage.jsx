import React from "react";
import { Card } from "react-bootstrap";
import "../Homepage/hompage.css";


function HomPage() {
  return (
    <div>
      <div className="container">
        <div className="homepage">
          <div className="homepage_left">
            <div className="card">
              <div className="card_img">
                <img src="./images/img_1.png" alt="" />
              </div>
              <div className="line">
                <hr />
              </div>

              <div className="number">
                <div className="number_left">
                  <div className="dot"></div>
                  <h2 className="number_left_n"> 01</h2>
                </div>
                <div className="number_right">
                  <h2> U 304 HA</h2>
                  <div className="b_uz_section">
                    <img src="" alt="" />
                    <span>uz</span>
                  </div>
                  <div className="dot"></div>
                </div>
              </div>

              <div className="line">
                <hr />
              </div>

              <div className="card_footer">
                <p>00:09:09</p>
              </div>
            </div>
          </div>

          <div className="homepage_right">
          <div className="homepage_left">
            <div className="card">
              <div className="card_img">
                <img src="./images/img2.png" alt="" />
              </div>
              <div className="line">
                <hr />
              </div>

              <div className="number">
                <div className="number_left">
                  <div className="dot"></div>
                  <h2 className="number_left_n"> 01</h2>
                </div>
                <div className="number_right">
                  <h2> E 777 DY</h2>
                  <div className="b_uz_section">
                    <img src="" alt="" />
                    <span>uz</span>
                  </div>
                  <div className="dot"></div>
                </div>
              </div>

              <div className="line">
                <hr />
              </div>

              <div className="card_footer">
                <p>00:22:13</p>
                <p>jkhgjgf fg ghfjg jhgg</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomPage;
