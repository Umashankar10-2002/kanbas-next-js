// app/Kambaz/Courses/[id]/Inbox/page.tsx
export default function Inbox() {
    return (
      <div>
        <h2>Course Inbox</h2>
        <p>This is where course messages will be displayed.</p>
  
        <ul>
          <li><strong>Professor:</strong> Welcome to the course!</li>
          <li><strong>TA:</strong> Don’t forget Lab 1 is due Friday.</li>
          <li><strong>Student:</strong> Can someone share notes for Lecture 2?</li>
        </ul>
  
        <p><a href="/Kambaz/Courses/1">Back to Course</a></p>
      </div>
    );
  }
  