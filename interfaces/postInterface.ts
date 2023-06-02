interface likes {
    user:string,
    name:string,
    email:string,
}
interface comment{
    user:string,
    name:string,
    email:string,
    comment:string
}
interface post {
    likes:Array<likes>,
    dislikes:Array<likes>,
    comments:Array <comment>,
    _id: string,
    caption: string,
    user: {
        _id: string,
        name: string,
        email: string
}
image: {
    imgid: String,
    imgurl: string
},
}
export interface postMe {
    data:Array<post>

}
