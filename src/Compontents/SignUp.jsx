import axios from "axios";
import { useState } from "react";

const SignUp = () => {
  const [values, setValues] = useState({
    fullname: "",
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
  
    const formData = {
      fullname: values.fullname,
      username: values.username,
      password: values.password
    };
  
    try {
      const response = await axios.post("http://localhost/react/PhpReact/PHP/signup.php", formData);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="w-full h-full flex items-center justify-center text-xl font-bold">
      <form
        className="w-2/3 h-2/3 flex items-center justify-center flex-col"
        onSubmit={handleFormSubmit}
      >
        <div className="flex flex-col gap-y-1 mb-3 w-full">
          <label htmlFor="fullname">Fullname</label>
          <input
            type="text"
            name="fullname"
            onChange={handleOnChange}
            values={values.fullname}
            placeholder="Fullname"
            className=" w-full text-base font-normal border pl-3 h-8 py-1 rounded-xl "
          />
        </div>
        <div className="flex flex-col gap-y-1 mb-3 w-full">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            onChange={handleOnChange}
            values={values.username}
            placeholder="Username"
            className=" w-full text-base font-normal border pl-3 h-8 py-1 rounded-xl "
          />
        </div>
        <div className="flex flex-col gap-y-1 mb-3 w-full">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            onChange={handleOnChange}
            values={values.password}
            placeholder="Password"
            className=" w-full text-base font-normal border pl-3 h-8 py-1 rounded-xl "
          />
        </div>
        <button
          className="btn block bg-blue-400 rounded-xl text-white py-2 px-5 active:scale-95 transition-all"
          type="submit"
        >
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUp;
