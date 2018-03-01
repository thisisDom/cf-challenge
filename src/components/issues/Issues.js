import React, { Component } from 'react';
import axios from 'axios';
import IssueContainer from './Issue/Issue';
import './Issues.css';

class Issues extends Component {
  constructor(props){
    super(props);
    this.state = {
      issues: [],
    };
  }
  componentWillMount(){
    axios.get('https://api.github.com/repos/DestinyItemManager/DIM/issues', {
      params: {
        state: "open"
      }
    })
    .then(response => {
      this.setState({
        issues: response.data,
      });
    });
  }

  renderIssues(){
    let issues = this.state.issues;
    return issues.map(issue => ( <IssueContainer key={issue.number} data={issue} /> )) ;
  }

  render(){
    const issues = this.renderIssues();
    return (
    <div className="issues-container">
      <div className="issues-header">
        <div className="issues-breakdown-container">
          --PLACEHOLDER--
        </div>
        <div className="issues-sort-container">
        </div>
      </div>
      <ul className="issues-list-container">
      {issues}
      </ul>
    </div>
  )}
}

export default Issues;
