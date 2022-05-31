<template>
    <h1>Edit Track</h1>
    <h4>{{ message }}</h4>
    <h4>Album : {{albumId}} Track : {{trackId}}</h4>

    <v-form>
       <v-text-field
            label="Title"
            v-model="Track.title"
        />
        <v-text-field
            label="Duration"
            v-model="Track.duration"
        />
        <v-row justify="center">
            <v-col col="2"> </v-col>
            <v-col col="2">
                <v-btn color="success" @click="saveTrack()"
                    >Save</v-btn
                >
            </v-col>
            <v-col col="2">
                <v-btn color="info" @click="cancel()">Cancel</v-btn>
            </v-col>
            <v-col col="2"> </v-col>
        </v-row>
    </v-form>
</template>
<script>
import TrackDataService from "../services/TrackDataService";
export default {
  name: "edit-Track",
  props: {albumId : String,trackId:String},
  data() {
    return {
      Track: Object,
      message: "Enter data and click save"
    };
  },
  methods: {
    retrieveTrack() {
      TrackDataService.getTrack(this.albumId,this.trackId)
        .then(response => {
          this.Track= response.data;
        })
        .catch(e => {
          this.message = e.response.data.message;
        });

    },
    saveTrack() {
      var data = {
        title: this.Track.title,
        duration: this.Track.duration,
        albumId : this.Track.albumId
      };
      TrackDataService.updateLesson(this.Track.albumId,this.Track.id, data)
        .then(response => {
          this.Track.id = response.data.id;
        
         this.$router.push({ name: 'view' , params: { id: this.Track.albumId }} );
        })
        .catch(e => {
          this.message = e.response.data.message;
        });
    },
    cancel(){
        this.$router.push({ name: 'view' , params: { id: this.Track.albumId }} );
    }
  },
    mounted() {
      this.retrieveTrack();
  }
}

</script>
<style>

</style>