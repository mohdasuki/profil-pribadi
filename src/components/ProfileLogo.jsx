import { SiGooglescholar, SiGithub, SiOrcid } from 'react-icons/si'
import sintaLogo from '../assets/sinta-logo.png'
import scopusLogo from '../assets/scopus-logo.png'

const logos = {
  scholar: SiGooglescholar,
  orcid: SiOrcid,
  github: SiGithub,
}

export default function ProfileLogo({ type, name }) {
  const Icon = logos[type]

  return (
    <span className={`academic-logo academic-logo-${type}`} aria-hidden="true">
      {type === 'sinta' && <img src={sintaLogo} alt="" />}
      {type === 'scopus' && <img src={scopusLogo} alt="" />}
      {Icon && <Icon />}
      <span className="sr-only">Logo {name}</span>
    </span>
  )
}
