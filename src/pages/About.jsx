import React, { useEffect } from 'react';

function About() {
  useEffect(() => {
    document.title = 'About Me';
  }, []);
  return (
    <div className="about">
      <h1>About Me</h1>
      <p>Hi, I'm John Doe, a web developer and a React enthusiast. I love creating beautiful and interactive web applications using modern technologies.</p>
      <p>I have been working as a web developer for over 5 years, and I have experience in using various frameworks and tools such as React, Redux, TypeScript, GraphQL, Next.js, and more.</p>
      <p>Some of my projects include:</p>
      <ul>
        <li><a href="https://example.com">Example 1</a>: A social media platform that connects people with similar interests.</li>
        <li><a href="https://example.com">Example 2</a>: A e-commerce website that sells unique and handmade products.</li>
        <li><a href="https://example.com">Example 3</a>: A blog that shares my insights and tips on web development and React.</li>
      </ul>
      <p>If you want to know more about me or my work, feel free to contact me at "example@gmail.com" or follow me on.</p>
    </div>
  );
}

export default About;
