import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactMe({ theme }) {
  const [username, setUsername] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    if (
      username !== "" &&
      username !== undefined &&
      subject !== "" &&
      subject !== undefined &&
      message !== "" &&
      message !== undefined
    ) {
      emailjs
        .sendForm(
          "service_wcibc8v",
          "template_z3dq7ol",
          e.target,
          "user_plRigzVOxi0cjnpNAeNjI"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setUsername("");
      setSubject("");
      setMessage("");
      window.alert("Sent Successfully");
    } else {
      window.alert("Empty Fields!");
    }
  }

  return (
    <div
      className="ContactMe"
      style={{ backgroundColor: theme === "light" ? "#eee" : "#555" }}
    >
      <h4 style={{ color: theme === "light" ? "black" : "white" }}>
        Send me an email:{" "}
      </h4>
      <br></br>
      <form onSubmit={sendEmail}>
        <div>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="name"
            style={{
              backgroundColor: theme === "light" ? "white" : "transparent",
              color: theme === "light" ? "black" : "white",
            }}
            type="text"
            className="username"
            placeholder="Enter your name"
          />

          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            name="subject"
            style={{
              backgroundColor: theme === "light" ? "white" : "transparent",
              color: theme === "light" ? "black" : "white",
            }}
            type="text"
            className="subject"
            placeholder="Enter your subject"
          />
        </div>
        <div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            style={{
              backgroundColor: theme === "light" ? "white" : "transparent",
              color: theme === "light" ? "black" : "white",
            }}
            className="message"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div className="alignSendBtn">
          <input type="submit" className="SendBtn" value="Send" />
        </div>
      </form>
    </div>
  );
}
