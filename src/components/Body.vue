<template>
  <tbody>
    <tr v-for="(value, index) in content.rows" :key="index">
      <td v-if="content.serial">{{index+1}}</td>
      <td v-for="(value1,id) in content.columns" :key='id'>
      {{value[id]}}
      </td>
    </tr>
  </tbody>
</template>
<script>
export default {
  name: 'Body',
  props: ['content']

}
</script>
