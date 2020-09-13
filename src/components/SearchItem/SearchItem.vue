<template>
  <div>
    <v-form ref="form" lazy-validation>
      <v-text-field
        v-model="description"
        label="Description"
        required
      ></v-text-field>

      <v-btn color="success" class="mr-4" @click="handleSubmit">Search</v-btn>
    </v-form>
    <br />
    <v-data-table
      :headers="headers"
      :items="items"
      :sort-desc="[false, true]"
      multi-sort
    ></v-data-table>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import Vue from 'vue'
import Vuetify from 'vuetify'

import { searchItem, searchAllItems } from '@/components/services/item'

@Component({})
export default class SearchItem extends Vue {
  public description: string = ''

  public headers = [
    {
      text: 'ID',
      align: 'start',
      value: 'id'
    },
    {
      text: 'Name',
      align: 'start',
      value: 'name'
    },
    {
      text: 'Description',
      align: 'start',
      value: 'description',
      sortable: false
    },
    { text: 'Model Number', value: 'modelNumber' },
    { text: 'Price', value: 'price' }
  ]

  public items = [
    {
      id: '',
      name: '',
      description: '',
      modelNumber: '',
      price: ''
    }
  ]

  async handleSubmit() {
    searchItem({
      description: this.description
    }).then(value => {
      var hits = value.hits.hits
      const results = []

      hits.forEach(record => {
        var jsonRecord = {
          id: record._id,
          name: record._source.name,
          description: record._source.description,
          modelNumber: record._source.modelNumber,
          price: record._source.price
        }
        results.push(jsonRecord)
      })
      this.items = results
    })
  }

  mounted() {
    searchAllItems().then(value => {
      var hits = value.hits.hits
      const results = []

      hits.forEach(record => {
        var jsonRecord = {
          id: record._id,
          name: record._source.name,
          description: record._source.description,
          modelNumber: record._source.modelNumber,
          price: record._source.price
        }
        results.push(jsonRecord)
      })
      this.items = results
    })
  }
}
</script>
