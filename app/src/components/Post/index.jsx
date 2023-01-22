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
  border-radius: 10px 10px;
  width:80%;
`

const VotingButton = styled.img`
  height: 40px;
  width: 40px;
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

function Post({key, title, user, body, tags, votes, date}) {
    return (
        <div>
          {/*<PostFrame>*/}
            <Card
              bg={colors.backgroundLight}
              border="primary"
              // key={variant}
              // text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
              // style={{ width: '18rem' }}
            >
              <Card.Header>
                <div>
                  {"User: " + user}
                </div>
                <div>
                  {"Date: " + date}
                </div>

              </Card.Header>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{body}</Card.Text>
                <Card.Text>{tags}</Card.Text>
                <br/>
                <VotingPanel count={votes}/>
              </Card.Body>
            </Card>
          {/*</PostFrame>*/}
          <br/>
        </div>
    )
}

export default Post;
