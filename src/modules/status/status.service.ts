import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { StatusEntity } from "./status.entity";

@Injectable()
export class StatusServieces {

    constructor(
        @InjectRepository(StatusEntity)
        private StatusRepository: Repository<StatusEntity>
    ) { }
    findStatus() {
        return this.StatusRepository.find()
    }
}