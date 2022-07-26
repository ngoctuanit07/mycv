import * as React from "react"
import AboutSection from "./styles"

const About: React.FC = () => {
  return(
    <AboutSection id="about">
      <div className="profile">
        <div className="row">
          <div className="col-sm-4">
            <div className="photo-profile">
              <img src={process.env.PUBLIC_URL + "/images/me.jpg"} alt="Nguyen Ngoc Tuan" />
            </div>
            <a href={process.env.PUBLIC_URL + "/cv/cv_tuannguyen.pdf"} target="cv">
              <div className="download-resume">
                <i className="fa fa-cloud-download" aria-hidden="true"></i>
                <span className="text-download">DOWNLOAD CV</span>
              </div>
            </a>
            <div className="available">
              <i className="fa fa-check" aria-hidden="true"></i>
              <span className="text-available">I'm still learning</span>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="info-profile">
              <h2><span>HI I'M</span> NGUYEN NGOC TUAN</h2>
              <h3>web developer</h3>
              <p>Hello! I’m NGUYEN NGOC TUAN. Web Developer with over 5 years of experience.
              Having an in-depth knowledge including basic HTML, CSS, JavaScript, jQuery, Vuejs,Laravel,Wordpress.I have High responsibility for work, quality in products, and customer satisfaction are my top criteria.</p>
              <div className="row">
                <div className="col-sm-6">
                  <ul className="ul-info">
                    <li className="li-info">
                      <span className="title-info">Age</span>
                      <span className="info">30</span>
                    </li>
                    <li className="li-info">
                      <span className="title-info">Address</span>
                      <span className="info">Tam Thang, Cu jut, Dak Nong</span>
                    </li>
                    <li className="li-info">
                      <span className="title-info">Email</span>
                      <span className="info">tuannguyen0719@gmail.com</span>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <ul className="ul-info">
                    <li className="li-info">
                      <span className="title-info">Phone</span>
                      <span className="info">+8498435089</span>
                    </li>
                    <li className="li-info">
                      <span className="title-info">Website</span>
                      <span className="info"><a href="https://nguyenngoctuan07.com/" rel="nofollow">https://nguyenngoctuan07.com/</a></span>
                    </li>
                    <li className="li-info">
                      <span className="title-info">Nationality</span>
                      <span className="info">Viet Nam</span>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-12">
                  <span className="title-links">Social Links</span>
                  <ul className="ul-social-links">
                    <li className="li-social-links">
                      <a href="https://www.facebook.com/tuannguyendev1991" data-tootik="Facebook" data-tootik-conf="square">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="li-social-links">
                      <a href="https://twitter.com/ngoctuanit07" data-tootik="Twitter" data-tootik-conf="square">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="li-social-links">
                      <a href="https://www.linkedin.com/in/tuan-nguyen-b806b5127/" data-tootik="Linkedin" data-tootik-conf="square">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="li-social-links">
                      <a href="https://www.pinterest.com/skyfrontsdev/_saved/" data-tootik="Pinterest" data-tootik-conf="square">
                        <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutSection>
  )
}
export default About