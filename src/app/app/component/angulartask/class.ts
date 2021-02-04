export class sectionClass{
    id:number;
    title:string;
    body:string;
    commentType:string;
    comment:string;
    status:string;
    AllComments:Array<commentdetail>=[];
    
}
export class commentdetail{
    id:number;
    comment:string;
    status:string;
}