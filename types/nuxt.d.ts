import { Context, NuxtAppOptions } from '@nuxt/types'

export interface INuxtAppOptions extends NuxtAppOptions {
  $cookies: any
}

export interface IContext extends Context {
  app: INuxtAppOptions
  userAgent: string
}

declare global {
  interface Window {
    gtag: any
    fbq: any
    startShareCb: (_: string) => void
    queryAlarmCb: (_: string) => void
    queryTrustedCountCb: (_: string) => void
    clogQueue: { event: string }[]
  }
}
