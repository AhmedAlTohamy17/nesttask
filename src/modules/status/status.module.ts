import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StatusController } from "./status.controller";
import { StatusEntity } from "./status.entity";
import { StatusServieces } from "./status.service";

@Module({
    imports:[TypeOrmModule.forFeature([StatusEntity])],
    controllers:[StatusController],
    providers:[StatusServieces],
})
export class StatusModule {}