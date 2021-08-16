type TaskType = "personal" | "work";

export interface Task {
  name: string;
  type: TaskType;
  isComplete: boolean;
}
