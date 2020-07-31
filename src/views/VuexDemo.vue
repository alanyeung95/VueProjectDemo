<!-- This is the example from https://flaviocopes.com/vuex/#introduction-to-vuex -->
<template>
  <div id="vueDemo">
    <Form />
    <Display />
  </div>
</template>

<script>
import Form from "@/components/Form";
import Display from "@/components/Display";

export default {
  name: "VueDemo",
  components: {
    Form,
    Display
  }
};
</script>
