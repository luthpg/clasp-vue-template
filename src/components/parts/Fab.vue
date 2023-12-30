<script setup lang="ts">
const props = defineProps({
  onClick: Function,
  icon: String
})
</script>

<template>
  <div class="ma-4 fab-btn">
    <v-fab-transition>
      <v-btn class="mt-auto pointer-events-initial" color="primary" elevation="8" :icon="props.icon" size="large"
        @click="props.onClick" />
    </v-fab-transition>
  </div>
</template>

<style scoped>
.fab-btn {
  position: fixed;
  bottom: 5px;
  right: 5px;
}
</style>