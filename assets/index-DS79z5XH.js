(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=s(a);fetch(a.href,l)}})();const ge=8,_={title:"SCHOOL METRICS",subtitle:"철저한 내신관리 시스템",footer:"for 해연중 학생들",creator:"2210 박민호"},ae={apiKey:"AIzaSyB7YJBfYa9zGnUvLD4DFgR5KLiNKuluHJM",authDomain:"school-metrics-fdee3.firebaseapp.com",projectId:"school-metrics-fdee3",storageBucket:"school-metrics-fdee3.firebasestorage.app",messagingSenderId:"378255554733",appId:"1:378255554733:web:01b06dca5b5307860eae24",measurementId:"G-0BL416S3QD"};function W(){return!!(ae.apiKey&&ae.projectId&&ae.appId)}const tt="https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js",V="https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";let te=null,de=null;async function se(){return W()?te||(de||(de=(async()=>{const{initializeApp:e,getApps:t}=await import(tt),{getFirestore:s}=await import(V),i=t().length?t()[0]:e(ae);return te=s(i),te})().catch(e=>(console.warn("[firebase] init failed",e),de=null,te=null,null))),de):null}async function nt(e){const t=await se();if(!t)return null;const{collection:s,addDoc:i,serverTimestamp:a}=await import(V),l={...e};return Object.keys(l).forEach(u=>{l[u]===void 0&&delete l[u]}),(await i(s(t,"activityLogs"),{...l,createdAt:a()})).id}async function at(e=200){const t=await se();if(!t)return[];const{collection:s,query:i,orderBy:a,limit:l,getDocs:c}=await import(V),u=i(s(t,"activityLogs"),a("at","desc"),l(e));return(await c(u)).docs.map(g=>({id:g.id,...g.data()}))}async function it(){const e=await se();if(!e)return 0;const{collection:t,getDocs:s,deleteDoc:i,query:a,limit:l}=await import(V);let c=0;for(;;){const u=await s(a(t(e,"activityLogs"),l(100)));if(u.empty||(await Promise.all(u.docs.map(h=>i(h.ref))),c+=u.size,u.size<100))break}return c}async function lt(e){const t=await se();if(!t)return!1;const{doc:s,setDoc:i,serverTimestamp:a}=await import(V),l={...e};return Object.keys(l).forEach(c=>{l[c]===void 0&&delete l[c]}),await i(s(t,"adminSettings","global"),{...l,updatedAt:a()}),!0}async function st(){const e=await se();if(!e)return null;const{doc:t,getDoc:s}=await import(V),i=await s(t(e,"adminSettings","global"));if(!i.exists())return null;const a=i.data();return delete a.updatedAt,a}const rt="73357442",Le="schoolMetricsAdminSession",xe="schoolMetricsAdminSettings",me="schoolMetricsActivityLog",De="schoolMetricsDeviceId",ot=500,Q={restUnlockUses:ge,freeGames:!0,standardScale:[{letter:"A",min:90},{letter:"B",min:80},{letter:"C",min:70},{letter:"D",min:60},{letter:"E",min:0}],artsScale:[{letter:"A",min:80},{letter:"B",min:60},{letter:"C",min:0}]};function Me(e,t){try{const s=localStorage.getItem(e);return s?JSON.parse(s):t}catch{return t}}function Ee(e,t){localStorage.setItem(e,JSON.stringify(t))}function Ae(){let e=localStorage.getItem(De);return e||(e=`dev-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,localStorage.setItem(De,e)),e}function ie(){return sessionStorage.getItem(Le)==="1"}function ct(e){return String(e)===rt?(sessionStorage.setItem(Le,"1"),Z({type:"admin_login",message:"관리자 로그인"}),!0):!1}function dt(){sessionStorage.removeItem(Le)}function G(){const e=Me(xe,{});return{...Q,...e,standardScale:e.standardScale||Q.standardScale,artsScale:e.artsScale||Q.artsScale}}function ut(e){const t={...G(),...e};return Ee(xe,t),Z({type:"admin_settings",message:"관리자 설정 변경",detail:e}),W()&&lt(t).catch(s=>console.warn("[firebase] settings save",s)),t}async function ft(){if(!W())return G();try{const e=await st();if(e&&typeof e=="object"){const t={...Q,...e,standardScale:e.standardScale||Q.standardScale,artsScale:e.artsScale||Q.artsScale};return Ee(xe,t),t}}catch(e){console.warn("[firebase] settings load",e)}return G()}function pe(){return Number(G().restUnlockUses)||ge}function he(){return ie()&&G().freeGames!==!1}function Z(e){const t={id:`${Date.now()}-${Math.random().toString(36).slice(2,7)}`,at:new Date().toISOString(),deviceId:Ae(),...e},s=Me(me,[]);return s.unshift(t),Ee(me,s.slice(0,ot)),W()&&nt(t).catch(i=>console.warn("[firebase] log",i)),t}function Ce(){return Me(me,[])}async function bt(){const e=Ce();if(!W())return{source:"local",logs:e};try{const t=await at(300),s=new Map;for(const a of[...t,...e]){const l=a.id||`${a.at}-${a.deviceId}-${a.type}-${a.message}`;s.has(l)||s.set(l,a)}return{source:"firebase",logs:[...s.values()].sort((a,l)=>String(l.at).localeCompare(String(a.at)))}}catch(t){return console.warn("[firebase] fetch logs",t),{source:"local-fallback",logs:e,error:String(t.message||t)}}}async function mt({cloud:e=!0}={}){if(localStorage.removeItem(me),e&&W())try{await it()}catch(t){console.warn("[firebase] clear",t)}Z({type:"admin_clear_logs",message:"활동 로그 초기화"})}function gt(e=Ce()){return JSON.stringify({exportedAt:new Date().toISOString(),deviceId:Ae(),firebase:W(),settings:G(),logs:e},null,2)}function pt(){return{configured:W(),projectId:ae.projectId||""}}const Ie="schoolMetricsUniqueSubjects";function Ue(){try{const e=localStorage.getItem(Ie),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch{return[]}}function ht(e){localStorage.setItem(Ie,JSON.stringify(e))}function kt(e){const t=pe(),s=Ue(),i=!s.includes(e);return i&&(s.push(e),ht(s)),{isNew:i,uniqueCount:s.length,justUnlocked:i&&s.length>=t}}function Te(){return Ue().length}function re(){return he()?!0:Te()>=pe()}function wt(){return Math.max(0,pe()-Te())}function vt(){he()||localStorage.removeItem(Ie)}function Fe(){const e=pe(),t=Te(),s=wt();return he()?"관리자 모드: 미니게임 자유 이용":re()?`서로 다른 과목 ${t}개 달성! 휴식 미니게임 이용 가능`:`서로 다른 과목 ${s}개 더 계산하면 해금 (${t}/${e})`}const ve=["희망은 좋은 것이다. 어쩌면 가장 좋은 것일지도. — 《쇼생크 탈출》","해야 한다, 아니면 안 된다. 그 중간은 없다. — 《스타워즈》","과거는 과거일 뿐이야. 배울 수만 있다면. — 《라이온 킹》","가장 어두운 시간은 해가 뜨기 직전이다. — 《어벤져스: 엔드게임》","세상에서 중요한 건 내가 누구냐가 아니라, 내가 뭘 하느냐다. — 《배트맨: 다크나이트》","우리에게 주어진 시간을 어떻게 쓸지만 결정하면 된다. — 《반지의 제왕》","아주 작은 존재도 미래를 바꿀 수 있다. — 《반지의 제왕》","자유는 아무 대가 없이 오지 않는다. — 《브레이브하트》","지금 이 순간을 잡아라. — 《데드 포엇 소사이어티》","무엇이든 할 수 있다. — 《쿵푸 판다》","그냥 계속 헤엄쳐. — 《니모를 찾아서》","모든 걸 시도해 봐. — 《주토피아》","두려움을 없애는 방법은 그것과 마주하는 것이다. — 《인사이드 아웃》","뜻이 있는 곳에 길이 있다. — 《아바타》","비가 그친 뒤에는 반드시 맑은 하늘이 온다. — 《날씨의 아이》","나는 이 세계를 이해할 수 없어. 그래도 계속한다. — 《록키》","시련이 없었다면 챔피언도 없다. — 《록키》","인생은 수레바퀴와 같아. 항상 앞으로 나아가야 한다. — 《니모를 찾아서》","이겨야 한다. 어떻게든. — 《친구》","꿈은 거짓말이 아니다. 반드시 이루어질 내일이다. — 《드림하이》","포기하면 그 순간 게임 끝이야, 인생도 마찬가지다. — 《슬램덩크》","죽을 때 후회 없는 인생을 살아라. — 《원피스》","약한 것은 죄가 아니다. 약한 채로 있으면 안 될 뿐. — 《귀멸의 칼날》","막을 때까지 싸워라. — 《진격의 거인》","노력은 배신하지 않는다. — 《하이큐!!》","패배는 패배하지 않는 것보다 낫다. — 《하이큐!!》","시선을 돌리지 마. 앞만 봐. — 《센과 치히로의 행방불명》","살아있는 한 힘을 내라. — 《하울의 움직이는 성》","바람이 분다. 견뎌야 한다. — 《바람의 나라》","상대는 나 자신이다. — 《초속 5센티미터》","포기하지 말 것. 내일이 있으니. — 《드래곤볼》","사람은 누구나 다시 태어날 수 있다. — 《바람의 나라》","아는 것이 힘이다. — 프랜시스 베이컨","천 리 길도 한 걸음부터. — 노자","배우고 또 배우면 어찌 기쁘지 아니하랴. — 공자","백번 듣는 것보다 한 번 보는 것이 낫다. — 공자","세 사람이 길을 가면 반드시 나의 스승이 있다. — 공자","하늘은 큰 뜻을 품은 자에게 먼저 고생을 시킨다. — 맹자","독서는 마음의 양식이다. — 키케로","하늘은 스스로 돕는 자를 돕는다. — 소포클레스","그대가 갈망하는 것을 따르라. — 랄프 왔도 에머슨","겁쟁이는 죽기 전에 여러 번 죽는다. 용감한 자는 한 번만 죽는다. — 셰익스피어","열정 없이는 위대한 것은 이루어지지 않는다. — 게오르크 빌헬름 프리드리히 헤겔","나는 나의 운명을 사랑한다. — 프리드리히 니체","오늘 할 일을 내일로 미루지 마라. — 벤자민 프랭클린","천재는 1%의 영감과 99%의 땀이다. — 토마스 에디슨","실패는 성공의 어머니이다. — 토마스 에디슨","시간은 금이다. — 벤자민 프랭클린","어리석은 자는 경험에서 아무것도 배우지 않는다. — 벤자민 프랭클린","실용적인 것이 가장 시적인 것이다. — 벤자민 프랭클린","깊은 생각 없는 독서는 낮잠과 같다. — 프랜시스 베이컨","인생은 속도가 아니라 방향이다. — 에이브러햄 링컨","성공은 최종적인 것이 아니며, 실패는 치명적인 것이 아니다. — 윈스턴 처칠","가장 위대한 영광은 넘어지지 않는 것이 아니라, 넘어질 때마다 일어서는 것이다. — 넬슨 만델라","용기는 두려움의 부재가 아니라, 두려움에도 행동하는 것이다. — 넬슨 만델라","네가 할 수 있다고 믿든 못 한다고 믿든, 네 말이 맞다. — 헨리 포드","성공의 비결은 시작하는 것이다. — 마크 트웨인","행운은 준비된 자에게 찾아온다. — 루이 파스퇴르","한계란 대부분 마음속에 있는 환상일 뿐이다. — 무하마드 알리","나는 세계 챔피언이다. 내가 그렇다고 말하기 전부터. — 무하마드 알리","항상 갈망하고, 우직하게 나아가라. — 스티브 잡스","당신의 시간은 제한되어 있다. 다른 사람의 인생을 살며 낭비하지 마라. — 스티브 잡스","오늘 나는 죽었다면 무엇을 후회하겠는가. — 스티브 잡스","죽고자 하면 살 것이요, 살고자 하면 죽을 것이니라. — 이순신","한 번도 실수한 적 없는 사람은 새로운 것을 시도한 적이 없는 사람이다. — 알버트 아인슈타인","네가 정말 소중히 여기는 것에 시간을 써라. — 《어린 왕자》","꽃을 단 한 송이라도 내가 직접 가꾸면, 내 세계에 엇비슷한 시간이 흐른다. — 《어린 왕자》","세상에서 가장 강한 사람은 스스로를 이기는 사람이다. — 무라카미 하루키","빛을 보고자 한다면 어둠을 견뎌야 한다. — 무라카미 하루키","사람은 마음먹은 것은 다 이룬다. — 《바보》","고통 없이는 얻는 것도 없다. — 라틴 격언","로마는 하루아침에 이루어지지 않았다. — 속담","연습이 완벽을 만든다. — 속담","배움에는 왕도가 없다. — 유클리드","작은 일에 충실하라. 그곳에 네 힘이 있다. — 루드야드 키플링","가장 큰 위험은 위험을 감수하지 않는 것이다. — 마크 주커버그","인생은 짧고, 예술은 길다. — 히포크라테스","삶을 살아가는 가장 좋은 복수는 성공하는 것이다. — 프랭크 시나트라","피할 수 없으면 즐겨라. — 로버트 엘리엇","포기하지 않는 한, 늦었다고 생각할 때가 가장 빠른 때다. — 속담","꾸준함은 재능을 이긴다. — 속담","반복은 지루하지만, 반복 없는 실력은 환상이다. — 속담","오늘의 노력이 내일의 실력이 된다. — 속담","지금이 가장 빠른 시작이다. — 속담","목표 없는 공부는 방향 잃은 배와 같다. — 속담","모르는 것을 아는 것이 배움의 시작이다. — 속담","실력은 하루아침에 생기지 않는다. — 속담","쉬는 것도 실력이다. 번아웃을 조심하자. — 속담","비교하지 말고, 어제의 나와 겨루자. — 속담","이해가 안 되면 다시 보면 된다. 반복이 답이다. — 속담","시험은 결과일 뿐, 과정이 실력이다. — 속담","1%씩 매일 오르면 37배가 된다. — 속담","모르는 건 부끄러운 게 아니다. 묻지 않는 게 문제다. — 속담","오답 노트 한 장이 교과서 열 페이지보다 강하다. — 속담","할 수 있다고 믿는 순간, 절반은 온 것이다. — 속담","오늘 공부한 만큼, 내일은 덜 불안하다. — 속담"],Re="schoolMetricsQuoteIndex";function yt(){let e=Number(localStorage.getItem(Re)||0);const t=ve[e%ve.length];return localStorage.setItem(Re,String((e+1)%ve.length)),t}const St={1:{label:"1학년",note:"1학년은 2학기부터 내신 성적이 반영됩니다.",subjects:{국어:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"나만의 노트(나노)",weight:15,kind:"perf"}]}}},수학:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"기본도형 탐구 프로젝트",weight:20,kind:"perf"},{label:"평면·입체 도형 탐구",weight:20,kind:"perf"}]}}},사회:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"사회화 자서전 만들기",weight:20,kind:"perf"},{label:"모의 선거",weight:20,kind:"perf"}]}}},과학:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"실험 보고서 작성",weight:20,kind:"perf"},{label:"달의 위상 변화 관찰",weight:20,kind:"perf"}]}}},영어:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"희망 직업 소개",weight:20,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]}}},음악:{semesters:{2:{label:"2학기",items:[{label:"우쿨렐레 연주",weight:50,kind:"perf"},{label:"작곡가 탐구 활동",weight:50,kind:"perf"}]}}},미술:{semesters:{2:{label:"2학기",items:[{label:"스텐실",weight:50,kind:"perf"},{label:"문자도",weight:50,kind:"perf"}]}}},체육:{semesters:{2:{label:"2학기",items:[{label:"경기형 스포츠(축구)",weight:50,kind:"perf"},{label:"기록 도전형(달리기)",weight:50,kind:"perf"}]}}},정보:{semesters:{2:{label:"2학기",items:[{label:"AI 활용",weight:50,kind:"perf"},{label:"디지털 문화 표현",weight:50,kind:"perf"}]}}},"진로와 직업":{semesters:{2:{label:"2학기",items:[{label:"창업 프로젝트",weight:50,kind:"perf"},{label:"진로 디자인",weight:50,kind:"perf"}]}}},기술가정:{semesters:{2:{label:"2학기",items:[{label:"과학·미래기술 보고서",weight:35,kind:"perf"},{label:"에너지 신문 제작",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]}}}}},2:{label:"2학년",subjects:{국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"발표와 듣기",weight:15,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"복합양식 자료를 활용한 글 작성",weight:15,kind:"perf"}]}}},수학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"일차방정식·일차부등식",weight:20,kind:"perf"},{label:"연립일차방정식·일차함수",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"삼각형·사각형의 성질",weight:20,kind:"perf"},{label:"도형의 닮음·피타고라스",weight:20,kind:"perf"}]}}},역사:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"고대 문명 지도 만들기",weight:20,kind:"perf"},{label:"고대사 신문 만들기",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"서양 고대 문화유산 소개",weight:20,kind:"perf"},{label:"유럽 여행 소개 글쓰기",weight:20,kind:"perf"}]}}},과학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"밀도 측정",weight:10,kind:"perf"},{label:"지권 층상구조 모형 제작",weight:10,kind:"perf"},{label:"주기율표 탐구",weight:10,kind:"perf"},{label:"광합성 탐구",weight:10,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"소리의 성질 탐구",weight:10,kind:"perf"},{label:"인체 프로젝트",weight:20,kind:"perf"},{label:"전류,전압,저항 사이의 관계 탐구",weight:10,kind:"perf"}]}}},영어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"},{label:"발명품 소개",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"지역 축제 홍보",weight:20,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]}}},음악:{semesters:{1:{label:"1학기",items:[{label:"우쿨렐레 연주",weight:50,kind:"perf"},{label:"텅드럼 연주",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"펜비트 연주",weight:50,kind:"perf"},{label:"리코더 연주",weight:50,kind:"perf"}]}}},미술:{semesters:{1:{label:"1학기",items:[{label:"세밀화",weight:50,kind:"perf"},{label:"음식 모형 만들기",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"점묘화",weight:50,kind:"perf"},{label:"서양미술사 보고서",weight:50,kind:"perf"}]}}},체육:{semesters:{1:{label:"1학기",items:[{label:"경기형 스포츠(킨볼)",weight:60,kind:"perf"},{label:"도전형(제자리멀리뛰기)",weight:40,kind:"perf"}]},2:{label:"2학기",items:[{label:"경기형 스포츠(배드민턴)",weight:60,kind:"perf"},{label:"건강관리(줄넘기)",weight:40,kind:"perf"}]}}},도덕:{semesters:{1:{label:"1학기",items:[{label:"도덕적 인물 지폐 제작",weight:50,kind:"perf"},{label:"우정 네 컷 만들기",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"정보 카드 뉴스 제작",weight:50,kind:"perf"},{label:"인권 모니터링 제안서",weight:50,kind:"perf"}]}}},중국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 기말고사",weight:40,kind:"exam"},{label:"한어병음 작성",weight:30,kind:"perf"},{label:"중국어 말하기",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 기말고사",weight:40,kind:"exam"},{label:"하루 일과표 만들기",weight:30,kind:"perf"},{label:"중국어 말하기",weight:30,kind:"perf"}]}}},"금융과 미래":{semesters:{2:{label:"2학기",items:[{label:"투자 성향 검사",weight:50,kind:"perf"},{label:"투자 포트폴리오 구성",weight:50,kind:"perf"}]}}},기술가정:{semesters:{1:{label:"1학기",items:[{label:"효과적 의사소통 프로젝트",weight:35,kind:"perf"},{label:"제조 기술 프로젝트",weight:35,kind:"perf"},{label:"자기주도노트 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"균형 잡힌 식단 계획",weight:35,kind:"perf"},{label:"친환경 의복 생활",weight:35,kind:"perf"},{label:"자기주도노트 작성",weight:30,kind:"perf"}]}}}}},3:{label:"3학년",note:"3학년 2학기에는 기말고사가 없습니다.",subjects:{국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"논설문 쓰기",weight:15,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"한 학기 한 권 읽기",weight:30,kind:"perf"},{label:"문장의 짜임 고려해서 자신감 있게 발표",weight:30,kind:"perf"}]}}},사회:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"국가 기관 탐구로 권력 분립 이해",weight:20,kind:"perf"},{label:"국민 경제 지표와 국제 거래 이해",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"인구·도시 문제 탐구",weight:30,kind:"perf"},{label:"농업 산업화·세계화",weight:30,kind:"perf"}]}}},역사:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"고려 정치 변천",weight:20,kind:"perf"},{label:"고려의 문화 및 조선 통치 체제 탐구",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"조선 왕 가상 인터뷰",weight:30,kind:"perf"},{label:"양 난의 이해 및 영정조 정책 탐구",weight:30,kind:"perf"}]}}},도덕:{semesters:{1:{label:"1학기",items:[{label:"1학기 기말고사",weight:40,kind:"exam"},{label:"폭력 예방 논술문 작성",weight:30,kind:"perf"},{label:"사회 정의 실현 논술문 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"환경 보호 제안서",weight:30,kind:"perf"},{label:"실패 이력서 소개",weight:30,kind:"perf"}]}}},수학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"인수분해를 이용한 수의 성질 탐구",weight:20,kind:"perf"},{label:"이차함수 그래프",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"삼각비 개념 보고서",weight:30,kind:"perf"},{label:"원의 성질 문제해결",weight:30,kind:"perf"}]}}},과학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"기상 현상 실험",weight:20,kind:"perf"},{label:"화학 반응의 규칙 탐구",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"세포분열 관찰 실험",weight:30,kind:"perf"},{label:"물체 운동 분석",weight:30,kind:"perf"}]}}},영어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:15,kind:"perf"},{label:"급식 메뉴 프로젝트",weight:15,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"영어 듣기",weight:20,kind:"perf"},{label:"영어독서",weight:20,kind:"perf"},{label:"통계 자료 활용 프로젝트",weight:20,kind:"perf"}]}}},음악:{semesters:{1:{label:"1학기",items:[{label:"칼림바 연주",weight:50,kind:"perf"},{label:"전자드럼 연주",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"노래 부르기",weight:50,kind:"perf"},{label:"디자인사 연구보고서",weight:50,kind:"perf"}]}}},미술:{semesters:{1:{label:"1학기",items:[{label:"포트레이트 드로잉",weight:50,kind:"perf"},{label:"비주얼 리터러시",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"오마주",weight:50,kind:"perf"},{label:"디자인 조사 보고서",weight:50,kind:"perf"}]}}},체육:{semesters:{1:{label:"1학기",items:[{label:"전통 표현(티니클링)",weight:40,kind:"perf"},{label:"플로어볼",weight:60,kind:"perf"}]},2:{label:"2학기",items:[{label:"건강·체력 관리(타바타)",weight:40,kind:"perf"},{label:"배구",weight:60,kind:"perf"}]}}},기술가정:{semesters:{1:{label:"1학기",items:[{label:"생애 설계",weight:35,kind:"perf"},{label:"수송기술 제작",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"스마트폰 앱 만들기",weight:35,kind:"perf"},{label:"적정 기술 사례 조사",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]}}}}}};function le(e){return St[e]??null}function $t(e){const t=le(e);return t?Object.keys(t.subjects):[]}function Pe(e,t){var s;return((s=le(e))==null?void 0:s.subjects[t])??null}function _e(e,t){const s=Pe(e,t);return s?Object.keys(s.semesters).map(Number).sort((i,a)=>i-a):[]}function Lt(e,t,s){var a;const i=Pe(e,t);return((a=i==null?void 0:i.semesters[s])==null?void 0:a.items)??[]}function Be(e,t,s){var a;const i=Pe(e,t);return((a=i==null?void 0:i.semesters[s])==null?void 0:a.label)??`${s}학기`}function xt(e,t,s,i){return`${e}-${t}-${s}-${i}`}function Mt(e,t,s){return Lt(e,t,s).map((a,l)=>({key:xt(e,t,s,l),subject:t,semester:s,label:a.label,weight:a.weight,kind:a.kind}))}function Ge(e,t){let s=0,i=0;for(const a of e){const l=t[a.key];if(l===""||l===null||l===void 0)continue;const c=Number(l);Number.isNaN(c)||(s+=a.weight,i+=c*a.weight)}return s===0?null:i/s}function Et(e,t){const s={},i=[];for(const l of e){const c=t[l.key];if(c===""||c===null||c===void 0){i.push(l);continue}const u=Number(c);if(Number.isNaN(u)){i.push(l);continue}s[l.key]=u}const a={...s};for(const l of i)a[l.key]=100;return{average:Ge(e,a),remainingCount:i.length}}const At=["음악","미술","체육"],Ct=[{letter:"A",min:90},{letter:"B",min:80},{letter:"C",min:70},{letter:"D",min:60},{letter:"E",min:0}],It=[{letter:"A",min:80},{letter:"B",min:60},{letter:"C",min:0}];function We(e){return e.map((t,s,i)=>{const a=i[s-1],l=t.min===0?`${t.letter} (${(a==null?void 0:a.min)??60}점 미만)`:`${t.letter} (${t.min}점 이상)`;return{letter:t.letter,min:Number(t.min)||0,label:l}})}function Ke(){const e=G().standardScale;return We(e!=null&&e.length?e:Ct)}function Je(){const e=G().artsScale;return We(e!=null&&e.length?e:It)}function qe(e){return At.includes(e)}function ke(e){return e==null||Number.isNaN(e)?null:Math.round(e)}function Ne(e){return qe(e)?Je():Ke()}function $e(e,t){const s=ke(e);if(s===null)return"-";const i=Ne(t);for(const a of i)if(s>=a.min)return a.letter;return i[i.length-1].letter}function ne(e){return`${e}등급`}const je=["조금만 더 올리면 된다. 할 수 있어!","상위 등급이 코앞이다. 끝까지 달려보자!","지금의 노력이 등급을 바꾼다. 포기하지 마!","아직 끝나지 않았어. 충분히 올릴 수 있어!","남은 항목이 기회다. 집중해서 마무리하자!","한 걸음만 더 가면 등급이 달라진다. 파이팅!","가능성은 아직 살아 있다. 믿고 가보자!","오늘의 한 문제가 등급을 바꿀 수도 있어!","목표 등급까지 거의 다 왔다. 조금만 더!","실력은 거짓말하지 않는다. 계속 밀어붙여!"];function Tt(e){return e.projection.remainingCount>0&&e.letter!==e.projLetter}function Pt(){const e=Math.floor(Math.random()*je.length);return je[e]}function Ye(e=null){const t=e?qe(e):!1,s=e?t?`${e}은(는) 예체능 과목 (A·B·C)`:`${e}은(는) 일반 과목 (A·B·C·D·E)`:"과목 유형에 따라 등급 기준이 다릅니다.",i=Ke(),a=Je();return`
    <div class="grade-criteria-wrap">
      <button type="button" class="grade-criteria-bar" data-toggle="criteria" aria-expanded="false">
        ▶ 등급 기준표 확인
      </button>
      <div class="grade-criteria-panel hidden" id="criteria-panel">
        <p class="criteria-note">${s}</p>
        <p class="criteria-note muted">총점은 소수점을 반올림한 뒤 등급을 산출합니다.</p>
        <table class="criteria-table">
          <thead>
            <tr><th colspan="2">일반 과목 (국·영·수·사·과 등)</th></tr>
          </thead>
          <tbody>
            ${i.map(l=>`<tr><td>${l.letter}</td><td>${l.label.replace(/^[A-E]\s*/,"")}</td></tr>`).join("")}
          </tbody>
        </table>
        <table class="criteria-table">
          <thead>
            <tr><th colspan="2">예체능 (음악·미술·체육)</th></tr>
          </thead>
          <tbody>
            ${a.map(l=>`<tr><td>${l.letter}</td><td>${l.label.replace(/^[A-E]\s*/,"")}</td></tr>`).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `}function ze(e){const t=e.querySelector("[data-toggle='criteria']"),s=e.querySelector("#criteria-panel");!t||!s||t.addEventListener("click",()=>{const i=s.classList.toggle("hidden");t.setAttribute("aria-expanded",String(!i)),t.textContent=i?"▶ 등급 기준표 확인":"▼ 등급 기준표 닫기"})}function qt(e,t,s,i){if(s===null)return null;const a=ke(s),l=$e(a,i),c=Ne(i),u=c.findIndex(L=>L.letter===l);if(u<=0)return{targetLetter:l,needed:null,message:"이미 최고 등급입니다."};const h=c[u-1],g=h.min,x=e.filter(L=>{const v=t[L.key];return v===""||v===null||v===void 0||Number.isNaN(Number(v))});if(x.length===0)return{targetLetter:h.letter,needed:null,message:"모든 항목이 입력되었습니다."};let b=0,r=0,f=0;for(const L of e){const v=t[L.key];if(v===""||v===null||v===void 0||Number.isNaN(Number(v))){f+=L.weight;continue}b+=L.weight,r+=Number(v)*L.weight}if(f===0)return null;const n=b+f,w=(g*n-r)/f,M=Math.max(0,Math.min(100,w));return{targetLetter:h.letter,needed:Math.ceil(M*10)/10,remainingCount:x.length,message:null}}function Nt(e,t,s,i){const l=Ne(i).find(n=>n.letter===s);if(!l)return null;let c=0,u=0,h=0,g=0;for(const n of e){const w=t[n.key];if(w===""||w===null||w===void 0||Number.isNaN(Number(w))){h+=n.weight,g+=1;continue}u+=n.weight,c+=Number(w)*n.weight}if(h===0)return null;const x=u+h,r=((l.min-.5)*x-c)/h;return{minScore:Math.ceil(Math.max(0,Math.min(100,r))*10)/10,remainingCount:g}}function Dt(e){const t=ke(e);return{raw:e,rounded:t,display:`${t}점`}}function Rt(e,t,s){const i=Ge(e,t);if(i===null)return null;const{rounded:a}=Dt(i),l=$e(a,s),c=Et(e,t),u=ke(c.average),h=qt(e,t,i,s),g=Nt(e,t,l,s);return{average:i,rounded:a,letter:l,projection:c,projRounded:u,projLetter:$e(u,s),needed:h,confirmMin:g}}function oe(e="globe"){return`
    <svg class="${e}" viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="48" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.35"/>
      <ellipse cx="60" cy="60" rx="48" ry="16" fill="none" stroke="currentColor" stroke-width="1"/>
      <ellipse cx="60" cy="60" rx="16" ry="48" fill="none" stroke="currentColor" stroke-width="1"/>
      <ellipse cx="60" cy="60" rx="34" ry="48" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.7"/>
      <line x1="12" y1="60" x2="108" y2="60" stroke="currentColor" stroke-width="0.8"/>
      <line x1="60" y1="12" x2="60" y2="108" stroke="currentColor" stroke-width="0.8"/>
    </svg>
  `}function Bt(){return'<img class="title-bg" src="./title-bg.png" alt="" aria-hidden="true" />'}function jt(){return'<img class="go-bg" src="./go-bg.png" alt="" aria-hidden="true" />'}function Xe(e){return`grade-theme-${e}`}function K(e,t=""){return`<div class="phone-screen ${t}">${e}</div>`}function ce(e){return`<p class="screen-footer">${e}</p>`}function ee(e="main"){return`<button type="button" class="link-btn" data-action="${e}">메인화면으로</button>`}const Qe=[20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5],ue=8;function Ot(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function Ht(e,t,s){var i,a;(i=e.querySelector('[data-nav="back"]'))==null||i.addEventListener("click",t),(a=e.querySelector('[data-nav="main"]'))==null||a.addEventListener("click",s)}function Ut(e,t){const s=Math.hypot(e,t);if(s>1)return{points:0,label:"보드 밖"};if(s<=.07)return{points:50,label:"더블 불 · 50"};if(s<=.14)return{points:25,label:"싱글 불 · 25"};let i=Math.atan2(e,-t);i<0&&(i+=Math.PI*2);const a=Math.floor((i+Math.PI/20)%(Math.PI*2)/(Math.PI/10)),l=Qe[a];return s>=.9?{points:l*2,label:`더블 ${l} · ${l*2}`}:s>=.52&&s<=.62?{points:l*3,label:`트리플 ${l} · ${l*3}`}:{points:l,label:`싱글 ${l} · ${l}`}}function ye(e,t,s){const i=t/2,a=t/2,l=t*.42;e.clearRect(0,0,t,t),e.fillStyle="#1a1a1a",e.beginPath(),e.arc(i,a,l*1.08,0,Math.PI*2),e.fill();for(let c=0;c<20;c++){const u=-Math.PI/2-Math.PI/20+c*Math.PI/10,h=u+Math.PI/10,g=c%2===0;e.beginPath(),e.moveTo(i,a),e.arc(i,a,l*.9,u,h),e.closePath(),e.fillStyle=g?"#111":"#ece6d8",e.fill(),e.beginPath(),e.moveTo(i,a),e.arc(i,a,l*.52,u,h),e.closePath(),e.fillStyle=g?"#1c1c1c":"#f5f0e6",e.fill(),e.beginPath(),e.arc(i,a,l,u,h),e.arc(i,a,l*.9,h,u,!0),e.closePath(),e.fillStyle=c%2===0?"#c4122f":"#0a7a3c",e.fill(),e.beginPath(),e.arc(i,a,l*.62,u,h),e.arc(i,a,l*.52,h,u,!0),e.closePath(),e.fillStyle=c%2===0?"#c4122f":"#0a7a3c",e.fill()}e.strokeStyle="rgba(180,180,180,0.55)",e.lineWidth=1;for(let c=0;c<20;c++){const u=-Math.PI/2-Math.PI/20+c*Math.PI/10;e.beginPath(),e.moveTo(i,a),e.lineTo(i+Math.cos(u)*l,a+Math.sin(u)*l),e.stroke()}[.9,.62,.52,.14,.07].forEach(c=>{e.beginPath(),e.arc(i,a,l*c,0,Math.PI*2),e.stroke()}),e.beginPath(),e.arc(i,a,l*.14,0,Math.PI*2),e.fillStyle="#0a7a3c",e.fill(),e.beginPath(),e.arc(i,a,l*.07,0,Math.PI*2),e.fillStyle="#c4122f",e.fill(),e.fillStyle="#fff",e.font=`bold ${Math.max(10,t*.045)}px sans-serif`,e.textAlign="center",e.textBaseline="middle";for(let c=0;c<20;c++){const u=-Math.PI/2+c*Math.PI/10,h=i+Math.cos(u)*l*1.14,g=a+Math.sin(u)*l*1.14;e.fillText(String(Qe[c]),h,g)}for(const c of s)e.beginPath(),e.arc(i+c.nx*l,a+c.ny*l,4,0,Math.PI*2),e.fillStyle="#fff700",e.fill(),e.strokeStyle="#000",e.stroke()}function Ft(e,{onBack:t,onMain:s}){let i=0,a=ue,l="vertical",c=.5,u=.5,h=1,g=1,x=0,b=0;const r=[],f=1.35;e.innerHTML=`
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
      ${Ot()}
    </div>
  `;const n=e.querySelector("#dart-canvas"),w=n.getContext("2d"),M=e.querySelector("#dart-score"),L=e.querySelector("#dart-throws"),v=e.querySelector("#dart-feedback"),$=e.querySelector("#dart-stop"),P=e.querySelector("#dart-retry"),q=e.querySelector("#aim-v"),T=e.querySelector("#aim-h"),N=e.querySelector(".aim-bar-v"),R=e.querySelector(".aim-bar-h");function D(){const o=Math.min(300,e.clientWidth||300);n.width=o,n.height=o,ye(w,o,r)}function O(){q.style.top=`${c*100}%`,T.style.left=`${u*100}%`,N.classList.toggle("active",l==="vertical"),R.classList.toggle("active",l==="horizontal")}function B(o){b||(b=o);const d=Math.min(.05,(o-b)/1e3);b=o,l==="vertical"?(c+=h*f*d,c>=1&&(c=1,h=-1),c<=0&&(c=0,h=1)):l==="horizontal"&&(u+=g*f*d,u>=1&&(u=1,g=-1),u<=0&&(u=0,g=1)),O(),x=requestAnimationFrame(B)}function H(){const o=(c-.5)*2.05,d=(u-.5)*2.05,p=Ut(d,o);if(r.push({nx:d,ny:o}),i+=p.points,a-=1,M.textContent=`점수: ${i}`,L.textContent=`남은 횟수: ${a}`,ye(w,n.width,r),v.textContent=p.label,a<=0){l="done",$.classList.add("hidden"),P.classList.remove("hidden"),v.textContent=`게임 종료! 최종 ${i}점`;return}l="vertical",c=Math.random(),u=Math.random(),v.textContent="세로 바를 가운데에 맞춰 멈추세요!"}function k(o){var d;if((d=o==null?void 0:o.preventDefault)==null||d.call(o),l==="vertical"){l="horizontal",v.textContent="가로 바를 가운데에 맞춰 멈추세요!";return}l==="horizontal"&&(l="result",H())}function A(o){(o.code==="Space"||o.key===" ")&&(o.preventDefault(),k(o))}function m(){i=0,a=ue,l="vertical",r.length=0,c=.2,u=.2,M.textContent="점수: 0",L.textContent=`남은 횟수: ${ue}`,v.textContent="세로 바를 가운데에 맞춰 멈추세요!",$.classList.remove("hidden"),P.classList.add("hidden"),ye(w,n.width,r)}return D(),O(),x=requestAnimationFrame(B),$.addEventListener("click",k),$.addEventListener("touchstart",k,{passive:!1}),P.addEventListener("click",m),window.addEventListener("keydown",A),window.addEventListener("resize",D),Ht(e,t,s),()=>{cancelAnimationFrame(x),window.removeEventListener("keydown",A),window.removeEventListener("resize",D)}}const J=12;function _t(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function Gt(e,t,s){var i,a;(i=e.querySelector('[data-nav="back"]'))==null||i.addEventListener("click",t),(a=e.querySelector('[data-nav="main"]'))==null||a.addEventListener("click",s)}function Wt(e,{onBack:t,onMain:s}){let i=0,a=0,l=!1,c=!0,u=.08,h=.55,g=0,x=0,b=0,r=!1;e.innerHTML=`
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
      ${_t()}
    </div>
  `;const f=e.querySelector("#cricket-canvas"),n=f.getContext("2d"),w=e.querySelector("#cricket-runs"),M=e.querySelector("#cricket-balls"),L=e.querySelector("#cricket-feedback"),v=e.querySelector("#cricket-swing"),$=e.querySelector("#cricket-retry"),P=.72,q=.09;function T(){const k=Math.min(320,Math.max(260,e.clientWidth-16||300));f.width=k,f.height=Math.round(k*1.3)}function N(){const k=f.width,A=f.height;n.clearRect(0,0,k,A),n.fillStyle="#6ec8ff",n.fillRect(0,0,k,A*.22),n.fillStyle="#3d8c3a",n.fillRect(0,A*.18,k,A*.12);for(let C=0;C<18;C++)n.fillStyle=`hsl(${C*47%360} 70% 45%)`,n.beginPath(),n.arc(10+C*(k/17),A*.22,6,0,Math.PI*2),n.fill();n.fillStyle="#4caf50",n.fillRect(0,A*.28,k,A*.72);const m=k*.28,o=(k-m)/2,d=A*.3,p=A*.58;n.fillStyle="#c4a574",n.beginPath(),n.moveTo(o+m*.15,d),n.lineTo(o+m*.85,d),n.lineTo(o+m,d+p),n.lineTo(o,d+p),n.closePath(),n.fill();const y=d+p*P;if(n.strokeStyle="#fff41a",n.lineWidth=3,n.setLineDash([6,4]),n.beginPath(),n.moveTo(o-8,y),n.lineTo(o+m+8,y),n.stroke(),n.setLineDash([]),n.fillStyle="#8d6e63",n.beginPath(),n.ellipse(k/2,d+18,10,14,0,0,Math.PI*2),n.fill(),n.fillStyle="#66bb6a",n.beginPath(),n.ellipse(k/2,d+p-10,16,22,0,0,Math.PI*2),n.fill(),n.save(),n.translate(k/2+14,d+p-18),n.rotate(g>0?-.9:-.2),n.fillStyle="#f5f5f5",n.fillRect(-4,-28,8,36),n.restore(),!c&&!r){const C=d+p*u,I=k/2+Math.sin(u*6)*4,we=7+u*4;n.beginPath(),n.arc(I,C,we,0,Math.PI*2),n.fillStyle="#ef5350",n.fill(),n.strokeStyle="#fff",n.lineWidth=1.5,n.stroke()}g>0&&(n.fillStyle="rgba(255,244,26,0.15)",n.fillRect(0,y-20,k,40))}function R(){if(a>=J){r=!0,v.disabled=!0,v.classList.add("hidden"),$.classList.remove("hidden"),L.textContent=`경기 종료! 총 ${i}점`;return}c=!1,l=!1,u=.05,h=.48+Math.random()*.35,L.textContent="타이밍에 맞춰 스윙!"}function D(k){var d;if((d=k==null?void 0:k.preventDefault)==null||d.call(k),r||l||c)return;l=!0,g=.25,a+=1,M.textContent=`볼: ${a} / ${J}`;const A=Math.abs(u-P);let m=0,o="헛스윙!";A<=q*.25?(m=6,o="식스! +6"):A<=q*.5?(m=4,o="포! +4"):A<=q*.75?(m=2,o="투런! +2"):A<=q&&(m=1,o="싱글! +1"),i+=m,w.textContent=`득점: ${i}`,L.textContent=o,c=!0,setTimeout(()=>{r||R(),a>=J&&(r=!0,v.disabled=!0,v.classList.add("hidden"),$.classList.remove("hidden"),L.textContent=`경기 종료! 총 ${i}점`)},650)}function O(k){b||(b=k);const A=Math.min(.05,(k-b)/1e3);b=k,!c&&!r&&(u+=h*A,u>1.05&&(c=!0,l=!0,a+=1,M.textContent=`볼: ${a} / ${J}`,L.textContent="놓침!",setTimeout(()=>{l=!1,a>=J?(r=!0,v.disabled=!0,v.classList.add("hidden"),$.classList.remove("hidden"),L.textContent=`경기 종료! 총 ${i}점`):R()},500))),g>0&&(g-=A),N(),x=requestAnimationFrame(O)}function B(){i=0,a=0,r=!1,l=!1,g=0,w.textContent="득점: 0",M.textContent=`볼: 0 / ${J}`,v.disabled=!1,v.classList.remove("hidden"),$.classList.add("hidden"),R()}function H(k){(k.code==="Space"||k.key===" ")&&(k.preventDefault(),D(k))}return T(),R(),x=requestAnimationFrame(O),v.addEventListener("click",D),v.addEventListener("touchstart",D,{passive:!1}),f.addEventListener("pointerdown",D),$.addEventListener("click",B),window.addEventListener("keydown",H),window.addEventListener("resize",T),Gt(e,t,s),()=>{cancelAnimationFrame(x),window.removeEventListener("keydown",H),window.removeEventListener("resize",T)}}function Kt(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function Jt(e,t,s){var i,a;(i=e.querySelector('[data-nav="back"]'))==null||i.addEventListener("click",t),(a=e.querySelector('[data-nav="main"]'))==null||a.addEventListener("click",s)}const Yt=["#42a5f5","#ef5350","#ffee58","#66bb6a"],zt=4,Se=7;function Xt(e,{onBack:t,onMain:s}){let i=0,a=3,l=!1,c=0,u=0;const h={left:!1,right:!1};let g=320,x=420,b={x:0,y:0,w:70,h:12},r={x:0,y:0,r:6,vx:0,vy:0},f=[];e.innerHTML=`
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
      ${Kt()}
    </div>
  `;const n=e.querySelector("#bo-canvas"),w=n.getContext("2d"),M=e.querySelector("#bo-lives"),L=e.querySelector("#bo-score"),v=e.querySelector("#bo-feedback"),$=e.querySelector("#bo-start");function P(){g=Math.min(320,Math.max(260,e.clientWidth-16||300)),x=Math.round(g*1.3),n.width=g,n.height=x,b.y=x-36,b.w=g*.22}function q(){f=[];const o=4,d=56,p=(g-o*(Se+1))/Se,y=16;for(let C=0;C<zt;C++)for(let I=0;I<Se;I++)f.push({x:o+I*(p+o),y:d+C*(y+o),w:p,h:y,color:Yt[C],alive:!0})}function T(){b.x=(g-b.w)/2,r.x=g/2,r.y=b.y-20;const o=-Math.PI/3+Math.random()*(Math.PI/3),d=Math.min(g,x)*.45;r.vx=Math.sin(o)*d,r.vy=-Math.abs(Math.cos(o)*d)}function N(){M.textContent=`생명: ${"●".repeat(a)}${"○".repeat(3-a)}`,L.textContent=`점수: ${String(i).padStart(5,"0")}`}function R(){w.fillStyle="#1a1030",w.fillRect(0,0,g,x);for(const o of f)o.alive&&(w.fillStyle=o.color,D(w,o.x,o.y,o.w,o.h,4),w.fill());w.fillStyle="#fff",D(w,b.x,b.y,b.w,b.h,6),w.fill(),w.beginPath(),w.arc(r.x,r.y,r.r,0,Math.PI*2),w.fillStyle="#fff",w.fill()}function D(o,d,p,y,C,I){o.beginPath(),o.moveTo(d+I,p),o.arcTo(d+y,p,d+y,p+C,I),o.arcTo(d+y,p+C,d,p+C,I),o.arcTo(d,p+C,d,p,I),o.arcTo(d,p,d+y,p,I),o.closePath()}function O(o){u||(u=o);const d=Math.min(.033,(o-u)/1e3);if(u=o,l){const p=g*1.1*d;if(h.left&&(b.x-=p),h.right&&(b.x+=p),b.x=Math.max(0,Math.min(g-b.w,b.x)),r.x+=r.vx*d,r.y+=r.vy*d,r.x<r.r&&(r.x=r.r,r.vx*=-1),r.x>g-r.r&&(r.x=g-r.r,r.vx*=-1),r.y<r.r&&(r.y=r.r,r.vy*=-1),r.vy>0&&r.y+r.r>=b.y&&r.y-r.r<=b.y+b.h&&r.x>=b.x&&r.x<=b.x+b.w){r.y=b.y-r.r;const y=(r.x-(b.x+b.w/2))/(b.w/2),C=Math.hypot(r.vx,r.vy)*1.02,I=y*1.1;r.vx=Math.sin(I)*C,r.vy=-Math.abs(Math.cos(I)*C)}for(const y of f)if(y.alive&&r.x+r.r>y.x&&r.x-r.r<y.x+y.w&&r.y+r.r>y.y&&r.y-r.r<y.y+y.h){y.alive=!1,i+=10,N();const C=r.x+r.r-y.x,I=y.x+y.w-(r.x-r.r),we=r.y+r.r-y.y,Ve=y.y+y.h-(r.y-r.r),Ze=Math.min(C,I),et=Math.min(we,Ve);Ze<et?r.vx*=-1:r.vy*=-1;break}f.every(y=>!y.alive)&&(l=!1,v.textContent=`클리어! 점수 ${i}`),r.y>x+20&&(a-=1,N(),a<=0?(l=!1,v.textContent=`게임 오버 · ${i}점`):(T(),v.textContent="생명 -1! 계속…"))}R(),c=requestAnimationFrame(O)}function B(){i=0,a=3,l=!0,q(),T(),N(),v.textContent="화이팅!"}function H(o){const d=n.getBoundingClientRect(),p=(o-d.left)/d.width*g;b.x=Math.max(0,Math.min(g-b.w,p-b.w/2))}function k(o){var p;o.preventDefault();const d=((p=o.touches)==null?void 0:p[0])||o;H(d.clientX)}function A(o){(o.key==="ArrowLeft"||o.key==="a"||o.key==="A")&&(h.left=!0),(o.key==="ArrowRight"||o.key==="d"||o.key==="D")&&(h.right=!0)}function m(o){(o.key==="ArrowLeft"||o.key==="a"||o.key==="A")&&(h.left=!1),(o.key==="ArrowRight"||o.key==="d"||o.key==="D")&&(h.right=!1)}return P(),q(),T(),N(),R(),c=requestAnimationFrame(O),$.addEventListener("click",B),n.addEventListener("pointerdown",k),n.addEventListener("pointermove",o=>{(o.buttons||o.pressure>0)&&k(o)}),n.addEventListener("touchstart",k,{passive:!1}),n.addEventListener("touchmove",k,{passive:!1}),window.addEventListener("keydown",A),window.addEventListener("keyup",m),window.addEventListener("resize",P),Jt(e,t,s),()=>{cancelAnimationFrame(c),window.removeEventListener("keydown",A),window.removeEventListener("keyup",m),window.removeEventListener("resize",P)}}const U=3;function Qt(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function Vt(e,t,s){var i,a;(i=e.querySelector('[data-nav="back"]'))==null||i.addEventListener("click",t),(a=e.querySelector('[data-nav="main"]'))==null||a.addEventListener("click",s)}function Zt(e,{onBack:t,onMain:s}){let i=320,a=420,l=0,c=0,u=!1,h=!1;const g={left:!1,right:!1};let x=0;const b={lane:0,progress:0,lap:0,color:"#4dffd4"},r={lane:.2,progress:.02,lap:0,color:"#ff4fd8",target:0};e.innerHTML=`
    <div class="game-panel">
      <h2 class="game-title">레이싱 vs AI</h2>
      <p class="game-desc">드래그/←→로 조향. 먼저 ${U}바퀴!</p>
      <div class="race-stats">
        <span id="race-you">YOU 0/${U}</span>
        <span id="race-ai">AI 0/${U}</span>
      </div>
      <canvas id="race-canvas" class="game-canvas race-canvas" width="320" height="420"></canvas>
      <button type="button" class="btn-go" id="race-start">시작 / 다시하기</button>
      <p class="game-feedback" id="race-feedback">시작을 누르세요!</p>
      ${Qt()}
    </div>
  `;const f=e.querySelector("#race-canvas"),n=f.getContext("2d"),w=e.querySelector("#race-you"),M=e.querySelector("#race-ai"),L=e.querySelector("#race-feedback"),v=e.querySelector("#race-start");function $(m,o=0){const d=i/2,p=a/2,y=i*.36-o,C=a*.38-o,I=m*Math.PI*2-Math.PI/2;return{x:d+Math.cos(I)*y,y:p+Math.sin(I)*C,a:I}}function P(){i=Math.min(320,Math.max(260,e.clientWidth-16||300)),a=Math.round(i*1.3),f.width=i,f.height=a}function q(){w.textContent=`YOU ${Math.min(b.lap,U)}/${U}`,M.textContent=`AI ${Math.min(r.lap,U)}/${U}`}function T(m,o=14){const d=$(m.progress,8+m.lane*14),p=$((m.progress+.01)%1,8+m.lane*14),y=Math.atan2(p.y-d.y,p.x-d.x);n.save(),n.translate(d.x,d.y),n.rotate(y),n.fillStyle=m.color,n.fillRect(-o,-o*.45,o*2,o*.9),n.fillStyle="#111",n.fillRect(o*.2,-o*.3,o*.5,o*.6),n.restore()}function N(){n.fillStyle="#1b5e20",n.fillRect(0,0,i,a),n.beginPath();for(let d=0;d<=64;d++){const p=$(d/64,-18);d===0?n.moveTo(p.x,p.y):n.lineTo(p.x,p.y)}n.closePath(),n.fillStyle="#37474f",n.fill(),n.beginPath();for(let d=0;d<=64;d++){const p=$(d/64,28);d===0?n.moveTo(p.x,p.y):n.lineTo(p.x,p.y)}n.closePath(),n.fillStyle="#2e7d32",n.fill(),n.strokeStyle="rgba(255,255,255,0.35)",n.setLineDash([8,10]),n.lineWidth=2,n.beginPath();for(let d=0;d<=64;d++){const p=$(d/64,6);d===0?n.moveTo(p.x,p.y):n.lineTo(p.x,p.y)}n.stroke(),n.setLineDash([]);const m=$(0,-16),o=$(0,26);n.strokeStyle="#fff",n.lineWidth=4,n.beginPath(),n.moveTo(m.x,m.y),n.lineTo(o.x,o.y),n.stroke(),T(r,12),T(b,13)}function R(m,o,d){const p=m.progress;m.progress+=o*d,m.progress>=1&&(m.progress-=1,m.lap+=1),p>.9&&m.progress<.1&&m.lap}function D(m){c||(c=m);const o=Math.min(.05,(m-c)/1e3);if(c=m,u&&!h){let d=x;g.left&&(d-=1),g.right&&(d+=1),d=Math.max(-1,Math.min(1,d)),b.lane+=d*2.2*o,b.lane=Math.max(-1,Math.min(1,b.lane)),r.target+=(Math.random()-.5)*1.5*o,r.target=Math.max(-.8,Math.min(.8,r.target)),r.lane+=(r.target-r.lane)*2*o;const p=.18+(1-Math.abs(b.lane)*.08)*.04,y=.175+Math.sin(m/1100)*.012,C=b.lap,I=r.lap;R(b,p,o),R(r,y,o),(b.lap!==C||r.lap!==I)&&q(),b.lap>=U?(h=!0,u=!1,L.textContent="승리! 당신이 먼저 3바퀴!"):r.lap>=U&&(h=!0,u=!1,L.textContent="패배… AI가 먼저 들어왔습니다.")}N(),l=requestAnimationFrame(D)}function O(){b.lane=0,b.progress=0,b.lap=0,r.lane=.25,r.progress=.01,r.lap=0,r.target=0,h=!1,u=!0,q(),L.textContent="달려라!"}function B(m){var y;m.preventDefault();const o=((y=m.touches)==null?void 0:y[0])||m,d=f.getBoundingClientRect();x=((o.clientX-d.left)/d.width-.5)*2}function H(){x=0}function k(m){(m.key==="ArrowLeft"||m.key==="a"||m.key==="A")&&(g.left=!0),(m.key==="ArrowRight"||m.key==="d"||m.key==="D")&&(g.right=!0)}function A(m){(m.key==="ArrowLeft"||m.key==="a"||m.key==="A")&&(g.left=!1),(m.key==="ArrowRight"||m.key==="d"||m.key==="D")&&(g.right=!1)}return P(),q(),N(),l=requestAnimationFrame(D),v.addEventListener("click",O),f.addEventListener("pointerdown",B),f.addEventListener("pointermove",m=>{m.buttons&&B(m)}),f.addEventListener("pointerup",H),f.addEventListener("pointerleave",H),f.addEventListener("touchstart",B,{passive:!1}),f.addEventListener("touchmove",B,{passive:!1}),f.addEventListener("touchend",H),window.addEventListener("keydown",k),window.addEventListener("keyup",A),window.addEventListener("resize",P),Vt(e,t,s),()=>{cancelAnimationFrame(l),window.removeEventListener("keydown",k),window.removeEventListener("keyup",A),window.removeEventListener("resize",P)}}const S=document.getElementById("app");let j=null,Y=null,F=null,z=null,Oe=!1;const He=new Set(["rest","game-dart","game-cricket","game-breakout","game-race","admin"]),en={main:an,help:ln,grade:on,subject:cn,calculator:dn,rest:un,admin:sn,"game-dart":()=>be("dart"),"game-cricket":()=>be("cricket"),"game-breakout":()=>be("breakout"),"game-race":()=>be("race")};tn();function tn(){ft().finally(()=>E("main"))}function E(e,t={}){z&&(z(),z=null),Oe&&!He.has(e)&&vt();const s=en[e];s&&(S.innerHTML="",s(t),Oe=He.has(e),window.scrollTo(0,0))}function X(e){e.querySelectorAll("[data-action]").forEach(t=>{t.addEventListener("click",()=>nn(t.dataset.action))})}function nn(e){if(e==="main"){j=null,Y=null,F=null,E("main");return}if(e==="grade"){Y=null,F=null,E("grade");return}if(e==="help"&&E("help"),e==="rest"&&E("rest"),e==="admin"){ie()&&E("admin");return}if(e==="subject"&&E("subject",{grade:j}),e==="game-dart"&&E("game-dart"),e==="game-cricket"&&E("game-cricket"),e==="game-breakout"&&E("game-breakout"),e==="game-race"&&E("game-race"),e.startsWith("pick-grade-")){j=Number(e.replace("pick-grade-","")),Y=null,F=null,E("subject",{grade:j});return}if(e.startsWith("pick-subject-")){const t=decodeURIComponent(e.replace("pick-subject-",""));Y=t;const s=_e(j,t);F=(s.length===1,s[0]),E("calculator",{grade:j,subject:t,semester:F});return}e.startsWith("pick-semester-")&&(F=Number(e.replace("pick-semester-","")),E("calculator",{grade:j,subject:Y,semester:F}))}function an(){const e=yt();S.innerHTML=K(`
    <div class="main-screen">
      <button type="button" class="help-btn" data-action="help" aria-label="앱 정보">?</button>
      <div class="main-header">
        <div class="title-block">
          ${Bt()}
          <h1 class="app-title">${_.title}</h1>
        </div>
        <p class="app-subtitle">${_.subtitle}</p>
        <p class="main-quote">"${e}"</p>
      </div>
      <div class="main-body">
        <button type="button" class="go-btn" data-action="grade" aria-label="시작">
          ${jt()}
          <span class="go-text">GO</span>
        </button>
      </div>
      <p class="main-footer">${_.footer}</p>
    </div>
  `),X(S)}function ln(){S.innerHTML=K(`
    <div class="stack-screen">
      ${oe()}
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
        <p class="muted">제작: ${_.creator}</p>
        ${ie()?'<p class="success"><button type="button" class="link-btn" data-action="admin">관리자 패널 열기</button></p>':""}
      </div>
      ${ee()}
      <button type="button" class="admin-secret-trigger" id="admin-secret" title="">
        ${_.subtitle}
      </button>
    </div>
  `),X(S);const e=S.querySelector("#admin-secret");e==null||e.addEventListener("click",()=>{if(ie()){E("admin");return}const t=window.prompt("관리자 비밀번호를 입력하세요");t!=null&&(ct(t)?(window.alert("관리자 모드가 켜졌습니다."),E("admin")):window.alert("비밀번호가 올바르지 않습니다."))})}function sn(){var u,h,g,x,b,r;if(!ie()){E("help");return}const e=G(),t=pt(),s=e.standardScale,i=e.artsScale,a=t.configured?`Firebase 연결됨 (${t.projectId})`:"Firebase 미설정 — src/firebase-config.js 에 키를 넣어주세요";S.innerHTML=K(`
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
          ${s.map((f,n)=>`
            <label>${f.letter}
              <input type="number" data-scale="std" data-i="${n}" data-letter="${f.letter}" min="0" max="100" value="${f.min}" />
            </label>
          `).join("")}
        </div>
        <h4>예체능 등급 기준 (점 이상)</h4>
        <div class="admin-scale" id="adm-arts">
          ${i.map((f,n)=>`
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
        ${ee()}
      </div>
      ${ce("ADMIN")}
    </div>
  `),X(S);let l=Ce();async function c(){const f=S.querySelector("#adm-logs"),n=S.querySelector("#adm-log-count");f&&(f.innerHTML='<p class="muted">불러오는 중…</p>');const w=await bt();if(l=w.logs,n&&(n.textContent=`(${l.length} · ${w.source}${w.error?" · 오류":""})`),!!f){if(l.length===0){f.innerHTML='<p class="muted">아직 기록이 없습니다.</p>';return}f.innerHTML=l.slice(0,120).map(M=>`
      <article class="admin-log-item">
        <header>${fe(M.type)} · ${rn(M.at)} · ${fe(M.deviceId||"")}</header>
        <p>${fe(M.message||"")}</p>
        ${M.detail?`<pre>${fe(typeof M.detail=="string"?M.detail:JSON.stringify(M.detail,null,0))}</pre>`:""}
      </article>
    `).join("")}}c(),(u=S.querySelector("#adm-refresh-logs"))==null||u.addEventListener("click",()=>c()),(h=S.querySelector("#adm-save"))==null||h.addEventListener("click",async()=>{var L,v;const f=Number((L=S.querySelector("#adm-unlock"))==null?void 0:L.value),n=!!((v=S.querySelector("#adm-free-games"))!=null&&v.checked),w=[...S.querySelectorAll('[data-scale="std"]')].map($=>({letter:$.dataset.letter,min:Number($.value)||0})),M=[...S.querySelectorAll('[data-scale="arts"]')].map($=>({letter:$.dataset.letter,min:Number($.value)||0}));ut({restUnlockUses:Number.isFinite(f)&&f>0?f:8,freeGames:n,standardScale:w,artsScale:M}),window.alert(W()?"설정을 저장했고 클라우드에도 올렸습니다.":"설정을 이 기기에 저장했습니다. (Firebase 미설정)"),E("admin")}),(g=S.querySelector("#adm-feedback-save"))==null||g.addEventListener("click",()=>{var n,w;const f=(w=(n=S.querySelector("#adm-feedback"))==null?void 0:n.value)==null?void 0:w.trim();if(!f){window.alert("내용을 입력하세요.");return}Z({type:"game_feedback",message:f}),window.alert("피드백을 저장했습니다."),E("admin")}),(x=S.querySelector("#adm-export"))==null||x.addEventListener("click",async()=>{const f=gt(l);try{await navigator.clipboard.writeText(f),window.alert("기록이 클립보드에 복사되었습니다.")}catch{window.prompt("아래 내용을 복사하세요",f)}}),(b=S.querySelector("#adm-clear-logs"))==null||b.addEventListener("click",async()=>{window.confirm("로컬+클라우드 활동 기록을 비울까요?")&&(await mt({cloud:!0}),E("admin"))}),(r=S.querySelector("#adm-logout"))==null||r.addEventListener("click",()=>{dt(),window.alert("관리자 모드가 종료되었습니다."),E("main")})}function fe(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function rn(e){try{const t=new Date(e);return`${t.getMonth()+1}/${t.getDate()} ${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`}catch{return e}}function on(){const e=re(),t=Fe();S.innerHTML=K(`
    <div class="stack-screen grade-screen">
      ${oe()}
      <h2 class="screen-title">자신의 학년을 선택하세요</h2>
      <div class="grade-list">
        <button type="button" class="grade-btn grade-1" data-action="pick-grade-1">1학년</button>
        <button type="button" class="grade-btn grade-2" data-action="pick-grade-2">2학년</button>
        <button type="button" class="grade-btn grade-3" data-action="pick-grade-3">3학년</button>
      </div>
      ${e?'<button type="button" class="rest-btn" data-action="rest">휴식 · 미니게임</button>':`<p class="unlock-hint">${t}</p>`}
      ${ee()}
      ${ce(_.subtitle)}
    </div>
  `),X(S)}function cn({grade:e}){if(!e||!le(e)){E("grade");return}j=e;const t=le(e),s=$t(e);S.innerHTML=K(`
    <div class="stack-screen ${Xe(e)}">
      ${oe()}
      <h2 class="screen-title">${t.label} 과목 선택</h2>
      ${t.note?`<p class="screen-note">${t.note}</p>`:""}
      ${Ye()}
      <div class="subject-list">
        ${s.map(i=>`<button type="button" class="subject-btn" data-action="pick-subject-${encodeURIComponent(i)}">${i}</button>`).join("")}
      </div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="grade">학년 선택으로</button>
        ${ee()}
      </div>
      ${ce(_.subtitle)}
    </div>
  `),X(S),ze(S)}function dn({grade:e,subject:t,semester:s}){if(!e||!t||!s){E("subject",{grade:j});return}j=e,Y=t,F=s;const i=le(e),a=_e(e,t),l=Mt(e,t,s),c=Be(e,t,s),u={},h=a.length>1?`<div class="semester-tabs">
          ${a.map(r=>`<button type="button" class="semester-tab ${r===s?"active":""}" data-action="pick-semester-${r}">${Be(e,t,r)}</button>`).join("")}
        </div>`:`<p class="semester-only">${c}</p>`;S.innerHTML=K(`
    <div class="stack-screen calculator-screen ${Xe(e)}">
      ${oe("globe globe-small")}
      <h2 class="screen-title subject-title">${t}</h2>
      <p class="screen-desc">${i.label} · ${c}${qe(t)?" · 예체능(A·B·C)":" · 일반(A~E)"}</p>
      ${Ye(t)}
      ${h}
      <form id="calc-form" class="calc-form"></form>
      <button type="submit" form="calc-form" class="btn-calc">계산하기</button>
      <div id="calc-result" class="calc-result hidden"></div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="subject">과목 선택으로</button>
        ${ee()}
      </div>
      ${ce(_.subtitle)}
    </div>
  `);const g=S.querySelector("#calc-form");let x="";for(const r of l){if(r.kind!==x){x=r.kind;const n=document.createElement("h3");n.className="section-heading",n.textContent=r.kind==="exam"?"지필고사":"수행평가",g.appendChild(n)}const f=document.createElement("label");f.className="score-row",f.innerHTML=`
      <span>${r.label} <em>${r.weight}%</em></span>
      <input type="number" min="0" max="100" step="0.1" inputmode="decimal"
        name="${r.key}" placeholder="점수" />
    `,g.appendChild(f)}const b=S.querySelector("#calc-result");g.addEventListener("submit",r=>{var P,q;r.preventDefault();const f=new FormData(g);for(const T of l)u[T.key]=f.get(T.key);const n=Rt(l,u,t);if(!n){b.classList.remove("hidden"),b.innerHTML='<p class="warn">최소 1개 이상 점수를 입력하세요.</p>';return}const w=kt(t);Z({type:"calc",message:`${e}학년 ${t} (${c}) → ${n.rounded}점 ${ne(n.letter)}`,detail:{grade:e,subject:t,semester:s,scores:u,rounded:n.rounded,letter:n.letter,average:n.average}});let M="";((P=n.needed)==null?void 0:P.needed)!=null?M=`<p>상위 <strong>${ne(n.needed.targetLetter)}</strong>까지 남은 항목 평균 <strong>${n.needed.needed}점</strong> 이상</p>`:(q=n.needed)!=null&&q.message&&(M=`<p>${n.needed.message}</p>`);let L="";if(n.projection.remainingCount>0&&n.letter===n.projLetter){const T=ne(n.letter);let N="";n.confirmMin&&(n.confirmMin.minScore<=0?N=`<p>남은 항목이 <strong>0점</strong>이어도 ${T} 유지</p>`:N=`<p>남은 항목 각각 최소 <strong>${n.confirmMin.minScore}점</strong> 이상이면 ${T} 유지</p>`),L=`
        <p><strong>${T} 확정입니다.</strong></p>
        ${N}
      `}let v="";Tt(n)&&(v=`<p class="cheer-msg">${Pt()}</p>`);let $="";w.justUnlocked?$=`<p class="success">서로 다른 과목 ${ge}개 달성! 학년 선택에서 휴식 미니게임 이용</p>`:re()?$='<p class="success">휴식 미니게임 이용 가능 (학년 선택 화면)</p>':w.isNew?$=`<p class="muted">${Fe()}</p>`:$='<p class="muted">이미 계산한 과목입니다. 다른 과목을 계산하면 해금에 가까워져요.</p>',b.classList.remove("hidden"),b.innerHTML=`
      <h3>${t} 결과</h3>
      <p>총점(반올림) <strong>${n.rounded}점</strong> · <strong>${ne(n.letter)}</strong></p>
      <p class="muted">가중 평균 ${n.average.toFixed(1)}점</p>
      <p>남은 항목 100점 시 <strong>${n.projRounded}점</strong> · <strong>${ne(n.projLetter)}</strong></p>
      ${L}
      ${v}
      ${M}
      ${$}
    `}),X(S),ze(S)}function un(){if(!re()){E("grade");return}S.innerHTML=K(`
    <div class="stack-screen">
      ${oe()}
      <h2 class="screen-title">휴식 · 미니게임</h2>
      <div class="game-list">
        <button type="button" class="game-card" data-action="game-dart">다트 게임</button>
        <button type="button" class="game-card" data-action="game-cricket">크리켓 게임</button>
        <button type="button" class="game-card" data-action="game-breakout">벽돌깨기</button>
        <button type="button" class="game-card" data-action="game-race">레이싱 vs AI</button>
      </div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="grade">학년 선택으로</button>
        ${ee()}
      </div>
      ${ce(_.subtitle)}
    </div>
  `),X(S)}function be(e){if(!re()){E("grade");return}Z({type:"game_open",message:`미니게임 시작: ${e}${he()?" (관리자)":""}`,detail:{type:e}}),S.innerHTML=K('<div id="game-root"></div>',"game-screen");const t=S.querySelector("#game-root"),s={onBack:()=>E("rest"),onMain:()=>{j=null,Y=null,F=null,E("main")}};e==="dart"?z=Ft(t,s)??null:e==="cricket"?z=Wt(t,s)??null:e==="breakout"?z=Xt(t,s)??null:e==="race"&&(z=Zt(t,s)??null)}
