import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import  {config}  from './ormconfig';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UserModule],
})
export class AppModule {}
