import { Task } from "../models/task";

class TaskService {
  
    private static tasks: Task[] = [];
  
    static getTasks(): Task[] {
      return this.tasks;
    }
  
    static addTask(task: Task): void {
      this.tasks.push(task);
    }
  
    static toggleTaskCompletion(id: number): void {
      this.tasks = this.tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
    }
  
    static deleteTask(id: number): void {
      this.tasks = this.tasks.filter(task => task.id !== id);
    }
  }

export default TaskService;