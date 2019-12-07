import { QuestionModel } from '../newquestion/question.model';

export class QuizModel {
    public title: string;
    public imageUrl: string;
    public  userName:string;
    public id:number;
    public questions:Array<QuestionModel>[]
}