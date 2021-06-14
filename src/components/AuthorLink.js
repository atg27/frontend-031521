import React from 'react'
import { Link } from 'react-router-dom'

 const AuthorLink = ({author}) => {
    return (
        <div>
            <Link to={`/authors/${author.id}`}> 
                <h3>{author.name}</h3>
            </Link>
        </div>
    )
}

export default AuthorLink