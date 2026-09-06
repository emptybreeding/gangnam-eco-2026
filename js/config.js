// ─────────────────────────────────────────────────────────────
// Firebase 설정
// Firebase 콘솔 > 프로젝트 설정 > 내 앱 > SDK 설정 및 구성 에서 복사해 붙여 넣으세요.
// Realtime Database 를 사용합니다. (databaseURL 이 반드시 포함되어야 합니다)
// ─────────────────────────────────────────────────────────────
export const firebaseConfig = {
  apiKey: "AIzaSyCpNXQvwRcrTRdA4gbWlgdWtThR9eAZTOk",
  authDomain: "gangnam-eco-2026.firebaseapp.com",
  databaseURL: "https://gangnam-eco-2026-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gangnam-eco-2026",
  storageBucket: "gangnam-eco-2026.firebasestorage.app",
  messagingSenderId: "432456051353",
  appId: "1:432456051353:web:1dc31bf84ed17a846c2608",
};

// 관리자 페이지 진입 비밀번호 (클라이언트 측 간단 잠금)
// ※ 실제 보호는 Firebase 데이터베이스 규칙(README 참고)으로 하세요.
export const ADMIN_PASSWORD = "gangnam2026";

// 행사 정보
export const EVENT = {
  title: "2026 강남 환경 대전환 페스티벌",
  date: "2026. 9. 18. (금)",
  place: "코엑스 동측광장",
  question: "환경 대전환, 나의 한마디",
  maxNickname: 10,
  maxMessage: 80,
};

// 전광판 동작 설정
export const BOARD = {
  freshSeconds: 30,        // 새 글이 맨 위에 고정되는 시간
  showMin: 9,  showMax: 16, // 순환 중 글이 보이는 시간(초)
  hideMin: 3,  hideMax: 8,  // 사라진 뒤 다시 나타나기까지(초)
  maxVisible: 14,           // 동시에 보이는 글 최대 개수
  padding: 18,              // 카드 사이 최소 간격(px)
};
