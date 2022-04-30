import React from 'react'
import SignIn from '../../component/sign-in/sign-in.component'
import SignUp from '../../component/sign-up/sign-up.component'
import './SignInSndSignUpStyles.scss'



const SignInAndSignUpPage = () => {
    return (

        <div className='sign-in-and-sign-up'>
            {/* <h1>This from signin</h1> */}
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndSignUpPage;
//

