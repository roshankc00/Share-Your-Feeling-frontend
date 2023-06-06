export interface RegisterInterface {
    name:string,
    email:string,
    password:string
}
export interface ResData{
    sucess:boolean,
    message:string
} 
export interface LoginData{
    sucess:boolean,
    message:string,
    token:string
}

export interface authMessage{
    Register:ResData,
    Login:LoginData,
    Profile:any
}

export interface loginMe {
    email:string,
    password:string
}