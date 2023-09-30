<template>
  <component :is="icon" />
</template>

<script lang="ts" setup>
const props = defineProps<{ name: string }>()
  const icon = computed(() =>
    defineAsyncComponent(() => import(`@/assets/icons/${props.name}.svg`))
  )
</script>
