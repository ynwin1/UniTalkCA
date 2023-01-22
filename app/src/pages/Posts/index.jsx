import React, { useState } from 'react';
import Post from '../../components/Post';
import styled from "styled-components";
import colors from "../../utils/style/colors";
import {Breadcrumb, InputGroup, Form} from "react-bootstrap";
import { useParams } from 'react-router-dom';
import "./index.css";
import Header from "../../components/Header";

// TODO: Repeated with Header. pull it to the shared components
const Frame = styled.div`
  width: 90%;
	margin:auto;
	padding: 20px 20px;
  display: flex;
  flex-direction: column;
  vertical-align: sup;
`

const ComposeButton = styled.button`
	background-color: ${colors.primary};
	color: white;
	text-decoration: none;
	border: 1px solid  ${colors.primary};
	border-radius:10px;
  position: fixed;
  right: 40px;
  bottom: 40px;
  padding: 5px 20px;
  z-index: 10;
	`

function Posts() {

    const { university, category } = useParams();
    const [posts, setPosts] = useState([
        {title: "Hello Worldsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss", author: "John Doe sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss", body: "This is my first postsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss!", votes: 5, date: "2022-01-01"},
        {title: "Second Post", author: "Jane Smith", body: "This is my second post!", votes: 3, date: "2022-01-02"},
        {title: "Third Post", author: "Bob Johnson", body: "This is my third post!", votes: 8, date: "2022-01-03"},
    ]);

    const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
      <div>
        <Header breadcrumbItems={[university, category]}/>
        <Frame>
          <div className="search-box">
            <InputGroup className="mb-3" style={{width: "50%"}}>
              <InputGroup.Text id="inputGroup-sizing-lg">
                Search
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                // Placeholder="what post are you looking for"
              />
            </InputGroup>
          </div>
          <ComposeButton onClick={() => {

          }}> <h1>+</h1> </ComposeButton>

          {sortedPosts.map((post, index) =>
            <Post key={index} title={post.title} author={post.author} body={post.body} votes={post.votes} date={post.date}/>
          )}
        </Frame>

      </div>
    );
}

export default Posts;
