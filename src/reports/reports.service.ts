import { CreateReportsDTO } from './dtos/create.reports.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reports } from './entity/reports.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Reports) private repository: Repository<Reports>,
  ) {}

  createReport(report: CreateReportsDTO){
    const reportRecived = this.repository.create(report);

    return this.repository.save(reportRecived);
  }
}
