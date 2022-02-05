export type Task = {
    id: string
    title: string
    state: string
}

export type UserTask = {
    task: Task
    onArchiveTask: (id: string) => void
    onPinTask: (id: string) => void
}