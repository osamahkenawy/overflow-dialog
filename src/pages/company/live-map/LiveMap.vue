<template>
  <v-app>
    <v-btn color="third">Primary Button</v-btn>

    <SubSidebar>
      <p>Content inside the sidebar!</p>
    </SubSidebar>
  </v-app>
</template>
<script setup>
defineProps({
  msg: String,
});
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
