import React from "react";
import { graphql } from "gatsby";

const PostTemplate = ({ data }) => {
  const title = data.markdownRemark.frontmatter.title;
  const date = data.markdownRemark.frontmatter.date;
  const html = data.markdownRemark.frontmatter.html;

  return (
    <div>
      <h1>{title}</h1>
      <div className="blog-post" dangerouslySetInnerHTML={{__html: html}} />
    </div>
  );
};

export default PostTemplate;
