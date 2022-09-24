import React from 'react';
import {Link} from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg'

 const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt="error-page" />
        <h3>ohh! page not found</h3>
        <p>Lorem ipsum dolor sit, amet 
          consectetur adipisicing elit.
          Dignissimos nisi possimus ratione
          nemo deserunt omnis provident.
        </p>
        <Link to='/'>back to home</Link>
      </div>


    </Wrapper>
  )
}

export default Error