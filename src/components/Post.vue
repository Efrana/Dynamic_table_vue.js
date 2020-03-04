<template>
<div>
  <body>
    <h2>Table</h2>
    <table>
      <Header v-bind:headerContent="headerContent"></Header>
      <Body v-bind:content="{columns: headerContent,rows: body}"></Body>
    </table>
  </body>
</div>
</template>
<script>
import Header from './Header'
import Body from './Body'
export default {
  name: 'post',
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
        { name: 'maysha', age: '30', country: 'USA' },
        { name: 'Jannat', age: '20', country: 'USA' },
        { name: 'Farhana', age: '40', country: 'USA' }
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
