import React from 'react';

import { VoiceCommandRecognizer } from "voice-command-recognizer";

// enum Status {
//   AUTHORIZING = 'authorizing',
//   STARTING = 'starting',
//   RECOGNIZING = 'recognizing',
//   FINISHED = 'finished',
//   FAILED = 'failed',
//   PAUSED = 'paused',
// };

// enum Errors {
//   BROWSER_DENIAL = 'browser-denial',
//   USER_DENIAL = 'user-denial',
//   UNSUPPORTED = 'unsupported',
//   UNEXPECTED = 'unexpected',
// }

// interface Command {
//   phrases: string[];
//   callback: (results?: string[]) => void;
// }

// interface VoiceCommandRecognizerProps {
//   commands: Command[];
//   fuzzyMatchThreshold?: number;
//   keyCommand?: string;
//   startVoiceRecognition?: boolean;
//   onFuzzyMatch?: (match: string) => void;
//   onNotMatch?: (results?: string[]) => void;
//   onStart?: () => void;
//   onPermissionBlocked?: () => void;
//   onPermissionDenied?: () => void;
//   onRecognizerDisabled?: () => void;
//   onRecognizerEnabled?: () => void;
// };

// interface VoiceCommandRecognizerState {
//   error?: string,
//   status: Status;
//   fuzzyMatchThreshold?: number;
//   isRecognizerEnabled?: boolean;
// }

// declare var annyang: Annyang;

export const Home = () => (
  <>
    <VoiceCommandRecognizer
      startVoiceRecognition={true}
      commands={[
        {
          phrases: ['testing'],
          callback: () => console.log('I hear you bru'),
        },
      ]}
      onStart={() => console.log('Yup, it works')}
    >
      {(props: any, state: any) => {
        console.log('props: ', props);
        console.log('state: ', state);

        return <p>Status: {state.status}</p>
      }}
    </VoiceCommandRecognizer>
  </>
);