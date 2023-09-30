<template>
  <div
    v-if="showOpening"
    class="absolute top-0 left-0 z-10 w-full h-full flex flex-col overflow-hidden"
  >
    <!-- Moving Bars -->
    <div v-for="i in 100" :key="i" class="moving-bar" :style="randomAnimation()" />
    <!-- End Moving Bars -->
  </div>
</template>

<script setup>
const { $delay } = useNuxtApp()

const showOpening = ref(true)

const randomAnimation = () => {
  // Random 1 ~ 3
  const randomDuration = Math.floor(Math.random() * 3) + 1
  // Random 0.3 ~ 0.4
  const randomDelay = 0.2 + Math.random() * 0.1

  const animation = `animation: moving ${randomDuration}s ease; animation-delay: -${randomDelay}s;`

  return animation
}

onMounted(async () => {
  await $delay(2500)

  showOpening.value = false
})
</script>

<style lang="scss">
.moving-bar {
  @apply bg-black w-full h-[1%] translate-x-[100%]
}

@keyframes moving {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
