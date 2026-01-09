import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MoveUpRight } from 'lucide-react'

const jobProjects = [
  {
    imagePath: '/organick.png',
    title: 'Organick Shop',
    description: 'A shop for sell vegetable and fruit',
    skills: [
      'HTML',
      'CSS(SCSS)',
      'Typescript',
      'NextJS',
      'ExpressJS',
      'Cloudinary',
      'MongoDB',
      'Vercel',
      'Figma',
      'Stripe',
    ],
    link: 'https://organick-fullstack.vercel.app',
    gitHubLink: 'https://github.com/tinnhat/organick-fullstack',
  },
  {
    imagePath: '/todo.png',
    title: 'Todo App',
    description: 'Pet project to learning new drag and drop libraries',
    skills: ['ReactJS', 'Typescript', 'MUI', 'HTML/CSS', 'DnD kit', 'Vercel'],
    link: 'https://todo-list-two-rho-34.vercel.app/',
    gitHubLink: 'https://github.com/tinnhat/todo-list',
  },
  {
    imagePath: '/movie.png',
    title: 'NT movies',
    description: 'Pet project learning using open-source API',
    skills: [
      'ReactJS',
      'HTML',
      'CSS(SCSS)',
      'JavaScript',
      'Vercel',
      'Themoviedb API',
    ],
    link: 'https://nt-movies.vercel.app',
    gitHubLink: 'https://github.com/tinnhat/nt-movies',
  },
  {
    imagePath: '/typer.png',
    title: 'Speed Typer game',
    description: 'A simple game to practice typing speed',
    skills: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://tinnhat.github.io/speed-typer/',
    gitHubLink: 'https://github.com/tinnhat/speed-typer',
  },
  {
    imagePath: '/airbnb.png',
    title: 'Airbnb - Landing Page',
    description: 'Landing page for Airbnb clone to practice HTML and CSS',
    skills: ['HTML', 'CSS', 'JavaScript', 'BEM'],
    link: 'https://tinnhat.github.io/airbnb/',
    gitHubLink: 'https://github.com/tinnhat/airbnb',
  },
  {
    imagePath: '/portfolio.png',
    title: 'Portfolio',
    description:
      "Portfolio website to show my skills and projects based on Brittany Chiang's website and Alexander Meikopoulous",
    skills: ['NextJS', 'Shadcn UI', 'Typescript', 'Vercel', 'TailwindCSS'],
    link: 'https://tinnhat.github.io/airbnb/',
    gitHubLink: 'https://github.com/tinnhat/airbnb',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <>
        {jobProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={1080}
                  priority
                  className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <p className="text-primary font-bold">
                  {project.title}{' '}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                <CardDescription className="py-1 text-muted-foreground text-sm hover:text-primary">
                  {project.gitHubLink}
                </CardDescription>
                <CardDescription className="py-2 text-muted-foreground">
                  {project.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </a>
        ))}
      </>
    </section>
  )
}
