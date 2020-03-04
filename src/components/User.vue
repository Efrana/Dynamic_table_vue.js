<template>
<div>
  <body>
    <h2>Table</h2>
    <table>
      <Header v-bind:Content="{head:headerContent, serial:true}"></Header>
      <Body v-bind:content="{columns: headerContent,rows: body, serial:true}"></Body>
    </table>
  </body>
</div>
</template>
<script>
import Header from './Header'
import Body from './Body'
export default {
  name: 'User',
  components: {
    Header,
    Body
  },
  data () {
    return {
      headerContent: {
        name: 'Name',
        country: 'Country',
        age: 'age'
      },
      body: [
        { name: 'Efrana', age: '30', country: 'Bangladesh' },
        { name: 'Jannat', age: '20', country: 'Bangladesh' },
        { name: 'Farhana', age: '40', country: 'Bangladesh' }
      ]
    }
  }
}
</script>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 30%;
}

td,
th {
  border: 3px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
