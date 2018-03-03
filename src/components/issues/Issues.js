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
      issueLabels: [],
      showLabels: false,
      labelFilter: null,
    };
  }

  componentWillMount(){
    axios.get('https://api.github.com/repos/DestinyItemManager/DIM/issues', {
      params: {
        state: "open"
      }
    })
    .then(response => {
      let authors = {}
      let labels = {}
      let issues = response.data.map(issue => {
        authors[issue.user.login] = {
          username: issue.user.login,
          avatar_url: issue.user.avatar_url,
        };
        issue.labels.forEach(label => {
          labels[label.name] = {
            name: label.name,
            color: label.color,
          }
        })
        return issue;
      });

      let issueAuthors = [];
      for (let user in authors){
        issueAuthors.push(authors[user]);
      }

      issueAuthors.sort((authorA, authorB) => {
        let a = authorA.username.toLowerCase();
        let b = authorB.username.toLowerCase();
        if (a < b){
          return -1
        }
        if (a > b){
          return 1
        }
        return 0;
      })

      let issueLabels = [{
        name: "Unlabeled"
      }];
      for (let name in labels){
        issueLabels.push(labels[name]);
      }

      issueLabels.sort((labelA, labelB) => {
        let a = labelA.name.toLowerCase();
        let b = labelB.name.toLowerCase();
        if ( a === 'Unlabeled'){
          return -1;
        }
        if ( b === 'Unlabeled'){
          return 1;
        }
        if (a < b){
          return -1;
        }
        if (a > b){
          return 1;
        }
        return 0;
      })

      this.setState({
        issues: issues,
        issueAuthors: issueAuthors,
        issueLabels: issueLabels,
      });
    });
  }

  applyAuthorFilter(username){
    if (username === this.state.authorFilter){
      this.setState({
        authorFilter: null,
        showAuthors: false,
      })
    }
    else{
      this.setState({
        authorFilter: username,
        showAuthors: false,
      });
    }
  }

  applyLabelFilter(name){
    if (name === this.state.labelFilter){
      this.setState({
        labelFilter: null,
        showLabels: false,
      })
    }
    else{
      this.setState({
        labelFilter: name,
        showLabels: false,
      });
    }
  }

  renderIssues(){
    let issues = this.state.issues;

    if (this.state.authorFilter){
      issues = issues.filter(issue => issue.user.login === this.state.authorFilter );
    }

    if (this.state.labelFilter){
      if (this.state.labelFilter === 'Unlabeled'){
        issues = issues.filter(issue => issue.labels.length === 0 );
      }
      else{
        issues = issues.filter(issue => {
          return issue.labels.find(label => label.name === this.state.labelFilter);
        });
      }
    }

    return issues.map(issue => ( <IssueContainer key={issue.number} data={issue} /> ));
  }

  toggleMenu(type){
    switch (type){
      case "authors":
        this.setState({
          showAuthors: !this.state.showAuthors,
          showLabels: false,
        });
        return;
      case "labels":
        this.setState({
          showAuthors: false,
          showLabels: !this.state.showLabels,
        });
        return;
      default:
      return;
    }
  }

  render(){
    const { issueAuthors, showAuthors, issueLabels, showLabels  } = this.state
    return (
    <div className="issues-container">
      <div className="issues-header">
        <div className="issues-breakdown-container">
        </div>
        <div className="issues-menu-container">
          <ul>
             <MenuOption
                type="authors"
                title="Author"
                options={issueAuthors}
                toggleMenu={() => this.toggleMenu("authors")}
                optionOnClick={(username) => this.applyAuthorFilter(username)}
                showMenu={showAuthors}
             />
             <MenuOption
                type="labels"
                title="Labels"
                options={issueLabels}
                toggleMenu={() => this.toggleMenu("labels")}
                optionOnClick={(username) => this.applyLabelFilter(username)}
                showMenu={showLabels}
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
