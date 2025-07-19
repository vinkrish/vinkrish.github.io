import React from 'react'
import { graphql } from 'gatsby'
import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

const ResumeIndex= ({data}) => {
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        <p>
          I'm a Developer based in New York (originally from Bangalore, India) having experience in full stack development and Data Engineering. I've also explored Data Analysis & Machine Learning - though my deep dive into reinforcement learning temporarily hit pause!
        </p>
        <p>
          I enjoy hiking, kayaking, practising Tennis in my basement, dream of learning to play the piano someday, and love reading about the cosmos while gazing up at the night sky.
        </p>
        <blockquote style={{color: '#FFA7C4'}} >"Somewhere, something incredible is waiting to be known" - Carl Sagan</blockquote>
        <p>
          Having a blog to document what I learn was a long-overdue and I'm happy to share a bit about my experience with the world.
        </p>
        <h3>Interests</h3>
        <VerticalTimeline layout="1-column">
          <VerticalTimelineElement
            className="vertical-timeline-element--work forceBlackText"
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
          className="vertical-timeline-element--work forceBlackText"
          date="Since Dec 2024"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faCode} />}
        >
          <h4 className="timeline-header">Senior Data Engineer</h4>
          <h5 className="timeline-header">CVS</h5>
          <p id="p-head">Tech Stack: NodeJS, Python, Snowflake, MongoDB, Kafka, Docker, kubernetes, Azure</p>
          <div>
            <p id="p-head">DDAT (Digital Data Analytics Technology)</p>
            <ul className="timeline-ul">
              <li>Work in Progress</li>
            </ul>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work forceBlackText"
            date="Jul 2022 - Sep 2024"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h4 className="timeline-header">Software Engineer</h4>
            <h5 className="timeline-header">Casting Networks</h5>
            <p id="p-head">Tech Stack: NodeJS (NestJS), Lambda, PostgreSQL, DynamoDB, ElasticSearch, AWS</p>
            <div>
              <p id="p-head">Working to help performers find great roles and industry professionals find great talent.</p>
              <ul className="timeline-ul">
                <li>Developed and maintained high traffic microservices following distributed systems architecture</li>
                <li>Designed and implemented GraphQL APIs using Apollo Federation and RPC for service communication</li>
                <li>Integrated Recurly for subscription billing management, facilitating automated recurring monthly subscription charges</li>
                <li>Built Lambda functions to generate client-specific reports and automated business workflows</li>
                <li>Optimized search functionality with ElasticSearch, improving performance across multiple services</li>
                <li>Utilized PostgreSQL (handling 2,500 database connection per minute) and DynamoDB (handling 1 million submissions a day), ensuring robust performance across microservices</li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work forceBlackText"
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
                <li>Designed Authorization / Permission model from scratch, aligning with client requirements to ensure secure access control across the platform</li>
                <li>Developed microservices to handle all media and notification components</li>
                <li>Worked on APIs for insurance policy creation and claim lodging, collaborating with clients from the project’s inception</li>
                <li>Integrated Azure Blob Storage with signed-url access, building a secure, scalable solution for medai management</li>
                <li>Designed and developed middleware which performs query building based on roles and runtime filter conditions</li>
              </ul>
            </div>
            <div>
              <p id="p-head">Working for Synctactic AI</p>
              <ul className="timeline-ul">
                <li>Integrated Google Analytics with Apache Airflow to extract analytics data using client’s OAuth</li>
                <li>Developed an admin service to track all system actions and enable reversal of any action by storing historical actions and data associations. This feature improved auditability and accountability, reducing the time to resolve errors</li>
                <li>Worked on CI/CD pipeline, using Github Actions to build docker images and deploying images in kubernetes cluster</li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work forceBlackText"
            date="Jul 2020 - Mar 2021"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h4 className="timeline-header">Software Development Engineer</h4>
            <h5 className="timeline-header">Amazon (Contract)</h5>
            <div>
              <p id="p-head">Tech Stack: Java, React, DynamoDB, AWS</p>
              <p id="p-head">Worked on Seller Rewards platform at Amazon India</p>
              <ul className="timeline-ul">
                <li>Internationalized Seller Rewards Program, expanding its reach to multiple regions and increasing user engagement</li>
                <li>Developed APIs for creating rewards and enrolling users, enabling seamless reward management and boosting user participation in the system</li>
                <li>Integrated payment services for successful rewards completion</li>
                <li>Enhanced the React web application for reward creation and approval workflows, streamlining processes for the business team</li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work forceBlackText"
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
                <li>Designed and developed file management system for the TermSt client, enabling document sharing across borrowers and lenders in the platform</li>
                <li>Architected and implemented the backend for the social wellness platform Sahoja, utilizing Azure Functions to ensure scalability and performance</li>
                <li>Developed both the frontend and backend for the alternative dispute resolution mediation system for Fulton County Court, streamlining case management and improving access to mediation services</li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work forceBlackText"
            date="Jul 2016 - Jun 2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h4 className="timeline-header">Founder</h4>
            <h5 className="timeline-header">Shikshitha</h5>
            <div>
              <p id="p-head">Tech Stack: Android, Jersey RESTful API, Angular 2+, AWS, MYSQL</p>
              <ul className="timeline-ul">
                <li>Developed Android applications for both school faculties and parents, implementing role-based access control to ensure users only interact with data and features relevant to their roles</li>
                <li>Designed the database architecture after conducting comprehensive research on the Indian education system</li>
                <li>Developed Angular2+ admin web app to manage master data across educational Institutions</li>
                <li>Developed Restful Web Services using Spring Boot with JPA for efficient data handling and integration</li>
                <li>Leveraged AWS services including EC2, Elastic Beanstalk, S3, RDS, and SNS, to enhance scalability, reliability and to implement SMS notification service</li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work forceBlackText"
            date="Dec 2013 - May 2016"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h4 className="timeline-header">Android App Developer</h4>
            <h5 className="timeline-header">Banyan Learning Solutions (SchoolCom)</h5>
            <div>
              <p id="p-head">Tech Stack: Android, MYSQL</p>
              <ul className="timeline-ul">
                <li>As one of the founding developers, I took full ownership of Android app development, deploying applications in over 50+ schools</li>
                <li>Developed two tablet applications with offline functionality for teachers and principals to capture test and exam related data efficiently</li>
                <li>Designed an interactive dashboard and intuitive navigation system, enabling school faculty to analyze micro-level data with comprehensive student and class-level exam analytics</li>
                <li>Implemented a robust syncing mechanism to ensure seamless data synchronization across all devices and the server database, ensuring consistency and reliability of data access across the platform</li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work forceBlackText"
            date="2015 / (Oct 2016 - Jan 2017)"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h4 className="timeline-header">Freelancer</h4>
            <h5 className="timeline-header">FabFresh / Study Manager</h5>
            <p id="p-head">Tech Stack: Android App Development</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <h3>Education</h3>
        <VerticalTimeline layout="1-column">
          <VerticalTimelineElement
            className="vertical-timeline-element--education forceBlackText"
            date="2011 - 2013"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h4 className="timeline-header">Master of Technology</h4>
            <h5 className="timeline-header">Computer Science, SIT, Tumkur</h5>
            <p id="p-head">CGPA: 7.93</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education forceBlackText"
            date="2007 - 2011"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h4 className="timeline-header">Bachelor of Engineering</h4>
            <h5 className="timeline-header">Electronics and Communication, SSIT, Tumkur</h5>
            <p id="p-head">CGPA: 8.67</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Layout>
    )
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
