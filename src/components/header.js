import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header className="header">
        <div className="container">
            <div className="header__content">
                <Link className="header__link" to="/dashboard">
                    <h1 className="header__link-text"><span>X</span>pend</h1>
                </Link>
                <button className="button button--link" onClick={startLogout}>Sign Out</button>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);