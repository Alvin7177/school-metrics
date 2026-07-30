(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();const ve=8,F={title:"SCHOOL METRICS",subtitle:"철저한 내신관리 시스템",footer:"for 해연중 학생들",creator:"2210 박민호"},de={apiKey:"AIzaSyB7YJBfYa9zGnUvLD4DFgR5KLiNKuluHJM",authDomain:"school-metrics-fdee3.firebaseapp.com",projectId:"school-metrics-fdee3",storageBucket:"school-metrics-fdee3.firebasestorage.app",messagingSenderId:"378255554733",appId:"1:378255554733:web:01b06dca5b5307860eae24",measurementId:"G-0BL416S3QD"};function R(){return!!(de.apiKey&&de.projectId&&de.appId)}const Lt="https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js",J="https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js",te="https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";let le=null,be=null,oe=null,pe=null;async function nt(){return R()?le||(pe||(pe=(async()=>{const{initializeApp:e,getApps:t}=await import(Lt);return le=t().length?t()[0]:e(de),le})().catch(e=>(console.warn("[firebase] app init failed",e),pe=null,le=null,null))),pe):null}async function ne(){if(!R())return null;if(be)return be;const e=await nt();if(!e)return null;const{getFirestore:t}=await import(J);return be=t(e),be}async function Se(){if(!R())return null;if(oe)return oe;const e=await nt();if(!e)return null;const{getAuth:t,setPersistence:a,browserLocalPersistence:i}=await import(te);oe=t(e);try{await a(oe,i)}catch(n){console.warn("[firebase] auth persistence",n)}return oe}function at(e){const t=(e==null?void 0:e.code)||"";return{"auth/email-already-in-use":"이미 가입된 계정입니다. 로그인하세요.","auth/invalid-email":"이메일 형식이 올바르지 않습니다.","auth/weak-password":"비밀번호는 6자 이상이어야 합니다.","auth/user-not-found":"가입되지 않은 계정입니다. 먼저 회원가입하세요.","auth/wrong-password":"비밀번호가 틀렸습니다.","auth/invalid-credential":"이메일 또는 비밀번호가 올바르지 않습니다.","auth/too-many-requests":"시도가 너무 많습니다. 잠시 후 다시 시도하세요.","auth/network-request-failed":"네트워크 오류입니다. 연결을 확인하세요.","auth/operation-not-allowed":"Firebase에서 이메일/비밀번호 로그인을 켜야 합니다."}[t]||(e==null?void 0:e.message)||"인증에 실패했습니다."}async function xt(e,t){const a=await Se();if(!a)throw new Error("Firebase가 설정되지 않았습니다.");const{createUserWithEmailAndPassword:i,sendEmailVerification:n}=await import(te);try{const r=await i(a,e,t);try{await n(r.user)}catch(o){console.warn("[firebase] verification mail",o)}return r.user}catch(r){throw r.friendlyMessage=at(r),r}}async function Mt(e,t){const a=await Se();if(!a)throw new Error("Firebase가 설정되지 않았습니다.");const{signInWithEmailAndPassword:i}=await import(te);try{return(await i(a,e,t)).user}catch(n){throw n.friendlyMessage=at(n),n}}async function Je(){const e=await Se();if(!e)return;const{signOut:t}=await import(te);await t(e)}async function $e(){const e=await Se();if(!e)return null;if(e.currentUser)return e.currentUser;const{onAuthStateChanged:t}=await import(te);return new Promise(a=>{const i=t(e,n=>{i(),a(n||null)})})}async function Et(){const e=await $e();return e?(await e.reload(),e):null}async function It(){const e=await $e();if(!e)throw new Error("로그인된 사용자가 없습니다.");const{sendEmailVerification:t}=await import(te);await t(e)}async function Nt(e){const t=await $e();if(!t)return;const{updateProfile:a}=await import(te);await a(t,e)}async function At(e,t){if(!e)return!1;const a=await ne();if(!a)return!1;const{doc:i,setDoc:n,serverTimestamp:r}=await import(J),o={...t};return Object.keys(o).forEach(u=>{o[u]===void 0&&delete o[u]}),await n(i(a,"userProfiles",e),{...o,updatedAt:r()},{merge:!0}),!0}async function Ct(e){if(!e)return null;const t=await ne();if(!t)return null;const{doc:a,getDoc:i}=await import(J),n=await i(a(t,"userProfiles",e));if(!n.exists())return null;const r=n.data();return delete r.updatedAt,r}async function Pt(e){const t=await ne();if(!t)return null;const{collection:a,addDoc:i,serverTimestamp:n}=await import(J),r={...e};return Object.keys(r).forEach(u=>{r[u]===void 0&&delete r[u]}),(await i(a(t,"activityLogs"),{...r,createdAt:n()})).id}async function qt(e=200){const t=await ne();if(!t)return[];const{collection:a,query:i,orderBy:n,limit:r,getDocs:o}=await import(J),u=i(a(t,"activityLogs"),n("at","desc"),r(e));return(await o(u)).docs.map(m=>({id:m.id,...m.data()}))}async function Tt(){const e=await ne();if(!e)return 0;const{collection:t,getDocs:a,deleteDoc:i,query:n,limit:r}=await import(J);let o=0;for(;;){const u=await a(n(t(e,"activityLogs"),r(100)));if(u.empty||(await Promise.all(u.docs.map(h=>i(h.ref))),o+=u.size,u.size<100))break}return o}async function Dt(e){const t=await ne();if(!t)return!1;const{doc:a,setDoc:i,serverTimestamp:n}=await import(J),r={...e};return Object.keys(r).forEach(o=>{r[o]===void 0&&delete r[o]}),await i(a(t,"adminSettings","global"),{...r,updatedAt:n()}),!0}async function Rt(){const e=await ne();if(!e)return null;const{doc:t,getDoc:a}=await import(J),i=await a(t(e,"adminSettings","global"));if(!i.exists())return null;const n=i.data();return delete n.updatedAt,n}const qe="schoolMetricsUserAccount",Ot=new Set(["2024","2025","2026"]),Bt=/^(\d{4})(\d{4})@haeyeon\.ms\.kr$/i,Ye=6;function Le(e){const a=String(e||"").trim().toLowerCase().match(Bt);if(!a)return{ok:!1,error:"해연중 계정(@haeyeon.ms.kr) 형식으로 입력하세요."};const i=a[1],n=a[2],r=we(n);return r.ok?Ot.has(i)?{ok:!0,account:`${i}${r.studentId}@haeyeon.ms.kr`,year:i,studentId:r.studentId,grade:r.grade,classNo:r.classNo,number:r.number}:{ok:!1,error:"년도는 2024, 2025, 2026만 가능합니다."}:r}function we(e){const t=String(e||"").trim();if(!/^\d{4}$/.test(t))return{ok:!1,error:"학번은 숫자 4자리여야 합니다. (예: 1413)"};const a=t[0],i=t[1],n=Number(t.slice(2));return["1","2","3"].includes(a)?"12345678".includes(i)?!Number.isInteger(n)||n<1||n>35?{ok:!1,error:"번호는 01~35만 가능합니다."}:{ok:!0,studentId:t,grade:Number(a),classNo:Number(i),number:n}:{ok:!1,error:"학번 둘째 자리(반)는 1~8만 가능합니다."}:{ok:!1,error:"학번 첫 자리(학년)는 1·2·3만 가능합니다."}}function it(e){const t=String(e||"").trim().replace(/\s+/g," ");return t.length<2?{ok:!1,error:"이름은 2글자 이상 입력하세요."}:t.length>20?{ok:!1,error:"이름은 20글자 이하로 입력하세요."}:{ok:!0,displayName:t}}function rt(e){return String(e||"").length<Ye?{ok:!1,error:`비밀번호는 ${Ye}자 이상이어야 합니다.`}:{ok:!0}}function Te(e){return localStorage.setItem(qe,JSON.stringify(e)),e}function st(e,t={}){return{account:e.account,year:e.year,studentId:e.studentId,grade:e.grade,classNo:e.classNo,number:e.number,displayName:t.displayName||"",loggedInAt:new Date().toISOString(),viaPassword:!0,...t}}function Y(){try{const e=localStorage.getItem(qe);if(!e)return null;const t=JSON.parse(e);return t!=null&&t.account&&Le(t.account).ok?t:null}catch{return null}}function lt(){return!!Y()}function ot(){var e;return((e=Y())==null?void 0:e.account)||null}function jt(){var e;return((e=Y())==null?void 0:e.displayName)||""}function Ut(){var e;return((e=Y())==null?void 0:e.studentId)||""}function De(e=Y()){if(!e)return"";const t=[];return e.displayName&&t.push(e.displayName),e.studentId&&t.push(e.studentId),t.join(" · ")||e.account||""}async function ct(e,t){if(e){try{await Nt({displayName:t.displayName||""})}catch(a){console.warn("[auth] updateProfile",a)}try{await At(e,{displayName:t.displayName||"",studentId:t.studentId||"",year:t.year||"",account:t.account||"",grade:t.grade,classNo:t.classNo,number:t.number})}catch(a){console.warn("[auth] cloud profile",a)}}}async function Re(e,{requireVerified:t=!0}={}){const a=e==null?void 0:e.email;if(!a)return await Je().catch(()=>{}),{ok:!1,error:"계정 이메일을 가져오지 못했습니다."};const i=Le(a);if(!i.ok)return await Je().catch(()=>{}),i;if(t&&!e.emailVerified)return{ok:!1,needVerify:!0,error:"학교 메일함에서 인증 메일의 링크를 눌러주세요. (스팸함도 확인)",account:i.account};let n=String(e.displayName||"").trim(),r=i.studentId,o=i.grade,u=i.classNo,h=i.number;try{const d=await Ct(e.uid);if(d!=null&&d.displayName&&(n=String(d.displayName).trim()),d!=null&&d.studentId){const l=we(d.studentId);l.ok&&(r=l.studentId,o=l.grade,u=l.classNo,h=l.number)}}catch(d){console.warn("[auth] load profile",d)}const m=Y();if((m==null?void 0:m.account)===i.account&&(!n&&m.displayName&&(n=m.displayName),m.studentId)){const d=we(m.studentId);d.ok&&r===i.studentId&&m.studentId!==i.studentId&&(r=d.studentId,o=d.grade,u=d.classNo,h=d.number)}return{ok:!0,user:Te(st({...i,studentId:r,grade:o,classNo:u,number:h},{uid:e.uid||null,emailVerified:!!e.emailVerified,displayName:n}))}}async function Ht(e,t,a){if(!R())return{ok:!1,error:"Firebase 설정이 없습니다."};const i=it(a);if(!i.ok)return i;const n=Le(e);if(!n.ok)return n;const r=rt(t);if(!r.ok)return r;try{const o=await xt(n.account,t);return await ct(o.uid,{displayName:i.displayName,studentId:n.studentId,year:n.year,account:n.account,grade:n.grade,classNo:n.classNo,number:n.number}),Te(st(n,{uid:o.uid,displayName:i.displayName,emailVerified:!1})),{ok:!1,needVerify:!0,registered:!0,account:n.account,displayName:i.displayName,error:"가입되었습니다. 학교 메일함의 인증 링크를 누른 뒤 로그인하세요.",uid:o==null?void 0:o.uid}}catch(o){return{ok:!1,error:o.friendlyMessage||o.message||"회원가입 실패"}}}async function Ft(e,t){if(!R())return{ok:!1,error:"Firebase 설정이 없습니다."};const a=Le(e);if(!a.ok)return a;const i=rt(t);if(!i.ok)return i;try{const n=await Mt(a.account,t);return await n.reload(),Re(n,{requireVerified:!0})}catch(n){return{ok:!1,error:n.friendlyMessage||n.message||"로그인 실패"}}}async function _t({displayName:e,studentId:t}){const a=Y();if(!a)return{ok:!1,error:"로그인이 필요합니다."};const i=it(e);if(!i.ok)return i;const n=we(t);if(!n.ok)return n;const r=Te({...a,displayName:i.displayName,studentId:n.studentId,grade:n.grade,classNo:n.classNo,number:n.number});return await ct(a.uid,{displayName:r.displayName,studentId:r.studentId,year:r.year,account:r.account,grade:r.grade,classNo:r.classNo,number:r.number}),{ok:!0,user:r}}async function Wt(){try{const e=await Et();return e?Re(e,{requireVerified:!0}):{ok:!1,error:"먼저 로그인(비밀번호)을 다시 시도하세요."}}catch(e){return{ok:!1,error:e.message||"인증 상태 확인 실패"}}}async function Gt(){try{return await It(),{ok:!0,message:"인증 메일을 다시 보냈습니다. 메일함을 확인하세요."}}catch(e){return{ok:!1,error:e.message||"인증 메일 재전송 실패"}}}async function Kt(){if(!R())return ge(),null;try{const e=await $e();if(!e)return ge(),null;await e.reload();const t=await Re(e,{requireVerified:!0});return t.ok?t.user:(ge(),null)}catch(e){return console.warn("[auth] restore",e),ge(),null}}function ge(){localStorage.removeItem(qe)}const Vt="73357442",Oe="schoolMetricsAdminSession",Be="schoolMetricsAdminSettings",ke="schoolMetricsActivityLog",ze="schoolMetricsDeviceId",Jt=500,re={restUnlockUses:ve,freeGames:!0,standardScale:[{letter:"A",min:90},{letter:"B",min:80},{letter:"C",min:70},{letter:"D",min:60},{letter:"E",min:0}],artsScale:[{letter:"A",min:80},{letter:"B",min:60},{letter:"C",min:0}]};function je(e,t){try{const a=localStorage.getItem(e);return a?JSON.parse(a):t}catch{return t}}function Ue(e,t){localStorage.setItem(e,JSON.stringify(t))}function He(){let e=localStorage.getItem(ze);return e||(e=`dev-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,localStorage.setItem(ze,e)),e}function ue(){return sessionStorage.getItem(Oe)==="1"}function Yt(e){return String(e)===Vt?(sessionStorage.setItem(Oe,"1"),z({type:"admin_login",message:"관리자 로그인"}),!0):!1}function zt(){sessionStorage.removeItem(Oe)}function K(){const e=je(Be,{});return{...re,...e,standardScale:e.standardScale||re.standardScale,artsScale:e.artsScale||re.artsScale}}function Xt(e){const t={...K(),...e};return Ue(Be,t),z({type:"admin_settings",message:"관리자 설정 변경",detail:e}),R()&&Dt(t).catch(a=>console.warn("[firebase] settings save",a)),t}async function Qt(){if(!R())return K();try{const e=await Rt();if(e&&typeof e=="object"){const t={...re,...e,standardScale:e.standardScale||re.standardScale,artsScale:e.artsScale||re.artsScale};return Ue(Be,t),t}}catch(e){console.warn("[firebase] settings load",e)}return K()}function xe(){return Number(K().restUnlockUses)||ve}function Me(){return ue()&&K().freeGames!==!1}function z(e){const t={id:`${Date.now()}-${Math.random().toString(36).slice(2,7)}`,at:new Date().toISOString(),deviceId:He(),...e,account:e.account||ot()||"guest",displayName:e.displayName||jt()||"",studentId:e.studentId||Ut()||""},a=je(ke,[]);return a.unshift(t),Ue(ke,a.slice(0,Jt)),R()&&Pt(t).catch(i=>console.warn("[firebase] log",i)),t}function Fe(){return je(ke,[])}async function Zt(){const e=Fe();if(!R())return{source:"local",logs:e};try{const t=await qt(300),a=new Map;for(const n of[...t,...e]){const r=n.id||`${n.at}-${n.deviceId}-${n.type}-${n.message}`;a.has(r)||a.set(r,n)}return{source:"firebase",logs:[...a.values()].sort((n,r)=>String(r.at).localeCompare(String(n.at)))}}catch(t){return console.warn("[firebase] fetch logs",t),{source:"local-fallback",logs:e,error:String(t.message||t)}}}async function en({cloud:e=!0}={}){if(localStorage.removeItem(ke),e&&R())try{await Tt()}catch(t){console.warn("[firebase] clear",t)}z({type:"admin_clear_logs",message:"활동 로그 초기화"})}function tn(e=Fe()){return JSON.stringify({exportedAt:new Date().toISOString(),deviceId:He(),firebase:R(),settings:K(),logs:e},null,2)}function nn(){return{configured:R(),projectId:de.projectId||""}}const _e="schoolMetricsUniqueSubjects";function dt(){try{const e=localStorage.getItem(_e),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch{return[]}}function an(e){localStorage.setItem(_e,JSON.stringify(e))}function rn(e){const t=xe(),a=dt(),i=!a.includes(e);return i&&(a.push(e),an(a)),{isNew:i,uniqueCount:a.length,justUnlocked:i&&a.length>=t}}function We(){return dt().length}function me(){return Me()?!0:We()>=xe()}function sn(){return Math.max(0,xe()-We())}function ln(){Me()||localStorage.removeItem(_e)}function ut(){const e=xe(),t=We(),a=sn();return Me()?"관리자 모드: 미니게임 자유 이용":me()?`서로 다른 과목 ${t}개 달성! 휴식 미니게임 이용 가능`:`서로 다른 과목 ${a}개 더 계산하면 해금 (${t}/${e})`}const Ne=["희망은 좋은 것이다. 어쩌면 가장 좋은 것일지도. — 《쇼생크 탈출》","해야 한다, 아니면 안 된다. 그 중간은 없다. — 《스타워즈》","과거는 과거일 뿐이야. 배울 수만 있다면. — 《라이온 킹》","가장 어두운 시간은 해가 뜨기 직전이다. — 《어벤져스: 엔드게임》","세상에서 중요한 건 내가 누구냐가 아니라, 내가 뭘 하느냐다. — 《배트맨: 다크나이트》","우리에게 주어진 시간을 어떻게 쓸지만 결정하면 된다. — 《반지의 제왕》","아주 작은 존재도 미래를 바꿀 수 있다. — 《반지의 제왕》","자유는 아무 대가 없이 오지 않는다. — 《브레이브하트》","지금 이 순간을 잡아라. — 《데드 포엇 소사이어티》","무엇이든 할 수 있다. — 《쿵푸 판다》","그냥 계속 헤엄쳐. — 《니모를 찾아서》","모든 걸 시도해 봐. — 《주토피아》","두려움을 없애는 방법은 그것과 마주하는 것이다. — 《인사이드 아웃》","뜻이 있는 곳에 길이 있다. — 《아바타》","비가 그친 뒤에는 반드시 맑은 하늘이 온다. — 《날씨의 아이》","나는 이 세계를 이해할 수 없어. 그래도 계속한다. — 《록키》","시련이 없었다면 챔피언도 없다. — 《록키》","인생은 수레바퀴와 같아. 항상 앞으로 나아가야 한다. — 《니모를 찾아서》","이겨야 한다. 어떻게든. — 《친구》","꿈은 거짓말이 아니다. 반드시 이루어질 내일이다. — 《드림하이》","포기하면 그 순간 게임 끝이야, 인생도 마찬가지다. — 《슬램덩크》","죽을 때 후회 없는 인생을 살아라. — 《원피스》","약한 것은 죄가 아니다. 약한 채로 있으면 안 될 뿐. — 《귀멸의 칼날》","막을 때까지 싸워라. — 《진격의 거인》","노력은 배신하지 않는다. — 《하이큐!!》","패배는 패배하지 않는 것보다 낫다. — 《하이큐!!》","시선을 돌리지 마. 앞만 봐. — 《센과 치히로의 행방불명》","살아있는 한 힘을 내라. — 《하울의 움직이는 성》","바람이 분다. 견뎌야 한다. — 《바람의 나라》","상대는 나 자신이다. — 《초속 5센티미터》","포기하지 말 것. 내일이 있으니. — 《드래곤볼》","사람은 누구나 다시 태어날 수 있다. — 《바람의 나라》","아는 것이 힘이다. — 프랜시스 베이컨","천 리 길도 한 걸음부터. — 노자","배우고 또 배우면 어찌 기쁘지 아니하랴. — 공자","백번 듣는 것보다 한 번 보는 것이 낫다. — 공자","세 사람이 길을 가면 반드시 나의 스승이 있다. — 공자","하늘은 큰 뜻을 품은 자에게 먼저 고생을 시킨다. — 맹자","독서는 마음의 양식이다. — 키케로","하늘은 스스로 돕는 자를 돕는다. — 소포클레스","그대가 갈망하는 것을 따르라. — 랄프 왔도 에머슨","겁쟁이는 죽기 전에 여러 번 죽는다. 용감한 자는 한 번만 죽는다. — 셰익스피어","열정 없이는 위대한 것은 이루어지지 않는다. — 게오르크 빌헬름 프리드리히 헤겔","나는 나의 운명을 사랑한다. — 프리드리히 니체","오늘 할 일을 내일로 미루지 마라. — 벤자민 프랭클린","천재는 1%의 영감과 99%의 땀이다. — 토마스 에디슨","실패는 성공의 어머니이다. — 토마스 에디슨","시간은 금이다. — 벤자민 프랭클린","어리석은 자는 경험에서 아무것도 배우지 않는다. — 벤자민 프랭클린","실용적인 것이 가장 시적인 것이다. — 벤자민 프랭클린","깊은 생각 없는 독서는 낮잠과 같다. — 프랜시스 베이컨","인생은 속도가 아니라 방향이다. — 에이브러햄 링컨","성공은 최종적인 것이 아니며, 실패는 치명적인 것이 아니다. — 윈스턴 처칠","가장 위대한 영광은 넘어지지 않는 것이 아니라, 넘어질 때마다 일어서는 것이다. — 넬슨 만델라","용기는 두려움의 부재가 아니라, 두려움에도 행동하는 것이다. — 넬슨 만델라","네가 할 수 있다고 믿든 못 한다고 믿든, 네 말이 맞다. — 헨리 포드","성공의 비결은 시작하는 것이다. — 마크 트웨인","행운은 준비된 자에게 찾아온다. — 루이 파스퇴르","한계란 대부분 마음속에 있는 환상일 뿐이다. — 무하마드 알리","나는 세계 챔피언이다. 내가 그렇다고 말하기 전부터. — 무하마드 알리","항상 갈망하고, 우직하게 나아가라. — 스티브 잡스","당신의 시간은 제한되어 있다. 다른 사람의 인생을 살며 낭비하지 마라. — 스티브 잡스","오늘 나는 죽었다면 무엇을 후회하겠는가. — 스티브 잡스","죽고자 하면 살 것이요, 살고자 하면 죽을 것이니라. — 이순신","한 번도 실수한 적 없는 사람은 새로운 것을 시도한 적이 없는 사람이다. — 알버트 아인슈타인","네가 정말 소중히 여기는 것에 시간을 써라. — 《어린 왕자》","꽃을 단 한 송이라도 내가 직접 가꾸면, 내 세계에 엇비슷한 시간이 흐른다. — 《어린 왕자》","세상에서 가장 강한 사람은 스스로를 이기는 사람이다. — 무라카미 하루키","빛을 보고자 한다면 어둠을 견뎌야 한다. — 무라카미 하루키","사람은 마음먹은 것은 다 이룬다. — 《바보》","고통 없이는 얻는 것도 없다. — 라틴 격언","로마는 하루아침에 이루어지지 않았다. — 속담","연습이 완벽을 만든다. — 속담","배움에는 왕도가 없다. — 유클리드","작은 일에 충실하라. 그곳에 네 힘이 있다. — 루드야드 키플링","가장 큰 위험은 위험을 감수하지 않는 것이다. — 마크 주커버그","인생은 짧고, 예술은 길다. — 히포크라테스","삶을 살아가는 가장 좋은 복수는 성공하는 것이다. — 프랭크 시나트라","피할 수 없으면 즐겨라. — 로버트 엘리엇","포기하지 않는 한, 늦었다고 생각할 때가 가장 빠른 때다. — 속담","꾸준함은 재능을 이긴다. — 속담","반복은 지루하지만, 반복 없는 실력은 환상이다. — 속담","오늘의 노력이 내일의 실력이 된다. — 속담","지금이 가장 빠른 시작이다. — 속담","목표 없는 공부는 방향 잃은 배와 같다. — 속담","모르는 것을 아는 것이 배움의 시작이다. — 속담","실력은 하루아침에 생기지 않는다. — 속담","쉬는 것도 실력이다. 번아웃을 조심하자. — 속담","비교하지 말고, 어제의 나와 겨루자. — 속담","이해가 안 되면 다시 보면 된다. 반복이 답이다. — 속담","시험은 결과일 뿐, 과정이 실력이다. — 속담","1%씩 매일 오르면 37배가 된다. — 속담","모르는 건 부끄러운 게 아니다. 묻지 않는 게 문제다. — 속담","오답 노트 한 장이 교과서 열 페이지보다 강하다. — 속담","할 수 있다고 믿는 순간, 절반은 온 것이다. — 속담","오늘 공부한 만큼, 내일은 덜 불안하다. — 속담"],Xe="schoolMetricsQuoteIndex";function on(){let e=Number(localStorage.getItem(Xe)||0);const t=Ne[e%Ne.length];return localStorage.setItem(Xe,String((e+1)%Ne.length)),t}const cn={1:{label:"1학년",note:"1학년은 2학기부터 내신 성적이 반영됩니다.",subjects:{국어:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"나만의 노트(나노)",weight:15,kind:"perf"}]}}},수학:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"기본도형 탐구 프로젝트",weight:20,kind:"perf"},{label:"평면·입체 도형 탐구",weight:20,kind:"perf"}]}}},사회:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"사회화 자서전 만들기",weight:20,kind:"perf"},{label:"모의 선거",weight:20,kind:"perf"}]}}},과학:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"실험 보고서 작성",weight:20,kind:"perf"},{label:"달의 위상 변화 관찰",weight:20,kind:"perf"}]}}},영어:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"희망 직업 소개",weight:20,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]}}},음악:{semesters:{2:{label:"2학기",items:[{label:"우쿨렐레 연주",weight:50,kind:"perf"},{label:"작곡가 탐구 활동",weight:50,kind:"perf"}]}}},미술:{semesters:{2:{label:"2학기",items:[{label:"스텐실",weight:50,kind:"perf"},{label:"문자도",weight:50,kind:"perf"}]}}},체육:{semesters:{2:{label:"2학기",items:[{label:"경기형 스포츠(축구)",weight:50,kind:"perf"},{label:"기록 도전형(달리기)",weight:50,kind:"perf"}]}}},정보:{semesters:{2:{label:"2학기",items:[{label:"AI 활용",weight:50,kind:"perf"},{label:"디지털 문화 표현",weight:50,kind:"perf"}]}}},"진로와 직업":{semesters:{2:{label:"2학기",items:[{label:"창업 프로젝트",weight:50,kind:"perf"},{label:"진로 디자인",weight:50,kind:"perf"}]}}},기술가정:{semesters:{2:{label:"2학기",items:[{label:"과학·미래기술 보고서",weight:35,kind:"perf"},{label:"에너지 신문 제작",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]}}}}},2:{label:"2학년",subjects:{국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"발표와 듣기",weight:15,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"복합양식 자료를 활용한 글 작성",weight:15,kind:"perf"}]}}},수학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"일차방정식·일차부등식",weight:20,kind:"perf"},{label:"연립일차방정식·일차함수",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"삼각형·사각형의 성질",weight:20,kind:"perf"},{label:"도형의 닮음·피타고라스",weight:20,kind:"perf"}]}}},역사:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"고대 문명 지도 만들기",weight:20,kind:"perf"},{label:"고대사 신문 만들기",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"서양 고대 문화유산 소개",weight:20,kind:"perf"},{label:"유럽 여행 소개 글쓰기",weight:20,kind:"perf"}]}}},과학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"밀도 측정",weight:10,kind:"perf"},{label:"지권 층상구조 모형 제작",weight:10,kind:"perf"},{label:"주기율표 탐구",weight:10,kind:"perf"},{label:"광합성 탐구",weight:10,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"소리의 성질 탐구",weight:10,kind:"perf"},{label:"인체 프로젝트",weight:20,kind:"perf"},{label:"전류,전압,저항 사이의 관계 탐구",weight:10,kind:"perf"}]}}},영어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"},{label:"발명품 소개",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"지역 축제 홍보",weight:20,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]}}},음악:{semesters:{1:{label:"1학기",items:[{label:"우쿨렐레 연주",weight:50,kind:"perf"},{label:"텅드럼 연주",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"펜비트 연주",weight:50,kind:"perf"},{label:"리코더 연주",weight:50,kind:"perf"}]}}},미술:{semesters:{1:{label:"1학기",items:[{label:"세밀화",weight:50,kind:"perf"},{label:"음식 모형 만들기",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"점묘화",weight:50,kind:"perf"},{label:"서양미술사 보고서",weight:50,kind:"perf"}]}}},체육:{semesters:{1:{label:"1학기",items:[{label:"경기형 스포츠(킨볼)",weight:60,kind:"perf"},{label:"도전형(제자리멀리뛰기)",weight:40,kind:"perf"}]},2:{label:"2학기",items:[{label:"경기형 스포츠(배드민턴)",weight:60,kind:"perf"},{label:"건강관리(줄넘기)",weight:40,kind:"perf"}]}}},도덕:{semesters:{1:{label:"1학기",items:[{label:"도덕적 인물 지폐 제작",weight:50,kind:"perf"},{label:"우정 네 컷 만들기",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"정보 카드 뉴스 제작",weight:50,kind:"perf"},{label:"인권 모니터링 제안서",weight:50,kind:"perf"}]}}},중국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 기말고사",weight:40,kind:"exam"},{label:"한어병음 작성",weight:30,kind:"perf"},{label:"중국어 말하기",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 기말고사",weight:40,kind:"exam"},{label:"하루 일과표 만들기",weight:30,kind:"perf"},{label:"중국어 말하기",weight:30,kind:"perf"}]}}},"금융과 미래":{semesters:{2:{label:"2학기",items:[{label:"투자 성향 검사",weight:50,kind:"perf"},{label:"투자 포트폴리오 구성",weight:50,kind:"perf"}]}}},기술가정:{semesters:{1:{label:"1학기",items:[{label:"효과적 의사소통 프로젝트",weight:35,kind:"perf"},{label:"제조 기술 프로젝트",weight:35,kind:"perf"},{label:"자기주도노트 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"균형 잡힌 식단 계획",weight:35,kind:"perf"},{label:"친환경 의복 생활",weight:35,kind:"perf"},{label:"자기주도노트 작성",weight:30,kind:"perf"}]}}}}},3:{label:"3학년",note:"3학년 2학기에는 기말고사가 없습니다.",subjects:{국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"논설문 쓰기",weight:15,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"한 학기 한 권 읽기",weight:30,kind:"perf"},{label:"문장의 짜임 고려해서 자신감 있게 발표",weight:30,kind:"perf"}]}}},사회:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"국가 기관 탐구로 권력 분립 이해",weight:20,kind:"perf"},{label:"국민 경제 지표와 국제 거래 이해",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"인구·도시 문제 탐구",weight:30,kind:"perf"},{label:"농업 산업화·세계화",weight:30,kind:"perf"}]}}},역사:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"고려 정치 변천",weight:20,kind:"perf"},{label:"고려의 문화 및 조선 통치 체제 탐구",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"조선 왕 가상 인터뷰",weight:30,kind:"perf"},{label:"양 난의 이해 및 영정조 정책 탐구",weight:30,kind:"perf"}]}}},도덕:{semesters:{1:{label:"1학기",items:[{label:"1학기 기말고사",weight:40,kind:"exam"},{label:"폭력 예방 논술문 작성",weight:30,kind:"perf"},{label:"사회 정의 실현 논술문 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"환경 보호 제안서",weight:30,kind:"perf"},{label:"실패 이력서 소개",weight:30,kind:"perf"}]}}},수학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"인수분해를 이용한 수의 성질 탐구",weight:20,kind:"perf"},{label:"이차함수 그래프",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"삼각비 개념 보고서",weight:30,kind:"perf"},{label:"원의 성질 문제해결",weight:30,kind:"perf"}]}}},과학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"기상 현상 실험",weight:20,kind:"perf"},{label:"화학 반응의 규칙 탐구",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"세포분열 관찰 실험",weight:30,kind:"perf"},{label:"물체 운동 분석",weight:30,kind:"perf"}]}}},영어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:15,kind:"perf"},{label:"급식 메뉴 프로젝트",weight:15,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"영어 듣기",weight:20,kind:"perf"},{label:"영어독서",weight:20,kind:"perf"},{label:"통계 자료 활용 프로젝트",weight:20,kind:"perf"}]}}},음악:{semesters:{1:{label:"1학기",items:[{label:"칼림바 연주",weight:50,kind:"perf"},{label:"전자드럼 연주",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"노래 부르기",weight:50,kind:"perf"},{label:"디자인사 연구보고서",weight:50,kind:"perf"}]}}},미술:{semesters:{1:{label:"1학기",items:[{label:"포트레이트 드로잉",weight:50,kind:"perf"},{label:"비주얼 리터러시",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"오마주",weight:50,kind:"perf"},{label:"디자인 조사 보고서",weight:50,kind:"perf"}]}}},체육:{semesters:{1:{label:"1학기",items:[{label:"전통 표현(티니클링)",weight:40,kind:"perf"},{label:"플로어볼",weight:60,kind:"perf"}]},2:{label:"2학기",items:[{label:"건강·체력 관리(타바타)",weight:40,kind:"perf"},{label:"배구",weight:60,kind:"perf"}]}}},기술가정:{semesters:{1:{label:"1학기",items:[{label:"생애 설계",weight:35,kind:"perf"},{label:"수송기술 제작",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"스마트폰 앱 만들기",weight:35,kind:"perf"},{label:"적정 기술 사례 조사",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]}}}}}};function fe(e){return cn[e]??null}function dn(e){const t=fe(e);return t?Object.keys(t.subjects):[]}function Ge(e,t){var a;return((a=fe(e))==null?void 0:a.subjects[t])??null}function ft(e,t){const a=Ge(e,t);return a?Object.keys(a.semesters).map(Number).sort((i,n)=>i-n):[]}function un(e,t,a){var n;const i=Ge(e,t);return((n=i==null?void 0:i.semesters[a])==null?void 0:n.items)??[]}function Qe(e,t,a){var n;const i=Ge(e,t);return((n=i==null?void 0:i.semesters[a])==null?void 0:n.label)??`${a}학기`}function fn(e,t,a,i){return`${e}-${t}-${a}-${i}`}function mn(e,t,a){return un(e,t,a).map((n,r)=>({key:fn(e,t,a,r),subject:t,semester:a,label:n.label,weight:n.weight,kind:n.kind}))}function mt(e,t){let a=0,i=0;for(const n of e){const r=t[n.key];if(r===""||r===null||r===void 0)continue;const o=Number(r);Number.isNaN(o)||(a+=n.weight,i+=o*n.weight)}return a===0?null:i/a}function bn(e,t){const a={},i=[];for(const r of e){const o=t[r.key];if(o===""||o===null||o===void 0){i.push(r);continue}const u=Number(o);if(Number.isNaN(u)){i.push(r);continue}a[r.key]=u}const n={...a};for(const r of i)n[r.key]=100;return{average:mt(e,n),remainingCount:i.length}}const pn=["음악","미술","체육"],gn=[{letter:"A",min:90},{letter:"B",min:80},{letter:"C",min:70},{letter:"D",min:60},{letter:"E",min:0}],hn=[{letter:"A",min:80},{letter:"B",min:60},{letter:"C",min:0}];function bt(e){return e.map((t,a,i)=>{const n=i[a-1],r=t.min===0?`${t.letter} (${(n==null?void 0:n.min)??60}점 미만)`:`${t.letter} (${t.min}점 이상)`;return{letter:t.letter,min:Number(t.min)||0,label:r}})}function pt(){const e=K().standardScale;return bt(e!=null&&e.length?e:gn)}function gt(){const e=K().artsScale;return bt(e!=null&&e.length?e:hn)}function Ke(e){return pn.includes(e)}function Ee(e){return e==null||Number.isNaN(e)?null:Math.round(e)}function Ve(e){return Ke(e)?gt():pt()}function Pe(e,t){const a=Ee(e);if(a===null)return"-";const i=Ve(t);for(const n of i)if(a>=n.min)return n.letter;return i[i.length-1].letter}function ce(e){return`${e}등급`}const Ze=["조금만 더 올리면 된다. 할 수 있어!","상위 등급이 코앞이다. 끝까지 달려보자!","지금의 노력이 등급을 바꾼다. 포기하지 마!","아직 끝나지 않았어. 충분히 올릴 수 있어!","남은 항목이 기회다. 집중해서 마무리하자!","한 걸음만 더 가면 등급이 달라진다. 파이팅!","가능성은 아직 살아 있다. 믿고 가보자!","오늘의 한 문제가 등급을 바꿀 수도 있어!","목표 등급까지 거의 다 왔다. 조금만 더!","실력은 거짓말하지 않는다. 계속 밀어붙여!"];function yn(e){return e.projection.remainingCount>0&&e.letter!==e.projLetter}function wn(){const e=Math.floor(Math.random()*Ze.length);return Ze[e]}function ht(e=null){const t=e?Ke(e):!1,a=e?t?`${e}은(는) 예체능 과목 (A·B·C)`:`${e}은(는) 일반 과목 (A·B·C·D·E)`:"과목 유형에 따라 등급 기준이 다릅니다.",i=pt(),n=gt();return`
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
  `}function yt(e){const t=e.querySelector("[data-toggle='criteria']"),a=e.querySelector("#criteria-panel");!t||!a||t.addEventListener("click",()=>{const i=a.classList.toggle("hidden");t.setAttribute("aria-expanded",String(!i)),t.textContent=i?"▶ 등급 기준표 확인":"▼ 등급 기준표 닫기"})}function kn(e,t,a,i){if(a===null)return null;const n=Ee(a),r=Pe(n,i),o=Ve(i),u=o.findIndex(L=>L.letter===r);if(u<=0)return{targetLetter:r,needed:null,message:"이미 최고 등급입니다."};const h=o[u-1],m=h.min,x=e.filter(L=>{const v=t[L.key];return v===""||v===null||v===void 0||Number.isNaN(Number(v))});if(x.length===0)return{targetLetter:h.letter,needed:null,message:"모든 항목이 입력되었습니다."};let d=0,l=0,b=0;for(const L of e){const v=t[L.key];if(v===""||v===null||v===void 0||Number.isNaN(Number(v))){b+=L.weight;continue}d+=L.weight,l+=Number(v)*L.weight}if(b===0)return null;const s=d+b,k=(m*s-l)/b,M=Math.max(0,Math.min(100,k));return{targetLetter:h.letter,needed:Math.ceil(M*10)/10,remainingCount:x.length,message:null}}function vn(e,t,a,i){const r=Ve(i).find(s=>s.letter===a);if(!r)return null;let o=0,u=0,h=0,m=0;for(const s of e){const k=t[s.key];if(k===""||k===null||k===void 0||Number.isNaN(Number(k))){h+=s.weight,m+=1;continue}u+=s.weight,o+=Number(k)*s.weight}if(h===0)return null;const x=u+h,l=((r.min-.5)*x-o)/h;return{minScore:Math.ceil(Math.max(0,Math.min(100,l))*10)/10,remainingCount:m}}function Sn(e){const t=Ee(e);return{raw:e,rounded:t,display:`${t}점`}}function $n(e,t,a){const i=mt(e,t);if(i===null)return null;const{rounded:n}=Sn(i),r=Pe(n,a),o=bn(e,t),u=Ee(o.average),h=kn(e,t,i,a),m=vn(e,t,r,a);return{average:i,rounded:n,letter:r,projection:o,projRounded:u,projLetter:Pe(u,a),needed:h,confirmMin:m}}function ae(e="globe"){return`
    <svg class="${e}" viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="48" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.35"/>
      <ellipse cx="60" cy="60" rx="48" ry="16" fill="none" stroke="currentColor" stroke-width="1"/>
      <ellipse cx="60" cy="60" rx="16" ry="48" fill="none" stroke="currentColor" stroke-width="1"/>
      <ellipse cx="60" cy="60" rx="34" ry="48" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.7"/>
      <line x1="12" y1="60" x2="108" y2="60" stroke="currentColor" stroke-width="0.8"/>
      <line x1="60" y1="12" x2="60" y2="108" stroke="currentColor" stroke-width="0.8"/>
    </svg>
  `}function Ln(){return'<img class="title-bg" src="./title-bg.png" alt="" aria-hidden="true" />'}function xn(){return'<img class="go-bg" src="./go-bg.png" alt="" aria-hidden="true" />'}function wt(e){return`grade-theme-${e}`}function _(e,t=""){return`<div class="phone-screen ${t}">${e}</div>`}function se(e){return`<p class="screen-footer">${e}</p>`}function ie(e="main"){return`<button type="button" class="link-btn" data-action="${e}">메인화면으로</button>`}const kt=[20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5],he=8;function Mn(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function En(e,t,a){var i,n;(i=e.querySelector('[data-nav="back"]'))==null||i.addEventListener("click",t),(n=e.querySelector('[data-nav="main"]'))==null||n.addEventListener("click",a)}function In(e,t){const a=Math.hypot(e,t);if(a>1)return{points:0,label:"보드 밖"};if(a<=.07)return{points:50,label:"더블 불 · 50"};if(a<=.14)return{points:25,label:"싱글 불 · 25"};let i=Math.atan2(e,-t);i<0&&(i+=Math.PI*2);const n=Math.floor((i+Math.PI/20)%(Math.PI*2)/(Math.PI/10)),r=kt[n];return a>=.9?{points:r*2,label:`더블 ${r} · ${r*2}`}:a>=.52&&a<=.62?{points:r*3,label:`트리플 ${r} · ${r*3}`}:{points:r,label:`싱글 ${r} · ${r}`}}function Ae(e,t,a){const i=t/2,n=t/2,r=t*.42;e.clearRect(0,0,t,t),e.fillStyle="#1a1a1a",e.beginPath(),e.arc(i,n,r*1.08,0,Math.PI*2),e.fill();for(let o=0;o<20;o++){const u=-Math.PI/2-Math.PI/20+o*Math.PI/10,h=u+Math.PI/10,m=o%2===0;e.beginPath(),e.moveTo(i,n),e.arc(i,n,r*.9,u,h),e.closePath(),e.fillStyle=m?"#111":"#ece6d8",e.fill(),e.beginPath(),e.moveTo(i,n),e.arc(i,n,r*.52,u,h),e.closePath(),e.fillStyle=m?"#1c1c1c":"#f5f0e6",e.fill(),e.beginPath(),e.arc(i,n,r,u,h),e.arc(i,n,r*.9,h,u,!0),e.closePath(),e.fillStyle=o%2===0?"#c4122f":"#0a7a3c",e.fill(),e.beginPath(),e.arc(i,n,r*.62,u,h),e.arc(i,n,r*.52,h,u,!0),e.closePath(),e.fillStyle=o%2===0?"#c4122f":"#0a7a3c",e.fill()}e.strokeStyle="rgba(180,180,180,0.55)",e.lineWidth=1;for(let o=0;o<20;o++){const u=-Math.PI/2-Math.PI/20+o*Math.PI/10;e.beginPath(),e.moveTo(i,n),e.lineTo(i+Math.cos(u)*r,n+Math.sin(u)*r),e.stroke()}[.9,.62,.52,.14,.07].forEach(o=>{e.beginPath(),e.arc(i,n,r*o,0,Math.PI*2),e.stroke()}),e.beginPath(),e.arc(i,n,r*.14,0,Math.PI*2),e.fillStyle="#0a7a3c",e.fill(),e.beginPath(),e.arc(i,n,r*.07,0,Math.PI*2),e.fillStyle="#c4122f",e.fill(),e.fillStyle="#fff",e.font=`bold ${Math.max(10,t*.045)}px sans-serif`,e.textAlign="center",e.textBaseline="middle";for(let o=0;o<20;o++){const u=-Math.PI/2+o*Math.PI/10,h=i+Math.cos(u)*r*1.14,m=n+Math.sin(u)*r*1.14;e.fillText(String(kt[o]),h,m)}for(const o of a)e.beginPath(),e.arc(i+o.nx*r,n+o.ny*r,4,0,Math.PI*2),e.fillStyle="#fff700",e.fill(),e.strokeStyle="#000",e.stroke()}function Nn(e,{onBack:t,onMain:a}){let i=0,n=he,r="vertical",o=.5,u=.5,h=1,m=1,x=0,d=0;const l=[],b=1.35;e.innerHTML=`
    <div class="game-panel">
      <h2 class="game-title">다트 게임</h2>
      <p class="game-desc">바가 가운데 올 때 탭/스페이스로 멈추세요. (세로 → 가로)</p>
      <div class="dart-stats">
        <span id="dart-score">점수: 0</span>
        <span id="dart-throws">남은 횟수: ${he}</span>
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
      ${Mn()}
    </div>
  `;const s=e.querySelector("#dart-canvas"),k=s.getContext("2d"),M=e.querySelector("#dart-score"),L=e.querySelector("#dart-throws"),v=e.querySelector("#dart-feedback"),p=e.querySelector("#dart-stop"),I=e.querySelector("#dart-retry"),q=e.querySelector("#aim-v"),P=e.querySelector("#aim-h"),T=e.querySelector(".aim-bar-v"),O=e.querySelector(".aim-bar-h");function D(){const c=Math.min(300,e.clientWidth||300);s.width=c,s.height=c,Ae(k,c,l)}function U(){q.style.top=`${o*100}%`,P.style.left=`${u*100}%`,T.classList.toggle("active",r==="vertical"),O.classList.toggle("active",r==="horizontal")}function B(c){d||(d=c);const f=Math.min(.05,(c-d)/1e3);d=c,r==="vertical"?(o+=h*b*f,o>=1&&(o=1,h=-1),o<=0&&(o=0,h=1)):r==="horizontal"&&(u+=m*b*f,u>=1&&(u=1,m=-1),u<=0&&(u=0,m=1)),U(),x=requestAnimationFrame(B)}function H(){const c=(o-.5)*2.05,f=(u-.5)*2.05,y=In(f,c);if(l.push({nx:f,ny:c}),i+=y.points,n-=1,M.textContent=`점수: ${i}`,L.textContent=`남은 횟수: ${n}`,Ae(k,s.width,l),v.textContent=y.label,n<=0){r="done",p.classList.add("hidden"),I.classList.remove("hidden"),v.textContent=`게임 종료! 최종 ${i}점`;return}r="vertical",o=Math.random(),u=Math.random(),v.textContent="세로 바를 가운데에 맞춰 멈추세요!"}function S(c){var f;if((f=c==null?void 0:c.preventDefault)==null||f.call(c),r==="vertical"){r="horizontal",v.textContent="가로 바를 가운데에 맞춰 멈추세요!";return}r==="horizontal"&&(r="result",H())}function N(c){(c.code==="Space"||c.key===" ")&&(c.preventDefault(),S(c))}function g(){i=0,n=he,r="vertical",l.length=0,o=.2,u=.2,M.textContent="점수: 0",L.textContent=`남은 횟수: ${he}`,v.textContent="세로 바를 가운데에 맞춰 멈추세요!",p.classList.remove("hidden"),I.classList.add("hidden"),Ae(k,s.width,l)}return D(),U(),x=requestAnimationFrame(B),p.addEventListener("click",S),p.addEventListener("touchstart",S,{passive:!1}),I.addEventListener("click",g),window.addEventListener("keydown",N),window.addEventListener("resize",D),En(e,t,a),()=>{cancelAnimationFrame(x),window.removeEventListener("keydown",N),window.removeEventListener("resize",D)}}const Q=12;function An(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function Cn(e,t,a){var i,n;(i=e.querySelector('[data-nav="back"]'))==null||i.addEventListener("click",t),(n=e.querySelector('[data-nav="main"]'))==null||n.addEventListener("click",a)}function Pn(e,{onBack:t,onMain:a}){let i=0,n=0,r=!1,o=!0,u=.08,h=.55,m=0,x=0,d=0,l=!1;e.innerHTML=`
    <div class="game-panel">
      <h2 class="game-title">크리켓 게임</h2>
      <p class="game-desc">공이 타격존(노란 선)에 올 때 탭/스페이스로 스윙!</p>
      <div class="cricket-stats">
        <span id="cricket-runs">득점: 0</span>
        <span id="cricket-balls">볼: 0 / ${Q}</span>
      </div>
      <canvas id="cricket-canvas" class="game-canvas cricket-canvas" width="320" height="420"></canvas>
      <button type="button" class="btn-go" id="cricket-swing">SWING!</button>
      <button type="button" class="btn-secondary hidden" id="cricket-retry">다시하기</button>
      <p class="game-feedback" id="cricket-feedback">공이 다가옵니다…</p>
      ${An()}
    </div>
  `;const b=e.querySelector("#cricket-canvas"),s=b.getContext("2d"),k=e.querySelector("#cricket-runs"),M=e.querySelector("#cricket-balls"),L=e.querySelector("#cricket-feedback"),v=e.querySelector("#cricket-swing"),p=e.querySelector("#cricket-retry"),I=.72,q=.09;function P(){const S=Math.min(320,Math.max(260,e.clientWidth-16||300));b.width=S,b.height=Math.round(S*1.3)}function T(){const S=b.width,N=b.height;s.clearRect(0,0,S,N),s.fillStyle="#6ec8ff",s.fillRect(0,0,S,N*.22),s.fillStyle="#3d8c3a",s.fillRect(0,N*.18,S,N*.12);for(let A=0;A<18;A++)s.fillStyle=`hsl(${A*47%360} 70% 45%)`,s.beginPath(),s.arc(10+A*(S/17),N*.22,6,0,Math.PI*2),s.fill();s.fillStyle="#4caf50",s.fillRect(0,N*.28,S,N*.72);const g=S*.28,c=(S-g)/2,f=N*.3,y=N*.58;s.fillStyle="#c4a574",s.beginPath(),s.moveTo(c+g*.15,f),s.lineTo(c+g*.85,f),s.lineTo(c+g,f+y),s.lineTo(c,f+y),s.closePath(),s.fill();const $=f+y*I;if(s.strokeStyle="#fff41a",s.lineWidth=3,s.setLineDash([6,4]),s.beginPath(),s.moveTo(c-8,$),s.lineTo(c+g+8,$),s.stroke(),s.setLineDash([]),s.fillStyle="#8d6e63",s.beginPath(),s.ellipse(S/2,f+18,10,14,0,0,Math.PI*2),s.fill(),s.fillStyle="#66bb6a",s.beginPath(),s.ellipse(S/2,f+y-10,16,22,0,0,Math.PI*2),s.fill(),s.save(),s.translate(S/2+14,f+y-18),s.rotate(m>0?-.9:-.2),s.fillStyle="#f5f5f5",s.fillRect(-4,-28,8,36),s.restore(),!o&&!l){const A=f+y*u,C=S/2+Math.sin(u*6)*4,Ie=7+u*4;s.beginPath(),s.arc(C,A,Ie,0,Math.PI*2),s.fillStyle="#ef5350",s.fill(),s.strokeStyle="#fff",s.lineWidth=1.5,s.stroke()}m>0&&(s.fillStyle="rgba(255,244,26,0.15)",s.fillRect(0,$-20,S,40))}function O(){if(n>=Q){l=!0,v.disabled=!0,v.classList.add("hidden"),p.classList.remove("hidden"),L.textContent=`경기 종료! 총 ${i}점`;return}o=!1,r=!1,u=.05,h=.48+Math.random()*.35,L.textContent="타이밍에 맞춰 스윙!"}function D(S){var f;if((f=S==null?void 0:S.preventDefault)==null||f.call(S),l||r||o)return;r=!0,m=.25,n+=1,M.textContent=`볼: ${n} / ${Q}`;const N=Math.abs(u-I);let g=0,c="헛스윙!";N<=q*.25?(g=6,c="식스! +6"):N<=q*.5?(g=4,c="포! +4"):N<=q*.75?(g=2,c="투런! +2"):N<=q&&(g=1,c="싱글! +1"),i+=g,k.textContent=`득점: ${i}`,L.textContent=c,o=!0,setTimeout(()=>{l||O(),n>=Q&&(l=!0,v.disabled=!0,v.classList.add("hidden"),p.classList.remove("hidden"),L.textContent=`경기 종료! 총 ${i}점`)},650)}function U(S){d||(d=S);const N=Math.min(.05,(S-d)/1e3);d=S,!o&&!l&&(u+=h*N,u>1.05&&(o=!0,r=!0,n+=1,M.textContent=`볼: ${n} / ${Q}`,L.textContent="놓침!",setTimeout(()=>{r=!1,n>=Q?(l=!0,v.disabled=!0,v.classList.add("hidden"),p.classList.remove("hidden"),L.textContent=`경기 종료! 총 ${i}점`):O()},500))),m>0&&(m-=N),T(),x=requestAnimationFrame(U)}function B(){i=0,n=0,l=!1,r=!1,m=0,k.textContent="득점: 0",M.textContent=`볼: 0 / ${Q}`,v.disabled=!1,v.classList.remove("hidden"),p.classList.add("hidden"),O()}function H(S){(S.code==="Space"||S.key===" ")&&(S.preventDefault(),D(S))}return P(),O(),x=requestAnimationFrame(U),v.addEventListener("click",D),v.addEventListener("touchstart",D,{passive:!1}),b.addEventListener("pointerdown",D),p.addEventListener("click",B),window.addEventListener("keydown",H),window.addEventListener("resize",P),Cn(e,t,a),()=>{cancelAnimationFrame(x),window.removeEventListener("keydown",H),window.removeEventListener("resize",P)}}function qn(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function Tn(e,t,a){var i,n;(i=e.querySelector('[data-nav="back"]'))==null||i.addEventListener("click",t),(n=e.querySelector('[data-nav="main"]'))==null||n.addEventListener("click",a)}const Dn=["#42a5f5","#ef5350","#ffee58","#66bb6a"],Rn=4,Ce=7;function On(e,{onBack:t,onMain:a}){let i=0,n=3,r=!1,o=0,u=0;const h={left:!1,right:!1};let m=320,x=420,d={x:0,y:0,w:70,h:12},l={x:0,y:0,r:6,vx:0,vy:0},b=[];e.innerHTML=`
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
      ${qn()}
    </div>
  `;const s=e.querySelector("#bo-canvas"),k=s.getContext("2d"),M=e.querySelector("#bo-lives"),L=e.querySelector("#bo-score"),v=e.querySelector("#bo-feedback"),p=e.querySelector("#bo-start");function I(){m=Math.min(320,Math.max(260,e.clientWidth-16||300)),x=Math.round(m*1.3),s.width=m,s.height=x,d.y=x-36,d.w=m*.22}function q(){b=[];const c=4,f=56,y=(m-c*(Ce+1))/Ce,$=16;for(let A=0;A<Rn;A++)for(let C=0;C<Ce;C++)b.push({x:c+C*(y+c),y:f+A*($+c),w:y,h:$,color:Dn[A],alive:!0})}function P(){d.x=(m-d.w)/2,l.x=m/2,l.y=d.y-20;const c=-Math.PI/3+Math.random()*(Math.PI/3),f=Math.min(m,x)*.45;l.vx=Math.sin(c)*f,l.vy=-Math.abs(Math.cos(c)*f)}function T(){M.textContent=`생명: ${"●".repeat(n)}${"○".repeat(3-n)}`,L.textContent=`점수: ${String(i).padStart(5,"0")}`}function O(){k.fillStyle="#1a1030",k.fillRect(0,0,m,x);for(const c of b)c.alive&&(k.fillStyle=c.color,D(k,c.x,c.y,c.w,c.h,4),k.fill());k.fillStyle="#fff",D(k,d.x,d.y,d.w,d.h,6),k.fill(),k.beginPath(),k.arc(l.x,l.y,l.r,0,Math.PI*2),k.fillStyle="#fff",k.fill()}function D(c,f,y,$,A,C){c.beginPath(),c.moveTo(f+C,y),c.arcTo(f+$,y,f+$,y+A,C),c.arcTo(f+$,y+A,f,y+A,C),c.arcTo(f,y+A,f,y,C),c.arcTo(f,y,f+$,y,C),c.closePath()}function U(c){u||(u=c);const f=Math.min(.033,(c-u)/1e3);if(u=c,r){const y=m*1.1*f;if(h.left&&(d.x-=y),h.right&&(d.x+=y),d.x=Math.max(0,Math.min(m-d.w,d.x)),l.x+=l.vx*f,l.y+=l.vy*f,l.x<l.r&&(l.x=l.r,l.vx*=-1),l.x>m-l.r&&(l.x=m-l.r,l.vx*=-1),l.y<l.r&&(l.y=l.r,l.vy*=-1),l.vy>0&&l.y+l.r>=d.y&&l.y-l.r<=d.y+d.h&&l.x>=d.x&&l.x<=d.x+d.w){l.y=d.y-l.r;const $=(l.x-(d.x+d.w/2))/(d.w/2),A=Math.hypot(l.vx,l.vy)*1.02,C=$*1.1;l.vx=Math.sin(C)*A,l.vy=-Math.abs(Math.cos(C)*A)}for(const $ of b)if($.alive&&l.x+l.r>$.x&&l.x-l.r<$.x+$.w&&l.y+l.r>$.y&&l.y-l.r<$.y+$.h){$.alive=!1,i+=10,T();const A=l.x+l.r-$.x,C=$.x+$.w-(l.x-l.r),Ie=l.y+l.r-$.y,vt=$.y+$.h-(l.y-l.r),St=Math.min(A,C),$t=Math.min(Ie,vt);St<$t?l.vx*=-1:l.vy*=-1;break}b.every($=>!$.alive)&&(r=!1,v.textContent=`클리어! 점수 ${i}`),l.y>x+20&&(n-=1,T(),n<=0?(r=!1,v.textContent=`게임 오버 · ${i}점`):(P(),v.textContent="생명 -1! 계속…"))}O(),o=requestAnimationFrame(U)}function B(){i=0,n=3,r=!0,q(),P(),T(),v.textContent="화이팅!"}function H(c){const f=s.getBoundingClientRect(),y=(c-f.left)/f.width*m;d.x=Math.max(0,Math.min(m-d.w,y-d.w/2))}function S(c){var y;c.preventDefault();const f=((y=c.touches)==null?void 0:y[0])||c;H(f.clientX)}function N(c){(c.key==="ArrowLeft"||c.key==="a"||c.key==="A")&&(h.left=!0),(c.key==="ArrowRight"||c.key==="d"||c.key==="D")&&(h.right=!0)}function g(c){(c.key==="ArrowLeft"||c.key==="a"||c.key==="A")&&(h.left=!1),(c.key==="ArrowRight"||c.key==="d"||c.key==="D")&&(h.right=!1)}return I(),q(),P(),T(),O(),o=requestAnimationFrame(U),p.addEventListener("click",B),s.addEventListener("pointerdown",S),s.addEventListener("pointermove",c=>{(c.buttons||c.pressure>0)&&S(c)}),s.addEventListener("touchstart",S,{passive:!1}),s.addEventListener("touchmove",S,{passive:!1}),window.addEventListener("keydown",N),window.addEventListener("keyup",g),window.addEventListener("resize",I),Tn(e,t,a),()=>{cancelAnimationFrame(o),window.removeEventListener("keydown",N),window.removeEventListener("keyup",g),window.removeEventListener("resize",I)}}const W=3;function Bn(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function jn(e,t,a){var i,n;(i=e.querySelector('[data-nav="back"]'))==null||i.addEventListener("click",t),(n=e.querySelector('[data-nav="main"]'))==null||n.addEventListener("click",a)}function Un(e,{onBack:t,onMain:a}){let i=320,n=420,r=0,o=0,u=!1,h=!1;const m={left:!1,right:!1};let x=0;const d={lane:0,progress:0,lap:0,color:"#4dffd4"},l={lane:.2,progress:.02,lap:0,color:"#ff4fd8",target:0};e.innerHTML=`
    <div class="game-panel">
      <h2 class="game-title">레이싱 vs AI</h2>
      <p class="game-desc">드래그/←→로 조향. 먼저 ${W}바퀴!</p>
      <div class="race-stats">
        <span id="race-you">YOU 0/${W}</span>
        <span id="race-ai">AI 0/${W}</span>
      </div>
      <canvas id="race-canvas" class="game-canvas race-canvas" width="320" height="420"></canvas>
      <button type="button" class="btn-go" id="race-start">시작 / 다시하기</button>
      <p class="game-feedback" id="race-feedback">시작을 누르세요!</p>
      ${Bn()}
    </div>
  `;const b=e.querySelector("#race-canvas"),s=b.getContext("2d"),k=e.querySelector("#race-you"),M=e.querySelector("#race-ai"),L=e.querySelector("#race-feedback"),v=e.querySelector("#race-start");function p(g,c=0){const f=i/2,y=n/2,$=i*.36-c,A=n*.38-c,C=g*Math.PI*2-Math.PI/2;return{x:f+Math.cos(C)*$,y:y+Math.sin(C)*A,a:C}}function I(){i=Math.min(320,Math.max(260,e.clientWidth-16||300)),n=Math.round(i*1.3),b.width=i,b.height=n}function q(){k.textContent=`YOU ${Math.min(d.lap,W)}/${W}`,M.textContent=`AI ${Math.min(l.lap,W)}/${W}`}function P(g,c=14){const f=p(g.progress,8+g.lane*14),y=p((g.progress+.01)%1,8+g.lane*14),$=Math.atan2(y.y-f.y,y.x-f.x);s.save(),s.translate(f.x,f.y),s.rotate($),s.fillStyle=g.color,s.fillRect(-c,-c*.45,c*2,c*.9),s.fillStyle="#111",s.fillRect(c*.2,-c*.3,c*.5,c*.6),s.restore()}function T(){s.fillStyle="#1b5e20",s.fillRect(0,0,i,n),s.beginPath();for(let f=0;f<=64;f++){const y=p(f/64,-18);f===0?s.moveTo(y.x,y.y):s.lineTo(y.x,y.y)}s.closePath(),s.fillStyle="#37474f",s.fill(),s.beginPath();for(let f=0;f<=64;f++){const y=p(f/64,28);f===0?s.moveTo(y.x,y.y):s.lineTo(y.x,y.y)}s.closePath(),s.fillStyle="#2e7d32",s.fill(),s.strokeStyle="rgba(255,255,255,0.35)",s.setLineDash([8,10]),s.lineWidth=2,s.beginPath();for(let f=0;f<=64;f++){const y=p(f/64,6);f===0?s.moveTo(y.x,y.y):s.lineTo(y.x,y.y)}s.stroke(),s.setLineDash([]);const g=p(0,-16),c=p(0,26);s.strokeStyle="#fff",s.lineWidth=4,s.beginPath(),s.moveTo(g.x,g.y),s.lineTo(c.x,c.y),s.stroke(),P(l,12),P(d,13)}function O(g,c,f){const y=g.progress;g.progress+=c*f,g.progress>=1&&(g.progress-=1,g.lap+=1),y>.9&&g.progress<.1&&g.lap}function D(g){o||(o=g);const c=Math.min(.05,(g-o)/1e3);if(o=g,u&&!h){let f=x;m.left&&(f-=1),m.right&&(f+=1),f=Math.max(-1,Math.min(1,f)),d.lane+=f*2.2*c,d.lane=Math.max(-1,Math.min(1,d.lane)),l.target+=(Math.random()-.5)*1.5*c,l.target=Math.max(-.8,Math.min(.8,l.target)),l.lane+=(l.target-l.lane)*2*c;const y=.18+(1-Math.abs(d.lane)*.08)*.04,$=.175+Math.sin(g/1100)*.012,A=d.lap,C=l.lap;O(d,y,c),O(l,$,c),(d.lap!==A||l.lap!==C)&&q(),d.lap>=W?(h=!0,u=!1,L.textContent="승리! 당신이 먼저 3바퀴!"):l.lap>=W&&(h=!0,u=!1,L.textContent="패배… AI가 먼저 들어왔습니다.")}T(),r=requestAnimationFrame(D)}function U(){d.lane=0,d.progress=0,d.lap=0,l.lane=.25,l.progress=.01,l.lap=0,l.target=0,h=!1,u=!0,q(),L.textContent="달려라!"}function B(g){var $;g.preventDefault();const c=(($=g.touches)==null?void 0:$[0])||g,f=b.getBoundingClientRect();x=((c.clientX-f.left)/f.width-.5)*2}function H(){x=0}function S(g){(g.key==="ArrowLeft"||g.key==="a"||g.key==="A")&&(m.left=!0),(g.key==="ArrowRight"||g.key==="d"||g.key==="D")&&(m.right=!0)}function N(g){(g.key==="ArrowLeft"||g.key==="a"||g.key==="A")&&(m.left=!1),(g.key==="ArrowRight"||g.key==="d"||g.key==="D")&&(m.right=!1)}return I(),q(),T(),r=requestAnimationFrame(D),v.addEventListener("click",U),b.addEventListener("pointerdown",B),b.addEventListener("pointermove",g=>{g.buttons&&B(g)}),b.addEventListener("pointerup",H),b.addEventListener("pointerleave",H),b.addEventListener("touchstart",B,{passive:!1}),b.addEventListener("touchmove",B,{passive:!1}),b.addEventListener("touchend",H),window.addEventListener("keydown",S),window.addEventListener("keyup",N),window.addEventListener("resize",I),jn(e,t,a),()=>{cancelAnimationFrame(r),window.removeEventListener("keydown",S),window.removeEventListener("keyup",N),window.removeEventListener("resize",I)}}const w=document.getElementById("app");let j=null,Z=null,G=null,ee=null,et=!1;const tt=new Set(["rest","game-dart","game-cricket","game-breakout","game-race","admin"]),Hn={login:Wn,main:Gn,help:Vn,profile:Kn,grade:zn,subject:Xn,calculator:Qn,rest:Zn,admin:Jn,"game-dart":()=>ye("dart"),"game-cricket":()=>ye("cricket"),"game-breakout":()=>ye("breakout"),"game-race":()=>ye("race")};Fn();function Fn(){Promise.all([Qt(),Kt()]).finally(()=>{E(lt()?"main":"login")})}function E(e,t={}){ee&&(ee(),ee=null),et&&!tt.has(e)&&ln(),e!=="login"&&!lt()&&(e="login",t={});const a=Hn[e];a&&(w.innerHTML="",a(t),et=tt.has(e),window.scrollTo(0,0))}function X(e){e.querySelectorAll("[data-action]").forEach(t=>{t.addEventListener("click",()=>_n(t.dataset.action))})}function _n(e){if(e==="main"){j=null,Z=null,G=null,E("main");return}if(e==="grade"){Z=null,G=null,E("grade");return}if(e==="help"&&E("help"),e==="profile"&&E("profile"),e==="rest"&&E("rest"),e==="admin"){ue()&&E("admin");return}if(e==="subject"&&E("subject",{grade:j}),e==="game-dart"&&E("game-dart"),e==="game-cricket"&&E("game-cricket"),e==="game-breakout"&&E("game-breakout"),e==="game-race"&&E("game-race"),e.startsWith("pick-grade-")){j=Number(e.replace("pick-grade-","")),Z=null,G=null,E("subject",{grade:j});return}if(e.startsWith("pick-subject-")){const t=decodeURIComponent(e.replace("pick-subject-",""));Z=t;const a=ft(j,t);G=(a.length===1,a[0]),E("calculator",{grade:j,subject:t,semester:G});return}e.startsWith("pick-semester-")&&(G=Number(e.replace("pick-semester-","")),E("calculator",{grade:j,subject:Z,semester:G}))}function Wn(){let e="login";const t=()=>{var L,v;const a=e==="register";w.innerHTML=_(`
      <div class="stack-screen login-screen">
        ${ae("globe globe-large")}
        <h1 class="login-title">SCHOOL METRICS</h1>
        <p class="login-desc">${a?"처음이면 회원가입하세요":"해연중 계정으로 로그인하세요"}</p>
        <div class="login-form">
          <div class="login-tabs" role="tablist">
            <button type="button" class="login-tab ${a?"":"active"}" data-mode="login">로그인</button>
            <button type="button" class="login-tab ${a?"active":""}" data-mode="register">회원가입</button>
          </div>
          <label class="field">
            <span>학교 계정</span>
            <input type="email" id="login-email" placeholder="20251413@haeyeon.ms.kr" autocomplete="username" />
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
          <p class="muted login-hint">예: 20251413@haeyeon.ms.kr<br/>가입 후 학교 메일로 온 인증 링크를 눌러야 로그인됩니다.</p>
          <p class="warn hidden" id="login-error"></p>
          <p class="ok-msg hidden" id="login-ok"></p>
          <div class="login-verify-actions hidden" id="verify-actions">
            <button type="button" class="link-btn" id="verify-refresh">인증 완료했어요</button>
            <button type="button" class="link-btn" id="verify-resend">인증 메일 다시 받기</button>
          </div>
        </div>
        ${se(F.footer)}
      </div>
    `);const i=w.querySelector("#login-error"),n=w.querySelector("#login-ok"),r=w.querySelector("#verify-actions"),o=w.querySelector("#login-email"),u=w.querySelector("#login-name"),h=w.querySelector("#login-password"),m=w.querySelector("#login-password2"),x=w.querySelector("#login-submit"),d=p=>{n.classList.add("hidden"),i.textContent=p,i.classList.remove("hidden")},l=p=>{i.classList.add("hidden"),n.textContent=p,n.classList.remove("hidden")},b=p=>{x.disabled=p};w.querySelectorAll("[data-mode]").forEach(p=>{p.addEventListener("click",()=>{e=p.dataset.mode,t()})});const s=p=>{const I=De(p);z({type:"user_login",message:`로그인: ${I}`,account:p.account,displayName:p.displayName||"",studentId:p.studentId||""}),E("main")},k=p=>{l(p.error),r.classList.remove("hidden")},M=async()=>{i.classList.add("hidden"),n.classList.add("hidden"),r.classList.add("hidden"),b(!0);try{if(e==="register"){if(h.value!==((m==null?void 0:m.value)||"")){d("비밀번호 확인이 일치하지 않습니다.");return}const I=await Ht(o.value,h.value,(u==null?void 0:u.value)||"");if(I.needVerify){k(I);return}if(!I.ok){d(I.error);return}s(I.user);return}const p=await Ft(o.value,h.value);if(p.needVerify){k(p);return}if(!p.ok){d(p.error);return}s(p.user)}finally{b(!1)}};x.addEventListener("click",M),[o,u,h,m].filter(Boolean).forEach(p=>{p.addEventListener("keydown",I=>{I.key==="Enter"&&M()})}),(L=w.querySelector("#verify-refresh"))==null||L.addEventListener("click",async()=>{b(!0);const p=await Wt();if(b(!1),p.needVerify){k(p);return}if(!p.ok){d(p.error);return}s(p.user)}),(v=w.querySelector("#verify-resend"))==null||v.addEventListener("click",async()=>{const p=await Gt();if(!p.ok){d(p.error);return}l(p.message),r.classList.remove("hidden")})};t()}function Gn(){const e=on(),t=De()||ot()||"";w.innerHTML=_(`
    <div class="main-screen">
      <button type="button" class="help-btn" data-action="help" aria-label="앱 정보">?</button>
      <div class="main-header">
        <div class="title-block">
          ${Ln()}
          <h1 class="app-title">${F.title}</h1>
        </div>
        <p class="app-subtitle">${F.subtitle}</p>
        <p class="main-quote">"${e}"</p>
      </div>
      <div class="main-body">
        <p class="login-user muted">${V(t)}</p>
        <button type="button" class="link-btn" data-action="profile">내 정보 수정</button>
        <button type="button" class="go-btn" data-action="grade" aria-label="시작">
          ${xn()}
          <span class="go-text">GO</span>
        </button>
      </div>
      <p class="main-footer">${F.footer}</p>
    </div>
  `),X(w)}function Kn(){const e=Y();w.innerHTML=_(`
    <div class="stack-screen">
      ${ae()}
      <h2 class="screen-title">내 정보</h2>
      <div class="login-form profile-form">
        <p class="muted login-hint">로그인 계정: ${V((e==null?void 0:e.account)||"")}</p>
        <label class="field">
          <span>이름</span>
          <input type="text" id="profile-name" value="${V((e==null?void 0:e.displayName)||"")}" maxlength="20" />
        </label>
        <label class="field">
          <span>학번 (4자리)</span>
          <input type="text" id="profile-sid" value="${V((e==null?void 0:e.studentId)||"")}" inputmode="numeric" maxlength="4" placeholder="1413" />
        </label>
        <button type="button" class="btn-go" id="profile-save">저장</button>
        <p class="warn hidden" id="profile-error"></p>
        <p class="ok-msg hidden" id="profile-ok"></p>
      </div>
      ${ie()}
    </div>
  `);const t=w.querySelector("#profile-error"),a=w.querySelector("#profile-ok"),i=w.querySelector("#profile-name"),n=w.querySelector("#profile-sid"),r=w.querySelector("#profile-save");r.addEventListener("click",async()=>{t.classList.add("hidden"),a.classList.add("hidden"),r.disabled=!0;const o=await _t({displayName:i.value,studentId:n.value});if(r.disabled=!1,!o.ok){t.textContent=o.error,t.classList.remove("hidden");return}a.textContent="저장되었습니다.",a.classList.remove("hidden"),z({type:"profile_update",message:`정보 수정: ${De(o.user)}`,displayName:o.user.displayName,studentId:o.user.studentId})}),X(w)}function Vn(){w.innerHTML=_(`
    <div class="stack-screen">
      ${ae()}
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
          <li>서로 다른 과목 ${ve}개 계산 시 미니게임 1회 해금</li>
          <li>미니게임 이용 후에는 다시 잠금</li>
        </ul>
        <p class="muted">제작: ${F.creator}</p>
        ${ue()?'<p class="success"><button type="button" class="link-btn" data-action="admin">관리자 패널 열기</button></p>':""}
      </div>
      ${ie()}
      <button type="button" class="admin-secret-trigger" id="admin-secret" title="">
        ${F.subtitle}
      </button>
    </div>
  `),X(w);const e=w.querySelector("#admin-secret");e==null||e.addEventListener("click",()=>{if(ue()){E("admin");return}const t=window.prompt("관리자 비밀번호를 입력하세요");t!=null&&(Yt(t)?(window.alert("관리자 모드가 켜졌습니다."),E("admin")):window.alert("비밀번호가 올바르지 않습니다."))})}function Jn(){var u,h,m,x,d,l;if(!ue()){E("help");return}const e=K(),t=nn(),a=e.standardScale,i=e.artsScale,n=t.configured?`Firebase 연결됨 (${t.projectId})`:"Firebase 미설정 — src/firebase-config.js 에 키를 넣어주세요";w.innerHTML=_(`
    <div class="stack-screen admin-screen">
      <h2 class="screen-title">관리자 모드</h2>
      <p class="screen-desc">기기 ID: ${He()}</p>
      <p class="muted admin-note">${n}</p>
      <p class="muted admin-note">설정 저장 시 클라우드에 동기화되고, 모든 기기 사용·기입 기록을 여기서 볼 수 있습니다.</p>

      <div class="info-card admin-card">
        <h3>빠른 이동</h3>
        <div class="admin-actions">
          <button type="button" class="btn-go" data-action="rest">미니게임 허브</button>
          <button type="button" class="game-card" data-action="game-dart">다트</button>
          <button type="button" class="game-card" data-action="game-cricket">크리켓</button>
          <button type="button" class="game-card" data-action="game-breakout">벽돌깨기</button>
          <button type="button" class="game-card" data-action="game-race">레이싱</button>
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
        ${ie()}
      </div>
      ${se("ADMIN")}
    </div>
  `),X(w);let r=Fe();async function o(){const b=w.querySelector("#adm-logs"),s=w.querySelector("#adm-log-count");b&&(b.innerHTML='<p class="muted">불러오는 중…</p>');const k=await Zt();if(r=k.logs,s&&(s.textContent=`(${r.length} · ${k.source}${k.error?" · 오류":""})`),!!b){if(r.length===0){b.innerHTML='<p class="muted">아직 기록이 없습니다.</p>';return}b.innerHTML=r.slice(0,120).map(M=>{const L=[M.displayName,M.studentId,M.account||M.deviceId].filter(Boolean).join(" · ");return`
      <article class="admin-log-item">
        <header>${V(L)} · ${V(M.type)} · ${Yn(M.at)}</header>
        <p>${V(M.message||"")}</p>
        ${M.detail?`<pre>${V(typeof M.detail=="string"?M.detail:JSON.stringify(M.detail,null,0))}</pre>`:""}
      </article>
    `}).join("")}}o(),(u=w.querySelector("#adm-refresh-logs"))==null||u.addEventListener("click",()=>o()),(h=w.querySelector("#adm-save"))==null||h.addEventListener("click",async()=>{var L,v;const b=Number((L=w.querySelector("#adm-unlock"))==null?void 0:L.value),s=!!((v=w.querySelector("#adm-free-games"))!=null&&v.checked),k=[...w.querySelectorAll('[data-scale="std"]')].map(p=>({letter:p.dataset.letter,min:Number(p.value)||0})),M=[...w.querySelectorAll('[data-scale="arts"]')].map(p=>({letter:p.dataset.letter,min:Number(p.value)||0}));Xt({restUnlockUses:Number.isFinite(b)&&b>0?b:8,freeGames:s,standardScale:k,artsScale:M}),window.alert(R()?"설정을 저장했고 클라우드에도 올렸습니다.":"설정을 이 기기에 저장했습니다. (Firebase 미설정)"),E("admin")}),(m=w.querySelector("#adm-feedback-save"))==null||m.addEventListener("click",()=>{var s,k;const b=(k=(s=w.querySelector("#adm-feedback"))==null?void 0:s.value)==null?void 0:k.trim();if(!b){window.alert("내용을 입력하세요.");return}z({type:"game_feedback",message:b}),window.alert("피드백을 저장했습니다."),E("admin")}),(x=w.querySelector("#adm-export"))==null||x.addEventListener("click",async()=>{const b=tn(r);try{await navigator.clipboard.writeText(b),window.alert("기록이 클립보드에 복사되었습니다.")}catch{window.prompt("아래 내용을 복사하세요",b)}}),(d=w.querySelector("#adm-clear-logs"))==null||d.addEventListener("click",async()=>{window.confirm("로컬+클라우드 활동 기록을 비울까요?")&&(await en({cloud:!0}),E("admin"))}),(l=w.querySelector("#adm-logout"))==null||l.addEventListener("click",()=>{zt(),window.alert("관리자 모드가 종료되었습니다."),E("main")})}function V(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Yn(e){try{const t=new Date(e);return`${t.getMonth()+1}/${t.getDate()} ${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`}catch{return e}}function zn(){const e=me(),t=ut();w.innerHTML=_(`
    <div class="stack-screen grade-screen">
      ${ae()}
      <h2 class="screen-title">자신의 학년을 선택하세요</h2>
      <div class="grade-list">
        <button type="button" class="grade-btn grade-1" data-action="pick-grade-1">1학년</button>
        <button type="button" class="grade-btn grade-2" data-action="pick-grade-2">2학년</button>
        <button type="button" class="grade-btn grade-3" data-action="pick-grade-3">3학년</button>
      </div>
      ${e?'<button type="button" class="rest-btn" data-action="rest">휴식 · 미니게임</button>':`<p class="unlock-hint">${t}</p>`}
      ${ie()}
      ${se(F.subtitle)}
    </div>
  `),X(w)}function Xn({grade:e}){if(!e||!fe(e)){E("grade");return}j=e;const t=fe(e),a=dn(e);w.innerHTML=_(`
    <div class="stack-screen ${wt(e)}">
      ${ae()}
      <h2 class="screen-title">${t.label} 과목 선택</h2>
      ${t.note?`<p class="screen-note">${t.note}</p>`:""}
      ${ht()}
      <div class="subject-list">
        ${a.map(i=>`<button type="button" class="subject-btn" data-action="pick-subject-${encodeURIComponent(i)}">${i}</button>`).join("")}
      </div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="grade">학년 선택으로</button>
        ${ie()}
      </div>
      ${se(F.subtitle)}
    </div>
  `),X(w),yt(w)}function Qn({grade:e,subject:t,semester:a}){if(!e||!t||!a){E("subject",{grade:j});return}j=e,Z=t,G=a;const i=fe(e),n=ft(e,t),r=mn(e,t,a),o=Qe(e,t,a),u={},h=n.length>1?`<div class="semester-tabs">
          ${n.map(l=>`<button type="button" class="semester-tab ${l===a?"active":""}" data-action="pick-semester-${l}">${Qe(e,t,l)}</button>`).join("")}
        </div>`:`<p class="semester-only">${o}</p>`;w.innerHTML=_(`
    <div class="stack-screen calculator-screen ${wt(e)}">
      ${ae("globe globe-small")}
      <h2 class="screen-title subject-title">${t}</h2>
      <p class="screen-desc">${i.label} · ${o}${Ke(t)?" · 예체능(A·B·C)":" · 일반(A~E)"}</p>
      ${ht(t)}
      ${h}
      <form id="calc-form" class="calc-form"></form>
      <button type="submit" form="calc-form" class="btn-calc">계산하기</button>
      <div id="calc-result" class="calc-result hidden"></div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="subject">과목 선택으로</button>
        ${ie()}
      </div>
      ${se(F.subtitle)}
    </div>
  `);const m=w.querySelector("#calc-form");let x="";for(const l of r){if(l.kind!==x){x=l.kind;const s=document.createElement("h3");s.className="section-heading",s.textContent=l.kind==="exam"?"지필고사":"수행평가",m.appendChild(s)}const b=document.createElement("label");b.className="score-row",b.innerHTML=`
      <span>${l.label} <em>${l.weight}%</em></span>
      <input type="number" min="0" max="100" step="0.1" inputmode="decimal"
        name="${l.key}" placeholder="점수" />
    `,m.appendChild(b)}const d=w.querySelector("#calc-result");m.addEventListener("submit",l=>{var I,q;l.preventDefault();const b=new FormData(m);for(const P of r)u[P.key]=b.get(P.key);const s=$n(r,u,t);if(!s){d.classList.remove("hidden"),d.innerHTML='<p class="warn">최소 1개 이상 점수를 입력하세요.</p>';return}const k=rn(t);z({type:"calc",message:`${e}학년 ${t} (${o}) → ${s.rounded}점 ${ce(s.letter)}`,detail:{grade:e,subject:t,semester:a,scores:u,rounded:s.rounded,letter:s.letter,average:s.average}});let M="";((I=s.needed)==null?void 0:I.needed)!=null?M=`<p>상위 <strong>${ce(s.needed.targetLetter)}</strong>까지 남은 항목 평균 <strong>${s.needed.needed}점</strong> 이상</p>`:(q=s.needed)!=null&&q.message&&(M=`<p>${s.needed.message}</p>`);let L="";if(s.projection.remainingCount>0&&s.letter===s.projLetter){const P=ce(s.letter);let T="";s.confirmMin&&(s.confirmMin.minScore<=0?T=`<p>남은 항목이 <strong>0점</strong>이어도 ${P} 유지</p>`:T=`<p>남은 항목 각각 최소 <strong>${s.confirmMin.minScore}점</strong> 이상이면 ${P} 유지</p>`),L=`
        <p><strong>${P} 확정입니다.</strong></p>
        ${T}
      `}let v="";yn(s)&&(v=`<p class="cheer-msg">${wn()}</p>`);let p="";k.justUnlocked?p=`<p class="success">서로 다른 과목 ${ve}개 달성! 학년 선택에서 휴식 미니게임 이용</p>`:me()?p='<p class="success">휴식 미니게임 이용 가능 (학년 선택 화면)</p>':k.isNew?p=`<p class="muted">${ut()}</p>`:p='<p class="muted">이미 계산한 과목입니다. 다른 과목을 계산하면 해금에 가까워져요.</p>',d.classList.remove("hidden"),d.innerHTML=`
      <h3>${t} 결과</h3>
      <p>총점(반올림) <strong>${s.rounded}점</strong> · <strong>${ce(s.letter)}</strong></p>
      <p class="muted">가중 평균 ${s.average.toFixed(1)}점</p>
      <p>남은 항목 100점 시 <strong>${s.projRounded}점</strong> · <strong>${ce(s.projLetter)}</strong></p>
      ${L}
      ${v}
      ${M}
      ${p}
    `}),X(w),yt(w)}function Zn(){if(!me()){E("grade");return}w.innerHTML=_(`
    <div class="stack-screen">
      ${ae()}
      <h2 class="screen-title">휴식 · 미니게임</h2>
      <div class="game-list">
        <button type="button" class="game-card" data-action="game-dart">다트 게임</button>
        <button type="button" class="game-card" data-action="game-cricket">크리켓 게임</button>
        <button type="button" class="game-card" data-action="game-breakout">벽돌깨기</button>
        <button type="button" class="game-card" data-action="game-race">레이싱 vs AI</button>
      </div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="grade">학년 선택으로</button>
        ${ie()}
      </div>
      ${se(F.subtitle)}
    </div>
  `),X(w)}function ye(e){if(!me()){E("grade");return}z({type:"game_open",message:`미니게임 시작: ${e}${Me()?" (관리자)":""}`,detail:{type:e}}),w.innerHTML=_('<div id="game-root"></div>',"game-screen");const t=w.querySelector("#game-root"),a={onBack:()=>E("rest"),onMain:()=>{j=null,Z=null,G=null,E("main")}};e==="dart"?ee=Nn(t,a)??null:e==="cricket"?ee=Pn(t,a)??null:e==="breakout"?ee=On(t,a)??null:e==="race"&&(ee=Un(t,a)??null)}
