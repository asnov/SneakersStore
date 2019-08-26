import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AngularModule } from './angular/angular.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { SneakerModule } from './sneaker/sneaker.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AngularModule.forRoot({
      rootPath: 'client/dist/client',
    }),
    MongooseModule.forRoot('mongodb://localhost/sneakersStore'),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      playground: true,
    }),
    TypeOrmModule.forRoot({
    }),
    SneakerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
