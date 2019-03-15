<template>
  <p>asdsad</p>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    items: [
      { title: "Home", icon: "dashboard" },
      { title: "About", icon: "question_answer" }
    ]
  }),

  beforeMount() {
    this.$store.commit("setDrawer", true);
  },
  props: {
    source: String
  }
};
</script>
