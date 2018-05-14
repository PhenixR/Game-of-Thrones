<template>
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
</template>

<style>

</style>

<script>
import itemcontainer from '../components/itemcontainer'

export default {
  name: 'Home',
  data () {
    return {

    }
  }
}
</script>
