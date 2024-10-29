import { useState } from "react";

const SignIn = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <div className="w-full h-full flex items-center justify-center text-xl font-bold">
      <form
        className="w-2/3 h-2/3 flex items-center justify-center flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(values);
        }}
      >
        <div className="flex flex-col gap-y-1 mb-3">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            onChange={handleOnChange}
            values={values.username}
            placeholder="Password"
            className="input w-full text-base font-normal border"
          />
        </div>
        <div className="flex flex-col gap-y-1 mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            onChange={handleOnChange}
            values={values.password}
            placeholder="Password"
            className="input w-full text-base font-normal border"
          />
        </div>
        <button
          className="btn block bg-blue-400 rounded-xl text-white py-2 px-5"
          type="submit"
        >
          LogIn
        </button>
      </form>
    </div>
  );
};

export default SignIn;
