import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa"

const InputTodo = (props) => {
  const [title, setTitle] = useState("");

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      props.addTodoProps(title);
      setTitle("");
    } else {
      alert("Please Write Item");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
    <input
      type="text"
      className="input-text"
      placeholder="Add todo..."
      value={title}
      name="title"
      onChange={onChange}
    />
    <button className="input-submit">
      <FaPlusCircle />
    </button>
    </form>
  )

  // const [inputText, setInputText] = useState({
  //   fname: "",
  //   lname: "",
  // });
  // function onChange(e) {
  //   setInputText((prevState) => {
  //     return {
  //       ...prevState,
  //       [e.target.name]: e.target.value,
  //     };
  //   });
  // }
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log("submitted");
  // }
  // return (
  //   <>
  //     <form onSubmit={handleSubmit} className="form-container">
  //       <input
  //         className="input-text"
  //         name="fname"
  //         value={inputText.fname}
  //         placeholder="Add First name"
  //         onChange={onChange}
  //       />
  //       <input
  //         className="input-text"
  //         name="lname"
  //         value={inputText.lname}
  //         placeholder="Add Last name"
  //         onChange={onChange}
  //       />
  //       <button className="input-submit">Submit</button>
  //     </form>
  //     <h2>{inputText.fname}</h2>
  //     <h2>{inputText.lname}</h2>
  //   </>
  // );
};

export default InputTodo;
