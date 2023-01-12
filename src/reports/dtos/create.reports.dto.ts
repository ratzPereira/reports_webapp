import { IsLatitude, IsLongitude, IsNumber, IsString, Max, Min } from 'class-validator';
export class CreateReportsDTO{

    @IsNumber()
    @Min(0)
    @Max(999999)
    price: number;

    @IsString()
    make: string;

    @IsString()
    model: string;

    @IsNumber()
    @Min(1920)
    @Max(2023)
    year: number;

    @IsNumber()
    @IsLongitude()
    longitude: number;

    @IsNumber()
    @IsLatitude()
    latitude: number;

    @IsNumber()
    @Min(0)
    @Max(999999)
    mileage: number;
}