import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';
import { Body, Param, UseGuards } from '@nestjs/common/decorators';
import { chemicalSubstance } from '@prisma/client';
import { AppService } from './app.service';
import { AuthGuard } from './auth-guard';
import { createSubstDto } from './createSubst.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @UseGuards(AuthGuard)
  async postSubstance(@Body() data: createSubstDto){
    return this.appService.postSubstance(data)
  }

  @Get()
  async getAllSubstances() {
    return this.appService.getAllSubstances();
  }

  @Get(':id')
  async getOneSubstance(@Param("id") id:number){
    return this.appService.getOneSubstance(+id)
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  async updateSubstance(@Param("id") id: number, @Body() data: createSubstDto) {
    return this.appService.updateSubstance(+id, data)
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async deleteSubstance(@Param("id") id:number){
    return this.appService.deleteSubstance(+id)
  }
  
}
