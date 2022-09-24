import React from 'react'
import main from '../assets/images/main.svg'
import {Logo} from '../components'
import Wrapper from '../assets/wrappers/testing'
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
    <main>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Vel ipsam, nostrum nam
              inventore magnam atque delectus beatae excepturi
               voluptatum earum?
          </p>
          <Link to='/register' className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </main>
    </Wrapper>
  )
  
}


export default Landing;