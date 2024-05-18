import { useState } from 'react'
import './App.css'
import { StepperContext } from './contexts/StepperContext'
import Stepper from './components/Stepper'
import StepperControl from './components/StepperControl'
import Account from './components/steps/Account'
import Detail from './components/steps/Detail'
import Final from './components/steps/Final'
// import Payment from './components/steps/Payment'


function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);

  //Displayed as description in Stepper.jsx....
  const steps = [
    "Account Information",
    "Personal Details",
    "Complete"
  ];

  const dispalyStep = (step) =>{
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

  const handleClick = (direction) =>{
    let newStep = currentStep;
    //Check if the steps are within bouds
    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }

  return (
    <div className='md:5/6 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
      {/* Stepper  */}
      <div className='container horizontal mt-5'>
        <Stepper steps={steps} currentStep={currentStep}/>

        {/* Dispaly components  */}
        <div className='my-10 p-10'>
        <StepperContext.Provider value={{userData,setUserData, finalData, setFinalData}}>
          {dispalyStep(currentStep)}
        </StepperContext.Provider>
        </div>
      </div>
  
      {/* Navigation controls  */}
      {
        currentStep !== steps.length && (
          <div className=''>
          <StepperControl handleClick={handleClick} steps={steps} currentStep={currentStep}/>
        </div>
        )
      }
    </div>
  )
}

export default App
