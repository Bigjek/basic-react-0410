import React from 'react'
import CommentList from './comment-list'
import Enzyme, { render, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  it('open comment on click', () => {
    const body = mount(<CommentList comments={articles} />)
    expect(body.find('.test-comment__body').length).toEqual(0)

    body
      .find('.test-comment__btn')
      .at(0)
      .simulate('click')

    expect(body.find('.test-comment__body').length).toEqual(1)
  })

  it('if comment length', () => {
    const body = render(<CommentList comments={articles.comments} />)
    expect(body.find('.test-comment__body').length).toEqual(0)
  })
})
