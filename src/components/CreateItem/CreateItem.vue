<template>
  <v-form ref="form" lazy-validation>
    <v-text-field label="Name" required></v-text-field>

    <v-text-field label="Description" required></v-text-field>

    <v-btn color="success" class="mr-4" @click="handleSubmit">Submit</v-btn>
  </v-form>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import Vue from "vue";
import Vuetify from "vuetify";

import { CreateItemParams, createItem } from "@/components/services/item";

@Component({})
export default class CreateItem extends Vue {
  async handleSubmit() {
    const response = await createItem({
      name: "123",
      description: "hello world!!!!"
    });
    console.log(response);
  }
}
</script>
