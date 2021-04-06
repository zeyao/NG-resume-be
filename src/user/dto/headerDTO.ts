import { IsNotEmpty } from 'class-validator';
export class HeaderDTO {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    subtitle : string;

    @IsNotEmpty()
    email : string;

    @IsNotEmpty()
    phone : string;

    leftDetail : string;

    rightDetail : string;

}
