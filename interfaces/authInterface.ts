export interface RegisterInterface {
    name:string,
    email:string,
    password:string
}
export interface authMessage{
    Register:Array<RegisterInterface>,
    Login:Array<RegisterInterface>
}

export interface ResData{
    sucess:boolean,
    message:string
}
export interface loginInterface {
    email:string,
    password:string
}