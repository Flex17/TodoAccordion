import React from "react";
import css from './header.module.scss';
import Profile from './profile/Profile';

const Header: React.FC = () => {

    return (
        <div className={css.wrapper}>
            <div className={css.logo}>Список дел</div>
            <Profile/>
        </div>
    );
};

export default Header;
