<template>
  <button @click="getOneRoomList()">조회</button>
  <div class="black-bg" v-if="modalpopup.visible">
    <div class="white-bg">
      <h4>{{ modalpopup.title }}</h4>
      <p>{{ modalpopup.content }}</p>
      <button @click="modalpopup.visible = false">닫힘</button>
    </div>
  </div>
  <div class="menu">
    <a v-for="메뉴 in 메뉴들" :key="메뉴">{{ 메뉴 }}</a>
  </div>
  <div class="home">
    <div v-for="(원룸, index) in products" :key="index">
      <img :src="원룸.image" class="room-img">
      <h4 @click="showDetail(index)">{{ 원룸.title }}, {{ index }}</h4>
      <p>{{ 원룸.price }} 원</p>
      <button @click="increase(index)">허위매물신고</button> <span>신고수 : {{ 원룸.reportCount }}</span>
    </div>
  </div>
</template>

<script>
import oneroom from "../assets/oneroom.js";

export default {
  name: 'HomeView',
  data() {
    return {
      메뉴들: ["Home", "Products", "About"],
      modalpopup: { visible: false, title: "", content: "" },
      /* products : [ {name:"역삼동원룸", price:100, 신고수:0, 이미지:require("../assets/image/room0.jpg")},
      {name:"천호동원룸", price:80, 신고수:0, 이미지:require("../assets/image/room1.jpg")},
      {name:"마포구원룸", price:120, 신고수:0, 이미지:require("../assets/image/room2.jpg")}
      ] */
      products: oneroom


    }
  },
  methods: {
    increase(a) {
      this.products[a].reportCount++;
    },
    showDetail(i) {
      this.modalpopup.visible = true;
      this.modalpopup.title = this.products[i].title;
      this.modalpopup.content = this.products[i].content;
    },
    getOneRoomList() {
      this.axios.get("/api/getBoardList")
        .then((res) => {
          console.log(res.staus);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log("항상 마지막에 실행");
        });
    }
  },
  components: {
  }
}

</script>
<style>
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

.room-img {
  width: 100%;
  margin-top: 40px;
}

body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>