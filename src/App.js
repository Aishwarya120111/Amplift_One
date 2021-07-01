//import logo from './logo.svg';
import './App.css';
import {Container, Button, Form} from 'react-bootstrap';
import Amplify from "aws-amplify";
import { API } from 'aws-amplify';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

async function addContact() {
  const data = {
    body: {
      firstname: formState.firstname,
      lastname: formState.lastname,
      mailid: formState.mailid,
      feedbackmessage: formState.feedbackmessage
    }
  };

  console.log(data);
  const apiData = await API.post('feedbackmap', '/feedform', data);
  console.log({ apiData });
  alert('Feedback Sent Successfully');
}

const formState = { firstname: '', lastname: '', mailid: '', feedbackmessage: '' };

function updateFormState(key, value) {
  formState[key] = value;
}

function App() {
  return (
    <Container>
    <div>
      <h3>Feedback Form</h3>
      <br/>
        <Form>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control placeholder="FirstName" onChange={e => updateFormState('firstname', e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control placeholder="LastName" onChange={e => updateFormState('lastname', e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Mail Id</Form.Label>
            <Form.Control placeholder="MailId" onChange={e => updateFormState('mailid', e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Feedback Message</Form.Label>
            <Form.Control placeholder="FeedbackMessage" onChange={e => updateFormState('feedbackmessage', e.target.value)} />
          </Form.Group>
          <Button onClick={addContact}>Send a message</Button>
        </Form>
      </div>
    </Container>
  );
}

export default App;
