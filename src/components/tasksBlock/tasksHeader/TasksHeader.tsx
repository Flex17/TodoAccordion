import React from "react";
import css from './tasksHeader.module.scss';

const TasksHeader: React.FC = () => {

    return (
        <div className={css.wrapper}>
        	<div className={`${css.date} ${css.text}`}>Дата</div>
			<div className={`${css.task} ${css.text}`}>Задача</div>
			<div className={`${css.status} ${css.text}`}>Статус</div>
        </div>
    );
};

export default TasksHeader;
