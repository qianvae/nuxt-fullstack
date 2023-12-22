import online from './online'
import test from './test'
import dev from './dev'

const CONFIG_ENV = process.env.NODE_ENV

const config = ((): any => {
  switch (CONFIG_ENV) {
    case 'production':
      return online
    case 'test':
      return test
    default:
      return dev
  }
})()

const defaultConfigs = {
  isDev: CONFIG_ENV === 'dev',
}

const finalConfig: any = {
  ...defaultConfigs,
  ...config,
  CONFIG_ENV,
}

export default finalConfig
