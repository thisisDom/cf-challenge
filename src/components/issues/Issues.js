import React, { Component } from 'react';
import axios from 'axios';
<<<<<<< HEAD
import Issue from './issue/Issue';
import MenuOption from './menu-option/MenuOption';
=======
import IssueContainer from './Issue/Issue';
>>>>>>> 77a5642... Add package to run sass scripts with npm build & npm start
import './Issues.css';

class Issues extends Component {
  constructor(props){
    super(props);
    this.state = {
<<<<<<< HEAD
      loading: false,
      issues: [],
      issueAuthors: [],
      showAuthors: false,
      authorFilter: null,
      issueLabels: [],
      showLabels: false,
      labelFilter: null,
      sortSelected: 'newest',
      sortOptions: [
        { name: "Newest", value: 'newest'},
        { name: "Oldest", value: 'oldest'},
        { name: "Most Commented", value: 'most commented'},
        { name: "Least Commented", value: 'least commented'},
        { name: "Recently Updated", value: 'recently updated'},
        { name: "Least Recently Updated", value: 'least recently updated'},
      ],
      showSort: false,
    };
  }

  getIssues(){
    let { authorFilter, labelFilter, sortSelected } = this.state;
    let sortBy, sortDirection;
    this.setState({
      loading: true,
    })
    switch(sortSelected){
      case 'least recently updated':
        sortBy= "updated"
        sortDirection="asc"
        break;
      case 'recently updated':
        sortBy= "updated"
        sortDirection="desc"
        break;
      case 'least commented':
        sortBy= "comment"
        sortDirection="asc"
        break;
      case 'most commented':
        sortBy= "comments"
        sortDirection="desc"
        break;
      case 'oldest':
        sortBy= "created"
        sortDirection="asc"
        break;
      case 'newest':
      default:
        sortBy= "created"
        sortDirection="desc"
        break;
    }
    let params = {
      state: "open"
    };
    if(authorFilter){
      params.creator = authorFilter
    }
    if(labelFilter){
      params.labels = labelFilter
    }
    params.sort = sortBy
    params.direction = sortDirection

    axios.get('https://api.github.com/repos/DestinyItemManager/DIM/issues', {
      params: params
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
        if ( labelA.name === 'Unlabeled'){
          return -1;
        }
        if ( labelB.name === 'Unlabeled'){
          return 1;
        }
        let a = labelA.name.toLowerCase();
        let b = labelB.name.toLowerCase();
        if (a < b){
          return -1;
        }
        if (a > b){
          return 1;
        }
        return 0;
      })

      this.setState({
        loading: false,
        issues: issues,
        issueAuthors: issueAuthors,
        issueLabels: issueLabels,
      });
    })
  }

  componentWillMount(){
    this.getIssues();
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

  applySort(sortBy){
    // let issues = this.state.issues;
    // switch(sortBy){
    //   case 'least recently updated':
    //     issues.sort((issueA, issueB) => {
    //         let a = issueA.updated_at;
    //         let b = issueB.updated_at;
    //         if (a < b){
    //           return -1;
    //         }
    //         if (a > b){
    //           return 1;
    //         }
    //         return issueA.number < issueB.number ? 1 : -1
    //     })
    //     break;
    //   case 'recently updated':
    //     issues.sort((issueA, issueB) => {
    //         let a = issueA.updated_at;
    //         let b = issueB.updated_at;
    //         if (a > b){
    //           return -1;
    //         }
    //         if (a < b){
    //           return 1;
    //         }
    //         return issueA.number < issueB.number ? 1 : -1
    //     })
    //     break;
    //   case 'least commented':
    //     issues.sort((issueA, issueB) => {
    //         let a = issueA.comments;
    //         let b = issueB.comments;
    //         if (a < b){
    //           return -1;
    //         }
    //         if (a > b){
    //           return 1;
    //         }
    //         return issueA.number < issueB.number ? 1 : -1
    //     })
    //     break;
    //   case 'most commented':
    //     issues.sort((issueA, issueB) => {
    //         let a = issueA.comments;
    //         let b = issueB.comments;
    //         if (a > b){
    //           return -1;
    //         }
    //         if (a < b){
    //           return 1;
    //         }
    //         return issueA.number < issueB.number ? 1 : -1
    //     })
    //     break;
    //   case 'oldest':
    //     issues.sort((issueA, issueB) => {
    //         let a = issueA.created_at;
    //         let b = issueB.created_at;
    //         if (a < b){
    //           return -1;
    //         }
    //         if (a > b){
    //           return 1;
    //         }
    //         return issueA.number < issueB.number ? 1 : -1
    //     })
    //     break;
    //   case 'newest':
    //   default:
    //     issues.sort((issueA, issueB) => {
    //       let a = issueA.created_at;
    //       let b = issueB.created_at;
    //       if (a > b){
    //         return -1;
    //       }
    //       if (a < b){
    //         return 1;
    //       }
    //       return issueA.number < issueB.number ? 1 : -1
    //     })
    //     break;
    // }

    this.state.sortSelected = sortBy;
    this.state.showSort = false;
    this.getIssues();
=======
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
>>>>>>> 77a5642... Add package to run sass scripts with npm build & npm start
  }

  renderIssues(){
    let issues = this.state.issues;
<<<<<<< HEAD

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

    return issues.map(issue => ( <Issue key={issue.number} data={issue} /> ));
  }

  toggleMenu(type){
    switch (type){
      case "authors":
        this.setState({
          showAuthors: !this.state.showAuthors,
          showSort: false,
          showLabels: false,
        });
        return;
      case "labels":
        this.setState({
          showAuthors: false,
          showSort: false,
          showLabels: !this.state.showLabels,
        });
        return;
      case "sort":
        this.setState({
          showAuthors: false,
          showLabels: false,
          showSort: !this.state.showSort,
        });
        return;
      default:
      return;
    }
  }

  render(){
    const { issueAuthors, showAuthors, authorFilter, issueLabels, showLabels, labelFilter, sortOptions, showSort, sortSelected  } = this.state
    return (
    <div className="issues-container">
      <div className="issues-repo-name">Open Issues for the <a href="https://www.github.com/DestinyItemManager/DIM">DestinyItemManager Repository</a></div>
      <div className="issues-header">
        <div className="issues-breakdown-container">
        </div>
        <div className="issues-menu-container">
          <ul>
             <MenuOption
                type="authors"
                menuTitle="Authors"
                dropdownHeader="Filter by author"
                options={issueAuthors}
                toggleMenu={() => this.toggleMenu("authors")}
                optionOnClick={(username) => this.applyAuthorFilter(username)}
                showMenu={showAuthors}
                selected={authorFilter}
             />
             <MenuOption
                type="labels"
                menuTitle="Labels"
                dropdownHeader="Fitler by label"
                options={issueLabels}
                toggleMenu={() => this.toggleMenu("labels")}
                optionOnClick={(username) => this.applyLabelFilter(username)}
                showMenu={showLabels}
                selected={labelFilter}
             />
             <MenuOption
                type="sort"
                menuTitle="Sort"
                dropdownHeader="Sort by"
                options={sortOptions}
                toggleMenu={() => this.toggleMenu("sort")}
                optionOnClick={(sortBy) => this.applySort(sortBy)}
                showMenu={showSort}
                selected={sortSelected}
             />
           </ul>
        </div>
      </div>
      <ul className="issues-list-container">
      {this.renderIssues()}
=======
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
>>>>>>> 77a5642... Add package to run sass scripts with npm build & npm start
      </ul>
    </div>
  )}
}

export default Issues;
