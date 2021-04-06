import { Body, Controller, Logger, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { Resume } from "src/entities/resume.entity";
import { ResumeService } from "src/resume/resume.service";
import { ResumeDTO } from "src/user/dto/resumeDTO";

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
        return this.resumeService.saveResume(resume);
    }

}