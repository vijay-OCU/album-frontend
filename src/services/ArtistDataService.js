import http from "../http-common";
class ArtistDataService {
  getAllArtists(artistId) {
    return http.get(`/albums/${artistId}/artists`);
  }
  getArtist(artistId,id) {
    return http.get(`/albums/${artistId}/artists/${id}`);
  }
  createArtist(artistId,data) {
    return http.post(`/albums/${artistId}/artists`, data);
  }
  updateArtist(artistId,id, data) {
    return http.put(`/albums/${artistId}/artists/${id}`, data);
  }
  deleteArtist(artistId,id) {
    return http.delete(`/albums/${artistId}/artists/${id}`);
  }

}
export default new ArtistDataService();