import { SiReact, SiNextdotjs, SiTailwindcss } from 'react-icons/si'

const Home = () => {
  return (
    <section className=''>
      <main className='w-full h-[80vh] text-center flex flex-col gap-12 justify-around items-center mt-32 mb-20 gap-x-32 md:flex-row md:text-left md:px-10'>
        <div className='shrink'>
          <h1 className='text-balance text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900'>
            <span className='gradient-underline glow-on-hover'>Hello</span>, I&apos;m <span className='bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent glow-on-hover'>Jam.</span>
            <br /> a <span className='gradient-underline glow-on-hover'>Full-Stack Developer</span> (<span className='bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent glow-on-hover'>React & Next.js</span>)
            <br /> based in <span className=' text-blue-600 gradient-underline'>Monrovia</span>
          </h1>
          <p className='py-8 px-4 text-lg font-medium text-gray-500 sm:text-xl/8'>
            I build modern web apps with React and Next.js — rapid prototyping with Vite, production-grade performance, SEO, and accessibility.
          </p>
          <div className='flex items-center justify-center md:justify-start gap-6 text-gray-600'>
            <span className='inline-flex items-center gap-2'><SiReact className='text-blue-500' /> React</span>
            <span className='inline-flex items-center gap-2'><SiNextdotjs className='text-gray-800' /> Next.js</span>
            <span className='inline-flex items-center gap-2'><SiTailwindcss className='text-cyan-500' /> Tailwind CSS</span>
          </div>
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-vector/human-resources-concept-illustration_114360-27842.jpg?t=st=1735081185~exp=1735084785~hmac=6acd7ba83519a8115248f4196ccb39c7205631620b97cb7d1a638524028a0445&w=740"
            alt="Creative freelancer working illustration"
            loading="lazy"
            decoding="async"
            className='w-52'
          />
        </div>
      </main>

      <section className="w-full bg-black text-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center text-xl font-bold">
            <div className="py-2 inline-flex items-center justify-center gap-2"><SiReact className='text-blue-400' /> React Development</div>
            <div className="py-2 inline-flex items-center justify-center gap-2"><SiNextdotjs className='text-white' /> Next.js Applications</div>
            <div className="py-2 inline-flex items-center justify-center gap-2">⚡ Performance & SEO</div>
            <div className="py-2 inline-flex items-center justify-center gap-2"><SiTailwindcss className='text-cyan-400' /> Tailwind CSS</div>
          </div>
        </div>
      </section>

      <section className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
          <div className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}>
          </div>
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-blue-500">Services</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">Choose the right service for your business</p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Please be sure to make an enquiry, because prices depend on project complexity.</p>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
          <div className="rounded-3xl rounded-t-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-tr-none lg:rounded-bl-3xl">
            <h3 id="tier-hobby" className="text-base/7 font-semibold text-blue-500">Design</h3>
            <p className="mt-6 text-base/7 text-gray-500">Transform your vision into captivating visuals – let my design skills elevate your brand and message.</p>
            <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-500 sm:mt-10">
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-blue-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                Branding
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-blue-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                Product Design
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-blue-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                Packaging Design
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-blue-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                Graphic Design
              </li>
            </ul>
            <a href='https://wa.me/231881983209?text=Hi%20Jam%2C%20I%27m%20interested%20in%20a%20React%2FNext.js%20project.%20Can%20we%20discuss%20requirements%20and%20timeline%3F' target="_blank" rel="noopener noreferrer" aria-describedby="tier-hobby" className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-blue-500 ring-1 ring-blue-200 ring-inset hover:ring-blue-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 sm:mt-10">Book an Appointment</a>
          </div>
          <div className="relative rounded-3xl bg-gray-900 p-8 ring-1 shadow-2xl ring-gray-900/10 sm:p-10">
            <h3 id="tier-enterprise" className="text-base/7 font-semibold text-blue-400">React & Next.js Development</h3>
            <p className="mt-6 text-base/7 text-gray-300">High-quality React frontends and full-stack Next.js apps with excellent performance, SEO, and DX.</p>
            <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-300 sm:mt-10">
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-blue-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                UI Design & Implementation (React)
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-blue-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                Next.js App Routing & Data Fetching
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-blue-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                Frontend Development (React + Tailwind)
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-blue-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                API Routes & Integrations (Next.js)
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-blue-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                React Development
              </li>
            </ul>
            <a href='https://wa.me/231881983209?text=Hi%20Jam%2C%20I%27d%20like%20to%20build%20a%20Next.js%20app%20with%20React%20UI.%20Let%E2%80%99s%20chat%20about%20scope%2C%20budget%2C%20and%20timeline.' target="_blank" rel="noopener noreferrer" aria-describedby="tier-enterprise" className="mt-8 block rounded-md bg-blue-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 sm:mt-10">Book an Appointment</a>
          </div>
        </div>
      </section>

      <section className='flex flex-row justify-around items-center bg-blue-500 text-white w-full h-auto py-8 max-md:flex-col text-center text-sm gap-4'>
        <div className='px-4'>
          <h2 className='text-2xl font-semibold mb-2'>Ready to Dive in?</h2>
          <p className='text-lg'>Book an appointment now!</p>
        </div>
        <div>
          <a
            href='https://wa.me/231881983209?text=Hi%20Jam%2C%20I%27m%20looking%20for%20React%20%2B%20Next.js%20help%20on%20a%20project.'
            target="_blank"
            rel="noopener noreferrer"
            className='inline-block px-6 py-3 border rounded-md text-blue-500 text-lg bg-white hover:bg-blue-500 hover:text-white transition-colors duration-300'
          >
            Let&apos;s Talk
          </a>
        </div>
      </section>
    </section>
  );
};

export default Home;