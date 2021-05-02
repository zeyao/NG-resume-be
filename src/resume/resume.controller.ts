import { Body, Controller, Logger, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { Resume } from "src/entities/resume.entity";
import { ResumeService } from "src/resume/resume.service";
import { ResumeDTO } from "src/user/dto/resumeDTO";
import { Work } from "src/entities/work.entity";
import { WorkDTO } from "src/user/dto/workDTO";
import { EducationDTO } from "src/user/dto/educationDTO";
import { AwardDTO } from "src/user/dto/awardDTO";
import { Designation } from "src/entities/designation.entity";
import { Education } from "src/entities/education.entity";
import { AwardAndCertification } from "src/entities/award.entity";
import { DesignationDTO } from "src/user/dto/designationsDTO";

@Controller('resume')
export class ResumeController {
    private logger = new Logger('ResumeController');
    constructor(private resumeService: ResumeService) {       
    }

    @Post('/createResume')
    @UsePipes(ValidationPipe)
    createResume(@Body() body: ResumeDTO)  {
        this.logger.log(`User start to create task : ${JSON.stringify(body)} `);
        console.log(body.header)
        const resume = new Resume()
        //TODO convert dto -> entity
        resume.name = body.header.name;
        resume.phone = body.header.phone;
        resume.email = body.header.email;
        resume.leftDetail = body.header.leftDetail;
        resume.rightDetail = body.header.rightDetail;
        resume.profile = body.profile;
        resume.competencies = body.competencies;
        var works:Work[];
        for (const work of body.work) {
            let workEntity = this.convertWorkToEntity(work)
            works.push(workEntity);
        }
        resume.works = works

        var educations:Education[];
        for (const education of body.education) {
            let educationEntity = this.convertEducationDTOToEntity(education)
            educations.push(educationEntity);
        }
        resume.educations = educations

        var awardAndCertifications: AwardAndCertification[];
        for (const awardAndCertification of body.awardsAndCertifications) {
            let awardawardEntity = this.convertAwardDTOToEntity(awardAndCertification)
            awardAndCertifications.push(awardawardEntity);
        }
        resume.awardAndCertifications = awardAndCertifications

        this.logger.log(`Create user :  ${resume}`)
        return this.resumeService.saveResume(resume);
    }

    convertWorkToEntity(work: WorkDTO) {
        const workEntity = new Work()
        workEntity.company = work.company
        workEntity.location = work.location
        workEntity.descriptions = work.descriptions
        var designations: Designation[]

        for (const designationDTO of work.designations) {
            const designation = this.convertDesignationToEntity(designationDTO)
            designations.push(designation)
        }
        workEntity.designation = designations
        return workEntity;

    }

    convertDesignationToEntity(designationDTO: DesignationDTO) {
        const designation = new Designation()
        designation.title = designationDTO.title
        designation.descriptions = designationDTO.descriptions
        designation.startDate = this.convertStringToDate(designationDTO.start)
        if (designationDTO.end != null) {
            designation.endDate = this.convertStringToDate(designationDTO.end)
        }
        return designation
    }

    convertEducationDTOToEntity(educationDTO: EducationDTO) {
        const education = new Education()
        education.institution = educationDTO.institution
        education.qualification = educationDTO.qualification.toString()
        education.honorsAndGrade = educationDTO.honorsAndGrade  
        education.startDate = this.convertStringToDate(educationDTO.start)
        if (educationDTO.end != null) {
            education.endDate = this.convertStringToDate(educationDTO.end)
        }
        return education
    }

    convertAwardDTOToEntity(awardDTO: AwardDTO) {
        const award = new AwardAndCertification()
        award.name = awardDTO.name
        award.acquiredDate = this.convertStringToDate(awardDTO.acquiredDate)
        return award
    }

    convertStringToDate(dateStr: string) {
        var dateArr:string[] = dateStr.split(" ")
        var month:string = dateArr[0].toLowerCase()
        var yearNumber:number = +dateArr[1]

        var months = [
            "january",
            "february",
            "march",
            "april",
            "may",
            "june",
            "july",
            "august",
            "september",
            "october",
            "november",
            "december"
        ];
        
        var monthNumber = (months.indexOf(month) + 1);
        let date = new Date(yearNumber, monthNumber)
        return date
    }

}