export default defineNuxtPlugin(() => ({
  provide: {
    delay: ms => new Promise(resolve => setTimeout(resolve, ms))
  }
}))
