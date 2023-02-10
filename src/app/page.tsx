"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useSupabase } from "@/components/supabase-provider";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
  let nama: string | undefined;
  const { supabase } = useSupabase();
  const [user, setUser] = useState<any>();
  async function fetchUser() {
    try {
      const { data } = await supabase.auth.getUser();
      setUser(data);
      console.log(data.user);
      nama = data.user?.email;
    } catch {}
  }

  useEffect(() => {
    fetchUser();
  }, []);
  //i am here
  return (
    <main>
      <NavBar />

      <div className="h-auto min-h-screen p-24">
        {user?.user == null ? beforeLogin() : afterLogin()}
        <div className="items-top flex flex-row justify-between">
          <h1 className="mb-8 text-2xl font-bold">Popular Market</h1>
          <a
            href="/market"
            className="text-xl"
          >
            See All
          </a>
        </div>
        <div className="flex scroll-m-10 flex-row items-start justify-start gap-8 overflow-auto whitespace-nowrap">
          <div className="aspect-video h-64 bg-black"></div>
          <div className="aspect-video h-64 bg-black"></div>
          <div className="aspect-video h-64 bg-black"></div>
          <div className="aspect-video h-64 bg-black"></div>
          <div className="aspect-video h-64 bg-black"></div>
          <div className="aspect-video h-64 bg-black"></div>
          <div className="aspect-video h-64 bg-black"></div>
        </div>
        <div className="flex h-auto w-full flex-col py-24 lg:flex-row">
          {/*Kategori*/}
          <div className="flex h-[40rem] w-full flex-col items-center justify-between lg:w-1/4">
            <div className="items-top flex w-full flex-row justify-between">
              <h1 className="mb-8 text-2xl font-bold">Categories</h1>
              <a
                href="/categories"
                className="text-xl"
              >
                See All
              </a>
            </div>
            <div className="h-full w-full rounded-lg bg-gray-400"></div>
          </div>

          {/*Edukasi*/}
          <div className="flex h-[40rem] w-full flex-col items-center justify-between py-8 px-0 lg:w-1/2 lg:py-0 lg:px-8">
            <div className="items-top flex w-full flex-row justify-between">
              <h1 className="mb-8 text-2xl font-bold">Education</h1>
              <a
                href="/education"
                className="text-xl"
              >
                See All
              </a>
            </div>
            <div className="h-full w-full rounded-lg bg-gray-400"></div>
          </div>

          {/*Promo*/}
          <div className="flex h-[40rem] w-full flex-col items-center justify-between lg:w-1/4">
            <div className="h-full w-full rounded-lg bg-gray-400"></div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

function beforeLogin() {
  return (
    <div className="flex h-screen w-full flex-row justify-center bg-white font-extrabold">
      <div className="flex w-screen flex-row items-center justify-center md:w-1/2">
        <div className="flex flex-col items-start justify-center gap-10">
          <div>
            <h1 className="text-4xl text-[#848643] md:text-6xl lg:text-8xl">
              EcoMatch
            </h1>
            <h2 className="text-lg text-[#9C9C9C] md:text-2xl lg:text-3xl">
              green products stores locator.
            </h2>
          </div>

          <a className="rounded-lg bg-[#FFDF70] text-lg text-black hover:bg-[#e8be23]">
            <div className="flex h-12 w-44 items-center justify-center">
              Register Now
            </div>
          </a>
        </div>
      </div>
      <div className="hidden h-full items-center justify-center md:visible md:flex md:w-1/2">
        <Image
          src="https://raw.githubusercontent.com/Kaliangkrik-Production/eco-match/main/asset/landing.jpeg"
          alt="illustrasi"
          width={1200}
          height={1000}
        />
      </div>
    </div>
  );
}

function afterLogin() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <input
          className="block w-3/4 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          type="search"
          placeholder="Search"
        />
      </div>
      <div className="py-24">
        <div className="flex scroll-m-10 flex-row items-start justify-start gap-8 overflow-auto whitespace-nowrap rounded-lg">
          <div className="h-96 w-full bg-black"></div>
        </div>
      </div>
    </div>
  );
}
