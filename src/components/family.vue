<template>
    <div class="root">
        <div class="container">
            <div class="nav">
                <ul>
                    <li class="nav_name" v-for="(item,index) in slideList" @mouseover="change(index)">
                        {{item.nav}}
                    </li>
                </ul>
            </div>
            <div class="pages">
                <div class="home_container">
                    <transition-group tag="ul" name="list">
                        <li v-for="(list,index) in slideList" :key="index" v-show="index === currentIndex" @mouseenter="stop" @mouseleave="go" :class="list.dise">
                            <!--<a :href="list.clickUrl">
                                  <img :src="list.image" :alt="list.desc" class="slidepic">
                            </a>-->
                        </li>
                    </transition-group>
                </div>
            </div>
            <div class="story_box">
                <transition-group tag="ul" name="story">
                    <li class="story" v-for="(story,index) in slideList" :key="index" v-show="index === currentIndex" @mouseenter="stop" @mouseleave="go"> 
                        <p :class="story.dise">{{story.story}}</p> 
                    </li>
                </transition-group>
            </div>
        </div>
    </div>
</template>

<style scoped>

*{
    margin: 0;
    padding: 0;
}
.root {
    font-family:'Times New Roman', Times, serif;
}
.container {
    display: flex;
}
.nav ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #181c1d;
    height: 234px;
}
.nav ul li {
    padding: 5px 12px 5px 13px;
}
.nav_router {
    text-decoration: none;
    color: rgb(17, 11, 32);
}
.nav_router:active {
    color: rgb(17, 11, 32);
}
.nav_name {
  cursor: pointer;
  padding:0 30px;
  color: #c1c0c0;
}
.nav_name:hover {
    background-color: #0f0f14;
    color: #dadada;
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
.slide_story {
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
.story_box {
    position: relative;
    height: 234px;
    width: 100%;
    overflow: hidden;
}
.story_box ul {
    list-style-type: none;
}
.story_box ul li {
    position: absolute;
}
.story {
    font-size: 50px;
    height: 100%;
    width: 100%;
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
.story-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.story-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%)
}

.story-enter {
  transform: translateX(100%)
}

.story-leave {
  transform: translateX(0)
}
.tully {
    background-color: #00163c;
    color: #c1c0c0;
    height: 100%;
}
.targaryen {
    background-color: #140403;
    color: #cf381b;
    height: 100%;
}
.stark {
    background-color: #e1ded6;
    color: #140403;
    height: 100%;
}
.lannister {
    background-color: #9d2414;
    color: #efb42c;
    height: 100%;
    
}
.greyjoy {
    background-color: #080803;
    color: #fac935;
    height: 100%;
}
.baratheon {
    background-color: #efb42c;
    color: #080803;
    height: 100%;
}
.arryn {
    background-color: #141b51;
    color: #d2cdb9;
    height: 100%;
}
.home_container .tully {
    background-image: url("../images/tully.jpg");
    background-size: 312px 234px;
}
.home_container .targaryen {
    background-image: url("../images/targaryen.jpg");
    background-size: 312px 234px;
}
.home_container .stark {
    background-image: url("../images/stark.jpg");
    background-size: 312px 234px;
}
.home_container .lannister {
    background-image: url("../images/lannister.jpg");
    background-size: 312px 234px;
}
.home_container .greyjoy {
    background-image: url("../images/greyjoy.jpg");
    background-size: 312px 234px;
}
.home_container .baratheon {
    background-image: url("../images/baratheon.jpg");
    background-size: 312px 234px;
}
.home_container .arryn {
    background-image: url("../images/arryn.jpg");
    background-size: 312px 234px;
}
</style>

<script>
export default {
  name: 'family',
  data () {
      return {
          links: [],
          slideList:[
            {
                "clickUrl" : '#',
                "dise" : "tully",
                //"image" : "../assets/tully.28bbbc7.jpg",
                "nav" : "Tully",
                "story" : "Family, Duty, Honor  家族、责任、光荣流传",
                "color" : "black"
            },
            {
                "clickUrl" : '#',
                "dise" : "targaryen",
                //"image" : "../assets/targaryen.362adf9.jpg",
                "nav" : "Targaryen",
                "story" : "Fire and Blood  血火同源",
                "color" : "white"
            },
            {
                "clickUrl" : '#',
                "dise" : "stark",
                //"image" : "../assets/stark.4d9f732.jpg",
                "nav" : "Stark",
                "story" : "Winter is coming   凛冬将至",
                "color" : "black"
            },
            {
                "clickUrl" : '#',
                "dise" : "lannister",
                //"image" : "../assets/lannister.9357d15.jpg",
                "nav" : "Lannister",
                "story" : "Hear Me Roar!  听我怒吼！",
                "color" : "black"
            },
            {
                "clickUrl" : '#',
                "dise" : "greyjoy",
                //"image" : "../assets/greyjoy.a1a1fc7.jpg",
                "nav" : "Greyjoy",
                "story" : "We Do Not Sow  强取胜于苦耕",
                "color" : "black"
            },
            {
                "clickUrl" : '#',
                "dise" : "baratheon",
                //"image" : "../assets/baratheon.b35bbdc.jpg",
                "nav" : "Baratheon",
                "story" : "Ours Is the Fury  怒火燎原",
                "color" : "black"
            },
            {
                "clickUrl" : '#',
                "dise" : "arryn",
                //"image" : "../assets/arryn.63229b6.jpg",
                "nav" : "Arryn",
                "story" : " As High as Honor  高如荣誉",
                "color" : "black"
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
        },
        go() {
            this.timer = setInterval(() => {
                this.autoPlay()
            }, 4000)
        },
        stop() {
            clearInterval(this.timer)
            this.timer = null
        },
  }
  
}
</script>
