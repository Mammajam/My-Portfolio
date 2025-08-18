import React from 'react'

const PROJECTS = [
  {
    id: 'packaging-brand-refresh',
    title: 'Packaging Brand Refresh',
    description: 'Reimagined product packaging for a consumer brand to improve shelf appeal and consistency.',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155223168f?q=80&w=1200&auto=format&fit=crop',
    tags: ['Branding', 'Packaging', 'Design'],
  },
  {
    id: 'react-marketing-site',
    title: 'React Marketing Site',
    description: 'Responsive, SEO-friendly site for a startup with fast load times.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
    tags: ['React', 'Tailwind', 'Vite'],
  },
  {
    id: 'ecommerce-ui',
    title: 'E‑commerce UI Components',
    description: 'Component library for product listings, carts, and checkout.',
    image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1200&auto=format&fit=crop',
    tags: ['UI', 'Design System', 'Accessibility'],
  },
]

const Projects = () => {
  return (
    <section className='pt-28 px-6 container mx-auto'>
      <header className='text-center mb-8'>
        <h1 className='text-3xl md:text-5xl font-bold text-gray-900'>Projects</h1>
        <p className='mt-3 text-gray-600'>Selected work across design and development.</p>
      </header>

      <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {PROJECTS.map(project => (
          <article key={project.id} className='group rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow'>
            <div className='aspect-[4/3] overflow-hidden bg-gray-100'>
              <img src={project.image} alt={project.title} loading='lazy' decoding='async' className='w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300' />
            </div>
            <div className='p-4'>
              <h2 className='text-xl font-semibold text-gray-900'>{project.title}</h2>
              <p className='mt-2 text-gray-600 text-sm'>{project.description}</p>
              <div className='mt-3 flex flex-wrap gap-2'>
                {project.tags.map(tag => (
                  <span key={tag} className='text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100'>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects