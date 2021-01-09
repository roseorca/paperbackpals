import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
          Paperback Pals is a youth led program that matches Ontario children with the children of migrant workers.  
          Children in Ontario donate brand new books to the children of migrant workers! 
          This shows our thanks to the migrant workers and makes Paperback Pals is a great way for children or teens 
          to connect with others and make connections! We are looking for kids between the age of 4 and 16! 
          <br/>
          Migrant workers sign up to have their children receive a book
          Kids in Ontario like you sign up to donate a brand new book
          You are matched with a child and receive an email with the child’s name, age, gender, 
          country of origin and language spoken
          You buy a brand new book and write a letter to your Paperback Pal introducing yourself and perhaps telling them a 
          little bit about your book choice
          Books and letters are dropped off to us or picked up from you depending on your location
          We deliver the books and letters to the migrant workers who packs them in their suitcase at the end of 
          harvest season and take them home to their waiting child.
          If they are able the child in Mexico or Jamaica will write to you if they have access to technology and 
          you have included an email address
          You donate a book.  A child gets the gift of reading.  You make a connection with a child in another country.  
          Migrant workers feel a little bit more understood and appreciated.

          Its a win-win win-win.

          Have questions.  Send them to Lane at paperbackpalsbooks@gmail.com

            
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">FAQ</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Do I get my book in Spanish?
            <br/> When you are matched with a child I will tell you what language to get the book in. 
            Some will need books in Spanish and some will need books in English.
            <br/>
            <p/>
            Can I get my match a magazine?
            <br/>You must get your match a book.
            <p/>
            Can I get my match more than one book?
            <br/>
            Because the workers can only have 35 pounds in their suitcases we ask that you only get your match one book.
             For this reason we also ask that you do not include extra items like stickers or pencil crayons wwith your book.
             <br/>
             
            
          </p>
          <p>
            
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Workers</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
          Approximately 30,000 migrant workers come to Ontario from Mexico, Jamaica and the caribbean each year.   
          They leave their home countries for up to eight months  a year to work on Ontario farms.  
          They work hard to make sure that we have fresh fruits and vegetables!  
          As kids we can all say thank you to these migrant workers who work so hard for us by connecting with their children 
          through the donation of  book and the start of pen pal friendship.  

          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Register</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
