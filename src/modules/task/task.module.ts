import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StatusEntity } from "../status/status.entity";
import { StatusModule } from "../status/status.module";
import { TaskController } from "./task.controller";
import { TaskEntity } from "./task.entity";
import { TaskServieces } from "./task.service";

@Module({
    imports:[StatusModule,TypeOrmModule.forFeature([TaskEntity,StatusEntity])],
    controllers:[TaskController],
    providers:[TaskServieces],
    exports:[TaskServieces],
})
export class TaskModule{}