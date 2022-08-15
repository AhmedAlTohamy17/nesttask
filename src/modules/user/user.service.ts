import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { TaskServieces } from "src/modules/task/task.service";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersEntity } from "./users.entity";
import { Repository } from "typeorm";
import CreatUserDto from "./user.dto";
import { taskDTO } from "../task/task.dto";


@Injectable()
export class UserServieces {

    constructor(private readonly taskServieces: TaskServieces,
        @InjectRepository(UsersEntity)
        private UserRepository: Repository<UsersEntity>
    ) { }

    findAllUsers() {
        return this.UserRepository.find()
    }
    findOneUser(userId: number) {
        return this.UserRepository.findOneBy({ id: userId })
    }
    async findUserTasks(userID: any) {
        let user = await this.UserRepository.findOneBy({ id: userID })
        return user.user_tasks
    }

    addUser(user: CreatUserDto) {
        let newUser = this.UserRepository.insert(user)
        return newUser
    }
    modifyUser(userID: any, user: CreatUserDto) {
        let wantedUser = this.UserRepository.update({ id: userID }, user)
        return wantedUser
    }
    deleteUser(userID: any) {
        return this.UserRepository.delete(userID)
        
    }
}
