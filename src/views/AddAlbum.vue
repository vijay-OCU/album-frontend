<template>
    <h1>Album Add</h1>
    <h4>{{ message }}</h4>
    <v-form>
       <v-text-field
            label="Title"
            v-model="Album.title"
        />
        <v-text-field
            label="Language"
            v-model="Album.language"
        />
         <v-text-field
            label="Genre"
            v-model="Album.genre"
        />
        <v-text-field
            label="Artist"
            v-model="Album.artist"
        />
        <v-row justify="center">
            <v-col col="2"> </v-col>
            <v-col col="2">
                <v-btn color="success" @click="saveAlbum()"
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
import AlbumDataService from "../services/AlbumDataService";
export default {
  name: "add-Album",
  data() {
    return {
      Album: {
        id: null,
        title: "",
        language: "",
        genre: false
      },
      message: "Enter data and click save"
    };
  },
  methods: {
    saveAlbum() {
      var data = {
        title: this.Album.title,
        language: this.Album.language
      };
      AlbumDataService.create(data)
        .then(response => {
          this.Album.id = response.data.id;
          console.log("add "+response.data);
          this.$router.push({ name: 'albums' });
        })
        .catch(e => {
          this.message = e.response.data.message;
        });
    },
    cancel(){
        this.$router.push({ name: 'albums' });
    }
  }
}

</script>
<style>

</style>