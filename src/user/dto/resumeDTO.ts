import { IsNotEmpty } from 'class-validator';
import { Education } from 'src/entities/education.entity';
import { AwardDTO } from './awardDTO';
import { EducationDTO } from './educationDTO';
import { HeaderDTO } from './headerDTO';
import { WorkDTO } from './workDTO';
export class ResumeDTO {
    @IsNotEmpty()
    header: HeaderDTO;

    @IsNotEmpty()
    profile : string;

    @IsNotEmpty()
    competencies : string[];
    
    @IsNotEmpty()
    work: WorkDTO[]

    @IsNotEmpty()
    education: EducationDTO[]

    awardsAndCertifications : AwardDTO[]
}
