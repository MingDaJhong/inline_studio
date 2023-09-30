import xss from 'xss'

export default defineNuxtPlugin(() => ({
  provide: {
    customXss: () => {
      const options = { whiteList: { span: ['class', 'style'], br: [] } }

      const customXss = new xss.FilterXSS(options)

      return customXss
    }
  }
}))

