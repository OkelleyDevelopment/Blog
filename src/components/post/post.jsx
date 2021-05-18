import React from 'react';
import { Link } from "gatsby";

import Img from "gatsby-image"


const Post = ({title, author, date, body, slug, tags, fluid}) => {
    return (
        <div>
            <div key={title}>
                <div>
                    <Link to={slug} key={slug}>
                        <Img fluid={fluid} title={body} alt={title} />
                    </Link>
                </div>
                <Link to={slug} key={slug}>
                    <div>
                        <h2>{title}</h2>
                        <label>by: {author}, </label>
                        {date ? <label>{date}</label> : null}
                        <p>{body}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Post;
