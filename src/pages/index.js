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
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        <p>
          I'm a Developer from Bangalore having experience in Full Stack and Mobile App Development.
          I like to go on a trekking, skating and would love to play Piano one day.
        </p>
        <p>
          Having a blog to document what I learn was a long-overdue and I'm happy to share a bit about my experience with the world.
        </p>
        <h3>Learning</h3>
        <VerticalTimeline layout="1-column">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2019"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Python and Machine Learning</h3>
            <h4 className="vertical-timeline-element-subtitle">from Coursera and Udacity</h4>
            <p>
              Linear Algebra, Descriptive Statistics, Inferential Statistics...
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <h3>Work Experience</h3>
        <VerticalTimeline layout="1-column">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2018 - Dec 2018"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Tech Lead</h3>
            <h4 className="vertical-timeline-element-subtitle">Think And Learn Pvt Ltd</h4>
            <p>
              Tech Stack: NodeJS, React, AngularJS, MongoDB
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2017 - Jun 2018"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Founder</h3>
            <h4 className="vertical-timeline-element-subtitle">Shikshitha</h4>
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
            <h3 className="vertical-timeline-element-title">Android App Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Banyan Learning Solutions (SchoolCom)</h4>
            <p>
              
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2017 - Jan 2018 / Oct 2016 - Jan 2017 / 2015"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Freelancer</h3>
            <h4 className="vertical-timeline-element-subtitle">Upright / Study Manager / FabFresh</h4>
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
            <h3 className="vertical-timeline-element-title">Master of Technology</h3>
            <h4 className="vertical-timeline-element-subtitle">Computer Science, SIT, Tumkur</h4>
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
            <h3 className="vertical-timeline-element-title">Bachelor of Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Electronics and Communication, SSIT, Tumkur</h4>
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
            <h3 className="vertical-timeline-element-title">Class 12</h3>
            <h4 className="vertical-timeline-element-subtitle">Sapthagiri Pre-University College, Tumkur</h4>
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
