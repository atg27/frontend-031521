import React, {useState} from 'react'
import PublicationsEditForm from '../containers/PublicationsEditForm'

 const Publications = (props) => {

    const [PublicationsEditFormFlag, setPublicationFormFlag] = useState(false)

    const  handleClick = () => {
        props.deleteThePublication(props.publication.id)
    }


    return (
        <div>
            <h4>{props.publication.title}</h4>
            {PublicationsEditFormFlag ? <PublicationsEditForm publication={props.publication} toggleForm={() => setPublicationFormFlag(false)} editThePublication={props.editThePublication}/> : <button onClick={() => setPublicationFormFlag(true)}>Edit Publication</button>}
            <button onClick={handleClick}>Remove</button>
        </div>
    )
}

export default Publications