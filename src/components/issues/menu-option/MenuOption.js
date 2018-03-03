import React, { Component } from 'react';
import './MenuOption.css';

class MenuOption extends Component{
  constructor(props){
    super(props)
    this.state = {
      showMenu: this.props.showMenu,
    }
  }
  componentWillReceiveProps(newProps){
    this.setState({
      showMenu: newProps.showMenu
    });
  }

  showMenu(){
    if(this.state.showMenu){
      let title = this.props.title;
      return (
        <div className="menu-dropdown-wrapper">
          <div className="menu-dropdown-modal">
            <div className="menu-dropdown-container">
              <div className="menu-dropdown-header">
                <span>Filter by {title.toLowerCase()}</span>
                <svg className="menu-dropdown-close menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12" onClick={() => this.props.toggleMenu()}>
                  <path fillRule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path>
                </svg>
              </div>
              <ul className="menu-options-list">
                {this.renderListItems()}
              </ul>
            </div>
          </div>
        </div>
      )
    }
  }
  renderListItems(){
    switch(this.props.type){
      case 'authors':
        return this.props.options.map(author => {
          return (
            <li key={author.username} onClick={() => this.props.optionOnClick(author.username)}>
              <img className="menu-item-avatar" src={author.avatar_url} alt="G" />
              <span>{author.username}</span>
            </li>
          )
        })
      case 'labels':
        return this.props.options.map(label => {
          return (
            <li key={label.name} onClick={() => this.props.optionOnClick(label.name)}>
              { label.color ?
                (
                  <span className="menu-item-avatar" style={{backgroundColor: "#" + label.color}} />
                ) :
                ""
            }
              <span>{label.name}</span>
            </li>
          )
        })
      default:
        return;
    }
  }
  render(){
    const { toggleMenu, title } = this.props;
    return (
      <li className="menu-option-container">
        <div className="menu-title" onClick={() => toggleMenu()}>{title}</div>
        {this.showMenu()}
      </li>
  )}
}

export default MenuOption
