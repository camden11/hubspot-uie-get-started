import React, { useState } from 'react';
import {
  Text,
  hubspot,
  Button
} from '@hubspot/ui-extensions';

// Define the extension to be run within the Hubspot CRM
hubspot.extend(({ context, runServerlessFunction, actions }) => (
  <Extension
    context={context}
    runServerless={runServerlessFunction}
    sendAlert={actions.addAlert}
  />
));

// Define the Extension component, taking in runServerless, context, & sendAlert as props
const Extension = ({ context, runServerless, sendAlert }) => {
  const [text, setText] = useState('');

  // Call serverless function to execute with parameters.
  // The name `myFunc` as per configurations inside `serverless.json`

  const run = () => {
    runServerless({ name: 'newFunc', parameters: { text: text } }).then((resp) =>
      sendAlert({ message: resp.response })
    );
  };

  return (
    <>
      <Text format={{ fontWeight: 'bold' }}>
        This is a second card that doesn't do anything
      </Text>
      <Button type="submit" onClick={run}>
          Click me
       </Button>
    </>
  );
};
