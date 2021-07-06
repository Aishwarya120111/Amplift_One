//import logo from './logo.svg';
import './App.css';
import {Container, Button, Form} from 'react-bootstrap';
import Amplify from "aws-amplify";
import { API } from 'aws-amplify';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

async function addContact() {
  const data = {
    body: {
      
      Name: formState.Name,
      Mailid: formState.Mailid,
      FeedbackMessage: formState.FeedbackMessage
    }
  };

  console.log(data);
  const apiData = await API.post('feedbackmap', '/feedform', data);
  console.log({ apiData });
  alert('Mail sent');
}

const formState = { Name: '',  Mailid: '', FeedbackMessage: '' };

function updateFormState(key, value) {
  formState[key] = value;
}

function Feedback() {
  const { search } = useLocation();
  console.log(search);
  const {name, email} = queryString.parse(search);

  return (
    <Container>
    <div>
      <h3>Feedback Form</h3>
      <br/>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Name" value= {name} onChange={updateFormState('Name', name)} />
          </Form.Group>
          {/* <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control placeholder="LastName" value={lastname} onChange={updateFormState('LastName', lastname)} />
          </Form.Group> */}
          <Form.Group>
            <Form.Label>Mail Id</Form.Label>
            <Form.Control placeholder="MailId" value={email} onChange={updateFormState('Mailid', email)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Feedback Message</Form.Label>
            <Form.Control placeholder="Feedback Message" onChange={e => updateFormState('FeedbackMessage', e.target.value)} />
          </Form.Group>
          <Button onClick={addContact}>Send a message</Button>
        </Form>
      </div>
    </Container>
  );

}

export default Feedback;
