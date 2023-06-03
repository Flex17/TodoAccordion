import React from "react";
import css from './status.module.scss';
import { StatusType, TaskData } from '../Task';

interface StatusItemProps {
	status: StatusType,
	color: string,
	onClick: (task: TaskData) => void,
	children?: React.ReactNode,
	task: TaskData,
}

const StatusItem: React.FC<StatusItemProps> = ({
	children,
	status,
	onClick,
	color,
	task,
}: StatusItemProps) => {
	const clickHandler = () => onClick(task);

    return (
		<div
			className={css.wrapper}
			style={{backgroundColor: color}}
			onClick={clickHandler}
		>
			<div className={css.choiced}>
				<div>{status}</div>
				{children}
			</div>
		</div>
    );
};

export default StatusItem;
