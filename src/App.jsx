import { useState } from 'react'
import './App.css'
import Stepper from './components/Stepper'
import StepperControl from './components/StepperControl'
import Account from './components/steps/Account'
import Detail from './components/steps/Detail'
import Final from './components/steps/Final'
// import Payment from './components/steps/Payment'


function App() {
  const [currentStep, setCurrentStep] = useState(1);

  //Displayed as description in Stepper.jsx....
  const steps = [
    "Account Information",
    "Personal Details",
    "Complete"
  ];

  const dispalySteps = (step) =>{
    switch(step) {
      case 1:
        return <Account/>
      case 2:
        return <Detail/>
      case 3:
        return <Final/>
      default:

    }
  }

  return (
    <div className='md:5/6 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
      {/* Stepper  */}
      <div className='container horizontal mt-5'>
        <Stepper steps={steps} currentStep={currentStep}/>
      </div>
      {()=>dispalySteps(1)}
      {/* Navigation controls  */}
      <div className=''>
        <StepperControl/>
      </div>
    </div>
  )
}

export default App
