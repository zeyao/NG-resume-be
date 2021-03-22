import { IsNotEmpty } from 'class-validator';
export class CreateUserDTO {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    password : string;

    @IsNotEmpty()
    email : string;
}
