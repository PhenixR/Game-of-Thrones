<template>
    <div class="root">
        <header>
            <img src="../images/headerbg.jpg" class="herderbg">
        </header>
        <div class="nav">
            <router-link v-for="routerurl in slideList" class="nav_router" :to="routerurl.path">
                <span class="nav_link" v-for="(item,index) in slideList" :class="{'active':index===currentIndex}" @mouseover="change(index)">
                    {{item.nav}}
                </span>
            </router-link>
        </div>
        <div class="pages">
            <div class="home_container">
                <transition-group tag="ul" name="list">
                    <li v-for="(list,index) in slideList" :key="index" v-show="index === currentIndex">
                        <a :href="list.clickUrl">
                            <img :src="list.image" :alt="list.desc" class="slidepic">
                        </a>
                    </li>
                </transition-group>
                <img src="../images/tully.jpg" alt="">
                <img src="../images/targaryen.jpg" alt="">
                <img src="../images/stark.jpg" alt="">
                <img src="../images/slidepic.jpg" alt="">
                <img src="../images/lannister.jpg" alt="">
                <img src="../images/greyjoy.jpg" alt="">
                <img src="../images/baratheon.jpg" alt="">
                <img src="../images/arryn.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<style>
*{
    margin: 0;
    padding: 0;
}
.herderbg {
    height: 400px;
    width: 100%;
    display: block;
    filter: contrast(80%)
}
.nav {
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: #b5843c;
}
.nav_router {
    text-decoration: none;
    color: rgb(17, 11, 32);
}
.nav_router:active {
    color: rgb(17, 11, 32);
}
.nav_link {
  cursor: pointer;
  padding: 0 30px;
}
.nav_link:hover {
    background-color: #cf8f2e;
}
.home_container {
    position: relative;
    height: 234px;
    width: 312px;
    overflow: hidden;
    
}
.slidepic {
    width: 100%;
    height: 100%;
}
.home_container ul {
  width: 100%;
  height: 100%;
  list-style-type: none;
  overflow: hidden;
  padding: 0;
}
.home_container ul li {
    position: absolute;
    width: 312px;
    height: 234px;
}
.list-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.list-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%)
}

.list-enter {
  transform: translateX(100%)
}

.list-leave {
  transform: translateX(0)
}
</style>

<script>
export default {
  name: 'itemcontainer',
  data () {
      return {
          links: [],
          slideList:[
            {
                "clickUrl" : '#',
                "dise" : "tully",
                "image" : "/static/img/tully.28bbbc7.jpg",
                "nav" : "Home",
                "path" : ".."
            },
            {
                "clickUrl" : '#',
                "dise" : "targaryen",
                "image" : "/static/img/targaryen.362adf9.jpg",
                "nav" : "Martin"
            },
            {
                "clickUrl" : '#',
                "dise" : "stark",
                "image" : "/static/img/stark.4d9f732.jpg",
                "nav" : "Characters"
            },
            {
                "clickUrl" : '#',
                "dise" : "lannister",
                "image" : "/static/img/lannister.9357d15.jpg",
                "nav" : "Season"
            },
            {
                "clickUrl" : '#',
                "dise" : "greyjoy",
                "image" : "/static/img/greyjoy.a1a1fc7.jpg",
                "nav" : "About"
            },
            {
                "clickUrl" : '#',
                "dise" : "baratheon",
                "image" : "/static/img/baratheon.b35bbdc.jpg",
                "nav" : "+"
            },
            {
                "clickUrl" : '#',
                "dise" : "arryn",
                "image" : "/static/img/arryn.63229b6.jpg",
                "nav" : "+"
            }
        ],
        currentIndex: 0,
        timer: ''
      }
      props:['fatherComponent']
  },
  created() {
      this.$nextTick(() => {
          this.timer = setInterval(() => {
              this.autoPlay()
          },5000)
      })
  },
  methods: {
      change(index) {
                this.currentIndex = index
            },
      autoPlay() {
          this.currentIndex++
         if (this.currentIndex > this.slideList.length - 1) {
              this.currentIndex = 0
          }
      }
  }
  
}
</script>
