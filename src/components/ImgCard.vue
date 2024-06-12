<template>
  <div>
    <v-row no-gutters justify="center px-16 py-16 ">
      <v-col cols="12" md="6" class="d-flex align-center">
        <v-card class="text-center px-16 py-16">
          <v-img
            src="https://scontent.fbkk27-1.fna.fbcdn.net/v/t39.30808-6/426427419_2703169963169908_5256385966050042830_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHp0CZ0eNOdk9NmIBgbUYWwsaj9Axxj5q2xqP0DHGPmrZuqgWUZyqM3pCkB5xPwzE63QWATnB73ebFKeToRT0Q6&_nc_ohc=x0x4M9LzDEgQ7kNvgFlA020&_nc_ht=scontent.fbkk27-1.fna&oh=00_AYC6Vl6dCgJU7kgRQhQPA4r9piLLmJckHLr0xVJ43RDuQw&oe=666DEAAC"
            class="image"
          ></v-img>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" class="d-flex justify-content: center">
        <v-card class="text-left px-14 py-14">
          <v-card-title class="text-large">
            <h3 style="font-weight: bold">Lakkana Thammathawon (Khim)</h3>
          </v-card-title>
          <v-card-text>
            <div class="content">
              <div>
                <h3 style="font-weight: bold">Age:</h3>
                <p>22 years old</p>
              </div>
              <div>
                <h3 style="font-weight: bold">Date of Birth:</h3>
                <p>October 10, 2001</p>
              </div>
              <div>
                <h3 style="font-weight: bold">Major/Faculty, University:</h3>
                <p>
                  Information Technology, Faculty of Science, Naresuan
                  University
                </p>
              </div>
              <div>
                <h3 style="font-weight: bold">Hobbies:</h3>
                <p>Listening to music, watching series, photographing cafes</p>
              </div>
              <div>
                <h3 style="font-weight: bold">Special Skills:</h3>
                <p>Playing game, Watch Korean series, listen to music</p>
              </div>
              <div>
                <h3 style="font-weight: bold">Future Goals:</h3>
                <p>
                  To work in the field of information technology and become a
                  professional software developer
                </p>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
  
  <script>
export default {};
</script>
  
  <style>
.image {
  width: 500px;
  height: 500px;
}

.text-large {
  font-size: 20px;
}

/* เพิ่มความกว้างของกรอบการ์ดให้เท่ากับกัน */
.v-row {
  display: flex;
}

.v-col {
  flex: 1;
}

.d-flex {
  display: flex;
}

.align-center {
  align-items: center;
}
</style>
  