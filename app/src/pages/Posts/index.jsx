import React, { useState, useParams } from 'react';
import Post from '../../components/Post';
import styled from "styled-components";
import colors from "../../utils/style/colors";

// TODO: Repeated with Header. pull it to the shared components
const HomeDescription = styled.div`
  width: 90%;
	margin:auto;
	padding: 20px 20px;
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  vertical-align: sup;
  line-height: 1.5;
	text-align: center;
	background-color:${colors.backgroundLight};
`

function Posts() {

    const { university } = useParams();
    const { category } = useParams();
    const [posts, setPosts] = useState([
        {title: "Hello World", author: "John Doe", body: "This is my first post!", votes: 5, date: "2022-01-01"},
        {title: "Second Post", author: "Jane Smith", body: "This is my second post!", votes: 3, date: "2022-01-02"},
        {title: "Third Post", author: "Bob Johnson", body: "This is my third post!", votes: 8, date: "2022-01-03"},
    ]);

    const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
      <div>
        <HomeDescription>
          {sortedPosts.map((post, index) =>
            <Post key={index} title={post.title} author={post.author} body={post.body} votes={post.votes} date={post.date}/>
          )}
        </HomeDescription>

      </div>
    );
}

export default Posts;
