<template>

    <h1>Track List</h1>
    <h4>{{ message }}</h4>
  
      <v-row >
        <v-col  cols="12"
        sm="2">
          <v-btn color = "success"
            @click="searchTitle"
          >
            Search
          </v-btn>
        </v-col>
        <v-col col="12" sm="10">
            <v-text-field density="compact" clearable
              v-model="title"/>
        </v-col> 
      </v-row>
      <v-row>
        <v-col  cols="9"
              sm="2">
            <span class="text-h6">Title</span>
        </v-col>
        <v-col  cols="9"
              sm="4">
            <span class="text-h6">Duration</span>
        </v-col>
        <v-col  cols="9"
              sm="1">
            <span class="text-h6">Edit</span>
        </v-col>
        <v-col  cols="9"
              sm="1">
            <span class="text-h6">View</span>
        </v-col>
        <v-col  cols="9"
              sm="1">
            <span class="text-h6">Delete</span>
        </v-col>
      </v-row>
      <TrackDisplay
        v-for="track in albums"
        :key="track.id"
        :track="track"
        @deleteTrack="goDelete(track)"
        @updateTrack="goEdit(track)"
        @viewTrack="goView(track)"
    />
 
  <v-btn  @click="removeAllTracks">
    Remove All
  </v-btn>
</template>
<script>
import TrackDataService from "../services/TrackDataService";
import TrackDisplay from '@/components/TrackDisplay.vue';
export default {
  name: "albums-list",
  data() {
    return {
      albums: [],
      currentTrack: null,
      currentIndex: -1,
      title: "",
      message : "Search, Edit or Delete Tracks"
    };
  },
  components: {
        TrackDisplay
    },
  methods: {
    goEdit(track) {
      this.$router.push({ name: 'edit', params: { id: track.id } });
    },
    goView(track) {
      this.$router.push({ name: 'view', params: { id: track.id } });
    },
    goDelete(track) {
      TrackDataService.delete(track.id)
        .then( () => {
    
          this.retrieveTracks()
        })
        .catch(e => {
          this.message = e.response.data.message;
        });
    },
    retrieveTracks() {
      TrackDataService.getAll()
        .then(response => {
          this.albums = response.data;
          
        })
        .catch(e => {
          this.message = e.response.data.message;
        });
    },
    refreshList() {
      this.retrieveTracks();
      this.currentTrack = null;
      this.currentIndex = -1;
    },
    setActiveTrack(track, index) {
      this.currentTrack = track;
      this.currentIndex = track ? index : -1;
    },
    removeAllTracks() {
      TrackDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          this.message = e.response.data.message;
        });
    },
    
    searchTitle() {
      TrackDataService.findByTitle(this.title)
        .then(response => {
          this.albums = response.data;
          this.setActiveTrack(null);
          
        })
        .catch(e => {
          this.message = e.response.data.message;
        });
    }
  },
  mounted() {
    this.retrieveTracks();
  }
};
</script>
<style>

</style>