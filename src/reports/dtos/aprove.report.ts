import { IsBoolean } from "class-validator";

export class AproveReportDTO{

    @IsBoolean()
    aproved: boolean

}