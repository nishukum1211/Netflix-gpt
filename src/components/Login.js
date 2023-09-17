import { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [IsSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!IsSignInForm);
  }
  return (
    <div >
      <Header/>
      <div className='absolute'>
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo" />
      </div>
      <form className='w-3/12 absolute p-10 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
          <h1 className='font-bold text-2xl py-4 text-white w-1/2 m-1'>{IsSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!IsSignInForm && (
              <input type="text" placeholder="Full Name" className='my-2 p-2 w-full bg-gray-700'>

              </input>
          )}
          <input type="text" placeholder="Email Address" className='my-2 p-2 w-full bg-gray-700'></input>
        
          <input type="password" placeholder="password" className='my-2 p-2 w-full bg-gray-700'></input>
          <button className='my-4 p-4 bg-red-600 w-full'>{IsSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className='p-4 curser-pointer ' onClick={toggleSignInForm}>
            {IsSignInForm 
              ? "new to netflix? sign up now" 
              : "Already registered? Sign In Now"}

          </p>


      </form>
      
    </div>
    
    
  )
}

export default Login