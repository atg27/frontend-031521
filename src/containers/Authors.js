import React, {useState, useEffect} from 'react'
import AuthorLink from '../components/AuthorLink'
import AuthorForm from './AuthorForm'

const Authors = () => {
    const [authors, setAuthors] = useState([])
    const [authorFormFlag, setAuthorFormFlag] = useState(false)

useEffect(() => {
    fetch('http://localhost:9292/authors')
    .then(r => r.json())
    .then(data => {
        console.log(data)
        setAuthors(data)
    })
}, [])

    const toggleAddAuthorForm = (e) => {
        console.log(e.target)
        setAuthorFormFlag(true)
    }

    const addAuthor = (author) => {
        //tell backedn, add to state, toggle form
        fetch('http://localhost:9292/authors', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(author)
    })
    .then(r => r.json())
    .then(data => {
        console.log(data)
        setAuthors([...authors, data])
    })

    setAuthorFormFlag(false)
}
    const authorsList = authors.map(a => <AuthorLink key={a.id} author={a}/>)

    return (
        <div>
            <p>all the owners!</p>
            <ul>{authorsList}</ul>
            {authorFormFlag ? <AuthorForm addAnAuthor={addAuthor}/> : <button onClick={toggleAddAuthorForm}>Add Author</button>}
        </div>
    )
}

export default Authors
