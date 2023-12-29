import React from "react";
export interface props{
    books:[]
}
export const ViewDetails=({books}:props)=>{
    return(
        <>
            <div className="view-container">
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Price</th>

                        </tr>
                    </thead>
                    <tbody>
                        {books.map((item:{title:string,author:string,price:string})=>(
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        ))}
                    
                    </tbody>
                </table>

            </div>
        </>
    )
}
