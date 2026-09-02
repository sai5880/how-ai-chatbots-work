const I = ({ size = 22, children, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...rest}
  >
    {children}
  </svg>
)

export const ChatIcon = (p) => (
  <I {...p}>
    <path d="M4 5h16v11H9l-5 4V5z" />
    <path d="M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01" />
  </I>
)

export const BrainIcon = (p) => (
  <I {...p}>
    <path d="M12 5.5v13" />
    <path d="M9.6 4.2a2.4 2.4 0 0 0-2.3 3A3.8 3.8 0 0 0 6 14v2a3 3 0 0 0 3 3h3" />
    <path d="M14.4 4.2a2.4 2.4 0 0 1 2.3 3A3.8 3.8 0 0 1 18 14v2a3 3 0 0 1-3 3h-3" />
    <path d="M9.6 4.2A2.4 2.4 0 0 1 12 6a2.4 2.4 0 0 1 2.4-1.8" />
    <path d="M8.5 10.5H7M17 10.5h-1.5" />
  </I>
)

export const ServerIcon = (p) => (
  <I {...p}>
    <rect x="4" y="4" width="16" height="7" rx="2" />
    <rect x="4" y="13" width="16" height="7" rx="2" />
    <path d="M7.5 7.5h.01M7.5 16.5h.01M11 7.5h3M11 16.5h3" />
  </I>
)

export const BlocksIcon = (p) => (
  <I {...p}>
    <rect x="4" y="4" width="7" height="7" rx="1.6" />
    <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.6" />
    <rect x="8.75" y="13" width="7" height="7" rx="1.6" />
  </I>
)

export const LockIcon = (p) => (
  <I {...p}>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    <path d="M12 15v2" />
  </I>
)

export const SendIcon = (p) => (
  <I {...p}>
    <path d="M21 3L10.5 13.5" />
    <path d="M21 3l-6.8 18-3.7-8.3L2 9z" />
  </I>
)

export const SparkIcon = (p) => (
  <I {...p}>
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
    <path d="M19 16.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" />
  </I>
)

export const GlobeIcon = (p) => (
  <I {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17" />
    <path d="M12 3.5c2.6 2.7 2.6 14.3 0 17-2.6-2.7-2.6-14.3 0-17z" />
  </I>
)

export const CalcIcon = (p) => (
  <I {...p}>
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <path d="M8.5 7.5h7" />
    <path d="M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 15.5h.01M12 15.5h.01M15.5 15.5h.01M8.5 18h.01M12 18h.01M15.5 18h.01" />
  </I>
)

export const SearchIcon = (p) => (
  <I {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="M20.5 20.5l-4.8-4.8" />
  </I>
)

export const CalendarIcon = (p) => (
  <I {...p}>
    <rect x="4" y="5" width="16" height="16" rx="2" />
    <path d="M4 10.5h16M9 3v4M15 3v4" />
  </I>
)

export const ClockIcon = (p) => (
  <I {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </I>
)

export const CheckIcon = (p) => (
  <I {...p}>
    <path d="M5 13l4 4 10-11" />
  </I>
)

export const AlertIcon = (p) => (
  <I {...p}>
    <path d="M12 4.5l9 15.5H3z" />
    <path d="M12 11v4M12 17.5h.01" />
  </I>
)

export const LayersIcon = (p) => (
  <I {...p}>
    <path d="M12 3.5l8.5 4.5L12 12.5 3.5 8z" />
    <path d="M4 13l8 4.5 8-4.5" />
  </I>
)

export const CompassIcon = (p) => (
  <I {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M15.5 8.5l-2.3 5.4-4.7 1.6 2.3-5.4z" />
  </I>
)

export const RouteIcon = (p) => (
  <I {...p}>
    <circle cx="6" cy="18" r="2.3" />
    <circle cx="18" cy="6" r="2.3" />
    <path d="M8.3 18H15a3.5 3.5 0 0 0 0-7H9a3.5 3.5 0 0 1 0-7h6.7" />
  </I>
)

export const CodeIcon = (p) => (
  <I {...p}>
    <path d="M8 7l-5 5 5 5" />
    <path d="M16 7l5 5-5 5" />
  </I>
)

export const ArrowRightIcon = (p) => (
  <I {...p}>
    <path d="M4 12h15" />
    <path d="M13.5 6l5.5 6-5.5 6" />
  </I>
)

export const ArrowLeftIcon = (p) => (
  <I {...p}>
    <path d="M20 12H5" />
    <path d="M10.5 6L5 12l5.5 6" />
  </I>
)

export const RefreshIcon = (p) => (
  <I {...p}>
    <path d="M20 12a8 8 0 1 1-2.4-5.7" />
    <path d="M20 3.5V9h-5.5" />
  </I>
)

export const MicIcon = (p) => (
  <I {...p}>
    <rect x="9" y="3" width="6" height="11" rx="3" />
    <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0" />
    <path d="M12 18v3" />
  </I>
)

export const TextCursorIcon = (p) => (
  <I {...p}>
    <path d="M6.5 4.5h11" />
    <path d="M12 4.5v15" />
    <path d="M9 19.5h6" />
  </I>
)

export const BuildingIcon = (p) => (
  <I {...p}>
    <rect x="5" y="8.5" width="14" height="12" rx="1.6" />
    <path d="M9 8.5V4h6v4.5" />
    <path d="M9 12.5h.01M12 12.5h.01M15 12.5h.01M9 16.5h.01M12 16.5h.01M15 16.5h.01" />
  </I>
)

export const ScissorsIcon = (p) => (
  <I {...p}>
    <circle cx="6.5" cy="6.5" r="2.3" />
    <circle cx="6.5" cy="17.5" r="2.3" />
    <path d="M8.5 8L20 19" />
    <path d="M8.5 16L20 5" />
  </I>
)

export const HashIcon = (p) => (
  <I {...p}>
    <path d="M9.5 4L7.5 20M16.5 4l-2 16" />
    <path d="M4.5 9h16M3.5 15h16" />
  </I>
)

export const QuoteMark = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M10.6 5.2C6.7 6.8 4.3 9.8 4.3 13.6c0 2.8 1.9 4.6 4.2 4.6 2.1 0 3.7-1.6 3.7-3.7 0-2-1.4-3.5-3.4-3.5-.3 0-.6 0-.9.1.4-1.9 2-3.6 3.9-4.5l-1.2-1.4zm9.2 0c-3.9 1.6-6.3 4.6-6.3 8.4 0 2.8 1.9 4.6 4.2 4.6 2.1 0 3.7-1.6 3.7-3.7 0-2-1.4-3.5-3.4-3.5-.3 0-.6 0-.9.1.4-1.9 2-3.6 3.9-4.5l-1.2-1.4z" />
  </svg>
)

export const LoopIcon = (p) => (
  <I {...p}>
    <path d="M17 2.5l3 3-3 3" />
    <path d="M20 5.5H8a4.5 4.5 0 0 0 0 9h1" />
    <path d="M7 21.5l-3-3 3-3" />
    <path d="M4 18.5h12a4.5 4.5 0 0 0 0-9h-1" />
  </I>
)

export const BoltIcon = (p) => (
  <I {...p}>
    <path d="M13 2L4.5 14h6L11 22l8.5-12h-6z" />
  </I>
)

export const MailIcon = (p) => (
  <I {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3.5 7l8.5 6 8.5-6" />
  </I>
)

export const ChartIcon = (p) => (
  <I {...p}>
    <path d="M4 20V4" />
    <path d="M4 20h16" />
    <path d="M8 20v-6M13 20V8M18 20v-9" />
  </I>
)

export const BotIcon = (p) => (
  <I {...p}>
    <rect x="4" y="7" width="16" height="11" rx="3" />
    <path d="M12 3v4" />
    <circle cx="9" cy="12" r="1" />
    <circle cx="15" cy="12" r="1" />
    <path d="M9 16h6" />
  </I>
)

export const ThermometerIcon = (p) => (
  <I {...p}>
    <path d="M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0z" />
    <path d="M12 9v6" />
  </I>
)

export const GaugeIcon = (p) => (
  <I {...p}>
    <path d="M4 16a8 8 0 1 1 16 0" />
    <path d="M12 16l3.5-4.5" />
  </I>
)

export const PlugIcon = (p) => (
  <I {...p}>
    <path d="M9 11V6a3 3 0 0 1 6 0v5" />
    <path d="M8 11h8v2a4 4 0 0 1-4 4v3" />
    <path d="M8 15h0" />
  </I>
)

export const SunIcon = (p) => (
  <I {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 3v1.5M12 19.5V21M3 12h1.5M19.5 12H21M5.6 5.6l1 1M17.4 17.4l1 1M18.4 5.6l-1 1M6.6 17.4l-1 1" />
  </I>
)

export const EyeIcon = (p) => (
  <I {...p}>
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
    <circle cx="12" cy="12" r="2.6" />
  </I>
)

export const SitemapIcon = (p) => (
  <I {...p}>
    <rect x="3" y="3" width="6" height="6" rx="1.5" />
    <rect x="15" y="3" width="6" height="6" rx="1.5" />
    <rect x="9" y="15" width="6" height="6" rx="1.5" />
    <path d="M6 9v3h12V9M12 13v2" />
  </I>
)

export const CloseIcon = (p) => (
  <I {...p}>
    <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" />
  </I>
)

export const BookmarkIcon = (p) => (
  <I {...p}>
    <path d="M6.5 3.5h11V20.5L12 17l-5.5 3.5z" />
  </I>
)

export const PlayIcon = (p) => (
  <I {...p}>
    <path d="M8 5v14l11-7z" />
  </I>
)

export const PauseIcon = (p) => (
  <I {...p}>
    <path d="M9 6v12M15 6v12" />
  </I>
)

export const SlidersIcon = (p) => (
  <I {...p}>
    <path d="M6 4v5M6 13v7M12 4v2M12 10v10M18 4v7M18 15v5" />
    <path d="M3 13h6M9 10h6M15 15h6" />
  </I>
)
