import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { ExtinctAnimalsController} from './ExtinctAnimals/extinct.animals.controller';
import { extinctAnimalSchema } from './Schemas/extinct.animals.schema';
import {ExtinctAnimalService} from './Services/extinct.animals.service';

@Module({
  imports: [
    
    MongooseModule.forRoot("mongodb://localhost:27017/MyWorldDatabase"),MongooseModule.forFeature([{
      name:'ExtinctAnimal',
      schema:extinctAnimalSchema,
      collection:'ExtinctAnimals'
    }])
  ],
  controllers: [AppController,ExtinctAnimalsController],
  providers: [AppService,ExtinctAnimalService],
})
export class AppModule {}
