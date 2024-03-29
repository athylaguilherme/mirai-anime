"use client"
    
import { useState } from 'react';
export default function Card({filme}){
     const [favorito, setFavorito] = useState(false)
     const poster = "https://image.tmdb.org/t/p/w200/" + filme.poster_path
     function favoritar(){
         setFavorito(true)
    
     }
     function desfavoritar(){
      setFavorito(false)
    
     }
    return(
            <div className="flex flex-col items-center w-48 relative" >
                {
                     favorito ? 
                     //DesFavorito
                     <svg  onClick={desfavoritar} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 cursor-pointer absolute top-2 right-2 text-red-600">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                    </svg>:
                     // Favorito
                     <svg  onClick={favoritar} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer absolute top-2 right-2 text-white">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                     </svg>

                }
               
                <img className="rounded" src= {poster} alt="" />

                <span className="text-lg font-bold line-clamp-1" >{filme.title}</span>
                <div>

                    <span>{filme.vote_average.toFixed(1)}</span>
                </div>
                <a className="bg-sky-500 text-black font-semibold w-full rounded py-1 text-center" href="">Detalhes</a>
            </div>
     

    )
} 
