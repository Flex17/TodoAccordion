import React from 'react';
import { TASK_STATE, StatusType, TaskData } from '../Task';
import { Dropdown } from 'react-bootstrap';
import setType from '../../../../helpers/setType';

interface StatusProps {
    onProcess: (task: TaskData) => void,
    onComplete: (task: TaskData) => void,
    onPause: (task: TaskData) => void,
    status: StatusType,
    task: TaskData,
}

const Status: React.FC<StatusProps> = ({
    onProcess,
    onComplete,
    status,
    task,
    onPause,
}: StatusProps) => {

    const dropDownStatus = (status: StatusType) => {
        switch (status) {
            case TASK_STATE.PROCESSING:
                return [
                    {
                        text: "Пауза",
                        onClick: onPause,
                    },
                    {
                        text: 'Завершить',
                        onClick: onComplete,
                    }
                ]
            case TASK_STATE.COMPLETED:
                return [
                    {
                        text: "Пауза",
                        onClick: onPause,
                    },
                    {
                        text: "Начать выполнять",
                        onClick: onProcess,
                    }
                ]
        default:
            return [
                {
                    text: "Завершить",
                    onClick: onComplete,
                },
                {
                    text: "Начать выполнять",
                    onClick: onProcess,
                }
            ]
        }
    }

    const currentType = setType(status);

    return (
        <Dropdown>
            <Dropdown.Toggle variant={currentType.type} id="dropdown-basic">
                {currentType.text}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {
                    dropDownStatus(status).map((status, i) => {
                        return (
                            <div onClick={() => status.onClick(task)}>
                                <Dropdown.Item key={i}>
                                    {status.text}
                                </Dropdown.Item>
                            </div>
                        )
                    })
                }
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default Status;
