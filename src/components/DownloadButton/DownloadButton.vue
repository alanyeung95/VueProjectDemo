<template>
  <div>
    <v-btn class="DownloadButton" small @click="handleDownloadButtonClick">
      <v-icon dark>folder_open</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";

import Vue from "vue";
import Vuetify from "vuetify";

@Component({})
export default class DownloadButton extends Vue {
  public handleDownloadButtonClick() {
    console.log("testing");
  }
}
</script>
