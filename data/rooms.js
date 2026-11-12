// 가상 데이터. 실제 사람·가게가 아니다.
// day: 0 = 오늘, 1 = 내일. time이 "+1"이면 지금부터 1시간 뒤(30분 단위)로 바뀐다.
const SEED_ROOMS = [
  { id: "s1", day: 0, time: "+1", area: "강남역", place: "예시 돈까스집", menu: "돈까스", cap: 4, members: ["가상 사용자 1", "가상 사용자 2"], note: "말 없이 먹어도 괜찮아요." },
  { id: "s2", day: 0, time: "+2", area: "삼육보건대 앞", place: "예시 김치찌개집", menu: "찌개·전골", cap: 3, members: ["가상 사용자 3"], note: "2인분부터라 같이 드실 분 구해요." },
  { id: "s3", day: 0, time: "+3", area: "회기역", place: "예시 고깃집", menu: "고기", cap: 4, members: ["가상 사용자 4", "가상 사용자 5", "가상 사용자 6"], note: "삼겹살, 한 자리 남았어요." },
  { id: "s4", day: 0, time: "+2", area: "홍대입구", place: "예시 라멘집", menu: "면", cap: 3, members: ["가상 사용자 7", "가상 사용자 8", "가상 사용자 9"], note: "" },
  { id: "s5", day: 1, time: "12:00", area: "삼육보건대 앞", place: "예시 학생식당", menu: "한식", cap: 4, members: ["가상 사용자 10"], note: "공강 시간에 학식 같이 먹어요." },
  { id: "s6", day: 1, time: "12:30", area: "강남역", place: "예시 샤브샤브집", menu: "찌개·전골", cap: 4, members: ["가상 사용자 11", "가상 사용자 12"], note: "" },
  { id: "s7", day: 1, time: "18:30", area: "회기역", place: "예시 닭갈비집", menu: "고기", cap: 4, members: ["가상 사용자 13"], note: "퇴근하고 닭갈비 드실 분." },
  { id: "s8", day: 1, time: "19:00", area: "홍대입구", place: "예시 파스타집", menu: "양식", cap: 3, members: ["가상 사용자 14", "가상 사용자 15"], note: "" },
  { id: "s9", day: 1, time: "13:00", area: "건대입구", place: "예시 마라탕집", menu: "중식", cap: 4, members: ["가상 사용자 16", "가상 사용자 17"], note: "맵기 2단계로 먹어요." },
  { id: "s10", day: 1, time: "18:00", area: "건대입구", place: "예시 초밥집", menu: "일식", cap: 3, members: ["가상 사용자 18"], note: "" }
];
const AREAS = ["강남역", "삼육보건대 앞", "회기역", "홍대입구", "건대입구"];
const MENUS = ["한식", "찌개·전골", "고기", "돈까스", "면", "중식", "일식", "양식"];
