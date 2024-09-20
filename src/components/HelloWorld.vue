<script setup>
defineProps({
  msg: String,
})

</script>

<template>
   <v-btn color="customColor2">Primary Button</v-btn>

   
  <SubSidebar>
    <p>Content inside the sidebar!</p>
  </SubSidebar>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
