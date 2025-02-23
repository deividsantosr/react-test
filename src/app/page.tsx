"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import useCharacters from "./hooks/useCharacters";

export default function Home() {
  const data = useCharacters();

  return (
    <div className="bg-white py-24 sm:py-32">

      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>
          <div className="relative" data-twe-input-wrapper-init id="basic">
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput1" />
            <label
              htmlFor="exampleFormControlInput1"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[80%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-focused]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-focused]:scale-[0.8] peer-data-[twe-input-state-active]:scale-[0.8] peer-data-[twe-input-focused]:text-primary motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">Example label
            </label>
          </div>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-3">
          {data?.characters.map((item) => (
            <li key={item.id}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={item.images[0]} className="size-16 rounded-full" />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{item.name}</h3>
                  <p className="text-sm/6 font-semibold text-indigo-600">{item.name}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
