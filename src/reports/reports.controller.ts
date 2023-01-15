import { AuthGuard } from './../guards/auth.guard';
import { Body, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';
import { CreateReportsDTO } from './dtos/create.reports.dto';
import { ReportsService } from './reports.service';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import { User } from 'src/users/entity/user.entity';

@Controller('reports')
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Post()
  @UseGuards(AuthGuard)
  createReport(@Body() body: CreateReportsDTO, @CurrentUser() user: User) {
    return this.reportsService.create(body, user);
  }
}
