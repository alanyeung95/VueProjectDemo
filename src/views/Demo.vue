<template>
  <div class="Home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <DemoComponent msg-from-parent="Welcome to My Demo Vue.js App" />

    <v-tabs :centered="true">
      <v-tab>Add item</v-tab>
      <v-tab>Search item</v-tab>
      <v-tab>Download item</v-tab>
      <v-tab-item>
        <v-card flat>
          <create-item class="Demo__CreateItem" />
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>Contents for Item 2 go here</v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <download-button />
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import DemoComponent from '@/components/DemoComponent'
import DownloadButton from '@/components/DownloadButton'
import { Component, Prop } from 'vue-property-decorator'
import CreateItem from '@/components/CreateItem'

export default {
  name: 'Demo',
  components: {
    DemoComponent,
    DownloadButton,
    CreateItem
  }
}
</script>

<style lang="scss" scoped>
.Demo {
  &__CreateItem {
    display: inline-block;
  }
}

.Home {
  display: inline-block;
}
</style>
