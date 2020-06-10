<template>
  <div>
    <v-btn class="DownloadButton" small @click="handleDownloadButtonClick">
      <v-icon dark>folder_open</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import { downloadContent } from "@/utils/file";

import Vue from "vue";
import Vuetify from "vuetify";

@Component({})
export default class DownloadButton extends Vue {
  public handleDownloadButtonClick() {
    downloadContent("e200e685-2da8-4470-b848-59f363a526b2");
  }
}
</script>
