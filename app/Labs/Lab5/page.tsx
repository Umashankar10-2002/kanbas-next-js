// app/Labs/Lab5/page.tsx
import EnvironmentVariables from "./EnvironmentVariables";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
import HttpClient from "./HttpClient";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";


const REMOTE_SERVER = "http://localhost:4000";

export default function Lab5() {
  return (
    <div id="wd-lab5" className="container mt-4">
      <h2>Lab 5</h2>

      <div className="list-group mb-3">
        <a
          href={`${REMOTE_SERVER}/lab5/welcome`}
          className="list-group-item"
        >
          Welcome
        </a>
      </div>

      <EnvironmentVariables />
      <hr />

      <PathParameters />
      <hr />

      <QueryParameters />
      <hr />

      <WorkingWithObjects />
      <hr />

      <WorkingWithArrays />
      <hr />

      <HttpClient />
      <hr />

      <WorkingWithObjectsAsynchronously />
      <hr />

      <WorkingWithArraysAsynchronously />
    </div>
  );
}
