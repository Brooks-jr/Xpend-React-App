import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__inner-box">
            <h1 className="inner-box__header"><span>X</span>pend</h1>
            <p className="inner-box__text">Start managing your expenses by signing in!</p>
            <button className="button inner-box__button" onClick={startLogin}>Sign In With <span>Google</span></button>
            <p className="inner-box__github">Xpend @ github.com/Brooks-jr/Xpend-React-App</p>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);