import mongoose from "mongoose"; // 몽구스 import

const videoSchema = new mongoose.Schema({
  // Schema 객체 생성
  fileUrl: {type: String, required: true},
  title: { type: String, required: true, trim: true, maxLength: 80 },
  description: { type: String, required: true, trim: true, minLength: 2 },
  createdAt: {
    type: Date,
    required: true,
    default: () => Date.now(),
  },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
  loggedIn: { type: Boolean, default: false },
});

const Video = mongoose.model("Movie", videoSchema);
// 첫번째 파라미터 "Video" = collection명, 두번째 파라미터 videoSchema = 스키마
// 몽구스에서는 첫번째 글자가 대문자인 collection명칭을 사용하지만
// mongoDB에서 조회할 때는 전체 소문자에 복수형으로 조회해야함

export default Video;  
// hello2 Database에 "Video" collection에 연결된 Video 변수 export
