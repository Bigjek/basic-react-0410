import React, { Component } from 'react'
import toggleButtonDecorator from '../decorators/toggle-button'
import Calendar from './calendar'

class CommentsList extends Component {
  render() {
    const { onButtonClick, statusToggle, comments } = this.props
    var body = statusToggle && <ul>{this.body}</ul>

    return (
      <div>
        <h4>Комментарии</h4>
        <button onClick={onButtonClick}>Показать</button>
        {body}
      </div>
    )
  }

  get body() {
    const { comments } = this.props
    return comments.map((article) => (
      <li key={article.id}>
        <div>
          {article.user}{' '}
          <b>
            {' '}
            Дата <Calendar />
          </b>
        </div>
        <br />
        <div>{article.text}</div>
        <hr />
      </li>
    ))
  }
}

export default toggleButtonDecorator(CommentsList)
