import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const jobPositions = [
  {
    timeline: 'May 2024 — Present',
    currentPosition: 'Frontend Developer',
    place: 'Nhi Dong 315',
    previousPositions: [''],
    description:
      'A healthcare company specializing in providing comprehensive medical solutions for pediatric care. The company focuses on enhancing clinic operations, managing patient information, and streamlining supplier and product management processes through innovative web applications and technology-driven approaches.',
    skills: [
      'JavaScript',
      'CSS',
      'Tailwind CSS',
      'MUI',
      'Ant Design',
      'HTML',
      'React',
      'Redux',
      'Oracle',
      'Asp.net',
      'C#',
    ],
  },
  {
    timeline: 'Nov 2022 — Feb 2024',
    currentPosition: 'Frontend Developer',
    place: 'Titan technology Corporation',
    previousPositions: [''],
    description:
      'A software company specializing in large-scale projects for diverse industries. Focused on building efficient document management systems, the company delivers solutions for government accounting, quality management, and CRM. Leveraging modern technologies like ReactJS, Semantic UI, and Azure, Titan emphasizes performance optimization, real-time updates, and secure data management.',
    skills: [
      'JavaScript',
      'CSS',
      'Styled Components',
      'Semantic UI',
      'HTML',
      'React Toolkit',
      'Redux',
      'MS SQL Server',
      'Asp.net',
      'C#',
      'Azure',
    ],
  },
  {
    timeline: 'May 2022 — Oct 2022',
    currentPosition: 'Frontend Developer',
    place: 'Tekmedi',
    previousPositions: [''],
    description:
      'A technology company focused on developing innovative web solutions for healthcare management. Tekmedi builds and maintains applications that streamline drug management, supplier contracts, and debt tracking for hospitals. The company prioritizes user-friendly interfaces and efficient data management, utilizing technologies like ReactJS, Ant Design, and ASP .NET Core to enhance hospital operations.',
    skills: [
      'JavaScript',
      'CSS',
      'Ant Design',
      'HTML',
      'React',
      'Redux',
      'MS SQL Server',
      'Asp.net',
      'C#',
    ],
  },
  {
    timeline: 'Jan 2022 — May 2022',
    currentPosition: 'Intern',
    place: 'Fintech DRACO coporation',
    previousPositions: [''],
    description:
      'A fintech company specializing in B2B eCommerce solutions. DRACO focuses on building and maintaining platforms for business transactions, including contract management and CRM features. The company leverages open-source technologies like OroCommerce and WordPress to deliver scalable, efficient solutions, supporting companies with their digital transformation and eCommerce needs.',
    skills: ['WordPress', 'Oro', 'Linux'],
  },
]

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:pt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-base text-slate-400 whitespace-nowrap">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-foreground font-bold">
                {job.currentPosition} • {job.place}
              </p>
              {job.previousPositions.map((position, index) => (
                <p key={index} className="text-slate-400 text-sm font-bold">
                  {position}
                </p>
              ))}
              <CardDescription className="py-3 text-muted-foreground">
                {job.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
    </section>
  )
}
