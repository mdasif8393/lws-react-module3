/* eslint-disable no-constant-condition */

import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Form() {
  // visual states: empty, typing, submitting, success, error

  // mandatory state
  const [answer, setAnswer] = useState("");
  if (status === "success")
    return (
      <>
        <p>Status: {status}</p>
        <h1>Thats right!</h1>
        <hr />
      </>
    );
  return (
    <>
      <p>Status: {status}</p>
      <h2>City quiz</h2>
      <p>What city is located on two continents?</p>
      <form>
        <textarea></textarea>
        <br />
        <button>Submit</button>
        <p className="Error">Loading...</p>
        <p className="Error">There was an error</p>
      </form>
      <hr />
    </>
  );
}
