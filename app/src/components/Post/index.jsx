import React, { useState } from 'react';
import styled from "styled-components";
import colors from "../../utils/style/colors";
import like from  '../../assets/like.png';
import dislike from  '../../assets/dislike.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './index.css';

const PostFrame= styled.div`
  margin: auto;
  border: 3px solid ${colors.primary};
  border-radius: 5px 5px;
  width:80%;
`

const VotingButton = styled.img`
  height: 3rem;
  width: 3rem;
  padding: 10px;
`;

function VotingPanel({count}) {
  const [voteCount, setVoteCount] = useState(count);
  return (
    <div className={"voting-panel"}>
      <VotingButton src={like} alt={"like"} onClick={() => setVoteCount(voteCount + 1)}/>
      <div>{voteCount}</div>
      <VotingButton src={dislike} alt={"dislike"} onClick={() => setVoteCount(voteCount - 1)}/>
    </div>
  );
}

function Post({key, title, author, body, votes, date}) {

    return (
        <div>
          <PostFrame>
            <Card>
              <Card.Header>{author}</Card.Header>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{body}</Card.Text>
                {/*<Button variant="primary">Go somewhere</Button>*/}
              </Card.Body>
            </Card>
            <VotingPanel count={votes}/>
          </PostFrame>
        </div>
    )
}

export default Post;
