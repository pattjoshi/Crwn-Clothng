import React from 'react'
import './HeaderStyles.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { ReactComponent as Logo } from '../../assets/crown.svg';
// This is a special syntex in react for importing SVG.
import { auth } from '../../firebase/FirebaseUtils'
import CartIcon from '../../component/Cart-Icon/CartIcon'
import CartDropdown from '../Cart-Dropdown/CartDropdown'
import { selectCartHidden } from '../../redux/cart/CartSelectors'
import { selectCurrentUser } from '../../redux/user/UserSelectors'

const HeaderComponent = ({ currentUser, hidden }) => {
    // De-structuring the current uers
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            {/* If click the Logo it's take us to Home page */}
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                    {/* If click the Shop it's take us to shop page */}
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                    {/* If click the CONTACT it's take us to CONTACT page */}
                </Link>
                {currentUser ? (
                    // auth.signOut IS dlreacd define method in firebase 
                    <div className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                ) : (
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>
                    // If it is false then take us to 
                )}
                <CartIcon />
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
    )
};



// it is function that is allows to access the state of reducer (rootReducer)
const mapStateToProps = createStructuredSelector({

    currentUser: selectCurrentUser,
    hidden: selectCartHidden

});

export default connect(mapStateToProps)(HeaderComponent);


 // This naming can be anything but mapStateToprops is standard wirh redux codebase
