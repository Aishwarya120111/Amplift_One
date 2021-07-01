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
      FirstName: formState.FirstName,
      LastName: formState.LastName,
      MailId: formState.MailId,
      FeedbackMessage: formState.FeedbackMessage
    }
  };

  console.log(data);
  const apiData = await API.post('feedbackmap', '/feedform', data);
  console.log({ apiData });
  alert('Feedback Sent Successfully');
}

const formState = { FirstName: '', LastName: '', MailId: '', FeedbackMessage: '' };

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
            <Form.Label>FirstName</Form.Label>
            <Form.Control placeholder="FirstName" onChange={e => updateFormState('FirstName', e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>LastName</Form.Label>
            <Form.Control placeholder="LastName" onChange={e => updateFormState('LastName', e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>MailId</Form.Label>
            <Form.Control placeholder="MailId" onChange={e => updateFormState('MailId', e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>FeedbackMessage</Form.Label>
            <Form.Control placeholder="FeedbackMessage" onChange={e => updateFormState('FeedbackMessage', e.target.value)} />
          </Form.Group>
          <Button onClick={addContact}>Send a message</Button>
        </Form>
      </div>
    </Container>
  );
}

export default App;
