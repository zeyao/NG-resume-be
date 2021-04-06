import { Resume } from "src/entities/resume.entity";

export class ResumeService {
    public async saveResume(resume: Resume) {
        console.log(resume)
        resume.save()
    }
}