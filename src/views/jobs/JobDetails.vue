<template>
  <div v-if="job">
    <h1>{{job.title}}</h1>
    <!-- <p>the route params is {{ $route.params.id}} - where id is :id from router index.js</p>
    <p>{{id}}</p>-->
    <p>This job id is {{ job.id}}</p>
    <p>{{ job.details}}</p>
  </div>
  <div v-else>
    <h2>Retriving jobs...</h2>
  </div>
</template>

<script>
  export default {
    // recive props id from route params  and we do not need to
    // get id from params in data - check router index.js
    props:['id'],
    data () {
      return {
        //id: this.$route.params.id
        job: null
      }
    },
    mounted () {
      fetch('http://localhost:3000/jobs/' + this.id)
      .then(res => res.json())
      .then(data => this.job = data)
      .catch(err => console.log(err.message))
    }
  }
</script>

<style lang="scss" scoped>

</style>