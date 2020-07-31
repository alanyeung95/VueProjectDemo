<template>
  <div>
    <label for="flavor">Favorite ice cream flavor?</label>
    <input name="flavor" @input="changed" />
  </div>
</template>

<script>
export default {
  methods: {
    changed: function(event) {
      // see how we reference the store using this.$store?
      // This is thanks to the inclusion of the store object in the main Vue component initialization.
      this.$store.commit("change", event.target.value);
    }
  }
};
</script>
