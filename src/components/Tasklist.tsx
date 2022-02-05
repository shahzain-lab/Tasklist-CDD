import React, { FC } from 'react';
import Task from './Task';
import { TasklistTypes } from './types/Tasklist.types';
import { useSelector, useDispatch } from 'react-redux'
import { updateTaskState } from '../lib/store';
import { Task as TaskType } from './types/Task.types';

const PureTasklist: FC<TasklistTypes> = ({ loading, tasks, onArchiveTask, onPinTask }) => {
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

export default PureTasklist;


export const Tasklist = () => {
    const tasks = useSelector((state: any) => state.tasks)
    const dispatch = useDispatch();

    const pinTask = (value: string) => {
        dispatch(updateTaskState({ id: value, newTaskState: 'TASK_PINNED' }))
    }

    const archiveTask = (value: string) => {
        dispatch(updateTaskState({ id: value, newTaskState: 'TASK_ARCHIVED' }))
    }
    const filteredTasks = tasks.filter((t: TaskType) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED');
    return (
        <PureTasklist
            tasks={filteredTasks}
            onPinTask={task => pinTask(task)}
            onArchiveTask={task => archiveTask(task)}
        />
    );
}