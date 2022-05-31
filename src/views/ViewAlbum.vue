<template>
    <h2>Album View</h2>
    <h4>{{ message }}</h4>
    <h3> {{track.title}}</h3>
    <v-btn color="success" @click="goEditTrack()"
    >Edit</v-btn>
    &nbsp;
     <v-btn color="success" @click="goAddTrack(this.id)"
    >Add Track</v-btn>

     <v-row>
        <v-col  cols="8"
              sm="2">
            <span class="text-h6">Title</span>
        </v-col>
        <v-col  cols="8"
              sm="4">
            <span class="text-h6">Duration</span>
        </v-col>
        
        
      </v-row>
      <Track Display
        v-for="track in tracks"
        :key="track.id"
        :track="track"
        @deleteTrack="goDeleteTrack(track)"
        @updateTrack="goEditTrack(track)"
    />

   
</template>
<script>
import AlbumDataService from "../services/AlbumDataService";
import TrackDataService from "../services/TrackDataService";
import TrackDisplay from '@/components/TrackDisplay.vue';

export default {
  name: "view-track",
  props: ['id'],
    components: {
        TrackDisplay
    },
  data() {
    return {
      album: {},
      track : [],
      message: "Add, Edit or Delete artists"
    };
  },
  methods: {
    retrieveTracks() {
      AlbumDataService.get(this.id)
        .then(response => {
          this.album= response.data;
          TrackDataService.getAllTracks(this.id)
            .then(response=> {
              this.artists = response.data})
            .catch(e => {
                this.message = e.response.data.message;
              });
            })
        .catch(e => {
          this.message = e.response.data.message;
        });
    },
     goEditAlbum() {
      this.$router.push({ name: 'edit', params: { id: this.id } });
    },
    goEditTrack(track) {
      this.$router.push({ name: 'editTrack', params: { artistId: this.id, artistId: track.id} });
    },
    goAddTrack(albumId) {
      this.$router.push({ name: 'addTrack', params: { albumId: this.id } });
    },

    goDeleteTrack(track) {
      TrackDataService.deleteTrack(track.albumId,track.id)
        .then( () => {
          this.retrieveTracks()
        })
        .catch(e => {
          this.message = e.response.data.message;
        });
    },
    cancel(){
        this.$router.push({ name: 'albums' });
    }
  },
    mounted() {
    this.retrieveTracks();
  }
}
</script>

<style>
</style>