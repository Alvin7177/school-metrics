(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();const ke=8,F={title:"SCHOOL METRICS",subtitle:"철저한 내신관리 시스템",footer:"for 해연중 학생들",creator:"2210 박민호"},le={apiKey:"AIzaSyB7YJBfYa9zGnUvLD4DFgR5KLiNKuluHJM",authDomain:"school-metrics-fdee3.firebaseapp.com",projectId:"school-metrics-fdee3",storageBucket:"school-metrics-fdee3.firebasestorage.app",messagingSenderId:"378255554733",appId:"1:378255554733:web:01b06dca5b5307860eae24",measurementId:"G-0BL416S3QD"};function D(){return!!(le.apiKey&&le.projectId&&le.appId)}const mt="https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js",Z="https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js",ce="https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";let ae=null,fe=null,ie=null,me=null;async function Ye(){return D()?ae||(me||(me=(async()=>{const{initializeApp:e,getApps:t}=await import(mt);return ae=t().length?t()[0]:e(le),ae})().catch(e=>(console.warn("[firebase] app init failed",e),me=null,ae=null,null))),me):null}async function de(){if(!D())return null;if(fe)return fe;const e=await Ye();if(!e)return null;const{getFirestore:t}=await import(Z);return fe=t(e),fe}async function ve(){if(!D())return null;if(ie)return ie;const e=await Ye();if(!e)return null;const{getAuth:t,setPersistence:n,browserLocalPersistence:r}=await import(ce);ie=t(e);try{await n(ie,r)}catch(i){console.warn("[firebase] auth persistence",i)}return ie}async function bt(){const e=await ve();if(!e)throw new Error("Firebase가 설정되지 않았습니다.");const{GoogleAuthProvider:t,signInWithPopup:n,signInWithRedirect:r}=await import(ce),i=new t;return i.setCustomParameters({prompt:"select_account",hd:"haeyeon.ms.kr"}),i.addScope("email"),/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)?(await r(e,i),{redirected:!0}):{redirected:!1,user:(await n(e,i)).user}}async function gt(){const e=await ve();if(!e)return null;const{getRedirectResult:t}=await import(ce);try{const n=await t(e);return(n==null?void 0:n.user)||null}catch(n){throw console.warn("[firebase] redirect result",n),n}}async function pt(){const e=await ve();if(!e)return null;if(e.currentUser)return e.currentUser;const{onAuthStateChanged:t}=await import(ce);return new Promise(n=>{const r=t(e,i=>{r(),n(i||null)})})}async function Ue(){const e=await ve();if(!e)return;const{signOut:t}=await import(ce);await t(e)}async function ht(e){const t=await de();if(!t)return null;const{collection:n,addDoc:r,serverTimestamp:i}=await import(Z),l={...e};return Object.keys(l).forEach(u=>{l[u]===void 0&&delete l[u]}),(await r(n(t,"activityLogs"),{...l,createdAt:i()})).id}async function wt(e=200){const t=await de();if(!t)return[];const{collection:n,query:r,orderBy:i,limit:l,getDocs:c}=await import(Z),u=r(n(t,"activityLogs"),i("at","desc"),l(e));return(await c(u)).docs.map(g=>({id:g.id,...g.data()}))}async function kt(){const e=await de();if(!e)return 0;const{collection:t,getDocs:n,deleteDoc:r,query:i,limit:l}=await import(Z);let c=0;for(;;){const u=await n(i(t(e,"activityLogs"),l(100)));if(u.empty||(await Promise.all(u.docs.map(h=>r(h.ref))),c+=u.size,u.size<100))break}return c}async function vt(e){const t=await de();if(!t)return!1;const{doc:n,setDoc:r,serverTimestamp:i}=await import(Z),l={...e};return Object.keys(l).forEach(c=>{l[c]===void 0&&delete l[c]}),await r(n(t,"adminSettings","global"),{...l,updatedAt:i()}),!0}async function yt(){const e=await de();if(!e)return null;const{doc:t,getDoc:n}=await import(Z),r=await n(t(e,"adminSettings","global"));if(!r.exists())return null;const i=r.data();return delete i.updatedAt,i}const ze="schoolMetricsUserAccount",St=new Set(["2024","2025","2026"]),$t=/^(\d{4})(\d{4})@haeyeon\.ms\.kr$/i;function Xe(e){const n=String(e||"").trim().toLowerCase().match($t);if(!n)return{ok:!1,error:"해연중 구글 계정(@haeyeon.ms.kr)만 로그인할 수 있습니다."};const r=n[1],i=n[2],l=i[0],c=i[1],u=Number(i.slice(2));return St.has(r)?["1","2","3"].includes(l)?"12345678".includes(c)?!Number.isInteger(u)||u<1||u>35?{ok:!1,error:"번호는 01~35만 가능합니다."}:{ok:!0,account:`${r}${i}@haeyeon.ms.kr`,year:r,studentId:i,grade:Number(l),classNo:Number(c),number:u}:{ok:!1,error:"학번 둘째 자리(반)는 1~8만 가능합니다."}:{ok:!1,error:"학번 첫 자리(학년)는 1·2·3만 가능합니다."}:{ok:!1,error:"년도는 2024, 2025, 2026만 가능합니다."}}function Lt(e,t={}){const n={account:e.account,year:e.year,studentId:e.studentId,grade:e.grade,classNo:e.classNo,number:e.number,loggedInAt:new Date().toISOString(),viaGoogle:!0,...t};return localStorage.setItem(ze,JSON.stringify(n)),n}function he(){try{const e=localStorage.getItem(ze);if(!e)return null;const t=JSON.parse(e);return t!=null&&t.account&&Xe(t.account).ok?t:null}catch{return null}}function Qe(){return!!he()}function Ve(){var e;return((e=he())==null?void 0:e.account)||null}async function Ae(e){const t=e==null?void 0:e.email;if(!t)return await Ue().catch(()=>{}),{ok:!1,error:"구글 계정 이메일을 가져오지 못했습니다."};const n=Xe(t);return n.ok?{ok:!0,user:Lt(n,{uid:e.uid||null,displayName:e.displayName||null})}:(await Ue().catch(()=>{}),n)}async function xt(){if(!D())return he();try{const t=await gt();if(t){const n=await Ae(t);return n.ok?n.user:null}}catch(t){console.warn("[auth] redirect",t)}const e=he();if(e)return e;try{const t=await pt();if(!t)return null;const n=await Ae(t);return n.ok?n.user:null}catch(t){return console.warn("[auth] restore",t),null}}async function Mt(){if(!D())return{ok:!1,error:"Firebase 설정이 없습니다."};try{const e=await bt();return e.redirected?{ok:!0,redirected:!0}:Ae(e.user)}catch(e){const t=(e==null?void 0:e.code)||"";return t==="auth/popup-closed-by-user"||t==="auth/cancelled-popup-request"?{ok:!1,error:"로그인이 취소되었습니다."}:t==="auth/unauthorized-domain"?{ok:!1,error:"Firebase 콘솔에 이 사이트 도메인을 허용 목록에 추가해야 합니다."}:(console.warn("[auth] google login",e),{ok:!1,error:(e==null?void 0:e.message)||"구글 로그인에 실패했습니다."})}}const Et="73357442",Ce="schoolMetricsAdminSession",Pe="schoolMetricsAdminSettings",we="schoolMetricsActivityLog",Fe="schoolMetricsDeviceId",At=500,V={restUnlockUses:ke,freeGames:!0,standardScale:[{letter:"A",min:90},{letter:"B",min:80},{letter:"C",min:70},{letter:"D",min:60},{letter:"E",min:0}],artsScale:[{letter:"A",min:80},{letter:"B",min:60},{letter:"C",min:0}]};function Te(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function Ne(e,t){localStorage.setItem(e,JSON.stringify(t))}function qe(){let e=localStorage.getItem(Fe);return e||(e=`dev-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,localStorage.setItem(Fe,e)),e}function se(){return sessionStorage.getItem(Ce)==="1"}function It(e){return String(e)===Et?(sessionStorage.setItem(Ce,"1"),X({type:"admin_login",message:"관리자 로그인"}),!0):!1}function Ct(){sessionStorage.removeItem(Ce)}function W(){const e=Te(Pe,{});return{...V,...e,standardScale:e.standardScale||V.standardScale,artsScale:e.artsScale||V.artsScale}}function Pt(e){const t={...W(),...e};return Ne(Pe,t),X({type:"admin_settings",message:"관리자 설정 변경",detail:e}),D()&&vt(t).catch(n=>console.warn("[firebase] settings save",n)),t}async function Tt(){if(!D())return W();try{const e=await yt();if(e&&typeof e=="object"){const t={...V,...e,standardScale:e.standardScale||V.standardScale,artsScale:e.artsScale||V.artsScale};return Ne(Pe,t),t}}catch(e){console.warn("[firebase] settings load",e)}return W()}function ye(){return Number(W().restUnlockUses)||ke}function Se(){return se()&&W().freeGames!==!1}function X(e){const t={id:`${Date.now()}-${Math.random().toString(36).slice(2,7)}`,at:new Date().toISOString(),deviceId:qe(),...e,account:e.account||Ve()||"guest"},n=Te(we,[]);return n.unshift(t),Ne(we,n.slice(0,At)),D()&&ht(t).catch(r=>console.warn("[firebase] log",r)),t}function Re(){return Te(we,[])}async function Nt(){const e=Re();if(!D())return{source:"local",logs:e};try{const t=await wt(300),n=new Map;for(const i of[...t,...e]){const l=i.id||`${i.at}-${i.deviceId}-${i.type}-${i.message}`;n.has(l)||n.set(l,i)}return{source:"firebase",logs:[...n.values()].sort((i,l)=>String(l.at).localeCompare(String(i.at)))}}catch(t){return console.warn("[firebase] fetch logs",t),{source:"local-fallback",logs:e,error:String(t.message||t)}}}async function qt({cloud:e=!0}={}){if(localStorage.removeItem(we),e&&D())try{await kt()}catch(t){console.warn("[firebase] clear",t)}X({type:"admin_clear_logs",message:"활동 로그 초기화"})}function Rt(e=Re()){return JSON.stringify({exportedAt:new Date().toISOString(),deviceId:qe(),firebase:D(),settings:W(),logs:e},null,2)}function Dt(){return{configured:D(),projectId:le.projectId||""}}const De="schoolMetricsUniqueSubjects";function Ze(){try{const e=localStorage.getItem(De),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch{return[]}}function Ot(e){localStorage.setItem(De,JSON.stringify(e))}function Bt(e){const t=ye(),n=Ze(),r=!n.includes(e);return r&&(n.push(e),Ot(n)),{isNew:r,uniqueCount:n.length,justUnlocked:r&&n.length>=t}}function Oe(){return Ze().length}function ue(){return Se()?!0:Oe()>=ye()}function jt(){return Math.max(0,ye()-Oe())}function Ht(){Se()||localStorage.removeItem(De)}function et(){const e=ye(),t=Oe(),n=jt();return Se()?"관리자 모드: 미니게임 자유 이용":ue()?`서로 다른 과목 ${t}개 달성! 휴식 미니게임 이용 가능`:`서로 다른 과목 ${n}개 더 계산하면 해금 (${t}/${e})`}const xe=["희망은 좋은 것이다. 어쩌면 가장 좋은 것일지도. — 《쇼생크 탈출》","해야 한다, 아니면 안 된다. 그 중간은 없다. — 《스타워즈》","과거는 과거일 뿐이야. 배울 수만 있다면. — 《라이온 킹》","가장 어두운 시간은 해가 뜨기 직전이다. — 《어벤져스: 엔드게임》","세상에서 중요한 건 내가 누구냐가 아니라, 내가 뭘 하느냐다. — 《배트맨: 다크나이트》","우리에게 주어진 시간을 어떻게 쓸지만 결정하면 된다. — 《반지의 제왕》","아주 작은 존재도 미래를 바꿀 수 있다. — 《반지의 제왕》","자유는 아무 대가 없이 오지 않는다. — 《브레이브하트》","지금 이 순간을 잡아라. — 《데드 포엇 소사이어티》","무엇이든 할 수 있다. — 《쿵푸 판다》","그냥 계속 헤엄쳐. — 《니모를 찾아서》","모든 걸 시도해 봐. — 《주토피아》","두려움을 없애는 방법은 그것과 마주하는 것이다. — 《인사이드 아웃》","뜻이 있는 곳에 길이 있다. — 《아바타》","비가 그친 뒤에는 반드시 맑은 하늘이 온다. — 《날씨의 아이》","나는 이 세계를 이해할 수 없어. 그래도 계속한다. — 《록키》","시련이 없었다면 챔피언도 없다. — 《록키》","인생은 수레바퀴와 같아. 항상 앞으로 나아가야 한다. — 《니모를 찾아서》","이겨야 한다. 어떻게든. — 《친구》","꿈은 거짓말이 아니다. 반드시 이루어질 내일이다. — 《드림하이》","포기하면 그 순간 게임 끝이야, 인생도 마찬가지다. — 《슬램덩크》","죽을 때 후회 없는 인생을 살아라. — 《원피스》","약한 것은 죄가 아니다. 약한 채로 있으면 안 될 뿐. — 《귀멸의 칼날》","막을 때까지 싸워라. — 《진격의 거인》","노력은 배신하지 않는다. — 《하이큐!!》","패배는 패배하지 않는 것보다 낫다. — 《하이큐!!》","시선을 돌리지 마. 앞만 봐. — 《센과 치히로의 행방불명》","살아있는 한 힘을 내라. — 《하울의 움직이는 성》","바람이 분다. 견뎌야 한다. — 《바람의 나라》","상대는 나 자신이다. — 《초속 5센티미터》","포기하지 말 것. 내일이 있으니. — 《드래곤볼》","사람은 누구나 다시 태어날 수 있다. — 《바람의 나라》","아는 것이 힘이다. — 프랜시스 베이컨","천 리 길도 한 걸음부터. — 노자","배우고 또 배우면 어찌 기쁘지 아니하랴. — 공자","백번 듣는 것보다 한 번 보는 것이 낫다. — 공자","세 사람이 길을 가면 반드시 나의 스승이 있다. — 공자","하늘은 큰 뜻을 품은 자에게 먼저 고생을 시킨다. — 맹자","독서는 마음의 양식이다. — 키케로","하늘은 스스로 돕는 자를 돕는다. — 소포클레스","그대가 갈망하는 것을 따르라. — 랄프 왔도 에머슨","겁쟁이는 죽기 전에 여러 번 죽는다. 용감한 자는 한 번만 죽는다. — 셰익스피어","열정 없이는 위대한 것은 이루어지지 않는다. — 게오르크 빌헬름 프리드리히 헤겔","나는 나의 운명을 사랑한다. — 프리드리히 니체","오늘 할 일을 내일로 미루지 마라. — 벤자민 프랭클린","천재는 1%의 영감과 99%의 땀이다. — 토마스 에디슨","실패는 성공의 어머니이다. — 토마스 에디슨","시간은 금이다. — 벤자민 프랭클린","어리석은 자는 경험에서 아무것도 배우지 않는다. — 벤자민 프랭클린","실용적인 것이 가장 시적인 것이다. — 벤자민 프랭클린","깊은 생각 없는 독서는 낮잠과 같다. — 프랜시스 베이컨","인생은 속도가 아니라 방향이다. — 에이브러햄 링컨","성공은 최종적인 것이 아니며, 실패는 치명적인 것이 아니다. — 윈스턴 처칠","가장 위대한 영광은 넘어지지 않는 것이 아니라, 넘어질 때마다 일어서는 것이다. — 넬슨 만델라","용기는 두려움의 부재가 아니라, 두려움에도 행동하는 것이다. — 넬슨 만델라","네가 할 수 있다고 믿든 못 한다고 믿든, 네 말이 맞다. — 헨리 포드","성공의 비결은 시작하는 것이다. — 마크 트웨인","행운은 준비된 자에게 찾아온다. — 루이 파스퇴르","한계란 대부분 마음속에 있는 환상일 뿐이다. — 무하마드 알리","나는 세계 챔피언이다. 내가 그렇다고 말하기 전부터. — 무하마드 알리","항상 갈망하고, 우직하게 나아가라. — 스티브 잡스","당신의 시간은 제한되어 있다. 다른 사람의 인생을 살며 낭비하지 마라. — 스티브 잡스","오늘 나는 죽었다면 무엇을 후회하겠는가. — 스티브 잡스","죽고자 하면 살 것이요, 살고자 하면 죽을 것이니라. — 이순신","한 번도 실수한 적 없는 사람은 새로운 것을 시도한 적이 없는 사람이다. — 알버트 아인슈타인","네가 정말 소중히 여기는 것에 시간을 써라. — 《어린 왕자》","꽃을 단 한 송이라도 내가 직접 가꾸면, 내 세계에 엇비슷한 시간이 흐른다. — 《어린 왕자》","세상에서 가장 강한 사람은 스스로를 이기는 사람이다. — 무라카미 하루키","빛을 보고자 한다면 어둠을 견뎌야 한다. — 무라카미 하루키","사람은 마음먹은 것은 다 이룬다. — 《바보》","고통 없이는 얻는 것도 없다. — 라틴 격언","로마는 하루아침에 이루어지지 않았다. — 속담","연습이 완벽을 만든다. — 속담","배움에는 왕도가 없다. — 유클리드","작은 일에 충실하라. 그곳에 네 힘이 있다. — 루드야드 키플링","가장 큰 위험은 위험을 감수하지 않는 것이다. — 마크 주커버그","인생은 짧고, 예술은 길다. — 히포크라테스","삶을 살아가는 가장 좋은 복수는 성공하는 것이다. — 프랭크 시나트라","피할 수 없으면 즐겨라. — 로버트 엘리엇","포기하지 않는 한, 늦었다고 생각할 때가 가장 빠른 때다. — 속담","꾸준함은 재능을 이긴다. — 속담","반복은 지루하지만, 반복 없는 실력은 환상이다. — 속담","오늘의 노력이 내일의 실력이 된다. — 속담","지금이 가장 빠른 시작이다. — 속담","목표 없는 공부는 방향 잃은 배와 같다. — 속담","모르는 것을 아는 것이 배움의 시작이다. — 속담","실력은 하루아침에 생기지 않는다. — 속담","쉬는 것도 실력이다. 번아웃을 조심하자. — 속담","비교하지 말고, 어제의 나와 겨루자. — 속담","이해가 안 되면 다시 보면 된다. 반복이 답이다. — 속담","시험은 결과일 뿐, 과정이 실력이다. — 속담","1%씩 매일 오르면 37배가 된다. — 속담","모르는 건 부끄러운 게 아니다. 묻지 않는 게 문제다. — 속담","오답 노트 한 장이 교과서 열 페이지보다 강하다. — 속담","할 수 있다고 믿는 순간, 절반은 온 것이다. — 속담","오늘 공부한 만큼, 내일은 덜 불안하다. — 속담"],_e="schoolMetricsQuoteIndex";function Ut(){let e=Number(localStorage.getItem(_e)||0);const t=xe[e%xe.length];return localStorage.setItem(_e,String((e+1)%xe.length)),t}const Ft={1:{label:"1학년",note:"1학년은 2학기부터 내신 성적이 반영됩니다.",subjects:{국어:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"나만의 노트(나노)",weight:15,kind:"perf"}]}}},수학:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"기본도형 탐구 프로젝트",weight:20,kind:"perf"},{label:"평면·입체 도형 탐구",weight:20,kind:"perf"}]}}},사회:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"사회화 자서전 만들기",weight:20,kind:"perf"},{label:"모의 선거",weight:20,kind:"perf"}]}}},과학:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"실험 보고서 작성",weight:20,kind:"perf"},{label:"달의 위상 변화 관찰",weight:20,kind:"perf"}]}}},영어:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"희망 직업 소개",weight:20,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]}}},음악:{semesters:{2:{label:"2학기",items:[{label:"우쿨렐레 연주",weight:50,kind:"perf"},{label:"작곡가 탐구 활동",weight:50,kind:"perf"}]}}},미술:{semesters:{2:{label:"2학기",items:[{label:"스텐실",weight:50,kind:"perf"},{label:"문자도",weight:50,kind:"perf"}]}}},체육:{semesters:{2:{label:"2학기",items:[{label:"경기형 스포츠(축구)",weight:50,kind:"perf"},{label:"기록 도전형(달리기)",weight:50,kind:"perf"}]}}},정보:{semesters:{2:{label:"2학기",items:[{label:"AI 활용",weight:50,kind:"perf"},{label:"디지털 문화 표현",weight:50,kind:"perf"}]}}},"진로와 직업":{semesters:{2:{label:"2학기",items:[{label:"창업 프로젝트",weight:50,kind:"perf"},{label:"진로 디자인",weight:50,kind:"perf"}]}}},기술가정:{semesters:{2:{label:"2학기",items:[{label:"과학·미래기술 보고서",weight:35,kind:"perf"},{label:"에너지 신문 제작",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]}}}}},2:{label:"2학년",subjects:{국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"발표와 듣기",weight:15,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"복합양식 자료를 활용한 글 작성",weight:15,kind:"perf"}]}}},수학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"일차방정식·일차부등식",weight:20,kind:"perf"},{label:"연립일차방정식·일차함수",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"삼각형·사각형의 성질",weight:20,kind:"perf"},{label:"도형의 닮음·피타고라스",weight:20,kind:"perf"}]}}},역사:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"고대 문명 지도 만들기",weight:20,kind:"perf"},{label:"고대사 신문 만들기",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"서양 고대 문화유산 소개",weight:20,kind:"perf"},{label:"유럽 여행 소개 글쓰기",weight:20,kind:"perf"}]}}},과학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"밀도 측정",weight:10,kind:"perf"},{label:"지권 층상구조 모형 제작",weight:10,kind:"perf"},{label:"주기율표 탐구",weight:10,kind:"perf"},{label:"광합성 탐구",weight:10,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"소리의 성질 탐구",weight:10,kind:"perf"},{label:"인체 프로젝트",weight:20,kind:"perf"},{label:"전류,전압,저항 사이의 관계 탐구",weight:10,kind:"perf"}]}}},영어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"},{label:"발명품 소개",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"지역 축제 홍보",weight:20,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]}}},음악:{semesters:{1:{label:"1학기",items:[{label:"우쿨렐레 연주",weight:50,kind:"perf"},{label:"텅드럼 연주",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"펜비트 연주",weight:50,kind:"perf"},{label:"리코더 연주",weight:50,kind:"perf"}]}}},미술:{semesters:{1:{label:"1학기",items:[{label:"세밀화",weight:50,kind:"perf"},{label:"음식 모형 만들기",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"점묘화",weight:50,kind:"perf"},{label:"서양미술사 보고서",weight:50,kind:"perf"}]}}},체육:{semesters:{1:{label:"1학기",items:[{label:"경기형 스포츠(킨볼)",weight:60,kind:"perf"},{label:"도전형(제자리멀리뛰기)",weight:40,kind:"perf"}]},2:{label:"2학기",items:[{label:"경기형 스포츠(배드민턴)",weight:60,kind:"perf"},{label:"건강관리(줄넘기)",weight:40,kind:"perf"}]}}},도덕:{semesters:{1:{label:"1학기",items:[{label:"도덕적 인물 지폐 제작",weight:50,kind:"perf"},{label:"우정 네 컷 만들기",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"정보 카드 뉴스 제작",weight:50,kind:"perf"},{label:"인권 모니터링 제안서",weight:50,kind:"perf"}]}}},중국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 기말고사",weight:40,kind:"exam"},{label:"한어병음 작성",weight:30,kind:"perf"},{label:"중국어 말하기",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 기말고사",weight:40,kind:"exam"},{label:"하루 일과표 만들기",weight:30,kind:"perf"},{label:"중국어 말하기",weight:30,kind:"perf"}]}}},"금융과 미래":{semesters:{2:{label:"2학기",items:[{label:"투자 성향 검사",weight:50,kind:"perf"},{label:"투자 포트폴리오 구성",weight:50,kind:"perf"}]}}},기술가정:{semesters:{1:{label:"1학기",items:[{label:"효과적 의사소통 프로젝트",weight:35,kind:"perf"},{label:"제조 기술 프로젝트",weight:35,kind:"perf"},{label:"자기주도노트 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"균형 잡힌 식단 계획",weight:35,kind:"perf"},{label:"친환경 의복 생활",weight:35,kind:"perf"},{label:"자기주도노트 작성",weight:30,kind:"perf"}]}}}}},3:{label:"3학년",note:"3학년 2학기에는 기말고사가 없습니다.",subjects:{국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"논설문 쓰기",weight:15,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"한 학기 한 권 읽기",weight:30,kind:"perf"},{label:"문장의 짜임 고려해서 자신감 있게 발표",weight:30,kind:"perf"}]}}},사회:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"국가 기관 탐구로 권력 분립 이해",weight:20,kind:"perf"},{label:"국민 경제 지표와 국제 거래 이해",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"인구·도시 문제 탐구",weight:30,kind:"perf"},{label:"농업 산업화·세계화",weight:30,kind:"perf"}]}}},역사:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"고려 정치 변천",weight:20,kind:"perf"},{label:"고려의 문화 및 조선 통치 체제 탐구",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"조선 왕 가상 인터뷰",weight:30,kind:"perf"},{label:"양 난의 이해 및 영정조 정책 탐구",weight:30,kind:"perf"}]}}},도덕:{semesters:{1:{label:"1학기",items:[{label:"1학기 기말고사",weight:40,kind:"exam"},{label:"폭력 예방 논술문 작성",weight:30,kind:"perf"},{label:"사회 정의 실현 논술문 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"환경 보호 제안서",weight:30,kind:"perf"},{label:"실패 이력서 소개",weight:30,kind:"perf"}]}}},수학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"인수분해를 이용한 수의 성질 탐구",weight:20,kind:"perf"},{label:"이차함수 그래프",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"삼각비 개념 보고서",weight:30,kind:"perf"},{label:"원의 성질 문제해결",weight:30,kind:"perf"}]}}},과학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"기상 현상 실험",weight:20,kind:"perf"},{label:"화학 반응의 규칙 탐구",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"세포분열 관찰 실험",weight:30,kind:"perf"},{label:"물체 운동 분석",weight:30,kind:"perf"}]}}},영어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:15,kind:"perf"},{label:"급식 메뉴 프로젝트",weight:15,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"영어 듣기",weight:20,kind:"perf"},{label:"영어독서",weight:20,kind:"perf"},{label:"통계 자료 활용 프로젝트",weight:20,kind:"perf"}]}}},음악:{semesters:{1:{label:"1학기",items:[{label:"칼림바 연주",weight:50,kind:"perf"},{label:"전자드럼 연주",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"노래 부르기",weight:50,kind:"perf"},{label:"디자인사 연구보고서",weight:50,kind:"perf"}]}}},미술:{semesters:{1:{label:"1학기",items:[{label:"포트레이트 드로잉",weight:50,kind:"perf"},{label:"비주얼 리터러시",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"오마주",weight:50,kind:"perf"},{label:"디자인 조사 보고서",weight:50,kind:"perf"}]}}},체육:{semesters:{1:{label:"1학기",items:[{label:"전통 표현(티니클링)",weight:40,kind:"perf"},{label:"플로어볼",weight:60,kind:"perf"}]},2:{label:"2학기",items:[{label:"건강·체력 관리(타바타)",weight:40,kind:"perf"},{label:"배구",weight:60,kind:"perf"}]}}},기술가정:{semesters:{1:{label:"1학기",items:[{label:"생애 설계",weight:35,kind:"perf"},{label:"수송기술 제작",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"스마트폰 앱 만들기",weight:35,kind:"perf"},{label:"적정 기술 사례 조사",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]}}}}}};function oe(e){return Ft[e]??null}function _t(e){const t=oe(e);return t?Object.keys(t.subjects):[]}function Be(e,t){var n;return((n=oe(e))==null?void 0:n.subjects[t])??null}function tt(e,t){const n=Be(e,t);return n?Object.keys(n.semesters).map(Number).sort((r,i)=>r-i):[]}function Gt(e,t,n){var i;const r=Be(e,t);return((i=r==null?void 0:r.semesters[n])==null?void 0:i.items)??[]}function Ge(e,t,n){var i;const r=Be(e,t);return((i=r==null?void 0:r.semesters[n])==null?void 0:i.label)??`${n}학기`}function Wt(e,t,n,r){return`${e}-${t}-${n}-${r}`}function Kt(e,t,n){return Gt(e,t,n).map((i,l)=>({key:Wt(e,t,n,l),subject:t,semester:n,label:i.label,weight:i.weight,kind:i.kind}))}function nt(e,t){let n=0,r=0;for(const i of e){const l=t[i.key];if(l===""||l===null||l===void 0)continue;const c=Number(l);Number.isNaN(c)||(n+=i.weight,r+=c*i.weight)}return n===0?null:r/n}function Jt(e,t){const n={},r=[];for(const l of e){const c=t[l.key];if(c===""||c===null||c===void 0){r.push(l);continue}const u=Number(c);if(Number.isNaN(u)){r.push(l);continue}n[l.key]=u}const i={...n};for(const l of r)i[l.key]=100;return{average:nt(e,i),remainingCount:r.length}}const Yt=["음악","미술","체육"],zt=[{letter:"A",min:90},{letter:"B",min:80},{letter:"C",min:70},{letter:"D",min:60},{letter:"E",min:0}],Xt=[{letter:"A",min:80},{letter:"B",min:60},{letter:"C",min:0}];function at(e){return e.map((t,n,r)=>{const i=r[n-1],l=t.min===0?`${t.letter} (${(i==null?void 0:i.min)??60}점 미만)`:`${t.letter} (${t.min}점 이상)`;return{letter:t.letter,min:Number(t.min)||0,label:l}})}function it(){const e=W().standardScale;return at(e!=null&&e.length?e:zt)}function rt(){const e=W().artsScale;return at(e!=null&&e.length?e:Xt)}function je(e){return Yt.includes(e)}function $e(e){return e==null||Number.isNaN(e)?null:Math.round(e)}function He(e){return je(e)?rt():it()}function Ie(e,t){const n=$e(e);if(n===null)return"-";const r=He(t);for(const i of r)if(n>=i.min)return i.letter;return r[r.length-1].letter}function re(e){return`${e}등급`}const We=["조금만 더 올리면 된다. 할 수 있어!","상위 등급이 코앞이다. 끝까지 달려보자!","지금의 노력이 등급을 바꾼다. 포기하지 마!","아직 끝나지 않았어. 충분히 올릴 수 있어!","남은 항목이 기회다. 집중해서 마무리하자!","한 걸음만 더 가면 등급이 달라진다. 파이팅!","가능성은 아직 살아 있다. 믿고 가보자!","오늘의 한 문제가 등급을 바꿀 수도 있어!","목표 등급까지 거의 다 왔다. 조금만 더!","실력은 거짓말하지 않는다. 계속 밀어붙여!"];function Qt(e){return e.projection.remainingCount>0&&e.letter!==e.projLetter}function Vt(){const e=Math.floor(Math.random()*We.length);return We[e]}function lt(e=null){const t=e?je(e):!1,n=e?t?`${e}은(는) 예체능 과목 (A·B·C)`:`${e}은(는) 일반 과목 (A·B·C·D·E)`:"과목 유형에 따라 등급 기준이 다릅니다.",r=it(),i=rt();return`
    <div class="grade-criteria-wrap">
      <button type="button" class="grade-criteria-bar" data-toggle="criteria" aria-expanded="false">
        ▶ 등급 기준표 확인
      </button>
      <div class="grade-criteria-panel hidden" id="criteria-panel">
        <p class="criteria-note">${n}</p>
        <p class="criteria-note muted">총점은 소수점을 반올림한 뒤 등급을 산출합니다.</p>
        <table class="criteria-table">
          <thead>
            <tr><th colspan="2">일반 과목 (국·영·수·사·과 등)</th></tr>
          </thead>
          <tbody>
            ${r.map(l=>`<tr><td>${l.letter}</td><td>${l.label.replace(/^[A-E]\s*/,"")}</td></tr>`).join("")}
          </tbody>
        </table>
        <table class="criteria-table">
          <thead>
            <tr><th colspan="2">예체능 (음악·미술·체육)</th></tr>
          </thead>
          <tbody>
            ${i.map(l=>`<tr><td>${l.letter}</td><td>${l.label.replace(/^[A-E]\s*/,"")}</td></tr>`).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `}function st(e){const t=e.querySelector("[data-toggle='criteria']"),n=e.querySelector("#criteria-panel");!t||!n||t.addEventListener("click",()=>{const r=n.classList.toggle("hidden");t.setAttribute("aria-expanded",String(!r)),t.textContent=r?"▶ 등급 기준표 확인":"▼ 등급 기준표 닫기"})}function Zt(e,t,n,r){if(n===null)return null;const i=$e(n),l=Ie(i,r),c=He(r),u=c.findIndex(L=>L.letter===l);if(u<=0)return{targetLetter:l,needed:null,message:"이미 최고 등급입니다."};const h=c[u-1],g=h.min,x=e.filter(L=>{const v=t[L.key];return v===""||v===null||v===void 0||Number.isNaN(Number(v))});if(x.length===0)return{targetLetter:h.letter,needed:null,message:"모든 항목이 입력되었습니다."};let m=0,s=0,f=0;for(const L of e){const v=t[L.key];if(v===""||v===null||v===void 0||Number.isNaN(Number(v))){f+=L.weight;continue}m+=L.weight,s+=Number(v)*L.weight}if(f===0)return null;const a=m+f,k=(g*a-s)/f,M=Math.max(0,Math.min(100,k));return{targetLetter:h.letter,needed:Math.ceil(M*10)/10,remainingCount:x.length,message:null}}function en(e,t,n,r){const l=He(r).find(a=>a.letter===n);if(!l)return null;let c=0,u=0,h=0,g=0;for(const a of e){const k=t[a.key];if(k===""||k===null||k===void 0||Number.isNaN(Number(k))){h+=a.weight,g+=1;continue}u+=a.weight,c+=Number(k)*a.weight}if(h===0)return null;const x=u+h,s=((l.min-.5)*x-c)/h;return{minScore:Math.ceil(Math.max(0,Math.min(100,s))*10)/10,remainingCount:g}}function tn(e){const t=$e(e);return{raw:e,rounded:t,display:`${t}점`}}function nn(e,t,n){const r=nt(e,t);if(r===null)return null;const{rounded:i}=tn(r),l=Ie(i,n),c=Jt(e,t),u=$e(c.average),h=Zt(e,t,r,n),g=en(e,t,l,n);return{average:r,rounded:i,letter:l,projection:c,projRounded:u,projLetter:Ie(u,n),needed:h,confirmMin:g}}function ee(e="globe"){return`
    <svg class="${e}" viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="48" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.35"/>
      <ellipse cx="60" cy="60" rx="48" ry="16" fill="none" stroke="currentColor" stroke-width="1"/>
      <ellipse cx="60" cy="60" rx="16" ry="48" fill="none" stroke="currentColor" stroke-width="1"/>
      <ellipse cx="60" cy="60" rx="34" ry="48" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.7"/>
      <line x1="12" y1="60" x2="108" y2="60" stroke="currentColor" stroke-width="0.8"/>
      <line x1="60" y1="12" x2="60" y2="108" stroke="currentColor" stroke-width="0.8"/>
    </svg>
  `}function an(){return'<img class="title-bg" src="./title-bg.png" alt="" aria-hidden="true" />'}function rn(){return'<img class="go-bg" src="./go-bg.png" alt="" aria-hidden="true" />'}function ot(e){return`grade-theme-${e}`}function K(e,t=""){return`<div class="phone-screen ${t}">${e}</div>`}function te(e){return`<p class="screen-footer">${e}</p>`}function ne(e="main"){return`<button type="button" class="link-btn" data-action="${e}">메인화면으로</button>`}const ct=[20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5],be=8;function ln(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function sn(e,t,n){var r,i;(r=e.querySelector('[data-nav="back"]'))==null||r.addEventListener("click",t),(i=e.querySelector('[data-nav="main"]'))==null||i.addEventListener("click",n)}function on(e,t){const n=Math.hypot(e,t);if(n>1)return{points:0,label:"보드 밖"};if(n<=.07)return{points:50,label:"더블 불 · 50"};if(n<=.14)return{points:25,label:"싱글 불 · 25"};let r=Math.atan2(e,-t);r<0&&(r+=Math.PI*2);const i=Math.floor((r+Math.PI/20)%(Math.PI*2)/(Math.PI/10)),l=ct[i];return n>=.9?{points:l*2,label:`더블 ${l} · ${l*2}`}:n>=.52&&n<=.62?{points:l*3,label:`트리플 ${l} · ${l*3}`}:{points:l,label:`싱글 ${l} · ${l}`}}function Me(e,t,n){const r=t/2,i=t/2,l=t*.42;e.clearRect(0,0,t,t),e.fillStyle="#1a1a1a",e.beginPath(),e.arc(r,i,l*1.08,0,Math.PI*2),e.fill();for(let c=0;c<20;c++){const u=-Math.PI/2-Math.PI/20+c*Math.PI/10,h=u+Math.PI/10,g=c%2===0;e.beginPath(),e.moveTo(r,i),e.arc(r,i,l*.9,u,h),e.closePath(),e.fillStyle=g?"#111":"#ece6d8",e.fill(),e.beginPath(),e.moveTo(r,i),e.arc(r,i,l*.52,u,h),e.closePath(),e.fillStyle=g?"#1c1c1c":"#f5f0e6",e.fill(),e.beginPath(),e.arc(r,i,l,u,h),e.arc(r,i,l*.9,h,u,!0),e.closePath(),e.fillStyle=c%2===0?"#c4122f":"#0a7a3c",e.fill(),e.beginPath(),e.arc(r,i,l*.62,u,h),e.arc(r,i,l*.52,h,u,!0),e.closePath(),e.fillStyle=c%2===0?"#c4122f":"#0a7a3c",e.fill()}e.strokeStyle="rgba(180,180,180,0.55)",e.lineWidth=1;for(let c=0;c<20;c++){const u=-Math.PI/2-Math.PI/20+c*Math.PI/10;e.beginPath(),e.moveTo(r,i),e.lineTo(r+Math.cos(u)*l,i+Math.sin(u)*l),e.stroke()}[.9,.62,.52,.14,.07].forEach(c=>{e.beginPath(),e.arc(r,i,l*c,0,Math.PI*2),e.stroke()}),e.beginPath(),e.arc(r,i,l*.14,0,Math.PI*2),e.fillStyle="#0a7a3c",e.fill(),e.beginPath(),e.arc(r,i,l*.07,0,Math.PI*2),e.fillStyle="#c4122f",e.fill(),e.fillStyle="#fff",e.font=`bold ${Math.max(10,t*.045)}px sans-serif`,e.textAlign="center",e.textBaseline="middle";for(let c=0;c<20;c++){const u=-Math.PI/2+c*Math.PI/10,h=r+Math.cos(u)*l*1.14,g=i+Math.sin(u)*l*1.14;e.fillText(String(ct[c]),h,g)}for(const c of n)e.beginPath(),e.arc(r+c.nx*l,i+c.ny*l,4,0,Math.PI*2),e.fillStyle="#fff700",e.fill(),e.strokeStyle="#000",e.stroke()}function cn(e,{onBack:t,onMain:n}){let r=0,i=be,l="vertical",c=.5,u=.5,h=1,g=1,x=0,m=0;const s=[],f=1.35;e.innerHTML=`
    <div class="game-panel">
      <h2 class="game-title">다트 게임</h2>
      <p class="game-desc">바가 가운데 올 때 탭/스페이스로 멈추세요. (세로 → 가로)</p>
      <div class="dart-stats">
        <span id="dart-score">점수: 0</span>
        <span id="dart-throws">남은 횟수: ${be}</span>
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
      ${ln()}
    </div>
  `;const a=e.querySelector("#dart-canvas"),k=a.getContext("2d"),M=e.querySelector("#dart-score"),L=e.querySelector("#dart-throws"),v=e.querySelector("#dart-feedback"),$=e.querySelector("#dart-stop"),T=e.querySelector("#dart-retry"),N=e.querySelector("#aim-v"),P=e.querySelector("#aim-h"),q=e.querySelector(".aim-bar-v"),O=e.querySelector(".aim-bar-h");function R(){const o=Math.min(300,e.clientWidth||300);a.width=o,a.height=o,Me(k,o,s)}function H(){N.style.top=`${c*100}%`,P.style.left=`${u*100}%`,q.classList.toggle("active",l==="vertical"),O.classList.toggle("active",l==="horizontal")}function B(o){m||(m=o);const d=Math.min(.05,(o-m)/1e3);m=o,l==="vertical"?(c+=h*f*d,c>=1&&(c=1,h=-1),c<=0&&(c=0,h=1)):l==="horizontal"&&(u+=g*f*d,u>=1&&(u=1,g=-1),u<=0&&(u=0,g=1)),H(),x=requestAnimationFrame(B)}function U(){const o=(c-.5)*2.05,d=(u-.5)*2.05,p=on(d,o);if(s.push({nx:d,ny:o}),r+=p.points,i-=1,M.textContent=`점수: ${r}`,L.textContent=`남은 횟수: ${i}`,Me(k,a.width,s),v.textContent=p.label,i<=0){l="done",$.classList.add("hidden"),T.classList.remove("hidden"),v.textContent=`게임 종료! 최종 ${r}점`;return}l="vertical",c=Math.random(),u=Math.random(),v.textContent="세로 바를 가운데에 맞춰 멈추세요!"}function w(o){var d;if((d=o==null?void 0:o.preventDefault)==null||d.call(o),l==="vertical"){l="horizontal",v.textContent="가로 바를 가운데에 맞춰 멈추세요!";return}l==="horizontal"&&(l="result",U())}function A(o){(o.code==="Space"||o.key===" ")&&(o.preventDefault(),w(o))}function b(){r=0,i=be,l="vertical",s.length=0,c=.2,u=.2,M.textContent="점수: 0",L.textContent=`남은 횟수: ${be}`,v.textContent="세로 바를 가운데에 맞춰 멈추세요!",$.classList.remove("hidden"),T.classList.add("hidden"),Me(k,a.width,s)}return R(),H(),x=requestAnimationFrame(B),$.addEventListener("click",w),$.addEventListener("touchstart",w,{passive:!1}),T.addEventListener("click",b),window.addEventListener("keydown",A),window.addEventListener("resize",R),sn(e,t,n),()=>{cancelAnimationFrame(x),window.removeEventListener("keydown",A),window.removeEventListener("resize",R)}}const J=12;function dn(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function un(e,t,n){var r,i;(r=e.querySelector('[data-nav="back"]'))==null||r.addEventListener("click",t),(i=e.querySelector('[data-nav="main"]'))==null||i.addEventListener("click",n)}function fn(e,{onBack:t,onMain:n}){let r=0,i=0,l=!1,c=!0,u=.08,h=.55,g=0,x=0,m=0,s=!1;e.innerHTML=`
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
      ${dn()}
    </div>
  `;const f=e.querySelector("#cricket-canvas"),a=f.getContext("2d"),k=e.querySelector("#cricket-runs"),M=e.querySelector("#cricket-balls"),L=e.querySelector("#cricket-feedback"),v=e.querySelector("#cricket-swing"),$=e.querySelector("#cricket-retry"),T=.72,N=.09;function P(){const w=Math.min(320,Math.max(260,e.clientWidth-16||300));f.width=w,f.height=Math.round(w*1.3)}function q(){const w=f.width,A=f.height;a.clearRect(0,0,w,A),a.fillStyle="#6ec8ff",a.fillRect(0,0,w,A*.22),a.fillStyle="#3d8c3a",a.fillRect(0,A*.18,w,A*.12);for(let I=0;I<18;I++)a.fillStyle=`hsl(${I*47%360} 70% 45%)`,a.beginPath(),a.arc(10+I*(w/17),A*.22,6,0,Math.PI*2),a.fill();a.fillStyle="#4caf50",a.fillRect(0,A*.28,w,A*.72);const b=w*.28,o=(w-b)/2,d=A*.3,p=A*.58;a.fillStyle="#c4a574",a.beginPath(),a.moveTo(o+b*.15,d),a.lineTo(o+b*.85,d),a.lineTo(o+b,d+p),a.lineTo(o,d+p),a.closePath(),a.fill();const y=d+p*T;if(a.strokeStyle="#fff41a",a.lineWidth=3,a.setLineDash([6,4]),a.beginPath(),a.moveTo(o-8,y),a.lineTo(o+b+8,y),a.stroke(),a.setLineDash([]),a.fillStyle="#8d6e63",a.beginPath(),a.ellipse(w/2,d+18,10,14,0,0,Math.PI*2),a.fill(),a.fillStyle="#66bb6a",a.beginPath(),a.ellipse(w/2,d+p-10,16,22,0,0,Math.PI*2),a.fill(),a.save(),a.translate(w/2+14,d+p-18),a.rotate(g>0?-.9:-.2),a.fillStyle="#f5f5f5",a.fillRect(-4,-28,8,36),a.restore(),!c&&!s){const I=d+p*u,C=w/2+Math.sin(u*6)*4,Le=7+u*4;a.beginPath(),a.arc(C,I,Le,0,Math.PI*2),a.fillStyle="#ef5350",a.fill(),a.strokeStyle="#fff",a.lineWidth=1.5,a.stroke()}g>0&&(a.fillStyle="rgba(255,244,26,0.15)",a.fillRect(0,y-20,w,40))}function O(){if(i>=J){s=!0,v.disabled=!0,v.classList.add("hidden"),$.classList.remove("hidden"),L.textContent=`경기 종료! 총 ${r}점`;return}c=!1,l=!1,u=.05,h=.48+Math.random()*.35,L.textContent="타이밍에 맞춰 스윙!"}function R(w){var d;if((d=w==null?void 0:w.preventDefault)==null||d.call(w),s||l||c)return;l=!0,g=.25,i+=1,M.textContent=`볼: ${i} / ${J}`;const A=Math.abs(u-T);let b=0,o="헛스윙!";A<=N*.25?(b=6,o="식스! +6"):A<=N*.5?(b=4,o="포! +4"):A<=N*.75?(b=2,o="투런! +2"):A<=N&&(b=1,o="싱글! +1"),r+=b,k.textContent=`득점: ${r}`,L.textContent=o,c=!0,setTimeout(()=>{s||O(),i>=J&&(s=!0,v.disabled=!0,v.classList.add("hidden"),$.classList.remove("hidden"),L.textContent=`경기 종료! 총 ${r}점`)},650)}function H(w){m||(m=w);const A=Math.min(.05,(w-m)/1e3);m=w,!c&&!s&&(u+=h*A,u>1.05&&(c=!0,l=!0,i+=1,M.textContent=`볼: ${i} / ${J}`,L.textContent="놓침!",setTimeout(()=>{l=!1,i>=J?(s=!0,v.disabled=!0,v.classList.add("hidden"),$.classList.remove("hidden"),L.textContent=`경기 종료! 총 ${r}점`):O()},500))),g>0&&(g-=A),q(),x=requestAnimationFrame(H)}function B(){r=0,i=0,s=!1,l=!1,g=0,k.textContent="득점: 0",M.textContent=`볼: 0 / ${J}`,v.disabled=!1,v.classList.remove("hidden"),$.classList.add("hidden"),O()}function U(w){(w.code==="Space"||w.key===" ")&&(w.preventDefault(),R(w))}return P(),O(),x=requestAnimationFrame(H),v.addEventListener("click",R),v.addEventListener("touchstart",R,{passive:!1}),f.addEventListener("pointerdown",R),$.addEventListener("click",B),window.addEventListener("keydown",U),window.addEventListener("resize",P),un(e,t,n),()=>{cancelAnimationFrame(x),window.removeEventListener("keydown",U),window.removeEventListener("resize",P)}}function mn(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function bn(e,t,n){var r,i;(r=e.querySelector('[data-nav="back"]'))==null||r.addEventListener("click",t),(i=e.querySelector('[data-nav="main"]'))==null||i.addEventListener("click",n)}const gn=["#42a5f5","#ef5350","#ffee58","#66bb6a"],pn=4,Ee=7;function hn(e,{onBack:t,onMain:n}){let r=0,i=3,l=!1,c=0,u=0;const h={left:!1,right:!1};let g=320,x=420,m={x:0,y:0,w:70,h:12},s={x:0,y:0,r:6,vx:0,vy:0},f=[];e.innerHTML=`
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
      ${mn()}
    </div>
  `;const a=e.querySelector("#bo-canvas"),k=a.getContext("2d"),M=e.querySelector("#bo-lives"),L=e.querySelector("#bo-score"),v=e.querySelector("#bo-feedback"),$=e.querySelector("#bo-start");function T(){g=Math.min(320,Math.max(260,e.clientWidth-16||300)),x=Math.round(g*1.3),a.width=g,a.height=x,m.y=x-36,m.w=g*.22}function N(){f=[];const o=4,d=56,p=(g-o*(Ee+1))/Ee,y=16;for(let I=0;I<pn;I++)for(let C=0;C<Ee;C++)f.push({x:o+C*(p+o),y:d+I*(y+o),w:p,h:y,color:gn[I],alive:!0})}function P(){m.x=(g-m.w)/2,s.x=g/2,s.y=m.y-20;const o=-Math.PI/3+Math.random()*(Math.PI/3),d=Math.min(g,x)*.45;s.vx=Math.sin(o)*d,s.vy=-Math.abs(Math.cos(o)*d)}function q(){M.textContent=`생명: ${"●".repeat(i)}${"○".repeat(3-i)}`,L.textContent=`점수: ${String(r).padStart(5,"0")}`}function O(){k.fillStyle="#1a1030",k.fillRect(0,0,g,x);for(const o of f)o.alive&&(k.fillStyle=o.color,R(k,o.x,o.y,o.w,o.h,4),k.fill());k.fillStyle="#fff",R(k,m.x,m.y,m.w,m.h,6),k.fill(),k.beginPath(),k.arc(s.x,s.y,s.r,0,Math.PI*2),k.fillStyle="#fff",k.fill()}function R(o,d,p,y,I,C){o.beginPath(),o.moveTo(d+C,p),o.arcTo(d+y,p,d+y,p+I,C),o.arcTo(d+y,p+I,d,p+I,C),o.arcTo(d,p+I,d,p,C),o.arcTo(d,p,d+y,p,C),o.closePath()}function H(o){u||(u=o);const d=Math.min(.033,(o-u)/1e3);if(u=o,l){const p=g*1.1*d;if(h.left&&(m.x-=p),h.right&&(m.x+=p),m.x=Math.max(0,Math.min(g-m.w,m.x)),s.x+=s.vx*d,s.y+=s.vy*d,s.x<s.r&&(s.x=s.r,s.vx*=-1),s.x>g-s.r&&(s.x=g-s.r,s.vx*=-1),s.y<s.r&&(s.y=s.r,s.vy*=-1),s.vy>0&&s.y+s.r>=m.y&&s.y-s.r<=m.y+m.h&&s.x>=m.x&&s.x<=m.x+m.w){s.y=m.y-s.r;const y=(s.x-(m.x+m.w/2))/(m.w/2),I=Math.hypot(s.vx,s.vy)*1.02,C=y*1.1;s.vx=Math.sin(C)*I,s.vy=-Math.abs(Math.cos(C)*I)}for(const y of f)if(y.alive&&s.x+s.r>y.x&&s.x-s.r<y.x+y.w&&s.y+s.r>y.y&&s.y-s.r<y.y+y.h){y.alive=!1,r+=10,q();const I=s.x+s.r-y.x,C=y.x+y.w-(s.x-s.r),Le=s.y+s.r-y.y,dt=y.y+y.h-(s.y-s.r),ut=Math.min(I,C),ft=Math.min(Le,dt);ut<ft?s.vx*=-1:s.vy*=-1;break}f.every(y=>!y.alive)&&(l=!1,v.textContent=`클리어! 점수 ${r}`),s.y>x+20&&(i-=1,q(),i<=0?(l=!1,v.textContent=`게임 오버 · ${r}점`):(P(),v.textContent="생명 -1! 계속…"))}O(),c=requestAnimationFrame(H)}function B(){r=0,i=3,l=!0,N(),P(),q(),v.textContent="화이팅!"}function U(o){const d=a.getBoundingClientRect(),p=(o-d.left)/d.width*g;m.x=Math.max(0,Math.min(g-m.w,p-m.w/2))}function w(o){var p;o.preventDefault();const d=((p=o.touches)==null?void 0:p[0])||o;U(d.clientX)}function A(o){(o.key==="ArrowLeft"||o.key==="a"||o.key==="A")&&(h.left=!0),(o.key==="ArrowRight"||o.key==="d"||o.key==="D")&&(h.right=!0)}function b(o){(o.key==="ArrowLeft"||o.key==="a"||o.key==="A")&&(h.left=!1),(o.key==="ArrowRight"||o.key==="d"||o.key==="D")&&(h.right=!1)}return T(),N(),P(),q(),O(),c=requestAnimationFrame(H),$.addEventListener("click",B),a.addEventListener("pointerdown",w),a.addEventListener("pointermove",o=>{(o.buttons||o.pressure>0)&&w(o)}),a.addEventListener("touchstart",w,{passive:!1}),a.addEventListener("touchmove",w,{passive:!1}),window.addEventListener("keydown",A),window.addEventListener("keyup",b),window.addEventListener("resize",T),bn(e,t,n),()=>{cancelAnimationFrame(c),window.removeEventListener("keydown",A),window.removeEventListener("keyup",b),window.removeEventListener("resize",T)}}const _=3;function wn(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function kn(e,t,n){var r,i;(r=e.querySelector('[data-nav="back"]'))==null||r.addEventListener("click",t),(i=e.querySelector('[data-nav="main"]'))==null||i.addEventListener("click",n)}function vn(e,{onBack:t,onMain:n}){let r=320,i=420,l=0,c=0,u=!1,h=!1;const g={left:!1,right:!1};let x=0;const m={lane:0,progress:0,lap:0,color:"#4dffd4"},s={lane:.2,progress:.02,lap:0,color:"#ff4fd8",target:0};e.innerHTML=`
    <div class="game-panel">
      <h2 class="game-title">레이싱 vs AI</h2>
      <p class="game-desc">드래그/←→로 조향. 먼저 ${_}바퀴!</p>
      <div class="race-stats">
        <span id="race-you">YOU 0/${_}</span>
        <span id="race-ai">AI 0/${_}</span>
      </div>
      <canvas id="race-canvas" class="game-canvas race-canvas" width="320" height="420"></canvas>
      <button type="button" class="btn-go" id="race-start">시작 / 다시하기</button>
      <p class="game-feedback" id="race-feedback">시작을 누르세요!</p>
      ${wn()}
    </div>
  `;const f=e.querySelector("#race-canvas"),a=f.getContext("2d"),k=e.querySelector("#race-you"),M=e.querySelector("#race-ai"),L=e.querySelector("#race-feedback"),v=e.querySelector("#race-start");function $(b,o=0){const d=r/2,p=i/2,y=r*.36-o,I=i*.38-o,C=b*Math.PI*2-Math.PI/2;return{x:d+Math.cos(C)*y,y:p+Math.sin(C)*I,a:C}}function T(){r=Math.min(320,Math.max(260,e.clientWidth-16||300)),i=Math.round(r*1.3),f.width=r,f.height=i}function N(){k.textContent=`YOU ${Math.min(m.lap,_)}/${_}`,M.textContent=`AI ${Math.min(s.lap,_)}/${_}`}function P(b,o=14){const d=$(b.progress,8+b.lane*14),p=$((b.progress+.01)%1,8+b.lane*14),y=Math.atan2(p.y-d.y,p.x-d.x);a.save(),a.translate(d.x,d.y),a.rotate(y),a.fillStyle=b.color,a.fillRect(-o,-o*.45,o*2,o*.9),a.fillStyle="#111",a.fillRect(o*.2,-o*.3,o*.5,o*.6),a.restore()}function q(){a.fillStyle="#1b5e20",a.fillRect(0,0,r,i),a.beginPath();for(let d=0;d<=64;d++){const p=$(d/64,-18);d===0?a.moveTo(p.x,p.y):a.lineTo(p.x,p.y)}a.closePath(),a.fillStyle="#37474f",a.fill(),a.beginPath();for(let d=0;d<=64;d++){const p=$(d/64,28);d===0?a.moveTo(p.x,p.y):a.lineTo(p.x,p.y)}a.closePath(),a.fillStyle="#2e7d32",a.fill(),a.strokeStyle="rgba(255,255,255,0.35)",a.setLineDash([8,10]),a.lineWidth=2,a.beginPath();for(let d=0;d<=64;d++){const p=$(d/64,6);d===0?a.moveTo(p.x,p.y):a.lineTo(p.x,p.y)}a.stroke(),a.setLineDash([]);const b=$(0,-16),o=$(0,26);a.strokeStyle="#fff",a.lineWidth=4,a.beginPath(),a.moveTo(b.x,b.y),a.lineTo(o.x,o.y),a.stroke(),P(s,12),P(m,13)}function O(b,o,d){const p=b.progress;b.progress+=o*d,b.progress>=1&&(b.progress-=1,b.lap+=1),p>.9&&b.progress<.1&&b.lap}function R(b){c||(c=b);const o=Math.min(.05,(b-c)/1e3);if(c=b,u&&!h){let d=x;g.left&&(d-=1),g.right&&(d+=1),d=Math.max(-1,Math.min(1,d)),m.lane+=d*2.2*o,m.lane=Math.max(-1,Math.min(1,m.lane)),s.target+=(Math.random()-.5)*1.5*o,s.target=Math.max(-.8,Math.min(.8,s.target)),s.lane+=(s.target-s.lane)*2*o;const p=.18+(1-Math.abs(m.lane)*.08)*.04,y=.175+Math.sin(b/1100)*.012,I=m.lap,C=s.lap;O(m,p,o),O(s,y,o),(m.lap!==I||s.lap!==C)&&N(),m.lap>=_?(h=!0,u=!1,L.textContent="승리! 당신이 먼저 3바퀴!"):s.lap>=_&&(h=!0,u=!1,L.textContent="패배… AI가 먼저 들어왔습니다.")}q(),l=requestAnimationFrame(R)}function H(){m.lane=0,m.progress=0,m.lap=0,s.lane=.25,s.progress=.01,s.lap=0,s.target=0,h=!1,u=!0,N(),L.textContent="달려라!"}function B(b){var y;b.preventDefault();const o=((y=b.touches)==null?void 0:y[0])||b,d=f.getBoundingClientRect();x=((o.clientX-d.left)/d.width-.5)*2}function U(){x=0}function w(b){(b.key==="ArrowLeft"||b.key==="a"||b.key==="A")&&(g.left=!0),(b.key==="ArrowRight"||b.key==="d"||b.key==="D")&&(g.right=!0)}function A(b){(b.key==="ArrowLeft"||b.key==="a"||b.key==="A")&&(g.left=!1),(b.key==="ArrowRight"||b.key==="d"||b.key==="D")&&(g.right=!1)}return T(),N(),q(),l=requestAnimationFrame(R),v.addEventListener("click",H),f.addEventListener("pointerdown",B),f.addEventListener("pointermove",b=>{b.buttons&&B(b)}),f.addEventListener("pointerup",U),f.addEventListener("pointerleave",U),f.addEventListener("touchstart",B,{passive:!1}),f.addEventListener("touchmove",B,{passive:!1}),f.addEventListener("touchend",U),window.addEventListener("keydown",w),window.addEventListener("keyup",A),window.addEventListener("resize",T),kn(e,t,n),()=>{cancelAnimationFrame(l),window.removeEventListener("keydown",w),window.removeEventListener("keyup",A),window.removeEventListener("resize",T)}}const S=document.getElementById("app");let j=null,Y=null,G=null,z=null,Ke=!1;const Je=new Set(["rest","game-dart","game-cricket","game-breakout","game-race","admin"]),yn={login:Ln,main:xn,help:Mn,grade:In,subject:Cn,calculator:Pn,rest:Tn,admin:En,"game-dart":()=>pe("dart"),"game-cricket":()=>pe("cricket"),"game-breakout":()=>pe("breakout"),"game-race":()=>pe("race")};Sn();function Sn(){Promise.all([Tt(),xt()]).finally(()=>{E(Qe()?"main":"login")})}function E(e,t={}){z&&(z(),z=null),Ke&&!Je.has(e)&&Ht(),e!=="login"&&!Qe()&&(e="login",t={});const n=yn[e];n&&(S.innerHTML="",n(t),Ke=Je.has(e),window.scrollTo(0,0))}function Q(e){e.querySelectorAll("[data-action]").forEach(t=>{t.addEventListener("click",()=>$n(t.dataset.action))})}function $n(e){if(e==="main"){j=null,Y=null,G=null,E("main");return}if(e==="grade"){Y=null,G=null,E("grade");return}if(e==="help"&&E("help"),e==="rest"&&E("rest"),e==="admin"){se()&&E("admin");return}if(e==="subject"&&E("subject",{grade:j}),e==="game-dart"&&E("game-dart"),e==="game-cricket"&&E("game-cricket"),e==="game-breakout"&&E("game-breakout"),e==="game-race"&&E("game-race"),e.startsWith("pick-grade-")){j=Number(e.replace("pick-grade-","")),Y=null,G=null,E("subject",{grade:j});return}if(e.startsWith("pick-subject-")){const t=decodeURIComponent(e.replace("pick-subject-",""));Y=t;const n=tt(j,t);G=(n.length===1,n[0]),E("calculator",{grade:j,subject:t,semester:G});return}e.startsWith("pick-semester-")&&(G=Number(e.replace("pick-semester-","")),E("calculator",{grade:j,subject:Y,semester:G}))}function Ln(){S.innerHTML=K(`
    <div class="stack-screen login-screen">
      ${ee("globe globe-large")}
      <h1 class="login-title">SCHOOL METRICS</h1>
      <p class="login-desc">해연중 구글 계정으로 로그인하세요</p>
      <div class="login-form">
        <button type="button" class="btn-go" id="login-google">Google로 로그인</button>
        <p class="muted login-hint">예: 20251413@haeyeon.ms.kr<br/>폰에 있는 해연중 구글 계정을 선택하세요.</p>
        <p class="warn hidden" id="login-error"></p>
      </div>
      ${te(F.footer)}
    </div>
  `);const e=S.querySelector("#login-error"),t=S.querySelector("#login-google");t.addEventListener("click",async()=>{t.disabled=!0,e.classList.add("hidden"),e.textContent="";const n=await Mt();if(!n.redirected){if(!n.ok){e.textContent=n.error,e.classList.remove("hidden"),t.disabled=!1;return}X({type:"user_login",message:`구글 로그인: ${n.user.account}`,account:n.user.account}),E("main")}})}function xn(){const e=Ut();S.innerHTML=K(`
    <div class="main-screen">
      <button type="button" class="help-btn" data-action="help" aria-label="앱 정보">?</button>
      <div class="main-header">
        <div class="title-block">
          ${an()}
          <h1 class="app-title">${F.title}</h1>
        </div>
        <p class="app-subtitle">${F.subtitle}</p>
        <p class="main-quote">"${e}"</p>
      </div>
      <div class="main-body">
        <p class="login-user muted">${Ve()||""}</p>
        <button type="button" class="go-btn" data-action="grade" aria-label="시작">
          ${rn()}
          <span class="go-text">GO</span>
        </button>
      </div>
      <p class="main-footer">${F.footer}</p>
    </div>
  `),Q(S)}function Mn(){S.innerHTML=K(`
    <div class="stack-screen">
      ${ee()}
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
        <p class="muted">제작: ${F.creator}</p>
        ${se()?'<p class="success"><button type="button" class="link-btn" data-action="admin">관리자 패널 열기</button></p>':""}
      </div>
      ${ne()}
      <button type="button" class="admin-secret-trigger" id="admin-secret" title="">
        ${F.subtitle}
      </button>
    </div>
  `),Q(S);const e=S.querySelector("#admin-secret");e==null||e.addEventListener("click",()=>{if(se()){E("admin");return}const t=window.prompt("관리자 비밀번호를 입력하세요");t!=null&&(It(t)?(window.alert("관리자 모드가 켜졌습니다."),E("admin")):window.alert("비밀번호가 올바르지 않습니다."))})}function En(){var u,h,g,x,m,s;if(!se()){E("help");return}const e=W(),t=Dt(),n=e.standardScale,r=e.artsScale,i=t.configured?`Firebase 연결됨 (${t.projectId})`:"Firebase 미설정 — src/firebase-config.js 에 키를 넣어주세요";S.innerHTML=K(`
    <div class="stack-screen admin-screen">
      <h2 class="screen-title">관리자 모드</h2>
      <p class="screen-desc">기기 ID: ${qe()}</p>
      <p class="muted admin-note">${i}</p>
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
          ${n.map((f,a)=>`
            <label>${f.letter}
              <input type="number" data-scale="std" data-i="${a}" data-letter="${f.letter}" min="0" max="100" value="${f.min}" />
            </label>
          `).join("")}
        </div>
        <h4>예체능 등급 기준 (점 이상)</h4>
        <div class="admin-scale" id="adm-arts">
          ${r.map((f,a)=>`
            <label>${f.letter}
              <input type="number" data-scale="arts" data-i="${a}" data-letter="${f.letter}" min="0" max="100" value="${f.min}" />
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
        ${ne()}
      </div>
      ${te("ADMIN")}
    </div>
  `),Q(S);let l=Re();async function c(){const f=S.querySelector("#adm-logs"),a=S.querySelector("#adm-log-count");f&&(f.innerHTML='<p class="muted">불러오는 중…</p>');const k=await Nt();if(l=k.logs,a&&(a.textContent=`(${l.length} · ${k.source}${k.error?" · 오류":""})`),!!f){if(l.length===0){f.innerHTML='<p class="muted">아직 기록이 없습니다.</p>';return}f.innerHTML=l.slice(0,120).map(M=>`
      <article class="admin-log-item">
        <header>${ge(M.account||M.deviceId||"")} · ${ge(M.type)} · ${An(M.at)}</header>
        <p>${ge(M.message||"")}</p>
        ${M.detail?`<pre>${ge(typeof M.detail=="string"?M.detail:JSON.stringify(M.detail,null,0))}</pre>`:""}
      </article>
    `).join("")}}c(),(u=S.querySelector("#adm-refresh-logs"))==null||u.addEventListener("click",()=>c()),(h=S.querySelector("#adm-save"))==null||h.addEventListener("click",async()=>{var L,v;const f=Number((L=S.querySelector("#adm-unlock"))==null?void 0:L.value),a=!!((v=S.querySelector("#adm-free-games"))!=null&&v.checked),k=[...S.querySelectorAll('[data-scale="std"]')].map($=>({letter:$.dataset.letter,min:Number($.value)||0})),M=[...S.querySelectorAll('[data-scale="arts"]')].map($=>({letter:$.dataset.letter,min:Number($.value)||0}));Pt({restUnlockUses:Number.isFinite(f)&&f>0?f:8,freeGames:a,standardScale:k,artsScale:M}),window.alert(D()?"설정을 저장했고 클라우드에도 올렸습니다.":"설정을 이 기기에 저장했습니다. (Firebase 미설정)"),E("admin")}),(g=S.querySelector("#adm-feedback-save"))==null||g.addEventListener("click",()=>{var a,k;const f=(k=(a=S.querySelector("#adm-feedback"))==null?void 0:a.value)==null?void 0:k.trim();if(!f){window.alert("내용을 입력하세요.");return}X({type:"game_feedback",message:f}),window.alert("피드백을 저장했습니다."),E("admin")}),(x=S.querySelector("#adm-export"))==null||x.addEventListener("click",async()=>{const f=Rt(l);try{await navigator.clipboard.writeText(f),window.alert("기록이 클립보드에 복사되었습니다.")}catch{window.prompt("아래 내용을 복사하세요",f)}}),(m=S.querySelector("#adm-clear-logs"))==null||m.addEventListener("click",async()=>{window.confirm("로컬+클라우드 활동 기록을 비울까요?")&&(await qt({cloud:!0}),E("admin"))}),(s=S.querySelector("#adm-logout"))==null||s.addEventListener("click",()=>{Ct(),window.alert("관리자 모드가 종료되었습니다."),E("main")})}function ge(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function An(e){try{const t=new Date(e);return`${t.getMonth()+1}/${t.getDate()} ${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`}catch{return e}}function In(){const e=ue(),t=et();S.innerHTML=K(`
    <div class="stack-screen grade-screen">
      ${ee()}
      <h2 class="screen-title">자신의 학년을 선택하세요</h2>
      <div class="grade-list">
        <button type="button" class="grade-btn grade-1" data-action="pick-grade-1">1학년</button>
        <button type="button" class="grade-btn grade-2" data-action="pick-grade-2">2학년</button>
        <button type="button" class="grade-btn grade-3" data-action="pick-grade-3">3학년</button>
      </div>
      ${e?'<button type="button" class="rest-btn" data-action="rest">휴식 · 미니게임</button>':`<p class="unlock-hint">${t}</p>`}
      ${ne()}
      ${te(F.subtitle)}
    </div>
  `),Q(S)}function Cn({grade:e}){if(!e||!oe(e)){E("grade");return}j=e;const t=oe(e),n=_t(e);S.innerHTML=K(`
    <div class="stack-screen ${ot(e)}">
      ${ee()}
      <h2 class="screen-title">${t.label} 과목 선택</h2>
      ${t.note?`<p class="screen-note">${t.note}</p>`:""}
      ${lt()}
      <div class="subject-list">
        ${n.map(r=>`<button type="button" class="subject-btn" data-action="pick-subject-${encodeURIComponent(r)}">${r}</button>`).join("")}
      </div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="grade">학년 선택으로</button>
        ${ne()}
      </div>
      ${te(F.subtitle)}
    </div>
  `),Q(S),st(S)}function Pn({grade:e,subject:t,semester:n}){if(!e||!t||!n){E("subject",{grade:j});return}j=e,Y=t,G=n;const r=oe(e),i=tt(e,t),l=Kt(e,t,n),c=Ge(e,t,n),u={},h=i.length>1?`<div class="semester-tabs">
          ${i.map(s=>`<button type="button" class="semester-tab ${s===n?"active":""}" data-action="pick-semester-${s}">${Ge(e,t,s)}</button>`).join("")}
        </div>`:`<p class="semester-only">${c}</p>`;S.innerHTML=K(`
    <div class="stack-screen calculator-screen ${ot(e)}">
      ${ee("globe globe-small")}
      <h2 class="screen-title subject-title">${t}</h2>
      <p class="screen-desc">${r.label} · ${c}${je(t)?" · 예체능(A·B·C)":" · 일반(A~E)"}</p>
      ${lt(t)}
      ${h}
      <form id="calc-form" class="calc-form"></form>
      <button type="submit" form="calc-form" class="btn-calc">계산하기</button>
      <div id="calc-result" class="calc-result hidden"></div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="subject">과목 선택으로</button>
        ${ne()}
      </div>
      ${te(F.subtitle)}
    </div>
  `);const g=S.querySelector("#calc-form");let x="";for(const s of l){if(s.kind!==x){x=s.kind;const a=document.createElement("h3");a.className="section-heading",a.textContent=s.kind==="exam"?"지필고사":"수행평가",g.appendChild(a)}const f=document.createElement("label");f.className="score-row",f.innerHTML=`
      <span>${s.label} <em>${s.weight}%</em></span>
      <input type="number" min="0" max="100" step="0.1" inputmode="decimal"
        name="${s.key}" placeholder="점수" />
    `,g.appendChild(f)}const m=S.querySelector("#calc-result");g.addEventListener("submit",s=>{var T,N;s.preventDefault();const f=new FormData(g);for(const P of l)u[P.key]=f.get(P.key);const a=nn(l,u,t);if(!a){m.classList.remove("hidden"),m.innerHTML='<p class="warn">최소 1개 이상 점수를 입력하세요.</p>';return}const k=Bt(t);X({type:"calc",message:`${e}학년 ${t} (${c}) → ${a.rounded}점 ${re(a.letter)}`,detail:{grade:e,subject:t,semester:n,scores:u,rounded:a.rounded,letter:a.letter,average:a.average}});let M="";((T=a.needed)==null?void 0:T.needed)!=null?M=`<p>상위 <strong>${re(a.needed.targetLetter)}</strong>까지 남은 항목 평균 <strong>${a.needed.needed}점</strong> 이상</p>`:(N=a.needed)!=null&&N.message&&(M=`<p>${a.needed.message}</p>`);let L="";if(a.projection.remainingCount>0&&a.letter===a.projLetter){const P=re(a.letter);let q="";a.confirmMin&&(a.confirmMin.minScore<=0?q=`<p>남은 항목이 <strong>0점</strong>이어도 ${P} 유지</p>`:q=`<p>남은 항목 각각 최소 <strong>${a.confirmMin.minScore}점</strong> 이상이면 ${P} 유지</p>`),L=`
        <p><strong>${P} 확정입니다.</strong></p>
        ${q}
      `}let v="";Qt(a)&&(v=`<p class="cheer-msg">${Vt()}</p>`);let $="";k.justUnlocked?$=`<p class="success">서로 다른 과목 ${ke}개 달성! 학년 선택에서 휴식 미니게임 이용</p>`:ue()?$='<p class="success">휴식 미니게임 이용 가능 (학년 선택 화면)</p>':k.isNew?$=`<p class="muted">${et()}</p>`:$='<p class="muted">이미 계산한 과목입니다. 다른 과목을 계산하면 해금에 가까워져요.</p>',m.classList.remove("hidden"),m.innerHTML=`
      <h3>${t} 결과</h3>
      <p>총점(반올림) <strong>${a.rounded}점</strong> · <strong>${re(a.letter)}</strong></p>
      <p class="muted">가중 평균 ${a.average.toFixed(1)}점</p>
      <p>남은 항목 100점 시 <strong>${a.projRounded}점</strong> · <strong>${re(a.projLetter)}</strong></p>
      ${L}
      ${v}
      ${M}
      ${$}
    `}),Q(S),st(S)}function Tn(){if(!ue()){E("grade");return}S.innerHTML=K(`
    <div class="stack-screen">
      ${ee()}
      <h2 class="screen-title">휴식 · 미니게임</h2>
      <div class="game-list">
        <button type="button" class="game-card" data-action="game-dart">다트 게임</button>
        <button type="button" class="game-card" data-action="game-cricket">크리켓 게임</button>
        <button type="button" class="game-card" data-action="game-breakout">벽돌깨기</button>
        <button type="button" class="game-card" data-action="game-race">레이싱 vs AI</button>
      </div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="grade">학년 선택으로</button>
        ${ne()}
      </div>
      ${te(F.subtitle)}
    </div>
  `),Q(S)}function pe(e){if(!ue()){E("grade");return}X({type:"game_open",message:`미니게임 시작: ${e}${Se()?" (관리자)":""}`,detail:{type:e}}),S.innerHTML=K('<div id="game-root"></div>',"game-screen");const t=S.querySelector("#game-root"),n={onBack:()=>E("rest"),onMain:()=>{j=null,Y=null,G=null,E("main")}};e==="dart"?z=cn(t,n)??null:e==="cricket"?z=fn(t,n)??null:e==="breakout"?z=hn(t,n)??null:e==="race"&&(z=vn(t,n)??null)}
