import React from 'react'
import { graphql } from 'gatsby'

import Skill from '../components/Skill'
import Employment from '../components/Employment'
import Certification from '../components/Certification'
import Layout from '../components/Layout'

export default function Index({ data }) {
  const { profilesJson } = data
  const { employments, education, internships, certifications, summary, contact, skills, languages } = profilesJson

  return (
    <Layout>
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
                <a
                  className='bg-secondary rounded-full px-4 py-2 flex gap-2 items-center'
                  href={skill.url}
                  target='_'
                  key={skill}>
                  <img src={`/icons/${skill.icon}`} alt='' width='16' height='16' />
                  <span className='text-xs font-bold uppercase'>{skill.name}</span>
                </a>
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
            <div className='w-full text-center sm:text-left flex-1 py-4 '>
              {summary.about.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className='w-full text-center sm:text-left flex-1 py-4 '>
              <p className='font-bold'>Total Experience: </p>
              <p>{summary.totalExperience}</p>
            </div>
          </div>
        </section>
        {/* contacts */}
        <section className='bg-secondary w-full text-gray-100 font-bold px-8 py-4 md:mb-8 md:flex md:items-center md:justify-between md:rounded-b-md'>
          <div className='portfolio flex items-center my-4 md:my-0'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' viewBox='0 0 20 20' fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
                clipRule='evenodd'
              />
            </svg>
            <a href={contact.portfolio} className='pl-2'>
              {contact.portfolio}
            </a>
          </div>
          <div className='email flex items-center my-4 md:my-0'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' viewBox='0 0 20 20' fill='currentColor'>
              <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
              <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
            </svg>
            <a href={`mailTo:${contact.email}`} target='_' className='pl-2'>
              {contact.email}
            </a>
          </div>
          <div className='phone flex items-center my-4 md:my-0'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
              <path d='M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z' />
              <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
            </svg>
            <span className='pl-2'>{contact.mobile}</span>
          </div>
          <div className='phone flex items-center my-4 md:my-0'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                clipRule='evenodd'
              />
            </svg>
            <span className='pl-2'>{contact.location}</span>
          </div>
        </section>
        {/* body */}
        <section className='body grid grid-cols-1 md:grid-cols-4'>
          <div className='left col-span-1 md:col-span-3'>
            <section className='employment bg-tertiary md:rounded-md'>
              <div className='heading text-2xl font-bold uppercase mb-4 bg-primary text-gray-100 px-4 py-2 md:rounded-t-md'>
                Work Experience
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
                {education.map((employer) => (
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
    </Layout>
  )
}

export const query = graphql`
  query {
    profilesJson(summary: { name: { eq: "Sayantan Dey" } }) {
      summary {
        designation
        name
        totalExperience
        about
        primarySkills {
          name
          icon
          url
        }
      }
      contact {
        email
        location
        mobile
        portfolio
      }
      employments {
        employer
        city
        details
        end
        start
        title
      }
      education {
        city
        details
        employer
        end
        start
        title
      }
      internships {
        city
        details
        employer
        end
        start
        title
      }
      languages {
        id
        level
        name
      }
      skills {
        id
        level
        name
      }
      certifications {
        completion
        institution
        link
        title
      }
    }
  }
`
