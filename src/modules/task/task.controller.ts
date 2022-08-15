import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { taskDTO } from "./task.dto";
import { TaskServieces } from "./task.service";
@Controller("/tasks")
export class TaskController {
  constructor(private readonly taskServieces: TaskServieces) { }

  @Get()
  findAll() {
    return this.taskServieces.findAllTasks()
  }
  @Post()
  addTask(@Body() task: taskDTO) {
    return this.taskServieces.addTask(task)
  }
  @Put("/:id")
  modifyTask(@Param("id") taskID: any, @Body() taskTitle: any) {
    
  }
  @Delete("/:id")
  deleteTask(@Param("id") taskID: any) {
   
  }
}