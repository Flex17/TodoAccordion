import { StatusType, TASK_STATE } from '../components/tasksBlock/task/Task';

const setType = (status: StatusType) => {
	if (status === TASK_STATE.PROCESSING) {
		return {
			type: 'primary',
			text: 'В процессе'
		};
	} else if (status === TASK_STATE.COMPLETED) {
		return {
			type: 'success',
			text: 'Выполнена'
		};
	}
	return {
		type: 'danger',
		text: 'На паузе'
	};
}

export default setType;
