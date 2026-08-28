import { SiGooglescholar, SiGithub, SiOrcid, SiScopus } from 'react-icons/si'

const logos = {
  scholar: SiGooglescholar,
  scopus: SiScopus,
  orcid: SiOrcid,
  github: SiGithub,
}

export default function ProfileLogo({ type, name }) {
  const Icon = logos[type]

  return (
    <span className={`academic-logo academic-logo-${type}`} aria-hidden="true">
      {Icon ? <Icon /> : <span className="sinta-mark">S</span>}
      <span className="sr-only">Logo {name}</span>
    </span>
  )
}
