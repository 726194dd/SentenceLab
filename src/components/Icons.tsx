export function IconSpeaker() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 9.5v5h3.2L12 18.8V5.2L7.7 9.5H4.5zM15.2 8.6a4.2 4.2 0 0 1 0 6.8M17.6 6.2a7.4 7.4 0 0 1 0 11.6"
      />
    </svg>
  );
}

export function IconRefresh() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 12a7.5 7.5 0 1 1-2.1-5.2M19.5 4.8v4.4h-4.4"
      />
    </svg>
  );
}

export function IconEye() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.8 12s3.4-6.2 9.2-6.2S21.2 12 21.2 12s-3.4 6.2-9.2 6.2S2.8 12 2.8 12z"
      />
      <circle cx="12" cy="12" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function IconStar({ filled = false }: { filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        d="M12 3.8 14.6 9l5.6.8-4.1 4 1 5.5L12 16.7 6.9 19.3l1-5.5-4.1-4L9.4 9 12 3.8z"
      />
    </svg>
  );
}

export function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12.5 10 17.5 19 7.5"
      />
    </svg>
  );
}

export function IconPen() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.2 4.8 19.2 9.8 8.6 20.4H3.6v-5zM12.6 6.4l5 5"
      />
    </svg>
  );
}

export function IconArrowRight() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14M13 6l6 6-6 6"
      />
    </svg>
  );
}

export function IconArrowLeft() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 6l-6 6 6 6"
      />
    </svg>
  );
}

export function IconSettings() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.4 13.5a7.4 7.4 0 0 0 .1-3l1.7-1.2-1.6-2.8-2 .5a7.5 7.5 0 0 0-2.6-1.5L14.7 3h-3.4l-.3 2.5a7.5 7.5 0 0 0-2.6 1.5l-2-.5L4.8 9.3 6.5 10.5a7.4 7.4 0 0 0 0 3L4.8 14.7l1.6 2.8 2-.5a7.5 7.5 0 0 0 2.6 1.5l.3 2.5h3.4l.3-2.5a7.5 7.5 0 0 0 2.6-1.5l2 .5 1.6-2.8-1.7-1.2z"
      />
    </svg>
  );
}

function strokeIcon(d: string) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d={d}
      />
    </svg>
  );
}

export function SceneIcon({ id }: { id: string }) {
  switch (id) {
    case "daily":
      return strokeIcon("M4 11 12 4.5 20 11v8.5h-5.2V14H9.2v5.5H4z");
    case "travel":
      return strokeIcon("M4 12 20.2 4.2 13.2 20 11.2 13.4 4 12zM11.2 13.4 20.2 4.2");
    case "work":
      return strokeIcon("M8 8V6.4A2.4 2.4 0 0 1 10.4 4h3.2A2.4 2.4 0 0 1 16 6.4V8M4.5 8h15v11h-15zM4.5 12h15");
    case "study":
      return strokeIcon("M3.8 10.2 12 6l8.2 4.2L12 14.4 3.8 10.2zM7 12.6v4.2c2 1.6 8 1.6 10 0v-4.2");
    case "social":
      return strokeIcon("M4.6 6.4h10.2a2 2 0 0 1 2 2v5.2a2 2 0 0 1-2 2H9.4L4.6 18.6V6.4z");
    case "shopping":
      return strokeIcon("M6.2 8.2h11.6l-1 11H7.2l-1-11zM9 8.2V6.6A3 3 0 0 1 12 3.6a3 3 0 0 1 3 3v1.6");
    case "dining":
      return strokeIcon("M6 4.5v7M8.6 4.5v7M4.8 4.5v3.4A3.2 3.2 0 0 0 8 11M6 11.5V19.5M15.4 4.5c0 3.2 2.2 3.8 2.2 7v8M17.6 4.5V19.5");
    case "health":
      return strokeIcon("M12 20s-6.8-4.2-8.4-8.2C2.2 8.6 4 6 6.6 6c1.6 0 2.8.9 3.4 2.1C10.6 6.9 11.8 6 13.4 6c2.6 0 4.4 2.6 3 5.8C14.8 15.8 12 20 12 20z");
    default:
      return strokeIcon("M5 7h14v10H5z");
  }
}
