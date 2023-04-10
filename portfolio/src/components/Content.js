import React from 'react'
import './style.css';
import './images/3.jpg';
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
              <a className='firsticon' href="/"><box-icon type='logo' name='instagram'></box-icon></a>
              <a className='icon' href="/"><box-icon type='logo' name='linkedin-square'></box-icon></a>
              <a className='icon' href="/"><box-icon name='twitter' type='logo' ></box-icon></a>
              <a className='icon' href="/"><box-icon name='whatsapp' type='logo' ></box-icon></a>
            </div>
          </div>
        </section>










        <section id='About' className='section-about'>
        <div class="container">
  <div class="row about-row">
    
    <div class="about-col-1 col-md-4">
    <img src={require('./images/5.jpg')} className='image rounded fluid' alt='responsive' />
    </div>
    
    <div class="col-md-8">
      <h3 >ABOUT ME</h3>
      <p className='about-col-1'>

      Hi there, I'm a passionate developer with expertise in both frontend and backend technologies. I have a strong understanding of various programming languages, including JavaScript, HTML, CSS, Python, and PHP, and I constantly keep myself updated with the latest trends and technologies in the industry.
      On the backend side, I have expertise in designing and developing RESTful APIs, database management, and server-side programming. I have worked with popular backend frameworks such as Django and have experience in working with SQL and NoSQL databases.
      </p>
      <div className=" social-media">
              <a className='firsticon' href="/"><box-icon type='logo' name='instagram'></box-icon></a>
              <a className='icon' href="/"><box-icon type='logo' name='linkedin-square'></box-icon></a>
              <a className='icon' href="/"><box-icon name='twitter' type='logo' ></box-icon></a>
              <a className='icon' href="/"><box-icon name='whatsapp' type='logo' ></box-icon></a>
            </div>
    </div>
    </div>
  </div>
         
      





        </section>









        <section id='Projects' className='section-projects'>
          <div className="container">

      <div className="row">
        <div className="col-md-6">A</div>
        <div className="col-md-6">B</div>
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
