import React, { useEffect, useState } from 'react'
import Publications from '../components/Publications'
import PublicationsForm from './PublicationsForm'

const Author = (props) => {

    const [author, setAuthor] = useState({
        publications: []
    })

    const [publicationFormFlag, setPublicationFormFlag] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:9292/authors/${props.match.params.id}`)
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setAuthor(data)
        })
    }, [props.match.params.id])

    const addPublication = (publication) => {
        console.log(publication)
        fetch(`http://localhost:9292/authors/${author.id}/publications`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(publication)
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setAuthor({
                ...author,
                publications: [...author.publications, data]
            })
        })
    
        setPublicationFormFlag(false)
    }

    const deletePublication = (id) => {
        fetch(`http://localhost:9292/authors/${author.id}/publications/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(() => {
            const newPublications = author.publications.filter(p => p.id !==id)
            setAuthor({
                ...author,
                publications: newPublications
            })
        })
    }
    
    const editPublication = (publication) => {
        fetch(`http://localhost:9292/authors/${author.id}/publications/${publication.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': "application/json"
            },
            body: JSON.stringify(publication)
        })
        .then(r => r.json())
        .then(data => {
            const newPublications = author.publications.map(p => p.id !==data.id ? p : data)
            setAuthor({
                ...author,
                publications: newPublications
            })
        })
    }

    const publications = author.publications.map(p => <Publications key={p.id} publication={p} editThePublication={editPublication} deleteThePublication={deletePublication}/>)

    return (
    <div>
            <h1>{author.name}</h1>
            <hr></hr>
            <br></br>
            <h3>Publications:</h3>
            {publications}
            <br></br>
            {publicationFormFlag ? <PublicationsForm addAPublication={addPublication} author={author}/> : <button onClick={() => setPublicationFormFlag(true)}>Add Publication</button>}

        </div>
    )
}

export default Author

