
import React, { Component } from 'react';
import CreateCompanyIndustry from './create-company-industries'
import { connect } from 'react-redux'
import { addCompanyIndustry, addCompanyName, addCompanyEmail, addCompanyLogo, addCompanyPhone, addCompany } from '../../redux/reducers/main-reducer'
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import './create-company.css'
import axios from 'axios';


class CreateCompany extends Component {
  constructor() {
    super();
    this.state = {
      finished: false,
      stepIndex: 0,
    };
  }

  submitCompany(){
    let data = {
      company_name: this.props.company_name, 
      company_email: this.props.company_email, 
      company_date: this.props.company_date,
      company_industry: this.props.company_industry,
      company_url: this.props.company_url,
      company_phone: this.props.company_phone
  }
     axios.post('/api/addcompany', data).then(response =>{
      console.log(response)
     })
    console.log(data)
}

  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };


  getStepContent(stepIndex) {
    console.log('WHERE', this.props)
    switch (stepIndex) {
      case 0:
        return (
          <div className='create-company-step1'>
            <div className='create-company-titles'>Company Information</div>
            <form>
              <div>
                
                <input placeholder='Company Name' className='create-company-company-name-input' onChange={(e) => this.props.addCompanyName(e.target.value)} value={this.props.company_name}/>
                <input placeholder='Company Email' className='create-company-company-name-input' onChange={(e) => this.props.addCompanyEmail(e.target.value)}  value={this.props.company_email}/>
              </div>
              <div>
                <input placeholder='Phone Number (optional)' className='create-company-company-name-input' onChange={(e) => this.props.addCompanyPhone(e.target.value)}  value={this.props.company_phone}/>
                <input placeholder='Company Website' className='create-company-company-name-input' onChange={(e) => this.props.addCompanyLogo(e.target.value)}  value={this.props.company_url}/>
              </div>
            </form>
            <div>

            </div>
          </div>
        );
      case 1:
        return (
          <div className='create-company-step1'>
            <div className='create-company-titles'>Company Industry</div>
            <div className='create-company-industry-selection-container'>
              <CreateCompanyIndustry />
            </div>
          </div>
        );
      case 2:
        return (
          <div className='create-company-step1'>
            <div className='create-company-titles'>Review</div>
            <div className='create-company-badge'>{this.props.company_badge}</div>
            <div className='create-company-review-text'>{this.props.company_name}</div>
            <div className='create-company-review-text'>{`${this.props.company_email}  ${this.props.company_phone}`}</div>
            <div className='create-company-review-text'>{this.props.company_industry}</div>
          </div>

        );
      default:
        return 'I don\' think we\'re not in Kansas anymore!';
    }
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    const { finished, stepIndex } = this.state;
    const contentStyle = { margin: '0 16px' };
    // eslint-disable-next-line
    const {company_name} = this.props

    return (
      <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }} >
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Company Information</StepLabel>

          </Step>
          <Step>
            <StepLabel>Company Industry</StepLabel>
          </Step>
          <Step>
            <StepLabel>Review</StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          {finished ? (
            <p>
              <a
                href="/dashboard"
                onClick={(event) => {
                  event.preventDefault();
                  this.setState({ stepIndex: 0, finished: false });
                }}
              >
                Click here
              </a> to reset the example.
            </p>
          ) : (
              <div className='create-company-next-finish-button'>
                <div>{this.getStepContent(stepIndex)}</div>
                <div style={{ marginTop: 12 }} className='create-company-back-button'>
                  <FlatButton
                    label="Back"
                    disabled={stepIndex === 0}
                    onClick={this.handlePrev}
                    style={{ marginRight: 12 }}
                  />
                  {stepIndex === 2
                    ?
                    <RaisedButton
                      label='Finish'
                      primary={true}
                      onClick={() => this.submitCompany()}
                    />
                    :
                    <RaisedButton
                      label='Next'
                      primary={true}
                      onClick={this.handleNext}
                    />
                  }
                </div>
              </div>
            )}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { addCompanyIndustry, addCompanyName, addCompanyEmail, addCompanyLogo, addCompanyPhone, addCompany })(CreateCompany);