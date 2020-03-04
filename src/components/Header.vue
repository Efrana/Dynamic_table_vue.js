<template>
  <thead>
    <th v-if="Content.serial">SL</th>
   <th @click="sorting(index)" v-for="(value, index) in Content.head" :key="index">{{value}}</th>
  </thead>
</template>
<script>
export default {
  name: 'Header',
  props: ['Content'],
  methods: {
    sorting (index) {
      console.log(index)
    }
  }
}
</script>
