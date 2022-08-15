import {Entity, BaseEntity, PrimaryGeneratedColumn,Column, ManyToOne} from 'typeorm'
import { StatusEntity } from '../status/status.entity'
import { UsersEntity } from '../user/users.entity'
@Entity('tasks')

export class TaskEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column({
        length:100,
        type:'varchar'
    })
    title:string

    @ManyToOne(()=>StatusEntity,(status)=>status.tasks)
    status:StatusEntity

    @ManyToOne(()=>UsersEntity,(user)=>user.user_tasks)
    user:UsersEntity
}