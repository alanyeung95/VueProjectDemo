<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <DemoComponent msgFromParent="Welcome to My Demo Vue.js App" />
    <download-button />
    <create-item class="Demo__CreateItem" />
  </div>
</template>

<script>
// @ is an alias to /src
import DemoComponent from "@/components/DemoComponent.vue";
import DownloadButton from "@/components/DownloadButton";
import CreateItem from "@/components/CreateItem";
import { Component, Prop } from "vue-property-decorator";

export default {
  name: "Demo",
  components: {
    DemoComponent,
    DownloadButton,
    CreateItem
  }
};
</script>

<style lang="scss" scoped>
.Demo {
  &__CreateItem {
    display: inline-block;
    width: 50%;
    text-align: center;
  }
}
</style>
