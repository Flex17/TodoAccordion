import React from "react";
import css from './profile.module.scss';

const Profile: React.FC = () => {

    return (
        <div className={css.wrapper}>
        	<div className={css.avatar}></div>
			<div className={css.textBox}>
				<div className={css.name}>Платов В.С.</div>
				<div className={css.work}>Front-end developer</div>
			</div>
        </div>
    );
};

export default Profile;
