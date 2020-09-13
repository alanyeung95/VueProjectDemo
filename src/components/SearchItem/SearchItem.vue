<template>
  <v-form ref="form" lazy-validation>
    <v-text-field
      v-model="description"
      label="Description"
      required
    ></v-text-field>

    <v-btn color="success" class="mr-4" @click="handleSubmit">Search</v-btn>
  </v-form>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import Vue from 'vue'
import Vuetify from 'vuetify'

import { searchItem } from '@/components/services/item'

@Component({})
export default class SearchItem extends Vue {
  public description: string = ''

  async handleSubmit() {
    const response = await searchItem({
      description: this.description
    })
    console.log(response)
  }
}
</script>
