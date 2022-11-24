import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Blog = () => {
    return (
        <div>
            <div className="hero  shadow-sm rounded md:p-32 rounded mb-5 md:mb-12">
                {/* //banner */}
    <div className="hero-content  grid grid-cols-2">
    <div className="max-w-md">
       
      <h1 className="md:text-3xl font-bold font-sans text-blue-700">Resourse for makers and <br /> creative to learn, sells & grow</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn border-none  bg-blue-500 hover:bg-blue-500">explore More <FaArrowRight className='ml-2'></FaArrowRight> </button>
    </div>

    <div><img src="https://i.ibb.co/YXJLLtv/bg.png" alt="" /></div>
  </div>
  </div>


  <div class="grid md:grid-cols-2 gap-4  md:gap-12 ">
  <div className="card w-96 bg-base-100 shadow-xl w-full">
  <figure className="px-10 pt-10">
    <img src="https://www.danielleskosky.com/wp-content/uploads/SQL%20vs%20NoSQL/sql-vs-nosql.png" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title text-blue-500">Difference between SQL and NoSQL</h2>
    <p>When it comes to choosing a database the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both the databases are viable options still there are certain key differences between the two that users must keep in mind when making a decision. </p>
    <div className="card-actions">
      <a href='https://www.geeksforgeeks.org/difference-between-sql-and-nosql/' className="text-blue-500 font-bold flex justify-center items-center hover:text-lg">Learn More <FaArrowRight className='ml-2 '></FaArrowRight></a>
    </div>
  </div>
</div>
 
<div className="card w-96 bg-base-100 shadow-xl w-full">
  <figure className="px-10 pt-10">
    <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--paCGhFRY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/tppls6i2nbdqevr2nybr.png" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title text-blue-500">What is JWT, and how does it work?</h2>
    <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.</p>
    <p>
    Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.
    </p>
    <div className="card-actions">
      <a href='https://dev.to/kcdchennai/how-jwt-json-web-token-authentication-works-21e7#:~:text=What%20is%20JWT%20(JSON%20Web,the%20Identity%20Provider(IdP)./' className="text-blue-500 font-bold flex justify-center items-center hover:text-lg">Learn More <FaArrowRight className='ml-2 '></FaArrowRight></a>
    </div>
  </div>
</div>

<div className="card w-96 bg-base-100 shadow-xl w-full">
  <figure className="px-10 pt-10">
    <img src="https://miro.medium.com/max/692/1*13t_fITLmhxkWmp0HmZTnQ.png" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title text-blue-500">What is the difference between javascript and NodeJS?</h2>
    <p> JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language </p>
    <p>
    Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive.
    </p>
    <div className="card-actions">
      <a href='hhttps://www.knowledgehut.com/blog/web-development/node-js-vs-javasript' className="text-blue-500 font-bold flex justify-center items-center hover:text-lg">Learn More <FaArrowRight className='ml-2 '></FaArrowRight></a>
    </div>
  </div>
</div>

<div className="card w-96 bg-base-100 shadow-xl w-full">
  <figure className="px-10 pt-10">
    <img src="https://pbs.twimg.com/media/DdZPe8YWsAAQ5ss?format=jpg&name=4096x4096" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title text-blue-500">How does NodeJS handle multiple requests at the same time?</h2>
    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. </p>
    <div className="card-actions">
      <a href='https://www.geeksforgeeks.org/difference-between-sql-and-nosql/' className="text-blue-500 font-bold flex justify-center items-center hover:text-lg">Learn More <FaArrowRight className='ml-2 '></FaArrowRight></a>
    </div>
  </div>
</div>
</div>
  {/* a form part */}
 
 <div className='my-12 bg-gray-100 shadow-sm p-16 rounded'>
 <h1 className="md:text-3xl font-bold font-sans text-blue-500 text-center">Would Love to hear You! <br /> Let me know what you are After.</h1>

<div>
<form className='my-5 md:px-32 p-8' >
                
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email"   className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full my-5" placeholder="Your Message" required></textarea>

                <input className='btn btn-wide border-none bg-blue-500 hover:bg-blue-500' type="submit" value="Contact Us" />
            </form>
</div>
 </div>

  
</div>


 
    );
};

export default Blog;