import { IsNotEmpty } from 'class-validator';
export class AwardDTO {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    acquiredDate : string;
}
