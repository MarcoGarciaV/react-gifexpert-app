import React from 'react'
import {useFetchGifs} from '../Hooks/useFetchGifs';
import {GifGridItem} from './GifGridItem';

export const GiftGrid = ({category}) => {
    const {loading,data:images} =useFetchGifs(category);
    return (
        <>
        <h3 className="animate__animated animate__bounce animate__fadeIn">{category}</h3>
        {loading && <p className=" animate__animated animate__bounce animate__flash">Loading...</p>}
        <div className="card-grid">
                <ol>
                    {
                        images.map(img=>
                        <GifGridItem 
                        key={img.id}
                         {...img} />
                        )
                    }
                </ol>
        </div>
        </>
    )
}
