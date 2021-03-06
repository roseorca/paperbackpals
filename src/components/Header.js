import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    {/* <div className="logo">
      <span className="icon fa-book"></span>
    </div> */}
    <div>
    <button
            onClick={() => {
              props.onOpenArticle('get_started')
            }}
          >
            Get Started
          </button>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Paperback Pals</h1>
        <p>
          A youth lead program to say thank you to the migrant workers in our communities{' '}
          
          {' '}
          
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('faq')
            }}
          >
            FAQ
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Workers
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Register
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('media')
            }}
          >
            Media
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
