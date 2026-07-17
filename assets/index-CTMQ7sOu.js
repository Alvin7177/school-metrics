(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();const T=8,E={title:"SCHOOL METRICS",subtitle:"철저한 내신관리 시스템",footer:"for 해연중 학생들",creator:"2210 박민호"},P="schoolMetricsUniqueSubjects";function ne(){try{const e=localStorage.getItem(P),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch{return[]}}function be(e){localStorage.setItem(P,JSON.stringify(e))}function me(e){const t=ne(),n=!t.includes(e);return n&&(t.push(e),be(t)),{isNew:n,uniqueCount:t.length,justUnlocked:n&&t.length>=T}}function G(){return ne().length}function B(){return G()>=T}function ge(){return Math.max(0,T-G())}function fe(){localStorage.removeItem(P)}function le(){const e=G(),t=ge();return B()?`서로 다른 과목 ${e}개 달성! 휴식 미니게임 이용 가능`:`서로 다른 과목 ${t}개 더 계산하면 해금 (${e}/${T})`}const D=["희망은 좋은 것이다. 어쩌면 가장 좋은 것일지도. — 《쇼생크 탈출》","해야 한다, 아니면 안 된다. 그 중간은 없다. — 《스타워즈》","과거는 과거일 뿐이야. 배울 수만 있다면. — 《라이온 킹》","가장 어두운 시간은 해가 뜨기 직전이다. — 《어벤져스: 엔드게임》","세상에서 중요한 건 내가 누구냐가 아니라, 내가 뭘 하느냐다. — 《배트맨: 다크나이트》","우리에게 주어진 시간을 어떻게 쓸지만 결정하면 된다. — 《반지의 제왕》","아주 작은 존재도 미래를 바꿀 수 있다. — 《반지의 제왕》","자유는 아무 대가 없이 오지 않는다. — 《브레이브하트》","지금 이 순간을 잡아라. — 《데드 포엇 소사이어티》","무엇이든 할 수 있다. — 《쿵푸 판다》","그냥 계속 헤엄쳐. — 《니모를 찾아서》","모든 걸 시도해 봐. — 《주토피아》","두려움을 없애는 방법은 그것과 마주하는 것이다. — 《인사이드 아웃》","뜻이 있는 곳에 길이 있다. — 《아바타》","비가 그친 뒤에는 반드시 맑은 하늘이 온다. — 《날씨의 아이》","나는 이 세계를 이해할 수 없어. 그래도 계속한다. — 《록키》","시련이 없었다면 챔피언도 없다. — 《록키》","인생은 수레바퀴와 같아. 항상 앞으로 나아가야 한다. — 《니모를 찾아서》","이겨야 한다. 어떻게든. — 《친구》","꿈은 거짓말이 아니다. 반드시 이루어질 내일이다. — 《드림하이》","포기하면 그 순간 게임 끝이야, 인생도 마찬가지다. — 《슬램덩크》","죽을 때 후회 없는 인생을 살아라. — 《원피스》","약한 것은 죄가 아니다. 약한 채로 있으면 안 될 뿐. — 《귀멸의 칼날》","막을 때까지 싸워라. — 《진격의 거인》","노력은 배신하지 않는다. — 《하이큐!!》","패배는 패배하지 않는 것보다 낫다. — 《하이큐!!》","시선을 돌리지 마. 앞만 봐. — 《센과 치히로의 행방불명》","살아있는 한 힘을 내라. — 《하울의 움직이는 성》","바람이 분다. 견뎌야 한다. — 《바람의 나라》","상대는 나 자신이다. — 《초속 5센티미터》","포기하지 말 것. 내일이 있으니. — 《드래곤볼》","사람은 누구나 다시 태어날 수 있다. — 《바람의 나라》","아는 것이 힘이다. — 프랜시스 베이컨","천 리 길도 한 걸음부터. — 노자","배우고 또 배우면 어찌 기쁘지 아니하랴. — 공자","백번 듣는 것보다 한 번 보는 것이 낫다. — 공자","세 사람이 길을 가면 반드시 나의 스승이 있다. — 공자","하늘은 큰 뜻을 품은 자에게 먼저 고생을 시킨다. — 맹자","독서는 마음의 양식이다. — 키케로","하늘은 스스로 돕는 자를 돕는다. — 소포클레스","그대가 갈망하는 것을 따르라. — 랄프 왔도 에머슨","겁쟁이는 죽기 전에 여러 번 죽는다. 용감한 자는 한 번만 죽는다. — 셰익스피어","열정 없이는 위대한 것은 이루어지지 않는다. — 게오르크 빌헬름 프리드리히 헤겔","나는 나의 운명을 사랑한다. — 프리드리히 니체","오늘 할 일을 내일로 미루지 마라. — 벤자민 프랭클린","천재는 1%의 영감과 99%의 땀이다. — 토마스 에디슨","실패는 성공의 어머니이다. — 토마스 에디슨","시간은 금이다. — 벤자민 프랭클린","어리석은 자는 경험에서 아무것도 배우지 않는다. — 벤자민 프랭클린","실용적인 것이 가장 시적인 것이다. — 벤자민 프랭클린","깊은 생각 없는 독서는 낮잠과 같다. — 프랜시스 베이컨","인생은 속도가 아니라 방향이다. — 에이브러햄 링컨","성공은 최종적인 것이 아니며, 실패는 치명적인 것이 아니다. — 윈스턴 처칠","가장 위대한 영광은 넘어지지 않는 것이 아니라, 넘어질 때마다 일어서는 것이다. — 넬슨 만델라","용기는 두려움의 부재가 아니라, 두려움에도 행동하는 것이다. — 넬슨 만델라","네가 할 수 있다고 믿든 못 한다고 믿든, 네 말이 맞다. — 헨리 포드","성공의 비결은 시작하는 것이다. — 마크 트웨인","행운은 준비된 자에게 찾아온다. — 루이 파스퇴르","한계란 대부분 마음속에 있는 환상일 뿐이다. — 무하마드 알리","나는 세계 챔피언이다. 내가 그렇다고 말하기 전부터. — 무하마드 알리","항상 갈망하고, 우직하게 나아가라. — 스티브 잡스","당신의 시간은 제한되어 있다. 다른 사람의 인생을 살며 낭비하지 마라. — 스티브 잡스","오늘 나는 죽었다면 무엇을 후회하겠는가. — 스티브 잡스","죽고자 하면 살 것이요, 살고자 하면 죽을 것이니라. — 이순신","한 번도 실수한 적 없는 사람은 새로운 것을 시도한 적이 없는 사람이다. — 알버트 아인슈타인","네가 정말 소중히 여기는 것에 시간을 써라. — 《어린 왕자》","꽃을 단 한 송이라도 내가 직접 가꾸면, 내 세계에 엇비슷한 시간이 흐른다. — 《어린 왕자》","세상에서 가장 강한 사람은 스스로를 이기는 사람이다. — 무라카미 하루키","빛을 보고자 한다면 어둠을 견뎌야 한다. — 무라카미 하루키","사람은 마음먹은 것은 다 이룬다. — 《바보》","고통 없이는 얻는 것도 없다. — 라틴 격언","로마는 하루아침에 이루어지지 않았다. — 속담","연습이 완벽을 만든다. — 속담","배움에는 왕도가 없다. — 유클리드","작은 일에 충실하라. 그곳에 네 힘이 있다. — 루드야드 키플링","가장 큰 위험은 위험을 감수하지 않는 것이다. — 마크 주커버그","인생은 짧고, 예술은 길다. — 히포크라테스","삶을 살아가는 가장 좋은 복수는 성공하는 것이다. — 프랭크 시나트라","피할 수 없으면 즐겨라. — 로버트 엘리엇","포기하지 않는 한, 늦었다고 생각할 때가 가장 빠른 때다. — 속담","꾸준함은 재능을 이긴다. — 속담","반복은 지루하지만, 반복 없는 실력은 환상이다. — 속담","오늘의 노력이 내일의 실력이 된다. — 속담","지금이 가장 빠른 시작이다. — 속담","목표 없는 공부는 방향 잃은 배와 같다. — 속담","모르는 것을 아는 것이 배움의 시작이다. — 속담","실력은 하루아침에 생기지 않는다. — 속담","쉬는 것도 실력이다. 번아웃을 조심하자. — 속담","비교하지 말고, 어제의 나와 겨루자. — 속담","이해가 안 되면 다시 보면 된다. 반복이 답이다. — 속담","시험은 결과일 뿐, 과정이 실력이다. — 속담","1%씩 매일 오르면 37배가 된다. — 속담","모르는 건 부끄러운 게 아니다. 묻지 않는 게 문제다. — 속담","오답 노트 한 장이 교과서 열 페이지보다 강하다. — 속담","할 수 있다고 믿는 순간, 절반은 온 것이다. — 속담","오늘 공부한 만큼, 내일은 덜 불안하다. — 속담"],Y="schoolMetricsQuoteIndex";function pe(){let e=Number(localStorage.getItem(Y)||0);const t=D[e%D.length];return localStorage.setItem(Y,String((e+1)%D.length)),t}const he={1:{label:"1학년",note:"1학년은 2학기부터 내신 성적이 반영됩니다.",subjects:{국어:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"나만의 노트(나노)",weight:15,kind:"perf"}]}}},수학:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"기본도형 탐구 프로젝트",weight:20,kind:"perf"},{label:"평면·입체 도형 탐구",weight:20,kind:"perf"}]}}},사회:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"사회화 자서전 만들기",weight:20,kind:"perf"},{label:"모의 선거",weight:20,kind:"perf"}]}}},과학:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"실험 보고서 작성",weight:20,kind:"perf"},{label:"달의 위상 변화 관찰",weight:20,kind:"perf"}]}}},영어:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"희망 직업 소개",weight:20,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]}}},음악:{semesters:{2:{label:"2학기",items:[{label:"우쿨렐레 연주",weight:50,kind:"perf"},{label:"작곡가 탐구 활동",weight:50,kind:"perf"}]}}},미술:{semesters:{2:{label:"2학기",items:[{label:"스텐실",weight:50,kind:"perf"},{label:"문자도",weight:50,kind:"perf"}]}}},체육:{semesters:{2:{label:"2학기",items:[{label:"경기형 스포츠(축구)",weight:50,kind:"perf"},{label:"기록 도전형(달리기)",weight:50,kind:"perf"}]}}},정보:{semesters:{2:{label:"2학기",items:[{label:"AI 활용",weight:50,kind:"perf"},{label:"디지털 문화 표현",weight:50,kind:"perf"}]}}},"진로와 직업":{semesters:{2:{label:"2학기",items:[{label:"창업 프로젝트",weight:50,kind:"perf"},{label:"진로 디자인",weight:50,kind:"perf"}]}}},기술가정:{semesters:{2:{label:"2학기",items:[{label:"과학·미래기술 보고서",weight:35,kind:"perf"},{label:"에너지 신문 제작",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]}}}}},2:{label:"2학년",subjects:{국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"발표와 듣기",weight:15,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"복합양식 자료를 활용한 글 작성",weight:15,kind:"perf"}]}}},수학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"일차방정식·일차부등식",weight:20,kind:"perf"},{label:"연립일차방정식·일차함수",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"삼각형·사각형의 성질",weight:20,kind:"perf"},{label:"도형의 닮음·피타고라스",weight:20,kind:"perf"}]}}},역사:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"고대 문명 지도 만들기",weight:20,kind:"perf"},{label:"고대사 신문 만들기",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"서양 고대 문화유산 소개",weight:20,kind:"perf"},{label:"유럽 여행 소개 글쓰기",weight:20,kind:"perf"}]}}},과학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"밀도 측정",weight:10,kind:"perf"},{label:"지권 층상구조 모형 제작",weight:10,kind:"perf"},{label:"주기율표 탐구",weight:10,kind:"perf"},{label:"광합성 탐구",weight:10,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"소리의 성질 탐구",weight:10,kind:"perf"},{label:"인체 프로젝트",weight:20,kind:"perf"},{label:"전류,전압,저항 사이의 관계 탐구",weight:10,kind:"perf"}]}}},영어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"},{label:"발명품 소개",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"지역 축제 홍보",weight:20,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]}}},음악:{semesters:{1:{label:"1학기",items:[{label:"우쿨렐레 연주",weight:50,kind:"perf"},{label:"텅드럼 연주",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"펜비트 연주",weight:50,kind:"perf"},{label:"리코더 연주",weight:50,kind:"perf"}]}}},미술:{semesters:{1:{label:"1학기",items:[{label:"세밀화",weight:50,kind:"perf"},{label:"음식 모형 만들기",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"점묘화",weight:50,kind:"perf"},{label:"서양미술사 보고서",weight:50,kind:"perf"}]}}},체육:{semesters:{1:{label:"1학기",items:[{label:"경기형 스포츠(킨볼)",weight:60,kind:"perf"},{label:"도전형(제자리멀리뛰기)",weight:40,kind:"perf"}]},2:{label:"2학기",items:[{label:"경기형 스포츠(배드민턴)",weight:60,kind:"perf"},{label:"건강관리(줄넘기)",weight:40,kind:"perf"}]}}},도덕:{semesters:{1:{label:"1학기",items:[{label:"도덕적 인물 지폐 제작",weight:50,kind:"perf"},{label:"우정 네 컷 만들기",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"정보 카드 뉴스 제작",weight:50,kind:"perf"},{label:"인권 모니터링 제안서",weight:50,kind:"perf"}]}}},중국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 기말고사",weight:40,kind:"exam"},{label:"한어병음 작성",weight:30,kind:"perf"},{label:"중국어 말하기",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 기말고사",weight:40,kind:"exam"},{label:"하루 일과표 만들기",weight:30,kind:"perf"},{label:"중국어 말하기",weight:30,kind:"perf"}]}}},"금융과 미래":{semesters:{2:{label:"2학기",items:[{label:"투자 성향 검사",weight:50,kind:"perf"},{label:"투자 포트폴리오 구성",weight:50,kind:"perf"}]}}},기술가정:{semesters:{1:{label:"1학기",items:[{label:"효과적 의사소통 프로젝트",weight:35,kind:"perf"},{label:"제조 기술 프로젝트",weight:35,kind:"perf"},{label:"자기주도노트 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"균형 잡힌 식단 계획",weight:35,kind:"perf"},{label:"친환경 의복 생활",weight:35,kind:"perf"},{label:"자기주도노트 작성",weight:30,kind:"perf"}]}}}}},3:{label:"3학년",note:"3학년 2학기에는 기말고사가 없습니다.",subjects:{국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"논설문 쓰기",weight:15,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"한 학기 한 권 읽기",weight:30,kind:"perf"},{label:"문장의 짜임 고려해서 자신감 있게 발표",weight:30,kind:"perf"}]}}},사회:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"국가 기관 탐구로 권력 분립 이해",weight:20,kind:"perf"},{label:"국민 경제 지표와 국제 거래 이해",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"인구·도시 문제 탐구",weight:30,kind:"perf"},{label:"농업 산업화·세계화",weight:30,kind:"perf"}]}}},역사:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"고려 정치 변천",weight:20,kind:"perf"},{label:"고려의 문화 및 조선 통치 체제 탐구",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"조선 왕 가상 인터뷰",weight:30,kind:"perf"},{label:"양 난의 이해 및 영정조 정책 탐구",weight:30,kind:"perf"}]}}},도덕:{semesters:{1:{label:"1학기",items:[{label:"1학기 기말고사",weight:40,kind:"exam"},{label:"폭력 예방 논술문 작성",weight:30,kind:"perf"},{label:"사회 정의 실현 논술문 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"환경 보호 제안서",weight:30,kind:"perf"},{label:"실패 이력서 소개",weight:30,kind:"perf"}]}}},수학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"인수분해를 이용한 수의 성질 탐구",weight:20,kind:"perf"},{label:"이차함수 그래프",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"삼각비 개념 보고서",weight:30,kind:"perf"},{label:"원의 성질 문제해결",weight:30,kind:"perf"}]}}},과학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"기상 현상 실험",weight:20,kind:"perf"},{label:"화학 반응의 규칙 탐구",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"세포분열 관찰 실험",weight:30,kind:"perf"},{label:"물체 운동 분석",weight:30,kind:"perf"}]}}},영어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:15,kind:"perf"},{label:"급식 메뉴 프로젝트",weight:15,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"영어 듣기",weight:20,kind:"perf"},{label:"영어독서",weight:20,kind:"perf"},{label:"통계 자료 활용 프로젝트",weight:20,kind:"perf"}]}}},음악:{semesters:{1:{label:"1학기",items:[{label:"칼림바 연주",weight:50,kind:"perf"},{label:"전자드럼 연주",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"노래 부르기",weight:50,kind:"perf"},{label:"디자인사 연구보고서",weight:50,kind:"perf"}]}}},미술:{semesters:{1:{label:"1학기",items:[{label:"포트레이트 드로잉",weight:50,kind:"perf"},{label:"비주얼 리터러시",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"오마주",weight:50,kind:"perf"},{label:"디자인 조사 보고서",weight:50,kind:"perf"}]}}},체육:{semesters:{1:{label:"1학기",items:[{label:"전통 표현(티니클링)",weight:40,kind:"perf"},{label:"플로어볼",weight:60,kind:"perf"}]},2:{label:"2학기",items:[{label:"건강·체력 관리(타바타)",weight:40,kind:"perf"},{label:"배구",weight:60,kind:"perf"}]}}},기술가정:{semesters:{1:{label:"1학기",items:[{label:"생애 설계",weight:35,kind:"perf"},{label:"수송기술 제작",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"스마트폰 앱 만들기",weight:35,kind:"perf"},{label:"적정 기술 사례 조사",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]}}}}}};function z(e){return he[e]??null}function ke(e){const t=z(e);return t?Object.keys(t.subjects):[]}function K(e,t){var n;return((n=z(e))==null?void 0:n.subjects[t])??null}function ie(e,t){const n=K(e,t);return n?Object.keys(n.semesters).map(Number).sort((i,a)=>i-a):[]}function we(e,t,n){var a;const i=K(e,t);return((a=i==null?void 0:i.semesters[n])==null?void 0:a.items)??[]}function Z(e,t,n){var a;const i=K(e,t);return((a=i==null?void 0:i.semesters[n])==null?void 0:a.label)??`${n}학기`}function ve(e,t,n,i){return`${e}-${t}-${n}-${i}`}function ye(e,t,n){return we(e,t,n).map((a,l)=>({key:ve(e,t,n,l),subject:t,semester:n,label:a.label,weight:a.weight,kind:a.kind}))}function ae(e,t){let n=0,i=0;for(const a of e){const l=t[a.key];if(l===""||l===null||l===void 0)continue;const o=Number(l);Number.isNaN(o)||(n+=a.weight,i+=o*a.weight)}return n===0?null:i/n}function $e(e,t){const n={},i=[];for(const l of e){const o=t[l.key];if(o===""||o===null||o===void 0){i.push(l);continue}const m=Number(o);if(Number.isNaN(m)){i.push(l);continue}n[l.key]=m}const a={...n};for(const l of i)a[l.key]=100;return{average:ae(e,a),remainingCount:i.length}}const xe=["음악","미술","체육"],re=[{letter:"A",min:90,label:"A (90점 이상)"},{letter:"B",min:80,label:"B (80점 이상)"},{letter:"C",min:70,label:"C (70점 이상)"},{letter:"D",min:60,label:"D (60점 이상)"},{letter:"E",min:0,label:"E (60점 미만)"}],se=[{letter:"A",min:80,label:"A (80점 이상)"},{letter:"B",min:60,label:"B (60점 이상)"},{letter:"C",min:0,label:"C (60점 미만)"}];function X(e){return xe.includes(e)}function W(e){return e==null||Number.isNaN(e)?null:Math.round(e)}function J(e){return X(e)?se:re}function _(e,t){const n=W(e);if(n===null)return"-";const i=J(t);for(const a of i)if(n>=a.min)return a.letter;return i[i.length-1].letter}function U(e){return`${e}등급`}const V=["조금만 더 올리면 된다. 할 수 있어!","상위 등급이 코앞이다. 끝까지 달려보자!","지금의 노력이 등급을 바꾼다. 포기하지 마!","아직 끝나지 않았어. 충분히 올릴 수 있어!","남은 항목이 기회다. 집중해서 마무리하자!","한 걸음만 더 가면 등급이 달라진다. 파이팅!","가능성은 아직 살아 있다. 믿고 가보자!","오늘의 한 문제가 등급을 바꿀 수도 있어!","목표 등급까지 거의 다 왔다. 조금만 더!","실력은 거짓말하지 않는다. 계속 밀어붙여!"];function Se(e){return e.projection.remainingCount>0&&e.letter!==e.projLetter}function Le(){const e=Math.floor(Math.random()*V.length);return V[e]}function ce(e=null){const t=e?X(e):!1;return`
    <div class="grade-criteria-wrap">
      <button type="button" class="grade-criteria-bar" data-toggle="criteria" aria-expanded="false">
        ▶ 등급 기준표 확인
      </button>
      <div class="grade-criteria-panel hidden" id="criteria-panel">
        <p class="criteria-note">${e?t?`${e}은(는) 예체능 과목 (A·B·C)`:`${e}은(는) 일반 과목 (A·B·C·D·E)`:"과목 유형에 따라 등급 기준이 다릅니다."}</p>
        <p class="criteria-note muted">총점은 소수점을 반올림한 뒤 등급을 산출합니다.</p>
        <table class="criteria-table">
          <thead>
            <tr><th colspan="2">일반 과목 (국·영·수·사·과 등)</th></tr>
          </thead>
          <tbody>
            ${re.map(i=>`<tr><td>${i.letter}</td><td>${i.min===0?"60점 미만":`${i.min}점 이상`}</td></tr>`).join("")}
          </tbody>
        </table>
        <table class="criteria-table">
          <thead>
            <tr><th colspan="2">예체능 (음악·미술·체육)</th></tr>
          </thead>
          <tbody>
            ${se.map(i=>`<tr><td>${i.letter}</td><td>${i.min===0?"60점 미만":`${i.min}점 이상`}</td></tr>`).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `}function oe(e){const t=e.querySelector("[data-toggle='criteria']"),n=e.querySelector("#criteria-panel");!t||!n||t.addEventListener("click",()=>{const i=n.classList.toggle("hidden");t.setAttribute("aria-expanded",String(!i)),t.textContent=i?"▶ 등급 기준표 확인":"▼ 등급 기준표 닫기"})}function Ce(e,t,n,i){if(n===null)return null;const a=W(n),l=_(a,i),o=J(i),m=o.findIndex(f=>f.letter===l);if(m<=0)return{targetLetter:l,needed:null,message:"이미 최고 등급입니다."};const v=o[m-1],w=v.min,y=e.filter(f=>{const s=t[f.key];return s===""||s===null||s===void 0||Number.isNaN(Number(s))});if(y.length===0)return{targetLetter:v.letter,needed:null,message:"모든 항목이 입력되었습니다."};let p=0,c=0,d=0;for(const f of e){const s=t[f.key];if(s===""||s===null||s===void 0||Number.isNaN(Number(s))){d+=f.weight;continue}p+=f.weight,c+=Number(s)*f.weight}if(d===0)return null;const r=p+d,h=(w*r-c)/d,k=Math.max(0,Math.min(100,h));return{targetLetter:v.letter,needed:Math.ceil(k*10)/10,remainingCount:y.length,message:null}}function Ne(e,t,n,i){const l=J(i).find(r=>r.letter===n);if(!l)return null;let o=0,m=0,v=0,w=0;for(const r of e){const h=t[r.key];if(h===""||h===null||h===void 0||Number.isNaN(Number(h))){v+=r.weight,w+=1;continue}m+=r.weight,o+=Number(h)*r.weight}if(v===0)return null;const y=m+v,c=((l.min-.5)*y-o)/v;return{minScore:Math.ceil(Math.max(0,Math.min(100,c))*10)/10,remainingCount:w}}function Ee(e){const t=W(e);return{raw:e,rounded:t,display:`${t}점`}}function Me(e,t,n){const i=ae(e,t);if(i===null)return null;const{rounded:a}=Ee(i),l=_(a,n),o=$e(e,t),m=W(o.average),v=Ce(e,t,i,n),w=Ne(e,t,l,n);return{average:i,rounded:a,letter:l,projection:o,projRounded:m,projLetter:_(m,n),needed:v,confirmMin:w}}function H(e="globe"){return`
    <svg class="${e}" viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="48" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.35"/>
      <ellipse cx="60" cy="60" rx="48" ry="16" fill="none" stroke="currentColor" stroke-width="1"/>
      <ellipse cx="60" cy="60" rx="16" ry="48" fill="none" stroke="currentColor" stroke-width="1"/>
      <ellipse cx="60" cy="60" rx="34" ry="48" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.7"/>
      <line x1="12" y1="60" x2="108" y2="60" stroke="currentColor" stroke-width="0.8"/>
      <line x1="60" y1="12" x2="60" y2="108" stroke="currentColor" stroke-width="0.8"/>
    </svg>
  `}function Ae(){return'<img class="title-bg" src="./title-bg.png" alt="" aria-hidden="true" />'}function Te(){return'<img class="go-bg" src="./go-bg.png" alt="" aria-hidden="true" />'}function de(e){return`grade-theme-${e}`}function A(e,t=""){return`<div class="phone-screen ${t}">${e}</div>`}function I(e){return`<p class="screen-footer">${e}</p>`}function O(e="main"){return`<button type="button" class="link-btn" data-action="${e}">메인화면으로</button>`}function qe(e,{onBack:t,onMain:n}){let i=0,a=8;e.innerHTML=`
    <div class="game-panel">
      <h2 class="game-title">다트 게임</h2>
      <p class="game-desc">원판을 터치해서 점수를 모으세요.</p>
      <div class="dart-stats">
        <span id="dart-score">점수: 0</span>
        <span id="dart-throws">남은 횟수: 8</span>
      </div>
      <div class="dart-board" id="dart-board" role="button" tabindex="0" aria-label="다트판">
        <div class="dart-ring ring-outer"></div>
        <div class="dart-ring ring-mid"></div>
        <div class="dart-ring ring-inner"></div>
        <div class="dart-bull"></div>
      </div>
      <p class="game-feedback" id="dart-feedback">다트판을 눌러보세요!</p>
      ${je()}
    </div>
  `;const l=e.querySelector("#dart-board"),o=e.querySelector("#dart-score"),m=e.querySelector("#dart-throws"),v=e.querySelector("#dart-feedback");function w(y){var g,b,S,L;if(a<=0)return;const p=l.getBoundingClientRect(),c=(y.clientX??((b=(g=y.touches)==null?void 0:g[0])==null?void 0:b.clientX))-p.left-p.width/2,d=(y.clientY??((L=(S=y.touches)==null?void 0:S[0])==null?void 0:L.clientY))-p.top-p.height/2,r=Math.sqrt(c*c+d*d),h=p.width/2;let k=0,f="";const s=r/h;s<=.08?(k=50,f="불스아이! +50"):s<=.22?(k=30,f="안쪽! +30"):s<=.45?(k=20,f="중간! +20"):s<=.75?(k=10,f="바깥! +10"):(k=0,f="빗나감!"),i+=k,a-=1,o.textContent=`점수: ${i}`,m.textContent=`남은 횟수: ${a}`,v.textContent=a>0?f:`게임 종료! 최종 ${i}점`;const u=document.createElement("span");u.className="dart-mark",u.style.left=`${50+c/h*50}%`,u.style.top=`${50+d/h*50}%`,l.appendChild(u)}return l.addEventListener("click",w),l.addEventListener("touchstart",y=>{y.preventDefault(),w(y)}),Re(e,t,n),()=>{l.removeEventListener("click",w)}}function je(e,t){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function Re(e,t,n){var i,a;(i=e.querySelector('[data-nav="back"]'))==null||i.addEventListener("click",t),(a=e.querySelector('[data-nav="main"]'))==null||a.addEventListener("click",n)}function ze(e,{onBack:t,onMain:n}){let l=[],o=0,m=!1;function v(){l=Array.from({length:6},()=>Array.from({length:6},()=>({mine:!1,open:!1,flag:!1,count:0})));let p=0;for(;p<6;){const c=Math.floor(Math.random()*6),d=Math.floor(Math.random()*6);l[c][d].mine||(l[c][d].mine=!0,p++)}for(let c=0;c<6;c++)for(let d=0;d<6;d++)l[c][d].mine||(l[c][d].count=w(c,d));o=0,m=!1}function w(p,c){let d=0;for(let r=-1;r<=1;r++)for(let h=-1;h<=1;h++){if(!r&&!h)continue;const k=p+r,f=c+h;k>=0&&k<6&&f>=0&&f<6&&l[k][f].mine&&d++}return d}function y(){var k,f;e.innerHTML=`
      <div class="game-panel">
        <h2 class="game-title">지뢰찾기</h2>
        <p class="game-desc">길게 눌러 깃발, 짧게 눌러 열기</p>
        <p class="game-feedback" id="mine-feedback">안전한 칸을 모두 찾으세요!</p>
        <div class="mine-grid" id="mine-grid"></div>
        <button type="button" class="btn-secondary" id="mine-reset">다시 하기</button>
        <div class="nav-row">
          <button type="button" class="nav-btn" data-nav="back">뒤로</button>
          <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
        </div>
      </div>
    `;const p=e.querySelector("#mine-grid"),c=e.querySelector("#mine-feedback");for(let s=0;s<6;s++)for(let u=0;u<6;u++){const g=document.createElement("button");g.type="button",g.className="mine-cell",g.dataset.r=String(s),g.dataset.c=String(u),g.textContent="",p.appendChild(g)}function d(){p.querySelectorAll(".mine-cell").forEach(s=>{const u=Number(s.dataset.r),g=Number(s.dataset.c),b=l[u][g];s.classList.toggle("open",b.open),s.classList.toggle("flag",b.flag),s.classList.toggle("mine",b.open&&b.mine),b.open&&!b.mine&&b.count>0?s.textContent=String(b.count):b.flag?s.textContent="⚑":s.textContent=""})}function r(s,u){if(!(m||l[s][u].open||l[s][u].flag)){if(l[s][u].open=!0,o++,l[s][u].mine){m=!0,c.textContent="지뢰! 다시 도전해보세요.";for(let g=0;g<6;g++)for(let b=0;b<6;b++)l[g][b].mine&&(l[g][b].open=!0);d();return}if(l[s][u].count===0)for(let g=-1;g<=1;g++)for(let b=-1;b<=1;b++){const S=s+g,L=u+b;S>=0&&S<6&&L>=0&&L<6&&!l[S][L].open&&r(S,L)}o===30&&(m=!0,c.textContent="클리어! 잘 쉬었어요."),d()}}let h=null;p.addEventListener("click",s=>{const u=s.target.closest(".mine-cell");if(!u||m)return;const g=Number(u.dataset.r),b=Number(u.dataset.c);r(g,b)}),p.addEventListener("touchstart",s=>{const u=s.target.closest(".mine-cell");if(!u||m)return;const g=Number(u.dataset.r),b=Number(u.dataset.c);h=setTimeout(()=>{l[g][b].flag=!l[g][b].flag,d(),h=null},450)}),p.addEventListener("touchend",()=>{h&&clearTimeout(h)}),e.querySelector("#mine-reset").addEventListener("click",()=>{v(),c.textContent="안전한 칸을 모두 찾으세요!",d()}),(k=e.querySelector('[data-nav="back"]'))==null||k.addEventListener("click",t),(f=e.querySelector('[data-nav="main"]'))==null||f.addEventListener("click",n),d()}v(),y()}function Be(e,{onBack:t,onMain:n}){var u,g;let i=0,a=0;const l=12;let o=null,m=50,v=1,w=!1;e.innerHTML=`
    <div class="game-panel">
      <h2 class="game-title">크리켓 배팅</h2>
      <p class="game-desc">공이 타격존에 올 때 SWING! 버튼을 누르세요.</p>
      <div class="cricket-stats">
        <span id="cricket-runs">득점: 0</span>
        <span id="cricket-balls">볼: 0 / 12</span>
      </div>
      <div class="cricket-lane">
        <div class="cricket-zone" id="cricket-zone"></div>
        <div class="cricket-ball" id="cricket-ball"></div>
      </div>
      <button type="button" class="btn-go" id="cricket-swing">SWING!</button>
      <p class="game-feedback" id="cricket-feedback">타이밍에 맞춰 스윙하세요!</p>
      <div class="nav-row">
        <button type="button" class="nav-btn" data-nav="back">뒤로</button>
        <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
      </div>
    </div>
  `;const y=e.querySelector("#cricket-ball"),p=e.querySelector("#cricket-zone"),c=e.querySelector("#cricket-runs"),d=e.querySelector("#cricket-balls"),r=e.querySelector("#cricket-feedback"),h=e.querySelector("#cricket-swing");function k(){p.style.left=`${m}%`}function f(){m+=v*1.8,(m>=78||m<=22)&&(v*=-1),k(),o=requestAnimationFrame(f)}function s(){if(w||a>=l)return;w=!0,a++;const b=50,S=m-8,L=m+8,ue=b>=S&&b<=L;let j=0;if(ue){const Q=Math.abs(b-m);Q<2?j=6:Q<5?j=4:j=2,r.textContent=`안타! +${j}점`}else r.textContent="헛스윙!";i+=j,c.textContent=`득점: ${i}`,d.textContent=`볼: ${a} / ${l}`,y.classList.add("hit"),setTimeout(()=>y.classList.remove("hit"),200),a>=l&&(cancelAnimationFrame(o),r.textContent=`경기 종료! 총 ${i}점`,h.disabled=!0),setTimeout(()=>{w=!1},350)}return k(),o=requestAnimationFrame(f),h.addEventListener("click",s),(u=e.querySelector('[data-nav="back"]'))==null||u.addEventListener("click",()=>{cancelAnimationFrame(o),t()}),(g=e.querySelector('[data-nav="main"]'))==null||g.addEventListener("click",()=>{cancelAnimationFrame(o),n()}),()=>cancelAnimationFrame(o)}const $=document.getElementById("app");let C=null,M=null,N=null,R=null,ee=!1;const te=new Set(["rest","game-dart","game-mine","game-cricket"]),He={main:Ue,help:Ge,grade:We,subject:De,calculator:Fe,rest:_e,"game-dart":()=>F("dart"),"game-mine":()=>F("mine"),"game-cricket":()=>F("cricket")};Ie();function Ie(){x("main")}function x(e,t={}){R&&(R(),R=null),ee&&!te.has(e)&&fe();const n=He[e];n&&($.innerHTML="",n(t),ee=te.has(e),window.scrollTo(0,0))}function q(e){e.querySelectorAll("[data-action]").forEach(t=>{t.addEventListener("click",()=>Oe(t.dataset.action))})}function Oe(e){if(e==="main"){C=null,M=null,N=null,x("main");return}if(e==="grade"){M=null,N=null,x("grade");return}if(e==="help"&&x("help"),e==="rest"&&x("rest"),e==="subject"&&x("subject",{grade:C}),e==="game-dart"&&x("game-dart"),e==="game-mine"&&x("game-mine"),e==="game-cricket"&&x("game-cricket"),e.startsWith("pick-grade-")){C=Number(e.replace("pick-grade-","")),M=null,N=null,x("subject",{grade:C});return}if(e.startsWith("pick-subject-")){const t=decodeURIComponent(e.replace("pick-subject-",""));M=t;const n=ie(C,t);N=(n.length===1,n[0]),x("calculator",{grade:C,subject:t,semester:N});return}e.startsWith("pick-semester-")&&(N=Number(e.replace("pick-semester-","")),x("calculator",{grade:C,subject:M,semester:N}))}function Ue(){const e=pe();$.innerHTML=A(`
    <div class="main-screen">
      <button type="button" class="help-btn" data-action="help" aria-label="앱 정보">?</button>
      <div class="main-header">
        <div class="title-block">
          ${Ae()}
          <h1 class="app-title">${E.title}</h1>
        </div>
        <p class="app-subtitle">${E.subtitle}</p>
        <p class="main-quote">"${e}"</p>
      </div>
      <div class="main-body">
        <button type="button" class="go-btn" data-action="grade" aria-label="시작">
          ${Te()}
          <span class="go-text">GO</span>
        </button>
      </div>
      <p class="main-footer">${E.footer}</p>
    </div>
  `),q($)}function Ge(){$.innerHTML=A(`
    <div class="stack-screen">
      ${H()}
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
          <li>서로 다른 과목 ${T}개 계산 시 미니게임 1회 해금</li>
          <li>미니게임 이용 후에는 다시 잠금</li>
        </ul>
        <p class="muted">제작: ${E.creator}</p>
        <p class="muted">기록된 과목: ${G()}개</p>
      </div>
      ${O()}
      ${I(E.subtitle)}
    </div>
  `),q($)}function We(){const e=B(),t=le();$.innerHTML=A(`
    <div class="stack-screen grade-screen">
      ${H()}
      <h2 class="screen-title">자신의 학년을 선택하세요</h2>
      <div class="grade-list">
        <button type="button" class="grade-btn grade-1" data-action="pick-grade-1">1학년</button>
        <button type="button" class="grade-btn grade-2" data-action="pick-grade-2">2학년</button>
        <button type="button" class="grade-btn grade-3" data-action="pick-grade-3">3학년</button>
      </div>
      ${e?'<button type="button" class="rest-btn" data-action="rest">휴식 · 미니게임</button>':`<p class="unlock-hint">${t}</p>`}
      ${O()}
      ${I(E.subtitle)}
    </div>
  `),q($)}function De({grade:e}){if(!e||!z(e)){x("grade");return}C=e;const t=z(e),n=ke(e);$.innerHTML=A(`
    <div class="stack-screen ${de(e)}">
      ${H()}
      <h2 class="screen-title">${t.label} 과목 선택</h2>
      ${t.note?`<p class="screen-note">${t.note}</p>`:""}
      ${ce()}
      <div class="subject-list">
        ${n.map(i=>`<button type="button" class="subject-btn" data-action="pick-subject-${encodeURIComponent(i)}">${i}</button>`).join("")}
      </div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="grade">학년 선택으로</button>
        ${O()}
      </div>
      ${I(E.subtitle)}
    </div>
  `),q($),oe($)}function Fe({grade:e,subject:t,semester:n}){if(!e||!t||!n){x("subject",{grade:C});return}C=e,M=t,N=n;const i=z(e),a=ie(e,t),l=ye(e,t,n),o=Z(e,t,n),m={},v=a.length>1?`<div class="semester-tabs">
          ${a.map(c=>`<button type="button" class="semester-tab ${c===n?"active":""}" data-action="pick-semester-${c}">${Z(e,t,c)}</button>`).join("")}
        </div>`:`<p class="semester-only">${o}</p>`;$.innerHTML=A(`
    <div class="stack-screen calculator-screen ${de(e)}">
      ${H("globe globe-small")}
      <h2 class="screen-title subject-title">${t}</h2>
      <p class="screen-desc">${i.label} · ${o}${X(t)?" · 예체능(A·B·C)":" · 일반(A~E)"}</p>
      ${ce(t)}
      ${v}
      <form id="calc-form" class="calc-form"></form>
      <button type="submit" form="calc-form" class="btn-calc">계산하기</button>
      <div id="calc-result" class="calc-result hidden"></div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="subject">과목 선택으로</button>
        ${O()}
      </div>
      ${I(E.subtitle)}
    </div>
  `);const w=$.querySelector("#calc-form");let y="";for(const c of l){if(c.kind!==y){y=c.kind;const r=document.createElement("h3");r.className="section-heading",r.textContent=c.kind==="exam"?"지필고사":"수행평가",w.appendChild(r)}const d=document.createElement("label");d.className="score-row",d.innerHTML=`
      <span>${c.label} <em>${c.weight}%</em></span>
      <input type="number" min="0" max="100" step="0.1" inputmode="decimal"
        name="${c.key}" placeholder="점수" />
    `,w.appendChild(d)}const p=$.querySelector("#calc-result");w.addEventListener("submit",c=>{var g,b;c.preventDefault();const d=new FormData(w);for(const S of l)m[S.key]=d.get(S.key);const r=Me(l,m,t);if(!r){p.classList.remove("hidden"),p.innerHTML='<p class="warn">최소 1개 이상 점수를 입력하세요.</p>';return}const h=me(t);let k="";((g=r.needed)==null?void 0:g.needed)!=null?k=`<p>상위 <strong>${U(r.needed.targetLetter)}</strong>까지 남은 항목 평균 <strong>${r.needed.needed}점</strong> 이상</p>`:(b=r.needed)!=null&&b.message&&(k=`<p>${r.needed.message}</p>`);let f="";if(r.projection.remainingCount>0&&r.letter===r.projLetter){const S=U(r.letter);let L="";r.confirmMin&&(r.confirmMin.minScore<=0?L=`<p>남은 항목이 <strong>0점</strong>이어도 ${S} 유지</p>`:L=`<p>남은 항목 각각 최소 <strong>${r.confirmMin.minScore}점</strong> 이상이면 ${S} 유지</p>`),f=`
        <p><strong>${S} 확정입니다.</strong></p>
        ${L}
      `}let s="";Se(r)&&(s=`<p class="cheer-msg">${Le()}</p>`);let u="";h.justUnlocked?u=`<p class="success">서로 다른 과목 ${T}개 달성! 학년 선택에서 휴식 미니게임 이용</p>`:B()?u='<p class="success">휴식 미니게임 이용 가능 (학년 선택 화면)</p>':h.isNew?u=`<p class="muted">${le()}</p>`:u='<p class="muted">이미 계산한 과목입니다. 다른 과목을 계산하면 해금에 가까워져요.</p>',p.classList.remove("hidden"),p.innerHTML=`
      <h3>${t} 결과</h3>
      <p>총점(반올림) <strong>${r.rounded}점</strong> · <strong>${U(r.letter)}</strong></p>
      <p class="muted">가중 평균 ${r.average.toFixed(1)}점</p>
      <p>남은 항목 100점 시 <strong>${r.projRounded}점</strong> · <strong>${U(r.projLetter)}</strong></p>
      ${f}
      ${s}
      ${k}
      ${u}
    `}),q($),oe($)}function _e(){if(!B()){x("grade");return}$.innerHTML=A(`
    <div class="stack-screen">
      ${H()}
      <h2 class="screen-title">휴식 · 미니게임</h2>
      <div class="game-list">
        <button type="button" class="game-card" data-action="game-dart">다트 게임</button>
        <button type="button" class="game-card" data-action="game-mine">지뢰찾기</button>
        <button type="button" class="game-card" data-action="game-cricket">크리켓 게임</button>
      </div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="grade">학년 선택으로</button>
        ${O()}
      </div>
      ${I(E.subtitle)}
    </div>
  `),q($)}function F(e){if(!B()){x("grade");return}$.innerHTML=A('<div id="game-root"></div>',"game-screen");const t=$.querySelector("#game-root"),n={onBack:()=>x("rest"),onMain:()=>{C=null,M=null,N=null,x("main")}};e==="dart"?R=qe(t,n)??null:e==="mine"?ze(t,n):e==="cricket"&&(R=Be(t,n)??null)}
