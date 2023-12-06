<script>

import axios from 'axios';
import { store } from './data/store';
import ProjectsContainer from './components/ProjectsContainer.vue';
import Loader from './components/partials/Loader.vue';
import Paginator from './components/partials/Paginator.vue';

export default {
  name:'App',
  components:{
    ProjectsContainer,
    Loader,
    Paginator
  },
  data(){
    return {
      isLoading: false,
      links:[]
    }
  },
  methods: {
    getApi(){
      axios.get(store.apiUrl + 'projects')
      .then(results => {
          this.isLoading = true;
          store.projects = results.data.data;
          this.links = results.data.links;
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
      <ProjectsContainer />
      <Paginator :links="links" />
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
