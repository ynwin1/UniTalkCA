import {Button, Col, Form, Row, FloatingLabel} from 'react-bootstrap';
import styled from "styled-components";
import colors from "../../utils/style/colors";
import {useEffect, useState} from "react";
import {serverURI} from "../../pages/Posts";

const Floating = styled.div`
  margin: 40px;
  padding: 20px;
  border: 3px solid ${colors.primary};
  border-radius: 10px 10px;
  background-color: #cecce0;
`
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  backdrop-filter: blur(10px);
  z-index:10;
  animation: blinker 1s cubic-bezier(0.5, 0, 1, 1) infinite alternate;
`
const RightSideWrapper = styled.div`
  text-align: right;
`

const SubmitButton = styled.button`
  background-color: ${colors.primary};
  color: white;
  text-decoration: none;
  border: 1px solid  ${colors.primary};
  border-radius:10px;
  right: 40px;
  bottom: 40px;
  padding: 5px 20px;
`

function ComposeForm({university, category, submitter}) {
  const [titleContent, setTitleContent] = useState("");
  const [textContent, setTextContent] = useState("");
  const [isSubmitClicked, setSubmitClicked] = useState(false);

  useEffect(() => {
    if (isSubmitClicked) {
      fetch(`${serverURI}/api/post`, {
        method: 'POST',
        headers: {},
        body: JSON.stringify({
          name: university,
          category: category,
          title: titleContent,
          description: textContent,
          tags: ["CPSC", "Good"],
          date: new Date(),
          email: "user"
        })
      }).then((response) => {
        console.log(`requesting: ${serverURI}/api/post`);
        console.log(({
          name: university,
          category: category,
          title: titleContent,
          description: textContent,
          tags: ["CPSC", "Good"],
          date: new Date(),
          email: "user"
        }));
        // return response.json();
      }).then(function(data) {
        console.log(data);
        // if (!(data && data.length)) {
        //   setError("No results to display");
        // }
      }).catch((err) => {
        console.error(err);
      });
    }
  }, [isSubmitClicked]);

  return (
    <Wrapper onClick={() => {}} onScroll={() => {}}>
      <Floating>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control type="title" placeholder="Enter title" onChange={(field) => setTitleContent(field.target.value)}/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              {/*<Form.Label>Text</Form.Label>*/}
              {/*<Form.Control type="password" placeholder="Password" />*/}
            </Form.Group>
          </Row>

          <FloatingLabel
            controlId="floatingTextarea"
            label="Text"
            className="mb-3"
          >
            <Form.Control as="textarea" placeholder="Leave your post here..." onChange={(field) => setTextContent(field.target.value)}/>
          </FloatingLabel>
          <Row>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Tags</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              {/*<Form.Label>Zip</Form.Label>*/}
              {/*<Form.Control />*/}
            </Form.Group>
          </Row>
          <RightSideWrapper>
            <SubmitButton onClick={() => {
              setSubmitClicked(true);
              // submitter(false);
            }}>Submit</SubmitButton>
          </RightSideWrapper>
        </Form>
      </Floating>
    </Wrapper>
  );
}

export default ComposeForm;
