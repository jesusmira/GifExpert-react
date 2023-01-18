import PropTypes from 'prop-types';


export const GiffItem = ({title, url, id}) => {
  return (
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>

  )
}

GiffItem.propTypes = {

    title: PropTypes.string.isRequired,
    url  : PropTypes.string.isRequired

  }

/* Tarea:

  1.- Añadir PropTypes.
    a title obligatorio
    b url obligatorio

  2. Evaluar snapshot.
*/ 


