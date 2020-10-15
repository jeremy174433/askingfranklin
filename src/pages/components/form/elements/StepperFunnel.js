import React from 'react';
import Stepper from 'react-stepper-horizontal';

export default class StepperFunnel extends React.Component {

    render() {
        return (
            <div id="stepperFunnel" class="mb-5">
                <Stepper 
                    steps={ [{title: this.props.firstStep}, {title: this.props.secondStep}, {title: this.props.thirdStep}] } 
                    activeStep={this.props.activeStep} 
                    defaultColor="rgba(0, 0, 0, .25)" activeColor="rgba(103, 58, 183, .75)" completeColor="#673AB7"  
                    defaultTitleColor="#2B2B2B" activeTitleColor="#2B2B2B" completeTitleColor="#2B2B2B" 
                    circleFontColor="#FFF" 
                    defaultBarColor="#EEE" completeBarColor="#673AB7"
                />
            </div>
        )
    }
}
