<template>
  <div>
    <h1>Simple Page</h1>
    <h1 v-if="show">{{ name }}</h1>
    <v-btn color="success" @click="show = !show">switch</v-btn>
    <v-btn color="success" @click="callAlert()"> Alert</v-btn>
    <v-row no-gutters>
      <v-col cols="3" v-for="(item, index) in imgset" :key="index">
        <v-card width="300">
          <v-img width="300" :src="item.imglink"></v-img>
          <v-card-title primary-title>
            <v-card-actions>
              <v-btn color="success" @click="callAlertParam(item.name)">
                Alert</v-btn
              >
            </v-card-actions>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12">
        <h1>{{ id }}</h1>
        <v-text-field name="id" label="id" id="id" v-model="id"> </v-text-field>
        <v-btn color="success" @click="callAlertParam(id)">Alert</v-btn>
        <v-btn color="success" @click="setLocal(id)"> Set User</v-btn>
      </v-col>
      <v-col cols="12">
        <simcom :id="id" @callAlertParam="callAlert" />
      </v-col>
    </v-row>
  </div>
</template>
  
  <script>
import simcom from "../components/SimCom.vue";
import { EventBus } from "@/EventBus";
export default {
  components: {
    simcom,
  },
  data() {
    return {
      id: "",
      name: "Tawan",
      show: false,
      imgset: [
        {
          name: "แมววววว ตัวที่แรก",
          imglink:
            "https://i.pinimg.com/236x/ec/88/23/ec88237079284a706a2bd5a3e20b6d0c.jpg",
        },
        {
          name: "แมววววว ตัวที่แรกแต่มาทีหลัง",
          imglink:
            "https://i.pinimg.com/236x/ec/88/23/ec88237079284a706a2bd5a3e20b6d0c.jpg",
        },
      ],
    };
  },
  mounted() {
    EventBus.$on("callAlentz", this.callAlert);
  },
  beforeDestroy() {
    EventBus.$off("callAlentz", this.callAlert);
  },
  methods: {
    callAlert() {
      alert("สวัสดี");
    },
    callAlertParam(item) {
      alert(item);
    },
    setLocal(item) {
      localStorage.setItem("user", item);
      alert("set user complete");
    },
  },
};
</script>
  
  <style>
</style>