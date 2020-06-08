<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <DemoComponent msgFromParent="Welcome to My Demo Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import DemoComponent from "@/components/DemoComponent.vue";

export default {
  name: "Demo",
  components: {
    DemoComponent
  }
};
</script>
