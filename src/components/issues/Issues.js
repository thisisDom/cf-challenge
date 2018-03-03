import React, { Component } from 'react';
import axios from 'axios';
import IssueContainer from './issue/Issue';
import MenuOption from './menu-option/MenuOption';
import './Issues.css';

class Issues extends Component {
  constructor(props){
    super(props);
    this.state = {
      issues: [],
      issueAuthors: [],
      showAuthors: false,
      authorFilter: null,
    };
  }
   applyAuthorFilter(username){
     if (username === this.state.authorFilter){
       this.setState({
         authorFilter: null
       })
     }
     else{
       this.setState({
         authorFilter: username
       });
     }
   }

  componentWillMount(){
    axios.get('https://api.github.com/repos/DestinyItemManager/DIM/issues', {
      params: {
        state: "open"
      }
    })
    .then(response => {
      let authors = {}
      let issues = response.data.map(issue => {
        authors[issue.user.login] = {
          username: issue.user.login,
          avatar_url: issue.user.avatar_url,
        };
        return issue;
      });
      let issueAuthors = [];
      for (let user in authors){
        issueAuthors.push(authors[user]);
      }
      this.setState({
        issues: issues,
        issueAuthors: issueAuthors,
      });
    });
  }

  toggleMenu(type){
    switch (type){
      case "authors":
      this.setState({
        showAuthors: !this.state.showAuthors,
      });
      return;
      default:
      return;
    }
  }
  renderIssues(){
    let issues = this.state.issues;

    if (this.state.authorFilter){
      issues = issues.filter(issue => issue.user.login === this.state.authorFilter );
    }


    return issues.map(issue => ( <IssueContainer key={issue.number} data={issue} /> ));
  }

  render(){
    const { issueAuthors, showAuthors } = this.state
    return (
    <div className="issues-container">
      <div className="issues-header">
        <div className="issues-breakdown-container">
        </div>
        <div className="issues-menu-container">
          <ul>
             <MenuOption
                type="author"
                title="Author"
                options={issueAuthors}
                toggleMenu={() => this.toggleMenu("authors")}
                optionOnClick={(username) => this.applyAuthorFilter(username)}
                showMenu={showAuthors}
             />
           </ul>
        </div>
      </div>
      <ul className="issues-list-container">
      {this.renderIssues()}
      </ul>
    </div>
  )}
}

export default Issues;
