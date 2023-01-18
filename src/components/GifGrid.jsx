import PropTypes from 'prop-types';

import { GiffItem } from './GiffItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifs( category);


    return (
        <>
            <h3>{category}</h3>
            {
              isLoading && (<h2>Cargando...</h2>)
            }
            

            <div className='card-grid'>
              
              { images.map( ((img) =>(

                 <GiffItem 
                    key={img.id}
                    {...img}
                  />

              ))

              )}
            </div>

        </>
  )
}

GifGrid.protTypes ={
  category: PropTypes.string.isRequired,
}
