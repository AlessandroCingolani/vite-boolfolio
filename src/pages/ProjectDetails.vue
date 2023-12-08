  
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
        this.isLoading = false;
        axios.get(store.apiUrl + 'projects/get-project/' + slug)
      .then(response => {
        if(!response.data.success){
          this.$router.push({ name: 'Error404' });
        }
        this.isLoading = true;
        this.project = response.data.project;
        
        })},
        formattData(data){
          if(data){
            let d = new Date(data);
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            d = new Intl.DateTimeFormat(navigator.language,options).format(d);
            console.log(d);
            return d;
          }
      }

    },
    computed: {
      techList(){
        return this.project.technologies.map(tech => tech.name).join(', ') || 'No technologies';
      },

     
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
    <p><strong>Type:</strong> {{ project.type?.name ?? '-' }}</p>
    <p><strong>Tech:</strong> {{ techList }}</p>
    <div class="img-project">
      <img :src="project.image" alt="">
    </div>
    <p><strong>Start date: </strong>{{ formattData(project.start_date) }}</p>
    <p><strong>End date: </strong>{{ formattData(project.end_date) || 'Work in progress' }}</p>
    <strong>Description:</strong> 
    <p v-html="project.description"></p>
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
    .img-project {
      margin-bottom: 20px;
        img {
          width: 30%;
        }
      }
    h2 {
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 20px;
    }
  }

</style>