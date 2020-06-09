<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <DemoComponent msgFromParent="Welcome to My Demo Vue.js App" />
    <download-button />
  </div>
</template>

<script>
// @ is an alias to /src
import DemoComponent from "@/components/DemoComponent.vue";
import DownloadButton from "@/components/DownloadButton";
import { Component, Prop } from "vue-property-decorator";

export default {
  name: "Demo",
  components: {
    DemoComponent,
    DownloadButton
  }
};
</script>
