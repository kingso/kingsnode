"use client"
import ExperienceList from "./components/ExperienceList"
import SectionContent from "./components/SectionContent"
import FooterDetail from "./components/FooterDetail"
import CV from "./components/CV"
import Link from "next/link"
import { motion } from "framer-motion"
export default function Home() {
  return (
    <>
      {/* <div>
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 10 }}
          animate={{ opacity: 1, scale: 0.1 }}
        />
      </div> */}
      <SectionContent id="about" label="About me" title="About">
        <div>
          <p className="mb-4">
            In 1997, I was gifted a course in Microsoft Works. I ended up
            helping others on the course and decided that I had found my
            calling; working in IT. Fast-forward to today, and I have 25+ years
            of experience in multiple IT disciplines.
          </p>
          <p className="mb-4">
            Currently, I&#39;ve specialised in Dynamics 365 and related systems,
            supporintg multi-national clients with customisations for
            <Link
              href="https://www.synchronicity-systems.com/"
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Synchronicity Systems
            </Link>
            . In my free time I&#39;ve also released an{" "}
            <Link
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="https://www.newline.co/courses/build-a-spotify-connected-app"
              target="_blank"
              rel="noreferrer"
            >
              online video course
            </Link>{" "}
            that covers everything you need to know to build a web app with the
            Spotify API.
          </p>
          <p>
            When I&#39;m not at the computer, I&#39;m usually rock climbing,
            hanging out with my wife and two cats, or running around Hyrule
            searching for.
          </p>
        </div>
      </SectionContent>

      <SectionContent
        id="experience"
        label="Work experience"
        title="Experience"
      >
        <ExperienceList />
      </SectionContent>
      <SectionContent id="cv" label="CV" title="CV">
        <CV />
      </SectionContent>

      <FooterDetail />
    </>
  )
}
