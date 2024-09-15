import { Injectable } from "@angular/core";
import {type NewTaskData } from "./task/task.model";

@Injectable({providedIn: 'root'})
export class TasksService {
  private  tasks = [
        {
          id:'t1',
          userId:'u1',
          title:'Master Angular for user 1',
          summary:'Learn basics of Angular',
          dueDate: '2025-12-1'
        },
        {
          id:'t2',
          userId:'u2',
          title:'Master Angular for user 2',
          summary:'Learn basics of Angular',
          dueDate: '2025-12-31'
        },
        {
          id:'t3',
          userId:'u3',
          title:'Master Angular for user 3',
          summary:'Learn basics of Angular',
          dueDate: '2025-12-31'
        },
        {
          id:'t4',
          userId:'u4',
          title:'Master Angular for user 4',
          summary:'Learn basics of Angular',
          dueDate: '2025-12-31'
        }
      ];


      getUserTasks(userId:string){
        return this.tasks.filter((task) => task.userId === userId)
      }


      addTask(taskdata:NewTaskData, userId: string){
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            summary: taskdata.summary,
            dueDate: taskdata.date,
            title: taskdata.title
          })
      }

      removeTask(id:String){
        this.tasks = this.tasks.filter((task)=> task.id!==id);
      }

      


}