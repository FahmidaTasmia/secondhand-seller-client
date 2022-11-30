import Lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';


const Blog = () => {

    const container =useRef(null)
    useEffect(()=>{
        const instance = Lottie.loadAnimation({
            container:container.current,
            renderer:'svg',
          
            autoplay:true,
            animationData:require('./car.json')
        })
        return () => instance.destroy();
     
    },[])
    return (
        <div>
            <div className='grid md:grid-cols-2'>
        <div className=' mx-auto self-center'>
      <h1 className="text-5xl font-bold "> <span className='text-primary'>Cmart</span> needs to meet their Audience  where they are</h1>
      <p className="py-6">Not all hybrid vehicles still qualify for the onetime $7,500 federal tax credit

            . However, with the purchase of a Chrysler Pacifica Hybrid, you may be eligible

            . This nonrefundable credit doesn’t carry over year-to-year, so make sure you take advantage while you can. You can receive a portion of the $7,500 tax credit

            even if your tax liability is below $7,500

        .</p>

      
    </div>
      
        <div className='container w-75 h-75' ref={container}></div>
        </div>


<div className='md:my-12'>
    <h2 className='text-center text-2xl my-3'>EXAMPLE OF HOW <span className='text-primary font-bold text-3xl'>Cmart</span>  TAKE THE LONG WAY HOME</h2>
    <p className='text-center md:mx-24 md:mb-12 mb-5'>Generally, federal taxes are paid throughout the year through withholding taxes from paychecks or through estimated payments. As a result, this tax credit and the related reduction to the federal tax liability could result in a higher federal tax refund when filing his/her federal tax return.</p>

<section className='grid md:grid-cols-2 md:gap-12 gap-5'>
<div className="card w-full bg-base-100 shadow-xl">
  <figure><img src="https://miro.medium.com/max/1400/1*mjbPUUeSgPTgg3M1gic_xA.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-primary"> What are the different ways to manage a state in a React
              application?</h2>
              <p>
              When we talk about state in our applications, it’s important to be
              clear about what types of state actually matter.
            </p>
            <h2>
            <p>
              There are four main types of state you need to properly manage in
              your React apps:
            </p>
            <li>Local state</li>
            <li>Global state</li>
            <li>Server state</li>
            <li>URL state</li>
            </h2>
    <div className="card-actions">
      <a href='https://medium.com/@stevenpaulino1/redux-when-to-use-it-in-your-react-application-beccb662c72c'className="text-primary font-semibold text-xl">Read More....</a>
    </div>
  </div>
</div>

{/* ....// */}

<div className="card w-full bg-base-100 shadow-xl">
  <figure><img src="https://miro.medium.com/max/746/1*jyIydwSwNy-GB3xAfWxvyg.jpeg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-primary">   How does prototypical inheritance work?</h2>
    <p className='text-justify'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. The Prototypal Inheritance is a feature in
              javascript used to add methods and properties in objects. It is a
              method by which an object can inherit the properties and methods
              of another object. Traditionally, in order to get and set the
              [[Prototype]] of an object, we use Object. getPrototypeOf and
              Object
            </p>
    <div className="card-actions">
      <a href='https://medium.com/@stevenpaulino1/redux-when-to-use-it-in-your-react-application-beccb662c72c'className="text-primary font-semibold text-xl">Read More....</a>
    </div>
  </div>
</div>
{/* ...../3 */}

<div className="card w-full bg-base-100 shadow-xl">
  <figure><img src="https://martinfowler.com/bliki/images/unitTest/sketch.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-primary"> What is a unit test? Why should we write unit tests?</h2>
    <p className="">
              In computer programming, unit testing is a software testing method
              by which individual units of source code—sets of one or more
              computer program modules together with associated control data,
              usage procedures, and operating procedures—are tested to determine
              whether they are fit for use.
            </p>
    <div className="card-actions">
      <a href='https://medium.com/@stevenpaulino1/redux-when-to-use-it-in-your-react-application-beccb662c72c'className="text-primary font-semibold text-xl">Read More....</a>
    </div>
  </div>
</div>
{/* ...../// 4*/}
<div className="card w-full bg-base-100 shadow-xl">
  <figure><img src="https://www.techmagic.co/blog/content/images/2021/06/Inner-01.-React-vs-Angular-vs-Vue.js.-Introduction@2x.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-primary">  React vs. Angular vs. Vue?</h2>
    <p className="text-justify">
                Angular vs. React vs. Vue is one of primary choices in every web
                development process. The frontend framework you select
                influences almost everything: speed, and, therefore, cost of
                development, compatibility with other technologies, app speed
                and performance, and so on. The variety of technology available
                is enormous. That’s why we’ve decided to prepare a series of
                articles comparing the most popular technologies for different
                purposes. We’re starting with frontend frameworks because they
                are responsible for what users see in their browser.
              </p>
    <div className="card-actions">
      <a href='https://medium.com/@stevenpaulino1/redux-when-to-use-it-in-your-react-application-beccb662c72c'className="text-primary font-semibold text-xl">Read More....</a>
    </div>
  </div>
</div>

    
</section>
</div>

<section className='my-12'>
<div className='my-12 bg-gray-100 shadow-sm p-16 rounded'>
 <h1 className="md:text-3xl font-bold font-sans text-primary text-center">Would Love to hear You! <br /> Let us know what you are After.</h1>

<div>
<form className=' md:px-32 p-8 my-8' >
                
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email"   className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full my-5" placeholder="Your Message" required></textarea>

                <input className='btn btn-wide border-none bg-primary text-white' type="submit" value="Contact Us" />
            </form>
</div>
 </div>

</section>



    </div>
  
    );
};

export default Blog;