import { Expose } from "class-transformer";

export class UserResponseDTO{

    @Expose()
    id: number;
    
    @Expose()
    email: string;
}
