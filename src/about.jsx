

const About = () => {
  return (
    <section className="container mx-auto py-12 px-6 mt-20">
        <div className="max-w-3xl mx-auto">

            <h1 className="text-4xl font-bold text-gray-800 mb-6">About Me</h1>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 px-4 mb-6">
                        <div className="bg-gray-100 rounded-lg p-4 shadow shadow-md">
                            <img src="https://media.istockphoto.com/id/1407921625/photo/happy-african-american-male-driver-driving-a-car-and-looking-through-the-car-window.jpg?b=1&s=612x612&w=0&k=20&c=PmDnFQzNnTYfeAWtLIMdQSffqwLqO9ItgfHV1x8OVWo=" alt="Team Member 1" className="w-24 h-24 rounded-full mx-auto mb-2" />
                            <h3 className="text-lg font-medium text-gray-800">Mamadou J. Kromah</h3>
                            <p className="text-gray-600">Freelance Designer & Developer</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                    My journey as a designer and React developer is a continuous process of learning and growth.  I am constantly exploring new design trends, experimenting with the latest React features, and seeking inspiration from the world around me.  I believe that the digital landscape is constantly evolving, and I am committed to staying at the forefront of this evolution, pushing the boundaries of what&apos;s possible and creating innovative solutions that make a difference.  I am driven by a passion to create, to innovate, and to inspire.  I am a designer and a React developer, and I am ready to weave my own thread into the ever-evolving tapestry of the digital world.
                    </p>

                    <div className="mt-8">
                        <a href='https://wa.me/231881983209' target="_blank" rel="noopener noreferrer" className="inline-block w-32 h-10 text-center border rounded-md text-blue-500 text-lg bg-white align-middle py-2 hover:bg-blue-500 hover:text-white">Let&apos;s Talk</a>
                    </div>

                </div>
            </div>
        </section>
  )
}

export default About