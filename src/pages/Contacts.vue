<script>

import ContactsForm from '../components/partials/ContactsForm.vue';

export default {
  name:'Contacts',
  data(){
    return
  },
  components:{
    ContactsForm
  } 
}
</script>


<template>
<h1>Contacts</h1>
<ContactsForm/>
</template>

<style lang="scss">
  h1 {
    margin-bottom: 30px;
    text-align: center;
  }
</style>