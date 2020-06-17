declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: any
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string): void => {
  window.gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING, {
    page_path: url
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events

type Event = {
  action: string
  category: string
  label: string
  value?: string
}

export const gaEvent = ({ action, category, label, value }: Event): void => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}
