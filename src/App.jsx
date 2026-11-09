import { useEffect, useState } from 'react'
import { FaChevronDown, FaXmark } from 'react-icons/fa6'
import { profile, links, tips } from './links.js'

function Avatar() {
  const [ok, setOk] = useState(true)
  return (
    <div className="avatar">
      {ok ? (
        <img src={profile.avatar} alt={profile.name} onError={() => setOk(false)} />
      ) : (
        <span>{profile.name[0]}</span>
      )}
    </div>
  )
}

function LinkCard({ item, index }) {
  const Icon = item.icon
  return (
    <a className="card link" href={item.url} target="_blank" rel="noopener noreferrer"
       style={{ animationDelay: `${index * 50}ms` }}>
      <span className="icon"><Icon /></span>
      <span className="text">
        <b>{item.name}</b>
        <small>{item.handle}</small>
      </span>
      <span className="arrow">▸</span>
    </a>
  )
}

export default function App() {
  const [expanded, setExpanded] = useState(false)
  const [qr, setQr] = useState(null)
  const shown = expanded ? links : links.slice(0, profile.visibleCount)
  const hidden = links.length - profile.visibleCount

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setQr(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <main>
      <div className="bg-grid" /><div className="scan" />
      <section className="panel">
        <Avatar />
        <h1>{profile.name}</h1>
        <p className="tag"><i className="dot" />{profile.tagline}</p>

        <div className="grid">
          {shown.map((l, i) => <LinkCard key={l.name} item={l} index={i} />)}
        </div>

        {hidden > 0 && (
          <button className="more" onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Show less' : `Show ${hidden} more`}
            <FaChevronDown className={expanded ? 'flip' : ''} />
          </button>
        )}

        <div className="divider"><span>Send a tip</span></div>
        <div className="grid tips">
          {tips.map((t) => {
            const Icon = t.icon
            return (
              <button key={t.name} className="card tip" onClick={() => setQr(t)}>
                <span className="icon"><Icon /></span>
                <span className="text"><b>{t.name}</b><small>QR code</small></span>
              </button>
            )
          })}
        </div>

        <footer>{profile.footer}</footer>
      </section>

      {qr && (
        <div className="modal" onClick={() => setQr(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setQr(null)} aria-label="Close"><FaXmark /></button>
            <h2>{qr.name}</h2>
            <img src={qr.qr} alt={`${qr.name} QR code`} />
          </div>
        </div>
      )}
    </main>
  )
}
