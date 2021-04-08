import PropTypes from 'prop-types'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
export const GifGrid = ({ category }) => {
    const { data, loading } = useFetchGifs( category );
    
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>

            { loading ? (
                <p className="animate__animated animate__flash">Cargando...</p>
            ):(
                <div className="cardgrid">
                {
                    data.map(image=>(
                        <GifGridItem 
                        key = { image.id }
                        img = { image }/>
                    ))
                }
            </div>
            )}
            
        </>
    )
}
GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}