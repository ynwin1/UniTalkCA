import React, { useState, useEffect } from 'react';
import Post from '../../components/Post';
import styled from "styled-components";
import colors from "../../utils/style/colors";
import {Breadcrumb, InputGroup, Form} from "react-bootstrap";
import { useParams } from 'react-router-dom';
import "./index.css";
import Header from "../../components/Header";
import waterloo from  '../../assets/waterloo.png'
import ubc from  '../../assets/ubc.png'
import tru from  '../../assets/tru.png'

const serverURI = "http://localhost:8081";

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

const ErrorField = styled.p`
  color: error;
`

const nameImgMap = {
  "ubc" : ubc,
  "waterloo" : waterloo,
  "tru" : tru
}

const postSortComperator = (a, b) => new Date(b.date) - new Date(a.date);

function Posts() {
    const { university, category } = useParams();
    const [error, setError] = useState("");
    const [posts, setPosts] = useState([
        {name: "UBC", category: "admission", title: "1st yeat", description: "This is my first postsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss!", tags: ["CPSC", "MATH"], votes: 5, date: "2022-01-01", email: "John Doe sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"},
        {name: "TRU", category: "courses", title: "CPSC 310", description: "This is my second post!", tags: ["CPSC", "MATH"], votes: 3, date: "2022-01-02", email: "Jane Smith"},
        {name: "TRU", category: "courses", title: "BIOL 101", description: "This is my third post!", tags: ["CPSC", "MATH"], votes: 8, date: "2022-01-03", email: "Bob Johnson"},
    ]);


  /* response will be in the following format:
    [{
      name: string (uni name),
      category: string,
      title: string (post title),
      description: string (post description),
      tags: string,
      date: string,
      email: string,
    },...]
   */

    useEffect(() => {
      setPosts(null);
      fetch(`${serverURI}/api/name/${university}/category/${category}`)
        .then((response) => {
          console.log(response);
          if (!(response && response.length)) {
            setError("No results to display");
            return;
          }
          setPosts(response.sort(postSortComperator));
        })
        .catch((err) => {
          setError(err.message);
        });
    }, []);

    return (
      <div>
        <Header
          university={university}
          category={category}
          image={nameImgMap[university.toLowerCase()]}
        />
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
          {error && <ErrorField>{error}</ErrorField>}

          {posts && posts.map((post, index) =>
            <Post
              key={index}
              title={post.title}
              user={post.email}
              body={post.description}
              tags={post.tags}
              votes={post.votes}
              date={post.date}
            />
          )}
        </Frame>
        <ComposeButton onClick={() => {

        }}> <h1>+</h1> </ComposeButton>

      </div>
    );
}

export default Posts;
