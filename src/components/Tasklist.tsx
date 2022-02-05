import React, { FC } from 'react';
import Task from './Task';
import { TasklistTypes } from './types/Tasklist.types';

const Tasklist: FC<TasklistTypes> = ({ loading, tasks, onArchiveTask, onPinTask }) => {
    const events = {
        onArchiveTask,
        onPinTask
    };

    const LoadingRow = (
        <div className="loading-item">
            <span className="glow-checkbox" />
            <span className="glow-text">
                <span>Loading</span> <span>cool</span> <span>state</span>
            </span>
        </div>
    );
    if (loading) {
        return (
            <div className="list-items">
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
            </div>
        );
    }

    if (!tasks.length) {
        return (
            <div className="list-items">
                <div className="wrapper-message">
                    <span className="icon-check" />
                    <div className="title-message">You have no tasks</div>
                    <div className="subtitle-message">Sit back and relax</div>
                </div>
            </div>
        )
    }

    const tasksInOrder = [
        ...tasks.filter(t => t.state === 'TASK_PINNED'),
        ...tasks.filter(t => t.state !== 'TASK_PINNED'),
    ];

    return <div>
        {tasksInOrder.map(task => (
            <Task key={task.id} task={task} {...events} />
        ))}
    </div>;
};

export default Tasklist;
