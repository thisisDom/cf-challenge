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
<<<<<<< HEAD
      let header = this.props.dropdownHeader;
=======
      let title = this.props.title;
>>>>>>> c4c3db9... Implement Author filtering on issues
      return (
        <div className="menu-dropdown-wrapper">
          <div className="menu-dropdown-modal">
            <div className="menu-dropdown-container">
              <div className="menu-dropdown-header">
<<<<<<< HEAD
                <span>{header}</span>
=======
                <span>Filter by {title.toLowerCase()}</span>
>>>>>>> c4c3db9... Implement Author filtering on issues
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
<<<<<<< HEAD
      case 'authors':
        return this.props.options.map(author => {
          return (
            <li key={author.username} onClick={() => this.props.optionOnClick(author.username)}>
              <span className="menu-selected-container">
                { this.props.selected === author.username ?
                  (
                      <svg aria-hidden="true" className="menu-selected-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                        <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path>
                    </svg>
                  ) :
                  ""
                }
              </span>
=======
      case 'author':
        return this.props.options.map(author => {
          return (
            <li key={author.username} onClick={() => this.props.optionOnClick(author.username)}>
>>>>>>> c4c3db9... Implement Author filtering on issues
              <img className="menu-item-avatar" src={author.avatar_url} alt="G" />
              <span>{author.username}</span>
            </li>
          )
        })
<<<<<<< HEAD
      case 'labels':
        return this.props.options.map(label => {
          return (
            <li key={label.name} onClick={() => this.props.optionOnClick(label.name)}>
              <span className="menu-selected-container">
                { this.props.selected === label.name ?
                  (
                      <svg aria-hidden="true" className="menu-selected-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                        <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path>
                    </svg>
                  ) :
                  ""
                }
              </span>
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
        case 'sort':
          return this.props.options.map(sortBy => {
            return (
              <li key={sortBy.name} onClick={() => this.props.optionOnClick(sortBy.value)}>
                <span className="menu-selected-container">
                  { this.props.selected === sortBy.value ?
                    (
                        <svg aria-hidden="true" className="menu-selected-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                          <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path>
                      </svg>
                    ) :
                    ""
                  }
                </span>
                <span>{sortBy.name}</span>
              </li>
            )
          })
=======
>>>>>>> c4c3db9... Implement Author filtering on issues
      default:
        return;
    }
  }
  render(){
<<<<<<< HEAD
    const { toggleMenu, menuTitle } = this.props;
    return (
      <li className="menu-option-container">
        <div className="menu-title" onClick={() => toggleMenu()}>{menuTitle}</div>
=======
    const { toggleMenu, title } = this.props;
    return (
      <li className="menu-option-container">
        <div className="menu-title" onClick={() => toggleMenu()}>{title}</div>
>>>>>>> c4c3db9... Implement Author filtering on issues
        {this.showMenu()}
      </li>
  )}
}

export default MenuOption
