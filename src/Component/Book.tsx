import React, { useState } from "react";
interface FormValue{
    title:string,
    author:string,
    price:string
}

export interface Books{
    id:number,
    author:string,
    price:string,
    name:string
}
// interface Books
export interface props{
    books:[]
}


const Book=()=>{
    const[books,setBooks]=useState<Books[]>([]);
    const[formValue,setFormValue]=useState<FormValue>({
        title:"",
        author:"",
        price:""
    })
const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    // const {title,author,price}=formvalue
    e.preventDefault();
    console.log(formValue)
    setBooks([...books,{id:Math.random(),name:formValue.title,author:formValue.author,price:formValue.price}])
};
const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target
    setFormValue({
        ...formValue,
        [name]:value
    })
    
}


    return (
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Title</label>
                    <input type="text" name="title" value={formValue.title} onChange={handleChange}/>
                    <label htmlFor="">Author</label>
                    <input type="text" name="author" value={formValue.author} onChange={handleChange}/>
                    <label htmlFor="">price</label>
                    <input type="text" name="price" value={formValue.price} onChange={handleChange}/>

                    <button type="submit" >Add</button>
                    {/* <button type="submit" >update</button> */}
                </form>
            </div>
        </>
    )

}

export default Book;