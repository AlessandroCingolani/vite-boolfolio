  
  <script>
  import { store } from '../data/store';
  import axios  from 'axios';
  import Loader from '../components/partials/Loader.vue';
  export default {
    name:'ProjectDetails',
    components: {
      Loader
    },

    data(){
      return {
        slug:'', 
        isLoading: false,
        project:{},

      }
    },
    methods: {
      getSingleProject(slug){
        axios.get(store.apiUrl + 'projects/get-project/' + slug)
      .then(response => {
        this.isLoading = true;
         this.project = response.data;
        })}

    },

    mounted(){
      this.slug = this.$route.params.slug;
      this.getSingleProject(this.slug);
    }
  }
  </script>


<template>
  <Loader v-if="!isLoading" />
  <div v-else class="project-card">
    <h2>Title project: {{ project.name }} </h2>
    <p>Type name</p>
    <p>Tech</p>
    <img src="" alt="">
    <p>Start date</p>
    <p>End date</p>
  </div>
</template>

<style lang="scss" scoped>
  .project-card {
    min-width: 600px;
    min-height: 600px;
    padding: 20px;
    background-color: #d2c8c8;
    border-radius: 10px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

</style>