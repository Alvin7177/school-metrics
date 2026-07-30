(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function i(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(a){if(a.ep)return;a.ep=!0;const r=i(a);fetch(a.href,r)}})();const ge=8,U={title:"SCHOOL METRICS",subtitle:"철저한 내신관리 시스템",footer:"for 해연중 학생들",creator:"2210 박민호"},le={apiKey:"AIzaSyB7YJBfYa9zGnUvLD4DFgR5KLiNKuluHJM",authDomain:"school-metrics-fdee3.firebaseapp.com",projectId:"school-metrics-fdee3",storageBucket:"school-metrics-fdee3.firebasestorage.app",messagingSenderId:"378255554733",appId:"1:378255554733:web:01b06dca5b5307860eae24",measurementId:"G-0BL416S3QD"};function G(){return!!(le.apiKey&&le.projectId&&le.appId)}const rt="https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js",Z="https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";let ae=null,de=null;async function oe(){return G()?ae||(de||(de=(async()=>{const{initializeApp:e,getApps:t}=await import(rt),{getFirestore:i}=await import(Z),l=t().length?t()[0]:e(le);return ae=i(l),ae})().catch(e=>(console.warn("[firebase] init failed",e),de=null,ae=null,null))),de):null}async function st(e){const t=await oe();if(!t)return null;const{collection:i,addDoc:l,serverTimestamp:a}=await import(Z),r={...e};return Object.keys(r).forEach(u=>{r[u]===void 0&&delete r[u]}),(await l(i(t,"activityLogs"),{...r,createdAt:a()})).id}async function ot(e=200){const t=await oe();if(!t)return[];const{collection:i,query:l,orderBy:a,limit:r,getDocs:c}=await import(Z),u=l(i(t,"activityLogs"),a("at","desc"),r(e));return(await c(u)).docs.map(g=>({id:g.id,...g.data()}))}async function ct(){const e=await oe();if(!e)return 0;const{collection:t,getDocs:i,deleteDoc:l,query:a,limit:r}=await import(Z);let c=0;for(;;){const u=await i(a(t(e,"activityLogs"),r(100)));if(u.empty||(await Promise.all(u.docs.map(p=>l(p.ref))),c+=u.size,u.size<100))break}return c}async function dt(e){const t=await oe();if(!t)return!1;const{doc:i,setDoc:l,serverTimestamp:a}=await import(Z),r={...e};return Object.keys(r).forEach(c=>{r[c]===void 0&&delete r[c]}),await l(i(t,"adminSettings","global"),{...r,updatedAt:a()}),!0}async function ut(){const e=await oe();if(!e)return null;const{doc:t,getDoc:i}=await import(Z),l=await i(t(e,"adminSettings","global"));if(!l.exists())return null;const a=l.data();return delete a.updatedAt,a}const Ue="schoolMetricsUserAccount",ft=new Set(["2024","2025","2026"]),mt=/^(\d{4})(\d{4})@haeyeon\.ms\.kr$/i;function Fe(e){const i=String(e||"").trim().toLowerCase().match(mt);if(!i)return{ok:!1,error:"형식: (년도4자리)(학번4자리)@haeyeon.ms.kr"};const l=i[1],a=i[2],r=a[0],c=a[1],u=Number(a.slice(2));return ft.has(l)?["1","2","3"].includes(r)?"12345678".includes(c)?!Number.isInteger(u)||u<1||u>35?{ok:!1,error:"번호는 01~35만 가능합니다."}:{ok:!0,account:`${l}${a}@haeyeon.ms.kr`,year:l,studentId:a,grade:Number(r),classNo:Number(c),number:u}:{ok:!1,error:"학번 둘째 자리(반)는 1~8만 가능합니다."}:{ok:!1,error:"학번 첫 자리(학년)는 1·2·3만 가능합니다."}:{ok:!1,error:"년도는 2024, 2025, 2026만 가능합니다."}}function _e(){try{const e=localStorage.getItem(Ue);if(!e)return null;const t=JSON.parse(e);return t!=null&&t.account&&Fe(t.account).ok?t:null}catch{return null}}function We(){return!!_e()}function bt(e){const t=Fe(e);if(!t.ok)return t;const i={account:t.account,year:t.year,studentId:t.studentId,grade:t.grade,classNo:t.classNo,number:t.number,loggedInAt:new Date().toISOString()};return localStorage.setItem(Ue,JSON.stringify(i)),{ok:!0,user:i}}function Ge(){var e;return((e=_e())==null?void 0:e.account)||null}const gt="73357442",Le="schoolMetricsAdminSession",xe="schoolMetricsAdminSettings",be="schoolMetricsActivityLog",De="schoolMetricsDeviceId",ht=500,V={restUnlockUses:ge,freeGames:!0,standardScale:[{letter:"A",min:90},{letter:"B",min:80},{letter:"C",min:70},{letter:"D",min:60},{letter:"E",min:0}],artsScale:[{letter:"A",min:80},{letter:"B",min:60},{letter:"C",min:0}]};function Me(e,t){try{const i=localStorage.getItem(e);return i?JSON.parse(i):t}catch{return t}}function Ee(e,t){localStorage.setItem(e,JSON.stringify(t))}function Ae(){let e=localStorage.getItem(De);return e||(e=`dev-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,localStorage.setItem(De,e)),e}function re(){return sessionStorage.getItem(Le)==="1"}function pt(e){return String(e)===gt?(sessionStorage.setItem(Le,"1"),X({type:"admin_login",message:"관리자 로그인"}),!0):!1}function kt(){sessionStorage.removeItem(Le)}function W(){const e=Me(xe,{});return{...V,...e,standardScale:e.standardScale||V.standardScale,artsScale:e.artsScale||V.artsScale}}function wt(e){const t={...W(),...e};return Ee(xe,t),X({type:"admin_settings",message:"관리자 설정 변경",detail:e}),G()&&dt(t).catch(i=>console.warn("[firebase] settings save",i)),t}async function vt(){if(!G())return W();try{const e=await ut();if(e&&typeof e=="object"){const t={...V,...e,standardScale:e.standardScale||V.standardScale,artsScale:e.artsScale||V.artsScale};return Ee(xe,t),t}}catch(e){console.warn("[firebase] settings load",e)}return W()}function he(){return Number(W().restUnlockUses)||ge}function pe(){return re()&&W().freeGames!==!1}function X(e){const t={id:`${Date.now()}-${Math.random().toString(36).slice(2,7)}`,at:new Date().toISOString(),deviceId:Ae(),...e,account:e.account||Ge()||"guest"},i=Me(be,[]);return i.unshift(t),Ee(be,i.slice(0,ht)),G()&&st(t).catch(l=>console.warn("[firebase] log",l)),t}function Ie(){return Me(be,[])}async function yt(){const e=Ie();if(!G())return{source:"local",logs:e};try{const t=await ot(300),i=new Map;for(const a of[...t,...e]){const r=a.id||`${a.at}-${a.deviceId}-${a.type}-${a.message}`;i.has(r)||i.set(r,a)}return{source:"firebase",logs:[...i.values()].sort((a,r)=>String(r.at).localeCompare(String(a.at)))}}catch(t){return console.warn("[firebase] fetch logs",t),{source:"local-fallback",logs:e,error:String(t.message||t)}}}async function St({cloud:e=!0}={}){if(localStorage.removeItem(be),e&&G())try{await ct()}catch(t){console.warn("[firebase] clear",t)}X({type:"admin_clear_logs",message:"활동 로그 초기화"})}function $t(e=Ie()){return JSON.stringify({exportedAt:new Date().toISOString(),deviceId:Ae(),firebase:G(),settings:W(),logs:e},null,2)}function Lt(){return{configured:G(),projectId:le.projectId||""}}const Ce="schoolMetricsUniqueSubjects";function Ke(){try{const e=localStorage.getItem(Ce),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch{return[]}}function xt(e){localStorage.setItem(Ce,JSON.stringify(e))}function Mt(e){const t=he(),i=Ke(),l=!i.includes(e);return l&&(i.push(e),xt(i)),{isNew:l,uniqueCount:i.length,justUnlocked:l&&i.length>=t}}function Te(){return Ke().length}function ce(){return pe()?!0:Te()>=he()}function Et(){return Math.max(0,he()-Te())}function At(){pe()||localStorage.removeItem(Ce)}function Je(){const e=he(),t=Te(),i=Et();return pe()?"관리자 모드: 미니게임 자유 이용":ce()?`서로 다른 과목 ${t}개 달성! 휴식 미니게임 이용 가능`:`서로 다른 과목 ${i}개 더 계산하면 해금 (${t}/${e})`}const ve=["희망은 좋은 것이다. 어쩌면 가장 좋은 것일지도. — 《쇼생크 탈출》","해야 한다, 아니면 안 된다. 그 중간은 없다. — 《스타워즈》","과거는 과거일 뿐이야. 배울 수만 있다면. — 《라이온 킹》","가장 어두운 시간은 해가 뜨기 직전이다. — 《어벤져스: 엔드게임》","세상에서 중요한 건 내가 누구냐가 아니라, 내가 뭘 하느냐다. — 《배트맨: 다크나이트》","우리에게 주어진 시간을 어떻게 쓸지만 결정하면 된다. — 《반지의 제왕》","아주 작은 존재도 미래를 바꿀 수 있다. — 《반지의 제왕》","자유는 아무 대가 없이 오지 않는다. — 《브레이브하트》","지금 이 순간을 잡아라. — 《데드 포엇 소사이어티》","무엇이든 할 수 있다. — 《쿵푸 판다》","그냥 계속 헤엄쳐. — 《니모를 찾아서》","모든 걸 시도해 봐. — 《주토피아》","두려움을 없애는 방법은 그것과 마주하는 것이다. — 《인사이드 아웃》","뜻이 있는 곳에 길이 있다. — 《아바타》","비가 그친 뒤에는 반드시 맑은 하늘이 온다. — 《날씨의 아이》","나는 이 세계를 이해할 수 없어. 그래도 계속한다. — 《록키》","시련이 없었다면 챔피언도 없다. — 《록키》","인생은 수레바퀴와 같아. 항상 앞으로 나아가야 한다. — 《니모를 찾아서》","이겨야 한다. 어떻게든. — 《친구》","꿈은 거짓말이 아니다. 반드시 이루어질 내일이다. — 《드림하이》","포기하면 그 순간 게임 끝이야, 인생도 마찬가지다. — 《슬램덩크》","죽을 때 후회 없는 인생을 살아라. — 《원피스》","약한 것은 죄가 아니다. 약한 채로 있으면 안 될 뿐. — 《귀멸의 칼날》","막을 때까지 싸워라. — 《진격의 거인》","노력은 배신하지 않는다. — 《하이큐!!》","패배는 패배하지 않는 것보다 낫다. — 《하이큐!!》","시선을 돌리지 마. 앞만 봐. — 《센과 치히로의 행방불명》","살아있는 한 힘을 내라. — 《하울의 움직이는 성》","바람이 분다. 견뎌야 한다. — 《바람의 나라》","상대는 나 자신이다. — 《초속 5센티미터》","포기하지 말 것. 내일이 있으니. — 《드래곤볼》","사람은 누구나 다시 태어날 수 있다. — 《바람의 나라》","아는 것이 힘이다. — 프랜시스 베이컨","천 리 길도 한 걸음부터. — 노자","배우고 또 배우면 어찌 기쁘지 아니하랴. — 공자","백번 듣는 것보다 한 번 보는 것이 낫다. — 공자","세 사람이 길을 가면 반드시 나의 스승이 있다. — 공자","하늘은 큰 뜻을 품은 자에게 먼저 고생을 시킨다. — 맹자","독서는 마음의 양식이다. — 키케로","하늘은 스스로 돕는 자를 돕는다. — 소포클레스","그대가 갈망하는 것을 따르라. — 랄프 왔도 에머슨","겁쟁이는 죽기 전에 여러 번 죽는다. 용감한 자는 한 번만 죽는다. — 셰익스피어","열정 없이는 위대한 것은 이루어지지 않는다. — 게오르크 빌헬름 프리드리히 헤겔","나는 나의 운명을 사랑한다. — 프리드리히 니체","오늘 할 일을 내일로 미루지 마라. — 벤자민 프랭클린","천재는 1%의 영감과 99%의 땀이다. — 토마스 에디슨","실패는 성공의 어머니이다. — 토마스 에디슨","시간은 금이다. — 벤자민 프랭클린","어리석은 자는 경험에서 아무것도 배우지 않는다. — 벤자민 프랭클린","실용적인 것이 가장 시적인 것이다. — 벤자민 프랭클린","깊은 생각 없는 독서는 낮잠과 같다. — 프랜시스 베이컨","인생은 속도가 아니라 방향이다. — 에이브러햄 링컨","성공은 최종적인 것이 아니며, 실패는 치명적인 것이 아니다. — 윈스턴 처칠","가장 위대한 영광은 넘어지지 않는 것이 아니라, 넘어질 때마다 일어서는 것이다. — 넬슨 만델라","용기는 두려움의 부재가 아니라, 두려움에도 행동하는 것이다. — 넬슨 만델라","네가 할 수 있다고 믿든 못 한다고 믿든, 네 말이 맞다. — 헨리 포드","성공의 비결은 시작하는 것이다. — 마크 트웨인","행운은 준비된 자에게 찾아온다. — 루이 파스퇴르","한계란 대부분 마음속에 있는 환상일 뿐이다. — 무하마드 알리","나는 세계 챔피언이다. 내가 그렇다고 말하기 전부터. — 무하마드 알리","항상 갈망하고, 우직하게 나아가라. — 스티브 잡스","당신의 시간은 제한되어 있다. 다른 사람의 인생을 살며 낭비하지 마라. — 스티브 잡스","오늘 나는 죽었다면 무엇을 후회하겠는가. — 스티브 잡스","죽고자 하면 살 것이요, 살고자 하면 죽을 것이니라. — 이순신","한 번도 실수한 적 없는 사람은 새로운 것을 시도한 적이 없는 사람이다. — 알버트 아인슈타인","네가 정말 소중히 여기는 것에 시간을 써라. — 《어린 왕자》","꽃을 단 한 송이라도 내가 직접 가꾸면, 내 세계에 엇비슷한 시간이 흐른다. — 《어린 왕자》","세상에서 가장 강한 사람은 스스로를 이기는 사람이다. — 무라카미 하루키","빛을 보고자 한다면 어둠을 견뎌야 한다. — 무라카미 하루키","사람은 마음먹은 것은 다 이룬다. — 《바보》","고통 없이는 얻는 것도 없다. — 라틴 격언","로마는 하루아침에 이루어지지 않았다. — 속담","연습이 완벽을 만든다. — 속담","배움에는 왕도가 없다. — 유클리드","작은 일에 충실하라. 그곳에 네 힘이 있다. — 루드야드 키플링","가장 큰 위험은 위험을 감수하지 않는 것이다. — 마크 주커버그","인생은 짧고, 예술은 길다. — 히포크라테스","삶을 살아가는 가장 좋은 복수는 성공하는 것이다. — 프랭크 시나트라","피할 수 없으면 즐겨라. — 로버트 엘리엇","포기하지 않는 한, 늦었다고 생각할 때가 가장 빠른 때다. — 속담","꾸준함은 재능을 이긴다. — 속담","반복은 지루하지만, 반복 없는 실력은 환상이다. — 속담","오늘의 노력이 내일의 실력이 된다. — 속담","지금이 가장 빠른 시작이다. — 속담","목표 없는 공부는 방향 잃은 배와 같다. — 속담","모르는 것을 아는 것이 배움의 시작이다. — 속담","실력은 하루아침에 생기지 않는다. — 속담","쉬는 것도 실력이다. 번아웃을 조심하자. — 속담","비교하지 말고, 어제의 나와 겨루자. — 속담","이해가 안 되면 다시 보면 된다. 반복이 답이다. — 속담","시험은 결과일 뿐, 과정이 실력이다. — 속담","1%씩 매일 오르면 37배가 된다. — 속담","모르는 건 부끄러운 게 아니다. 묻지 않는 게 문제다. — 속담","오답 노트 한 장이 교과서 열 페이지보다 강하다. — 속담","할 수 있다고 믿는 순간, 절반은 온 것이다. — 속담","오늘 공부한 만큼, 내일은 덜 불안하다. — 속담"],Re="schoolMetricsQuoteIndex";function It(){let e=Number(localStorage.getItem(Re)||0);const t=ve[e%ve.length];return localStorage.setItem(Re,String((e+1)%ve.length)),t}const Ct={1:{label:"1학년",note:"1학년은 2학기부터 내신 성적이 반영됩니다.",subjects:{국어:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"나만의 노트(나노)",weight:15,kind:"perf"}]}}},수학:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"기본도형 탐구 프로젝트",weight:20,kind:"perf"},{label:"평면·입체 도형 탐구",weight:20,kind:"perf"}]}}},사회:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"사회화 자서전 만들기",weight:20,kind:"perf"},{label:"모의 선거",weight:20,kind:"perf"}]}}},과학:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"실험 보고서 작성",weight:20,kind:"perf"},{label:"달의 위상 변화 관찰",weight:20,kind:"perf"}]}}},영어:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"희망 직업 소개",weight:20,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]}}},음악:{semesters:{2:{label:"2학기",items:[{label:"우쿨렐레 연주",weight:50,kind:"perf"},{label:"작곡가 탐구 활동",weight:50,kind:"perf"}]}}},미술:{semesters:{2:{label:"2학기",items:[{label:"스텐실",weight:50,kind:"perf"},{label:"문자도",weight:50,kind:"perf"}]}}},체육:{semesters:{2:{label:"2학기",items:[{label:"경기형 스포츠(축구)",weight:50,kind:"perf"},{label:"기록 도전형(달리기)",weight:50,kind:"perf"}]}}},정보:{semesters:{2:{label:"2학기",items:[{label:"AI 활용",weight:50,kind:"perf"},{label:"디지털 문화 표현",weight:50,kind:"perf"}]}}},"진로와 직업":{semesters:{2:{label:"2학기",items:[{label:"창업 프로젝트",weight:50,kind:"perf"},{label:"진로 디자인",weight:50,kind:"perf"}]}}},기술가정:{semesters:{2:{label:"2학기",items:[{label:"과학·미래기술 보고서",weight:35,kind:"perf"},{label:"에너지 신문 제작",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]}}}}},2:{label:"2학년",subjects:{국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"발표와 듣기",weight:15,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"복합양식 자료를 활용한 글 작성",weight:15,kind:"perf"}]}}},수학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"일차방정식·일차부등식",weight:20,kind:"perf"},{label:"연립일차방정식·일차함수",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"삼각형·사각형의 성질",weight:20,kind:"perf"},{label:"도형의 닮음·피타고라스",weight:20,kind:"perf"}]}}},역사:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"고대 문명 지도 만들기",weight:20,kind:"perf"},{label:"고대사 신문 만들기",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"서양 고대 문화유산 소개",weight:20,kind:"perf"},{label:"유럽 여행 소개 글쓰기",weight:20,kind:"perf"}]}}},과학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"밀도 측정",weight:10,kind:"perf"},{label:"지권 층상구조 모형 제작",weight:10,kind:"perf"},{label:"주기율표 탐구",weight:10,kind:"perf"},{label:"광합성 탐구",weight:10,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"소리의 성질 탐구",weight:10,kind:"perf"},{label:"인체 프로젝트",weight:20,kind:"perf"},{label:"전류,전압,저항 사이의 관계 탐구",weight:10,kind:"perf"}]}}},영어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"},{label:"발명품 소개",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"지역 축제 홍보",weight:20,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]}}},음악:{semesters:{1:{label:"1학기",items:[{label:"우쿨렐레 연주",weight:50,kind:"perf"},{label:"텅드럼 연주",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"펜비트 연주",weight:50,kind:"perf"},{label:"리코더 연주",weight:50,kind:"perf"}]}}},미술:{semesters:{1:{label:"1학기",items:[{label:"세밀화",weight:50,kind:"perf"},{label:"음식 모형 만들기",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"점묘화",weight:50,kind:"perf"},{label:"서양미술사 보고서",weight:50,kind:"perf"}]}}},체육:{semesters:{1:{label:"1학기",items:[{label:"경기형 스포츠(킨볼)",weight:60,kind:"perf"},{label:"도전형(제자리멀리뛰기)",weight:40,kind:"perf"}]},2:{label:"2학기",items:[{label:"경기형 스포츠(배드민턴)",weight:60,kind:"perf"},{label:"건강관리(줄넘기)",weight:40,kind:"perf"}]}}},도덕:{semesters:{1:{label:"1학기",items:[{label:"도덕적 인물 지폐 제작",weight:50,kind:"perf"},{label:"우정 네 컷 만들기",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"정보 카드 뉴스 제작",weight:50,kind:"perf"},{label:"인권 모니터링 제안서",weight:50,kind:"perf"}]}}},중국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 기말고사",weight:40,kind:"exam"},{label:"한어병음 작성",weight:30,kind:"perf"},{label:"중국어 말하기",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 기말고사",weight:40,kind:"exam"},{label:"하루 일과표 만들기",weight:30,kind:"perf"},{label:"중국어 말하기",weight:30,kind:"perf"}]}}},"금융과 미래":{semesters:{2:{label:"2학기",items:[{label:"투자 성향 검사",weight:50,kind:"perf"},{label:"투자 포트폴리오 구성",weight:50,kind:"perf"}]}}},기술가정:{semesters:{1:{label:"1학기",items:[{label:"효과적 의사소통 프로젝트",weight:35,kind:"perf"},{label:"제조 기술 프로젝트",weight:35,kind:"perf"},{label:"자기주도노트 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"균형 잡힌 식단 계획",weight:35,kind:"perf"},{label:"친환경 의복 생활",weight:35,kind:"perf"},{label:"자기주도노트 작성",weight:30,kind:"perf"}]}}}}},3:{label:"3학년",note:"3학년 2학기에는 기말고사가 없습니다.",subjects:{국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"논설문 쓰기",weight:15,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"한 학기 한 권 읽기",weight:30,kind:"perf"},{label:"문장의 짜임 고려해서 자신감 있게 발표",weight:30,kind:"perf"}]}}},사회:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"국가 기관 탐구로 권력 분립 이해",weight:20,kind:"perf"},{label:"국민 경제 지표와 국제 거래 이해",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"인구·도시 문제 탐구",weight:30,kind:"perf"},{label:"농업 산업화·세계화",weight:30,kind:"perf"}]}}},역사:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"고려 정치 변천",weight:20,kind:"perf"},{label:"고려의 문화 및 조선 통치 체제 탐구",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"조선 왕 가상 인터뷰",weight:30,kind:"perf"},{label:"양 난의 이해 및 영정조 정책 탐구",weight:30,kind:"perf"}]}}},도덕:{semesters:{1:{label:"1학기",items:[{label:"1학기 기말고사",weight:40,kind:"exam"},{label:"폭력 예방 논술문 작성",weight:30,kind:"perf"},{label:"사회 정의 실현 논술문 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"환경 보호 제안서",weight:30,kind:"perf"},{label:"실패 이력서 소개",weight:30,kind:"perf"}]}}},수학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"인수분해를 이용한 수의 성질 탐구",weight:20,kind:"perf"},{label:"이차함수 그래프",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"삼각비 개념 보고서",weight:30,kind:"perf"},{label:"원의 성질 문제해결",weight:30,kind:"perf"}]}}},과학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"기상 현상 실험",weight:20,kind:"perf"},{label:"화학 반응의 규칙 탐구",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"세포분열 관찰 실험",weight:30,kind:"perf"},{label:"물체 운동 분석",weight:30,kind:"perf"}]}}},영어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:15,kind:"perf"},{label:"급식 메뉴 프로젝트",weight:15,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"영어 듣기",weight:20,kind:"perf"},{label:"영어독서",weight:20,kind:"perf"},{label:"통계 자료 활용 프로젝트",weight:20,kind:"perf"}]}}},음악:{semesters:{1:{label:"1학기",items:[{label:"칼림바 연주",weight:50,kind:"perf"},{label:"전자드럼 연주",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"노래 부르기",weight:50,kind:"perf"},{label:"디자인사 연구보고서",weight:50,kind:"perf"}]}}},미술:{semesters:{1:{label:"1학기",items:[{label:"포트레이트 드로잉",weight:50,kind:"perf"},{label:"비주얼 리터러시",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"오마주",weight:50,kind:"perf"},{label:"디자인 조사 보고서",weight:50,kind:"perf"}]}}},체육:{semesters:{1:{label:"1학기",items:[{label:"전통 표현(티니클링)",weight:40,kind:"perf"},{label:"플로어볼",weight:60,kind:"perf"}]},2:{label:"2학기",items:[{label:"건강·체력 관리(타바타)",weight:40,kind:"perf"},{label:"배구",weight:60,kind:"perf"}]}}},기술가정:{semesters:{1:{label:"1학기",items:[{label:"생애 설계",weight:35,kind:"perf"},{label:"수송기술 제작",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"스마트폰 앱 만들기",weight:35,kind:"perf"},{label:"적정 기술 사례 조사",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]}}}}}};function se(e){return Ct[e]??null}function Tt(e){const t=se(e);return t?Object.keys(t.subjects):[]}function Ne(e,t){var i;return((i=se(e))==null?void 0:i.subjects[t])??null}function Ye(e,t){const i=Ne(e,t);return i?Object.keys(i.semesters).map(Number).sort((l,a)=>l-a):[]}function Nt(e,t,i){var a;const l=Ne(e,t);return((a=l==null?void 0:l.semesters[i])==null?void 0:a.items)??[]}function Oe(e,t,i){var a;const l=Ne(e,t);return((a=l==null?void 0:l.semesters[i])==null?void 0:a.label)??`${i}학기`}function Pt(e,t,i,l){return`${e}-${t}-${i}-${l}`}function qt(e,t,i){return Nt(e,t,i).map((a,r)=>({key:Pt(e,t,i,r),subject:t,semester:i,label:a.label,weight:a.weight,kind:a.kind}))}function ze(e,t){let i=0,l=0;for(const a of e){const r=t[a.key];if(r===""||r===null||r===void 0)continue;const c=Number(r);Number.isNaN(c)||(i+=a.weight,l+=c*a.weight)}return i===0?null:l/i}function Dt(e,t){const i={},l=[];for(const r of e){const c=t[r.key];if(c===""||c===null||c===void 0){l.push(r);continue}const u=Number(c);if(Number.isNaN(u)){l.push(r);continue}i[r.key]=u}const a={...i};for(const r of l)a[r.key]=100;return{average:ze(e,a),remainingCount:l.length}}const Rt=["음악","미술","체육"],Ot=[{letter:"A",min:90},{letter:"B",min:80},{letter:"C",min:70},{letter:"D",min:60},{letter:"E",min:0}],Bt=[{letter:"A",min:80},{letter:"B",min:60},{letter:"C",min:0}];function Xe(e){return e.map((t,i,l)=>{const a=l[i-1],r=t.min===0?`${t.letter} (${(a==null?void 0:a.min)??60}점 미만)`:`${t.letter} (${t.min}점 이상)`;return{letter:t.letter,min:Number(t.min)||0,label:r}})}function Qe(){const e=W().standardScale;return Xe(e!=null&&e.length?e:Ot)}function Ve(){const e=W().artsScale;return Xe(e!=null&&e.length?e:Bt)}function Pe(e){return Rt.includes(e)}function ke(e){return e==null||Number.isNaN(e)?null:Math.round(e)}function qe(e){return Pe(e)?Ve():Qe()}function $e(e,t){const i=ke(e);if(i===null)return"-";const l=qe(t);for(const a of l)if(i>=a.min)return a.letter;return l[l.length-1].letter}function ie(e){return`${e}등급`}const Be=["조금만 더 올리면 된다. 할 수 있어!","상위 등급이 코앞이다. 끝까지 달려보자!","지금의 노력이 등급을 바꾼다. 포기하지 마!","아직 끝나지 않았어. 충분히 올릴 수 있어!","남은 항목이 기회다. 집중해서 마무리하자!","한 걸음만 더 가면 등급이 달라진다. 파이팅!","가능성은 아직 살아 있다. 믿고 가보자!","오늘의 한 문제가 등급을 바꿀 수도 있어!","목표 등급까지 거의 다 왔다. 조금만 더!","실력은 거짓말하지 않는다. 계속 밀어붙여!"];function jt(e){return e.projection.remainingCount>0&&e.letter!==e.projLetter}function Ht(){const e=Math.floor(Math.random()*Be.length);return Be[e]}function Ze(e=null){const t=e?Pe(e):!1,i=e?t?`${e}은(는) 예체능 과목 (A·B·C)`:`${e}은(는) 일반 과목 (A·B·C·D·E)`:"과목 유형에 따라 등급 기준이 다릅니다.",l=Qe(),a=Ve();return`
    <div class="grade-criteria-wrap">
      <button type="button" class="grade-criteria-bar" data-toggle="criteria" aria-expanded="false">
        ▶ 등급 기준표 확인
      </button>
      <div class="grade-criteria-panel hidden" id="criteria-panel">
        <p class="criteria-note">${i}</p>
        <p class="criteria-note muted">총점은 소수점을 반올림한 뒤 등급을 산출합니다.</p>
        <table class="criteria-table">
          <thead>
            <tr><th colspan="2">일반 과목 (국·영·수·사·과 등)</th></tr>
          </thead>
          <tbody>
            ${l.map(r=>`<tr><td>${r.letter}</td><td>${r.label.replace(/^[A-E]\s*/,"")}</td></tr>`).join("")}
          </tbody>
        </table>
        <table class="criteria-table">
          <thead>
            <tr><th colspan="2">예체능 (음악·미술·체육)</th></tr>
          </thead>
          <tbody>
            ${a.map(r=>`<tr><td>${r.letter}</td><td>${r.label.replace(/^[A-E]\s*/,"")}</td></tr>`).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `}function et(e){const t=e.querySelector("[data-toggle='criteria']"),i=e.querySelector("#criteria-panel");!t||!i||t.addEventListener("click",()=>{const l=i.classList.toggle("hidden");t.setAttribute("aria-expanded",String(!l)),t.textContent=l?"▶ 등급 기준표 확인":"▼ 등급 기준표 닫기"})}function Ut(e,t,i,l){if(i===null)return null;const a=ke(i),r=$e(a,l),c=qe(l),u=c.findIndex(L=>L.letter===r);if(u<=0)return{targetLetter:r,needed:null,message:"이미 최고 등급입니다."};const p=c[u-1],g=p.min,x=e.filter(L=>{const v=t[L.key];return v===""||v===null||v===void 0||Number.isNaN(Number(v))});if(x.length===0)return{targetLetter:p.letter,needed:null,message:"모든 항목이 입력되었습니다."};let m=0,s=0,f=0;for(const L of e){const v=t[L.key];if(v===""||v===null||v===void 0||Number.isNaN(Number(v))){f+=L.weight;continue}m+=L.weight,s+=Number(v)*L.weight}if(f===0)return null;const n=m+f,w=(g*n-s)/f,M=Math.max(0,Math.min(100,w));return{targetLetter:p.letter,needed:Math.ceil(M*10)/10,remainingCount:x.length,message:null}}function Ft(e,t,i,l){const r=qe(l).find(n=>n.letter===i);if(!r)return null;let c=0,u=0,p=0,g=0;for(const n of e){const w=t[n.key];if(w===""||w===null||w===void 0||Number.isNaN(Number(w))){p+=n.weight,g+=1;continue}u+=n.weight,c+=Number(w)*n.weight}if(p===0)return null;const x=u+p,s=((r.min-.5)*x-c)/p;return{minScore:Math.ceil(Math.max(0,Math.min(100,s))*10)/10,remainingCount:g}}function _t(e){const t=ke(e);return{raw:e,rounded:t,display:`${t}점`}}function Wt(e,t,i){const l=ze(e,t);if(l===null)return null;const{rounded:a}=_t(l),r=$e(a,i),c=Dt(e,t),u=ke(c.average),p=Ut(e,t,l,i),g=Ft(e,t,r,i);return{average:l,rounded:a,letter:r,projection:c,projRounded:u,projLetter:$e(u,i),needed:p,confirmMin:g}}function ee(e="globe"){return`
    <svg class="${e}" viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="48" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.35"/>
      <ellipse cx="60" cy="60" rx="48" ry="16" fill="none" stroke="currentColor" stroke-width="1"/>
      <ellipse cx="60" cy="60" rx="16" ry="48" fill="none" stroke="currentColor" stroke-width="1"/>
      <ellipse cx="60" cy="60" rx="34" ry="48" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.7"/>
      <line x1="12" y1="60" x2="108" y2="60" stroke="currentColor" stroke-width="0.8"/>
      <line x1="60" y1="12" x2="60" y2="108" stroke="currentColor" stroke-width="0.8"/>
    </svg>
  `}function Gt(){return'<img class="title-bg" src="./title-bg.png" alt="" aria-hidden="true" />'}function Kt(){return'<img class="go-bg" src="./go-bg.png" alt="" aria-hidden="true" />'}function tt(e){return`grade-theme-${e}`}function K(e,t=""){return`<div class="phone-screen ${t}">${e}</div>`}function te(e){return`<p class="screen-footer">${e}</p>`}function ne(e="main"){return`<button type="button" class="link-btn" data-action="${e}">메인화면으로</button>`}const nt=[20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5],ue=8;function Jt(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function Yt(e,t,i){var l,a;(l=e.querySelector('[data-nav="back"]'))==null||l.addEventListener("click",t),(a=e.querySelector('[data-nav="main"]'))==null||a.addEventListener("click",i)}function zt(e,t){const i=Math.hypot(e,t);if(i>1)return{points:0,label:"보드 밖"};if(i<=.07)return{points:50,label:"더블 불 · 50"};if(i<=.14)return{points:25,label:"싱글 불 · 25"};let l=Math.atan2(e,-t);l<0&&(l+=Math.PI*2);const a=Math.floor((l+Math.PI/20)%(Math.PI*2)/(Math.PI/10)),r=nt[a];return i>=.9?{points:r*2,label:`더블 ${r} · ${r*2}`}:i>=.52&&i<=.62?{points:r*3,label:`트리플 ${r} · ${r*3}`}:{points:r,label:`싱글 ${r} · ${r}`}}function ye(e,t,i){const l=t/2,a=t/2,r=t*.42;e.clearRect(0,0,t,t),e.fillStyle="#1a1a1a",e.beginPath(),e.arc(l,a,r*1.08,0,Math.PI*2),e.fill();for(let c=0;c<20;c++){const u=-Math.PI/2-Math.PI/20+c*Math.PI/10,p=u+Math.PI/10,g=c%2===0;e.beginPath(),e.moveTo(l,a),e.arc(l,a,r*.9,u,p),e.closePath(),e.fillStyle=g?"#111":"#ece6d8",e.fill(),e.beginPath(),e.moveTo(l,a),e.arc(l,a,r*.52,u,p),e.closePath(),e.fillStyle=g?"#1c1c1c":"#f5f0e6",e.fill(),e.beginPath(),e.arc(l,a,r,u,p),e.arc(l,a,r*.9,p,u,!0),e.closePath(),e.fillStyle=c%2===0?"#c4122f":"#0a7a3c",e.fill(),e.beginPath(),e.arc(l,a,r*.62,u,p),e.arc(l,a,r*.52,p,u,!0),e.closePath(),e.fillStyle=c%2===0?"#c4122f":"#0a7a3c",e.fill()}e.strokeStyle="rgba(180,180,180,0.55)",e.lineWidth=1;for(let c=0;c<20;c++){const u=-Math.PI/2-Math.PI/20+c*Math.PI/10;e.beginPath(),e.moveTo(l,a),e.lineTo(l+Math.cos(u)*r,a+Math.sin(u)*r),e.stroke()}[.9,.62,.52,.14,.07].forEach(c=>{e.beginPath(),e.arc(l,a,r*c,0,Math.PI*2),e.stroke()}),e.beginPath(),e.arc(l,a,r*.14,0,Math.PI*2),e.fillStyle="#0a7a3c",e.fill(),e.beginPath(),e.arc(l,a,r*.07,0,Math.PI*2),e.fillStyle="#c4122f",e.fill(),e.fillStyle="#fff",e.font=`bold ${Math.max(10,t*.045)}px sans-serif`,e.textAlign="center",e.textBaseline="middle";for(let c=0;c<20;c++){const u=-Math.PI/2+c*Math.PI/10,p=l+Math.cos(u)*r*1.14,g=a+Math.sin(u)*r*1.14;e.fillText(String(nt[c]),p,g)}for(const c of i)e.beginPath(),e.arc(l+c.nx*r,a+c.ny*r,4,0,Math.PI*2),e.fillStyle="#fff700",e.fill(),e.strokeStyle="#000",e.stroke()}function Xt(e,{onBack:t,onMain:i}){let l=0,a=ue,r="vertical",c=.5,u=.5,p=1,g=1,x=0,m=0;const s=[],f=1.35;e.innerHTML=`
    <div class="game-panel">
      <h2 class="game-title">다트 게임</h2>
      <p class="game-desc">바가 가운데 올 때 탭/스페이스로 멈추세요. (세로 → 가로)</p>
      <div class="dart-stats">
        <span id="dart-score">점수: 0</span>
        <span id="dart-throws">남은 횟수: ${ue}</span>
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
      ${Jt()}
    </div>
  `;const n=e.querySelector("#dart-canvas"),w=n.getContext("2d"),M=e.querySelector("#dart-score"),L=e.querySelector("#dart-throws"),v=e.querySelector("#dart-feedback"),$=e.querySelector("#dart-stop"),N=e.querySelector("#dart-retry"),P=e.querySelector("#aim-v"),T=e.querySelector("#aim-h"),q=e.querySelector(".aim-bar-v"),R=e.querySelector(".aim-bar-h");function D(){const o=Math.min(300,e.clientWidth||300);n.width=o,n.height=o,ye(w,o,s)}function j(){P.style.top=`${c*100}%`,T.style.left=`${u*100}%`,q.classList.toggle("active",r==="vertical"),R.classList.toggle("active",r==="horizontal")}function O(o){m||(m=o);const d=Math.min(.05,(o-m)/1e3);m=o,r==="vertical"?(c+=p*f*d,c>=1&&(c=1,p=-1),c<=0&&(c=0,p=1)):r==="horizontal"&&(u+=g*f*d,u>=1&&(u=1,g=-1),u<=0&&(u=0,g=1)),j(),x=requestAnimationFrame(O)}function H(){const o=(c-.5)*2.05,d=(u-.5)*2.05,h=zt(d,o);if(s.push({nx:d,ny:o}),l+=h.points,a-=1,M.textContent=`점수: ${l}`,L.textContent=`남은 횟수: ${a}`,ye(w,n.width,s),v.textContent=h.label,a<=0){r="done",$.classList.add("hidden"),N.classList.remove("hidden"),v.textContent=`게임 종료! 최종 ${l}점`;return}r="vertical",c=Math.random(),u=Math.random(),v.textContent="세로 바를 가운데에 맞춰 멈추세요!"}function k(o){var d;if((d=o==null?void 0:o.preventDefault)==null||d.call(o),r==="vertical"){r="horizontal",v.textContent="가로 바를 가운데에 맞춰 멈추세요!";return}r==="horizontal"&&(r="result",H())}function A(o){(o.code==="Space"||o.key===" ")&&(o.preventDefault(),k(o))}function b(){l=0,a=ue,r="vertical",s.length=0,c=.2,u=.2,M.textContent="점수: 0",L.textContent=`남은 횟수: ${ue}`,v.textContent="세로 바를 가운데에 맞춰 멈추세요!",$.classList.remove("hidden"),N.classList.add("hidden"),ye(w,n.width,s)}return D(),j(),x=requestAnimationFrame(O),$.addEventListener("click",k),$.addEventListener("touchstart",k,{passive:!1}),N.addEventListener("click",b),window.addEventListener("keydown",A),window.addEventListener("resize",D),Yt(e,t,i),()=>{cancelAnimationFrame(x),window.removeEventListener("keydown",A),window.removeEventListener("resize",D)}}const J=12;function Qt(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function Vt(e,t,i){var l,a;(l=e.querySelector('[data-nav="back"]'))==null||l.addEventListener("click",t),(a=e.querySelector('[data-nav="main"]'))==null||a.addEventListener("click",i)}function Zt(e,{onBack:t,onMain:i}){let l=0,a=0,r=!1,c=!0,u=.08,p=.55,g=0,x=0,m=0,s=!1;e.innerHTML=`
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
      ${Qt()}
    </div>
  `;const f=e.querySelector("#cricket-canvas"),n=f.getContext("2d"),w=e.querySelector("#cricket-runs"),M=e.querySelector("#cricket-balls"),L=e.querySelector("#cricket-feedback"),v=e.querySelector("#cricket-swing"),$=e.querySelector("#cricket-retry"),N=.72,P=.09;function T(){const k=Math.min(320,Math.max(260,e.clientWidth-16||300));f.width=k,f.height=Math.round(k*1.3)}function q(){const k=f.width,A=f.height;n.clearRect(0,0,k,A),n.fillStyle="#6ec8ff",n.fillRect(0,0,k,A*.22),n.fillStyle="#3d8c3a",n.fillRect(0,A*.18,k,A*.12);for(let I=0;I<18;I++)n.fillStyle=`hsl(${I*47%360} 70% 45%)`,n.beginPath(),n.arc(10+I*(k/17),A*.22,6,0,Math.PI*2),n.fill();n.fillStyle="#4caf50",n.fillRect(0,A*.28,k,A*.72);const b=k*.28,o=(k-b)/2,d=A*.3,h=A*.58;n.fillStyle="#c4a574",n.beginPath(),n.moveTo(o+b*.15,d),n.lineTo(o+b*.85,d),n.lineTo(o+b,d+h),n.lineTo(o,d+h),n.closePath(),n.fill();const y=d+h*N;if(n.strokeStyle="#fff41a",n.lineWidth=3,n.setLineDash([6,4]),n.beginPath(),n.moveTo(o-8,y),n.lineTo(o+b+8,y),n.stroke(),n.setLineDash([]),n.fillStyle="#8d6e63",n.beginPath(),n.ellipse(k/2,d+18,10,14,0,0,Math.PI*2),n.fill(),n.fillStyle="#66bb6a",n.beginPath(),n.ellipse(k/2,d+h-10,16,22,0,0,Math.PI*2),n.fill(),n.save(),n.translate(k/2+14,d+h-18),n.rotate(g>0?-.9:-.2),n.fillStyle="#f5f5f5",n.fillRect(-4,-28,8,36),n.restore(),!c&&!s){const I=d+h*u,C=k/2+Math.sin(u*6)*4,we=7+u*4;n.beginPath(),n.arc(C,I,we,0,Math.PI*2),n.fillStyle="#ef5350",n.fill(),n.strokeStyle="#fff",n.lineWidth=1.5,n.stroke()}g>0&&(n.fillStyle="rgba(255,244,26,0.15)",n.fillRect(0,y-20,k,40))}function R(){if(a>=J){s=!0,v.disabled=!0,v.classList.add("hidden"),$.classList.remove("hidden"),L.textContent=`경기 종료! 총 ${l}점`;return}c=!1,r=!1,u=.05,p=.48+Math.random()*.35,L.textContent="타이밍에 맞춰 스윙!"}function D(k){var d;if((d=k==null?void 0:k.preventDefault)==null||d.call(k),s||r||c)return;r=!0,g=.25,a+=1,M.textContent=`볼: ${a} / ${J}`;const A=Math.abs(u-N);let b=0,o="헛스윙!";A<=P*.25?(b=6,o="식스! +6"):A<=P*.5?(b=4,o="포! +4"):A<=P*.75?(b=2,o="투런! +2"):A<=P&&(b=1,o="싱글! +1"),l+=b,w.textContent=`득점: ${l}`,L.textContent=o,c=!0,setTimeout(()=>{s||R(),a>=J&&(s=!0,v.disabled=!0,v.classList.add("hidden"),$.classList.remove("hidden"),L.textContent=`경기 종료! 총 ${l}점`)},650)}function j(k){m||(m=k);const A=Math.min(.05,(k-m)/1e3);m=k,!c&&!s&&(u+=p*A,u>1.05&&(c=!0,r=!0,a+=1,M.textContent=`볼: ${a} / ${J}`,L.textContent="놓침!",setTimeout(()=>{r=!1,a>=J?(s=!0,v.disabled=!0,v.classList.add("hidden"),$.classList.remove("hidden"),L.textContent=`경기 종료! 총 ${l}점`):R()},500))),g>0&&(g-=A),q(),x=requestAnimationFrame(j)}function O(){l=0,a=0,s=!1,r=!1,g=0,w.textContent="득점: 0",M.textContent=`볼: 0 / ${J}`,v.disabled=!1,v.classList.remove("hidden"),$.classList.add("hidden"),R()}function H(k){(k.code==="Space"||k.key===" ")&&(k.preventDefault(),D(k))}return T(),R(),x=requestAnimationFrame(j),v.addEventListener("click",D),v.addEventListener("touchstart",D,{passive:!1}),f.addEventListener("pointerdown",D),$.addEventListener("click",O),window.addEventListener("keydown",H),window.addEventListener("resize",T),Vt(e,t,i),()=>{cancelAnimationFrame(x),window.removeEventListener("keydown",H),window.removeEventListener("resize",T)}}function en(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function tn(e,t,i){var l,a;(l=e.querySelector('[data-nav="back"]'))==null||l.addEventListener("click",t),(a=e.querySelector('[data-nav="main"]'))==null||a.addEventListener("click",i)}const nn=["#42a5f5","#ef5350","#ffee58","#66bb6a"],an=4,Se=7;function ln(e,{onBack:t,onMain:i}){let l=0,a=3,r=!1,c=0,u=0;const p={left:!1,right:!1};let g=320,x=420,m={x:0,y:0,w:70,h:12},s={x:0,y:0,r:6,vx:0,vy:0},f=[];e.innerHTML=`
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
      ${en()}
    </div>
  `;const n=e.querySelector("#bo-canvas"),w=n.getContext("2d"),M=e.querySelector("#bo-lives"),L=e.querySelector("#bo-score"),v=e.querySelector("#bo-feedback"),$=e.querySelector("#bo-start");function N(){g=Math.min(320,Math.max(260,e.clientWidth-16||300)),x=Math.round(g*1.3),n.width=g,n.height=x,m.y=x-36,m.w=g*.22}function P(){f=[];const o=4,d=56,h=(g-o*(Se+1))/Se,y=16;for(let I=0;I<an;I++)for(let C=0;C<Se;C++)f.push({x:o+C*(h+o),y:d+I*(y+o),w:h,h:y,color:nn[I],alive:!0})}function T(){m.x=(g-m.w)/2,s.x=g/2,s.y=m.y-20;const o=-Math.PI/3+Math.random()*(Math.PI/3),d=Math.min(g,x)*.45;s.vx=Math.sin(o)*d,s.vy=-Math.abs(Math.cos(o)*d)}function q(){M.textContent=`생명: ${"●".repeat(a)}${"○".repeat(3-a)}`,L.textContent=`점수: ${String(l).padStart(5,"0")}`}function R(){w.fillStyle="#1a1030",w.fillRect(0,0,g,x);for(const o of f)o.alive&&(w.fillStyle=o.color,D(w,o.x,o.y,o.w,o.h,4),w.fill());w.fillStyle="#fff",D(w,m.x,m.y,m.w,m.h,6),w.fill(),w.beginPath(),w.arc(s.x,s.y,s.r,0,Math.PI*2),w.fillStyle="#fff",w.fill()}function D(o,d,h,y,I,C){o.beginPath(),o.moveTo(d+C,h),o.arcTo(d+y,h,d+y,h+I,C),o.arcTo(d+y,h+I,d,h+I,C),o.arcTo(d,h+I,d,h,C),o.arcTo(d,h,d+y,h,C),o.closePath()}function j(o){u||(u=o);const d=Math.min(.033,(o-u)/1e3);if(u=o,r){const h=g*1.1*d;if(p.left&&(m.x-=h),p.right&&(m.x+=h),m.x=Math.max(0,Math.min(g-m.w,m.x)),s.x+=s.vx*d,s.y+=s.vy*d,s.x<s.r&&(s.x=s.r,s.vx*=-1),s.x>g-s.r&&(s.x=g-s.r,s.vx*=-1),s.y<s.r&&(s.y=s.r,s.vy*=-1),s.vy>0&&s.y+s.r>=m.y&&s.y-s.r<=m.y+m.h&&s.x>=m.x&&s.x<=m.x+m.w){s.y=m.y-s.r;const y=(s.x-(m.x+m.w/2))/(m.w/2),I=Math.hypot(s.vx,s.vy)*1.02,C=y*1.1;s.vx=Math.sin(C)*I,s.vy=-Math.abs(Math.cos(C)*I)}for(const y of f)if(y.alive&&s.x+s.r>y.x&&s.x-s.r<y.x+y.w&&s.y+s.r>y.y&&s.y-s.r<y.y+y.h){y.alive=!1,l+=10,q();const I=s.x+s.r-y.x,C=y.x+y.w-(s.x-s.r),we=s.y+s.r-y.y,at=y.y+y.h-(s.y-s.r),it=Math.min(I,C),lt=Math.min(we,at);it<lt?s.vx*=-1:s.vy*=-1;break}f.every(y=>!y.alive)&&(r=!1,v.textContent=`클리어! 점수 ${l}`),s.y>x+20&&(a-=1,q(),a<=0?(r=!1,v.textContent=`게임 오버 · ${l}점`):(T(),v.textContent="생명 -1! 계속…"))}R(),c=requestAnimationFrame(j)}function O(){l=0,a=3,r=!0,P(),T(),q(),v.textContent="화이팅!"}function H(o){const d=n.getBoundingClientRect(),h=(o-d.left)/d.width*g;m.x=Math.max(0,Math.min(g-m.w,h-m.w/2))}function k(o){var h;o.preventDefault();const d=((h=o.touches)==null?void 0:h[0])||o;H(d.clientX)}function A(o){(o.key==="ArrowLeft"||o.key==="a"||o.key==="A")&&(p.left=!0),(o.key==="ArrowRight"||o.key==="d"||o.key==="D")&&(p.right=!0)}function b(o){(o.key==="ArrowLeft"||o.key==="a"||o.key==="A")&&(p.left=!1),(o.key==="ArrowRight"||o.key==="d"||o.key==="D")&&(p.right=!1)}return N(),P(),T(),q(),R(),c=requestAnimationFrame(j),$.addEventListener("click",O),n.addEventListener("pointerdown",k),n.addEventListener("pointermove",o=>{(o.buttons||o.pressure>0)&&k(o)}),n.addEventListener("touchstart",k,{passive:!1}),n.addEventListener("touchmove",k,{passive:!1}),window.addEventListener("keydown",A),window.addEventListener("keyup",b),window.addEventListener("resize",N),tn(e,t,i),()=>{cancelAnimationFrame(c),window.removeEventListener("keydown",A),window.removeEventListener("keyup",b),window.removeEventListener("resize",N)}}const F=3;function rn(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function sn(e,t,i){var l,a;(l=e.querySelector('[data-nav="back"]'))==null||l.addEventListener("click",t),(a=e.querySelector('[data-nav="main"]'))==null||a.addEventListener("click",i)}function on(e,{onBack:t,onMain:i}){let l=320,a=420,r=0,c=0,u=!1,p=!1;const g={left:!1,right:!1};let x=0;const m={lane:0,progress:0,lap:0,color:"#4dffd4"},s={lane:.2,progress:.02,lap:0,color:"#ff4fd8",target:0};e.innerHTML=`
    <div class="game-panel">
      <h2 class="game-title">레이싱 vs AI</h2>
      <p class="game-desc">드래그/←→로 조향. 먼저 ${F}바퀴!</p>
      <div class="race-stats">
        <span id="race-you">YOU 0/${F}</span>
        <span id="race-ai">AI 0/${F}</span>
      </div>
      <canvas id="race-canvas" class="game-canvas race-canvas" width="320" height="420"></canvas>
      <button type="button" class="btn-go" id="race-start">시작 / 다시하기</button>
      <p class="game-feedback" id="race-feedback">시작을 누르세요!</p>
      ${rn()}
    </div>
  `;const f=e.querySelector("#race-canvas"),n=f.getContext("2d"),w=e.querySelector("#race-you"),M=e.querySelector("#race-ai"),L=e.querySelector("#race-feedback"),v=e.querySelector("#race-start");function $(b,o=0){const d=l/2,h=a/2,y=l*.36-o,I=a*.38-o,C=b*Math.PI*2-Math.PI/2;return{x:d+Math.cos(C)*y,y:h+Math.sin(C)*I,a:C}}function N(){l=Math.min(320,Math.max(260,e.clientWidth-16||300)),a=Math.round(l*1.3),f.width=l,f.height=a}function P(){w.textContent=`YOU ${Math.min(m.lap,F)}/${F}`,M.textContent=`AI ${Math.min(s.lap,F)}/${F}`}function T(b,o=14){const d=$(b.progress,8+b.lane*14),h=$((b.progress+.01)%1,8+b.lane*14),y=Math.atan2(h.y-d.y,h.x-d.x);n.save(),n.translate(d.x,d.y),n.rotate(y),n.fillStyle=b.color,n.fillRect(-o,-o*.45,o*2,o*.9),n.fillStyle="#111",n.fillRect(o*.2,-o*.3,o*.5,o*.6),n.restore()}function q(){n.fillStyle="#1b5e20",n.fillRect(0,0,l,a),n.beginPath();for(let d=0;d<=64;d++){const h=$(d/64,-18);d===0?n.moveTo(h.x,h.y):n.lineTo(h.x,h.y)}n.closePath(),n.fillStyle="#37474f",n.fill(),n.beginPath();for(let d=0;d<=64;d++){const h=$(d/64,28);d===0?n.moveTo(h.x,h.y):n.lineTo(h.x,h.y)}n.closePath(),n.fillStyle="#2e7d32",n.fill(),n.strokeStyle="rgba(255,255,255,0.35)",n.setLineDash([8,10]),n.lineWidth=2,n.beginPath();for(let d=0;d<=64;d++){const h=$(d/64,6);d===0?n.moveTo(h.x,h.y):n.lineTo(h.x,h.y)}n.stroke(),n.setLineDash([]);const b=$(0,-16),o=$(0,26);n.strokeStyle="#fff",n.lineWidth=4,n.beginPath(),n.moveTo(b.x,b.y),n.lineTo(o.x,o.y),n.stroke(),T(s,12),T(m,13)}function R(b,o,d){const h=b.progress;b.progress+=o*d,b.progress>=1&&(b.progress-=1,b.lap+=1),h>.9&&b.progress<.1&&b.lap}function D(b){c||(c=b);const o=Math.min(.05,(b-c)/1e3);if(c=b,u&&!p){let d=x;g.left&&(d-=1),g.right&&(d+=1),d=Math.max(-1,Math.min(1,d)),m.lane+=d*2.2*o,m.lane=Math.max(-1,Math.min(1,m.lane)),s.target+=(Math.random()-.5)*1.5*o,s.target=Math.max(-.8,Math.min(.8,s.target)),s.lane+=(s.target-s.lane)*2*o;const h=.18+(1-Math.abs(m.lane)*.08)*.04,y=.175+Math.sin(b/1100)*.012,I=m.lap,C=s.lap;R(m,h,o),R(s,y,o),(m.lap!==I||s.lap!==C)&&P(),m.lap>=F?(p=!0,u=!1,L.textContent="승리! 당신이 먼저 3바퀴!"):s.lap>=F&&(p=!0,u=!1,L.textContent="패배… AI가 먼저 들어왔습니다.")}q(),r=requestAnimationFrame(D)}function j(){m.lane=0,m.progress=0,m.lap=0,s.lane=.25,s.progress=.01,s.lap=0,s.target=0,p=!1,u=!0,P(),L.textContent="달려라!"}function O(b){var y;b.preventDefault();const o=((y=b.touches)==null?void 0:y[0])||b,d=f.getBoundingClientRect();x=((o.clientX-d.left)/d.width-.5)*2}function H(){x=0}function k(b){(b.key==="ArrowLeft"||b.key==="a"||b.key==="A")&&(g.left=!0),(b.key==="ArrowRight"||b.key==="d"||b.key==="D")&&(g.right=!0)}function A(b){(b.key==="ArrowLeft"||b.key==="a"||b.key==="A")&&(g.left=!1),(b.key==="ArrowRight"||b.key==="d"||b.key==="D")&&(g.right=!1)}return N(),P(),q(),r=requestAnimationFrame(D),v.addEventListener("click",j),f.addEventListener("pointerdown",O),f.addEventListener("pointermove",b=>{b.buttons&&O(b)}),f.addEventListener("pointerup",H),f.addEventListener("pointerleave",H),f.addEventListener("touchstart",O,{passive:!1}),f.addEventListener("touchmove",O,{passive:!1}),f.addEventListener("touchend",H),window.addEventListener("keydown",k),window.addEventListener("keyup",A),window.addEventListener("resize",N),sn(e,t,i),()=>{cancelAnimationFrame(r),window.removeEventListener("keydown",k),window.removeEventListener("keyup",A),window.removeEventListener("resize",N)}}const S=document.getElementById("app");let B=null,Y=null,_=null,z=null,je=!1;const He=new Set(["rest","game-dart","game-cricket","game-breakout","game-race","admin"]),cn={login:fn,main:mn,help:bn,grade:pn,subject:kn,calculator:wn,rest:vn,admin:gn,"game-dart":()=>me("dart"),"game-cricket":()=>me("cricket"),"game-breakout":()=>me("breakout"),"game-race":()=>me("race")};dn();function dn(){vt().finally(()=>{E(We()?"main":"login")})}function E(e,t={}){z&&(z(),z=null),je&&!He.has(e)&&At(),e!=="login"&&!We()&&(e="login",t={});const i=cn[e];i&&(S.innerHTML="",i(t),je=He.has(e),window.scrollTo(0,0))}function Q(e){e.querySelectorAll("[data-action]").forEach(t=>{t.addEventListener("click",()=>un(t.dataset.action))})}function un(e){if(e==="main"){B=null,Y=null,_=null,E("main");return}if(e==="grade"){Y=null,_=null,E("grade");return}if(e==="help"&&E("help"),e==="rest"&&E("rest"),e==="admin"){re()&&E("admin");return}if(e==="subject"&&E("subject",{grade:B}),e==="game-dart"&&E("game-dart"),e==="game-cricket"&&E("game-cricket"),e==="game-breakout"&&E("game-breakout"),e==="game-race"&&E("game-race"),e.startsWith("pick-grade-")){B=Number(e.replace("pick-grade-","")),Y=null,_=null,E("subject",{grade:B});return}if(e.startsWith("pick-subject-")){const t=decodeURIComponent(e.replace("pick-subject-",""));Y=t;const i=Ye(B,t);_=(i.length===1,i[0]),E("calculator",{grade:B,subject:t,semester:_});return}e.startsWith("pick-semester-")&&(_=Number(e.replace("pick-semester-","")),E("calculator",{grade:B,subject:Y,semester:_}))}function fn(){S.innerHTML=K(`
    <div class="stack-screen login-screen">
      ${ee("globe globe-large")}
      <h1 class="login-title">SCHOOL METRICS</h1>
      <p class="login-desc">해연중 계정으로 로그인하세요</p>
      <form id="login-form" class="login-form">
        <label class="admin-field">
          학교 계정
          <input
            type="email"
            id="login-email"
            autocomplete="username"
            inputmode="email"
            placeholder="20261201@haeyeon.ms.kr"
            required
          />
        </label>
        <p class="muted login-hint">형식: (년도4자리)(학번4자리)@haeyeon.ms.kr</p>
        <p class="warn hidden" id="login-error"></p>
        <button type="submit" class="btn-go">로그인</button>
      </form>
      ${te(U.footer)}
    </div>
  `);const e=S.querySelector("#login-form"),t=S.querySelector("#login-error"),i=S.querySelector("#login-email");e.addEventListener("submit",l=>{l.preventDefault();const a=bt(i.value);if(!a.ok){t.textContent=a.error,t.classList.remove("hidden");return}X({type:"user_login",message:`로그인: ${a.user.account}`,account:a.user.account}),E("main")})}function mn(){const e=It();S.innerHTML=K(`
    <div class="main-screen">
      <button type="button" class="help-btn" data-action="help" aria-label="앱 정보">?</button>
      <div class="main-header">
        <div class="title-block">
          ${Gt()}
          <h1 class="app-title">${U.title}</h1>
        </div>
        <p class="app-subtitle">${U.subtitle}</p>
        <p class="main-quote">"${e}"</p>
      </div>
      <div class="main-body">
        <p class="login-user muted">${Ge()||""}</p>
        <button type="button" class="go-btn" data-action="grade" aria-label="시작">
          ${Kt()}
          <span class="go-text">GO</span>
        </button>
      </div>
      <p class="main-footer">${U.footer}</p>
    </div>
  `),Q(S)}function bn(){S.innerHTML=K(`
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
          <li>서로 다른 과목 ${ge}개 계산 시 미니게임 1회 해금</li>
          <li>미니게임 이용 후에는 다시 잠금</li>
        </ul>
        <p class="muted">제작: ${U.creator}</p>
        ${re()?'<p class="success"><button type="button" class="link-btn" data-action="admin">관리자 패널 열기</button></p>':""}
      </div>
      ${ne()}
      <button type="button" class="admin-secret-trigger" id="admin-secret" title="">
        ${U.subtitle}
      </button>
    </div>
  `),Q(S);const e=S.querySelector("#admin-secret");e==null||e.addEventListener("click",()=>{if(re()){E("admin");return}const t=window.prompt("관리자 비밀번호를 입력하세요");t!=null&&(pt(t)?(window.alert("관리자 모드가 켜졌습니다."),E("admin")):window.alert("비밀번호가 올바르지 않습니다."))})}function gn(){var u,p,g,x,m,s;if(!re()){E("help");return}const e=W(),t=Lt(),i=e.standardScale,l=e.artsScale,a=t.configured?`Firebase 연결됨 (${t.projectId})`:"Firebase 미설정 — src/firebase-config.js 에 키를 넣어주세요";S.innerHTML=K(`
    <div class="stack-screen admin-screen">
      <h2 class="screen-title">관리자 모드</h2>
      <p class="screen-desc">기기 ID: ${Ae()}</p>
      <p class="muted admin-note">${a}</p>
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
          ${i.map((f,n)=>`
            <label>${f.letter}
              <input type="number" data-scale="std" data-i="${n}" data-letter="${f.letter}" min="0" max="100" value="${f.min}" />
            </label>
          `).join("")}
        </div>
        <h4>예체능 등급 기준 (점 이상)</h4>
        <div class="admin-scale" id="adm-arts">
          ${l.map((f,n)=>`
            <label>${f.letter}
              <input type="number" data-scale="arts" data-i="${n}" data-letter="${f.letter}" min="0" max="100" value="${f.min}" />
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
  `),Q(S);let r=Ie();async function c(){const f=S.querySelector("#adm-logs"),n=S.querySelector("#adm-log-count");f&&(f.innerHTML='<p class="muted">불러오는 중…</p>');const w=await yt();if(r=w.logs,n&&(n.textContent=`(${r.length} · ${w.source}${w.error?" · 오류":""})`),!!f){if(r.length===0){f.innerHTML='<p class="muted">아직 기록이 없습니다.</p>';return}f.innerHTML=r.slice(0,120).map(M=>`
      <article class="admin-log-item">
        <header>${fe(M.account||M.deviceId||"")} · ${fe(M.type)} · ${hn(M.at)}</header>
        <p>${fe(M.message||"")}</p>
        ${M.detail?`<pre>${fe(typeof M.detail=="string"?M.detail:JSON.stringify(M.detail,null,0))}</pre>`:""}
      </article>
    `).join("")}}c(),(u=S.querySelector("#adm-refresh-logs"))==null||u.addEventListener("click",()=>c()),(p=S.querySelector("#adm-save"))==null||p.addEventListener("click",async()=>{var L,v;const f=Number((L=S.querySelector("#adm-unlock"))==null?void 0:L.value),n=!!((v=S.querySelector("#adm-free-games"))!=null&&v.checked),w=[...S.querySelectorAll('[data-scale="std"]')].map($=>({letter:$.dataset.letter,min:Number($.value)||0})),M=[...S.querySelectorAll('[data-scale="arts"]')].map($=>({letter:$.dataset.letter,min:Number($.value)||0}));wt({restUnlockUses:Number.isFinite(f)&&f>0?f:8,freeGames:n,standardScale:w,artsScale:M}),window.alert(G()?"설정을 저장했고 클라우드에도 올렸습니다.":"설정을 이 기기에 저장했습니다. (Firebase 미설정)"),E("admin")}),(g=S.querySelector("#adm-feedback-save"))==null||g.addEventListener("click",()=>{var n,w;const f=(w=(n=S.querySelector("#adm-feedback"))==null?void 0:n.value)==null?void 0:w.trim();if(!f){window.alert("내용을 입력하세요.");return}X({type:"game_feedback",message:f}),window.alert("피드백을 저장했습니다."),E("admin")}),(x=S.querySelector("#adm-export"))==null||x.addEventListener("click",async()=>{const f=$t(r);try{await navigator.clipboard.writeText(f),window.alert("기록이 클립보드에 복사되었습니다.")}catch{window.prompt("아래 내용을 복사하세요",f)}}),(m=S.querySelector("#adm-clear-logs"))==null||m.addEventListener("click",async()=>{window.confirm("로컬+클라우드 활동 기록을 비울까요?")&&(await St({cloud:!0}),E("admin"))}),(s=S.querySelector("#adm-logout"))==null||s.addEventListener("click",()=>{kt(),window.alert("관리자 모드가 종료되었습니다."),E("main")})}function fe(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function hn(e){try{const t=new Date(e);return`${t.getMonth()+1}/${t.getDate()} ${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`}catch{return e}}function pn(){const e=ce(),t=Je();S.innerHTML=K(`
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
      ${te(U.subtitle)}
    </div>
  `),Q(S)}function kn({grade:e}){if(!e||!se(e)){E("grade");return}B=e;const t=se(e),i=Tt(e);S.innerHTML=K(`
    <div class="stack-screen ${tt(e)}">
      ${ee()}
      <h2 class="screen-title">${t.label} 과목 선택</h2>
      ${t.note?`<p class="screen-note">${t.note}</p>`:""}
      ${Ze()}
      <div class="subject-list">
        ${i.map(l=>`<button type="button" class="subject-btn" data-action="pick-subject-${encodeURIComponent(l)}">${l}</button>`).join("")}
      </div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="grade">학년 선택으로</button>
        ${ne()}
      </div>
      ${te(U.subtitle)}
    </div>
  `),Q(S),et(S)}function wn({grade:e,subject:t,semester:i}){if(!e||!t||!i){E("subject",{grade:B});return}B=e,Y=t,_=i;const l=se(e),a=Ye(e,t),r=qt(e,t,i),c=Oe(e,t,i),u={},p=a.length>1?`<div class="semester-tabs">
          ${a.map(s=>`<button type="button" class="semester-tab ${s===i?"active":""}" data-action="pick-semester-${s}">${Oe(e,t,s)}</button>`).join("")}
        </div>`:`<p class="semester-only">${c}</p>`;S.innerHTML=K(`
    <div class="stack-screen calculator-screen ${tt(e)}">
      ${ee("globe globe-small")}
      <h2 class="screen-title subject-title">${t}</h2>
      <p class="screen-desc">${l.label} · ${c}${Pe(t)?" · 예체능(A·B·C)":" · 일반(A~E)"}</p>
      ${Ze(t)}
      ${p}
      <form id="calc-form" class="calc-form"></form>
      <button type="submit" form="calc-form" class="btn-calc">계산하기</button>
      <div id="calc-result" class="calc-result hidden"></div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="subject">과목 선택으로</button>
        ${ne()}
      </div>
      ${te(U.subtitle)}
    </div>
  `);const g=S.querySelector("#calc-form");let x="";for(const s of r){if(s.kind!==x){x=s.kind;const n=document.createElement("h3");n.className="section-heading",n.textContent=s.kind==="exam"?"지필고사":"수행평가",g.appendChild(n)}const f=document.createElement("label");f.className="score-row",f.innerHTML=`
      <span>${s.label} <em>${s.weight}%</em></span>
      <input type="number" min="0" max="100" step="0.1" inputmode="decimal"
        name="${s.key}" placeholder="점수" />
    `,g.appendChild(f)}const m=S.querySelector("#calc-result");g.addEventListener("submit",s=>{var N,P;s.preventDefault();const f=new FormData(g);for(const T of r)u[T.key]=f.get(T.key);const n=Wt(r,u,t);if(!n){m.classList.remove("hidden"),m.innerHTML='<p class="warn">최소 1개 이상 점수를 입력하세요.</p>';return}const w=Mt(t);X({type:"calc",message:`${e}학년 ${t} (${c}) → ${n.rounded}점 ${ie(n.letter)}`,detail:{grade:e,subject:t,semester:i,scores:u,rounded:n.rounded,letter:n.letter,average:n.average}});let M="";((N=n.needed)==null?void 0:N.needed)!=null?M=`<p>상위 <strong>${ie(n.needed.targetLetter)}</strong>까지 남은 항목 평균 <strong>${n.needed.needed}점</strong> 이상</p>`:(P=n.needed)!=null&&P.message&&(M=`<p>${n.needed.message}</p>`);let L="";if(n.projection.remainingCount>0&&n.letter===n.projLetter){const T=ie(n.letter);let q="";n.confirmMin&&(n.confirmMin.minScore<=0?q=`<p>남은 항목이 <strong>0점</strong>이어도 ${T} 유지</p>`:q=`<p>남은 항목 각각 최소 <strong>${n.confirmMin.minScore}점</strong> 이상이면 ${T} 유지</p>`),L=`
        <p><strong>${T} 확정입니다.</strong></p>
        ${q}
      `}let v="";jt(n)&&(v=`<p class="cheer-msg">${Ht()}</p>`);let $="";w.justUnlocked?$=`<p class="success">서로 다른 과목 ${ge}개 달성! 학년 선택에서 휴식 미니게임 이용</p>`:ce()?$='<p class="success">휴식 미니게임 이용 가능 (학년 선택 화면)</p>':w.isNew?$=`<p class="muted">${Je()}</p>`:$='<p class="muted">이미 계산한 과목입니다. 다른 과목을 계산하면 해금에 가까워져요.</p>',m.classList.remove("hidden"),m.innerHTML=`
      <h3>${t} 결과</h3>
      <p>총점(반올림) <strong>${n.rounded}점</strong> · <strong>${ie(n.letter)}</strong></p>
      <p class="muted">가중 평균 ${n.average.toFixed(1)}점</p>
      <p>남은 항목 100점 시 <strong>${n.projRounded}점</strong> · <strong>${ie(n.projLetter)}</strong></p>
      ${L}
      ${v}
      ${M}
      ${$}
    `}),Q(S),et(S)}function vn(){if(!ce()){E("grade");return}S.innerHTML=K(`
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
      ${te(U.subtitle)}
    </div>
  `),Q(S)}function me(e){if(!ce()){E("grade");return}X({type:"game_open",message:`미니게임 시작: ${e}${pe()?" (관리자)":""}`,detail:{type:e}}),S.innerHTML=K('<div id="game-root"></div>',"game-screen");const t=S.querySelector("#game-root"),i={onBack:()=>E("rest"),onMain:()=>{B=null,Y=null,_=null,E("main")}};e==="dart"?z=Xt(t,i)??null:e==="cricket"?z=Zt(t,i)??null:e==="breakout"?z=ln(t,i)??null:e==="race"&&(z=on(t,i)??null)}
