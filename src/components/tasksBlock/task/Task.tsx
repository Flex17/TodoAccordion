import React from "react";
import Status from './status/Status';
import css from './task.module.scss';

const PROCESSING = 'В процессе';
const COMPLETED = 'Выполнена';
const PAUSE = 'На паузе';


export type StatusType = typeof PROCESSING | typeof COMPLETED | typeof PAUSE;
export interface TaskData {
	date: string,
	task: string,
	status: StatusType,
}
export const TASK_STATE = {
	PROCESSING: PROCESSING as StatusType,
	COMPLETED: COMPLETED as StatusType,
	PAUSE: PAUSE as StatusType,
}

export interface TaskProps {
	task: TaskData,
	onProcess: (task: TaskData) => void,
	onComplete: (task: TaskData) => void,
	onPause: (task: TaskData) => void,
}

const Task: React.FC<TaskProps> = ({
	task,
	onComplete,
	onProcess,
	onPause,
}: TaskProps) => {
	const {date, status} = task;

    return (
        <div className={css.wrapper}>
        	<div className={css.date}>{date}</div>
			<div className={css.task}>{task.task}</div>
			<Status
				status={status}
				onPause={onPause}
				task={task}
				onProcess={onProcess}
				onComplete={onComplete}
			/>
        </div>
    );
};

export default Task;
