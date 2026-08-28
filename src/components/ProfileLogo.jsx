import { SiGooglescholar, SiGithub, SiOrcid, SiScopus } from 'react-icons/si'
import sintaLogo from '../assets/sinta-logo.png'

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
      {type === 'sinta' ? <img src={sintaLogo} alt="" /> : <Icon />}
      <span className="sr-only">Logo {name}</span>
    </span>
  )
}
