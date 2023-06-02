export interface RegisterInterface {
    name:string,
    email:string,
    password:string
}

export interface ResData{
    sucess:boolean,
    message:string
}
export interface authMessage{
    Register:ResData,
    Login:ResData,
}