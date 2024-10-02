<template>
  <v-chip small outlined :color="headerBackgroundColor" class="custom-chip">
    <span class="custom-chip-content" :style="{ color: textColor }">
      <v-sheet
        v-if="showShip"
        :height="7"
        :width="7"
        class="custom-chip-icon"
        border
        :color="textColor"
        rounded
      ></v-sheet>
      <span class="custom-chip-text">{{ content }}</span>
    </span>
  </v-chip>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
  },
  showShip: {
    type: Boolean,
    default: false,
  },
  textColor: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  borderColor: {
    type: String,
    required: true,
  },
  headerBackgroundColor: {
    type: String,
    required: true,
  },
});
</script>
<style scoped lang="scss">
.custom-chip {
  max-width: fit-content;
  display: flex;
  margin: 0 !important;
  align-items: center;
  border-radius: 15px;
  border-width: 1px;
  border-style: solid;
  border-color: var(--border-color);
}

.custom-chip-content {
  display: flex;
  align-items: center; /* Vertically center all content */
  gap: 5px; /* Add spacing between children */
}

.custom-chip-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-chip-text {
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center; /* Horizontally and vertically center the text */
}
</style>
