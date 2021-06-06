import React, { Component } from 'react';
import { getSentence } from './request';
import Display from './display';
import './sentence.css';

class LanguageForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      sentencetype: null,
      subject: null,
      verb: null,
      object: null,
      tense: null,
      negated: null,
      sentence: null
    };
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleVerbChange = this.handleVerbChange.bind(this);
    this.handleObjectChange = this.handleObjectChange.bind(this);
    this.handleTenseChange = this.handleTenseChange.bind(this);
    this.handleNegatedChange = this.handleNegatedChange.bind(this);
    this.handleParams = this.handleParams.bind(this);
  }

  handleTypeChange(e) {
   this.setState({sentencetype: e.target.value});
 }

  handleSubjectChange(e) {
   this.setState({subject: e.target.value});
  }

  handleVerbChange(e) {
   this.setState({verb: e.target.value});
  }

  handleObjectChange(e) {
   this.setState({object: e.target.value});
  }

  handleTenseChange(e) {
   this.setState({tense: e.target.value});
  }

  handleNegatedChange(e) {
   this.setState({negated: e.target.value});
  }

  handleParams() {
    let params = '?';
    params += 'sentencetype=' + this.state.sentencetype;
    params += '&subject=' + this.state.subject;
    params += '&verb=' + this.state.verb;
    params += '&object=' + this.state.object;
    params += '&tense=' + this.state.tense;
    params += '&negated=' + this.state.negated;

    getSentence(params).then(data => {
      if(data.result === 'OK') {
          this.setState({sentence: data.sentence});
      } else if(data.result === 'error') {
          this.setState({sentence: data.error_message});
      } else {
          this.setState({sentence: 'please try again'});
      }
    })
  }

  render() {
    return (
      <div className="form-control">
        <form>
          <div className="input-control">
            <label htmlFor="sentencetype">Type</label>
            <input size='20' type="input" onChange={this.handleTypeChange} name="sentencetype"/>
          </div>
          <div className="input-control">
            <label htmlFor="subject">Subject</label>
            <input size='20' type="input" onChange={this.handleSubjectChange} name="subject"/>
          </div>
          <div className="input-control">
            <label htmlFor="verb">Verb</label>
            <input size='20' type="input" onChange={this.handleVerbChange} name="verb"/>
          </div>
          <div className="input-control">
            <label htmlFor="object">Object</label>
            <input size='20' type="input" onChange={this.handleObjectChange} name="object"/>
          </div>
          <div className="input-control">
            <label htmlFor="tense">Tense</label>
            <input size='20' type="input" onChange={this.handleTenseChange} name="tense"/>
          </div>
          <div className="input-control">
            <label htmlFor="negated">Negated</label>
            <input size='20' type="input" onChange={this.handleNegatedChange} name="negated"/>
          </div>

          <button type="button" className='button' onClick={this.handleParams}>Generate Sentence</button>
        </form>
        <div className='sentence'>
          {(() => {
            if (this.state.sentence !== null) {
              return (
                <Display message={this.state.sentence} />
              );
            }
            return (
              null
            );
          })()}
        </div>
      </div>
    );
  }
}

export default LanguageForm;
