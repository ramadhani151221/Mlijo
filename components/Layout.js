import Head from "next/head";
import Link from "next/link";
import React from "react";
import Script from "next/script";

function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + " - Mlijo" : "Mlijo"}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Script src="https://cdn.lordicon.com/pzdvqjsp.js" />

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 justify-between shadow-md px-16 py-2">
            <Link href="/">
              <a className="text-lg font-bold">mlijo</a>
            </Link>

            <div>
              <Link href="/keranjang">
                <a className="mx-5">
                  <lord-icon
                    src="https://cdn.lordicon.com/cllunfud.json"
                    trigger="hover"
                  ></lord-icon>
                </a>
              </Link>
              <Link href="/login">
                <lord-icon
                  src="https://cdn.lordicon.com/dqxvvqzi.json"
                  trigger="hover"
                ></lord-icon>
              </Link>
            </div>
          </nav>
        </header>

        <main className="container m-auto mt-4 px-16">{children}</main>

        <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
          <span className="text-sm text-gray-500 px-16 sm:text-center">
            © 2022{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 px-16 text-sm text-gray-500 sm:mt-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default Layout;
