(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();const ke=8,j={title:"SCHOOL METRICS",subtitle:"철저한 내신관리 시스템",footer:"for 해연중 학생들",creator:"2210 박민호"},ce={apiKey:"AIzaSyB7YJBfYa9zGnUvLD4DFgR5KLiNKuluHJM",authDomain:"school-metrics-fdee3.firebaseapp.com",projectId:"school-metrics-fdee3",storageBucket:"school-metrics-fdee3.firebasestorage.app",messagingSenderId:"378255554733",appId:"1:378255554733:web:01b06dca5b5307860eae24",measurementId:"G-0BL416S3QD"};function q(){return!!(ce.apiKey&&ce.projectId&&ce.appId)}const $t="https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js",G="https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js",X="https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";let se=null,me=null,le=null,be=null;async function tt(){return q()?se||(be||(be=(async()=>{const{initializeApp:e,getApps:t}=await import($t);return se=t().length?t()[0]:e(ce),se})().catch(e=>(console.warn("[firebase] app init failed",e),be=null,se=null,null))),be):null}async function Q(){if(!q())return null;if(me)return me;const e=await tt();if(!e)return null;const{getFirestore:t}=await import(G);return me=t(e),me}async function ye(){if(!q())return null;if(le)return le;const e=await tt();if(!e)return null;const{getAuth:t,setPersistence:a,browserLocalPersistence:i}=await import(X);le=t(e);try{await a(le,i)}catch(n){console.warn("[firebase] auth persistence",n)}return le}function nt(e){const t=(e==null?void 0:e.code)||"";return{"auth/email-already-in-use":"이미 가입된 계정입니다. 로그인하세요.","auth/invalid-email":"이메일 형식이 올바르지 않습니다.","auth/weak-password":"비밀번호는 6자 이상이어야 합니다.","auth/user-not-found":"가입되지 않은 계정입니다. 먼저 회원가입하세요.","auth/wrong-password":"비밀번호가 틀렸습니다.","auth/invalid-credential":"이메일 또는 비밀번호가 올바르지 않습니다.","auth/too-many-requests":"시도가 너무 많습니다. 잠시 후 다시 시도하세요.","auth/network-request-failed":"네트워크 오류입니다. 연결을 확인하세요.","auth/operation-not-allowed":"Firebase에서 이메일/비밀번호 로그인을 켜야 합니다."}[t]||(e==null?void 0:e.message)||"인증에 실패했습니다."}async function Lt(e,t){const a=await ye();if(!a)throw new Error("Firebase가 설정되지 않았습니다.");const{createUserWithEmailAndPassword:i,sendEmailVerification:n}=await import(X);try{const r=await i(a,e,t);try{await n(r.user)}catch(l){console.warn("[firebase] verification mail",l)}return r.user}catch(r){throw r.friendlyMessage=nt(r),r}}async function Et(e,t){const a=await ye();if(!a)throw new Error("Firebase가 설정되지 않았습니다.");const{signInWithEmailAndPassword:i}=await import(X);try{return(await i(a,e,t)).user}catch(n){throw n.friendlyMessage=nt(n),n}}async function Ke(){const e=await ye();if(!e)return;const{signOut:t}=await import(X);await t(e)}async function ve(){const e=await ye();if(!e)return null;if(e.currentUser)return e.currentUser;const{onAuthStateChanged:t}=await import(X);return new Promise(a=>{const i=t(e,n=>{i(),a(n||null)})})}async function It(){const e=await ve();return e?(await e.reload(),e):null}async function Mt(){const e=await ve();if(!e)throw new Error("로그인된 사용자가 없습니다.");const{sendEmailVerification:t}=await import(X);await t(e)}async function xt(e){const t=await ve();if(!t)return;const{updateProfile:a}=await import(X);await a(t,e)}async function Nt(e,t){if(!e)return!1;const a=await Q();if(!a)return!1;const{doc:i,setDoc:n,serverTimestamp:r}=await import(G),l={...t};return Object.keys(l).forEach(d=>{l[d]===void 0&&delete l[d]}),await n(i(a,"userProfiles",e),{...l,updatedAt:r()},{merge:!0}),!0}async function At(e){if(!e)return null;const t=await Q();if(!t)return null;const{doc:a,getDoc:i}=await import(G),n=await i(a(t,"userProfiles",e));if(!n.exists())return null;const r=n.data();return delete r.updatedAt,r}async function Ct(e){const t=await Q();if(!t)return null;const{collection:a,addDoc:i,serverTimestamp:n}=await import(G),r={...e};return Object.keys(r).forEach(d=>{r[d]===void 0&&delete r[d]}),(await i(a(t,"activityLogs"),{...r,createdAt:n()})).id}async function Pt(e=200){const t=await Q();if(!t)return[];const{collection:a,query:i,orderBy:n,limit:r,getDocs:l}=await import(G),d=i(a(t,"activityLogs"),n("at","desc"),r(e));return(await l(d)).docs.map(f=>({id:f.id,...f.data()}))}async function qt(){const e=await Q();if(!e)return 0;const{collection:t,getDocs:a,deleteDoc:i,query:n,limit:r}=await import(G);let l=0;for(;;){const d=await a(n(t(e,"activityLogs"),r(100)));if(d.empty||(await Promise.all(d.docs.map(p=>i(p.ref))),l+=d.size,d.size<100))break}return l}async function Tt(e){const t=await Q();if(!t)return!1;const{doc:a,setDoc:i,serverTimestamp:n}=await import(G),r={...e};return Object.keys(r).forEach(l=>{r[l]===void 0&&delete r[l]}),await i(a(t,"adminSettings","global"),{...r,updatedAt:n()}),!0}async function Dt(){const e=await Q();if(!e)return null;const{doc:t,getDoc:a}=await import(G),i=await a(t(e,"adminSettings","global"));if(!i.exists())return null;const n=i.data();return delete n.updatedAt,n}const Pe="schoolMetricsUserAccount",Rt=new Set(["2024","2025","2026"]),Ot=/^(\d{4})(\d{4})@haeyeon\.ms\.kr$/i,ze=6;function Se(e){const a=String(e||"").trim().toLowerCase().match(Ot);if(!a)return{ok:!1,error:"해연중 계정(@haeyeon.ms.kr) 형식으로 입력하세요."};const i=a[1],n=a[2],r=he(n);return r.ok?Rt.has(i)?{ok:!0,account:`${i}${r.studentId}@haeyeon.ms.kr`,year:i,studentId:r.studentId,grade:r.grade,classNo:r.classNo,number:r.number}:{ok:!1,error:"년도는 2024, 2025, 2026만 가능합니다."}:r}function he(e){const t=String(e||"").trim();if(!/^\d{4}$/.test(t))return{ok:!1,error:"학번은 숫자 4자리여야 합니다. (예: 1111)"};const a=t[0],i=t[1],n=Number(t.slice(2));return["1","2","3"].includes(a)?"12345678".includes(i)?!Number.isInteger(n)||n<1||n>35?{ok:!1,error:"번호는 01~35만 가능합니다."}:{ok:!0,studentId:t,grade:Number(a),classNo:Number(i),number:n}:{ok:!1,error:"학번 둘째 자리(반)는 1~8만 가능합니다."}:{ok:!1,error:"학번 첫 자리(학년)는 1·2·3만 가능합니다."}}function at(e){const t=String(e||"").trim().replace(/\s+/g," ");return t.length<2?{ok:!1,error:"이름은 2글자 이상 입력하세요."}:t.length>20?{ok:!1,error:"이름은 20글자 이하로 입력하세요."}:{ok:!0,displayName:t}}function it(e){return String(e||"").length<ze?{ok:!1,error:`비밀번호는 ${ze}자 이상이어야 합니다.`}:{ok:!0}}function qe(e){return localStorage.setItem(Pe,JSON.stringify(e)),e}function rt(e,t={}){return{account:e.account,year:e.year,studentId:e.studentId,grade:e.grade,classNo:e.classNo,number:e.number,displayName:t.displayName||"",loggedInAt:new Date().toISOString(),viaPassword:!0,...t}}function V(){try{const e=localStorage.getItem(Pe);if(!e)return null;const t=JSON.parse(e);return t!=null&&t.account&&Se(t.account).ok?t:null}catch{return null}}function st(){return!!V()}function lt(){var e;return((e=V())==null?void 0:e.account)||null}function jt(){var e;return((e=V())==null?void 0:e.displayName)||""}function Bt(){var e;return((e=V())==null?void 0:e.studentId)||""}function Te(e=V()){if(!e)return"";const t=[];return e.displayName&&t.push(e.displayName),e.studentId&&t.push(e.studentId),t.join(" · ")||e.account||""}async function ot(e,t){if(e){try{await xt({displayName:t.displayName||""})}catch(a){console.warn("[auth] updateProfile",a)}try{await Nt(e,{displayName:t.displayName||"",studentId:t.studentId||"",year:t.year||"",account:t.account||"",grade:t.grade,classNo:t.classNo,number:t.number})}catch(a){console.warn("[auth] cloud profile",a)}}}async function De(e,{requireVerified:t=!0}={}){const a=e==null?void 0:e.email;if(!a)return await Ke().catch(()=>{}),{ok:!1,error:"계정 이메일을 가져오지 못했습니다."};const i=Se(a);if(!i.ok)return await Ke().catch(()=>{}),i;if(t&&!e.emailVerified)return{ok:!1,needVerify:!0,error:"학교 메일함에서 인증 메일의 링크를 눌러주세요. (스팸함도 확인)",account:i.account};let n=String(e.displayName||"").trim(),r=i.studentId,l=i.grade,d=i.classNo,p=i.number;try{const u=await At(e.uid);if(u!=null&&u.displayName&&(n=String(u.displayName).trim()),u!=null&&u.studentId){const o=he(u.studentId);o.ok&&(r=o.studentId,l=o.grade,d=o.classNo,p=o.number)}}catch(u){console.warn("[auth] load profile",u)}const f=V();if((f==null?void 0:f.account)===i.account&&(!n&&f.displayName&&(n=f.displayName),f.studentId)){const u=he(f.studentId);u.ok&&r===i.studentId&&f.studentId!==i.studentId&&(r=u.studentId,l=u.grade,d=u.classNo,p=u.number)}return{ok:!0,user:qe(rt({...i,studentId:r,grade:l,classNo:d,number:p},{uid:e.uid||null,emailVerified:!!e.emailVerified,displayName:n}))}}async function Ut(e,t,a){if(!q())return{ok:!1,error:"Firebase 설정이 없습니다."};const i=at(a);if(!i.ok)return i;const n=Se(e);if(!n.ok)return n;const r=it(t);if(!r.ok)return r;try{const l=await Lt(n.account,t);return await ot(l.uid,{displayName:i.displayName,studentId:n.studentId,year:n.year,account:n.account,grade:n.grade,classNo:n.classNo,number:n.number}),qe(rt(n,{uid:l.uid,displayName:i.displayName,emailVerified:!1})),{ok:!1,needVerify:!0,registered:!0,account:n.account,displayName:i.displayName,error:"가입되었습니다. 학교 메일함의 인증 링크를 누른 뒤 로그인하세요.",uid:l==null?void 0:l.uid}}catch(l){return{ok:!1,error:l.friendlyMessage||l.message||"회원가입 실패"}}}async function Ht(e,t){if(!q())return{ok:!1,error:"Firebase 설정이 없습니다."};const a=Se(e);if(!a.ok)return a;const i=it(t);if(!i.ok)return i;try{const n=await Et(a.account,t);return await n.reload(),De(n,{requireVerified:!0})}catch(n){return{ok:!1,error:n.friendlyMessage||n.message||"로그인 실패"}}}async function Ft({displayName:e,studentId:t}){const a=V();if(!a)return{ok:!1,error:"로그인이 필요합니다."};const i=at(e);if(!i.ok)return i;const n=he(t);if(!n.ok)return n;const r=qe({...a,displayName:i.displayName,studentId:n.studentId,grade:n.grade,classNo:n.classNo,number:n.number});return await ot(a.uid,{displayName:r.displayName,studentId:r.studentId,year:r.year,account:r.account,grade:r.grade,classNo:r.classNo,number:r.number}),{ok:!0,user:r}}async function _t(){try{const e=await It();return e?De(e,{requireVerified:!0}):{ok:!1,error:"먼저 로그인(비밀번호)을 다시 시도하세요."}}catch(e){return{ok:!1,error:e.message||"인증 상태 확인 실패"}}}async function Wt(){try{return await Mt(),{ok:!0,message:"인증 메일을 다시 보냈습니다. 메일함을 확인하세요."}}catch(e){return{ok:!1,error:e.message||"인증 메일 재전송 실패"}}}async function Gt(){if(!q())return ge(),null;try{const e=await ve();if(!e)return ge(),null;await e.reload();const t=await De(e,{requireVerified:!0});return t.ok?t.user:(ge(),null)}catch(e){return console.warn("[auth] restore",e),ge(),null}}function ge(){localStorage.removeItem(Pe)}const Vt="73357442",Re="schoolMetricsAdminSession",Oe="schoolMetricsAdminSettings",we="schoolMetricsActivityLog",Je="schoolMetricsDeviceId",Kt=500,ae={restUnlockUses:ke,freeGames:!0,standardScale:[{letter:"A",min:90},{letter:"B",min:80},{letter:"C",min:70},{letter:"D",min:60},{letter:"E",min:0}],artsScale:[{letter:"A",min:80},{letter:"B",min:60},{letter:"C",min:0}]};function je(e,t){try{const a=localStorage.getItem(e);return a?JSON.parse(a):t}catch{return t}}function Be(e,t){localStorage.setItem(e,JSON.stringify(t))}function Ue(){let e=localStorage.getItem(Je);return e||(e=`dev-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,localStorage.setItem(Je,e)),e}function de(){return sessionStorage.getItem(Re)==="1"}function zt(e){return String(e)===Vt?(sessionStorage.setItem(Re,"1"),K({type:"admin_login",message:"관리자 로그인"}),!0):!1}function Jt(){sessionStorage.removeItem(Re)}function F(){const e=je(Oe,{});return{...ae,...e,standardScale:e.standardScale||ae.standardScale,artsScale:e.artsScale||ae.artsScale}}function Yt(e){const t={...F(),...e};return Be(Oe,t),K({type:"admin_settings",message:"관리자 설정 변경",detail:e}),q()&&Tt(t).catch(a=>console.warn("[firebase] settings save",a)),t}async function Xt(){if(!q())return F();try{const e=await Dt();if(e&&typeof e=="object"){const t={...ae,...e,standardScale:e.standardScale||ae.standardScale,artsScale:e.artsScale||ae.artsScale};return Be(Oe,t),t}}catch(e){console.warn("[firebase] settings load",e)}return F()}function $e(){return Number(F().restUnlockUses)||ke}function Le(){return de()&&F().freeGames!==!1}function K(e){const t={id:`${Date.now()}-${Math.random().toString(36).slice(2,7)}`,at:new Date().toISOString(),deviceId:Ue(),...e,account:e.account||lt()||"guest",displayName:e.displayName||jt()||"",studentId:e.studentId||Bt()||""},a=je(we,[]);return a.unshift(t),Be(we,a.slice(0,Kt)),q()&&Ct(t).catch(i=>console.warn("[firebase] log",i)),t}function He(){return je(we,[])}async function Qt(){const e=He();if(!q())return{source:"local",logs:e};try{const t=await Pt(300),a=new Map;for(const n of[...t,...e]){const r=n.id||`${n.at}-${n.deviceId}-${n.type}-${n.message}`;a.has(r)||a.set(r,n)}return{source:"firebase",logs:[...a.values()].sort((n,r)=>String(r.at).localeCompare(String(n.at)))}}catch(t){return console.warn("[firebase] fetch logs",t),{source:"local-fallback",logs:e,error:String(t.message||t)}}}async function Zt({cloud:e=!0}={}){if(localStorage.removeItem(we),e&&q())try{await qt()}catch(t){console.warn("[firebase] clear",t)}K({type:"admin_clear_logs",message:"활동 로그 초기화"})}function en(e=He()){return JSON.stringify({exportedAt:new Date().toISOString(),deviceId:Ue(),firebase:q(),settings:F(),logs:e},null,2)}function tn(){return{configured:q(),projectId:ce.projectId||""}}const Fe="schoolMetricsUniqueSubjects";function ct(){try{const e=localStorage.getItem(Fe),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch{return[]}}function nn(e){localStorage.setItem(Fe,JSON.stringify(e))}function an(e){const t=$e(),a=ct(),i=!a.includes(e);return i&&(a.push(e),nn(a)),{isNew:i,uniqueCount:a.length,justUnlocked:i&&a.length>=t}}function _e(){return ct().length}function fe(){return Le()?!0:_e()>=$e()}function rn(){return Math.max(0,$e()-_e())}function sn(){Le()||localStorage.removeItem(Fe)}function dt(){const e=$e(),t=_e(),a=rn();return Le()?"관리자 모드: 미니게임 자유 이용":fe()?`서로 다른 과목 ${t}개 달성! 휴식 미니게임 이용 가능`:`서로 다른 과목 ${a}개 더 계산하면 해금 (${t}/${e})`}const Me=["희망은 좋은 것이다. 어쩌면 가장 좋은 것일지도. — 《쇼생크 탈출》","해야 한다, 아니면 안 된다. 그 중간은 없다. — 《스타워즈》","과거는 과거일 뿐이야. 배울 수만 있다면. — 《라이온 킹》","가장 어두운 시간은 해가 뜨기 직전이다. — 《어벤져스: 엔드게임》","세상에서 중요한 건 내가 누구냐가 아니라, 내가 뭘 하느냐다. — 《배트맨: 다크나이트》","우리에게 주어진 시간을 어떻게 쓸지만 결정하면 된다. — 《반지의 제왕》","아주 작은 존재도 미래를 바꿀 수 있다. — 《반지의 제왕》","자유는 아무 대가 없이 오지 않는다. — 《브레이브하트》","지금 이 순간을 잡아라. — 《데드 포엇 소사이어티》","무엇이든 할 수 있다. — 《쿵푸 판다》","그냥 계속 헤엄쳐. — 《니모를 찾아서》","모든 걸 시도해 봐. — 《주토피아》","두려움을 없애는 방법은 그것과 마주하는 것이다. — 《인사이드 아웃》","뜻이 있는 곳에 길이 있다. — 《아바타》","비가 그친 뒤에는 반드시 맑은 하늘이 온다. — 《날씨의 아이》","나는 이 세계를 이해할 수 없어. 그래도 계속한다. — 《록키》","시련이 없었다면 챔피언도 없다. — 《록키》","인생은 수레바퀴와 같아. 항상 앞으로 나아가야 한다. — 《니모를 찾아서》","이겨야 한다. 어떻게든. — 《친구》","꿈은 거짓말이 아니다. 반드시 이루어질 내일이다. — 《드림하이》","포기하면 그 순간 게임 끝이야, 인생도 마찬가지다. — 《슬램덩크》","죽을 때 후회 없는 인생을 살아라. — 《원피스》","약한 것은 죄가 아니다. 약한 채로 있으면 안 될 뿐. — 《귀멸의 칼날》","막을 때까지 싸워라. — 《진격의 거인》","노력은 배신하지 않는다. — 《하이큐!!》","패배는 패배하지 않는 것보다 낫다. — 《하이큐!!》","시선을 돌리지 마. 앞만 봐. — 《센과 치히로의 행방불명》","살아있는 한 힘을 내라. — 《하울의 움직이는 성》","바람이 분다. 견뎌야 한다. — 《바람의 나라》","상대는 나 자신이다. — 《초속 5센티미터》","포기하지 말 것. 내일이 있으니. — 《드래곤볼》","사람은 누구나 다시 태어날 수 있다. — 《바람의 나라》","아는 것이 힘이다. — 프랜시스 베이컨","천 리 길도 한 걸음부터. — 노자","배우고 또 배우면 어찌 기쁘지 아니하랴. — 공자","백번 듣는 것보다 한 번 보는 것이 낫다. — 공자","세 사람이 길을 가면 반드시 나의 스승이 있다. — 공자","하늘은 큰 뜻을 품은 자에게 먼저 고생을 시킨다. — 맹자","독서는 마음의 양식이다. — 키케로","하늘은 스스로 돕는 자를 돕는다. — 소포클레스","그대가 갈망하는 것을 따르라. — 랄프 왔도 에머슨","겁쟁이는 죽기 전에 여러 번 죽는다. 용감한 자는 한 번만 죽는다. — 셰익스피어","열정 없이는 위대한 것은 이루어지지 않는다. — 게오르크 빌헬름 프리드리히 헤겔","나는 나의 운명을 사랑한다. — 프리드리히 니체","오늘 할 일을 내일로 미루지 마라. — 벤자민 프랭클린","천재는 1%의 영감과 99%의 땀이다. — 토마스 에디슨","실패는 성공의 어머니이다. — 토마스 에디슨","시간은 금이다. — 벤자민 프랭클린","어리석은 자는 경험에서 아무것도 배우지 않는다. — 벤자민 프랭클린","실용적인 것이 가장 시적인 것이다. — 벤자민 프랭클린","깊은 생각 없는 독서는 낮잠과 같다. — 프랜시스 베이컨","인생은 속도가 아니라 방향이다. — 에이브러햄 링컨","성공은 최종적인 것이 아니며, 실패는 치명적인 것이 아니다. — 윈스턴 처칠","가장 위대한 영광은 넘어지지 않는 것이 아니라, 넘어질 때마다 일어서는 것이다. — 넬슨 만델라","용기는 두려움의 부재가 아니라, 두려움에도 행동하는 것이다. — 넬슨 만델라","네가 할 수 있다고 믿든 못 한다고 믿든, 네 말이 맞다. — 헨리 포드","성공의 비결은 시작하는 것이다. — 마크 트웨인","행운은 준비된 자에게 찾아온다. — 루이 파스퇴르","한계란 대부분 마음속에 있는 환상일 뿐이다. — 무하마드 알리","나는 세계 챔피언이다. 내가 그렇다고 말하기 전부터. — 무하마드 알리","항상 갈망하고, 우직하게 나아가라. — 스티브 잡스","당신의 시간은 제한되어 있다. 다른 사람의 인생을 살며 낭비하지 마라. — 스티브 잡스","오늘 나는 죽었다면 무엇을 후회하겠는가. — 스티브 잡스","죽고자 하면 살 것이요, 살고자 하면 죽을 것이니라. — 이순신","한 번도 실수한 적 없는 사람은 새로운 것을 시도한 적이 없는 사람이다. — 알버트 아인슈타인","네가 정말 소중히 여기는 것에 시간을 써라. — 《어린 왕자》","꽃을 단 한 송이라도 내가 직접 가꾸면, 내 세계에 엇비슷한 시간이 흐른다. — 《어린 왕자》","세상에서 가장 강한 사람은 스스로를 이기는 사람이다. — 무라카미 하루키","빛을 보고자 한다면 어둠을 견뎌야 한다. — 무라카미 하루키","사람은 마음먹은 것은 다 이룬다. — 《바보》","고통 없이는 얻는 것도 없다. — 라틴 격언","로마는 하루아침에 이루어지지 않았다. — 속담","연습이 완벽을 만든다. — 속담","배움에는 왕도가 없다. — 유클리드","작은 일에 충실하라. 그곳에 네 힘이 있다. — 루드야드 키플링","가장 큰 위험은 위험을 감수하지 않는 것이다. — 마크 주커버그","인생은 짧고, 예술은 길다. — 히포크라테스","삶을 살아가는 가장 좋은 복수는 성공하는 것이다. — 프랭크 시나트라","피할 수 없으면 즐겨라. — 로버트 엘리엇","포기하지 않는 한, 늦었다고 생각할 때가 가장 빠른 때다. — 속담","꾸준함은 재능을 이긴다. — 속담","반복은 지루하지만, 반복 없는 실력은 환상이다. — 속담","오늘의 노력이 내일의 실력이 된다. — 속담","지금이 가장 빠른 시작이다. — 속담","목표 없는 공부는 방향 잃은 배와 같다. — 속담","모르는 것을 아는 것이 배움의 시작이다. — 속담","실력은 하루아침에 생기지 않는다. — 속담","쉬는 것도 실력이다. 번아웃을 조심하자. — 속담","비교하지 말고, 어제의 나와 겨루자. — 속담","이해가 안 되면 다시 보면 된다. 반복이 답이다. — 속담","시험은 결과일 뿐, 과정이 실력이다. — 속담","1%씩 매일 오르면 37배가 된다. — 속담","모르는 건 부끄러운 게 아니다. 묻지 않는 게 문제다. — 속담","오답 노트 한 장이 교과서 열 페이지보다 강하다. — 속담","할 수 있다고 믿는 순간, 절반은 온 것이다. — 속담","오늘 공부한 만큼, 내일은 덜 불안하다. — 속담"],Ye="schoolMetricsQuoteIndex";function ln(){let e=Number(localStorage.getItem(Ye)||0);const t=Me[e%Me.length];return localStorage.setItem(Ye,String((e+1)%Me.length)),t}const on={1:{label:"1학년",note:"1학년은 2학기부터 내신 성적이 반영됩니다.",subjects:{국어:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"나만의 노트(나노)",weight:15,kind:"perf"}]}}},수학:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"기본도형 탐구 프로젝트",weight:20,kind:"perf"},{label:"평면·입체 도형 탐구",weight:20,kind:"perf"}]}}},사회:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"사회화 자서전 만들기",weight:20,kind:"perf"},{label:"모의 선거",weight:20,kind:"perf"}]}}},과학:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"실험 보고서 작성",weight:20,kind:"perf"},{label:"달의 위상 변화 관찰",weight:20,kind:"perf"}]}}},영어:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"희망 직업 소개",weight:20,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]}}},음악:{semesters:{2:{label:"2학기",items:[{label:"우쿨렐레 연주",weight:50,kind:"perf"},{label:"작곡가 탐구 활동",weight:50,kind:"perf"}]}}},미술:{semesters:{2:{label:"2학기",items:[{label:"스텐실",weight:50,kind:"perf"},{label:"문자도",weight:50,kind:"perf"}]}}},체육:{semesters:{2:{label:"2학기",items:[{label:"경기형 스포츠(축구)",weight:50,kind:"perf"},{label:"기록 도전형(달리기)",weight:50,kind:"perf"}]}}},정보:{semesters:{2:{label:"2학기",items:[{label:"AI 활용",weight:50,kind:"perf"},{label:"디지털 문화 표현",weight:50,kind:"perf"}]}}},"진로와 직업":{semesters:{2:{label:"2학기",items:[{label:"창업 프로젝트",weight:50,kind:"perf"},{label:"진로 디자인",weight:50,kind:"perf"}]}}},기술가정:{semesters:{2:{label:"2학기",items:[{label:"과학·미래기술 보고서",weight:35,kind:"perf"},{label:"에너지 신문 제작",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]}}}}},2:{label:"2학년",subjects:{국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"발표와 듣기",weight:15,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"복합양식 자료를 활용한 글 작성",weight:15,kind:"perf"}]}}},수학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"일차방정식·일차부등식",weight:20,kind:"perf"},{label:"연립일차방정식·일차함수",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"삼각형·사각형의 성질",weight:20,kind:"perf"},{label:"도형의 닮음·피타고라스",weight:20,kind:"perf"}]}}},역사:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"고대 문명 지도 만들기",weight:20,kind:"perf"},{label:"고대사 신문 만들기",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"서양 고대 문화유산 소개",weight:20,kind:"perf"},{label:"유럽 여행 소개 글쓰기",weight:20,kind:"perf"}]}}},과학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"밀도 측정",weight:10,kind:"perf"},{label:"지권 층상구조 모형 제작",weight:10,kind:"perf"},{label:"주기율표 탐구",weight:10,kind:"perf"},{label:"광합성 탐구",weight:10,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"소리의 성질 탐구",weight:10,kind:"perf"},{label:"인체 프로젝트",weight:20,kind:"perf"},{label:"전류,전압,저항 사이의 관계 탐구",weight:10,kind:"perf"}]}}},영어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"},{label:"발명품 소개",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"지역 축제 홍보",weight:20,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]}}},음악:{semesters:{1:{label:"1학기",items:[{label:"우쿨렐레 연주",weight:50,kind:"perf"},{label:"텅드럼 연주",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"펜비트 연주",weight:50,kind:"perf"},{label:"리코더 연주",weight:50,kind:"perf"}]}}},미술:{semesters:{1:{label:"1학기",items:[{label:"세밀화",weight:50,kind:"perf"},{label:"음식 모형 만들기",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"점묘화",weight:50,kind:"perf"},{label:"서양미술사 보고서",weight:50,kind:"perf"}]}}},체육:{semesters:{1:{label:"1학기",items:[{label:"경기형 스포츠(킨볼)",weight:60,kind:"perf"},{label:"도전형(제자리멀리뛰기)",weight:40,kind:"perf"}]},2:{label:"2학기",items:[{label:"경기형 스포츠(배드민턴)",weight:60,kind:"perf"},{label:"건강관리(줄넘기)",weight:40,kind:"perf"}]}}},도덕:{semesters:{1:{label:"1학기",items:[{label:"도덕적 인물 지폐 제작",weight:50,kind:"perf"},{label:"우정 네 컷 만들기",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"정보 카드 뉴스 제작",weight:50,kind:"perf"},{label:"인권 모니터링 제안서",weight:50,kind:"perf"}]}}},중국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 기말고사",weight:40,kind:"exam"},{label:"한어병음 작성",weight:30,kind:"perf"},{label:"중국어 말하기",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 기말고사",weight:40,kind:"exam"},{label:"하루 일과표 만들기",weight:30,kind:"perf"},{label:"중국어 말하기",weight:30,kind:"perf"}]}}},"금융과 미래":{semesters:{2:{label:"2학기",items:[{label:"투자 성향 검사",weight:50,kind:"perf"},{label:"투자 포트폴리오 구성",weight:50,kind:"perf"}]}}},기술가정:{semesters:{1:{label:"1학기",items:[{label:"효과적 의사소통 프로젝트",weight:35,kind:"perf"},{label:"제조 기술 프로젝트",weight:35,kind:"perf"},{label:"자기주도노트 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"균형 잡힌 식단 계획",weight:35,kind:"perf"},{label:"친환경 의복 생활",weight:35,kind:"perf"},{label:"자기주도노트 작성",weight:30,kind:"perf"}]}}}}},3:{label:"3학년",note:"3학년 2학기에는 기말고사가 없습니다.",subjects:{국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"논설문 쓰기",weight:15,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"한 학기 한 권 읽기",weight:30,kind:"perf"},{label:"문장의 짜임 고려해서 자신감 있게 발표",weight:30,kind:"perf"}]}}},사회:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"국가 기관 탐구로 권력 분립 이해",weight:20,kind:"perf"},{label:"국민 경제 지표와 국제 거래 이해",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"인구·도시 문제 탐구",weight:30,kind:"perf"},{label:"농업 산업화·세계화",weight:30,kind:"perf"}]}}},역사:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"고려 정치 변천",weight:20,kind:"perf"},{label:"고려의 문화 및 조선 통치 체제 탐구",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"조선 왕 가상 인터뷰",weight:30,kind:"perf"},{label:"양 난의 이해 및 영정조 정책 탐구",weight:30,kind:"perf"}]}}},도덕:{semesters:{1:{label:"1학기",items:[{label:"1학기 기말고사",weight:40,kind:"exam"},{label:"폭력 예방 논술문 작성",weight:30,kind:"perf"},{label:"사회 정의 실현 논술문 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"환경 보호 제안서",weight:30,kind:"perf"},{label:"실패 이력서 소개",weight:30,kind:"perf"}]}}},수학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"인수분해를 이용한 수의 성질 탐구",weight:20,kind:"perf"},{label:"이차함수 그래프",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"삼각비 개념 보고서",weight:30,kind:"perf"},{label:"원의 성질 문제해결",weight:30,kind:"perf"}]}}},과학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"기상 현상 실험",weight:20,kind:"perf"},{label:"화학 반응의 규칙 탐구",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"세포분열 관찰 실험",weight:30,kind:"perf"},{label:"물체 운동 분석",weight:30,kind:"perf"}]}}},영어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:15,kind:"perf"},{label:"급식 메뉴 프로젝트",weight:15,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"영어 듣기",weight:20,kind:"perf"},{label:"영어독서",weight:20,kind:"perf"},{label:"통계 자료 활용 프로젝트",weight:20,kind:"perf"}]}}},음악:{semesters:{1:{label:"1학기",items:[{label:"칼림바 연주",weight:50,kind:"perf"},{label:"전자드럼 연주",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"노래 부르기",weight:50,kind:"perf"},{label:"디자인사 연구보고서",weight:50,kind:"perf"}]}}},미술:{semesters:{1:{label:"1학기",items:[{label:"포트레이트 드로잉",weight:50,kind:"perf"},{label:"비주얼 리터러시",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"오마주",weight:50,kind:"perf"},{label:"디자인 조사 보고서",weight:50,kind:"perf"}]}}},체육:{semesters:{1:{label:"1학기",items:[{label:"전통 표현(티니클링)",weight:40,kind:"perf"},{label:"플로어볼",weight:60,kind:"perf"}]},2:{label:"2학기",items:[{label:"건강·체력 관리(타바타)",weight:40,kind:"perf"},{label:"배구",weight:60,kind:"perf"}]}}},기술가정:{semesters:{1:{label:"1학기",items:[{label:"생애 설계",weight:35,kind:"perf"},{label:"수송기술 제작",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"스마트폰 앱 만들기",weight:35,kind:"perf"},{label:"적정 기술 사례 조사",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]}}}}}};function ue(e){return on[e]??null}function cn(e){const t=ue(e);return t?Object.keys(t.subjects):[]}function We(e,t){var a;return((a=ue(e))==null?void 0:a.subjects[t])??null}function ut(e,t){const a=We(e,t);return a?Object.keys(a.semesters).map(Number).sort((i,n)=>i-n):[]}function dn(e,t,a){var n;const i=We(e,t);return((n=i==null?void 0:i.semesters[a])==null?void 0:n.items)??[]}function Xe(e,t,a){var n;const i=We(e,t);return((n=i==null?void 0:i.semesters[a])==null?void 0:n.label)??`${a}학기`}function un(e,t,a,i){return`${e}-${t}-${a}-${i}`}function fn(e,t,a){return dn(e,t,a).map((n,r)=>({key:un(e,t,a,r),subject:t,semester:a,label:n.label,weight:n.weight,kind:n.kind}))}function ft(e,t){let a=0,i=0;for(const n of e){const r=t[n.key];if(r===""||r===null||r===void 0)continue;const l=Number(r);Number.isNaN(l)||(a+=n.weight,i+=l*n.weight)}return a===0?null:i/a}function mn(e,t){const a={},i=[];for(const r of e){const l=t[r.key];if(l===""||l===null||l===void 0){i.push(r);continue}const d=Number(l);if(Number.isNaN(d)){i.push(r);continue}a[r.key]=d}const n={...a};for(const r of i)n[r.key]=100;return{average:ft(e,n),remainingCount:i.length}}const bn=["음악","미술","체육"],gn=[{letter:"A",min:90},{letter:"B",min:80},{letter:"C",min:70},{letter:"D",min:60},{letter:"E",min:0}],pn=[{letter:"A",min:80},{letter:"B",min:60},{letter:"C",min:0}];function mt(e){return e.map((t,a,i)=>{const n=i[a-1],r=t.min===0?`${t.letter} (${(n==null?void 0:n.min)??60}점 미만)`:`${t.letter} (${t.min}점 이상)`;return{letter:t.letter,min:Number(t.min)||0,label:r}})}function bt(){const e=F().standardScale;return mt(e!=null&&e.length?e:gn)}function gt(){const e=F().artsScale;return mt(e!=null&&e.length?e:pn)}function Ge(e){return bn.includes(e)}function Ee(e){return e==null||Number.isNaN(e)?null:Math.round(e)}function Ve(e){return Ge(e)?gt():bt()}function Ce(e,t){const a=Ee(e);if(a===null)return"-";const i=Ve(t);for(const n of i)if(a>=n.min)return n.letter;return i[i.length-1].letter}function oe(e){return`${e}등급`}const Qe=["조금만 더 올리면 된다. 할 수 있어!","상위 등급이 코앞이다. 끝까지 달려보자!","지금의 노력이 등급을 바꾼다. 포기하지 마!","아직 끝나지 않았어. 충분히 올릴 수 있어!","남은 항목이 기회다. 집중해서 마무리하자!","한 걸음만 더 가면 등급이 달라진다. 파이팅!","가능성은 아직 살아 있다. 믿고 가보자!","오늘의 한 문제가 등급을 바꿀 수도 있어!","목표 등급까지 거의 다 왔다. 조금만 더!","실력은 거짓말하지 않는다. 계속 밀어붙여!"];function hn(e){return e.projection.remainingCount>0&&e.letter!==e.projLetter}function wn(){const e=Math.floor(Math.random()*Qe.length);return Qe[e]}function pt(e=null){const t=e?Ge(e):!1,a=e?t?`${e}은(는) 예체능 과목 (A·B·C)`:`${e}은(는) 일반 과목 (A·B·C·D·E)`:"과목 유형에 따라 등급 기준이 다릅니다.",i=bt(),n=gt();return`
    <div class="grade-criteria-wrap">
      <button type="button" class="grade-criteria-bar" data-toggle="criteria" aria-expanded="false">
        ▶ 등급 기준표 확인
      </button>
      <div class="grade-criteria-panel hidden" id="criteria-panel">
        <p class="criteria-note">${a}</p>
        <p class="criteria-note muted">총점은 소수점을 반올림한 뒤 등급을 산출합니다.</p>
        <table class="criteria-table">
          <thead>
            <tr><th colspan="2">일반 과목 (국·영·수·사·과 등)</th></tr>
          </thead>
          <tbody>
            ${i.map(r=>`<tr><td>${r.letter}</td><td>${r.label.replace(/^[A-E]\s*/,"")}</td></tr>`).join("")}
          </tbody>
        </table>
        <table class="criteria-table">
          <thead>
            <tr><th colspan="2">예체능 (음악·미술·체육)</th></tr>
          </thead>
          <tbody>
            ${n.map(r=>`<tr><td>${r.letter}</td><td>${r.label.replace(/^[A-E]\s*/,"")}</td></tr>`).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `}function ht(e){const t=e.querySelector("[data-toggle='criteria']"),a=e.querySelector("#criteria-panel");!t||!a||t.addEventListener("click",()=>{const i=a.classList.toggle("hidden");t.setAttribute("aria-expanded",String(!i)),t.textContent=i?"▶ 등급 기준표 확인":"▼ 등급 기준표 닫기"})}function kn(e,t,a,i){if(a===null)return null;const n=Ee(a),r=Ce(n,i),l=Ve(i),d=l.findIndex(S=>S.letter===r);if(d<=0)return{targetLetter:r,needed:null,message:"이미 최고 등급입니다."};const p=l[d-1],f=p.min,E=e.filter(S=>{const k=t[S.key];return k===""||k===null||k===void 0||Number.isNaN(Number(k))});if(E.length===0)return{targetLetter:p.letter,needed:null,message:"모든 항목이 입력되었습니다."};let u=0,o=0,b=0;for(const S of e){const k=t[S.key];if(k===""||k===null||k===void 0||Number.isNaN(Number(k))){b+=S.weight;continue}u+=S.weight,o+=Number(k)*S.weight}if(b===0)return null;const s=u+b,w=(f*s-o)/b,v=Math.max(0,Math.min(100,w));return{targetLetter:p.letter,needed:Math.ceil(v*10)/10,remainingCount:E.length,message:null}}function yn(e,t,a,i){const r=Ve(i).find(s=>s.letter===a);if(!r)return null;let l=0,d=0,p=0,f=0;for(const s of e){const w=t[s.key];if(w===""||w===null||w===void 0||Number.isNaN(Number(w))){p+=s.weight,f+=1;continue}d+=s.weight,l+=Number(w)*s.weight}if(p===0)return null;const E=d+p,o=((r.min-.5)*E-l)/p;return{minScore:Math.ceil(Math.max(0,Math.min(100,o))*10)/10,remainingCount:f}}function vn(e){const t=Ee(e);return{raw:e,rounded:t,display:`${t}점`}}function Sn(e,t,a){const i=ft(e,t);if(i===null)return null;const{rounded:n}=vn(i),r=Ce(n,a),l=mn(e,t),d=Ee(l.average),p=kn(e,t,i,a),f=yn(e,t,r,a);return{average:i,rounded:n,letter:r,projection:l,projRounded:d,projLetter:Ce(d,a),needed:p,confirmMin:f}}function Z(e="globe"){return`
    <svg class="${e}" viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="48" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.35"/>
      <ellipse cx="60" cy="60" rx="48" ry="16" fill="none" stroke="currentColor" stroke-width="1"/>
      <ellipse cx="60" cy="60" rx="16" ry="48" fill="none" stroke="currentColor" stroke-width="1"/>
      <ellipse cx="60" cy="60" rx="34" ry="48" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.7"/>
      <line x1="12" y1="60" x2="108" y2="60" stroke="currentColor" stroke-width="0.8"/>
      <line x1="60" y1="12" x2="60" y2="108" stroke="currentColor" stroke-width="0.8"/>
    </svg>
  `}function $n(){return'<img class="title-bg" src="./title-bg.png" alt="" aria-hidden="true" />'}function Ln(){return'<img class="go-bg" src="./go-bg.png" alt="" aria-hidden="true" />'}function wt(e){return`grade-theme-${e}`}function B(e,t=""){return`<div class="phone-screen ${t}">${e}</div>`}function re(e){return`<p class="screen-footer">${e}</p>`}function ee(e="main"){return`<button type="button" class="link-btn" data-action="${e}">메인화면으로</button>`}const kt=[20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5],pe=8;function En(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function In(e,t,a){var i,n;(i=e.querySelector('[data-nav="back"]'))==null||i.addEventListener("click",t),(n=e.querySelector('[data-nav="main"]'))==null||n.addEventListener("click",a)}function Mn(e,t){const a=Math.hypot(e,t);if(a>1)return{points:0,label:"보드 밖"};if(a<=.07)return{points:50,label:"더블 불 · 50"};if(a<=.14)return{points:25,label:"싱글 불 · 25"};let i=Math.atan2(e,-t);i<0&&(i+=Math.PI*2);const n=Math.floor((i+Math.PI/20)%(Math.PI*2)/(Math.PI/10)),r=kt[n];return a>=.9?{points:r*2,label:`더블 ${r} · ${r*2}`}:a>=.52&&a<=.62?{points:r*3,label:`트리플 ${r} · ${r*3}`}:{points:r,label:`싱글 ${r} · ${r}`}}function xe(e,t,a){const i=t/2,n=t/2,r=t*.42;e.clearRect(0,0,t,t),e.fillStyle="#1a1a1a",e.beginPath(),e.arc(i,n,r*1.08,0,Math.PI*2),e.fill();for(let l=0;l<20;l++){const d=-Math.PI/2-Math.PI/20+l*Math.PI/10,p=d+Math.PI/10,f=l%2===0;e.beginPath(),e.moveTo(i,n),e.arc(i,n,r*.9,d,p),e.closePath(),e.fillStyle=f?"#111":"#ece6d8",e.fill(),e.beginPath(),e.moveTo(i,n),e.arc(i,n,r*.52,d,p),e.closePath(),e.fillStyle=f?"#1c1c1c":"#f5f0e6",e.fill(),e.beginPath(),e.arc(i,n,r,d,p),e.arc(i,n,r*.9,p,d,!0),e.closePath(),e.fillStyle=l%2===0?"#c4122f":"#0a7a3c",e.fill(),e.beginPath(),e.arc(i,n,r*.62,d,p),e.arc(i,n,r*.52,p,d,!0),e.closePath(),e.fillStyle=l%2===0?"#c4122f":"#0a7a3c",e.fill()}e.strokeStyle="rgba(180,180,180,0.55)",e.lineWidth=1;for(let l=0;l<20;l++){const d=-Math.PI/2-Math.PI/20+l*Math.PI/10;e.beginPath(),e.moveTo(i,n),e.lineTo(i+Math.cos(d)*r,n+Math.sin(d)*r),e.stroke()}[.9,.62,.52,.14,.07].forEach(l=>{e.beginPath(),e.arc(i,n,r*l,0,Math.PI*2),e.stroke()}),e.beginPath(),e.arc(i,n,r*.14,0,Math.PI*2),e.fillStyle="#0a7a3c",e.fill(),e.beginPath(),e.arc(i,n,r*.07,0,Math.PI*2),e.fillStyle="#c4122f",e.fill(),e.fillStyle="#fff",e.font=`bold ${Math.max(10,t*.045)}px sans-serif`,e.textAlign="center",e.textBaseline="middle";for(let l=0;l<20;l++){const d=-Math.PI/2+l*Math.PI/10,p=i+Math.cos(d)*r*1.14,f=n+Math.sin(d)*r*1.14;e.fillText(String(kt[l]),p,f)}for(const l of a)e.beginPath(),e.arc(i+l.nx*r,n+l.ny*r,4,0,Math.PI*2),e.fillStyle="#fff700",e.fill(),e.strokeStyle="#000",e.stroke()}function xn(e,{onBack:t,onMain:a}){let i=0,n=pe,r="vertical",l=.5,d=.5,p=1,f=1,E=0,u=0;const o=[],b=1.35;e.innerHTML=`
    <div class="game-panel">
      <h2 class="game-title">다트 게임</h2>
      <p class="game-desc">바가 가운데 올 때 탭/스페이스로 멈추세요. (세로 → 가로)</p>
      <div class="dart-stats">
        <span id="dart-score">점수: 0</span>
        <span id="dart-throws">남은 횟수: ${pe}</span>
      </div>
      <canvas id="dart-canvas" class="dart-canvas" width="300" height="300"></canvas>
      <div class="aim-bars" id="aim-bars">
        <div class="aim-bar aim-bar-v" aria-label="세로 조준">
          <div class="aim-track"><span class="aim-center"></span><span class="aim-dot" id="aim-v"></span></div>
          <span class="aim-label">세로</span>
        </div>
        <div class="aim-bar aim-bar-h" aria-label="가로 조준">
          <div class="aim-track"><span class="aim-center"></span><span class="aim-dot" id="aim-h"></span></div>
          <span class="aim-label">가로</span>
        </div>
      </div>
      <button type="button" class="btn-go" id="dart-stop">멈추기</button>
      <button type="button" class="btn-secondary hidden" id="dart-retry">다시하기</button>
      <p class="game-feedback" id="dart-feedback">세로 바를 가운데에 맞춰 멈추세요!</p>
      ${En()}
    </div>
  `;const s=e.querySelector("#dart-canvas"),w=s.getContext("2d"),v=e.querySelector("#dart-score"),S=e.querySelector("#dart-throws"),k=e.querySelector("#dart-feedback"),m=e.querySelector("#dart-stop"),M=e.querySelector("#dart-retry"),T=e.querySelector("#aim-v"),A=e.querySelector("#aim-h"),D=e.querySelector(".aim-bar-v"),U=e.querySelector(".aim-bar-h");function R(){const c=Math.min(300,e.clientWidth||300);s.width=c,s.height=c,xe(w,c,o)}function _(){T.style.top=`${l*100}%`,A.style.left=`${d*100}%`,D.classList.toggle("active",r==="vertical"),U.classList.toggle("active",r==="horizontal")}function te(c){u||(u=c);const h=Math.min(.05,(c-u)/1e3);u=c,r==="vertical"?(l+=p*b*h,l>=1&&(l=1,p=-1),l<=0&&(l=0,p=1)):r==="horizontal"&&(d+=f*b*h,d>=1&&(d=1,f=-1),d<=0&&(d=0,f=1)),_(),E=requestAnimationFrame(te)}function ne(){const c=(l-.5)*2.05,h=(d-.5)*2.05,$=Mn(h,c);if(o.push({nx:h,ny:c}),i+=$.points,n-=1,v.textContent=`점수: ${i}`,S.textContent=`남은 횟수: ${n}`,xe(w,s.width,o),k.textContent=$.label,n<=0){r="done",m.classList.add("hidden"),M.classList.remove("hidden"),k.textContent=`게임 종료! 최종 ${i}점`;return}r="vertical",l=Math.random(),d=Math.random(),k.textContent="세로 바를 가운데에 맞춰 멈추세요!"}function y(c){var h;if((h=c==null?void 0:c.preventDefault)==null||h.call(c),r==="vertical"){r="horizontal",k.textContent="가로 바를 가운데에 맞춰 멈추세요!";return}r==="horizontal"&&(r="result",ne())}function x(c){(c.code==="Space"||c.key===" ")&&(c.preventDefault(),y(c))}function C(){i=0,n=pe,r="vertical",o.length=0,l=.2,d=.2,v.textContent="점수: 0",S.textContent=`남은 횟수: ${pe}`,k.textContent="세로 바를 가운데에 맞춰 멈추세요!",m.classList.remove("hidden"),M.classList.add("hidden"),xe(w,s.width,o)}return R(),_(),E=requestAnimationFrame(te),m.addEventListener("click",y),m.addEventListener("touchstart",y,{passive:!1}),M.addEventListener("click",C),window.addEventListener("keydown",x),window.addEventListener("resize",R),In(e,t,a),()=>{cancelAnimationFrame(E),window.removeEventListener("keydown",x),window.removeEventListener("resize",R)}}const J=12;function Nn(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function An(e,t,a){var i,n;(i=e.querySelector('[data-nav="back"]'))==null||i.addEventListener("click",t),(n=e.querySelector('[data-nav="main"]'))==null||n.addEventListener("click",a)}function Cn(e,{onBack:t,onMain:a}){let i=0,n=0,r=!1,l=!0,d=.08,p=.55,f=0,E=0,u=0,o=!1;e.innerHTML=`
    <div class="game-panel">
      <h2 class="game-title">크리켓 게임</h2>
      <p class="game-desc">공이 타격존(노란 선)에 올 때 탭/스페이스로 스윙!</p>
      <div class="cricket-stats">
        <span id="cricket-runs">득점: 0</span>
        <span id="cricket-balls">볼: 0 / ${J}</span>
      </div>
      <canvas id="cricket-canvas" class="game-canvas cricket-canvas" width="320" height="420"></canvas>
      <button type="button" class="btn-go" id="cricket-swing">SWING!</button>
      <button type="button" class="btn-secondary hidden" id="cricket-retry">다시하기</button>
      <p class="game-feedback" id="cricket-feedback">공이 다가옵니다…</p>
      ${Nn()}
    </div>
  `;const b=e.querySelector("#cricket-canvas"),s=b.getContext("2d"),w=e.querySelector("#cricket-runs"),v=e.querySelector("#cricket-balls"),S=e.querySelector("#cricket-feedback"),k=e.querySelector("#cricket-swing"),m=e.querySelector("#cricket-retry"),M=.72,T=.09;function A(){const y=Math.min(320,Math.max(260,e.clientWidth-16||300));b.width=y,b.height=Math.round(y*1.3)}function D(){const y=b.width,x=b.height;s.clearRect(0,0,y,x),s.fillStyle="#6ec8ff",s.fillRect(0,0,y,x*.22),s.fillStyle="#3d8c3a",s.fillRect(0,x*.18,y,x*.12);for(let N=0;N<18;N++)s.fillStyle=`hsl(${N*47%360} 70% 45%)`,s.beginPath(),s.arc(10+N*(y/17),x*.22,6,0,Math.PI*2),s.fill();s.fillStyle="#4caf50",s.fillRect(0,x*.28,y,x*.72);const C=y*.28,c=(y-C)/2,h=x*.3,$=x*.58;s.fillStyle="#c4a574",s.beginPath(),s.moveTo(c+C*.15,h),s.lineTo(c+C*.85,h),s.lineTo(c+C,h+$),s.lineTo(c,h+$),s.closePath(),s.fill();const L=h+$*M;if(s.strokeStyle="#fff41a",s.lineWidth=3,s.setLineDash([6,4]),s.beginPath(),s.moveTo(c-8,L),s.lineTo(c+C+8,L),s.stroke(),s.setLineDash([]),s.fillStyle="#8d6e63",s.beginPath(),s.ellipse(y/2,h+18,10,14,0,0,Math.PI*2),s.fill(),s.fillStyle="#66bb6a",s.beginPath(),s.ellipse(y/2,h+$-10,16,22,0,0,Math.PI*2),s.fill(),s.save(),s.translate(y/2+14,h+$-18),s.rotate(f>0?-.9:-.2),s.fillStyle="#f5f5f5",s.fillRect(-4,-28,8,36),s.restore(),!l&&!o){const N=h+$*d,P=y/2+Math.sin(d*6)*4,Ie=7+d*4;s.beginPath(),s.arc(P,N,Ie,0,Math.PI*2),s.fillStyle="#ef5350",s.fill(),s.strokeStyle="#fff",s.lineWidth=1.5,s.stroke()}f>0&&(s.fillStyle="rgba(255,244,26,0.15)",s.fillRect(0,L-20,y,40))}function U(){if(n>=J){o=!0,k.disabled=!0,k.classList.add("hidden"),m.classList.remove("hidden"),S.textContent=`경기 종료! 총 ${i}점`;return}l=!1,r=!1,d=.05,p=.48+Math.random()*.35,S.textContent="타이밍에 맞춰 스윙!"}function R(y){var h;if((h=y==null?void 0:y.preventDefault)==null||h.call(y),o||r||l)return;r=!0,f=.25,n+=1,v.textContent=`볼: ${n} / ${J}`;const x=Math.abs(d-M);let C=0,c="헛스윙!";x<=T*.25?(C=6,c="식스! +6"):x<=T*.5?(C=4,c="포! +4"):x<=T*.75?(C=2,c="투런! +2"):x<=T&&(C=1,c="싱글! +1"),i+=C,w.textContent=`득점: ${i}`,S.textContent=c,l=!0,setTimeout(()=>{o||U(),n>=J&&(o=!0,k.disabled=!0,k.classList.add("hidden"),m.classList.remove("hidden"),S.textContent=`경기 종료! 총 ${i}점`)},650)}function _(y){u||(u=y);const x=Math.min(.05,(y-u)/1e3);u=y,!l&&!o&&(d+=p*x,d>1.05&&(l=!0,r=!0,n+=1,v.textContent=`볼: ${n} / ${J}`,S.textContent="놓침!",setTimeout(()=>{r=!1,n>=J?(o=!0,k.disabled=!0,k.classList.add("hidden"),m.classList.remove("hidden"),S.textContent=`경기 종료! 총 ${i}점`):U()},500))),f>0&&(f-=x),D(),E=requestAnimationFrame(_)}function te(){i=0,n=0,o=!1,r=!1,f=0,w.textContent="득점: 0",v.textContent=`볼: 0 / ${J}`,k.disabled=!1,k.classList.remove("hidden"),m.classList.add("hidden"),U()}function ne(y){(y.code==="Space"||y.key===" ")&&(y.preventDefault(),R(y))}return A(),U(),E=requestAnimationFrame(_),k.addEventListener("click",R),k.addEventListener("touchstart",R,{passive:!1}),b.addEventListener("pointerdown",R),m.addEventListener("click",te),window.addEventListener("keydown",ne),window.addEventListener("resize",A),An(e,t,a),()=>{cancelAnimationFrame(E),window.removeEventListener("keydown",ne),window.removeEventListener("resize",A)}}function Pn(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function qn(e,t,a){var i,n;(i=e.querySelector('[data-nav="back"]'))==null||i.addEventListener("click",t),(n=e.querySelector('[data-nav="main"]'))==null||n.addEventListener("click",a)}const Tn=["#42a5f5","#ef5350","#ffee58","#66bb6a"],Dn=4,Ne=7;function Rn(e,{onBack:t,onMain:a}){let i=0,n=3,r=!1,l=0,d=0;const p={left:!1,right:!1};let f=320,E=420,u={x:0,y:0,w:70,h:12},o={x:0,y:0,r:6,vx:0,vy:0},b=[];e.innerHTML=`
    <div class="game-panel">
      <h2 class="game-title">벽돌깨기</h2>
      <p class="game-desc">드래그 또는 ← → / A D 로 패들을 움직이세요.</p>
      <div class="breakout-stats">
        <span id="bo-lives">생명: ●●●</span>
        <span id="bo-score">점수: 00000</span>
      </div>
      <canvas id="bo-canvas" class="game-canvas breakout-canvas" width="320" height="420"></canvas>
      <button type="button" class="btn-go" id="bo-start">시작 / 다시하기</button>
      <p class="game-feedback" id="bo-feedback">시작을 눌러 플레이!</p>
      ${Pn()}
    </div>
  `;const s=e.querySelector("#bo-canvas"),w=s.getContext("2d"),v=e.querySelector("#bo-lives"),S=e.querySelector("#bo-score"),k=e.querySelector("#bo-feedback"),m=e.querySelector("#bo-start");function M(){f=Math.min(320,Math.max(260,e.clientWidth-16||300)),E=Math.round(f*1.3),s.width=f,s.height=E,u.y=E-36,u.w=f*.22}function T(){b=[];const c=4,h=56,$=(f-c*(Ne+1))/Ne,L=16;for(let N=0;N<Dn;N++)for(let P=0;P<Ne;P++)b.push({x:c+P*($+c),y:h+N*(L+c),w:$,h:L,color:Tn[N],alive:!0})}function A(){u.x=(f-u.w)/2,o.x=f/2,o.y=u.y-20;const c=-Math.PI/3+Math.random()*(Math.PI/3),h=Math.min(f,E)*1.05;o.vx=Math.sin(c)*h,o.vy=-Math.abs(Math.cos(c)*h)}function D(){v.textContent=`생명: ${"●".repeat(n)}${"○".repeat(3-n)}`,S.textContent=`점수: ${String(i).padStart(5,"0")}`}function U(){w.fillStyle="#1a1030",w.fillRect(0,0,f,E);for(const c of b)c.alive&&(w.fillStyle=c.color,R(w,c.x,c.y,c.w,c.h,4),w.fill());w.fillStyle="#fff",R(w,u.x,u.y,u.w,u.h,6),w.fill(),w.beginPath(),w.arc(o.x,o.y,o.r,0,Math.PI*2),w.fillStyle="#fff",w.fill()}function R(c,h,$,L,N,P){c.beginPath(),c.moveTo(h+P,$),c.arcTo(h+L,$,h+L,$+N,P),c.arcTo(h+L,$+N,h,$+N,P),c.arcTo(h,$+N,h,$,P),c.arcTo(h,$,h+L,$,P),c.closePath()}function _(c){d||(d=c);const h=Math.min(.033,(c-d)/1e3);if(d=c,r){const $=f*1.6*h;if(p.left&&(u.x-=$),p.right&&(u.x+=$),u.x=Math.max(0,Math.min(f-u.w,u.x)),o.x+=o.vx*h,o.y+=o.vy*h,o.x<o.r&&(o.x=o.r,o.vx*=-1),o.x>f-o.r&&(o.x=f-o.r,o.vx*=-1),o.y<o.r&&(o.y=o.r,o.vy*=-1),o.vy>0&&o.y+o.r>=u.y&&o.y-o.r<=u.y+u.h&&o.x>=u.x&&o.x<=u.x+u.w){o.y=u.y-o.r;const L=(o.x-(u.x+u.w/2))/(u.w/2),N=Math.hypot(o.vx,o.vy)*1.015,P=L*1.1;o.vx=Math.sin(P)*N,o.vy=-Math.abs(Math.cos(P)*N)}for(const L of b)if(L.alive&&o.x+o.r>L.x&&o.x-o.r<L.x+L.w&&o.y+o.r>L.y&&o.y-o.r<L.y+L.h){L.alive=!1,i+=10,D();const N=o.x+o.r-L.x,P=L.x+L.w-(o.x-o.r),Ie=o.y+o.r-L.y,yt=L.y+L.h-(o.y-o.r),vt=Math.min(N,P),St=Math.min(Ie,yt);vt<St?o.vx*=-1:o.vy*=-1;break}b.every(L=>!L.alive)&&(r=!1,k.textContent=`클리어! 점수 ${i}`),o.y>E+20&&(n-=1,D(),n<=0?(r=!1,k.textContent=`게임 오버 · ${i}점`):(A(),k.textContent="생명 -1! 계속…"))}U(),l=requestAnimationFrame(_)}function te(){i=0,n=3,r=!0,T(),A(),D(),k.textContent="화이팅!"}function ne(c){const h=s.getBoundingClientRect(),$=(c-h.left)/h.width*f;u.x=Math.max(0,Math.min(f-u.w,$-u.w/2))}function y(c){var $;c.preventDefault();const h=(($=c.touches)==null?void 0:$[0])||c;ne(h.clientX)}function x(c){(c.key==="ArrowLeft"||c.key==="a"||c.key==="A")&&(p.left=!0),(c.key==="ArrowRight"||c.key==="d"||c.key==="D")&&(p.right=!0)}function C(c){(c.key==="ArrowLeft"||c.key==="a"||c.key==="A")&&(p.left=!1),(c.key==="ArrowRight"||c.key==="d"||c.key==="D")&&(p.right=!1)}return M(),T(),A(),D(),U(),l=requestAnimationFrame(_),m.addEventListener("click",te),s.addEventListener("pointerdown",y),s.addEventListener("pointermove",c=>{(c.buttons||c.pressure>0)&&y(c)}),s.addEventListener("touchstart",y,{passive:!1}),s.addEventListener("touchmove",y,{passive:!1}),window.addEventListener("keydown",x),window.addEventListener("keyup",C),window.addEventListener("resize",M),qn(e,t,a),()=>{cancelAnimationFrame(l),window.removeEventListener("keydown",x),window.removeEventListener("keyup",C),window.removeEventListener("resize",M)}}const g=document.getElementById("app");let O=null,Y=null,H=null,ie=null,Ze=!1;const et=new Set(["rest","game-dart","game-cricket","game-breakout","admin"]),On={login:Un,main:Hn,help:_n,profile:Fn,grade:Vn,subject:Kn,calculator:zn,rest:Jn,admin:Wn,"game-dart":()=>Ae("dart"),"game-cricket":()=>Ae("cricket"),"game-breakout":()=>Ae("breakout")};jn();function jn(){Promise.all([Xt(),Gt()]).finally(()=>{I(st()?"main":"login")})}function I(e,t={}){ie&&(ie(),ie=null),Ze&&!et.has(e)&&sn(),e!=="login"&&!st()&&(e="login",t={});const a=On[e];a&&(g.innerHTML="",a(t),Ze=et.has(e),window.scrollTo(0,0))}function z(e){e.querySelectorAll("[data-action]").forEach(t=>{t.addEventListener("click",()=>Bn(t.dataset.action))})}function Bn(e){if(e==="main"){O=null,Y=null,H=null,I("main");return}if(e==="grade"){Y=null,H=null,I("grade");return}if(e==="help"&&I("help"),e==="profile"&&I("profile"),e==="rest"&&I("rest"),e==="admin"){de()&&I("admin");return}if(e==="subject"&&I("subject",{grade:O}),e==="game-dart"&&I("game-dart"),e==="game-cricket"&&I("game-cricket"),e==="game-breakout"&&I("game-breakout"),e.startsWith("pick-grade-")){O=Number(e.replace("pick-grade-","")),Y=null,H=null,I("subject",{grade:O});return}if(e.startsWith("pick-subject-")){const t=decodeURIComponent(e.replace("pick-subject-",""));Y=t;const a=ut(O,t);H=(a.length===1,a[0]),I("calculator",{grade:O,subject:t,semester:H});return}e.startsWith("pick-semester-")&&(H=Number(e.replace("pick-semester-","")),I("calculator",{grade:O,subject:Y,semester:H}))}function Un(){let e="login";const t=()=>{var S,k;const a=e==="register";g.innerHTML=B(`
      <div class="stack-screen login-screen">
        ${Z("globe globe-large")}
        <h1 class="login-title">SCHOOL METRICS</h1>
        <p class="login-desc">${a?"처음이면 회원가입하세요":"해연중 계정으로 로그인하세요"}</p>
        <div class="login-form">
          <div class="login-tabs" role="tablist">
            <button type="button" class="login-tab ${a?"":"active"}" data-mode="login">로그인</button>
            <button type="button" class="login-tab ${a?"active":""}" data-mode="register">회원가입</button>
          </div>
          <label class="field">
            <span>학교 계정</span>
            <input type="email" id="login-email" placeholder="20261111@haeyeon.ms.kr" autocomplete="username" />
          </label>
          ${a?`<label class="field">
            <span>이름</span>
            <input type="text" id="login-name" placeholder="홍길동" autocomplete="name" maxlength="20" />
          </label>`:""}
          <label class="field">
            <span>비밀번호</span>
            <input type="password" id="login-password" placeholder="6자 이상" autocomplete="${a?"new-password":"current-password"}" />
          </label>
          ${a?`<label class="field">
            <span>비밀번호 확인</span>
            <input type="password" id="login-password2" placeholder="한 번 더" autocomplete="new-password" />
          </label>`:""}
          <button type="button" class="btn-go" id="login-submit">${a?"가입하기":"로그인"}</button>
          <p class="muted login-hint">예: 20261111@haeyeon.ms.kr<br/>가입 후 학교 메일로 온 인증 링크를 눌러야 로그인됩니다.</p>
          <p class="warn hidden" id="login-error"></p>
          <p class="ok-msg hidden" id="login-ok"></p>
          <div class="login-verify-actions hidden" id="verify-actions">
            <button type="button" class="link-btn" id="verify-refresh">인증 완료했어요</button>
            <button type="button" class="link-btn" id="verify-resend">인증 메일 다시 받기</button>
          </div>
        </div>
        ${re(j.footer)}
      </div>
    `);const i=g.querySelector("#login-error"),n=g.querySelector("#login-ok"),r=g.querySelector("#verify-actions"),l=g.querySelector("#login-email"),d=g.querySelector("#login-name"),p=g.querySelector("#login-password"),f=g.querySelector("#login-password2"),E=g.querySelector("#login-submit"),u=m=>{n.classList.add("hidden"),i.textContent=m,i.classList.remove("hidden")},o=m=>{i.classList.add("hidden"),n.textContent=m,n.classList.remove("hidden")},b=m=>{E.disabled=m};g.querySelectorAll("[data-mode]").forEach(m=>{m.addEventListener("click",()=>{e=m.dataset.mode,t()})});const s=m=>{const M=Te(m);K({type:"user_login",message:`로그인: ${M}`,account:m.account,displayName:m.displayName||"",studentId:m.studentId||""}),I("main")},w=m=>{o(m.error),r.classList.remove("hidden")},v=async()=>{i.classList.add("hidden"),n.classList.add("hidden"),r.classList.add("hidden"),b(!0);try{if(e==="register"){if(p.value!==((f==null?void 0:f.value)||"")){u("비밀번호 확인이 일치하지 않습니다.");return}const M=await Ut(l.value,p.value,(d==null?void 0:d.value)||"");if(M.needVerify){w(M);return}if(!M.ok){u(M.error);return}s(M.user);return}const m=await Ht(l.value,p.value);if(m.needVerify){w(m);return}if(!m.ok){u(m.error);return}s(m.user)}finally{b(!1)}};E.addEventListener("click",v),[l,d,p,f].filter(Boolean).forEach(m=>{m.addEventListener("keydown",M=>{M.key==="Enter"&&v()})}),(S=g.querySelector("#verify-refresh"))==null||S.addEventListener("click",async()=>{b(!0);const m=await _t();if(b(!1),m.needVerify){w(m);return}if(!m.ok){u(m.error);return}s(m.user)}),(k=g.querySelector("#verify-resend"))==null||k.addEventListener("click",async()=>{const m=await Wt();if(!m.ok){u(m.error);return}o(m.message),r.classList.remove("hidden")})};t()}function Hn(){const e=ln(),t=Te()||lt()||"";g.innerHTML=B(`
    <div class="main-screen">
      <button type="button" class="help-btn" data-action="help" aria-label="앱 정보">?</button>
      <div class="main-header">
        <div class="title-block">
          ${$n()}
          <h1 class="app-title">${j.title}</h1>
        </div>
        <p class="app-subtitle">${j.subtitle}</p>
        <p class="main-quote">"${e}"</p>
      </div>
      <div class="main-body">
        <p class="login-user muted">${W(t)}</p>
        <button type="button" class="link-btn" data-action="profile">내 정보 수정</button>
        <button type="button" class="go-btn" data-action="grade" aria-label="시작">
          ${Ln()}
          <span class="go-text">GO</span>
        </button>
      </div>
      <p class="main-footer">${j.footer}</p>
    </div>
  `),z(g)}function Fn(){const e=V();g.innerHTML=B(`
    <div class="stack-screen">
      ${Z()}
      <h2 class="screen-title">내 정보</h2>
      <div class="login-form profile-form">
        <p class="muted login-hint">로그인 계정: ${W((e==null?void 0:e.account)||"")}</p>
        <label class="field">
          <span>이름</span>
          <input type="text" id="profile-name" value="${W((e==null?void 0:e.displayName)||"")}" maxlength="20" />
        </label>
        <label class="field">
          <span>학번 (4자리)</span>
          <input type="text" id="profile-sid" value="${W((e==null?void 0:e.studentId)||"")}" inputmode="numeric" maxlength="4" placeholder="1111" />
        </label>
        <button type="button" class="btn-go" id="profile-save">저장</button>
        <p class="warn hidden" id="profile-error"></p>
        <p class="ok-msg hidden" id="profile-ok"></p>
      </div>
      ${ee()}
    </div>
  `);const t=g.querySelector("#profile-error"),a=g.querySelector("#profile-ok"),i=g.querySelector("#profile-name"),n=g.querySelector("#profile-sid"),r=g.querySelector("#profile-save");r.addEventListener("click",async()=>{t.classList.add("hidden"),a.classList.add("hidden"),r.disabled=!0;const l=await Ft({displayName:i.value,studentId:n.value});if(r.disabled=!1,!l.ok){t.textContent=l.error,t.classList.remove("hidden");return}a.textContent="저장되었습니다.",a.classList.remove("hidden"),K({type:"profile_update",message:`정보 수정: ${Te(l.user)}`,displayName:l.user.displayName,studentId:l.user.studentId})}),z(g)}function _n(){g.innerHTML=B(`
    <div class="stack-screen">
      ${Z()}
      <h2 class="screen-title">앱 정보</h2>
      <div class="info-card">
        <h3>이 앱의 목적</h3>
        <ol>
          <li>데이터 기반의 자기주도적 성적 관리</li>
          <li>미니게임을 통한 스트레스 완화</li>
        </ol>
        <h3>2026학년도 부산 해연중</h3>
        <ul>
          <li>학년 → 과목 → 학기별 점수 입력</li>
          <li>지필·수행 반영비율 자동 합산</li>
          <li>예상 등급·상위 등급 필요 점수 안내</li>
          <li>서로 다른 과목 ${ke}개 계산 시 미니게임 1회 해금</li>
          <li>미니게임 이용 후에는 다시 잠금</li>
        </ul>
        <p class="muted">제작: ${j.creator}</p>
        ${de()?'<p class="success"><button type="button" class="link-btn" data-action="admin">관리자 패널 열기</button></p>':""}
      </div>
      ${ee()}
      <button type="button" class="admin-secret-trigger" id="admin-secret" title="">
        ${j.subtitle}
      </button>
    </div>
  `),z(g);const e=g.querySelector("#admin-secret");e==null||e.addEventListener("click",()=>{if(de()){I("admin");return}const t=window.prompt("관리자 비밀번호를 입력하세요");t!=null&&(zt(t)?(window.alert("관리자 모드가 켜졌습니다."),I("admin")):window.alert("비밀번호가 올바르지 않습니다."))})}function Wn(){var d,p,f,E,u,o;if(!de()){I("help");return}const e=F(),t=tn(),a=e.standardScale,i=e.artsScale,n=t.configured?`Firebase 연결됨 (${t.projectId})`:"Firebase 미설정 — src/firebase-config.js 에 키를 넣어주세요";g.innerHTML=B(`
    <div class="stack-screen admin-screen">
      <h2 class="screen-title">관리자 모드</h2>
      <p class="screen-desc">기기 ID: ${Ue()}</p>
      <p class="muted admin-note">${n}</p>
      <p class="muted admin-note">설정 저장 시 클라우드에 동기화되고, 모든 기기 사용·기입 기록을 여기서 볼 수 있습니다.</p>

      <div class="info-card admin-card">
        <h3>빠른 이동</h3>
        <div class="admin-actions">
          <button type="button" class="btn-go" data-action="rest">미니게임 허브</button>
          <button type="button" class="game-card" data-action="game-dart">다트</button>
          <button type="button" class="game-card" data-action="game-cricket">크리켓</button>
          <button type="button" class="game-card" data-action="game-breakout">벽돌깨기</button>
        </div>
        <p class="muted">관리자 모드에서는 미니게임을 자유롭게 이용할 수 있습니다.</p>
      </div>

      <div class="info-card admin-card">
        <h3>설정 · 형식</h3>
        <label class="admin-field">
          미니게임 해금에 필요한 과목 수
          <input type="number" id="adm-unlock" min="1" max="50" value="${e.restUnlockUses}" />
        </label>
        <label class="admin-check">
          <input type="checkbox" id="adm-free-games" ${e.freeGames!==!1?"checked":""} />
          관리자 세션에서 게임 자유 이용
        </label>
        <h4>일반 과목 등급 기준 (점 이상)</h4>
        <div class="admin-scale" id="adm-std">
          ${a.map((b,s)=>`
            <label>${b.letter}
              <input type="number" data-scale="std" data-i="${s}" data-letter="${b.letter}" min="0" max="100" value="${b.min}" />
            </label>
          `).join("")}
        </div>
        <h4>예체능 등급 기준 (점 이상)</h4>
        <div class="admin-scale" id="adm-arts">
          ${i.map((b,s)=>`
            <label>${b.letter}
              <input type="number" data-scale="arts" data-i="${s}" data-letter="${b.letter}" min="0" max="100" value="${b.min}" />
            </label>
          `).join("")}
        </div>
        <button type="button" class="btn-go" id="adm-save">설정 저장(클라우드 포함)</button>
      </div>

      <div class="info-card admin-card">
        <h3>게임 피드백</h3>
        <label class="admin-field">
          플레이 후 메모
          <textarea id="adm-feedback" rows="3" placeholder="버그, 난이도, 아이디어…"></textarea>
        </label>
        <button type="button" class="btn-secondary" id="adm-feedback-save">피드백 저장</button>
      </div>

      <div class="info-card admin-card">
        <h3>사용 · 기입 기록 <span id="adm-log-count">불러오는 중…</span></h3>
        <div class="admin-actions">
          <button type="button" class="btn-secondary" id="adm-refresh-logs">클라우드에서 새로고침</button>
          <button type="button" class="btn-secondary" id="adm-export">기록 내보내기(복사)</button>
          <button type="button" class="btn-secondary" id="adm-clear-logs">기록 비우기(로컬+클라우드)</button>
        </div>
        <div class="admin-log-list" id="adm-logs">
          <p class="muted">기록을 불러오는 중…</p>
        </div>
      </div>

      <div class="nav-row">
        <button type="button" class="link-btn" id="adm-logout">관리자 로그아웃</button>
        ${ee()}
      </div>
      ${re("ADMIN")}
    </div>
  `),z(g);let r=He();async function l(){const b=g.querySelector("#adm-logs"),s=g.querySelector("#adm-log-count");b&&(b.innerHTML='<p class="muted">불러오는 중…</p>');const w=await Qt();if(r=w.logs,s&&(s.textContent=`(${r.length} · ${w.source}${w.error?" · 오류":""})`),!!b){if(r.length===0){b.innerHTML='<p class="muted">아직 기록이 없습니다.</p>';return}b.innerHTML=r.slice(0,120).map(v=>{const S=[v.displayName,v.studentId,v.account||v.deviceId].filter(Boolean).join(" · ");return`
      <article class="admin-log-item">
        <header>${W(S)} · ${W(v.type)} · ${Gn(v.at)}</header>
        <p>${W(v.message||"")}</p>
        ${v.detail?`<pre>${W(typeof v.detail=="string"?v.detail:JSON.stringify(v.detail,null,0))}</pre>`:""}
      </article>
    `}).join("")}}l(),(d=g.querySelector("#adm-refresh-logs"))==null||d.addEventListener("click",()=>l()),(p=g.querySelector("#adm-save"))==null||p.addEventListener("click",async()=>{var S,k;const b=Number((S=g.querySelector("#adm-unlock"))==null?void 0:S.value),s=!!((k=g.querySelector("#adm-free-games"))!=null&&k.checked),w=[...g.querySelectorAll('[data-scale="std"]')].map(m=>({letter:m.dataset.letter,min:Number(m.value)||0})),v=[...g.querySelectorAll('[data-scale="arts"]')].map(m=>({letter:m.dataset.letter,min:Number(m.value)||0}));Yt({restUnlockUses:Number.isFinite(b)&&b>0?b:8,freeGames:s,standardScale:w,artsScale:v}),window.alert(q()?"설정을 저장했고 클라우드에도 올렸습니다.":"설정을 이 기기에 저장했습니다. (Firebase 미설정)"),I("admin")}),(f=g.querySelector("#adm-feedback-save"))==null||f.addEventListener("click",()=>{var s,w;const b=(w=(s=g.querySelector("#adm-feedback"))==null?void 0:s.value)==null?void 0:w.trim();if(!b){window.alert("내용을 입력하세요.");return}K({type:"game_feedback",message:b}),window.alert("피드백을 저장했습니다."),I("admin")}),(E=g.querySelector("#adm-export"))==null||E.addEventListener("click",async()=>{const b=en(r);try{await navigator.clipboard.writeText(b),window.alert("기록이 클립보드에 복사되었습니다.")}catch{window.prompt("아래 내용을 복사하세요",b)}}),(u=g.querySelector("#adm-clear-logs"))==null||u.addEventListener("click",async()=>{window.confirm("로컬+클라우드 활동 기록을 비울까요?")&&(await Zt({cloud:!0}),I("admin"))}),(o=g.querySelector("#adm-logout"))==null||o.addEventListener("click",()=>{Jt(),window.alert("관리자 모드가 종료되었습니다."),I("main")})}function W(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Gn(e){try{const t=new Date(e);return`${t.getMonth()+1}/${t.getDate()} ${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`}catch{return e}}function Vn(){const e=fe(),t=dt();g.innerHTML=B(`
    <div class="stack-screen grade-screen">
      ${Z()}
      <h2 class="screen-title">자신의 학년을 선택하세요</h2>
      <div class="grade-list">
        <button type="button" class="grade-btn grade-1" data-action="pick-grade-1">1학년</button>
        <button type="button" class="grade-btn grade-2" data-action="pick-grade-2">2학년</button>
        <button type="button" class="grade-btn grade-3" data-action="pick-grade-3">3학년</button>
      </div>
      ${e?'<button type="button" class="rest-btn" data-action="rest">휴식 · 미니게임</button>':`<p class="unlock-hint">${t}</p>`}
      ${ee()}
      ${re(j.subtitle)}
    </div>
  `),z(g)}function Kn({grade:e}){if(!e||!ue(e)){I("grade");return}O=e;const t=ue(e),a=cn(e);g.innerHTML=B(`
    <div class="stack-screen ${wt(e)}">
      ${Z()}
      <h2 class="screen-title">${t.label} 과목 선택</h2>
      ${t.note?`<p class="screen-note">${t.note}</p>`:""}
      ${pt()}
      <div class="subject-list">
        ${a.map(i=>`<button type="button" class="subject-btn" data-action="pick-subject-${encodeURIComponent(i)}">${i}</button>`).join("")}
      </div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="grade">학년 선택으로</button>
        ${ee()}
      </div>
      ${re(j.subtitle)}
    </div>
  `),z(g),ht(g)}function zn({grade:e,subject:t,semester:a}){if(!e||!t||!a){I("subject",{grade:O});return}O=e,Y=t,H=a;const i=ue(e),n=ut(e,t),r=fn(e,t,a),l=Xe(e,t,a),d={},p=n.length>1?`<div class="semester-tabs">
          ${n.map(o=>`<button type="button" class="semester-tab ${o===a?"active":""}" data-action="pick-semester-${o}">${Xe(e,t,o)}</button>`).join("")}
        </div>`:`<p class="semester-only">${l}</p>`;g.innerHTML=B(`
    <div class="stack-screen calculator-screen ${wt(e)}">
      ${Z("globe globe-small")}
      <h2 class="screen-title subject-title">${t}</h2>
      <p class="screen-desc">${i.label} · ${l}${Ge(t)?" · 예체능(A·B·C)":" · 일반(A~E)"}</p>
      ${pt(t)}
      ${p}
      <form id="calc-form" class="calc-form"></form>
      <button type="submit" form="calc-form" class="btn-calc">계산하기</button>
      <div id="calc-result" class="calc-result hidden"></div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="subject">과목 선택으로</button>
        ${ee()}
      </div>
      ${re(j.subtitle)}
    </div>
  `);const f=g.querySelector("#calc-form");let E="";for(const o of r){if(o.kind!==E){E=o.kind;const s=document.createElement("h3");s.className="section-heading",s.textContent=o.kind==="exam"?"지필고사":"수행평가",f.appendChild(s)}const b=document.createElement("label");b.className="score-row",b.innerHTML=`
      <span>${o.label} <em>${o.weight}%</em></span>
      <input type="number" min="0" max="100" step="0.1" inputmode="decimal"
        name="${o.key}" placeholder="점수" />
    `,f.appendChild(b)}const u=g.querySelector("#calc-result");f.addEventListener("submit",o=>{var M,T;o.preventDefault();const b=new FormData(f);for(const A of r)d[A.key]=b.get(A.key);const s=Sn(r,d,t);if(!s){u.classList.remove("hidden"),u.innerHTML='<p class="warn">최소 1개 이상 점수를 입력하세요.</p>';return}const w=an(t);K({type:"calc",message:`${e}학년 ${t} (${l}) → ${s.rounded}점 ${oe(s.letter)}`,detail:{grade:e,subject:t,semester:a,scores:d,rounded:s.rounded,letter:s.letter,average:s.average}});let v="";((M=s.needed)==null?void 0:M.needed)!=null?v=`<p>상위 <strong>${oe(s.needed.targetLetter)}</strong>까지 남은 항목 평균 <strong>${s.needed.needed}점</strong> 이상</p>`:(T=s.needed)!=null&&T.message&&(v=`<p>${s.needed.message}</p>`);let S="";if(s.projection.remainingCount>0&&s.letter===s.projLetter){const A=oe(s.letter);let D="";s.confirmMin&&(s.confirmMin.minScore<=0?D=`<p>남은 항목이 <strong>0점</strong>이어도 ${A} 유지</p>`:D=`<p>남은 항목 각각 최소 <strong>${s.confirmMin.minScore}점</strong> 이상이면 ${A} 유지</p>`),S=`
        <p><strong>${A} 확정입니다.</strong></p>
        ${D}
      `}let k="";hn(s)&&(k=`<p class="cheer-msg">${wn()}</p>`);let m="";w.justUnlocked?m=`<p class="success">서로 다른 과목 ${ke}개 달성! 학년 선택에서 휴식 미니게임 이용</p>`:fe()?m='<p class="success">휴식 미니게임 이용 가능 (학년 선택 화면)</p>':w.isNew?m=`<p class="muted">${dt()}</p>`:m='<p class="muted">이미 계산한 과목입니다. 다른 과목을 계산하면 해금에 가까워져요.</p>',u.classList.remove("hidden"),u.innerHTML=`
      <h3>${t} 결과</h3>
      <p>총점(반올림) <strong>${s.rounded}점</strong> · <strong>${oe(s.letter)}</strong></p>
      <p class="muted">가중 평균 ${s.average.toFixed(1)}점</p>
      <p>남은 항목 100점 시 <strong>${s.projRounded}점</strong> · <strong>${oe(s.projLetter)}</strong></p>
      ${S}
      ${k}
      ${v}
      ${m}
    `}),z(g),ht(g)}function Jn(){if(!fe()){I("grade");return}g.innerHTML=B(`
    <div class="stack-screen">
      ${Z()}
      <h2 class="screen-title">휴식 · 미니게임</h2>
      <div class="game-list">
        <button type="button" class="game-card" data-action="game-dart">다트 게임</button>
        <button type="button" class="game-card" data-action="game-cricket">크리켓 게임</button>
        <button type="button" class="game-card" data-action="game-breakout">벽돌깨기</button>
      </div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="grade">학년 선택으로</button>
        ${ee()}
      </div>
      ${re(j.subtitle)}
    </div>
  `),z(g)}function Ae(e){if(!fe()){I("grade");return}K({type:"game_open",message:`미니게임 시작: ${e}${Le()?" (관리자)":""}`,detail:{type:e}}),g.innerHTML=B('<div id="game-root"></div>',"game-screen");const t=g.querySelector("#game-root"),a={onBack:()=>I("rest"),onMain:()=>{O=null,Y=null,H=null,I("main")}};e==="dart"?ie=xn(t,a)??null:e==="cricket"?ie=Cn(t,a)??null:e==="breakout"&&(ie=Rn(t,a)??null)}
