export function Arrow({ direction = 'right', className = 'icon' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={`${className} arrow-${direction}`}>
      <path d="M4 10h11M10.5 4.5 16 10l-5.5 5.5" />
    </svg>
  )
}

export function External({ className = 'icon' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={className}>
      <path d="M11 4h5v5M16 4l-7.5 7.5M14 11.5V16H4V6h4.5" />
    </svg>
  )
}

export function Mail({ className = 'icon' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={className}>
      <rect x="2.5" y="4.5" width="15" height="11" rx="1.5" />
      <path d="m3.5 6 6.5 5 6.5-5" />
    </svg>
  )
}

export function Phone({ className = 'icon' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={className}>
      <path d="M6.2 3.3 8.1 6.7 6.8 8.1c.8 1.8 2.1 3.1 3.9 3.9l1.4-1.3 3.4 1.9-.5 2.1c-.2.8-1 1.3-1.8 1.2C8 15.3 4.7 12 4.1 6.8c-.1-.8.4-1.6 1.2-1.8z" />
    </svg>
  )
}

export function GithubMark({ className = 'icon' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className={className}>
      <path
        fill="currentColor"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-2.91-.88-2.91-2.79 0-.68.24-1.35.65-1.85-.07-.2-.29-.99.06-2.05 0 0 .62-.2 2.03.76a6.9 6.9 0 0 1 1.85-.25c.63 0 1.26.08 1.85.25 1.4-.96 2.02-.76 2.02-.76.36 1.06.14 1.85.07 2.05.42.5.65 1.16.65 1.85 0 1.92-1.14 2.59-2.92 2.79.3.26.56.76.56 1.54 0 1.1-.01 2-.01 2.27 0 .21.15.46.55.38A7.99 7.99 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
      />
    </svg>
  )
}

export function Document({ className = 'icon' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={className}>
      <path d="M5 2.5h6l4 4V17.5H5zM11 2.5v4h4M7.5 10h5M7.5 13h5" />
    </svg>
  )
}

export function Globe({ className = 'icon' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={className}>
      <circle cx="10" cy="10" r="7.5" />
      <path d="M2.5 10h15M10 2.5c2 2 2.8 4.6 2.8 7.5S12 15.5 10 17.5c-2-2-2.8-4.6-2.8-7.5S8 4.5 10 2.5z" />
    </svg>
  )
}

export function Layers({ className = 'icon' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={className}>
      <path d="M10 2.5 17 6.5 10 10.5 3 6.5zM3 10l7 4 7-4M3 13.5l7 4 7-4" />
    </svg>
  )
}

export function Target({ className = 'icon' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={className}>
      <circle cx="10" cy="10" r="7" />
      <circle cx="10" cy="10" r="2.5" />
    </svg>
  )
}

export function Check({ className = 'icon' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={className}>
      <path d="m4.5 10.5 3.6 3.6L15.5 6.5" />
    </svg>
  )
}
