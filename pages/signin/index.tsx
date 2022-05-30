import React, { useState } from "react";
import { Layout } from "../../src/components/layout/Layout";
import Image from "next/image";
import styles from "./signin.module.css";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { Loader } from "../../src/components/loader/Loader";
const cookieCutter = require("cookie-cutter");
import { SIGN_IN } from "../../graphql/client/mutations";
const Signin = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginMutation, { data, loading }] = useMutation(
    SIGN_IN(username, password)
  );

  const handleLogin = async (e: any) => {
    e.preventDefault();
    loginMutation()
      .then((res) => {
        window.localStorage.setItem("token", res.data.login.token);
        // cookieCutter.set("token", res.data.login.token);
        router.push("/");
      })
      .catch((e) => console.log(e));
  };

  return (
    <Layout>
      <div className="md:w-1/2 md:flex md:flex-wrap md:w-full items-center">
        <div className="img-wrapper  md:w-1/2 h-full ">
          <Image
            src="/images/signinpic.png"
            width={450}
            height={450}
            objectFit="contain"
            className={styles.image}
          />
        </div>
        <div className=" md:w-1/2 h-full pl-7 pr-7">
          <h1 className="text-3xl font-black text-indigo-600 mb-4">Sign In</h1>
          <form className=" space-y-4" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm ">
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

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
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
                onClick={handleLogin}
              >
                {loading ? <Loader /> : "Sign In"}
              </button>
            </div>
            <div className="text-sm">
              <p className="text-center">
                Don&apos;t have an account?{" "}
                <a
                  href="/signup"
                  className="font-medium text-indigo-600 hover:text-indigo-700"
                >
                  Sign Up here
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Signin;
