import React from 'react'
import './style.css';
function Content() {
  return (
    <div>
      <section  id='intro' className='bimg'>
        
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
          <label for="name">Name</label>
          <input type="text" name="name" className="form-control" id="name" placeholder="Your Name"/>
        </div>
        <div className="form-group my-2">
            <label for="exampleFormControlInput1">Email address</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com"/>
          </div>
          <div className="form-group my-2">
            <label for="Phone">Phone No</label>
            <input type="phone" className="form-control" name="phone" id="phone" placeholder="Your Number"/>
          </div>
        
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Suggestion</label>
          <textarea className="form-control" id="desc" name="desc" rows="4"></textarea>
        </div>
        <button type="submit" className="btn btn-primary my-2">Submit</button>
      </form>
  </div>
      </section>
    </div>
  )
}

export default Content
