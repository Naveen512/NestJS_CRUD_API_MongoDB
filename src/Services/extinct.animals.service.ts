import {Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {ExtinctAnimal} from '../Models/extinct.animals.model'

@Injectable()
export class ExtinctAnimalService{
  constructor(@InjectModel('ExtinctAnimal') private readonly extinctAnimalModel: Model<ExtinctAnimal>){}

  async getAll():Promise<ExtinctAnimal[]>{
      return await this.extinctAnimalModel.find({});
  }

  async add(animal){
    const createAnimal = new this.extinctAnimalModel(animal);
    await createAnimal.save();
  }

  async update(animal){
    await this.extinctAnimalModel.updateOne({ExtinctYear:animal.ExtinctYear},animal);
  }

  async delete(id){
    await this.extinctAnimalModel.deleteOne({_id :id});
  }
}