import React from 'react'

import Skill from '../components/Skill'
import Employment from '../components/Employment'
import Certification from '../components/Certification'

export default function Index() {
  const employments = [
    {
      title: 'Frontend Developer',
      employer: 'eRevMax Technologies Pvt Ltd',
      start: 'November 2020',
      end: 'Present',
      city: 'Kolkata',
      details: [
        'Developing an internal web based platform which contains other utility applications. Technologies used: Angular 11, Nx, Angular Material',
        'Performing R&D and creating POCs on an alternate tech-stack Next.js-NestJs-Mongo-GraphQL for building a SEO-friendly fast Progressive Web App.',
      ],
    },
    {
      title: 'Angular Developer',
      employer: 'PRM Fincon',
      start: 'April 2020',
      end: 'October 2020',
      city: 'Kolkata',
      details: [
        'Frontend Developer in a team which was building a web based financial product that automates the entire loan approval process for corporates.',
        'Technologies used: Angular 8, Nx, SCSS',
      ],
    },
    {
      title: 'Frontend Developer',
      employer: 'eRevMax Technologies Pvt Ltd',
      start: 'October 2018',
      end: 'March 2020',
      city: 'Kolkata',
      details: [
        'Developed the frontend for Agentx, a web based Travel Itinerary building app, that helps travel agents book hotels, flights, cabs and sight-seeing experiences for their customers.',
        'Technologies used: Angular 8',
      ],
    },
    {
      title: 'Systems Engineer',
      employer: 'Tata Consultancy Services',
      start: 'September 2014',
      end: 'October 2018',
      city: 'Kolkata',
      details: [
        'Got hands dirty on several technologies starting from Mainframe, Perl, VBScript, Java, Spring, ELK stack before finding my love for Modern Web Development.',
        'Developed an web based book search repository for client using Angular 5, Bootstrap and Elasticsearch.',
      ],
    },
  ]
  const educations = [
    {
      title: 'B.Tech',
      employer: 'Netaji Subhash Engineering College',
      start: 'August 2010',
      end: 'June 2014',
      city: 'Kolkata',
      details: ['Computer Science and Engineering', 'GPA: 7.92'],
    },
  ]
  const internships = [
    {
      title: 'Intern',
      employer: 'IXIA Technologies',
      start: 'July 2013',
      end: 'July 2014',
      city: 'Kolkata',
      details: [
        'Learned a bit of Python and Django framework and built a performance management tracker for our internal team.',
      ],
    },
  ]
  const certifications = [
    {
      title: 'Angular - The Complete Guide',
      institution: 'Udemy',
      completion: 'December 2018',
      link: 'https://www.udemy.com/certificate/UC-6PCFDJEK/',
    },
    {
      title: 'JavaScript: Understanding the Weird Parts',
      institution: 'Udemy',
      completion: 'May 2021',
      link: 'https://www.udemy.com/certificate/UC-62cea441-1ecb-4336-b685-700434ccd4bf/',
    },
    {
      title: 'Reactive Angular Course (With RxJs)',
      institution: 'Udemy',
      completion: 'June 2020',
      link: 'https://www.udemy.com/certificate/UC-9b0b8d72-c3c5-4ac4-9c3d-779ad2c6436f/',
    },
    {
      title: 'React - The Complete Guide',
      institution: 'Udemy',
      completion: 'September 2018',
      link: 'https://www.udemy.com/certificate/UC-TV0MCMDJ/',
    },
  ]
  const skills = [
    { id: 'js', name: 'Javascript', level: 'w-3/4' },
    { id: 'ng', name: 'Angular', level: 'w-3/4' },
    { id: 'rct', name: 'React', level: 'w-1/4' },
    { id: 'njs', name: 'Node.js', level: 'w-1/4' },
    { id: 'mdb', name: 'MongoDB', level: 'w-1/4' },
    { id: 'gql', name: 'GraphQL', level: 'w-1/4' },
  ]

  const languages = [
    { id: 'bng', name: 'Bengali', level: 'w-full' },
    { id: 'eng', name: 'English', level: 'w-3/4' },
    { id: 'hin', name: 'Hindi', level: 'w-1/4' },
  ]

  const summary = {
    name: 'Sayantan Dey',
    designation: 'Web Developer',
    primarySkills: ['Javascript', 'Angular', 'Next.js', 'NestJS'],
  }

  return (
    <section className='min-w-screen min-h-screen w-full h-full md:p-8 text-gray-800 dark:text-gray-100'>
      {/* Summary  */}
      <section className='w-full flex flex-col p-8 sm:py-4 sm:flex-row gap-8 items-center bg-primary text-gray-100 md:rounded-t-md'>
        <div className='dp'>
          <img src='/images/me.png' alt='dp' className='rounded-full' />
        </div>
        <div className='details flex-1 flex flex-col items-center sm:items-start'>
          <div className='name text-4xl font-bold flex items-center'>{summary.name}</div>
          <div className='designation pt-4'>{summary.designation}</div>
          <div className='skills pt-4 flex justify-center sm:justify-start flex-wrap gap-2'>
            {summary.primarySkills.map((skill) => (
              <div className='bg-secondary rounded-full px-4 py-1 text-center'>{skill}</div>
            ))}
          </div>
          <div className='links flex items-center pt-4'>
            <a href='http://github.com/Ishanz23' target='_' className='lock'>
              <img src='/icons/github-light.png' alt='github' width='32' height='32' className='rounded-sm inline' />
            </a>
            <a href='https://linkedin.com/in/themasterbuilder23' target='_' className='ml-4 block'>
              <img src='/icons/linkedin.png' alt='linkedin' className='rounded-sm inline' width='32' height='32' />
            </a>
          </div>
          <div className='text-center sm:text-left flex-1 p-4 mt-4 rounded-md bg-secondary'>
            <p>
              I develop web apps using Angular/React, Node.js and MongoDB. Would relish opportunities to contribute in
              backend and devops too.
            </p>
            <p>My aim is to make the Internet a better place, one app at a time (sometimes two). </p>
          </div>
        </div>
      </section>
      {/* contacts */}
      <section className='bg-secondary w-full text-gray-100 font-bold px-8 py-4 md:mb-8 md:flex md:items-center md:justify-between md:rounded-b-md'>
        <div className='portfolio flex items-center my-4 md:my-0'>
          <svg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' viewBox='0 0 20 20' fill='currentColor'>
            <path
              fill-rule='evenodd'
              d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
              clip-rule='evenodd'
            />
          </svg>
          <a href='https://sayantan.work' className='pl-2'>
            https://sayantan.work
          </a>
        </div>
        <div className='email flex items-center my-4 md:my-0'>
          <svg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' viewBox='0 0 20 20' fill='currentColor'>
            <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
            <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
          </svg>
          <a href='mailTo:web.dev.sayantan@gmail.com' target='_' className='pl-2'>
            web.dev.sayantan@gmail.com
          </a>
        </div>
        <div className='phone flex items-center my-4 md:my-0'>
          <svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
            <path d='M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z' />
            <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
          </svg>
          <span className='pl-2'>+91 9748365829</span>
        </div>
      </section>
      {/* body */}
      <section className='body grid grid-cols-1 md:grid-cols-4'>
        <div className='left col-span-1 md:col-span-3'>
          <section className='employment bg-tertiary md:rounded-md'>
            <div className='heading text-2xl font-bold uppercase mb-4 bg-primary text-gray-100 px-4 py-2 md:rounded-t-md'>
              Employment History
            </div>
            <div className='items p-4'>
              {employments.map((employer) => (
                <Employment key={employer.name} item={employer} />
              ))}
            </div>
          </section>
          <section className='internships bg-tertiary md:rounded-md md:mt-8'>
            <div className='heading text-2xl font-bold uppercase mb-4 bg-primary text-gray-100 px-4 py-2 md:rounded-t-md'>
              Internships
            </div>
            <div className='items p-4'>
              {internships.map((employer) => (
                <Employment key={employer.name} item={employer} />
              ))}
            </div>
          </section>
          <section className='education bg-tertiary md:rounded-md md:mt-8'>
            <div className='heading text-2xl font-bold uppercase mb-4 bg-primary text-gray-100 px-4 py-2 md:rounded-t-md'>
              Education
            </div>
            <div className='items p-4'>
              {educations.map((employer) => (
                <Employment key={employer.name} item={employer} />
              ))}
            </div>
          </section>
          <section className='courses bg-tertiary md:rounded-md md:mt-8'>
            <div className='heading text-2xl font-bold uppercase mb-4 bg-primary text-gray-100 px-4 py-2 md:rounded-t-md'>
              Certifications
            </div>
            <div className='items p-4'>
              {certifications.map((item) => (
                <Certification key={item.title} item={item} />
              ))}
            </div>
          </section>
        </div>
        <div className='right col-span-1 h-full md:pl-8'>
          <div className='h-full w-full p-8 bg-primary text-gray-100 md:rounded-md'>
            <div className='skills mb-24'>
              <div className='heading text-2xl font-semibold mb-4'>Skills</div>
              {skills.map((skill) => (
                <Skill key={skill.id} item={skill} />
              ))}
            </div>
            <div className='languages'>
              <div className='heading text-2xl font-semibold mb-4'>Languages</div>
              {languages.map((lang) => (
                <Skill key={lang.id} item={lang} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
