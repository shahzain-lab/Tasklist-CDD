import React from 'react'
import * as TaskStories from './Task.stories';
import PureTasklist from './Tasklist';

export default {
    title: 'tasklist stories',
    component: PureTasklist,
    decorators: [story => <div style={{padding: '3rem'}}>{story()}</div>]
}


const Template = args => <PureTasklist {...args} />

export const Default = Template.bind({});
Default.args = {
    tasks: [
        {...TaskStories.Default.args.tasks, id: '1', title: 'Task no.1'},
        {...TaskStories.Default.args.tasks, id: '2', title: 'Task no.2'},
        {...TaskStories.Default.args.tasks, id: '3', title: 'Task no.3'},
        {...TaskStories.Default.args.tasks, id: '4', title: 'Task no.4'},
        {...TaskStories.Default.args.tasks, id: '5', title: 'Task no.5'},
        {...TaskStories.Default.args.tasks, id: '6', title: 'Task no.6'},
    ]
}


export const WithPinnedTask = Template.bind({});
WithPinnedTask.args = {
    tasks: [
        ...Default.args.tasks.slice(0, 5),
        {id: '6', title: 'task 6 (pinned)', state: 'TASK_PINNED'}
    ]
}

export const Loading = Template.bind({});
Loading.args = {
    tasks: [],
    loading: true
}

export const Empty = Template.bind({});
Empty.args = {
    ...Loading.args,
    loading: false
}

