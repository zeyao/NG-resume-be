import { TypeOrmModuleOptions } from '@nestjs/typeorm';
const configMigration : TypeOrmModuleOptions = {
    type : 'postgres',
    host : process.env.DB_HOST,
    port : Number(process.env.PORT),
    username : process.env.USER_NAME,
    password : process.env.PASSWORD,
    database : process.env.DB,
    entities: [__dirname + '/**/*.entity.{js,ts}'],
    migrations: ['dist/db/migration/**.js'],
    migrationsRun : true,
    cli : {
        migrationsDir: 'db/migration',
        entitiesDir: 'src/entities'
    }
};

export = configMigration



