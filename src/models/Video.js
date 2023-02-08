import mongoose from "mongoose"; // 몽구스 import

const videoSchema = new mongoose.Schema({
  // Schema 객체 생성
  title: String,
  description: String,
  createdAt: Date,
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

const Video = mongoose.model("Video", videoSchema);
// 첫번째 파라미터 "Video" = collection명, 두번째 파라미터 videoSchema = 스키마
// 몽구스에서는 첫번째 글자가 대문자인 collection명칭을 사용하지만
// mongoDB에서 조회할 때는 전체 소문자에 복수형으로 조회해야함

export default Video; // hello2 Database에 "Video" collection에 연결된 Video 변수 export
