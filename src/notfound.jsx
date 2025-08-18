import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className='pt-28 px-6 min-h-[60vh] flex flex-col items-center justify-center text-center'>
      <h1 className='text-4xl md:text-6xl font-bold text-gray-900'>404</h1>
      <p className='mt-3 text-gray-600'>The page you’re looking for doesn’t exist.</p>
      <Link to='/' className='mt-6 inline-block px-6 py-3 rounded-md bg-blue-500 text-white hover:bg-blue-400'>Go back home</Link>
    </section>
  )
}

export default NotFound

