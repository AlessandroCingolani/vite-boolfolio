<script>

import axios from 'axios';
import { store } from './data/store';
import ProjectsComponent from './components/ProjectsComponent.vue';

export default {
  name:'App',
  components:{
    ProjectsComponent
  },
  data(){
    return {
      title: 'Hello Vue!'
    }
  },
  methods: {
    getApi(){
      axios.get(store.apiUrl + 'projects')
      .then(results => {
          console.log(results.data);
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
    <h1>{{ title }}</h1>
    <ProjectsComponent/>
  </div>
</template>



<style lang="scss"> 

</style>
