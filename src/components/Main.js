import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import notl_article from '../images/notl_article.jpeg'

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
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
         <p> Paperback Pals is a program, 
          created by 11 year old Lane, that gives books to
           the children of migrant workers to say thank you for the hard work 
           that they do in and for our communities. The program is kid lead and kid run. 
        </p>
          <p>Children in Ontario register to buy and donate a new book to the child of a migrant worker.
        This shows our thanks to the migrant workers and gives children 
          and teens a great way to connect with those in another country and perhaps build a penpal friendship.</p>
          <p>We need your help so that we can get books to as many children 
          of migrant workers as possible.  If you are between the ages of 4 and 
        16 please sign up to be a Paperback Pal and make a difference in the life of another child.</p>
          </p> 
          <center>Have questions? Send them to Lane at <a href="mailto: paperbackpalsbooks@gmail.com">paperbackpalsbooks@gmail.com</a></center>
          {close}
        </article>

        <article
          id="faq"
          className={`${this.props.article === 'faq' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">FAQ</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span> 
          <p>
          <h4>Can I make a special request? (example: age, gender, country of origin)</h4>
          Yes. We will do our best to accomodate your preferences.
          </p>
          <p>
            <h4>Do I need to purchase a book in Spanish?</h4>
            When you are matched with a child I will tell you what language to get the book in.
            Some will need books in Spanish and some will need books in English.
          </p>
          <p>
          <h4>Can I buy a hard cover book?</h4>
          Migrant workers can only return home at the end of harvest season with one suitcase weighing 
          no more than 35 pounds. So we ask that you get a paperback book to reduce weight as much as possible.
          </p>
          <p>
          <h4>Can I get my match more than one book?</h4>
          Because the workers can only have 35 pounds in their suitcases we ask that you only get
           your match one book.
          For this reason we also ask that you do not include extra items like stickers or 
          pencil crayons with your book.
          </p>
          <p>
          <h4>Can I get my match a magazine instead of a book?</h4>
          Paperback Pals was created in part to share the joy of reading.
           Please buy your Paperback Pal an age appropiate fiction book.
             Please no magazines, non fiction books,textbooks or activity books.
           </p>
          {/* <p/>
          <h4>Can I get my match more than one book?</h4>
          Because the workers can only have 35 pounds in their suitcases we ask that you only get your match one book.
          For this reason we also ask that you do not include extra items like stickers or pencil crayons with your book.

          </p> */}
          {/* <p>
          <h4>Where do I drop off my book?</h4>
          We have a number of drop off locations throughout sourthern Ontario
          Once you have received an email confirming your match we will work out 
          the best drop off location for you.
          </p> */}
          {/* <p>
          <h4>Can I buy a hard cover book?</h4>
          Please purchase a paperback book.
          </p> */}
         
          <p>
          <h4>Where do I drop off my book?</h4>
          We have a number of drop off locations throughout sourthern Ontario
          Once you have received an email confirming your match we will work out 
          the best drop off location for you.
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
          id="media"
          className={`${this.props.article === 'media' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Media</h2>
          <span className="image main">
            <img src={notl_article} alt="" />
          </span>
          <p>
          

          </p>
          {close}
        </article>
        <article
          id="get_started"
          className={`${this.props.article === 'get_started' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Get Started</h2>
          {/* <span className="image main">
            <img src={pic03} alt="" />
          </span> */}
          <ul>
              {/* <li>Migrant workers sign up to have their children receive a book</li>
              <li>Kids in Ontario like you sign up to donate a brand new book.</li>  */}
              <li>Sign up using the register button.</li>
              <li>You are matched with a child and receive an email with the child’s 
                name, age, gender, country of origin and language spoken.</li>
              <li>You buy a brand new book and write a letter to your Paperback Pal 
              introducing yourself and perhaps telling them a little bit about your book choice</li>
              <li>Books and letters are dropped off to us or picked up from you depending on your location</li>
              <li>We deliver the books and letters to the migrant workers who pack them in their suitcase at the end 
              of harvest season and take them home to their waiting child.</li>
              <li>If they are able to the child in Mexico or Jamaica will write to you if 
              they have access to technology and you have included an email address.</li> 
              <br></br>
              You donate a book. 
              A child gets the gift of reading. 
              You make a connection with a child in another country.
              Migrant workers feel a little bit more understood and appreciated.
           </ul>
          <center><p>Its a win-win win-win.</p></center>
          <center>
            <p>
              Have questions?  Send them to Lane at <a href="mailto: paperbackpalsbooks@gmail.com">paperbackpalsbooks@gmail.com</a>
            </p>
          </center>
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
          <form method="post" name="register" data-netlify="true">
            <input type="hidden" name="form-name" value="register" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
            <label htmlFor="name">Age</label>
              <input type="text" name="age" id="age" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Register" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          {/* <ul className="icons">
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
          </ul> */}
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
