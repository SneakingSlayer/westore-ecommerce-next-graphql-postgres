import React, { useState } from "react";
import { Layout } from "../../src/components/layout/Layout";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { Loader } from "../../src/components/loader/Loader";
import { SIGN_UP } from "../../graphql/client/mutations";
import Link from "next/link";
const Signup = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<any>({ status: false, message: "" });

  const [registerMutation, { data, loading }] = useMutation(
    SIGN_UP(email, lastname, firstname, username, password)
  );

  const handleRegister = (e: any) => {
    e.preventDefault();
    setError({ status: false, message: "" });
    setEmail("");
    setUsername("");
    setPassword("");
    setFirstname("");
    setLastname("");
    registerMutation()
      .then((res) => {
        router.push("/signin");
        setEmail("");
        setUsername("");
        setPassword("");
        setFirstname("");
        setLastname("");
      })
      .catch((e) => setError({ status: true, message: e.message }));
  };

  return (
    <Layout>
      <div className="md:w-full md:flex md:flex-wrap md:w-full items-center md:justify-center">
        <div className=" md:w-1/2 h-full pl-7 pr-7">
          <h1 className="text-3xl font-black text-indigo-600 mb-4">Sign In</h1>
          {error.status ? (
            <p className="text-red-600 text-sm">{error.message}</p>
          ) : null}
          <form className=" space-y-4" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm ">
              <div className="mb-3 flex space-x-3 w-full">
                <div className="w-full">
                  <label htmlFor="first-name" className="sr-only">
                    First name
                  </label>
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="first-name"
                    required
                    className="w-full  p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 focus:outline-none"
                    placeholder="First name"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="last-name" className="sr-only">
                    Last name
                  </label>
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="last-name"
                    required
                    className="w-full  p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 focus:outline-none"
                    placeholder="Last name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="w-full  p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 focus:outline-none"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full  p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 focus:outline-none"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="w-full  p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 focus:outline-none"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading ? true : false}
                className={
                  loading
                    ? "text-center inline-flex  justify-center bg-indigo-400 text-white font-bold w-full p-4 rounded-xl"
                    : "text-center inline-flex  justify-center bg-indigo-600 text-white font-bold w-full p-4 rounded-xl hover:bg-indigo-700"
                }
                onClick={handleRegister}
              >
                {loading ? <Loader /> : "Sign Up"}
              </button>
            </div>
            <div className="text-sm">
              <p className="text-center">
                Already have an account?{" "}
                <Link href="/signin">
                  {" "}
                  <a className="font-medium text-indigo-600 hover:text-indigo-700">
                    Sign In here
                  </a>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default Signup;
