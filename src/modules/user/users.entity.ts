import { Entity, BaseEntity, PrimaryGeneratedColumn,Column, OneToMany } from 'typeorm'
import { TaskEntity } from '../task/task.entity'

@Entity('users')
export class UsersEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ 
        nullable:false,
        type:'varchar',
        length:50
    })
    username:string

    @Column({ 
        nullable:false,
    })
    password:string

    @OneToMany(()=>TaskEntity,(task)=>task.user)
    user_tasks:TaskEntity[]

}