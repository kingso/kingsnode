import ExperienceItem from "./ExperienceItem"

type Props = {
  date: string
  url: string
  title: string[]
  company: string
  responsibility: string
  tech: string[]
}

export default function ExperienceList() {
  return (
    <ol className="group/list">
      <ExperienceItem
        date="Apr 2022 - Present"
        url="https://www.synchronicity-systems.com/"
        title={["Support Manager", "CRM Support Consultant"]}
        company="Synchronicity Systems"
        responsibility="Application, configuration, and integration of Microsoft Dynamics CRM / 365. Data Analysis, Microsoft Azure"
        tech={["Dynamics 365", "Account Management", "Data Analysis"]}
      />
      <ExperienceItem
        date="Aug 2004 - Mar 2022"
        url="https://www.atebgroup.co.uk/"
        title={[
          "Systems & Business Applications Analyst",
          "ICT Co-ordinator",
          "IT Officer",
        ]}
        company="ateb Group"
        responsibility="Technical lead for delivery of multi-diciplin projects
            • Cross-platform Database Backup Routine with SSIS, PowerShell + Batch scripts
            • WDS Server with custom Windows 7 / 10 images
            • Enterprise Firewall config + administration
            • Developed bespoke Service Desk application
            • SharePoint / Web development
            • Excel development
            • SFTP server with PGP encryption
            • Develop bespoke Change Control web application
            "
        tech={[
          "Administration",
          "Applications",
          "BCDR",
          "Data",
          "Desktop",
          "Infrastructure",
          "Networking",
          "Support",
          "Virtualisation",
          "VOIP",
        ]}
      />
      <ExperienceItem
        date="2002 - Aug 2004"
        url="https://www.solon.com/"
        title={["Sales and Support Manager"]}
        company="Solon Systems Development Ltd"
        responsibility="Stuff"
        tech={["Azure", "VMware", "Excel", "CSS"]}
      />
      <ExperienceItem
        date="2000 - 2001"
        url="https://www.greensgroup.co.uk/"
        title={["IT Manager"]}
        company="Greens Group Ltd"
        responsibility="Management of all IT Systems over 5 sites with 70+ Users • Server and Desktop Systems Administration"
        tech={["Support", "Telecoms", "Networking", "Web Design & Development"]}
      />
      <ExperienceItem
        date="Nov 1998 - Nov 2000"
        url="https://www.solon.com/"
        title={["Computer Technician"]}
        company="Solon Systems Development Ltd"
        responsibility=""
        tech={["Sales", "System Building", "Support", "Networking"]}
      />
      <ExperienceItem
        date="Sep 1997 - Oct 1998"
        url=""
        title={["Computer Technician"]}
        company="Wrightway Computers Ltd"
        responsibility=""
        tech={["Sales", "System Building", "Support", "Networking"]}
      />
    </ol>
  )
}
