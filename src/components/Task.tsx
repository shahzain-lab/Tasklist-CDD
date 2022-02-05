import React, { FC } from 'react';
import { UserTask } from './types/Task.types';


const Task: FC<UserTask> = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
    return <div className={`list-item ${state}`}>
        <label className='checkbox'>
            <input
                type="checkbox"
                defaultChecked={state === 'TASK_ARCHIVED'}
                disabled={true}
                name="checked"
            />
            <span
                className='checkbox-custom'
                onClick={() => onArchiveTask(id)}
                id={`archiveTask-${id}`}
            />
        </label>
        <div className='title'>
            <input
                type="text"
                value={title}
                readOnly={true}
                placeholder="Input title"
            />
        </div>
        <div className='actions'
            onClick={event => event.stopPropagation()}

        >
            {state !== 'TASK_ARCHIVED' && (
                <a onClick={() => onPinTask(id)}>
                    <span className={`icon-star`} id={`pinTask-${id}`} aria-label={`pinTask-${id}`} />
                </a>
            )}
        </div>
    </div>;
};

export default Task;
