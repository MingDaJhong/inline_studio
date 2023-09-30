<template>
  <div class="nav-container-size nav-container-padding bg-blue flex items-center justify-between">
    <div class="cursor-pointer">
      LOGO
    </div>
    <div
      class="cursor-pointer"
      @click="switchLocale"
    >
      {{ t('nav.locale') }}
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const switchLocale = () => {
  if (locale.value === 'en') {
    locale.value = 'zh'
  } else {
    locale.value = 'en'
  }
}
</script>

<style lang="scss" scoped>
.nav-container-size {
@apply w-full h-[80px]
}
.nav-container-padding {
@apply px-20
}
</style>
