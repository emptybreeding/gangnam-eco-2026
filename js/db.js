import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getDatabase, ref, push, set, remove, onValue,
  onChildAdded, onChildRemoved, serverTimestamp, query, orderByChild,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { firebaseConfig } from "./config.js";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const messagesRef = ref(db, "messages");
export const featuredRef = ref(db, "featured");

export function addMessage(nickname, text) {
  return push(messagesRef, { nickname, text, createdAt: serverTimestamp() });
}

export function deleteMessage(id) {
  return remove(ref(db, `messages/${id}`));
}

export function setFeatured(id) {
  return set(featuredRef, id ? { id, at: serverTimestamp() } : null);
}

export function watchFeatured(cb) {
  return onValue(featuredRef, (snap) => cb(snap.val()));
}

// 전체 목록 (관리자용) — 최신순 배열로 전달
export function watchAll(cb) {
  return onValue(query(messagesRef, orderByChild("createdAt")), (snap) => {
    const list = [];
    snap.forEach((c) => { list.push({ id: c.key, ...c.val() }); });
    cb(list.reverse());
  });
}

// 추가/삭제 이벤트 (전광판용)
export function watchAdded(cb) {
  return onChildAdded(messagesRef, (snap) => cb({ id: snap.key, ...snap.val() }));
}
export function watchRemoved(cb) {
  return onChildRemoved(messagesRef, (snap) => cb(snap.key));
}
