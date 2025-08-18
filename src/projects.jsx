import { useMemo, useState } from 'react'
import { projects as PROJECTS } from './data/projects'
import { SiReact, SiNextdotjs } from 'react-icons/si'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('')

  const availableFilters = useMemo(() => {
    const tokenSet = new Set()
    for (const project of PROJECTS) {
      for (const rawTag of project.tags) {
        const parts = String(rawTag).split(/[+&/]/).map(p => p.trim()).filter(Boolean)
        for (const part of (parts.length ? parts : [rawTag])) {
          const label = String(part).replace(/\s+/g, ' ').trim()
          if (label) tokenSet.add(label)
        }
      }
    }
    return Array.from(tokenSet).sort((a, b) => a.localeCompare(b))
  }, [])

  const filteredProjects = useMemo(() => {
    if (!activeFilter) return PROJECTS
    const needle = activeFilter.toLowerCase()
    return PROJECTS.filter(p => p.tags.some(t => String(t).toLowerCase().includes(needle)))
  }, [activeFilter])

  return (
    <section className='pt-28 pb-16 px-6 container mx-auto'>
      <header className='text-center mb-8'>
        <h1 className='text-3xl md:text-5xl font-bold text-gray-900 gradient-underline inline-block'>Projects</h1>
        <p className='mt-3 text-gray-600'>Selected work across design and development.</p>
      </header>

      <div className='mb-6 flex flex-wrap gap-2 justify-center'>
        <button
          type='button'
          onClick={() => setActiveFilter('')}
          className={`text-xs px-3 py-1.5 rounded-full border ${activeFilter === '' ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'}`}
          title='Show all projects'
        >
          All
        </button>
        {availableFilters.map(tag => (
          <button
            type='button'
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full border ${activeFilter === tag ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'}`}
            title={`Filter by ${tag}`}
            aria-pressed={activeFilter === tag}
          >
            {tag.toLowerCase().includes('react') && <SiReact className='h-3 w-3 text-blue-500' />}
            {tag.toLowerCase().includes('next') && <SiNextdotjs className='h-3 w-3 text-gray-800' />}
            {tag}
          </button>
        ))}
      </div>

      <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {filteredProjects.map(project => (
          <article key={project.id} className='group rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow'>
            <a href={project.liveUrl || '#'} target={project.liveUrl ? '_blank' : undefined} rel={project.liveUrl ? 'noopener noreferrer' : undefined} aria-label={`Open ${project.title} website`}>
              <div className='aspect-[4/3] overflow-hidden bg-gray-100'>
                {project.image ? (
                  <img src={project.image} alt={project.title} loading='lazy' decoding='async' className='w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300' />
                ) : (
                  <div className='w-full h-full flex items-center justify-center text-gray-400 text-sm'>No image</div>
                )}
              </div>
            </a>
            <div className='p-4'>
              <h2 className='text-xl font-semibold text-gray-900'>
                {project.liveUrl ? (
                  <a href={project.liveUrl} target='_blank' rel='noopener noreferrer' className='hover:underline'>{project.title}</a>
                ) : (
                  project.title
                )}
              </h2>
              <p className='mt-2 text-gray-600 text-sm'>{project.description}</p>
              <div className='mt-3 flex flex-wrap gap-2'>
                {project.tags.map(tag => (
                  <button
                    type='button'
                    key={tag}
                    onClick={() => setActiveFilter(tag)}
                    className='inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100 hover:border-blue-200'
                    title={`Filter by ${tag}`}
                  >
                    {tag.toLowerCase().includes('react') && <SiReact className='h-3 w-3 text-blue-500' />}
                    {tag.toLowerCase().includes('next') && <SiNextdotjs className='h-3 w-3 text-gray-800' />}
                    {tag}
                  </button>
                ))}
              </div>
              <div className='mt-4 flex gap-3'>
                {project.liveUrl && (
                  <a href={project.liveUrl} target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>View site</a>
                )}
                {project.repoUrl && (
                  <a href={project.repoUrl} target='_blank' rel='noopener noreferrer' className='text-gray-600 hover:underline'>Code</a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects