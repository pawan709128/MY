
HTML (HyperText Markup Language) is the standard language used to create web pages. It consists of a series of elements or "tags" that tell the web browser how to display the content on a web page. Below is an overview of the key components and concepts of HTML.

Basic Structure of an HTML Document
html
Copy code
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
    <meta charset="UTF-8">
  </head>
  <body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
Key HTML Elements
1. <!DOCTYPE html>
Definition: Declares the document type as HTML5.
2. <html>
Definition: The root element that wraps the entire HTML document.
3. <head>
Definition: Contains metadata (data about the data) for the document, such as title, character set, and links to stylesheets or scripts.
4. <title>
Definition: Sets the title of the web page, which appears in the browser tab.
5. <meta>
Definition: Provides metadata like the character encoding (charset="UTF-8") or viewport settings.
6. <body>
Definition: Contains the content of the web page that users see, like text, images, links, and more.
Common HTML Tags
1. Headings (<h1>, <h2>, ..., <h6>)
Definition: Define headings of different sizes.
Example:
html
Copy code
<h1>Main Heading</h1>
<h2>Subheading</h2>
2. Paragraph (<p>)
Definition: Defines a paragraph of text.
Example:
html
Copy code
<p>This is a paragraph.</p>
3. Links (<a>)
Definition: Creates hyperlinks.
Attributes:
href: Specifies the URL of the page the link goes to.
Example:
html
Copy code
<a href="https://www.example.com">Visit Example</a>
4. Images (<img>)
Definition: Embeds an image in the document.
Attributes:
src: The path to the image file.
alt: Alternative text for the image.
Example:
html
Copy code
<img src="image.jpg" alt="An image description">
5. Lists
Unordered list (<ul>): Creates a bulleted list.
html
Copy code
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
Ordered list (<ol>): Creates a numbered list.
html
Copy code
<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>
6. Tables (<table>)
Definition: Creates a table.
Example:
html
Copy code
<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>
7. Forms (<form>)
Definition: Used to collect user input.
Example:
html
Copy code
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <input type="submit" value="Submit">
</form>
Attributes in HTML
Definition: HTML elements can have attributes, which provide additional information about an element.
Syntax: attribute="value"
Example:
html
Copy code
<a href="https://www.example.com" target="_blank">Visit Example</a>
Self-closing Tags
Some tags do not require a closing tag, such as:
<img>, <br>, <hr>
Inline vs Block Elements
Inline Elements: Do not start on a new line and only take up as much width as necessary (e.g., <a>, <span>, <img>).
Block Elements: Always start on a new line and take up the full width available (e.g., <div>, <p>, <h1>).
Semantic HTML5 Elements
These elements provide meaning to the structure of your content:

<header>: Defines the header of a page or section.
<nav>: Represents navigation links.
<section>: Defines a section of a document.
<article>: Represents an independent piece of content.
<footer>: Defines the footer of a page or section.
Example of a Complete HTML Page
html
Copy code
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Web Page</title>
  </head>
  <body>
    <header>
      <h1>Welcome to My Website</h1>
      <nav>
        <a href="#section1">Section 1</a>
        <a href="#section2">Section 2</a>
      </nav>
    </header>

    <section id="section1">
      <h2>About Me</h2>
      <p>This is a paragraph about me.</p>
      <img src="profile.jpg" alt="My Profile Picture">
    </section>

    <section id="section2">
      <h2>Contact Me</h2>
      <form action="/submit" method="POST">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
        <input type="submit" value="Submit">
      </form>
    </section>

    <footer>
      <p>&copy; 2024 My Website</p>
    </footer>
  </body>
</html>