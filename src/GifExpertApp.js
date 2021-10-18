import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['icarly']);

    // const handleAdd = () => {
    //     //    setCategories([...categories, 'Samurai']);  // Mantengo las categorias y Agrego una Nueva
    //     setCategories( cats => [...cats, 'SamuraiX2']);
    // }

    return (
        <>
          <h2>Gif App</h2>
          <AddCategory setCategories={ setCategories } />   {/* Importamos otro Componente*/}
          <hr/> 

          {/* <button onClick={ handleAdd }>Agregar</button> */}

            <ol>
                { 
                    categories.map( category => 
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                        // <li key={ category }> {category} </li> // El Key debe ser unico
                    ) 
                }
            </ol>
          
        </>
    )
}
