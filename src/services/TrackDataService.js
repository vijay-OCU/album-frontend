import http from "../http-common";
class TrackDataService {
  getAllTracks(albumId) {
    return http.get(`/albums/${albumId}/tracks`);
  }
  getTrack(albumId, trackId) {
    return http.get(`/albums/${albumId}/tracks/${trackId}`);
  }
  createTrack(albumId, data) {
    return http.post(`/albums/${albumId}/tracks`, data);
  }
  updateTrack(albumId,trackId, data) {
    return http.put(`/albums/${albumId}/tracks/${trackId}`, data);
  }
  deleteTrack(albumId,trackId) {
    return http.delete(`/albums/${albumId}/tracks/${trackId}`);
  }

}
export default new TrackDataService();