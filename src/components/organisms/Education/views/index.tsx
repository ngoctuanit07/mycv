import * as React from 'react'
import EducationSection from './styles'
import HeaderSection from '../../../molecules/HeaderSection'

const Education: React.FC = () => {
  return(
    <EducationSection id="education" data-wow-offset="40">
      <HeaderSection>EDUCATION</HeaderSection>
      <div className="row">
        <div className="col-sm-6">
          <div className="education-content">
            <div className="period">
              <h3>Jan 2012 - Apr 2013</h3>
            </div>
            <ul className="ul-education">
              <li className="li-specialty">
                <div className="specialty">
                  <span className="education-icon"><i className="fa fa-file-text"></i></span>
                  <span className="specialty-name">Web Developer</span>
                </div>
              </li>
              <li className="li-university">
                <div className="university">
                  <span className="education-icon"><i className="fa fa-building"></i></span>
                  <span className="university-name">Internet</span>
                </div>
              </li>
            </ul>
            <p className="prg-education">
            Learn how to use git, teamwork, design database, etc
            </p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="education-content">
            <div className="period">
              <h3>2009 - 2012</h3>
            </div>
            <ul className="ul-education">
              <li className="li-specialty">
                <div className="specialty">
                  <span className="education-icon"><i className="fa fa-file-text"></i></span>
                  <span className="specialty-name">Student</span>
                </div>
              </li>
              <li className="li-university">
                <div className="university">
                  <span className="education-icon"><i className="fa fa-university"></i></span>
                  <span className="university-name">Thu Duc Technology College</span>
                </div>
              </li>
            </ul>
            <p className="prg-education">
            I am a student at Thu Duc College of Technology. My major is Software Engineering. I completed this degree from this prestigious patronage. I successfully completed all the credits without any drop and got an Overall Good.
            </p>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
    </EducationSection>
  )
}

export default Education