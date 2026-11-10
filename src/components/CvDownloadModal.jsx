import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/profile.js'
import { Icon } from './icons.jsx'

export default function CvDownloadModal({ open, onClose }) {
  const [selectedId, setSelectedId] = useState(profile.cvFormats[0]?.id || 'pdf')
  const closeBtnRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeBtnRef.current?.focus()

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  const formats = profile.cvFormats || []
  const selected = formats.find((f) => f.id === selectedId) || formats[0]

  const handleDownloadClick = () => {
    // Defer unmount so the browser initiates the native <a download> before the node disappears.
    window.setTimeout(onClose, 150)
  }

  return (
    <div
      className="cv-modal-backdrop"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="cv-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-modal-title"
        aria-describedby="cv-modal-desc"
      >
        <header className="cv-modal__head">
          <div>
            <span className="cv-modal__eyebrow">Curriculum Vitae</span>
            <h2 id="cv-modal-title" className="cv-modal__title">
              Select Download Mode
            </h2>
            <p id="cv-modal-desc" className="cv-modal__sub">
              Choose between the classic typeset PDF or the native Microsoft Excel workbook.
            </p>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            className="cv-modal__close"
            onClick={onClose}
            aria-label="Close download modal"
            title="Close"
          >
            <Icon name="close" size={18} />
          </button>
        </header>

        <div className="cv-modal__modes" role="radiogroup" aria-label="CV download mode">
          {formats.map((fmt) => {
            const active = fmt.id === selected.id
            const iconName = fmt.id === 'excel' ? 'fileExcel' : 'filePdf'
            return (
              <button
                key={fmt.id}
                type="button"
                role="radio"
                aria-checked={active}
                className={`cv-mode ${active ? 'is-active' : ''}`}
                onClick={() => setSelectedId(fmt.id)}
              >
                <div className="cv-mode__top">
                  <span className="cv-mode__icon">
                    <Icon name={iconName} size={20} />
                  </span>
                  <span className="cv-mode__badge">{fmt.badge}</span>
                  <span className="cv-mode__check" aria-hidden="true">
                    {active && <Icon name="check" size={14} />}
                  </span>
                </div>
                <div className="cv-mode__title-row">
                  <span className="cv-mode__name">{fmt.label}</span>
                  <span className="cv-mode__ext">{fmt.ext}</span>
                </div>
                <p className="cv-mode__desc">{fmt.description}</p>
                <ul className="cv-mode__list">
                  {fmt.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </button>
            )
          })}
        </div>

        <footer className="cv-modal__foot">
          <div className="cv-modal__actions">
            <a
              className="btn btn--primary cv-modal__download"
              href={selected.file}
              download={selected.fileName}
              onClick={handleDownloadClick}
            >
              <Icon name="download" size={16} />
              Download {selected.label} ({selected.ext})
            </a>
            {selected.previewable && (
              <a
                className="btn btn--ghost"
                href={selected.file}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="external" size={15} /> Preview
              </a>
            )}
          </div>
          {profile.cvTex && (
            <div className="cv-modal__source">
              <span>Need the raw source?</span>
              <a href={profile.cvTex} download="Tusher_Mondal_CV.tex">
                Download LaTeX (.tex)
              </a>
            </div>
          )}
        </footer>
      </div>
    </div>
  )
}
