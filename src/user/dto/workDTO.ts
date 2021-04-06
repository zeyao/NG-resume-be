import { IsNotEmpty } from 'class-validator';
import { DesignationDTO } from './designationsDTO';
export class WorkDTO {
    @IsNotEmpty()
    company: string;

    @IsNotEmpty()
    location : string;

    @IsNotEmpty()
    designations : DesignationDTO[];
    
    @IsNotEmpty()
    descriptions: string[]
}
