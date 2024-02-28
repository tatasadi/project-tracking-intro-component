import Header from "./components/header"
import Attribution from "./components/attribution"
import Image from "next/image"
import illustrationDevices from "@/public/illustration-devices.svg"

export default function Home() {
  return (
    <>
      <div className="absolute right-0 top-0 z-0 h-[26.6875rem] w-1/2 rounded-bl-[3.75rem] bg-light-grayish-blue lg:w-[44rem]"></div>
      <Header />
      <main className="relative z-10 mb-10 mt-[4.25rem] grid grid-cols-1 place-items-center gap-y-[5.63rem] overflow-hidden md:grid-cols-2 xl:grid-cols-[1fr_43.25rem]">
        <Image
          src={illustrationDevices}
          alt="Illustration of devices"
          className="ml-8 h-60 object-cover object-left md:col-start-2 md:h-[20rem] lg:ml-0 lg:mt-[2.95rem] lg:h-[29rem]"
        />
        <div className="mx-8 w-full max-w-[40rem] place-content-start place-self-start pr-16 md:row-start-1 lg:pl-[8.30rem] lg:pr-0 lg:pt-[5.8rem]">
          <div className="flex gap-[0.94rem]">
            <p className="justify-center rounded-full bg-very-dark-blue px-[0.65rem] py-[0.12rem] text-center text-[0.9375rem] font-bold uppercase tracking-[0.0625rem] text-white">
              New
            </p>
            <p className="text-[0.9375rem] tracking-[0.3125rem] opacity-50">
              MONOGRAPH DASHBOARD
            </p>
          </div>
          <h1 className="mt-5 text-[2.5rem] font-bold uppercase leading-10 lg:text-[4rem] lg:leading-[4rem]">
            Powerful insights into your team
          </h1>
          <p className="mt-4 max-w-[16.625rem] text-lg leading-[1.625rem] opacity-75 lg:mt-[1.75rem] lg:tracking-[0.1rem]">
            Project planning and time tracking for agile teams
          </p>
          <div className="mt-[1.69rem] flex items-center gap-5 lg:mt-16 lg:gap-6">
            <button className="rounded-[0.3125rem] bg-red px-6 py-3 text-sm font-bold uppercase tracking-[0.05831rem] text-white lg:px-8 lg:text-base lg:tracking-[0.06669rem]">
              Schedule a Demo
            </button>
            <p className="text-sm uppercase tracking-[0.15625rem] opacity-50 lg:text-[0.9375rem] lg:tracking-[0.3125rem]">
              To see a preview
            </p>
          </div>
        </div>
      </main>
      <Attribution />
    </>
  )
}
