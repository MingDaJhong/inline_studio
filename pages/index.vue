<template>
  <div class="w-full h-full bg-blue">
    {{ t('index') }}
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
