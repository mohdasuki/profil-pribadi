export default function SectionHeading({ eyebrow, children, description, className = '' }) {
  return <div className={`section-heading ${description ? 'heading-row' : ''} ${className}`.trim()}><div><p className="eyebrow"><span /> {eyebrow}</p><h2>{children}</h2></div>{description && <p>{description}</p>}</div>
}
