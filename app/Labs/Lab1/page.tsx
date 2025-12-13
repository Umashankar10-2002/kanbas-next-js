import Image from "next/image";
import Link from "next/link";

export default function Lab1() {
  return (
    <div>
      <h1 id="top">Lab 1</h1>
      <p>
        <Link href="/">Back to Kambaz</Link> | <Link href="/Labs">Back to Labs</Link>
      </p>

      {/* Headings */}
      <h2>Headings</h2>
      <h1>Web Development</h1>
      <h2>HTML</h2>
      <h3>CSS</h3>
      <h4>JavaScript</h4>
      <h5>Next.js</h5>

      {/* Paragraphs */}
      <h2>Paragraphs</h2>
      <p>This is my first assignment of this course</p>
      <p>Scroll down for more</p>

      {/* Ordered List (recipe) */}
      <h2>Ordered List</h2>
      <p>Steps to build a full stack app</p>
      <ol>
        <li>Learn HTML</li>
        <li>Learn CSS</li>
        <li>Learn JavaScript</li>
        <li>Learn Next.js</li>
        <li>Build and Deploy</li>
      </ol>

      {/* Unordered List (books) */}
      <h2>Unordered List</h2>
      <p>My favorite web technologies</p>
      <ul>
        <li>React</li>
        <li>Next.js</li>
        <li>Express</li>
        <li>MongoDB</li>
      </ul>

      {/* Table */}
      <h2>Table</h2>
      <table>
        <thead>
          <tr><th>Quiz</th><th>Topic</th><th>Date</th><th>Score</th></tr>
        </thead>
        <tbody>
          <tr><td>Q3</td><td>HTML</td><td>2025-01-10</td><td>90</td></tr>
          <tr><td>Q4</td><td>CSS</td><td>2025-01-17</td><td>85</td></tr>
          <tr><td>Q5</td><td>JS</td><td>2025-01-24</td><td>95</td></tr>
          <tr><td>Q6</td><td>React</td><td>2025-01-31</td><td>92</td></tr>
        </tbody>
      </table>

      {/* Images */}
      <h2>Images</h2>
      <p>Starship:</p>
      <Image src="/starship.jpeg" width={300} height={200} alt="Starship" />

      <p>Teslabot:</p>
      <Image src="/90.jpeg" width={300} height={200} alt="Teslabot" />

      {/* Forms */}
      <h2>Form</h2>
      <form>
        <label>Username: <input type="text" /></label><br />
        <label>Password: <input type="password" /></label><br />
        <label>First Name: <input type="text" /></label><br />
        <label>Last Name: <input type="text" /></label><br />
        <label>Email: <input type="email" /></label><br />
        <label>Salary: <input type="number" /></label><br />
        <label>Rating: <input type="range" min="0" max="5" /></label><br />
        <label>DOB: <input type="date" /></label><br />

        <h3>Radio Buttons</h3>
        <input type="radio" name="genre" /> Comedy<br />
        <input type="radio" name="genre" /> Drama<br />
        <input type="radio" name="genre" /> Sci-Fi<br />
        <input type="radio" name="genre" /> Fantasy<br />

        <h3>Checkboxes</h3>
        <input type="checkbox" /> Comedy<br />
        <input type="checkbox" /> Drama<br />
        <input type="checkbox" /> Sci-Fi<br />
        <input type="checkbox" /> Fantasy<br />

        <h3>Dropdowns</h3>
        <label>Select one:
          <select>
            <option>Comedy</option>
            <option>Drama</option>
            <option>Sci-Fi</option>
            <option>Fantasy</option>
          </select>
        </label><br />

        <label>Select many:
          <select multiple>
            <option>Comedy</option>
            <option>Drama</option>
            <option>Sci-Fi</option>
            <option>Fantasy</option>
          </select>
        </label><br />
      </form>

      {/* Anchor Tag */}
      <h2>Anchor Tag</h2>
      <p><Link href="#top">Back to top</Link></p>
    </div>
  );
}
