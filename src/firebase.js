//firebase.js
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  // firebase 설정과 관련된 개인 정보
  apiKey: "AIzaSyDcpJwyoxKKvV3ZQNIZMTOMdEE1h-J1Y84",
  authDomain: "friend-test-13c2f.firebaseapp.com",
  projectId: "friend-test-13c2f",
  storageBucket: "friend-test-13c2f.appspot.com",
  messagingSenderId: "842805901532",
  appId: "1:842805901532:web:416f4d3c034aef017e9c19",
  measurementId: "G-HK8JLY23BS",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };
