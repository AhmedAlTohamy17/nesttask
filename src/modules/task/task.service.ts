import {Injectable } from "@nestjs/common";
import { TaskEntity } from "./task.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { taskDTO } from "./task.dto";
import { StatusEntity } from "../status/status.entity";

@Injectable()
export class TaskServieces{
    constructor(
        @InjectRepository(TaskEntity)
        private TaskRepository: Repository<TaskEntity>,
        @InjectRepository(StatusEntity)
        private StatusRepository: Repository <StatusEntity>
    ) { }
findAllTasks(){
    return this.TaskRepository.find()
}

findOneTask(userID:any){
    return this.TaskRepository.findOneBy({ id: userID})
}

addTask(task:taskDTO){
    let newTask = this.TaskRepository.create(task)
    newTask.save()
    return newTask
}

modifyTask(taskID,taskTitle){

}

deleteTask(taskID){

}
deleteTasks(userID){

}
}