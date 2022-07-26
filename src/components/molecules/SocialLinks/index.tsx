import * as React from'react'
import LinkDiv from './styles'

const SocialLinks: React.FC = () => {
  return(
    <LinkDiv>
      <ul>
        <li>
          <a href="https://www.facebook.com/tuannguyendev1991">
            <i className="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/ngoctuanit07">
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/tuan-nguyen-b806b5127/">
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://www.pinterest.com/skyfrontsdev/_saved/">
            <i className="fa fa-pinterest-p"></i>
          </a>
        </li>
      </ul>
    </LinkDiv>
  )
}

export default SocialLinks