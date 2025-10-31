export default function Grades() {
    return (
      <div>
        <h2>Grades</h2>
        <table border={1} cellPadding={8} style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Assignment</th>
              <th>Score</th>
              <th>Out of</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A1 - HTML</td>
              <td>95</td>
              <td>100</td>
            </tr>
            <tr>
              <td>A2 - CSS</td>
              <td>88</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Midterm</td>
              <td>90</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Final Project</td>
              <td>92</td>
              <td>100</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  