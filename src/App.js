//import logo from './logo.svg';
import './App.css';
////import {Container, Button, Form} from 'react-bootstrap';
import Feedback from './Feedback';
import {BrowserRouter as Router, Swtich, Route} from 'react-router-dom';
//import Amplify from "aws-amplify";
//import { API } from 'aws-amplify';
// import { useLocation } from 'react-router-dom';
// //import queryString from 'query-string';

// import awsExports from "./aws-exports";
// Amplify.configure(awsExports);

// async function addContact() {
//   const data = {
//     body: {
//       FirstName: formState.FirstName,
//       LastName: formState.LastName,
//       MailId: formState.MailId,
//       FeedbackMessage: formState.FeedbackMessage
//     }
//   };

//   console.log(data);
//   const apiData = await API.post('feedbackmap', '/feedform', data);
//   console.log({ apiData });
//   alert('Mail sent');
// }

// const formState = { FirstName: '', LastName: '', MailId: '', FeedbackMessage: '' };

// function updateFormState(key, value) {
//   formState[key] = value;
// }

// function App() {
//   const { search } = useLocation();
//   console.log(search);
//   return (
//     <Container>
//     <div>
//       <h3>Get in touch</h3>
//       <br/>
//         <Form>
//           <Form.Group>
//             <Form.Label>FirstName</Form.Label>
//             <Form.Control placeholder="FirstName" onChange={e => updateFormState('FirstName', e.target.value)} />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>LastName</Form.Label>
//             <Form.Control placeholder="LastName" onChange={e => updateFormState('LastName', e.target.value)} />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>MailId</Form.Label>
//             <Form.Control placeholder="MailId" onChange={e => updateFormState('MailId', e.target.value)} />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>FeedbackMessage</Form.Label>
//             <Form.Control placeholder="FeedbackMessage" onChange={e => updateFormState('FeedbackMessage', e.target.value)} />
//           </Form.Group>
//           <Button onClick={addContact}>Send a message</Button>
//         </Form>
//       </div>
//     </Container>
//   );
// }
function App(){
  return (
    <Router>
      <div className="App">
        <Route path = '/feedback' component={Feedback}/>
      </div>
    </Router>
  );
}
export default App;
