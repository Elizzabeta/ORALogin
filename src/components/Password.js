import React from 'react';

export const Password = (props) => {
  return (
    <p>
        <input
          onChange={props.handleChange}
          value={props.password}
          name="password"
          type="password"
          placeholder="Password"
          />
          <span onClick={props.changeInputType} className="reveal-pass">
                <i className={"far fas " + (props.type === "password" ? "fa-eye-slash" : "fa-eye")}></i>
            </span>
    </p>
  )
}

export const Email = (props) => {
  return (
    <p>
      <input
        onChange={props.handleChange}
        value={props.email}
        name="email"
        type="text"
        placeholder="E-Mail" />
    </p>
  )
}