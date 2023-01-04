import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { plainToClass, plainToInstance } from 'class-transformer';
import { map, Observable } from 'rxjs';
import { UserResponseDTO } from 'src/users/dtos/user.response.dto';

export class SerializeInterceptor implements NestInterceptor {

    constructor(private dto: any){

    }

  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    return handler.handle().pipe(
      map((data: any) => {
        return plainToInstance(this.dto, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
