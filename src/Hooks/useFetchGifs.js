import {useState, useEffect} from 'react';
import {getGifs} from '../Helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

     //El método se disparará una vez, cuando le asignes que no tiene valores en el arreglo
     useEffect(()=>{
         getGifs(category).then(imgs =>{
                    setstate({
                 data: imgs,
                loading: false
             })
         });
     },[category]);

    return state; // {data:[], loading: true}
}
