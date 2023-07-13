// import React from 'react'
import React, { useState } from "react";
import { TfiArrowRight } from 'react-icons/tfi';

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !email ||
      !email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ) {
      setErrors(["Please enter a valid email address."]);
      return;
    }


    const data = {
      email,
      name,
    };

    fetch("/newsletter/signup", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setErrors([]);
          alert("Thank you for signing up for our newsletter!");
        } else {
          setErrors(result.errors);
        }
      });
  };
  return (
    <div  flex flex-col className="mt-36 text-center">

        <h1 className="font-bold text-4xl">NEWSLETTERS</h1>
        <h1 className="mt-4">
          Subscribe our newsletter to get notify about discount and latest
          update. Don’t worry, we not
        </h1>
        <h1 className="mt-2">spam!</h1>

      <form onSubmit={handleSubmit}>
        <input
          className='mt-10 text-gray-400 text-lg border-b'
          type="email"
          name="email"
          placeholder="Email your email here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit"><span><h1 className='mt-10 ml-40'><TfiArrowRight/></h1></span></button>
      </form>

      {errors.map((error, index) => (
        <p key={index}>{error}</p>
      ))}
    </div>
  );
};

export default NewsLetter;
