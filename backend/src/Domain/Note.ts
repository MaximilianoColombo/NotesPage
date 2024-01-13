export class Note { //Create a generic object Note with the needed attributes
    id
    title
    description

    constructor(id:number,title:string,description:string){
        this.id=id
        this.title=title
        this.description=description
    }

}