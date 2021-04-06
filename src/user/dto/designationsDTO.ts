import { IsNotEmpty } from 'class-validator';
export class DesignationDTO {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    start : string;

    end : string;

    descriptions: string[]
}
