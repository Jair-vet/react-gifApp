import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

   // Hace que la función se realice una unica vez
   useEffect( () => {

        getGifs( category )
            .then( imgs => {

                setState({
                    data: imgs,
                    loading: false
                });
            });

    }, [ category ])

   

    return state;

}


