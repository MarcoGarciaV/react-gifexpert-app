import React, { useState } from 'react'
import {AddCategory} from './Components/AddCategory';
import { GiftGrid } from './Components/GiftGrid';

 export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Dragon Ball'])

    // const handledAdd= ()=>{
    //     // setCategories([...categories,'Naruto']);
    //     // setCategories(['Naruto',...categories]);
    //     setCategories(cats => [...cats,'Naruto']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>
            <ol>
                {
                    categories.map(category => 
                    <GiftGrid 
                        key={category} 
                        category={category} />
                    )
                }
            </ol>
           
        </>
    )
}
