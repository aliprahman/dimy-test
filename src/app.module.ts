import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ObjectionModule, Model } from 'nestjs-objection';
import { ListController } from './controllers';
import { ListService } from './services';
import { ListModel } from './models';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
    }),
    ObjectionModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        Model,
        config: {
          client: 'mysql',
          useNullAsDefault: true,
          debug: configService.get('NODE_ENV') === 'development',
          connection: {
            host: configService.get('DB_HOST'),
            port: configService.get('DB_PORT'),
            user: configService.get('DB_USER'),
            password: configService.get('DB_PASS'),
            database: configService.get('DB_NAME'),
          },
        },
      }),
    }),
    ObjectionModule.forFeature(ListModel),
  ],
  controllers: [...ListController],
  providers: [...ListService],
})
export class AppModule {}
