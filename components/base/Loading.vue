<template>
  <div class="vld-parent">
    <loading :active="isLoading" />
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  props: {
    isLoading: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  components: {
    Loading,
  },
};
</script>
