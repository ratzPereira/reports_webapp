import { AuthGuard } from './../guards/auth.guard';
import { Body, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';
import { CreateReportsDTO } from './dtos/create.reports.dto';
import { ReportsService } from './reports.service';

@Controller('/reports')
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Post('')
  @UseGuards(AuthGuard)
  createReport(@Body() report: CreateReportsDTO) {
    return this.reportsService.createReport(report);
  }
}
