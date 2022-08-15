import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TaskModule } from "src/modules/task/task.module";
import { UsersControllers } from "./user.controller";
import { UserServieces } from "./user.service";
import {UsersEntity} from './users.entity'
import { TaskEntity } from "../task/task.entity";
import { StatusEntity } from "../status/status.entity";
@Module({
    imports:[TaskModule,
        TypeOrmModule.forFeature([UsersEntity,TaskEntity,StatusEntity])],
    controllers:[UsersControllers],
    providers:[UserServieces],
})

export class UserModule{}