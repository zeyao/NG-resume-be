import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import  {config}  from './ormconfig';
import { ResumeModule } from './resume/resume.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UserModule,
    ResumeModule],
})
export class AppModule {}
