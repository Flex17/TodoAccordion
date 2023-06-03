import React, { useState } from 'react';
import css from './tasksBlock.module.scss';
import TasksHeader from './tasksHeader/TasksHeader';
import Accordion from 'react-bootstrap/Accordion';
import AccordionHeader from 'react-bootstrap/AccordionHeader';
import Task, { TASK_STATE, TaskData } from './task/Task';

const TasksBlock: React.FC = () => {

	const [completedTasks, setCompletedTasks] = useState<TaskData[]>([
		{
			task: 'Оплатить счета',
			date: '27.05.2023',
			status: TASK_STATE.COMPLETED,
		},
		{
			task: 'Забрать монитор',
			date: '29.05.2023',
			status: TASK_STATE.COMPLETED,
		},
		{
			task: 'Дописать статью',
			date: '21.05.2023',
			status: TASK_STATE.COMPLETED,
		},
	]);
	const [tasks, setTasks] = useState<TaskData[]>([
		{
			task: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять век',
			date: '25.05.2023',
			status: TASK_STATE.PROCESSING,
		},
		{
			task: 'Приготовить ужин',
			date: '01.06.2023',
			status: TASK_STATE.PROCESSING,
		},
		{
			task: 'Доделать сайт',
			date: '20.05.2023',
			status: TASK_STATE.PROCESSING,
		},
	]);
	const [futureTasks, setFutureTasks] = useState<TaskData[]>([
		{
			task: 'Выкинуть мусор',
			date: '12.06.2023',
			status: TASK_STATE.PAUSE,
		},
		{
			task: 'Встреча',
			date: '07.06.2023',
			status: TASK_STATE.PAUSE,
		},
		{
			task: 'Поход в кино',
			date: '05.06.2023',
			status: TASK_STATE.PAUSE,
		},
	]);

	// * При завершении задачи
	const onCompleteTask = (task: TaskData) => {
		if (completedTasks) {
			setCompletedTasks([...completedTasks, {...task, status: TASK_STATE.COMPLETED}]);
		} else {
			setCompletedTasks([{ ...task, status: TASK_STATE.COMPLETED }]);
		}

		setTasks(tasks?.filter(elem => elem !== task))
		setFutureTasks(futureTasks?.filter(elem => elem !== task))
	}

	// * При установки задачи в статус в работе
	const onProcessTask = (task: TaskData) => {
		if (tasks) {
			setTasks([...tasks, {...task, status: TASK_STATE.PROCESSING}]);
		} else {
			setTasks([{...task, status: TASK_STATE.PROCESSING}]);
		}

		setCompletedTasks(completedTasks?.filter(elem => elem !== task));
		setFutureTasks(futureTasks?.filter(elem => elem !== task));
	}

	const onPauseTask = (task: TaskData) => {
		if (futureTasks) {
			setFutureTasks([...futureTasks, {...task, status: TASK_STATE.PAUSE}]);
		} else {
			setFutureTasks([{...task, status: TASK_STATE.PAUSE}]);
		}

		setCompletedTasks(completedTasks?.filter(elem => elem !== task));
		setTasks(tasks?.filter(elem => elem !== task));
	}


    return (
        <div className={css.wrapper}>
        	<div className={css.title}>Задачи</div>
			<TasksHeader />
			<Accordion defaultActiveKey="1">
				<Accordion.Item eventKey="0">
					<AccordionHeader>Выполненные задачи</AccordionHeader>
					<Accordion.Body>
						{
							completedTasks.map(task => (
								<Task
									task={task}
									onProcess={onProcessTask}
									onComplete={onCompleteTask}
									onPause={onPauseTask}
								/>
							))
						}
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="1">
					<Accordion.Header>Задачи на сегодня</Accordion.Header>
					<Accordion.Body>
						{
							tasks.map(task => (
								<Task
									task={task}
									onProcess={onProcessTask}
									onComplete={onCompleteTask}
									onPause={onPauseTask}
								/>
							))
						}
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="2">
					<Accordion.Header>Предстоящие задачи</Accordion.Header>
					<Accordion.Body>
						{
							futureTasks.map((task, i) => (
								<Task
									task={task}
									onProcess={onProcessTask}
									onComplete={onCompleteTask}
									onPause={onPauseTask}
									key={i}
								/>
							))
						}
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
        </div>
    );
};

export default TasksBlock;
