import React from 'react'
import './style.css';
import './images/3.jpg';
import { FaTwitter } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
function Content() {
  return (
    <>
      <div className='mclass container-fluid'>
        <section id='intro' className='bimg section-intro'>
          <div className="intro-content">

            <h3 className='small-text'>Hello! It's Me</h3>
            <h1 >Chetan Sharma</h1>
            <h3 className='small-text'>And I'm a <span className='App'><span className='multi multitextcolor'></span></span></h3>
            <div className="social-media">
              <a className='firsticon' href="https://www.linkedin.com/in/chetan-sharma-a9713a253/"><BsLinkedin /></a>
              <a className='icon-instagram' href="https://www.instagram.com/_chetan._sharma_/?igshid=ZDdkNTZiNTM%3D"><BsInstagram /></a>
              <a className='icon-twitter' href="https://twitter.com/Its__CHETAN?t=70B4P8TLLQiaZBpWgHZVOQ&s=09"><FaTwitter /></a>
              <a className='icon-whatsapp' href="https://wa.me/+919996686450"><FaWhatsapp /></a>
            </div>
          </div>
        </section>

        <section id='About' className='section-about'>
          <div className="container">
            <div className="row about-row">

              <div className="margin col-md-4">
                <img src={require('./images/5.jpg')} className='image rounded fluid' alt='responsive' />
              </div>

              <div className="col-md-8">
                <h3 >ABOUT ME</h3>
                <p className='margin2'>

                  Hi there, I'm a passionate developer with expertise in both frontend and backend technologies. I have a strong understanding of various programming languages, including JavaScript, HTML, CSS, Python, and PHP, and I constantly keep myself updated with the latest trends and technologies in the industry.
                  On the backend side, I have expertise in designing and developing RESTful APIs, database management, and server-side programming. I have worked with popular backend frameworks such as Django and have experience in working with SQL and NoSQL databases.
                </p>
                <div className=" margin social-media">
                  <a className='firsticon' href="https://www.linkedin.com/in/chetan-sharma-a9713a253/"><BsLinkedin /></a>
                  <a className='icon-instagram' href="https://www.instagram.com/_chetan._sharma_/?igshid=ZDdkNTZiNTM%3D"><BsInstagram /></a>
                  <a className='icon-twitter' href="https://twitter.com/Its__CHETAN?t=70B4P8TLLQiaZBpWgHZVOQ&s=09"><FaTwitter /></a>
                  <a className='icon-whatsapp' href="https://wa.me/+919996686450"><FaWhatsapp /></a>
                </div>
              </div>
            </div>
          </div>







        </section>









        <section id='Projects' className='section-projects section-about'>
          <div className="container overflow-hidden">
            

         <h1 className='my-4 heading-projects'>My Projects</h1>
          
          
          <div className="row projects-margin justify-content-left gx-5">
    <div className="col-md-4 margin2">
    <div className="card h-100" style={{width:'15rem'}}>
  <img className="cardimage card-img-top" src={require('./images/5.jpg')} alt="Card cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col-md-4 margin">
    <div className="card h-100" style={{width: "15rem"}}>
  <img className=" cardimage card-img-top" src={require('./images/5.jpg')} alt="Card  cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
    </div>
  </div>
  </div>

          </div>
        </section>




        <section id='Skills' className='section-skills'>
          section 4
        </section>




        <section id='ContactMe' className='section-contact'>
          <div className="container w-75">
            <h1 className="text-center">Contact Me</h1>
            <form action="/contact/" method="post">

              <div className="form-group my-2">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" />
              </div>
              <div className="form-group my-2">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" />
              </div>
              <div className="form-group my-2">
                <label htmlFor="Phone">Phone No</label>
                <input type="phone" className="form-control" name="phone" id="phone" placeholder="Your Number" />
              </div>

              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Suggestion</label>
                <textarea className="form-control" id="desc" name="desc" rows="4"></textarea>
              </div>
              <button type="submit" className="btn btn-primary my-2">Submit</button>
            </form>
          </div>
        </section>
      </div>

    </>
  )
}

export default Content
