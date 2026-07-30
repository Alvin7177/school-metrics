(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=a(n);fetch(n.href,s)}})();const ke=8,H={title:"SCHOOL METRICS",subtitle:"철저한 내신관리 시스템",footer:"for 해연중 학생들",creator:"2210 박민호"},le={apiKey:"AIzaSyB7YJBfYa9zGnUvLD4DFgR5KLiNKuluHJM",authDomain:"school-metrics-fdee3.firebaseapp.com",projectId:"school-metrics-fdee3",storageBucket:"school-metrics-fdee3.firebasestorage.app",messagingSenderId:"378255554733",appId:"1:378255554733:web:01b06dca5b5307860eae24",measurementId:"G-0BL416S3QD"};function R(){return!!(le.apiKey&&le.projectId&&le.appId)}const wt="https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js",Z="https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js",ee="https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";let ie=null,fe=null,re=null,me=null;async function Qe(){return R()?ie||(me||(me=(async()=>{const{initializeApp:e,getApps:t}=await import(wt);return ie=t().length?t()[0]:e(le),ie})().catch(e=>(console.warn("[firebase] app init failed",e),me=null,ie=null,null))),me):null}async function de(){if(!R())return null;if(fe)return fe;const e=await Qe();if(!e)return null;const{getFirestore:t}=await import(Z);return fe=t(e),fe}async function ye(){if(!R())return null;if(re)return re;const e=await Qe();if(!e)return null;const{getAuth:t,setPersistence:a,browserLocalPersistence:r}=await import(ee);re=t(e);try{await a(re,r)}catch(n){console.warn("[firebase] auth persistence",n)}return re}function Ze(e){const t=(e==null?void 0:e.code)||"";return{"auth/email-already-in-use":"이미 가입된 계정입니다. 로그인하세요.","auth/invalid-email":"이메일 형식이 올바르지 않습니다.","auth/weak-password":"비밀번호는 6자 이상이어야 합니다.","auth/user-not-found":"가입되지 않은 계정입니다. 먼저 회원가입하세요.","auth/wrong-password":"비밀번호가 틀렸습니다.","auth/invalid-credential":"이메일 또는 비밀번호가 올바르지 않습니다.","auth/too-many-requests":"시도가 너무 많습니다. 잠시 후 다시 시도하세요.","auth/network-request-failed":"네트워크 오류입니다. 연결을 확인하세요.","auth/operation-not-allowed":"Firebase에서 이메일/비밀번호 로그인을 켜야 합니다."}[t]||(e==null?void 0:e.message)||"인증에 실패했습니다."}async function kt(e,t){const a=await ye();if(!a)throw new Error("Firebase가 설정되지 않았습니다.");const{createUserWithEmailAndPassword:r,sendEmailVerification:n}=await import(ee);try{const s=await r(a,e,t);try{await n(s.user)}catch(c){console.warn("[firebase] verification mail",c)}return s.user}catch(s){throw s.friendlyMessage=Ze(s),s}}async function yt(e,t){const a=await ye();if(!a)throw new Error("Firebase가 설정되지 않았습니다.");const{signInWithEmailAndPassword:r}=await import(ee);try{return(await r(a,e,t)).user}catch(n){throw n.friendlyMessage=Ze(n),n}}async function We(){const e=await ye();if(!e)return;const{signOut:t}=await import(ee);await t(e)}async function Ce(){const e=await ye();if(!e)return null;if(e.currentUser)return e.currentUser;const{onAuthStateChanged:t}=await import(ee);return new Promise(a=>{const r=t(e,n=>{r(),a(n||null)})})}async function vt(){const e=await Ce();return e?(await e.reload(),e):null}async function St(){const e=await Ce();if(!e)throw new Error("로그인된 사용자가 없습니다.");const{sendEmailVerification:t}=await import(ee);await t(e)}async function $t(e){const t=await de();if(!t)return null;const{collection:a,addDoc:r,serverTimestamp:n}=await import(Z),s={...e};return Object.keys(s).forEach(d=>{s[d]===void 0&&delete s[d]}),(await r(a(t,"activityLogs"),{...s,createdAt:n()})).id}async function Lt(e=200){const t=await de();if(!t)return[];const{collection:a,query:r,orderBy:n,limit:s,getDocs:c}=await import(Z),d=r(a(t,"activityLogs"),n("at","desc"),s(e));return(await c(d)).docs.map(h=>({id:h.id,...h.data()}))}async function Mt(){const e=await de();if(!e)return 0;const{collection:t,getDocs:a,deleteDoc:r,query:n,limit:s}=await import(Z);let c=0;for(;;){const d=await a(n(t(e,"activityLogs"),s(100)));if(d.empty||(await Promise.all(d.docs.map(w=>r(w.ref))),c+=d.size,d.size<100))break}return c}async function xt(e){const t=await de();if(!t)return!1;const{doc:a,setDoc:r,serverTimestamp:n}=await import(Z),s={...e};return Object.keys(s).forEach(c=>{s[c]===void 0&&delete s[c]}),await r(a(t,"adminSettings","global"),{...s,updatedAt:n()}),!0}async function Et(){const e=await de();if(!e)return null;const{doc:t,getDoc:a}=await import(Z),r=await a(t(e,"adminSettings","global"));if(!r.exists())return null;const n=r.data();return delete n.updatedAt,n}const qe="schoolMetricsUserAccount",At=new Set(["2024","2025","2026"]),It=/^(\d{4})(\d{4})@haeyeon\.ms\.kr$/i,Ge=6;function ve(e){const a=String(e||"").trim().toLowerCase().match(It);if(!a)return{ok:!1,error:"해연중 계정(@haeyeon.ms.kr) 형식으로 입력하세요."};const r=a[1],n=a[2],s=n[0],c=n[1],d=Number(n.slice(2));return At.has(r)?["1","2","3"].includes(s)?"12345678".includes(c)?!Number.isInteger(d)||d<1||d>35?{ok:!1,error:"번호는 01~35만 가능합니다."}:{ok:!0,account:`${r}${n}@haeyeon.ms.kr`,year:r,studentId:n,grade:Number(s),classNo:Number(c),number:d}:{ok:!1,error:"학번 둘째 자리(반)는 1~8만 가능합니다."}:{ok:!1,error:"학번 첫 자리(학년)는 1·2·3만 가능합니다."}:{ok:!1,error:"년도는 2024, 2025, 2026만 가능합니다."}}function et(e){return String(e||"").length<Ge?{ok:!1,error:`비밀번호는 ${Ge}자 이상이어야 합니다.`}:{ok:!0}}function Ct(e,t={}){const a={account:e.account,year:e.year,studentId:e.studentId,grade:e.grade,classNo:e.classNo,number:e.number,loggedInAt:new Date().toISOString(),viaPassword:!0,...t};return localStorage.setItem(qe,JSON.stringify(a)),a}function tt(){try{const e=localStorage.getItem(qe);if(!e)return null;const t=JSON.parse(e);return t!=null&&t.account&&ve(t.account).ok?t:null}catch{return null}}function nt(){return!!tt()}function at(){var e;return((e=tt())==null?void 0:e.account)||null}async function Pe(e,{requireVerified:t=!0}={}){const a=e==null?void 0:e.email;if(!a)return await We().catch(()=>{}),{ok:!1,error:"계정 이메일을 가져오지 못했습니다."};const r=ve(a);return r.ok?t&&!e.emailVerified?{ok:!1,needVerify:!0,error:"학교 메일함에서 인증 메일의 링크를 눌러주세요. (스팸함도 확인)",account:r.account}:{ok:!0,user:Ct(r,{uid:e.uid||null,emailVerified:!!e.emailVerified})}:(await We().catch(()=>{}),r)}async function qt(e,t){if(!R())return{ok:!1,error:"Firebase 설정이 없습니다."};const a=ve(e);if(!a.ok)return a;const r=et(t);if(!r.ok)return r;try{const n=await kt(a.account,t);return{ok:!1,needVerify:!0,registered:!0,account:a.account,error:"가입되었습니다. 학교 메일함의 인증 링크를 누른 뒤 로그인하세요.",uid:n==null?void 0:n.uid}}catch(n){return{ok:!1,error:n.friendlyMessage||n.message||"회원가입 실패"}}}async function Pt(e,t){if(!R())return{ok:!1,error:"Firebase 설정이 없습니다."};const a=ve(e);if(!a.ok)return a;const r=et(t);if(!r.ok)return r;try{const n=await yt(a.account,t);return await n.reload(),Pe(n,{requireVerified:!0})}catch(n){return{ok:!1,error:n.friendlyMessage||n.message||"로그인 실패"}}}async function Tt(){try{const e=await vt();return e?Pe(e,{requireVerified:!0}):{ok:!1,error:"먼저 로그인(비밀번호)을 다시 시도하세요."}}catch(e){return{ok:!1,error:e.message||"인증 상태 확인 실패"}}}async function Nt(){try{return await St(),{ok:!0,message:"인증 메일을 다시 보냈습니다. 메일함을 확인하세요."}}catch(e){return{ok:!1,error:e.message||"인증 메일 재전송 실패"}}}async function Dt(){if(!R())return be(),null;try{const e=await Ce();if(!e)return be(),null;await e.reload();const t=await Pe(e,{requireVerified:!0});return t.ok?t.user:(be(),null)}catch(e){return console.warn("[auth] restore",e),be(),null}}function be(){localStorage.removeItem(qe)}const Rt="73357442",Te="schoolMetricsAdminSession",Ne="schoolMetricsAdminSettings",we="schoolMetricsActivityLog",Ke="schoolMetricsDeviceId",Ot=500,Q={restUnlockUses:ke,freeGames:!0,standardScale:[{letter:"A",min:90},{letter:"B",min:80},{letter:"C",min:70},{letter:"D",min:60},{letter:"E",min:0}],artsScale:[{letter:"A",min:80},{letter:"B",min:60},{letter:"C",min:0}]};function De(e,t){try{const a=localStorage.getItem(e);return a?JSON.parse(a):t}catch{return t}}function Re(e,t){localStorage.setItem(e,JSON.stringify(t))}function Oe(){let e=localStorage.getItem(Ke);return e||(e=`dev-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,localStorage.setItem(Ke,e)),e}function oe(){return sessionStorage.getItem(Te)==="1"}function Bt(e){return String(e)===Rt?(sessionStorage.setItem(Te,"1"),z({type:"admin_login",message:"관리자 로그인"}),!0):!1}function Ut(){sessionStorage.removeItem(Te)}function G(){const e=De(Ne,{});return{...Q,...e,standardScale:e.standardScale||Q.standardScale,artsScale:e.artsScale||Q.artsScale}}function jt(e){const t={...G(),...e};return Re(Ne,t),z({type:"admin_settings",message:"관리자 설정 변경",detail:e}),R()&&xt(t).catch(a=>console.warn("[firebase] settings save",a)),t}async function Ft(){if(!R())return G();try{const e=await Et();if(e&&typeof e=="object"){const t={...Q,...e,standardScale:e.standardScale||Q.standardScale,artsScale:e.artsScale||Q.artsScale};return Re(Ne,t),t}}catch(e){console.warn("[firebase] settings load",e)}return G()}function Se(){return Number(G().restUnlockUses)||ke}function $e(){return oe()&&G().freeGames!==!1}function z(e){const t={id:`${Date.now()}-${Math.random().toString(36).slice(2,7)}`,at:new Date().toISOString(),deviceId:Oe(),...e,account:e.account||at()||"guest"},a=De(we,[]);return a.unshift(t),Re(we,a.slice(0,Ot)),R()&&$t(t).catch(r=>console.warn("[firebase] log",r)),t}function Be(){return De(we,[])}async function Ht(){const e=Be();if(!R())return{source:"local",logs:e};try{const t=await Lt(300),a=new Map;for(const n of[...t,...e]){const s=n.id||`${n.at}-${n.deviceId}-${n.type}-${n.message}`;a.has(s)||a.set(s,n)}return{source:"firebase",logs:[...a.values()].sort((n,s)=>String(s.at).localeCompare(String(n.at)))}}catch(t){return console.warn("[firebase] fetch logs",t),{source:"local-fallback",logs:e,error:String(t.message||t)}}}async function _t({cloud:e=!0}={}){if(localStorage.removeItem(we),e&&R())try{await Mt()}catch(t){console.warn("[firebase] clear",t)}z({type:"admin_clear_logs",message:"활동 로그 초기화"})}function Wt(e=Be()){return JSON.stringify({exportedAt:new Date().toISOString(),deviceId:Oe(),firebase:R(),settings:G(),logs:e},null,2)}function Gt(){return{configured:R(),projectId:le.projectId||""}}const Ue="schoolMetricsUniqueSubjects";function it(){try{const e=localStorage.getItem(Ue),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch{return[]}}function Kt(e){localStorage.setItem(Ue,JSON.stringify(e))}function Vt(e){const t=Se(),a=it(),r=!a.includes(e);return r&&(a.push(e),Kt(a)),{isNew:r,uniqueCount:a.length,justUnlocked:r&&a.length>=t}}function je(){return it().length}function ue(){return $e()?!0:je()>=Se()}function Jt(){return Math.max(0,Se()-je())}function Yt(){$e()||localStorage.removeItem(Ue)}function rt(){const e=Se(),t=je(),a=Jt();return $e()?"관리자 모드: 미니게임 자유 이용":ue()?`서로 다른 과목 ${t}개 달성! 휴식 미니게임 이용 가능`:`서로 다른 과목 ${a}개 더 계산하면 해금 (${t}/${e})`}const xe=["희망은 좋은 것이다. 어쩌면 가장 좋은 것일지도. — 《쇼생크 탈출》","해야 한다, 아니면 안 된다. 그 중간은 없다. — 《스타워즈》","과거는 과거일 뿐이야. 배울 수만 있다면. — 《라이온 킹》","가장 어두운 시간은 해가 뜨기 직전이다. — 《어벤져스: 엔드게임》","세상에서 중요한 건 내가 누구냐가 아니라, 내가 뭘 하느냐다. — 《배트맨: 다크나이트》","우리에게 주어진 시간을 어떻게 쓸지만 결정하면 된다. — 《반지의 제왕》","아주 작은 존재도 미래를 바꿀 수 있다. — 《반지의 제왕》","자유는 아무 대가 없이 오지 않는다. — 《브레이브하트》","지금 이 순간을 잡아라. — 《데드 포엇 소사이어티》","무엇이든 할 수 있다. — 《쿵푸 판다》","그냥 계속 헤엄쳐. — 《니모를 찾아서》","모든 걸 시도해 봐. — 《주토피아》","두려움을 없애는 방법은 그것과 마주하는 것이다. — 《인사이드 아웃》","뜻이 있는 곳에 길이 있다. — 《아바타》","비가 그친 뒤에는 반드시 맑은 하늘이 온다. — 《날씨의 아이》","나는 이 세계를 이해할 수 없어. 그래도 계속한다. — 《록키》","시련이 없었다면 챔피언도 없다. — 《록키》","인생은 수레바퀴와 같아. 항상 앞으로 나아가야 한다. — 《니모를 찾아서》","이겨야 한다. 어떻게든. — 《친구》","꿈은 거짓말이 아니다. 반드시 이루어질 내일이다. — 《드림하이》","포기하면 그 순간 게임 끝이야, 인생도 마찬가지다. — 《슬램덩크》","죽을 때 후회 없는 인생을 살아라. — 《원피스》","약한 것은 죄가 아니다. 약한 채로 있으면 안 될 뿐. — 《귀멸의 칼날》","막을 때까지 싸워라. — 《진격의 거인》","노력은 배신하지 않는다. — 《하이큐!!》","패배는 패배하지 않는 것보다 낫다. — 《하이큐!!》","시선을 돌리지 마. 앞만 봐. — 《센과 치히로의 행방불명》","살아있는 한 힘을 내라. — 《하울의 움직이는 성》","바람이 분다. 견뎌야 한다. — 《바람의 나라》","상대는 나 자신이다. — 《초속 5센티미터》","포기하지 말 것. 내일이 있으니. — 《드래곤볼》","사람은 누구나 다시 태어날 수 있다. — 《바람의 나라》","아는 것이 힘이다. — 프랜시스 베이컨","천 리 길도 한 걸음부터. — 노자","배우고 또 배우면 어찌 기쁘지 아니하랴. — 공자","백번 듣는 것보다 한 번 보는 것이 낫다. — 공자","세 사람이 길을 가면 반드시 나의 스승이 있다. — 공자","하늘은 큰 뜻을 품은 자에게 먼저 고생을 시킨다. — 맹자","독서는 마음의 양식이다. — 키케로","하늘은 스스로 돕는 자를 돕는다. — 소포클레스","그대가 갈망하는 것을 따르라. — 랄프 왔도 에머슨","겁쟁이는 죽기 전에 여러 번 죽는다. 용감한 자는 한 번만 죽는다. — 셰익스피어","열정 없이는 위대한 것은 이루어지지 않는다. — 게오르크 빌헬름 프리드리히 헤겔","나는 나의 운명을 사랑한다. — 프리드리히 니체","오늘 할 일을 내일로 미루지 마라. — 벤자민 프랭클린","천재는 1%의 영감과 99%의 땀이다. — 토마스 에디슨","실패는 성공의 어머니이다. — 토마스 에디슨","시간은 금이다. — 벤자민 프랭클린","어리석은 자는 경험에서 아무것도 배우지 않는다. — 벤자민 프랭클린","실용적인 것이 가장 시적인 것이다. — 벤자민 프랭클린","깊은 생각 없는 독서는 낮잠과 같다. — 프랜시스 베이컨","인생은 속도가 아니라 방향이다. — 에이브러햄 링컨","성공은 최종적인 것이 아니며, 실패는 치명적인 것이 아니다. — 윈스턴 처칠","가장 위대한 영광은 넘어지지 않는 것이 아니라, 넘어질 때마다 일어서는 것이다. — 넬슨 만델라","용기는 두려움의 부재가 아니라, 두려움에도 행동하는 것이다. — 넬슨 만델라","네가 할 수 있다고 믿든 못 한다고 믿든, 네 말이 맞다. — 헨리 포드","성공의 비결은 시작하는 것이다. — 마크 트웨인","행운은 준비된 자에게 찾아온다. — 루이 파스퇴르","한계란 대부분 마음속에 있는 환상일 뿐이다. — 무하마드 알리","나는 세계 챔피언이다. 내가 그렇다고 말하기 전부터. — 무하마드 알리","항상 갈망하고, 우직하게 나아가라. — 스티브 잡스","당신의 시간은 제한되어 있다. 다른 사람의 인생을 살며 낭비하지 마라. — 스티브 잡스","오늘 나는 죽었다면 무엇을 후회하겠는가. — 스티브 잡스","죽고자 하면 살 것이요, 살고자 하면 죽을 것이니라. — 이순신","한 번도 실수한 적 없는 사람은 새로운 것을 시도한 적이 없는 사람이다. — 알버트 아인슈타인","네가 정말 소중히 여기는 것에 시간을 써라. — 《어린 왕자》","꽃을 단 한 송이라도 내가 직접 가꾸면, 내 세계에 엇비슷한 시간이 흐른다. — 《어린 왕자》","세상에서 가장 강한 사람은 스스로를 이기는 사람이다. — 무라카미 하루키","빛을 보고자 한다면 어둠을 견뎌야 한다. — 무라카미 하루키","사람은 마음먹은 것은 다 이룬다. — 《바보》","고통 없이는 얻는 것도 없다. — 라틴 격언","로마는 하루아침에 이루어지지 않았다. — 속담","연습이 완벽을 만든다. — 속담","배움에는 왕도가 없다. — 유클리드","작은 일에 충실하라. 그곳에 네 힘이 있다. — 루드야드 키플링","가장 큰 위험은 위험을 감수하지 않는 것이다. — 마크 주커버그","인생은 짧고, 예술은 길다. — 히포크라테스","삶을 살아가는 가장 좋은 복수는 성공하는 것이다. — 프랭크 시나트라","피할 수 없으면 즐겨라. — 로버트 엘리엇","포기하지 않는 한, 늦었다고 생각할 때가 가장 빠른 때다. — 속담","꾸준함은 재능을 이긴다. — 속담","반복은 지루하지만, 반복 없는 실력은 환상이다. — 속담","오늘의 노력이 내일의 실력이 된다. — 속담","지금이 가장 빠른 시작이다. — 속담","목표 없는 공부는 방향 잃은 배와 같다. — 속담","모르는 것을 아는 것이 배움의 시작이다. — 속담","실력은 하루아침에 생기지 않는다. — 속담","쉬는 것도 실력이다. 번아웃을 조심하자. — 속담","비교하지 말고, 어제의 나와 겨루자. — 속담","이해가 안 되면 다시 보면 된다. 반복이 답이다. — 속담","시험은 결과일 뿐, 과정이 실력이다. — 속담","1%씩 매일 오르면 37배가 된다. — 속담","모르는 건 부끄러운 게 아니다. 묻지 않는 게 문제다. — 속담","오답 노트 한 장이 교과서 열 페이지보다 강하다. — 속담","할 수 있다고 믿는 순간, 절반은 온 것이다. — 속담","오늘 공부한 만큼, 내일은 덜 불안하다. — 속담"],Ve="schoolMetricsQuoteIndex";function zt(){let e=Number(localStorage.getItem(Ve)||0);const t=xe[e%xe.length];return localStorage.setItem(Ve,String((e+1)%xe.length)),t}const Xt={1:{label:"1학년",note:"1학년은 2학기부터 내신 성적이 반영됩니다.",subjects:{국어:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"나만의 노트(나노)",weight:15,kind:"perf"}]}}},수학:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"기본도형 탐구 프로젝트",weight:20,kind:"perf"},{label:"평면·입체 도형 탐구",weight:20,kind:"perf"}]}}},사회:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"사회화 자서전 만들기",weight:20,kind:"perf"},{label:"모의 선거",weight:20,kind:"perf"}]}}},과학:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"실험 보고서 작성",weight:20,kind:"perf"},{label:"달의 위상 변화 관찰",weight:20,kind:"perf"}]}}},영어:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"희망 직업 소개",weight:20,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]}}},음악:{semesters:{2:{label:"2학기",items:[{label:"우쿨렐레 연주",weight:50,kind:"perf"},{label:"작곡가 탐구 활동",weight:50,kind:"perf"}]}}},미술:{semesters:{2:{label:"2학기",items:[{label:"스텐실",weight:50,kind:"perf"},{label:"문자도",weight:50,kind:"perf"}]}}},체육:{semesters:{2:{label:"2학기",items:[{label:"경기형 스포츠(축구)",weight:50,kind:"perf"},{label:"기록 도전형(달리기)",weight:50,kind:"perf"}]}}},정보:{semesters:{2:{label:"2학기",items:[{label:"AI 활용",weight:50,kind:"perf"},{label:"디지털 문화 표현",weight:50,kind:"perf"}]}}},"진로와 직업":{semesters:{2:{label:"2학기",items:[{label:"창업 프로젝트",weight:50,kind:"perf"},{label:"진로 디자인",weight:50,kind:"perf"}]}}},기술가정:{semesters:{2:{label:"2학기",items:[{label:"과학·미래기술 보고서",weight:35,kind:"perf"},{label:"에너지 신문 제작",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]}}}}},2:{label:"2학년",subjects:{국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"발표와 듣기",weight:15,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"복합양식 자료를 활용한 글 작성",weight:15,kind:"perf"}]}}},수학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"일차방정식·일차부등식",weight:20,kind:"perf"},{label:"연립일차방정식·일차함수",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"삼각형·사각형의 성질",weight:20,kind:"perf"},{label:"도형의 닮음·피타고라스",weight:20,kind:"perf"}]}}},역사:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"고대 문명 지도 만들기",weight:20,kind:"perf"},{label:"고대사 신문 만들기",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"서양 고대 문화유산 소개",weight:20,kind:"perf"},{label:"유럽 여행 소개 글쓰기",weight:20,kind:"perf"}]}}},과학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"밀도 측정",weight:10,kind:"perf"},{label:"지권 층상구조 모형 제작",weight:10,kind:"perf"},{label:"주기율표 탐구",weight:10,kind:"perf"},{label:"광합성 탐구",weight:10,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"소리의 성질 탐구",weight:10,kind:"perf"},{label:"인체 프로젝트",weight:20,kind:"perf"},{label:"전류,전압,저항 사이의 관계 탐구",weight:10,kind:"perf"}]}}},영어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"},{label:"발명품 소개",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"지역 축제 홍보",weight:20,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]}}},음악:{semesters:{1:{label:"1학기",items:[{label:"우쿨렐레 연주",weight:50,kind:"perf"},{label:"텅드럼 연주",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"펜비트 연주",weight:50,kind:"perf"},{label:"리코더 연주",weight:50,kind:"perf"}]}}},미술:{semesters:{1:{label:"1학기",items:[{label:"세밀화",weight:50,kind:"perf"},{label:"음식 모형 만들기",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"점묘화",weight:50,kind:"perf"},{label:"서양미술사 보고서",weight:50,kind:"perf"}]}}},체육:{semesters:{1:{label:"1학기",items:[{label:"경기형 스포츠(킨볼)",weight:60,kind:"perf"},{label:"도전형(제자리멀리뛰기)",weight:40,kind:"perf"}]},2:{label:"2학기",items:[{label:"경기형 스포츠(배드민턴)",weight:60,kind:"perf"},{label:"건강관리(줄넘기)",weight:40,kind:"perf"}]}}},도덕:{semesters:{1:{label:"1학기",items:[{label:"도덕적 인물 지폐 제작",weight:50,kind:"perf"},{label:"우정 네 컷 만들기",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"정보 카드 뉴스 제작",weight:50,kind:"perf"},{label:"인권 모니터링 제안서",weight:50,kind:"perf"}]}}},중국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 기말고사",weight:40,kind:"exam"},{label:"한어병음 작성",weight:30,kind:"perf"},{label:"중국어 말하기",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 기말고사",weight:40,kind:"exam"},{label:"하루 일과표 만들기",weight:30,kind:"perf"},{label:"중국어 말하기",weight:30,kind:"perf"}]}}},"금융과 미래":{semesters:{2:{label:"2학기",items:[{label:"투자 성향 검사",weight:50,kind:"perf"},{label:"투자 포트폴리오 구성",weight:50,kind:"perf"}]}}},기술가정:{semesters:{1:{label:"1학기",items:[{label:"효과적 의사소통 프로젝트",weight:35,kind:"perf"},{label:"제조 기술 프로젝트",weight:35,kind:"perf"},{label:"자기주도노트 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"균형 잡힌 식단 계획",weight:35,kind:"perf"},{label:"친환경 의복 생활",weight:35,kind:"perf"},{label:"자기주도노트 작성",weight:30,kind:"perf"}]}}}}},3:{label:"3학년",note:"3학년 2학기에는 기말고사가 없습니다.",subjects:{국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"논설문 쓰기",weight:15,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"한 학기 한 권 읽기",weight:30,kind:"perf"},{label:"문장의 짜임 고려해서 자신감 있게 발표",weight:30,kind:"perf"}]}}},사회:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"국가 기관 탐구로 권력 분립 이해",weight:20,kind:"perf"},{label:"국민 경제 지표와 국제 거래 이해",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"인구·도시 문제 탐구",weight:30,kind:"perf"},{label:"농업 산업화·세계화",weight:30,kind:"perf"}]}}},역사:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"고려 정치 변천",weight:20,kind:"perf"},{label:"고려의 문화 및 조선 통치 체제 탐구",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"조선 왕 가상 인터뷰",weight:30,kind:"perf"},{label:"양 난의 이해 및 영정조 정책 탐구",weight:30,kind:"perf"}]}}},도덕:{semesters:{1:{label:"1학기",items:[{label:"1학기 기말고사",weight:40,kind:"exam"},{label:"폭력 예방 논술문 작성",weight:30,kind:"perf"},{label:"사회 정의 실현 논술문 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"환경 보호 제안서",weight:30,kind:"perf"},{label:"실패 이력서 소개",weight:30,kind:"perf"}]}}},수학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"인수분해를 이용한 수의 성질 탐구",weight:20,kind:"perf"},{label:"이차함수 그래프",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"삼각비 개념 보고서",weight:30,kind:"perf"},{label:"원의 성질 문제해결",weight:30,kind:"perf"}]}}},과학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"기상 현상 실험",weight:20,kind:"perf"},{label:"화학 반응의 규칙 탐구",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"세포분열 관찰 실험",weight:30,kind:"perf"},{label:"물체 운동 분석",weight:30,kind:"perf"}]}}},영어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:15,kind:"perf"},{label:"급식 메뉴 프로젝트",weight:15,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"영어 듣기",weight:20,kind:"perf"},{label:"영어독서",weight:20,kind:"perf"},{label:"통계 자료 활용 프로젝트",weight:20,kind:"perf"}]}}},음악:{semesters:{1:{label:"1학기",items:[{label:"칼림바 연주",weight:50,kind:"perf"},{label:"전자드럼 연주",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"노래 부르기",weight:50,kind:"perf"},{label:"디자인사 연구보고서",weight:50,kind:"perf"}]}}},미술:{semesters:{1:{label:"1학기",items:[{label:"포트레이트 드로잉",weight:50,kind:"perf"},{label:"비주얼 리터러시",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"오마주",weight:50,kind:"perf"},{label:"디자인 조사 보고서",weight:50,kind:"perf"}]}}},체육:{semesters:{1:{label:"1학기",items:[{label:"전통 표현(티니클링)",weight:40,kind:"perf"},{label:"플로어볼",weight:60,kind:"perf"}]},2:{label:"2학기",items:[{label:"건강·체력 관리(타바타)",weight:40,kind:"perf"},{label:"배구",weight:60,kind:"perf"}]}}},기술가정:{semesters:{1:{label:"1학기",items:[{label:"생애 설계",weight:35,kind:"perf"},{label:"수송기술 제작",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"스마트폰 앱 만들기",weight:35,kind:"perf"},{label:"적정 기술 사례 조사",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]}}}}}};function ce(e){return Xt[e]??null}function Qt(e){const t=ce(e);return t?Object.keys(t.subjects):[]}function Fe(e,t){var a;return((a=ce(e))==null?void 0:a.subjects[t])??null}function st(e,t){const a=Fe(e,t);return a?Object.keys(a.semesters).map(Number).sort((r,n)=>r-n):[]}function Zt(e,t,a){var n;const r=Fe(e,t);return((n=r==null?void 0:r.semesters[a])==null?void 0:n.items)??[]}function Je(e,t,a){var n;const r=Fe(e,t);return((n=r==null?void 0:r.semesters[a])==null?void 0:n.label)??`${a}학기`}function en(e,t,a,r){return`${e}-${t}-${a}-${r}`}function tn(e,t,a){return Zt(e,t,a).map((n,s)=>({key:en(e,t,a,s),subject:t,semester:a,label:n.label,weight:n.weight,kind:n.kind}))}function lt(e,t){let a=0,r=0;for(const n of e){const s=t[n.key];if(s===""||s===null||s===void 0)continue;const c=Number(s);Number.isNaN(c)||(a+=n.weight,r+=c*n.weight)}return a===0?null:r/a}function nn(e,t){const a={},r=[];for(const s of e){const c=t[s.key];if(c===""||c===null||c===void 0){r.push(s);continue}const d=Number(c);if(Number.isNaN(d)){r.push(s);continue}a[s.key]=d}const n={...a};for(const s of r)n[s.key]=100;return{average:lt(e,n),remainingCount:r.length}}const an=["음악","미술","체육"],rn=[{letter:"A",min:90},{letter:"B",min:80},{letter:"C",min:70},{letter:"D",min:60},{letter:"E",min:0}],sn=[{letter:"A",min:80},{letter:"B",min:60},{letter:"C",min:0}];function ot(e){return e.map((t,a,r)=>{const n=r[a-1],s=t.min===0?`${t.letter} (${(n==null?void 0:n.min)??60}점 미만)`:`${t.letter} (${t.min}점 이상)`;return{letter:t.letter,min:Number(t.min)||0,label:s}})}function ct(){const e=G().standardScale;return ot(e!=null&&e.length?e:rn)}function dt(){const e=G().artsScale;return ot(e!=null&&e.length?e:sn)}function He(e){return an.includes(e)}function Le(e){return e==null||Number.isNaN(e)?null:Math.round(e)}function _e(e){return He(e)?dt():ct()}function Ie(e,t){const a=Le(e);if(a===null)return"-";const r=_e(t);for(const n of r)if(a>=n.min)return n.letter;return r[r.length-1].letter}function se(e){return`${e}등급`}const Ye=["조금만 더 올리면 된다. 할 수 있어!","상위 등급이 코앞이다. 끝까지 달려보자!","지금의 노력이 등급을 바꾼다. 포기하지 마!","아직 끝나지 않았어. 충분히 올릴 수 있어!","남은 항목이 기회다. 집중해서 마무리하자!","한 걸음만 더 가면 등급이 달라진다. 파이팅!","가능성은 아직 살아 있다. 믿고 가보자!","오늘의 한 문제가 등급을 바꿀 수도 있어!","목표 등급까지 거의 다 왔다. 조금만 더!","실력은 거짓말하지 않는다. 계속 밀어붙여!"];function ln(e){return e.projection.remainingCount>0&&e.letter!==e.projLetter}function on(){const e=Math.floor(Math.random()*Ye.length);return Ye[e]}function ut(e=null){const t=e?He(e):!1,a=e?t?`${e}은(는) 예체능 과목 (A·B·C)`:`${e}은(는) 일반 과목 (A·B·C·D·E)`:"과목 유형에 따라 등급 기준이 다릅니다.",r=ct(),n=dt();return`
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
            ${r.map(s=>`<tr><td>${s.letter}</td><td>${s.label.replace(/^[A-E]\s*/,"")}</td></tr>`).join("")}
          </tbody>
        </table>
        <table class="criteria-table">
          <thead>
            <tr><th colspan="2">예체능 (음악·미술·체육)</th></tr>
          </thead>
          <tbody>
            ${n.map(s=>`<tr><td>${s.letter}</td><td>${s.label.replace(/^[A-E]\s*/,"")}</td></tr>`).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `}function ft(e){const t=e.querySelector("[data-toggle='criteria']"),a=e.querySelector("#criteria-panel");!t||!a||t.addEventListener("click",()=>{const r=a.classList.toggle("hidden");t.setAttribute("aria-expanded",String(!r)),t.textContent=r?"▶ 등급 기준표 확인":"▼ 등급 기준표 닫기"})}function cn(e,t,a,r){if(a===null)return null;const n=Le(a),s=Ie(n,r),c=_e(r),d=c.findIndex(M=>M.letter===s);if(d<=0)return{targetLetter:s,needed:null,message:"이미 최고 등급입니다."};const w=c[d-1],h=w.min,L=e.filter(M=>{const f=t[M.key];return f===""||f===null||f===void 0||Number.isNaN(Number(f))});if(L.length===0)return{targetLetter:w.letter,needed:null,message:"모든 항목이 입력되었습니다."};let b=0,l=0,m=0;for(const M of e){const f=t[M.key];if(f===""||f===null||f===void 0||Number.isNaN(Number(f))){m+=M.weight;continue}b+=M.weight,l+=Number(f)*M.weight}if(m===0)return null;const i=b+m,y=(h*i-l)/m,x=Math.max(0,Math.min(100,y));return{targetLetter:w.letter,needed:Math.ceil(x*10)/10,remainingCount:L.length,message:null}}function dn(e,t,a,r){const s=_e(r).find(i=>i.letter===a);if(!s)return null;let c=0,d=0,w=0,h=0;for(const i of e){const y=t[i.key];if(y===""||y===null||y===void 0||Number.isNaN(Number(y))){w+=i.weight,h+=1;continue}d+=i.weight,c+=Number(y)*i.weight}if(w===0)return null;const L=d+w,l=((s.min-.5)*L-c)/w;return{minScore:Math.ceil(Math.max(0,Math.min(100,l))*10)/10,remainingCount:h}}function un(e){const t=Le(e);return{raw:e,rounded:t,display:`${t}점`}}function fn(e,t,a){const r=lt(e,t);if(r===null)return null;const{rounded:n}=un(r),s=Ie(n,a),c=nn(e,t),d=Le(c.average),w=cn(e,t,r,a),h=dn(e,t,s,a);return{average:r,rounded:n,letter:s,projection:c,projRounded:d,projLetter:Ie(d,a),needed:w,confirmMin:h}}function te(e="globe"){return`
    <svg class="${e}" viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="48" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.35"/>
      <ellipse cx="60" cy="60" rx="48" ry="16" fill="none" stroke="currentColor" stroke-width="1"/>
      <ellipse cx="60" cy="60" rx="16" ry="48" fill="none" stroke="currentColor" stroke-width="1"/>
      <ellipse cx="60" cy="60" rx="34" ry="48" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.7"/>
      <line x1="12" y1="60" x2="108" y2="60" stroke="currentColor" stroke-width="0.8"/>
      <line x1="60" y1="12" x2="60" y2="108" stroke="currentColor" stroke-width="0.8"/>
    </svg>
  `}function mn(){return'<img class="title-bg" src="./title-bg.png" alt="" aria-hidden="true" />'}function bn(){return'<img class="go-bg" src="./go-bg.png" alt="" aria-hidden="true" />'}function mt(e){return`grade-theme-${e}`}function K(e,t=""){return`<div class="phone-screen ${t}">${e}</div>`}function ne(e){return`<p class="screen-footer">${e}</p>`}function ae(e="main"){return`<button type="button" class="link-btn" data-action="${e}">메인화면으로</button>`}const bt=[20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5],ge=8;function gn(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function hn(e,t,a){var r,n;(r=e.querySelector('[data-nav="back"]'))==null||r.addEventListener("click",t),(n=e.querySelector('[data-nav="main"]'))==null||n.addEventListener("click",a)}function pn(e,t){const a=Math.hypot(e,t);if(a>1)return{points:0,label:"보드 밖"};if(a<=.07)return{points:50,label:"더블 불 · 50"};if(a<=.14)return{points:25,label:"싱글 불 · 25"};let r=Math.atan2(e,-t);r<0&&(r+=Math.PI*2);const n=Math.floor((r+Math.PI/20)%(Math.PI*2)/(Math.PI/10)),s=bt[n];return a>=.9?{points:s*2,label:`더블 ${s} · ${s*2}`}:a>=.52&&a<=.62?{points:s*3,label:`트리플 ${s} · ${s*3}`}:{points:s,label:`싱글 ${s} · ${s}`}}function Ee(e,t,a){const r=t/2,n=t/2,s=t*.42;e.clearRect(0,0,t,t),e.fillStyle="#1a1a1a",e.beginPath(),e.arc(r,n,s*1.08,0,Math.PI*2),e.fill();for(let c=0;c<20;c++){const d=-Math.PI/2-Math.PI/20+c*Math.PI/10,w=d+Math.PI/10,h=c%2===0;e.beginPath(),e.moveTo(r,n),e.arc(r,n,s*.9,d,w),e.closePath(),e.fillStyle=h?"#111":"#ece6d8",e.fill(),e.beginPath(),e.moveTo(r,n),e.arc(r,n,s*.52,d,w),e.closePath(),e.fillStyle=h?"#1c1c1c":"#f5f0e6",e.fill(),e.beginPath(),e.arc(r,n,s,d,w),e.arc(r,n,s*.9,w,d,!0),e.closePath(),e.fillStyle=c%2===0?"#c4122f":"#0a7a3c",e.fill(),e.beginPath(),e.arc(r,n,s*.62,d,w),e.arc(r,n,s*.52,w,d,!0),e.closePath(),e.fillStyle=c%2===0?"#c4122f":"#0a7a3c",e.fill()}e.strokeStyle="rgba(180,180,180,0.55)",e.lineWidth=1;for(let c=0;c<20;c++){const d=-Math.PI/2-Math.PI/20+c*Math.PI/10;e.beginPath(),e.moveTo(r,n),e.lineTo(r+Math.cos(d)*s,n+Math.sin(d)*s),e.stroke()}[.9,.62,.52,.14,.07].forEach(c=>{e.beginPath(),e.arc(r,n,s*c,0,Math.PI*2),e.stroke()}),e.beginPath(),e.arc(r,n,s*.14,0,Math.PI*2),e.fillStyle="#0a7a3c",e.fill(),e.beginPath(),e.arc(r,n,s*.07,0,Math.PI*2),e.fillStyle="#c4122f",e.fill(),e.fillStyle="#fff",e.font=`bold ${Math.max(10,t*.045)}px sans-serif`,e.textAlign="center",e.textBaseline="middle";for(let c=0;c<20;c++){const d=-Math.PI/2+c*Math.PI/10,w=r+Math.cos(d)*s*1.14,h=n+Math.sin(d)*s*1.14;e.fillText(String(bt[c]),w,h)}for(const c of a)e.beginPath(),e.arc(r+c.nx*s,n+c.ny*s,4,0,Math.PI*2),e.fillStyle="#fff700",e.fill(),e.strokeStyle="#000",e.stroke()}function wn(e,{onBack:t,onMain:a}){let r=0,n=ge,s="vertical",c=.5,d=.5,w=1,h=1,L=0,b=0;const l=[],m=1.35;e.innerHTML=`
    <div class="game-panel">
      <h2 class="game-title">다트 게임</h2>
      <p class="game-desc">바가 가운데 올 때 탭/스페이스로 멈추세요. (세로 → 가로)</p>
      <div class="dart-stats">
        <span id="dart-score">점수: 0</span>
        <span id="dart-throws">남은 횟수: ${ge}</span>
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
      ${gn()}
    </div>
  `;const i=e.querySelector("#dart-canvas"),y=i.getContext("2d"),x=e.querySelector("#dart-score"),M=e.querySelector("#dart-throws"),f=e.querySelector("#dart-feedback"),S=e.querySelector("#dart-stop"),P=e.querySelector("#dart-retry"),T=e.querySelector("#aim-v"),q=e.querySelector("#aim-h"),N=e.querySelector(".aim-bar-v"),O=e.querySelector(".aim-bar-h");function D(){const o=Math.min(300,e.clientWidth||300);i.width=o,i.height=o,Ee(y,o,l)}function j(){T.style.top=`${c*100}%`,q.style.left=`${d*100}%`,N.classList.toggle("active",s==="vertical"),O.classList.toggle("active",s==="horizontal")}function B(o){b||(b=o);const u=Math.min(.05,(o-b)/1e3);b=o,s==="vertical"?(c+=w*m*u,c>=1&&(c=1,w=-1),c<=0&&(c=0,w=1)):s==="horizontal"&&(d+=h*m*u,d>=1&&(d=1,h=-1),d<=0&&(d=0,h=1)),j(),L=requestAnimationFrame(B)}function F(){const o=(c-.5)*2.05,u=(d-.5)*2.05,p=pn(u,o);if(l.push({nx:u,ny:o}),r+=p.points,n-=1,x.textContent=`점수: ${r}`,M.textContent=`남은 횟수: ${n}`,Ee(y,i.width,l),f.textContent=p.label,n<=0){s="done",S.classList.add("hidden"),P.classList.remove("hidden"),f.textContent=`게임 종료! 최종 ${r}점`;return}s="vertical",c=Math.random(),d=Math.random(),f.textContent="세로 바를 가운데에 맞춰 멈추세요!"}function v(o){var u;if((u=o==null?void 0:o.preventDefault)==null||u.call(o),s==="vertical"){s="horizontal",f.textContent="가로 바를 가운데에 맞춰 멈추세요!";return}s==="horizontal"&&(s="result",F())}function A(o){(o.code==="Space"||o.key===" ")&&(o.preventDefault(),v(o))}function g(){r=0,n=ge,s="vertical",l.length=0,c=.2,d=.2,x.textContent="점수: 0",M.textContent=`남은 횟수: ${ge}`,f.textContent="세로 바를 가운데에 맞춰 멈추세요!",S.classList.remove("hidden"),P.classList.add("hidden"),Ee(y,i.width,l)}return D(),j(),L=requestAnimationFrame(B),S.addEventListener("click",v),S.addEventListener("touchstart",v,{passive:!1}),P.addEventListener("click",g),window.addEventListener("keydown",A),window.addEventListener("resize",D),hn(e,t,a),()=>{cancelAnimationFrame(L),window.removeEventListener("keydown",A),window.removeEventListener("resize",D)}}const V=12;function kn(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function yn(e,t,a){var r,n;(r=e.querySelector('[data-nav="back"]'))==null||r.addEventListener("click",t),(n=e.querySelector('[data-nav="main"]'))==null||n.addEventListener("click",a)}function vn(e,{onBack:t,onMain:a}){let r=0,n=0,s=!1,c=!0,d=.08,w=.55,h=0,L=0,b=0,l=!1;e.innerHTML=`
    <div class="game-panel">
      <h2 class="game-title">크리켓 게임</h2>
      <p class="game-desc">공이 타격존(노란 선)에 올 때 탭/스페이스로 스윙!</p>
      <div class="cricket-stats">
        <span id="cricket-runs">득점: 0</span>
        <span id="cricket-balls">볼: 0 / ${V}</span>
      </div>
      <canvas id="cricket-canvas" class="game-canvas cricket-canvas" width="320" height="420"></canvas>
      <button type="button" class="btn-go" id="cricket-swing">SWING!</button>
      <button type="button" class="btn-secondary hidden" id="cricket-retry">다시하기</button>
      <p class="game-feedback" id="cricket-feedback">공이 다가옵니다…</p>
      ${kn()}
    </div>
  `;const m=e.querySelector("#cricket-canvas"),i=m.getContext("2d"),y=e.querySelector("#cricket-runs"),x=e.querySelector("#cricket-balls"),M=e.querySelector("#cricket-feedback"),f=e.querySelector("#cricket-swing"),S=e.querySelector("#cricket-retry"),P=.72,T=.09;function q(){const v=Math.min(320,Math.max(260,e.clientWidth-16||300));m.width=v,m.height=Math.round(v*1.3)}function N(){const v=m.width,A=m.height;i.clearRect(0,0,v,A),i.fillStyle="#6ec8ff",i.fillRect(0,0,v,A*.22),i.fillStyle="#3d8c3a",i.fillRect(0,A*.18,v,A*.12);for(let I=0;I<18;I++)i.fillStyle=`hsl(${I*47%360} 70% 45%)`,i.beginPath(),i.arc(10+I*(v/17),A*.22,6,0,Math.PI*2),i.fill();i.fillStyle="#4caf50",i.fillRect(0,A*.28,v,A*.72);const g=v*.28,o=(v-g)/2,u=A*.3,p=A*.58;i.fillStyle="#c4a574",i.beginPath(),i.moveTo(o+g*.15,u),i.lineTo(o+g*.85,u),i.lineTo(o+g,u+p),i.lineTo(o,u+p),i.closePath(),i.fill();const $=u+p*P;if(i.strokeStyle="#fff41a",i.lineWidth=3,i.setLineDash([6,4]),i.beginPath(),i.moveTo(o-8,$),i.lineTo(o+g+8,$),i.stroke(),i.setLineDash([]),i.fillStyle="#8d6e63",i.beginPath(),i.ellipse(v/2,u+18,10,14,0,0,Math.PI*2),i.fill(),i.fillStyle="#66bb6a",i.beginPath(),i.ellipse(v/2,u+p-10,16,22,0,0,Math.PI*2),i.fill(),i.save(),i.translate(v/2+14,u+p-18),i.rotate(h>0?-.9:-.2),i.fillStyle="#f5f5f5",i.fillRect(-4,-28,8,36),i.restore(),!c&&!l){const I=u+p*d,C=v/2+Math.sin(d*6)*4,Me=7+d*4;i.beginPath(),i.arc(C,I,Me,0,Math.PI*2),i.fillStyle="#ef5350",i.fill(),i.strokeStyle="#fff",i.lineWidth=1.5,i.stroke()}h>0&&(i.fillStyle="rgba(255,244,26,0.15)",i.fillRect(0,$-20,v,40))}function O(){if(n>=V){l=!0,f.disabled=!0,f.classList.add("hidden"),S.classList.remove("hidden"),M.textContent=`경기 종료! 총 ${r}점`;return}c=!1,s=!1,d=.05,w=.48+Math.random()*.35,M.textContent="타이밍에 맞춰 스윙!"}function D(v){var u;if((u=v==null?void 0:v.preventDefault)==null||u.call(v),l||s||c)return;s=!0,h=.25,n+=1,x.textContent=`볼: ${n} / ${V}`;const A=Math.abs(d-P);let g=0,o="헛스윙!";A<=T*.25?(g=6,o="식스! +6"):A<=T*.5?(g=4,o="포! +4"):A<=T*.75?(g=2,o="투런! +2"):A<=T&&(g=1,o="싱글! +1"),r+=g,y.textContent=`득점: ${r}`,M.textContent=o,c=!0,setTimeout(()=>{l||O(),n>=V&&(l=!0,f.disabled=!0,f.classList.add("hidden"),S.classList.remove("hidden"),M.textContent=`경기 종료! 총 ${r}점`)},650)}function j(v){b||(b=v);const A=Math.min(.05,(v-b)/1e3);b=v,!c&&!l&&(d+=w*A,d>1.05&&(c=!0,s=!0,n+=1,x.textContent=`볼: ${n} / ${V}`,M.textContent="놓침!",setTimeout(()=>{s=!1,n>=V?(l=!0,f.disabled=!0,f.classList.add("hidden"),S.classList.remove("hidden"),M.textContent=`경기 종료! 총 ${r}점`):O()},500))),h>0&&(h-=A),N(),L=requestAnimationFrame(j)}function B(){r=0,n=0,l=!1,s=!1,h=0,y.textContent="득점: 0",x.textContent=`볼: 0 / ${V}`,f.disabled=!1,f.classList.remove("hidden"),S.classList.add("hidden"),O()}function F(v){(v.code==="Space"||v.key===" ")&&(v.preventDefault(),D(v))}return q(),O(),L=requestAnimationFrame(j),f.addEventListener("click",D),f.addEventListener("touchstart",D,{passive:!1}),m.addEventListener("pointerdown",D),S.addEventListener("click",B),window.addEventListener("keydown",F),window.addEventListener("resize",q),yn(e,t,a),()=>{cancelAnimationFrame(L),window.removeEventListener("keydown",F),window.removeEventListener("resize",q)}}function Sn(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function $n(e,t,a){var r,n;(r=e.querySelector('[data-nav="back"]'))==null||r.addEventListener("click",t),(n=e.querySelector('[data-nav="main"]'))==null||n.addEventListener("click",a)}const Ln=["#42a5f5","#ef5350","#ffee58","#66bb6a"],Mn=4,Ae=7;function xn(e,{onBack:t,onMain:a}){let r=0,n=3,s=!1,c=0,d=0;const w={left:!1,right:!1};let h=320,L=420,b={x:0,y:0,w:70,h:12},l={x:0,y:0,r:6,vx:0,vy:0},m=[];e.innerHTML=`
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
      ${Sn()}
    </div>
  `;const i=e.querySelector("#bo-canvas"),y=i.getContext("2d"),x=e.querySelector("#bo-lives"),M=e.querySelector("#bo-score"),f=e.querySelector("#bo-feedback"),S=e.querySelector("#bo-start");function P(){h=Math.min(320,Math.max(260,e.clientWidth-16||300)),L=Math.round(h*1.3),i.width=h,i.height=L,b.y=L-36,b.w=h*.22}function T(){m=[];const o=4,u=56,p=(h-o*(Ae+1))/Ae,$=16;for(let I=0;I<Mn;I++)for(let C=0;C<Ae;C++)m.push({x:o+C*(p+o),y:u+I*($+o),w:p,h:$,color:Ln[I],alive:!0})}function q(){b.x=(h-b.w)/2,l.x=h/2,l.y=b.y-20;const o=-Math.PI/3+Math.random()*(Math.PI/3),u=Math.min(h,L)*.45;l.vx=Math.sin(o)*u,l.vy=-Math.abs(Math.cos(o)*u)}function N(){x.textContent=`생명: ${"●".repeat(n)}${"○".repeat(3-n)}`,M.textContent=`점수: ${String(r).padStart(5,"0")}`}function O(){y.fillStyle="#1a1030",y.fillRect(0,0,h,L);for(const o of m)o.alive&&(y.fillStyle=o.color,D(y,o.x,o.y,o.w,o.h,4),y.fill());y.fillStyle="#fff",D(y,b.x,b.y,b.w,b.h,6),y.fill(),y.beginPath(),y.arc(l.x,l.y,l.r,0,Math.PI*2),y.fillStyle="#fff",y.fill()}function D(o,u,p,$,I,C){o.beginPath(),o.moveTo(u+C,p),o.arcTo(u+$,p,u+$,p+I,C),o.arcTo(u+$,p+I,u,p+I,C),o.arcTo(u,p+I,u,p,C),o.arcTo(u,p,u+$,p,C),o.closePath()}function j(o){d||(d=o);const u=Math.min(.033,(o-d)/1e3);if(d=o,s){const p=h*1.1*u;if(w.left&&(b.x-=p),w.right&&(b.x+=p),b.x=Math.max(0,Math.min(h-b.w,b.x)),l.x+=l.vx*u,l.y+=l.vy*u,l.x<l.r&&(l.x=l.r,l.vx*=-1),l.x>h-l.r&&(l.x=h-l.r,l.vx*=-1),l.y<l.r&&(l.y=l.r,l.vy*=-1),l.vy>0&&l.y+l.r>=b.y&&l.y-l.r<=b.y+b.h&&l.x>=b.x&&l.x<=b.x+b.w){l.y=b.y-l.r;const $=(l.x-(b.x+b.w/2))/(b.w/2),I=Math.hypot(l.vx,l.vy)*1.02,C=$*1.1;l.vx=Math.sin(C)*I,l.vy=-Math.abs(Math.cos(C)*I)}for(const $ of m)if($.alive&&l.x+l.r>$.x&&l.x-l.r<$.x+$.w&&l.y+l.r>$.y&&l.y-l.r<$.y+$.h){$.alive=!1,r+=10,N();const I=l.x+l.r-$.x,C=$.x+$.w-(l.x-l.r),Me=l.y+l.r-$.y,gt=$.y+$.h-(l.y-l.r),ht=Math.min(I,C),pt=Math.min(Me,gt);ht<pt?l.vx*=-1:l.vy*=-1;break}m.every($=>!$.alive)&&(s=!1,f.textContent=`클리어! 점수 ${r}`),l.y>L+20&&(n-=1,N(),n<=0?(s=!1,f.textContent=`게임 오버 · ${r}점`):(q(),f.textContent="생명 -1! 계속…"))}O(),c=requestAnimationFrame(j)}function B(){r=0,n=3,s=!0,T(),q(),N(),f.textContent="화이팅!"}function F(o){const u=i.getBoundingClientRect(),p=(o-u.left)/u.width*h;b.x=Math.max(0,Math.min(h-b.w,p-b.w/2))}function v(o){var p;o.preventDefault();const u=((p=o.touches)==null?void 0:p[0])||o;F(u.clientX)}function A(o){(o.key==="ArrowLeft"||o.key==="a"||o.key==="A")&&(w.left=!0),(o.key==="ArrowRight"||o.key==="d"||o.key==="D")&&(w.right=!0)}function g(o){(o.key==="ArrowLeft"||o.key==="a"||o.key==="A")&&(w.left=!1),(o.key==="ArrowRight"||o.key==="d"||o.key==="D")&&(w.right=!1)}return P(),T(),q(),N(),O(),c=requestAnimationFrame(j),S.addEventListener("click",B),i.addEventListener("pointerdown",v),i.addEventListener("pointermove",o=>{(o.buttons||o.pressure>0)&&v(o)}),i.addEventListener("touchstart",v,{passive:!1}),i.addEventListener("touchmove",v,{passive:!1}),window.addEventListener("keydown",A),window.addEventListener("keyup",g),window.addEventListener("resize",P),$n(e,t,a),()=>{cancelAnimationFrame(c),window.removeEventListener("keydown",A),window.removeEventListener("keyup",g),window.removeEventListener("resize",P)}}const _=3;function En(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function An(e,t,a){var r,n;(r=e.querySelector('[data-nav="back"]'))==null||r.addEventListener("click",t),(n=e.querySelector('[data-nav="main"]'))==null||n.addEventListener("click",a)}function In(e,{onBack:t,onMain:a}){let r=320,n=420,s=0,c=0,d=!1,w=!1;const h={left:!1,right:!1};let L=0;const b={lane:0,progress:0,lap:0,color:"#4dffd4"},l={lane:.2,progress:.02,lap:0,color:"#ff4fd8",target:0};e.innerHTML=`
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
      ${En()}
    </div>
  `;const m=e.querySelector("#race-canvas"),i=m.getContext("2d"),y=e.querySelector("#race-you"),x=e.querySelector("#race-ai"),M=e.querySelector("#race-feedback"),f=e.querySelector("#race-start");function S(g,o=0){const u=r/2,p=n/2,$=r*.36-o,I=n*.38-o,C=g*Math.PI*2-Math.PI/2;return{x:u+Math.cos(C)*$,y:p+Math.sin(C)*I,a:C}}function P(){r=Math.min(320,Math.max(260,e.clientWidth-16||300)),n=Math.round(r*1.3),m.width=r,m.height=n}function T(){y.textContent=`YOU ${Math.min(b.lap,_)}/${_}`,x.textContent=`AI ${Math.min(l.lap,_)}/${_}`}function q(g,o=14){const u=S(g.progress,8+g.lane*14),p=S((g.progress+.01)%1,8+g.lane*14),$=Math.atan2(p.y-u.y,p.x-u.x);i.save(),i.translate(u.x,u.y),i.rotate($),i.fillStyle=g.color,i.fillRect(-o,-o*.45,o*2,o*.9),i.fillStyle="#111",i.fillRect(o*.2,-o*.3,o*.5,o*.6),i.restore()}function N(){i.fillStyle="#1b5e20",i.fillRect(0,0,r,n),i.beginPath();for(let u=0;u<=64;u++){const p=S(u/64,-18);u===0?i.moveTo(p.x,p.y):i.lineTo(p.x,p.y)}i.closePath(),i.fillStyle="#37474f",i.fill(),i.beginPath();for(let u=0;u<=64;u++){const p=S(u/64,28);u===0?i.moveTo(p.x,p.y):i.lineTo(p.x,p.y)}i.closePath(),i.fillStyle="#2e7d32",i.fill(),i.strokeStyle="rgba(255,255,255,0.35)",i.setLineDash([8,10]),i.lineWidth=2,i.beginPath();for(let u=0;u<=64;u++){const p=S(u/64,6);u===0?i.moveTo(p.x,p.y):i.lineTo(p.x,p.y)}i.stroke(),i.setLineDash([]);const g=S(0,-16),o=S(0,26);i.strokeStyle="#fff",i.lineWidth=4,i.beginPath(),i.moveTo(g.x,g.y),i.lineTo(o.x,o.y),i.stroke(),q(l,12),q(b,13)}function O(g,o,u){const p=g.progress;g.progress+=o*u,g.progress>=1&&(g.progress-=1,g.lap+=1),p>.9&&g.progress<.1&&g.lap}function D(g){c||(c=g);const o=Math.min(.05,(g-c)/1e3);if(c=g,d&&!w){let u=L;h.left&&(u-=1),h.right&&(u+=1),u=Math.max(-1,Math.min(1,u)),b.lane+=u*2.2*o,b.lane=Math.max(-1,Math.min(1,b.lane)),l.target+=(Math.random()-.5)*1.5*o,l.target=Math.max(-.8,Math.min(.8,l.target)),l.lane+=(l.target-l.lane)*2*o;const p=.18+(1-Math.abs(b.lane)*.08)*.04,$=.175+Math.sin(g/1100)*.012,I=b.lap,C=l.lap;O(b,p,o),O(l,$,o),(b.lap!==I||l.lap!==C)&&T(),b.lap>=_?(w=!0,d=!1,M.textContent="승리! 당신이 먼저 3바퀴!"):l.lap>=_&&(w=!0,d=!1,M.textContent="패배… AI가 먼저 들어왔습니다.")}N(),s=requestAnimationFrame(D)}function j(){b.lane=0,b.progress=0,b.lap=0,l.lane=.25,l.progress=.01,l.lap=0,l.target=0,w=!1,d=!0,T(),M.textContent="달려라!"}function B(g){var $;g.preventDefault();const o=(($=g.touches)==null?void 0:$[0])||g,u=m.getBoundingClientRect();L=((o.clientX-u.left)/u.width-.5)*2}function F(){L=0}function v(g){(g.key==="ArrowLeft"||g.key==="a"||g.key==="A")&&(h.left=!0),(g.key==="ArrowRight"||g.key==="d"||g.key==="D")&&(h.right=!0)}function A(g){(g.key==="ArrowLeft"||g.key==="a"||g.key==="A")&&(h.left=!1),(g.key==="ArrowRight"||g.key==="d"||g.key==="D")&&(h.right=!1)}return P(),T(),N(),s=requestAnimationFrame(D),f.addEventListener("click",j),m.addEventListener("pointerdown",B),m.addEventListener("pointermove",g=>{g.buttons&&B(g)}),m.addEventListener("pointerup",F),m.addEventListener("pointerleave",F),m.addEventListener("touchstart",B,{passive:!1}),m.addEventListener("touchmove",B,{passive:!1}),m.addEventListener("touchend",F),window.addEventListener("keydown",v),window.addEventListener("keyup",A),window.addEventListener("resize",P),An(e,t,a),()=>{cancelAnimationFrame(s),window.removeEventListener("keydown",v),window.removeEventListener("keyup",A),window.removeEventListener("resize",P)}}const k=document.getElementById("app");let U=null,J=null,W=null,Y=null,ze=!1;const Xe=new Set(["rest","game-dart","game-cricket","game-breakout","game-race","admin"]),Cn={login:Tn,main:Nn,help:Dn,grade:Bn,subject:Un,calculator:jn,rest:Fn,admin:Rn,"game-dart":()=>pe("dart"),"game-cricket":()=>pe("cricket"),"game-breakout":()=>pe("breakout"),"game-race":()=>pe("race")};qn();function qn(){Promise.all([Ft(),Dt()]).finally(()=>{E(nt()?"main":"login")})}function E(e,t={}){Y&&(Y(),Y=null),ze&&!Xe.has(e)&&Yt(),e!=="login"&&!nt()&&(e="login",t={});const a=Cn[e];a&&(k.innerHTML="",a(t),ze=Xe.has(e),window.scrollTo(0,0))}function X(e){e.querySelectorAll("[data-action]").forEach(t=>{t.addEventListener("click",()=>Pn(t.dataset.action))})}function Pn(e){if(e==="main"){U=null,J=null,W=null,E("main");return}if(e==="grade"){J=null,W=null,E("grade");return}if(e==="help"&&E("help"),e==="rest"&&E("rest"),e==="admin"){oe()&&E("admin");return}if(e==="subject"&&E("subject",{grade:U}),e==="game-dart"&&E("game-dart"),e==="game-cricket"&&E("game-cricket"),e==="game-breakout"&&E("game-breakout"),e==="game-race"&&E("game-race"),e.startsWith("pick-grade-")){U=Number(e.replace("pick-grade-","")),J=null,W=null,E("subject",{grade:U});return}if(e.startsWith("pick-subject-")){const t=decodeURIComponent(e.replace("pick-subject-",""));J=t;const a=st(U,t);W=(a.length===1,a[0]),E("calculator",{grade:U,subject:t,semester:W});return}e.startsWith("pick-semester-")&&(W=Number(e.replace("pick-semester-","")),E("calculator",{grade:U,subject:J,semester:W}))}function Tn(){let e="login";const t=()=>{var x,M;const a=e==="register";k.innerHTML=K(`
      <div class="stack-screen login-screen">
        ${te("globe globe-large")}
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
        ${ne(H.footer)}
      </div>
    `);const r=k.querySelector("#login-error"),n=k.querySelector("#login-ok"),s=k.querySelector("#verify-actions"),c=k.querySelector("#login-email"),d=k.querySelector("#login-password"),w=k.querySelector("#login-password2"),h=k.querySelector("#login-submit"),L=f=>{n.classList.add("hidden"),r.textContent=f,r.classList.remove("hidden")},b=f=>{r.classList.add("hidden"),n.textContent=f,n.classList.remove("hidden")},l=f=>{h.disabled=f};k.querySelectorAll("[data-mode]").forEach(f=>{f.addEventListener("click",()=>{e=f.dataset.mode,t()})});const m=f=>{z({type:"user_login",message:`로그인: ${f.account}`,account:f.account}),E("main")},i=f=>{b(f.error),s.classList.remove("hidden")},y=async()=>{r.classList.add("hidden"),n.classList.add("hidden"),s.classList.add("hidden"),l(!0);try{if(e==="register"){if(d.value!==((w==null?void 0:w.value)||"")){L("비밀번호 확인이 일치하지 않습니다.");return}const S=await qt(c.value,d.value);if(S.needVerify){i(S);return}if(!S.ok){L(S.error);return}m(S.user);return}const f=await Pt(c.value,d.value);if(f.needVerify){i(f);return}if(!f.ok){L(f.error);return}m(f.user)}finally{l(!1)}};h.addEventListener("click",y),[c,d,w].filter(Boolean).forEach(f=>{f.addEventListener("keydown",S=>{S.key==="Enter"&&y()})}),(x=k.querySelector("#verify-refresh"))==null||x.addEventListener("click",async()=>{l(!0);const f=await Tt();if(l(!1),f.needVerify){i(f);return}if(!f.ok){L(f.error);return}m(f.user)}),(M=k.querySelector("#verify-resend"))==null||M.addEventListener("click",async()=>{const f=await Nt();if(!f.ok){L(f.error);return}b(f.message),s.classList.remove("hidden")})};t()}function Nn(){const e=zt();k.innerHTML=K(`
    <div class="main-screen">
      <button type="button" class="help-btn" data-action="help" aria-label="앱 정보">?</button>
      <div class="main-header">
        <div class="title-block">
          ${mn()}
          <h1 class="app-title">${H.title}</h1>
        </div>
        <p class="app-subtitle">${H.subtitle}</p>
        <p class="main-quote">"${e}"</p>
      </div>
      <div class="main-body">
        <p class="login-user muted">${at()||""}</p>
        <button type="button" class="go-btn" data-action="grade" aria-label="시작">
          ${bn()}
          <span class="go-text">GO</span>
        </button>
      </div>
      <p class="main-footer">${H.footer}</p>
    </div>
  `),X(k)}function Dn(){k.innerHTML=K(`
    <div class="stack-screen">
      ${te()}
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
        <p class="muted">제작: ${H.creator}</p>
        ${oe()?'<p class="success"><button type="button" class="link-btn" data-action="admin">관리자 패널 열기</button></p>':""}
      </div>
      ${ae()}
      <button type="button" class="admin-secret-trigger" id="admin-secret" title="">
        ${H.subtitle}
      </button>
    </div>
  `),X(k);const e=k.querySelector("#admin-secret");e==null||e.addEventListener("click",()=>{if(oe()){E("admin");return}const t=window.prompt("관리자 비밀번호를 입력하세요");t!=null&&(Bt(t)?(window.alert("관리자 모드가 켜졌습니다."),E("admin")):window.alert("비밀번호가 올바르지 않습니다."))})}function Rn(){var d,w,h,L,b,l;if(!oe()){E("help");return}const e=G(),t=Gt(),a=e.standardScale,r=e.artsScale,n=t.configured?`Firebase 연결됨 (${t.projectId})`:"Firebase 미설정 — src/firebase-config.js 에 키를 넣어주세요";k.innerHTML=K(`
    <div class="stack-screen admin-screen">
      <h2 class="screen-title">관리자 모드</h2>
      <p class="screen-desc">기기 ID: ${Oe()}</p>
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
          ${a.map((m,i)=>`
            <label>${m.letter}
              <input type="number" data-scale="std" data-i="${i}" data-letter="${m.letter}" min="0" max="100" value="${m.min}" />
            </label>
          `).join("")}
        </div>
        <h4>예체능 등급 기준 (점 이상)</h4>
        <div class="admin-scale" id="adm-arts">
          ${r.map((m,i)=>`
            <label>${m.letter}
              <input type="number" data-scale="arts" data-i="${i}" data-letter="${m.letter}" min="0" max="100" value="${m.min}" />
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
        ${ae()}
      </div>
      ${ne("ADMIN")}
    </div>
  `),X(k);let s=Be();async function c(){const m=k.querySelector("#adm-logs"),i=k.querySelector("#adm-log-count");m&&(m.innerHTML='<p class="muted">불러오는 중…</p>');const y=await Ht();if(s=y.logs,i&&(i.textContent=`(${s.length} · ${y.source}${y.error?" · 오류":""})`),!!m){if(s.length===0){m.innerHTML='<p class="muted">아직 기록이 없습니다.</p>';return}m.innerHTML=s.slice(0,120).map(x=>`
      <article class="admin-log-item">
        <header>${he(x.account||x.deviceId||"")} · ${he(x.type)} · ${On(x.at)}</header>
        <p>${he(x.message||"")}</p>
        ${x.detail?`<pre>${he(typeof x.detail=="string"?x.detail:JSON.stringify(x.detail,null,0))}</pre>`:""}
      </article>
    `).join("")}}c(),(d=k.querySelector("#adm-refresh-logs"))==null||d.addEventListener("click",()=>c()),(w=k.querySelector("#adm-save"))==null||w.addEventListener("click",async()=>{var M,f;const m=Number((M=k.querySelector("#adm-unlock"))==null?void 0:M.value),i=!!((f=k.querySelector("#adm-free-games"))!=null&&f.checked),y=[...k.querySelectorAll('[data-scale="std"]')].map(S=>({letter:S.dataset.letter,min:Number(S.value)||0})),x=[...k.querySelectorAll('[data-scale="arts"]')].map(S=>({letter:S.dataset.letter,min:Number(S.value)||0}));jt({restUnlockUses:Number.isFinite(m)&&m>0?m:8,freeGames:i,standardScale:y,artsScale:x}),window.alert(R()?"설정을 저장했고 클라우드에도 올렸습니다.":"설정을 이 기기에 저장했습니다. (Firebase 미설정)"),E("admin")}),(h=k.querySelector("#adm-feedback-save"))==null||h.addEventListener("click",()=>{var i,y;const m=(y=(i=k.querySelector("#adm-feedback"))==null?void 0:i.value)==null?void 0:y.trim();if(!m){window.alert("내용을 입력하세요.");return}z({type:"game_feedback",message:m}),window.alert("피드백을 저장했습니다."),E("admin")}),(L=k.querySelector("#adm-export"))==null||L.addEventListener("click",async()=>{const m=Wt(s);try{await navigator.clipboard.writeText(m),window.alert("기록이 클립보드에 복사되었습니다.")}catch{window.prompt("아래 내용을 복사하세요",m)}}),(b=k.querySelector("#adm-clear-logs"))==null||b.addEventListener("click",async()=>{window.confirm("로컬+클라우드 활동 기록을 비울까요?")&&(await _t({cloud:!0}),E("admin"))}),(l=k.querySelector("#adm-logout"))==null||l.addEventListener("click",()=>{Ut(),window.alert("관리자 모드가 종료되었습니다."),E("main")})}function he(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function On(e){try{const t=new Date(e);return`${t.getMonth()+1}/${t.getDate()} ${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`}catch{return e}}function Bn(){const e=ue(),t=rt();k.innerHTML=K(`
    <div class="stack-screen grade-screen">
      ${te()}
      <h2 class="screen-title">자신의 학년을 선택하세요</h2>
      <div class="grade-list">
        <button type="button" class="grade-btn grade-1" data-action="pick-grade-1">1학년</button>
        <button type="button" class="grade-btn grade-2" data-action="pick-grade-2">2학년</button>
        <button type="button" class="grade-btn grade-3" data-action="pick-grade-3">3학년</button>
      </div>
      ${e?'<button type="button" class="rest-btn" data-action="rest">휴식 · 미니게임</button>':`<p class="unlock-hint">${t}</p>`}
      ${ae()}
      ${ne(H.subtitle)}
    </div>
  `),X(k)}function Un({grade:e}){if(!e||!ce(e)){E("grade");return}U=e;const t=ce(e),a=Qt(e);k.innerHTML=K(`
    <div class="stack-screen ${mt(e)}">
      ${te()}
      <h2 class="screen-title">${t.label} 과목 선택</h2>
      ${t.note?`<p class="screen-note">${t.note}</p>`:""}
      ${ut()}
      <div class="subject-list">
        ${a.map(r=>`<button type="button" class="subject-btn" data-action="pick-subject-${encodeURIComponent(r)}">${r}</button>`).join("")}
      </div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="grade">학년 선택으로</button>
        ${ae()}
      </div>
      ${ne(H.subtitle)}
    </div>
  `),X(k),ft(k)}function jn({grade:e,subject:t,semester:a}){if(!e||!t||!a){E("subject",{grade:U});return}U=e,J=t,W=a;const r=ce(e),n=st(e,t),s=tn(e,t,a),c=Je(e,t,a),d={},w=n.length>1?`<div class="semester-tabs">
          ${n.map(l=>`<button type="button" class="semester-tab ${l===a?"active":""}" data-action="pick-semester-${l}">${Je(e,t,l)}</button>`).join("")}
        </div>`:`<p class="semester-only">${c}</p>`;k.innerHTML=K(`
    <div class="stack-screen calculator-screen ${mt(e)}">
      ${te("globe globe-small")}
      <h2 class="screen-title subject-title">${t}</h2>
      <p class="screen-desc">${r.label} · ${c}${He(t)?" · 예체능(A·B·C)":" · 일반(A~E)"}</p>
      ${ut(t)}
      ${w}
      <form id="calc-form" class="calc-form"></form>
      <button type="submit" form="calc-form" class="btn-calc">계산하기</button>
      <div id="calc-result" class="calc-result hidden"></div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="subject">과목 선택으로</button>
        ${ae()}
      </div>
      ${ne(H.subtitle)}
    </div>
  `);const h=k.querySelector("#calc-form");let L="";for(const l of s){if(l.kind!==L){L=l.kind;const i=document.createElement("h3");i.className="section-heading",i.textContent=l.kind==="exam"?"지필고사":"수행평가",h.appendChild(i)}const m=document.createElement("label");m.className="score-row",m.innerHTML=`
      <span>${l.label} <em>${l.weight}%</em></span>
      <input type="number" min="0" max="100" step="0.1" inputmode="decimal"
        name="${l.key}" placeholder="점수" />
    `,h.appendChild(m)}const b=k.querySelector("#calc-result");h.addEventListener("submit",l=>{var P,T;l.preventDefault();const m=new FormData(h);for(const q of s)d[q.key]=m.get(q.key);const i=fn(s,d,t);if(!i){b.classList.remove("hidden"),b.innerHTML='<p class="warn">최소 1개 이상 점수를 입력하세요.</p>';return}const y=Vt(t);z({type:"calc",message:`${e}학년 ${t} (${c}) → ${i.rounded}점 ${se(i.letter)}`,detail:{grade:e,subject:t,semester:a,scores:d,rounded:i.rounded,letter:i.letter,average:i.average}});let x="";((P=i.needed)==null?void 0:P.needed)!=null?x=`<p>상위 <strong>${se(i.needed.targetLetter)}</strong>까지 남은 항목 평균 <strong>${i.needed.needed}점</strong> 이상</p>`:(T=i.needed)!=null&&T.message&&(x=`<p>${i.needed.message}</p>`);let M="";if(i.projection.remainingCount>0&&i.letter===i.projLetter){const q=se(i.letter);let N="";i.confirmMin&&(i.confirmMin.minScore<=0?N=`<p>남은 항목이 <strong>0점</strong>이어도 ${q} 유지</p>`:N=`<p>남은 항목 각각 최소 <strong>${i.confirmMin.minScore}점</strong> 이상이면 ${q} 유지</p>`),M=`
        <p><strong>${q} 확정입니다.</strong></p>
        ${N}
      `}let f="";ln(i)&&(f=`<p class="cheer-msg">${on()}</p>`);let S="";y.justUnlocked?S=`<p class="success">서로 다른 과목 ${ke}개 달성! 학년 선택에서 휴식 미니게임 이용</p>`:ue()?S='<p class="success">휴식 미니게임 이용 가능 (학년 선택 화면)</p>':y.isNew?S=`<p class="muted">${rt()}</p>`:S='<p class="muted">이미 계산한 과목입니다. 다른 과목을 계산하면 해금에 가까워져요.</p>',b.classList.remove("hidden"),b.innerHTML=`
      <h3>${t} 결과</h3>
      <p>총점(반올림) <strong>${i.rounded}점</strong> · <strong>${se(i.letter)}</strong></p>
      <p class="muted">가중 평균 ${i.average.toFixed(1)}점</p>
      <p>남은 항목 100점 시 <strong>${i.projRounded}점</strong> · <strong>${se(i.projLetter)}</strong></p>
      ${M}
      ${f}
      ${x}
      ${S}
    `}),X(k),ft(k)}function Fn(){if(!ue()){E("grade");return}k.innerHTML=K(`
    <div class="stack-screen">
      ${te()}
      <h2 class="screen-title">휴식 · 미니게임</h2>
      <div class="game-list">
        <button type="button" class="game-card" data-action="game-dart">다트 게임</button>
        <button type="button" class="game-card" data-action="game-cricket">크리켓 게임</button>
        <button type="button" class="game-card" data-action="game-breakout">벽돌깨기</button>
        <button type="button" class="game-card" data-action="game-race">레이싱 vs AI</button>
      </div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="grade">학년 선택으로</button>
        ${ae()}
      </div>
      ${ne(H.subtitle)}
    </div>
  `),X(k)}function pe(e){if(!ue()){E("grade");return}z({type:"game_open",message:`미니게임 시작: ${e}${$e()?" (관리자)":""}`,detail:{type:e}}),k.innerHTML=K('<div id="game-root"></div>',"game-screen");const t=k.querySelector("#game-root"),a={onBack:()=>E("rest"),onMain:()=>{U=null,J=null,W=null,E("main")}};e==="dart"?Y=wn(t,a)??null:e==="cricket"?Y=vn(t,a)??null:e==="breakout"?Y=xn(t,a)??null:e==="race"&&(Y=In(t,a)??null)}
