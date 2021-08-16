<template>
  <!-- Refactor Heading component using render function -->
  <Heading :level="4" />
</template>

<script>
import Heading from "@/components/Heading.vue";

export default {
  name: "Exercise1",
  components: {
    Heading,
  },
};
</script>
