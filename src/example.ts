let firstname:string="fruit"
let count:number=0
let isLoading:boolean=true
let numbers:undefined=undefined
let age:null|string=null //assigning multiple type of value

const user:{name:string,age:number,id?:number}={
    name: "surname",
    age: 45,
    id:1
}

const fruits:string[]=["banana","apple","orange"]
fruits.push("fdf")
const number:number[]=[4,5,2,3,5]
const users:{id:number,name:string}[]=[{id:1,name:""},{id:1,name:""}]

const sum=(a:number,b:number)=>{
    return a+b

}
sum(1,2)

export const handleApiResponse=(payload:{userId:number,callback:(a:number,b:number)=>void})=>{
    // const result=callback(1,2)
    // result.map()

}
// handleApiResponse({userId:1},callback)
interface Person{
    department:string
}

interface User extends Person{
    name:string,
    id:number,
    getUser:()=>void
}



let data:User={
    name:"fruits",
    id:1,
    getUser:()=>{

    },
    department:""
}

type employee={
    id:number
    name:string

}
type manager={
    department:string
} &employee

let employeewithmanager:manager={
    department:"A",
    id:1,
    name:"dsgf"
}
















