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
        <h3>Working on</h3>
        <VerticalTimeline layout="1-column">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019-2020"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="timeline-header">Data Engineering & Machine Learning</h3>
            <h4 className="timeline-header">from Coursera, DataCamp and Udacity</h4>
            <p>
              Statistics, Numpy, Pandas, Spark, Scikit-Learn, Matplotlib, Deep Learning, TensorFlow, Keras
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <h3>Work Experience</h3>
        <VerticalTimeline layout="1-column">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2020 - Mar 2021"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="timeline-header">Software Development Engineer (contract at Amazon India)</h3>
            <h4 className="timeline-header">ETeam Infoservices Pvt Ltd</h4>
            <p>
              Worked on Seller Rewards platform
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2019 - Jul 2020"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="timeline-header">Senior Software Engineer</h3>
            <h4 className="timeline-header">AppZui Technologies Pvt Ltd</h4>
            <div>
              <p>
                Worked for US based clients:
              </p>
              <ul className="timeline-ul">
                <li>Liquid Analytics (https://www.liquidanalytics.com)</li>
                <li>Sahoja (https://sahoja.co/)</li>
                <li>TermSt (https://termst.com/)</li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2018 - Dec 2018"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="timeline-header">Tech Lead</h3>
            <h4 className="timeline-header">Think And Learn Pvt Ltd</h4>
            <p>
              Tech Stack: NodeJS, React, AngularJS, MongoDB
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2016 - Jun 2018"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="timeline-header">Founder</h3>
            <h4 className="timeline-header">Shikshitha</h4>
            <p>
              Tech Stack: Android, Jersey RESTful API, Angular 2+, AWS, MYSQL
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2013 - May 2016"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="timeline-header">Android App Developer</h3>
            <h4 className="timeline-header">Banyan Learning Solutions (SchoolCom)</h4>
            <p>
              
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2017 - Jan 2018 / Oct 2016 - Jan 2017 / 2015"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="timeline-header">Freelancer</h3>
            <h4 className="timeline-header">Upright / Study Manager / FabFresh</h4>
            <p>
              Tech Stack: ASP.NET / Android App Development++
            </p>
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
            <h3 className="timeline-header">Master of Technology</h3>
            <h4 className="timeline-header">Computer Science, SIT, Tumkur</h4>
            <p>
              CGPA: 7.93
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2007 - 2011"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="timeline-header">Bachelor of Engineering</h3>
            <h4 className="timeline-header">Electronics and Communication, SSIT, Tumkur</h4>
            <p>
              CGPA: 8.67
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2005 - 2007"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="timeline-header">Class 12</h3>
            <h4 className="timeline-header">Sapthagiri Pre-University College, Tumkur</h4>
            <p>
              84%
            </p>
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
