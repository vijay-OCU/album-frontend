<template>
    <h1>Track Add</h1>
    <h4>{{ message }}</h4>
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
  name: "add-track",
  data() {
    return {
      Track: {
        id: null,
        title: "",
        duration: "",
       
      },
      message: "Enter data and click save"
    };
  },
  methods: {
    saveTrack() {
      var data = {
        title: this.Track.title,
        duration: this.Track.duration
      };
      TrackDataService.create(data)
        .then(response => {
          this.Track.id = response.data.id;
          console.log("add "+response.data);
          this.$router.push({ name: 'tracks' });
        })
        .catch(e => {
          this.message = e.response.data.message;
        });
    },
    cancel(){
        this.$router.push({ name: 'view' });
    }
  }
}

</script>
<style>

</style>