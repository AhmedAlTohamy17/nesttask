import { Module } from '@nestjs/common';
import { ConfigModule} from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatusEntity } from './modules/status/status.entity';
import { StatusModule } from './modules/status/status.module';
import { TaskEntity } from './modules/task/task.entity';
import { TaskModule } from './modules/task/task.module';
import { UserModule } from './modules/user/user.module';
import { UsersEntity } from './modules/user/users.entity';


@Module({
  imports: [UserModule,
    TaskModule,
    StatusModule,
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: 5432,
      entities: [UsersEntity,TaskEntity,StatusEntity],
      synchronize: true,
      autoLoadEntities: true
    })

  ],
})
export class AppModule { }
