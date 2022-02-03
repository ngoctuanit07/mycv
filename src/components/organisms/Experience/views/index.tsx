import * as React from 'react'
import ExperienceSection from './styles'
import HeaderSection from '../../../molecules/HeaderSection'

const Experience: React.FC = () => {
  return(
    <ExperienceSection id="experience" data-wow-offset="40">
      <HeaderSection>EXPERIENCE</HeaderSection>
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <span className="icon-experience">
            <i className="fa fa-briefcase"></i>
          </span>
          <div className="all-experience">
            <div className="experience-content">
              <span className="period-experience"> 8/2018 - present</span>
              <h3 className="specialty-name">Web Developer</h3>
              <h3 className="company-name">Viet A Technology Joint Stock Company </h3>
              <div className="prg-experience">
                <p>Building interfaces for clinic software using vuejs technology</p>
              </div>
            </div>
            <div className="experience-content">
              <span className="period-experience">2017 - 8/2018</span>
              <h3 className="specialty-name">Web Developer</h3>
              <h3 className="company-name">Levinci  Company</h3>
              <p className="prg-experience">
               Work: Develop, maintain, write extensions, themes magento 1  for projects the company 
              </p>
            </div>
            <div className="experience-content">
              <span className="period-experience">2016 - 2017</span>
              <h3 className="specialty-name">Web Developer</h3>
              <h3 className="company-name">Skyfronts Technology Company</h3>
              <p className="prg-experience">
               Work: Develop, maintain, write extensions, themes magento 1  for projects the company 
              </p>
            </div>
            <div className="experience-content">
              <span className="period-experience">2014 - 2016</span>
              <h3 className="specialty-name">Web Developer</h3>
              <h3 className="company-name">PhuNam Technology Company</h3>
              <p className="prg-experience">
               Work: Develop, maintain, write extensions, themes magento 1 for projects the company 
              </p>
            </div>
            <div className="experience-content">
              <span className="period-experience">2013 - 2014</span>
              <h3 className="specialty-name">Web Developer</h3>
              <h3 className="company-name">Vinadigistar Information Technology and Solution Company</h3>
              <p className="prg-experience">
                Website design and new module programming according to company cms
              </p>
            </div>
            <div className="experience-content">
              <span className="period-experience">2009 - 2012</span>
              <h3 className="specialty-name">Student</h3>
              <h3 className="company-name">Thu Duc Technology College</h3>
              <p className="prg-experience">
               I am a student at Thu Duc College of Technology. My major is Software Engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ExperienceSection>
  )
}

export default Experience
