import React from 'react'
import './style.css';
function Content() {
  return (
    <>
  <div>
      <section id='intro' className='bimg'>
      <div className="intro-content">
      <h3>Hello, It's Me</h3>
      <h1>Chetan Sharma</h1>
      <h3>And I'm a <span className='App'><span className='multi'></span></span></h3>
      <div className="social-media">
        <a href="/"><box-icon type='logo' name='instagram'></box-icon></a>
        <a href="/"><box-icon type='logo' name='linkedin-square'></box-icon></a>
        <a href="/"><box-icon name='twitter' type='logo' ></box-icon></a>
        <a href="/"><box-icon name='whatsapp' type='logo' ></box-icon></a>
      </div>
      </div>
       
      
    
      
      </section>




      <section id='About'>
        section 2
      </section>
      <section id='Projects'>
        section 3
      </section>
      <section id='Skills'>
        section 4
      </section>




      <section id='ContactMe'>
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
