<script>
import {store} from '../data/store';
import ProjectCard from './partials/ProjectCard.vue';

  export default {
    name: 'ProjectsContainer',
    components: {
      ProjectCard,
      
    },
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
  <div class="not-found" v-if="store.projects.length === 0">
    <h1>No projects found!</h1>
  </div>
  
  <div class="project-list">
    <ProjectCard
        v-for="project in store.projects" :key="project.id"
        :name = "project.name"
        :description = "project.description"
        :type = "project.type?.name"
        :tech = "project.technologies"
        :slug = "project.slug"
        /> 
  </div>
</template>


<style lang="scss" scoped>
.not-found {
  margin: 100px;
  color: red;
}


h1 {
  text-align: center;
  margin: 20px 0;
}
.projects-list {
  padding: 10px;
 
}
</style>