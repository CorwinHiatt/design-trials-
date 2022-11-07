import { CssBaseline } from '@mui/material';
import './App.css';
import * as React from 'react';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));


function App() {
  return (
    <CssBaseline>
    <div className="App">
    <Stepper alternativeLabel activeStep={1} connector={<QontoConnector />}>
  {steps.map((label) => (
    <Step key={label}>
      <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
    </Step>
  ))}
</Stepper>
<Stepper alternativeLabel activeStep={1} connector={<ColorlibConnector />}>
  {steps.map((label) => (
    <Step key={label}>
      <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
    </Step>
  ))}
</Stepper>

    </div>
    </CssBaseline>
  );
}

export default App;
