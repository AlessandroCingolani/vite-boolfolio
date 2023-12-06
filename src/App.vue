<script>

import axios from 'axios';
import { store } from './data/store';
import ProjectCard from './components/ProjectCard.vue';
import Loader from './components/partials/Loader.vue';

export default {
  name:'App',
  components:{
    ProjectCard,
    Loader
  },
  data(){
    return {
      isLoading: false,
    }
  },
  methods: {
    getApi(){
      axios.get(store.apiUrl + 'projects')
      .then(results => {
          this.isLoading = true;
          store.projects = results.data;
        })
      .catch(error => {
          console.log(error);
        })
    }
  },
  mounted(){
    this.getApi();
  }
}
</script>

<template>    
  <div class="container">
    <Loader v-if="!isLoading" />
    <div v-else  class="projects-container">
      <ProjectCard />
    </div>
  </div>
</template>



<style lang="scss"> 

  .projects-container {
    width: 100%;
    height: 100%;
    background-color: aqua;
    border: 1px solid black;
    border-radius: 10px;
    padding: 20px;
    overflow: auto;
  }

</style>
