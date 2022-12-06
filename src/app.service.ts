import { Injectable } from '@nestjs/common';
import { createSubstDto } from './createSubst.dto';
import { PrismaService } from './PrismaService';

@Injectable()
export class AppService {

  constructor(private prisma: PrismaService){}

  async postSubstance(data: createSubstDto) {

    data.name = data.name.toUpperCase()
    data.formula = data.formula.toUpperCase()

    const create = await this
      .prisma
      .chemicalSubstance
      .create({
        data,
      })

    return create;
  }

  async getAllSubstances() {

    return await this.prisma.chemicalSubstance.findMany()

  }

  async getOneSubstance(id: number){

    return await this.prisma.chemicalSubstance.findUniqueOrThrow({
      where:{
        id : id
      }
    })
  }

  async updateSubstance(id: number, data: createSubstDto){

    await this.prisma.chemicalSubstance
      .findUnique({
        where:{
          id: id
        }
      })

    // This will force Upper case on the Strings
    if(data.name) data.name = data.name.toUpperCase()
    if(data.formula) data.formula = data.formula.toUpperCase()

    return await this.prisma.chemicalSubstance.update({
      data,
      where:{
        id : id
      }
    })
  }

  async deleteSubstance(id: number) {

    await this.prisma.chemicalSubstance
      .findUnique({
        where:{
          id: id
        }
      })

    return await this.prisma.chemicalSubstance.delete({
      where:{
        id : id
      }
    })
  }

}
