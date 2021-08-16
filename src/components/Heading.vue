<template>
  <h1 v-if="level === 1">
    Hello!
  </h1>
  <h2 v-else-if="level === 2">
    Hello!
  </h2>
  <h3 v-else-if="level === 3">
    Hello!
  </h3>
  <h4 v-else-if="level === 4">
    Hello!
  </h4>
  <h5 v-else-if="level === 5">
    Hello!
  </h5>
  <h6 v-else-if="level === 6">
    Hello!
  </h6>
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      default: 1,
    },
  },
};
</script>
