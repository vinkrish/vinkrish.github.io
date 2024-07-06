import React from 'react'
import { graphql } from 'gatsby'
import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

class ResumeIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        <p>
          I'm a Developer from New York (originally from Bangalore, India) having experience in full stack, mobile app development and now working on Machine Learning & Data Analysis.
          I like to go on a trekking, skating, would love to learn playing Piano and reads about Cosmos staring at sky.
        </p>
        <blockquote style={{color: '#FFA7C4'}} >"Somewhere, something incredible is waiting to be known" - Carl Sagan</blockquote>
        <p>
          Having a blog to document what I learn was a long-overdue and I'm happy to share a bit about my experience with the world.
        </p>
        <h3>Interests</h3>
        <VerticalTimeline layout="1-column">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019-2020"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h4 className="timeline-header">Data Engineering & Machine Learning</h4>
            <h5 className="timeline-header">from Coursera, DataCamp and Udacity</h5>
            <p id="p-head">
              Statistics, Numpy, Pandas, Spark, Scikit-Learn, Matplotlib, Deep Learning, TensorFlow, Keras
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <h3>Work Experience</h3>
        <VerticalTimeline layout="1-column">
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Since Jul 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h4 className="timeline-header">Software Engineer</h4>
            <h5 className="timeline-header">Casting Networks</h5>
            <p id="p-head">Tech Stack: NodeJS, PostgreSQL, DynamoDB, ElasticSearch, AWS</p>
            <div>
              <p id="p-head">Working to help performers find great roles and industry professionals find great talent.</p>
              <ul className="timeline-ul">
                <li>Developing GraphQL endpoints, using federated gateway</li>
                <li>Working in half a dozen microservices to make the system work</li>
                <li>Handling high volume of data with high performant sql queries and ElasticSearch indexes</li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 2021 - Jun 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h4 className="timeline-header">Senior Software Engineer</h4>
            <h5 className="timeline-header">Otherside Consulting India Pvt Ltd</h5>
            <p id="p-head">Tech Stack: NodeJS, PostgreSQL, AWS, Azure</p>
            <div>
              <p id="p-head">Working for an Australian Insurance Project</p>
              <ul className="timeline-ul">
                <li>Designed Authorization/Permission model for complex roles in Insurance Project</li>
                <li>Designed Microservice to handles all media/document requirements in a project</li>
                <li>Developed middleware which performs query building</li>
                <li>Worked on API’s for insurance policy creation and lodging of claims in the system.</li>
              </ul>
            </div>
            <div>
              <p id="p-head">Working for Synctactic AI</p>
              <ul className="timeline-ul">
                <li>Developed admin microservice which keeps track of all the actions in the system</li>
                <li>Worked on CI/CD pipeline, using Github Actions / docker / kubernetes</li>
                <li>Integrated Google Analytics using Apache Airflow</li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2020 - Mar 2021"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h4 className="timeline-header">Software Development Engineer (contract at Amazon India)</h4>
            <h5 className="timeline-header">ETeam Infoservices Pvt Ltd</h5>
            <div>
              <p id="p-head">Tech Stack: Java, React, DynamoDB, AWS</p>
              <p id="p-head">Worked on Seller Rewards platform at Amazon India</p>
              <ul className="timeline-ul">
                <li>One of the developer worked towards internationalizing Seller Rewards Program</li>
                <li>Worked on Seller to Seller referral program development</li>
                <li>Worked on React web application for creating rewards and the approval system from business team</li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2019 - Jul 2020"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h4 className="timeline-header">Senior Software Engineer</h4>
            <h5 className="timeline-header">AppZui Technologies Pvt Ltd</h5>
            <div>
              <p id="p-head">Tech Stack: NodeJS, MYSQL, MongoDB, AWS, Azure</p>
              <p id="p-head">Worked for US based clients:</p>
              <ul className="timeline-ul">
                <li>Liquid Analytics (https://www.liquidanalytics.com) - Developed 3rd party order placement workflow</li>
                <li>Sahoja (https://sahoja.co/) - Developed backend using Azure Functions</li>
                <li>TermSt (https://termst.com/) - Developed file manager system</li>
                <li>Developed frontend / backend for alternative dispute resolution mediation application</li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2016 - Jun 2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h4 className="timeline-header">Founder</h4>
            <h5 className="timeline-header">Shikshitha</h5>
            <div>
              <p id="p-head">Tech Stack: Android, Jersey RESTful API, Angular 2+, AWS, MYSQL</p>
              <ul className="timeline-ul">
                <li>Developed Android apps for school faculties & for parent</li>
                <li>Developed Angular2+ admin web app to manage master data</li>
                <li>Developed Restful Web Services in Spring Boot with JPA</li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2013 - May 2016"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h4 className="timeline-header">Android App Developer</h4>
            <h5 className="timeline-header">Banyan Learning Solutions (SchoolCom)</h5>
            <div>
              <p id="p-head">Tech Stack: Android, MYSQL</p>
              <ul className="timeline-ul">
                <li>Developed two tablet applications for teachers and principal which captures data related to exams</li>
                <li>Developed syncing mechanism to keep all devices in sync with each other and with server database</li>
                <li>Designed interactive dashboard and navigation allowing school faculty to view micro-level data</li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2017 - Jan 2018 / Oct 2016 - Jan 2017 / 2015"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h4 className="timeline-header">Freelancer</h4>
            <h5 className="timeline-header">Upright / Study Manager / FabFresh</h5>
            <p id="p-head">Tech Stack: ASP.NET / Android App Development++</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <h3>Education</h3>
        <VerticalTimeline layout="1-column">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2011 - 2013"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h4 className="timeline-header">Master of Technology</h4>
            <h5 className="timeline-header">Computer Science, SIT, Tumkur</h5>
            <p id="p-head">CGPA: 7.93</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2007 - 2011"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h4 className="timeline-header">Bachelor of Engineering</h4>
            <h5 className="timeline-header">Electronics and Communication, SSIT, Tumkur</h5>
            <p id="p-head">CGPA: 8.67</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2005 - 2007"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h4 className="timeline-header">Class 12</h4>
            <h5 className="timeline-header">Sapthagiri Pre-University College, Tumkur</h5>
            <p id="p-head">84%</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Layout>
    )
  }
}

export default ResumeIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
