<template>
  <div>
    <h1>api connect</h1>
    <h1>{{ apidata }}</h1>
    <v-btn color="success" @click="getData()">apicall</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apidata: [],
    };
  },
  methods: {
    getData() {
      this.axios.get('http://localhost:3000/product/api/v1/product').then((response) => {
        console.log(response.data);
        this.apidata = response.data;
      })
    },
    // async getData() {
    //   try {
    //     var { data } = await this.axios.get("http://localhost:3000/product/api/v1/product")
    //     console.log(data);
    //     this.data = data;
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // },
  },
};
</script>

<style>
</style>