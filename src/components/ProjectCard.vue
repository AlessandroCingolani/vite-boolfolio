<script>
import {store} from '../data/store';
  export default {
    name: 'ProjectsComponent',
    data() {
      return {
        store
      }
    },
    computed: {},
    mounted() {},
    methods: {}
  }
</script>



<template>
  <h1>Projects</h1>
  <div class="projects-list" v-for="(project, index) in store.projects" :key="project.id">
      <h3>{{ index +1 }} {{project.name}}</h3>
      <p v-html="project.description"></p>
  </div>
</template>


<style lang="scss" scoped>

h1 {
  text-align: center;
  margin: 20px 0;
}
.projects-list {
  padding: 10px;
  margin: 15px 0;
  border: 1px solid black;
  border-radius: 5px;
}
</style>