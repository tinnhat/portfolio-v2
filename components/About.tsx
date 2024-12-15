export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
          I am a <span className="text-white">Frontend Developer</span> with 2
          years of experience in web development. I thrive on staying up-to-date
          with the latest technologies and continuously improving my technical
          and soft skills to enhance work performance.
        </p>
        <p className="text-start  text-muted-foreground lg:px-6">
          I love to discover and learn new technology and i have a good command
          of building web application using{' '}
          <span className="text-white">ReactJs</span>
          ,Able to work in a dynamic and ever-changing industry
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          Currently, i am learning about{' '}
          <span className="text-white">NextJS/NestJS</span> to expand my
          knowledge about <span className="text-white">web development</span>{' '}
          and also i am looking forward to new opportunities to become a 
          {' '}<span className="text-white">full-stack</span> developer, focusing on
          optimizing performance and improving user experiences.
        </p>
      </div>
    </section>
  )
}
