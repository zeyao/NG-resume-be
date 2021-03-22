import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config : TypeOrmModuleOptions = {
    type : 'postgres',
    host : process.env.DB_HOST,
    port : Number(process.env.PORT),
    username : process.env.USER_NAME,
    password : process.env.PASSWORD,
    database : process.env.DB,
    entities: [__dirname + '/**/*.entity.{js,ts}'],
    synchronize : false,
    migrations: ['dist/db/migration/**.js'],
    migrationsRun : false,
    cli : {
        migrationsDir: 'db/migration',
        entitiesDir: 'src/entities'
    }
};



