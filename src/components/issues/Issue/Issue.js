import React from 'react';
import formatDate from '../../../helpers/formatDate';
import './Issue.css';

const Issue = props => {
    let { html_url: url, number, title, user: { login: username, html_url: profile }, state, created_at, labels, assignees, comments} = props.data;
    let date = formatDate(created_at);

    let status = state === "open" ?
    (<svg className="issue-open-icon" height="16"  viewBox="0 0 14 16" width="14">
      <path fillRule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path>
    </svg>)
    :
    (<svg className="issue-closed-icon" height="16" viewBox="0 0 16 16" width="16">
      <path fillRule="evenodd" d="M7 10h2v2H7v-2zm2-6H7v5h2V4zm1.5 1.5l-1 1L12 9l4-4.5-1-1L12 7l-1.5-1.5zM8 13.7A5.71 5.71 0 0 1 2.3 8c0-3.14 2.56-5.7 5.7-5.7 1.83 0 3.45.88 4.5 2.2l.92-.92A6.947 6.947 0 0 0 8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7l-1.52 1.52c-.66 2.41-2.86 4.19-5.48 4.19v-.01z"></path>
    </svg>)

    labels = labels.map((label, index) => {
      return ( <span key={index} className="issue-label" style={{backgroundColor: "#" + label.color}}>{label.name}</span> )
    });

    assignees = assignees.map(({ login: username, html_url: profile, avatar_url }, index) => {
      return (
        <div key={username} className="issue-assignee-container" title={`Assigned to ${username}`}>
          <a href={profile}>
            <img className='issue-assignee-avatar' src={avatar_url} alt="G" />
          </a>
        </div>
      )
    });

    comments = comments > 0 ?
        (<a className="issue-comment-link" href={url}>
          <svg className="issue-comment-icon" height="16" viewBox="0 0 16 16" width="16"><path fillRule="evenodd" d="M14 1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2 2v-2H2V2h12v8z"></path></svg>
          <span className="issue-comment-text">{comments}</span>
        </a>) :
        '';

    return (
      <li className="issue-container">
        <div className="issue-info-container">
          <div className="issue-status-container">
            {status}
          </div>
          <div className="issue-details-container">
            <div className="issue-detail-title">
              <a href={url}>{title}</a>
              {labels}
            </div>
            <div className="issue-detail-footer">
              {`#${number} opened ${date} by `}<a href={profile}>{username}</a>
            </div>
          </div>
        </div>
        <div className="issue-tools-container">
          <div className="issue-assignees-container">
          {assignees}
          </div>
          <div className="issue-comment-container">
          {comments}
          </div>
        </div>
      </li>
    )
}

export default Issue;
