  <script>
  export default {
    name:'ContactsForm',
    data() {
      return{

     }

    }
  }
  </script>


<template>
 <form>
    <div>
      <label for="name" ><strong>Name</strong> </label>
      <input type="text" id="name" name="name" >
    </div>
    <div>
      <label for="email" ><strong>Email</strong> </label>
      <input type="text" id="email" name="email" >
    </div>
    <div>
      <label for="message" ><strong>Message</strong> </label>
      <textarea id="message" name="message" ></textarea>
    </div>
    
    <button type="submit">Submit</button>
  </form>
</template>


<style lang="scss" scoped>

  form{
    min-width: 500px;
    border: 1px solid black;
    background-color: #d2c8c8;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    input {
      margin: 10px 0;
      display: block;
      width: 100%;
      height: 30px;
      border-radius: 10px;
    }
    textarea {
      display: block;
      height: 200px;
      width: 100%;
      margin: 10px 0;
    }
    button {
      padding:5px 10px ;
      &:hover {
        scale: 1.1;
        cursor: pointer;
      }
    }
  }

</style>