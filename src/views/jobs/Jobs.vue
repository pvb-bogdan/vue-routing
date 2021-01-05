<template>
  <div class="container">
    <h1>Jobs</h1>
    <div v-if="jobs.length">
      <div v-for="job in jobs" :key="job.id" class="job">
        <router-link :to="{name: 'JobDetails', params: {id: job.id}}"><h2>{{job.title}}</h2></router-link>
      </div>
    </div>
    <div v-else>
      <h2>Loading jobs...</h2>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Jobs',
    data () {
      return {
        jobs: []
      }
    },
    mounted () {
      fetch('http://localhost:3000/jobs/')
      .then((res) => res.json() ).then((data) => this.jobs = data)
      .catch(err => console.log(err.message))
    }
  }
</script>

<style lang="css">
  .container{
    max-width: 900px;
    margin: 50px auto;
    text-align: center;
  }

  .job h2 {
    background: #f4f4f4;
    padding:20px;
    border-radius: 10px;
    margin:10 auto;
    max-width: 600px;
    cursor: pointer;
    color:#444;
  }
  .job h2:hover {
    background: #ddd;
  }
  .job a {
    text-decoration: none;
  }
</style>