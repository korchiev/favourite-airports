<template>
  <div class="wrapper">
    <p>{{ $store.getters.fullName }}</p>
    <div v-for="airport in airports" :key="airport.abbreviation">
      <airport-card :airport="airport" @click="addToFavourites(airport)"/>
    </div>
    <h2 v-if="$store.state.favorites.length">Favorites</h2>
    <div v-for="airport in $store.state.favorites" :key="airport.abbreviation">
      <airport-card :airport="airport" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
//import { useStore } from 'vuex'
import allAirports from '@/data/airports.js'
import AirportCard from '@/components/AirportCard.vue'
import store from './store'

export default {
  components: {
    AirportCard
  },
  setup() {
    const airports = ref(allAirports)
    //const store = useStore()
    const addToFavourites = (payload)=>{
      console.log(payload)
      store.dispatch("addToFavorites", payload)
    }
    
    return { airports, 
       addToFavourites 
      
     }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  max-width: 960px;
  margin: 0 auto;
}

p,
h3 {
  grid-column: span 3;
}
</style>