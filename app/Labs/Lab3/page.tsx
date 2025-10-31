export default function Lab3() {
    return (
      <div className="container mt-4 p-3 border">
        <h1>Lab 3 – Bootstrap Containers and Grids</h1>
        <p className="text-muted">
          Demonstrating responsive layout, grids, and breakpoints.
        </p>
  
        {/* 38 – Container */}
        <div className="border p-3 my-3">
          <p>Thin padding all around (Bootstrap container)</p>
        </div>
  
        {/* 39 – Grid layouts */}
        <h2>Grid Layouts</h2>
  
        <div className="row mb-3">
          <div className="col-6 bg-light border">Left Half</div>
          <div className="col-6 bg-secondary text-white border">Right Half</div>
        </div>
  
        <div className="row mb-3">
          <div className="col-8 bg-info border">Two Thirds</div>
          <div className="col-4 bg-warning border">One Third</div>
        </div>
  
        <div className="row mb-3">
          <div className="col-3 bg-dark text-white border">Sidebar</div>
          <div className="col-9 bg-light border">Main Content</div>
        </div>
  
        {/* 40 – Responsive A B C D */}
        <h2>Responsive Columns A–D</h2>
        <div className="row text-center">
          <div className="col-sm-3 bg-danger text-white p-2">A</div>
          <div className="col-sm-3 bg-success text-white p-2">B</div>
          <div className="col-sm-3 bg-primary text-white p-2">C</div>
          <div className="col-sm-3 bg-warning text-dark p-2">D</div>
        </div>
  
        {/* 41 – Columns 1–12 */}
        <h2 className="mt-4">Responsive 1–12 Columns</h2>
        <div className="row text-center">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="col border">
              {i + 1}
            </div>
          ))}
        </div>
  
        {/* 42 – Breakpoints box */}
        <div
          className="position-fixed bottom-0 end-0 bg-dark text-white px-3 py-2"
          style={{ opacity: 0.8 }}
        >
          Breakpoints visible
        </div>

        <h2 className="mt-5">Bootstrap Tables</h2>

{/* 43 – Standard styled table */}
<div className="table-container my-4">
  <h4>Quizzes Table</h4>
  <table className="table table-striped table-bordered text-center align-middle">
    <thead className="table-dark">
      <tr>
        <th>Quiz</th>
        <th>Topic</th>
        <th>Date</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Q1</td><td>HTML</td><td>Jan 10 2025</td><td>95</td></tr>
      <tr><td>Q2</td><td>CSS</td><td>Jan 17 2025</td><td>88</td></tr>
      <tr><td>Q3</td><td>Bootstrap</td><td>Jan 24 2025</td><td>92</td></tr>
      <tr><td>Q4</td><td>JavaScript</td><td>Jan 31 2025</td><td>90</td></tr>
    </tbody>
  </table>
</div>

{/* 44 – Responsive table */}
<h4>Responsive Table Example</h4>
<div className="table-responsive border">
  <table className="table table-hover text-nowrap text-center">
    <thead className="table-primary">
      <tr>
        <th>Title</th>
        <th>Instructor</th>
        <th>Duration</th>
        <th>Description</th>
        <th>Start Date</th>
        <th>End Date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Full Stack Dev</td>
        <td>John Doe</td>
        <td>12 weeks</td>
        <td>Learn MERN stack development with projects.</td>
        <td>Feb 1 2025</td>
        <td>Apr 30 2025</td>
      </tr>
      <tr>
        <td>React Basics</td>
        <td>Jane Smith</td>
        <td>8 weeks</td>
        <td>Intro to React and Hooks for frontend development.</td>
        <td>Feb 10 2025</td>
        <td>Apr 5 2025</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 className="mt-5">Bootstrap Lists</h2>

{/* 45 – List of favorite movies */}
<h4>Favorite Movies</h4>
<ul className="list-group mb-4">
  <li className="list-group-item">Inception</li>
  <li className="list-group-item">Interstellar</li>
  <li className="list-group-item">The Dark Knight</li>
  <li className="list-group-item">Tenet</li>
</ul>

{/* 46 – List of book links */}
<h4>Favorite Books</h4>
<div className="list-group">
  <a
    href="https://www.goodreads.com/book/show/5907.The_Hobbit"
    className="list-group-item list-group-item-action"
    target="_blank"
  >
    The Hobbit
  </a>
  <a
    href="https://www.goodreads.com/book/show/4671.The_Great_Gatsby"
    className="list-group-item list-group-item-action"
    target="_blank"
  >
    The Great Gatsby
  </a>
  <a
    href="https://www.goodreads.com/book/show/2657.To_Kill_a_Mockingbird"
    className="list-group-item list-group-item-action"
    target="_blank"
  >
    To Kill a Mockingbird
  </a>
</div>

<h2 className="mt-5">Bootstrap Forms</h2>

{/* 47 – Email and text area */}
<form className="mb-4">
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
  </div>
  <div className="mb-3">
    <label htmlFor="message" className="form-label">Your message</label>
    <textarea className="form-control" id="message" rows={3}></textarea>
  </div>
</form>

{/* 48 – Dropdown */}
<div className="mb-4">
  <label htmlFor="dropdown" className="form-label">Select Category</label>
  <select className="form-select" id="dropdown">
    <option>Technology</option>
    <option>Design</option>
    <option>Science</option>
    <option>Art</option>
  </select>
</div>

{/* 49 – Switches */}
<div className="form-check form-switch mb-4">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Notifications</label>
</div>

{/* 50 – Slider */}
<div className="mb-4">
  <label htmlFor="customRange1" className="form-label">Volume</label>
  <input type="range" className="form-range" id="customRange1" />
</div>

{/* 51 – Input Addons */}
<div className="input-group mb-4">
  <span className="input-group-text" id="basic-addon1">@</span>
  <input type="text" className="form-control" placeholder="username" aria-label="Username" aria-describedby="basic-addon1" />
</div>

{/* 52–54 – Responsive Form Layout */}
<h4 className="mt-5">Responsive Form Layout</h4>
<form className="row g-3">
  <div className="col-md-6">
    <label htmlFor="firstName" className="form-label">First Name</label>
    <input type="text" className="form-control" id="firstName" />
  </div>
  <div className="col-md-6">
    <label htmlFor="lastName" className="form-label">Last Name</label>
    <input type="text" className="form-control" id="lastName" />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="123 Main St" />
  </div>
  <div className="col-md-6">
    <label htmlFor="city" className="form-label">City</label>
    <input type="text" className="form-control" id="city" />
  </div>
  <div className="col-md-4">
    <label htmlFor="state" className="form-label">State</label>
    <select id="state" className="form-select">
      <option>Choose...</option>
      <option>NY</option>
      <option>CA</option>
      <option>MA</option>
    </select>
  </div>
  <div className="col-md-2">
    <label htmlFor="zip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="zip" />
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>

<h2 className="mt-5">Bootstrap Tabs, Pills & Cards</h2>

{/* 55 – Tabs */}
<ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="home-tab"
            data-bs-toggle="tab" data-bs-target="#home-tab-pane"
            type="button" role="tab" aria-controls="home-tab-pane"
            aria-selected="true">
      Home
    </button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="profile-tab"
            data-bs-toggle="tab" data-bs-target="#profile-tab-pane"
            type="button" role="tab" aria-controls="profile-tab-pane"
            aria-selected="false">
      Profile
    </button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="contact-tab"
            data-bs-toggle="tab" data-bs-target="#contact-tab-pane"
            type="button" role="tab" aria-controls="contact-tab-pane"
            aria-selected="false">
      Contact
    </button>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active p-3 border border-top-0"
       id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab">
    This is the Home tab content.
  </div>
  <div className="tab-pane fade p-3 border border-top-0"
       id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab">
    This is the Profile tab content.
  </div>
  <div className="tab-pane fade p-3 border border-top-0"
       id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab">
    This is the Contact tab content.
  </div>
</div>

{/* 56 – Pills */}
<h4 className="mt-5">Pills Navigation</h4>
<ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="pills-home-tab"
            data-bs-toggle="pill" data-bs-target="#pills-home"
            type="button" role="tab" aria-controls="pills-home"
            aria-selected="true">Home</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-profile-tab"
            data-bs-toggle="pill" data-bs-target="#pills-profile"
            type="button" role="tab" aria-controls="pills-profile"
            aria-selected="false">Profile</button>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active p-3 border rounded"
       id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
    Pills home content.
  </div>
  <div className="tab-pane fade p-3 border rounded"
       id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
    Pills profile content.
  </div>
</div>

{/* 57 – Cards */}
<h4 className="mt-5">Bootstrap Cards</h4>
<div className="card" style={{ width: "18rem" }}>
  <img src="https://picsum.photos/300/200" className="card-img-top" alt="Sample"/>
  <div className="card-body">
    <h5 className="card-title">Sample Card</h5>
    <p className="card-text">
      This is a simple card example with Bootstrap styling.
    </p>
    <a href="#" className="btn btn-primary">Learn More</a>
  </div>
</div>

{/* 58 – Accordion */}
<h2 className="mt-5">Bootstrap Accordion</h2>
<div className="accordion" id="exampleAccordion">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        Accordion Item #1
      </button>
    </h2>
    <div
      id="collapseOne"
      className="accordion-collapse collapse show"
      aria-labelledby="headingOne"
      data-bs-parent="#exampleAccordion"
    >
      <div className="accordion-body">
        This is the first accordion item — you can put any HTML content here.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
      >
        Accordion Item #2
      </button>
    </h2>
    <div
      id="collapseTwo"
      className="accordion-collapse collapse"
      aria-labelledby="headingTwo"
      data-bs-parent="#exampleAccordion"
    >
      <div className="accordion-body">
        This is the second accordion item — collapsed by default.
      </div>
    </div>
  </div>
</div>

{/* 59 – Modal */}
<h2 className="mt-5">Bootstrap Modal</h2>
<button
  type="button"
  className="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#exampleModal"
>
  Launch Demo Modal
</button>

<div
  className="modal fade"
  id="exampleModal"
  tabIndex={-1}
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal Title</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body">
        This is a sample Bootstrap modal.
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button type="button" className="btn btn-primary">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>

{/* 60 – Alerts */}
<h2 className="mt-5">Bootstrap Alerts</h2>
<div className="alert alert-success" role="alert">
  ✅ Operation successful — everything looks good!
</div>
<div className="alert alert-danger" role="alert">
  ⚠️ Error: Something went wrong, please try again.
</div>
<div className="alert alert-warning" role="alert">
  ⚡ Warning: Check your form inputs.
</div>
<div className="alert alert-info" role="alert">
  💡 Info: Remember to save your changes.
</div>




      </div>
    );
  }
  