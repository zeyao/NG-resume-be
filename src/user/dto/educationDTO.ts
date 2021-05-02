import { IsNotEmpty } from 'class-validator';
export class EducationDTO {
    @IsNotEmpty()
    institution: string;

    @IsNotEmpty()
    qualification : string[];

    @IsNotEmpty()
    start : string;

    end : string;

    honorsAndGrade : string;
}
