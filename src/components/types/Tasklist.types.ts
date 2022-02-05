import { Task } from "./Task.types";

export type TasklistTypes = {
    loading?: boolean
    tasks: [Task]
    onArchiveTask: (id: string) => void
    onPinTask: (id: string) => void
}