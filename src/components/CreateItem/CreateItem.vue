<template>
  <v-form ref="form" lazy-validation>
    <v-text-field v-model="inputName" label="Name" required></v-text-field>

    <v-text-field
      v-model="description"
      label="Description"
      required
    ></v-text-field>

    <v-text-field v-model="modelNumber" label="Model Number"></v-text-field>

    <v-text-field v-model="price" type="number" label="Price"></v-text-field>

    <v-btn color="success" class="mr-4" @click="handleSubmit">Submit</v-btn>
  </v-form>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import Vue from 'vue'
import Vuetify from 'vuetify'

import { CreateItemParams, createItem } from '@/components/services/item'

@Component({})
export default class CreateItem extends Vue {
  public inputName: string = ''
  public description: string = ''
  public modelNumber: string = ''
  public price: string = ''

  async handleSubmit() {
    const response = await createItem({
      name: this.inputName,
      description: this.description,
      modelNumber: this.modelNumber,
      price: parseInt(this.price)
    })
    this.inputName = ''
    this.description = ''
    this.modelNumber = ''
    this.price = ''
  }
}
</script>
