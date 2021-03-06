import React, { Component } from 'react'

class Specialties extends Component {
  render() {
    const specialties =
      [
        {
          name: "JavaScript",
          image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png",
          description: "JavaScript is a programming language commonly used in web development. It was originally developed by Netscape as a means to add dynamic and interactive elements to websites. While JavaScript is influenced by Java, the syntax is more similar to C and is based on ECMAScript, a scripting language developed by Sun Microsystems."
        },
        {
          name: "Ruby",
          image_url: "https://blog.joefallon.net/wp-content/uploads/2014/07/rubylang.png",
          description: "Ruby is a dynamic, reflective, object-oriented, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro 'Matz' Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, Smalltalk, Eiffel, Ada, and Lisp.[11] It supports multiple programming paradigms, including functional, object-oriented, and imperative. It also has a dynamic type system and automatic memory management."
        },
        {
          name: "Node.js",
          image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
          description: "Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser."
        }
      ]

      const specialitesJSX = specialties.map((specialty) => {
        return (<div>
          <h2>{specialty.name}</h2>
          <img width='300px' src={specialty.image_url} alt="logo"/>
          <p>{specialty.description}</p>
        </div>)
      } )

    return (
      <div>
        {specialitesJSX}
      </div>
    )
  }
}

export default Specialties

