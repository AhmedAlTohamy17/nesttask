import { Entity, BaseEntity, PrimaryGeneratedColumn,Column, OneToMany } from 'typeorm'
import { TaskEntity } from '../task/task.entity'
@Entity('status')
export class StatusEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column({
        length:100,
        default:"pending"
    })
    title:string

    @OneToMany(()=>TaskEntity,(task)=>task.status)
    tasks:TaskEntity
}