(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();const rt=8,R={title:"SCHOOL METRICS",subtitle:"철저한 내신관리 시스템",footer:"for 해연중 학생들",creator:"2210 박민호"},fe={apiKey:"AIzaSyB7YJBfYa9zGnUvLD4DFgR5KLiNKuluHJM",authDomain:"school-metrics-fdee3.firebaseapp.com",projectId:"school-metrics-fdee3",storageBucket:"school-metrics-fdee3.firebasestorage.app",messagingSenderId:"378255554733",appId:"1:378255554733:web:01b06dca5b5307860eae24",measurementId:"G-0BL416S3QD"},Ee="alyssabell729@gmail.com",Nt=[Ee,"20251413@haeyeon.ms.kr"];function T(){return!!(fe.apiKey&&fe.projectId&&fe.appId)}function Q(e){return String(e||"").trim().toLowerCase()===Ee.toLowerCase()}function Re(e){const t=String(e||"").trim().toLowerCase();return Nt.some(n=>n.toLowerCase()===t)}const Ct="https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js",_="https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js",Z="https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";let ce=null,we=null,de=null,ke=null;async function st(){return T()?ce||(ke||(ke=(async()=>{const{initializeApp:e,getApps:t}=await import(Ct);return ce=t().length?t()[0]:e(fe),ce})().catch(e=>(console.warn("[firebase] app init failed",e),ke=null,ce=null,null))),ke):null}async function G(){if(!T())return null;if(await be(),we)return we;const e=await st();if(!e)return null;const{getFirestore:t}=await import(_);return we=t(e),we}async function be(){if(!T())return null;if(de)return de;const e=await st();if(!e)return null;const{getAuth:t,setPersistence:n,browserLocalPersistence:i}=await import(Z);de=t(e);try{await n(de,i)}catch(a){console.warn("[firebase] auth persistence",a)}return de}function lt(e){const t=(e==null?void 0:e.code)||"";return{"auth/email-already-in-use":"이미 가입된 계정입니다. 로그인하세요.","auth/invalid-email":"이메일 형식이 올바르지 않습니다.","auth/weak-password":"비밀번호는 6자 이상이어야 합니다.","auth/user-not-found":"가입되지 않은 계정입니다. 먼저 회원가입하세요.","auth/wrong-password":"비밀번호가 틀렸습니다.","auth/invalid-credential":"이메일 또는 비밀번호가 올바르지 않습니다.","auth/too-many-requests":"시도가 너무 많습니다. 잠시 후 다시 시도하세요.","auth/network-request-failed":"네트워크 오류입니다. 연결을 확인하세요.","auth/operation-not-allowed":"Firebase에서 이메일/비밀번호 로그인을 켜야 합니다.","auth/missing-email":"이메일을 입력하세요."}[t]||(e==null?void 0:e.message)||"인증에 실패했습니다."}async function Pt(e,t){const n=await be();if(!n)throw new Error("Firebase가 설정되지 않았습니다.");const{createUserWithEmailAndPassword:i,sendEmailVerification:a}=await import(Z);try{const r=await i(n,e,t);try{await a(r.user)}catch(l){console.warn("[firebase] verification mail",l)}return r.user}catch(r){throw r.friendlyMessage=lt(r),r}}async function Tt(e,t){const n=await be();if(!n)throw new Error("Firebase가 설정되지 않았습니다.");const{signInWithEmailAndPassword:i}=await import(Z);try{return(await i(n,e,t)).user}catch(a){throw a.friendlyMessage=lt(a),a}}async function Se(){const e=await be();if(!e)return;const{signOut:t}=await import(Z);await t(e)}async function Ie(){const e=await be();if(!e)return null;if(e.currentUser)return e.currentUser;const{onAuthStateChanged:t}=await import(Z);return new Promise(n=>{const i=t(e,a=>{i(),n(a||null)})})}async function qt(){const e=await Ie();return e?(await e.reload(),e):null}async function Dt(){const e=await Ie();if(!e)throw new Error("로그인된 사용자가 없습니다.");const{sendEmailVerification:t}=await import(Z);await t(e)}async function Bt(e){const t=await Ie();if(!t)return;const{updateProfile:n}=await import(Z);await n(t,e)}async function Ot(e,t){if(!e)return!1;const n=await G();if(!n)return!1;const{doc:i,setDoc:a,serverTimestamp:r}=await import(_),l={...t};return Object.keys(l).forEach(c=>{l[c]===void 0&&delete l[c]}),await a(i(n,"userProfiles",e),{...l,updatedAt:r()},{merge:!0}),!0}async function Rt(e){if(!e)return null;const t=await G();if(!t)return null;const{doc:n,getDoc:i}=await import(_),a=await i(n(t,"userProfiles",e));if(!a.exists())return null;const r=a.data();return delete r.updatedAt,r}async function _t(e){if(!e)return null;const t=await G();if(!t)return null;const{doc:n,getDoc:i}=await import(_),a=await i(n(t,"deviceBindings",e));return a.exists()?a.data():null}async function Ut(e,t,n=null){if(!e||!t)return{ok:!1,error:"기기 정보가 없습니다."};const i=await G();if(!i)return{ok:!1,error:"Firebase가 설정되지 않았습니다."};const{doc:a,runTransaction:r,serverTimestamp:l}=await import(_),c=a(i,"deviceBindings",e),g=String(t).trim().toLowerCase();try{return await r(i,async u=>{var f;const v=await u.get(c);if(v.exists()){const o=String(((f=v.data())==null?void 0:f.account)||"").toLowerCase();if(o&&o!==g){const m=new Error("DEVICE_BOUND_OTHER");throw m.code="DEVICE_BOUND_OTHER",m.boundAccount=o,m}}u.set(c,{account:g,uid:n||null,updatedAt:l(),...v.exists()?{}:{createdAt:l()}},{merge:!0})}),{ok:!0,account:g}}catch(u){if((u==null?void 0:u.code)==="DEVICE_BOUND_OTHER"||(u==null?void 0:u.message)==="DEVICE_BOUND_OTHER")return{ok:!1,conflict:!0,boundAccount:u.boundAccount||null,error:"이 기기에서는 이미 다른 계정이 사용 중입니다. (도용·사칭 방지)"};throw u}}async function jt(e){const t=await G();if(!t)return null;const{collection:n,addDoc:i,serverTimestamp:a}=await import(_),r={...e};return Object.keys(r).forEach(c=>{r[c]===void 0&&delete r[c]}),(await i(n(t,"activityLogs"),{...r,createdAt:a()})).id}async function Ht(e=200){const t=await G();if(!t)return[];const{collection:n,query:i,orderBy:a,limit:r,getDocs:l}=await import(_),c=i(n(t,"activityLogs"),a("at","desc"),r(e));return(await l(c)).docs.map(u=>({id:u.id,...u.data()}))}async function Ft(){const e=await G();if(!e)return 0;const{collection:t,getDocs:n,deleteDoc:i,query:a,limit:r}=await import(_);let l=0;for(;;){const c=await n(a(t(e,"activityLogs"),r(100)));if(c.empty||(await Promise.all(c.docs.map(g=>i(g.ref))),l+=c.size,c.size<100))break}return l}async function Gt(e){const t=await G();if(!t)return!1;const{doc:n,setDoc:i,serverTimestamp:a}=await import(_),r={...e};return Object.keys(r).forEach(l=>{r[l]===void 0&&delete r[l]}),await i(n(t,"adminSettings","global"),{...r,updatedAt:a()}),!0}async function Wt(){const e=await G();if(!e)return null;const{doc:t,getDoc:n}=await import(_),i=await n(t(e,"adminSettings","global"));if(!i.exists())return null;const a=i.data();return delete a.updatedAt,a}const Qe="schoolMetricsDeviceId",ot="schoolMetricsBoundAccount";function ge(){let e=localStorage.getItem(Qe);return e||(e=`dev-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,localStorage.setItem(Qe,e)),e}function Vt(){return String(localStorage.getItem(ot)||"").trim().toLowerCase()||null}function ct(e){localStorage.setItem(ot,String(e).trim().toLowerCase())}const Ae="schoolMetricsUserAccount",Kt=new Set(["2024","2025","2026"]),zt=/^(\d{4})(\d{4})@haeyeon\.ms\.kr$/i,Ze=6;function Jt(e){const n=String(e||"").trim().toLowerCase().match(zt);if(!n)return{ok:!1,error:"해연중 계정(@haeyeon.ms.kr) 형식으로 입력하세요."};const i=n[1],a=n[2],r=$e(a);return r.ok?Kt.has(i)?{ok:!0,account:`${i}${r.studentId}@haeyeon.ms.kr`,year:i,studentId:r.studentId,grade:r.grade,classNo:r.classNo,number:r.number,isAdminAccount:!1}:{ok:!1,error:"년도는 2024, 2025, 2026만 가능합니다."}:r}function Me(e){const t=String(e||"").trim().toLowerCase();return Q(t)?{ok:!0,account:Ee.toLowerCase(),year:"admin",studentId:"admin",grade:0,classNo:0,number:0,isAdminAccount:!0}:Jt(t)}function $e(e){const t=String(e||"").trim();if(!/^\d{4}$/.test(t))return{ok:!1,error:"학번은 숫자 4자리여야 합니다. (예: 1111)"};const n=t[0],i=t[1],a=Number(t.slice(2));return["1","2","3"].includes(n)?"12345678".includes(i)?!Number.isInteger(a)||a<1||a>35?{ok:!1,error:"번호는 01~35만 가능합니다."}:{ok:!0,studentId:t,grade:Number(n),classNo:Number(i),number:a}:{ok:!1,error:"학번 둘째 자리(반)는 1~8만 가능합니다."}:{ok:!1,error:"학번 첫 자리(학년)는 1·2·3만 가능합니다."}}function dt(e){const t=String(e||"").trim().replace(/\s+/g," ");return t.length<2?{ok:!1,error:"이름은 2글자 이상 입력하세요."}:t.length>20?{ok:!1,error:"이름은 20글자 이하로 입력하세요."}:{ok:!0,displayName:t}}function ut(e){return String(e||"").length<Ze?{ok:!1,error:`비밀번호는 ${Ze}자 이상이어야 합니다.`}:{ok:!0}}const et="이 기기에서는 이미 다른 계정이 사용 중입니다. (도용·사칭 방지)";async function _e(e){const t=String(e||"").trim().toLowerCase(),n=ge();if(Q(t))return{ok:!0,deviceId:n,bypass:!0};const i=Vt();if(i&&i!==t&&!Q(i))return{ok:!1,error:et,boundAccount:i};try{const a=await _t(n),r=String((a==null?void 0:a.account)||"").toLowerCase();if(r&&r!==t&&!Q(r))return ct(r),{ok:!1,error:et,boundAccount:r}}catch(a){console.warn("[auth] device binding check",a)}return{ok:!0,deviceId:n}}async function xe(e,t=null){const n=String(e||"").trim().toLowerCase(),i=ge();if(Q(n))return{ok:!0,deviceId:i,account:n,skipped:!0};const a=await Ut(i,n,t);return a.ok?(ct(n),{ok:!0,deviceId:i,account:n}):a}function Ue(e){return localStorage.setItem(Ae,JSON.stringify(e)),e}function ft(e,t={}){return{account:e.account,year:e.year,studentId:e.studentId,grade:e.grade,classNo:e.classNo,number:e.number,displayName:t.displayName||"",loggedInAt:new Date().toISOString(),viaPassword:!0,...t}}function z(){try{const e=localStorage.getItem(Ae);if(!e)return null;const t=JSON.parse(e);return t!=null&&t.account&&Me(t.account).ok?t:null}catch{return null}}function mt(){return!!z()}function se(){var e;return((e=z())==null?void 0:e.account)||null}function Yt(){var e;return((e=z())==null?void 0:e.displayName)||""}function Xt(){var e;return((e=z())==null?void 0:e.studentId)||""}function je(e=z()){if(!e)return"";const t=[];return e.displayName&&t.push(e.displayName),e.studentId&&t.push(e.studentId),t.join(" · ")||e.account||""}async function Ne(){localStorage.removeItem(Ae);try{await Se()}catch{}}async function bt(e,t){if(e){try{await Bt({displayName:t.displayName||""})}catch(n){console.warn("[auth] updateProfile",n)}try{await Ot(e,{displayName:t.displayName||"",studentId:t.studentId||"",year:t.year||"",account:t.account||"",grade:t.grade,classNo:t.classNo,number:t.number})}catch(n){console.warn("[auth] cloud profile",n)}}}async function He(e,{requireVerified:t=!0}={}){const n=e==null?void 0:e.email;if(!n)return await Se().catch(()=>{}),{ok:!1,error:"계정 이메일을 가져오지 못했습니다."};const i=Me(n);if(!i.ok)return await Se().catch(()=>{}),i;if(t&&!e.emailVerified)return{ok:!1,needVerify:!0,error:"학교 메일함에서 인증 메일의 링크를 눌러주세요. (스팸함도 확인)",account:i.account};let a=String(e.displayName||"").trim(),r=i.studentId,l=i.grade,c=i.classNo,g=i.number;try{const f=await Rt(e.uid);if(f!=null&&f.displayName&&(a=String(f.displayName).trim()),f!=null&&f.studentId){const o=$e(f.studentId);o.ok&&(r=o.studentId,l=o.grade,c=o.classNo,g=o.number)}}catch(f){console.warn("[auth] load profile",f)}const u=z();if((u==null?void 0:u.account)===i.account&&(!a&&u.displayName&&(a=u.displayName),u.studentId)){const f=$e(u.studentId);f.ok&&r===i.studentId&&u.studentId!==i.studentId&&(r=f.studentId,l=f.grade,c=f.classNo,g=f.number)}return{ok:!0,user:Ue(ft({...i,studentId:r,grade:l,classNo:c,number:g},{uid:e.uid||null,emailVerified:!!e.emailVerified,displayName:a}))}}async function Qt(e,t,n){if(!T())return{ok:!1,error:"Firebase 설정이 없습니다."};const i=dt(n);if(!i.ok)return i;const a=Me(e);if(!a.ok)return a;const r=ut(t);if(!r.ok)return r;const l=await _e(a.account);if(!l.ok)return l;try{const c=await Pt(a.account,t),g=await xe(a.account,c.uid);return g.ok?(await bt(c.uid,{displayName:i.displayName,studentId:a.studentId,year:a.year,account:a.account,grade:a.grade,classNo:a.classNo,number:a.number}),Ue(ft(a,{uid:c.uid,displayName:i.displayName,emailVerified:!1})),{ok:!1,needVerify:!0,registered:!0,account:a.account,displayName:i.displayName,error:"가입되었습니다. 학교 메일함의 인증 링크를 누른 뒤 로그인하세요. (스팸함도 확인)",uid:c==null?void 0:c.uid}):(await Se().catch(()=>{}),g)}catch(c){return{ok:!1,error:c.friendlyMessage||c.message||"회원가입 실패"}}}async function Zt(e,t){if(!T())return{ok:!1,error:"Firebase 설정이 없습니다."};const n=Me(e);if(!n.ok)return n;const i=ut(t);if(!i.ok)return i;const a=await _e(n.account);if(!a.ok)return a;try{const r=await Tt(n.account,t);await r.reload();const l=await He(r,{requireVerified:!0});if(!l.ok)return l;const c=await xe(n.account,r.uid);return c.ok?l:(await Ne(),c)}catch(r){return{ok:!1,error:r.friendlyMessage||r.message||"로그인 실패"}}}async function en({displayName:e,studentId:t}){const n=z();if(!n)return{ok:!1,error:"로그인이 필요합니다."};const i=dt(e);if(!i.ok)return i;const a=$e(t);if(!a.ok)return a;const r=Ue({...n,displayName:i.displayName,studentId:a.studentId,grade:a.grade,classNo:a.classNo,number:a.number});return await bt(n.uid,{displayName:r.displayName,studentId:r.studentId,year:r.year,account:r.account,grade:r.grade,classNo:r.classNo,number:r.number}),{ok:!0,user:r}}async function tn(){try{const e=await qt();if(!e)return{ok:!1,error:"먼저 로그인(비밀번호)을 다시 시도하세요."};const t=await He(e,{requireVerified:!0});if(!t.ok)return t;const n=await xe(t.user.account,e.uid);return n.ok?t:(await Ne(),n)}catch(e){return{ok:!1,error:e.message||"인증 상태 확인 실패"}}}async function nn(){try{return await Dt(),{ok:!0,message:"인증 메일을 다시 보냈습니다. 메일함·스팸함을 확인하세요."}}catch(e){return{ok:!1,error:e.message||"인증 메일 재전송 실패"}}}async function an(){if(!T())return ye(),null;try{const e=await Ie();if(!e)return ye(),null;await e.reload();const t=await He(e,{requireVerified:!0});return t.ok?(await _e(t.user.account)).ok?(await xe(t.user.account,e.uid),t.user):(await Ne(),null):(ye(),null)}catch(e){return console.warn("[auth] restore",e),ye(),null}}function ye(){localStorage.removeItem(Ae)}const Fe="schoolMetricsAdminSettings",Le="schoolMetricsActivityLog",rn=500,ie={restUnlockUses:rt,freeGames:!0,standardScale:[{letter:"A",min:90},{letter:"B",min:80},{letter:"C",min:70},{letter:"D",min:60},{letter:"E",min:0}],artsScale:[{letter:"A",min:80},{letter:"B",min:60},{letter:"C",min:0}]};function Ge(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function We(e,t){localStorage.setItem(e,JSON.stringify(t))}function pe(){return Q(se())}function F(){const e=Ge(Fe,{});return{...ie,...e,standardScale:e.standardScale||ie.standardScale,artsScale:e.artsScale||ie.artsScale}}function sn(e){const t={...F(),...e};return We(Fe,t),K({type:"admin_settings",message:"관리자 설정 변경",detail:e}),T()&&Gt(t).catch(n=>console.warn("[firebase] settings save",n)),t}async function gt(){if(!T())return F();try{const e=await Wt();if(e&&typeof e=="object"){const t={...ie,...e,standardScale:e.standardScale||ie.standardScale,artsScale:e.artsScale||ie.artsScale};return We(Fe,t),t}}catch(e){console.warn("[firebase] settings load",e)}return F()}function le(){return Number(F().restUnlockUses)||rt}function Ce(){return pe()&&F().freeGames!==!1}function K(e){const t={id:`${Date.now()}-${Math.random().toString(36).slice(2,7)}`,at:new Date().toISOString(),deviceId:ge(),...e,account:e.account||se()||"guest",displayName:e.displayName||Yt()||"",studentId:e.studentId||Xt()||""},n=Ge(Le,[]);return n.unshift(t),We(Le,n.slice(0,rn)),T()&&jt(t).catch(i=>console.warn("[firebase] log",i)),t}function Ve(){return Ge(Le,[])}async function ln(){const e=Ve();if(!T())return{source:"local",logs:e};try{const t=await Ht(300),n=new Map;for(const a of[...t,...e]){const r=a.id||`${a.at}-${a.deviceId}-${a.type}-${a.message}`;n.has(r)||n.set(r,a)}return{source:"firebase",logs:[...n.values()].sort((a,r)=>String(r.at).localeCompare(String(a.at)))}}catch(t){return console.warn("[firebase] fetch logs",t),{source:"local-fallback",logs:e,error:String(t.message||t)}}}async function on({cloud:e=!0}={}){if(localStorage.removeItem(Le),e&&T())try{await Ft()}catch(t){console.warn("[firebase] clear",t)}K({type:"admin_clear_logs",message:"활동 로그 초기화"})}function cn(e=Ve()){return JSON.stringify({exportedAt:new Date().toISOString(),deviceId:ge(),firebase:T(),settings:F(),logs:e},null,2)}function dn(){const e=se();return{configured:T(),projectId:fe.projectId||"",adminEmail:Ee,isCloudAdmin:Q(e),account:e||""}}const Ke="schoolMetricsUniqueSubjects";function pt(){try{const e=localStorage.getItem(Ke),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch{return[]}}function un(e){localStorage.setItem(Ke,JSON.stringify(e))}function fn(e){const t=le(),n=pt(),i=!n.includes(e);return i&&(n.push(e),un(n)),{isNew:i,uniqueCount:n.length,justUnlocked:i&&n.length>=t}}function ze(){return pt().length}function he(){return Ce()?!0:ze()>=le()}function mn(){return Math.max(0,le()-ze())}function bn(){Ce()||localStorage.removeItem(Ke)}function ht(){const e=le(),t=ze(),n=mn();return Ce()?"관리자 모드: 미니게임 자유 이용":he()?`서로 다른 과목 ${t}개 달성! 휴식 미니게임 이용 가능`:`서로 다른 과목 ${n}개 더 계산하면 해금 (${t}/${e})`}const gn={1:{label:"1학년",note:"1학년은 2학기부터 내신 성적이 반영됩니다.",subjects:{국어:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"나만의 노트(나노)",weight:15,kind:"perf"}]}}},수학:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"기본도형 탐구 프로젝트",weight:20,kind:"perf"},{label:"평면·입체 도형 탐구",weight:20,kind:"perf"}]}}},사회:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"사회화 자서전 만들기",weight:20,kind:"perf"},{label:"모의 선거",weight:20,kind:"perf"}]}}},과학:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"실험 보고서 작성",weight:20,kind:"perf"},{label:"달의 위상 변화 관찰",weight:20,kind:"perf"}]}}},영어:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"희망 직업 소개",weight:20,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]}}},음악:{semesters:{2:{label:"2학기",items:[{label:"우쿨렐레 연주",weight:50,kind:"perf"},{label:"작곡가 탐구 활동",weight:50,kind:"perf"}]}}},미술:{semesters:{2:{label:"2학기",items:[{label:"스텐실",weight:50,kind:"perf"},{label:"문자도",weight:50,kind:"perf"}]}}},체육:{semesters:{2:{label:"2학기",items:[{label:"경기형 스포츠(축구)",weight:50,kind:"perf"},{label:"기록 도전형(달리기)",weight:50,kind:"perf"}]}}},정보:{semesters:{2:{label:"2학기",items:[{label:"AI 활용",weight:50,kind:"perf"},{label:"디지털 문화 표현",weight:50,kind:"perf"}]}}},"진로와 직업":{semesters:{2:{label:"2학기",items:[{label:"창업 프로젝트",weight:50,kind:"perf"},{label:"진로 디자인",weight:50,kind:"perf"}]}}},기술가정:{semesters:{2:{label:"2학기",items:[{label:"과학·미래기술 보고서",weight:35,kind:"perf"},{label:"에너지 신문 제작",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]}}}}},2:{label:"2학년",subjects:{국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"발표와 듣기",weight:15,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"복합양식 자료를 활용한 글 작성",weight:15,kind:"perf"}]}}},수학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"일차방정식·일차부등식",weight:20,kind:"perf"},{label:"연립일차방정식·일차함수",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"삼각형·사각형의 성질",weight:20,kind:"perf"},{label:"도형의 닮음·피타고라스",weight:20,kind:"perf"}]}}},역사:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"고대 문명 지도 만들기",weight:20,kind:"perf"},{label:"고대사 신문 만들기",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"서양 고대 문화유산 소개",weight:20,kind:"perf"},{label:"유럽 여행 소개 글쓰기",weight:20,kind:"perf"}]}}},과학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"밀도 측정",weight:10,kind:"perf"},{label:"지권 층상구조 모형 제작",weight:10,kind:"perf"},{label:"주기율표 탐구",weight:10,kind:"perf"},{label:"광합성 탐구",weight:10,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"소리의 성질 탐구",weight:10,kind:"perf"},{label:"인체 프로젝트",weight:20,kind:"perf"},{label:"전류,전압,저항 사이의 관계 탐구",weight:10,kind:"perf"}]}}},영어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"},{label:"발명품 소개",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"지역 축제 홍보",weight:20,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]}}},음악:{semesters:{1:{label:"1학기",items:[{label:"우쿨렐레 연주",weight:50,kind:"perf"},{label:"텅드럼 연주",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"펜비트 연주",weight:50,kind:"perf"},{label:"리코더 연주",weight:50,kind:"perf"}]}}},미술:{semesters:{1:{label:"1학기",items:[{label:"세밀화",weight:50,kind:"perf"},{label:"음식 모형 만들기",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"점묘화",weight:50,kind:"perf"},{label:"서양미술사 보고서",weight:50,kind:"perf"}]}}},체육:{semesters:{1:{label:"1학기",items:[{label:"경기형 스포츠(킨볼)",weight:60,kind:"perf"},{label:"도전형(제자리멀리뛰기)",weight:40,kind:"perf"}]},2:{label:"2학기",items:[{label:"경기형 스포츠(배드민턴)",weight:60,kind:"perf"},{label:"건강관리(줄넘기)",weight:40,kind:"perf"}]}}},도덕:{semesters:{1:{label:"1학기",items:[{label:"도덕적 인물 지폐 제작",weight:50,kind:"perf"},{label:"우정 네 컷 만들기",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"정보 카드 뉴스 제작",weight:50,kind:"perf"},{label:"인권 모니터링 제안서",weight:50,kind:"perf"}]}}},중국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 기말고사",weight:40,kind:"exam"},{label:"한어병음 작성",weight:30,kind:"perf"},{label:"중국어 말하기",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 기말고사",weight:40,kind:"exam"},{label:"하루 일과표 만들기",weight:30,kind:"perf"},{label:"중국어 말하기",weight:30,kind:"perf"}]}}},"금융과 미래":{semesters:{2:{label:"2학기",items:[{label:"투자 성향 검사",weight:50,kind:"perf"},{label:"투자 포트폴리오 구성",weight:50,kind:"perf"}]}}},기술가정:{semesters:{1:{label:"1학기",items:[{label:"효과적 의사소통 프로젝트",weight:35,kind:"perf"},{label:"제조 기술 프로젝트",weight:35,kind:"perf"},{label:"자기주도노트 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"균형 잡힌 식단 계획",weight:35,kind:"perf"},{label:"친환경 의복 생활",weight:35,kind:"perf"},{label:"자기주도노트 작성",weight:30,kind:"perf"}]}}}}},3:{label:"3학년",note:"3학년 2학기에는 기말고사가 없습니다.",subjects:{국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"논설문 쓰기",weight:15,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"한 학기 한 권 읽기",weight:30,kind:"perf"},{label:"문장의 짜임 고려해서 자신감 있게 발표",weight:30,kind:"perf"}]}}},사회:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"국가 기관 탐구로 권력 분립 이해",weight:20,kind:"perf"},{label:"국민 경제 지표와 국제 거래 이해",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"인구·도시 문제 탐구",weight:30,kind:"perf"},{label:"농업 산업화·세계화",weight:30,kind:"perf"}]}}},역사:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"고려 정치 변천",weight:20,kind:"perf"},{label:"고려의 문화 및 조선 통치 체제 탐구",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"조선 왕 가상 인터뷰",weight:30,kind:"perf"},{label:"양 난의 이해 및 영정조 정책 탐구",weight:30,kind:"perf"}]}}},도덕:{semesters:{1:{label:"1학기",items:[{label:"1학기 기말고사",weight:40,kind:"exam"},{label:"폭력 예방 논술문 작성",weight:30,kind:"perf"},{label:"사회 정의 실현 논술문 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"환경 보호 제안서",weight:30,kind:"perf"},{label:"실패 이력서 소개",weight:30,kind:"perf"}]}}},수학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"인수분해를 이용한 수의 성질 탐구",weight:20,kind:"perf"},{label:"이차함수 그래프",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"삼각비 개념 보고서",weight:30,kind:"perf"},{label:"원의 성질 문제해결",weight:30,kind:"perf"}]}}},과학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"기상 현상 실험",weight:20,kind:"perf"},{label:"화학 반응의 규칙 탐구",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"세포분열 관찰 실험",weight:30,kind:"perf"},{label:"물체 운동 분석",weight:30,kind:"perf"}]}}},영어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:15,kind:"perf"},{label:"급식 메뉴 프로젝트",weight:15,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"영어 듣기",weight:20,kind:"perf"},{label:"영어독서",weight:20,kind:"perf"},{label:"통계 자료 활용 프로젝트",weight:20,kind:"perf"}]}}},음악:{semesters:{1:{label:"1학기",items:[{label:"칼림바 연주",weight:50,kind:"perf"},{label:"전자드럼 연주",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"노래 부르기",weight:50,kind:"perf"},{label:"디자인사 연구보고서",weight:50,kind:"perf"}]}}},미술:{semesters:{1:{label:"1학기",items:[{label:"포트레이트 드로잉",weight:50,kind:"perf"},{label:"비주얼 리터러시",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"오마주",weight:50,kind:"perf"},{label:"디자인 조사 보고서",weight:50,kind:"perf"}]}}},체육:{semesters:{1:{label:"1학기",items:[{label:"전통 표현(티니클링)",weight:40,kind:"perf"},{label:"플로어볼",weight:60,kind:"perf"}]},2:{label:"2학기",items:[{label:"건강·체력 관리(타바타)",weight:40,kind:"perf"},{label:"배구",weight:60,kind:"perf"}]}}},기술가정:{semesters:{1:{label:"1학기",items:[{label:"생애 설계",weight:35,kind:"perf"},{label:"수송기술 제작",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"스마트폰 앱 만들기",weight:35,kind:"perf"},{label:"적정 기술 사례 조사",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]}}}}}};function me(e){return gn[e]??null}function pn(e){const t=me(e);return t?Object.keys(t.subjects):[]}function Je(e,t){var n;return((n=me(e))==null?void 0:n.subjects[t])??null}function wt(e,t){const n=Je(e,t);return n?Object.keys(n.semesters).map(Number).sort((i,a)=>i-a):[]}function hn(e,t,n){var a;const i=Je(e,t);return((a=i==null?void 0:i.semesters[n])==null?void 0:a.items)??[]}function tt(e,t,n){var a;const i=Je(e,t);return((a=i==null?void 0:i.semesters[n])==null?void 0:a.label)??`${n}학기`}function wn(e,t,n,i){return`${e}-${t}-${n}-${i}`}function kn(e,t,n){return hn(e,t,n).map((a,r)=>({key:wn(e,t,n,r),subject:t,semester:n,label:a.label,weight:a.weight,kind:a.kind}))}function kt(e,t){let n=0,i=0;for(const a of e){const r=t[a.key];if(r===""||r===null||r===void 0)continue;const l=Number(r);Number.isNaN(l)||(n+=a.weight,i+=l*a.weight)}return n===0?null:i/n}function yn(e,t){const n={},i=[];for(const r of e){const l=t[r.key];if(l===""||l===null||l===void 0){i.push(r);continue}const c=Number(l);if(Number.isNaN(c)){i.push(r);continue}n[r.key]=c}const a={...n};for(const r of i)a[r.key]=100;return{average:kt(e,a),remainingCount:i.length}}const vn=["음악","미술","체육"],Sn=[{letter:"A",min:90},{letter:"B",min:80},{letter:"C",min:70},{letter:"D",min:60},{letter:"E",min:0}],$n=[{letter:"A",min:80},{letter:"B",min:60},{letter:"C",min:0}];function yt(e){return e.map((t,n,i)=>{const a=i[n-1],r=t.min===0?`${t.letter} (${(a==null?void 0:a.min)??60}점 미만)`:`${t.letter} (${t.min}점 이상)`;return{letter:t.letter,min:Number(t.min)||0,label:r}})}function vt(){const e=F().standardScale;return yt(e!=null&&e.length?e:Sn)}function St(){const e=F().artsScale;return yt(e!=null&&e.length?e:$n)}function Ye(e){return vn.includes(e)}function Pe(e){return e==null||Number.isNaN(e)?null:Math.round(e)}function Xe(e){return Ye(e)?St():vt()}function Oe(e,t){const n=Pe(e);if(n===null)return"-";const i=Xe(t);for(const a of i)if(n>=a.min)return a.letter;return i[i.length-1].letter}function ue(e){return`${e}등급`}const nt=["조금만 더 올리면 된다. 할 수 있어!","상위 등급이 코앞이다. 끝까지 달려보자!","지금의 노력이 등급을 바꾼다. 포기하지 마!","아직 끝나지 않았어. 충분히 올릴 수 있어!","남은 항목이 기회다. 집중해서 마무리하자!","한 걸음만 더 가면 등급이 달라진다. 파이팅!","가능성은 아직 살아 있다. 믿고 가보자!","오늘의 한 문제가 등급을 바꿀 수도 있어!","목표 등급까지 거의 다 왔다. 조금만 더!","실력은 거짓말하지 않는다. 계속 밀어붙여!"];function Ln(e){return e.projection.remainingCount>0&&e.letter!==e.projLetter}function En(){const e=Math.floor(Math.random()*nt.length);return nt[e]}function $t(e=null){const t=e?Ye(e):!1,n=e?t?`${e}은(는) 예체능 과목 (A·B·C)`:`${e}은(는) 일반 과목 (A·B·C·D·E)`:"과목 유형에 따라 등급 기준이 다릅니다.",i=vt(),a=St();return`
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
            ${i.map(r=>`<tr><td>${r.letter}</td><td>${r.label.replace(/^[A-E]\s*/,"")}</td></tr>`).join("")}
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
  `}function Lt(e){const t=e.querySelector("[data-toggle='criteria']"),n=e.querySelector("#criteria-panel");!t||!n||t.addEventListener("click",()=>{const i=n.classList.toggle("hidden");t.setAttribute("aria-expanded",String(!i)),t.textContent=i?"▶ 등급 기준표 확인":"▼ 등급 기준표 닫기"})}function In(e,t,n,i){if(n===null)return null;const a=Pe(n),r=Oe(a,i),l=Xe(i),c=l.findIndex($=>$.letter===r);if(c<=0)return{targetLetter:r,needed:null,message:"이미 최고 등급입니다."};const g=l[c-1],u=g.min,v=e.filter($=>{const k=t[$.key];return k===""||k===null||k===void 0||Number.isNaN(Number(k))});if(v.length===0)return{targetLetter:g.letter,needed:null,message:"모든 항목이 입력되었습니다."};let f=0,o=0,m=0;for(const $ of e){const k=t[$.key];if(k===""||k===null||k===void 0||Number.isNaN(Number(k))){m+=$.weight;continue}f+=$.weight,o+=Number(k)*$.weight}if(m===0)return null;const s=f+m,w=(u*s-o)/m,S=Math.max(0,Math.min(100,w));return{targetLetter:g.letter,needed:Math.ceil(S*10)/10,remainingCount:v.length,message:null}}function An(e,t,n,i){const r=Xe(i).find(s=>s.letter===n);if(!r)return null;let l=0,c=0,g=0,u=0;for(const s of e){const w=t[s.key];if(w===""||w===null||w===void 0||Number.isNaN(Number(w))){g+=s.weight,u+=1;continue}c+=s.weight,l+=Number(w)*s.weight}if(g===0)return null;const v=c+g,o=((r.min-.5)*v-l)/g;return{minScore:Math.ceil(Math.max(0,Math.min(100,o))*10)/10,remainingCount:u}}function Mn(e){const t=Pe(e);return{raw:e,rounded:t,display:`${t}점`}}function xn(e,t,n){const i=kt(e,t);if(i===null)return null;const{rounded:a}=Mn(i),r=Oe(a,n),l=yn(e,t),c=Pe(l.average),g=In(e,t,i,n),u=An(e,t,r,n);return{average:i,rounded:a,letter:r,projection:l,projRounded:c,projLetter:Oe(c,n),needed:g,confirmMin:u}}function ee(e="globe"){return`
    <svg class="${e}" viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="48" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.35"/>
      <ellipse cx="60" cy="60" rx="48" ry="16" fill="none" stroke="currentColor" stroke-width="1"/>
      <ellipse cx="60" cy="60" rx="16" ry="48" fill="none" stroke="currentColor" stroke-width="1"/>
      <ellipse cx="60" cy="60" rx="34" ry="48" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.7"/>
      <line x1="12" y1="60" x2="108" y2="60" stroke="currentColor" stroke-width="0.8"/>
      <line x1="60" y1="12" x2="60" y2="108" stroke="currentColor" stroke-width="0.8"/>
    </svg>
  `}function Nn(){return'<img class="title-bg" src="./title-bg.png" alt="" aria-hidden="true" />'}function Cn(){return'<img class="go-bg" src="./go-bg.png" alt="" aria-hidden="true" />'}function Et(e){return`grade-theme-${e}`}function U(e,t=""){return`<div class="phone-screen ${t}">${e}</div>`}function oe(e){return`<p class="screen-footer">${e}</p>`}function te(e="main"){return`<button type="button" class="link-btn" data-action="${e}">메인화면으로</button>`}const It=[20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5],ve=8;function Pn(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function Tn(e,t,n){var i,a;(i=e.querySelector('[data-nav="back"]'))==null||i.addEventListener("click",t),(a=e.querySelector('[data-nav="main"]'))==null||a.addEventListener("click",n)}function qn(e,t){const n=Math.hypot(e,t);if(n>1)return{points:0,label:"보드 밖"};if(n<=.07)return{points:50,label:"더블 불 · 50"};if(n<=.14)return{points:25,label:"싱글 불 · 25"};let i=Math.atan2(e,-t);i<0&&(i+=Math.PI*2);const a=Math.floor((i+Math.PI/20)%(Math.PI*2)/(Math.PI/10)),r=It[a];return n>=.9?{points:r*2,label:`더블 ${r} · ${r*2}`}:n>=.52&&n<=.62?{points:r*3,label:`트리플 ${r} · ${r*3}`}:{points:r,label:`싱글 ${r} · ${r}`}}function qe(e,t,n){const i=t/2,a=t/2,r=t*.42;e.clearRect(0,0,t,t),e.fillStyle="#1a1a1a",e.beginPath(),e.arc(i,a,r*1.08,0,Math.PI*2),e.fill();for(let l=0;l<20;l++){const c=-Math.PI/2-Math.PI/20+l*Math.PI/10,g=c+Math.PI/10,u=l%2===0;e.beginPath(),e.moveTo(i,a),e.arc(i,a,r*.9,c,g),e.closePath(),e.fillStyle=u?"#111":"#ece6d8",e.fill(),e.beginPath(),e.moveTo(i,a),e.arc(i,a,r*.52,c,g),e.closePath(),e.fillStyle=u?"#1c1c1c":"#f5f0e6",e.fill(),e.beginPath(),e.arc(i,a,r,c,g),e.arc(i,a,r*.9,g,c,!0),e.closePath(),e.fillStyle=l%2===0?"#c4122f":"#0a7a3c",e.fill(),e.beginPath(),e.arc(i,a,r*.62,c,g),e.arc(i,a,r*.52,g,c,!0),e.closePath(),e.fillStyle=l%2===0?"#c4122f":"#0a7a3c",e.fill()}e.strokeStyle="rgba(180,180,180,0.55)",e.lineWidth=1;for(let l=0;l<20;l++){const c=-Math.PI/2-Math.PI/20+l*Math.PI/10;e.beginPath(),e.moveTo(i,a),e.lineTo(i+Math.cos(c)*r,a+Math.sin(c)*r),e.stroke()}[.9,.62,.52,.14,.07].forEach(l=>{e.beginPath(),e.arc(i,a,r*l,0,Math.PI*2),e.stroke()}),e.beginPath(),e.arc(i,a,r*.14,0,Math.PI*2),e.fillStyle="#0a7a3c",e.fill(),e.beginPath(),e.arc(i,a,r*.07,0,Math.PI*2),e.fillStyle="#c4122f",e.fill(),e.fillStyle="#fff",e.font=`bold ${Math.max(10,t*.045)}px sans-serif`,e.textAlign="center",e.textBaseline="middle";for(let l=0;l<20;l++){const c=-Math.PI/2+l*Math.PI/10,g=i+Math.cos(c)*r*1.14,u=a+Math.sin(c)*r*1.14;e.fillText(String(It[l]),g,u)}for(const l of n)e.beginPath(),e.arc(i+l.nx*r,a+l.ny*r,4,0,Math.PI*2),e.fillStyle="#fff700",e.fill(),e.strokeStyle="#000",e.stroke()}function Dn(e,{onBack:t,onMain:n}){let i=0,a=ve,r="vertical",l=.5,c=.5,g=1,u=1,v=0,f=0;const o=[],m=1.35;e.innerHTML=`
    <div class="game-panel">
      <h2 class="game-title">다트 게임</h2>
      <p class="game-desc">바가 가운데 올 때 탭/스페이스로 멈추세요. (세로 → 가로)</p>
      <div class="dart-stats">
        <span id="dart-score">점수: 0</span>
        <span id="dart-throws">남은 횟수: ${ve}</span>
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
      ${Pn()}
    </div>
  `;const s=e.querySelector("#dart-canvas"),w=s.getContext("2d"),S=e.querySelector("#dart-score"),$=e.querySelector("#dart-throws"),k=e.querySelector("#dart-feedback"),b=e.querySelector("#dart-stop"),A=e.querySelector("#dart-retry"),q=e.querySelector("#aim-v"),N=e.querySelector("#aim-h"),D=e.querySelector(".aim-bar-v"),j=e.querySelector(".aim-bar-h");function B(){const d=Math.min(300,e.clientWidth||300);s.width=d,s.height=d,qe(w,d,o)}function W(){q.style.top=`${l*100}%`,N.style.left=`${c*100}%`,D.classList.toggle("active",r==="vertical"),j.classList.toggle("active",r==="horizontal")}function ne(d){f||(f=d);const h=Math.min(.05,(d-f)/1e3);f=d,r==="vertical"?(l+=g*m*h,l>=1&&(l=1,g=-1),l<=0&&(l=0,g=1)):r==="horizontal"&&(c+=u*m*h,c>=1&&(c=1,u=-1),c<=0&&(c=0,u=1)),W(),v=requestAnimationFrame(ne)}function ae(){const d=(l-.5)*2.05,h=(c-.5)*2.05,L=qn(h,d);if(o.push({nx:h,ny:d}),i+=L.points,a-=1,S.textContent=`점수: ${i}`,$.textContent=`남은 횟수: ${a}`,qe(w,s.width,o),k.textContent=L.label,a<=0){r="done",b.classList.add("hidden"),A.classList.remove("hidden"),k.textContent=`게임 종료! 최종 ${i}점`;return}r="vertical",l=Math.random(),c=Math.random(),k.textContent="세로 바를 가운데에 맞춰 멈추세요!"}function y(d){var h;if((h=d==null?void 0:d.preventDefault)==null||h.call(d),r==="vertical"){r="horizontal",k.textContent="가로 바를 가운데에 맞춰 멈추세요!";return}r==="horizontal"&&(r="result",ae())}function M(d){(d.code==="Space"||d.key===" ")&&(d.preventDefault(),y(d))}function C(){i=0,a=ve,r="vertical",o.length=0,l=.2,c=.2,S.textContent="점수: 0",$.textContent=`남은 횟수: ${ve}`,k.textContent="세로 바를 가운데에 맞춰 멈추세요!",b.classList.remove("hidden"),A.classList.add("hidden"),qe(w,s.width,o)}return B(),W(),v=requestAnimationFrame(ne),b.addEventListener("click",y),b.addEventListener("touchstart",y,{passive:!1}),A.addEventListener("click",C),window.addEventListener("keydown",M),window.addEventListener("resize",B),Tn(e,t,n),()=>{cancelAnimationFrame(v),window.removeEventListener("keydown",M),window.removeEventListener("resize",B)}}const Y=12;function Bn(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function On(e,t,n){var i,a;(i=e.querySelector('[data-nav="back"]'))==null||i.addEventListener("click",t),(a=e.querySelector('[data-nav="main"]'))==null||a.addEventListener("click",n)}function Rn(e,{onBack:t,onMain:n}){let i=0,a=0,r=!1,l=!0,c=.08,g=.55,u=0,v=0,f=0,o=!1;e.innerHTML=`
    <div class="game-panel">
      <h2 class="game-title">크리켓 게임</h2>
      <p class="game-desc">공이 타격존(노란 선)에 올 때 탭/스페이스로 스윙!</p>
      <div class="cricket-stats">
        <span id="cricket-runs">득점: 0</span>
        <span id="cricket-balls">볼: 0 / ${Y}</span>
      </div>
      <canvas id="cricket-canvas" class="game-canvas cricket-canvas" width="320" height="420"></canvas>
      <button type="button" class="btn-go" id="cricket-swing">SWING!</button>
      <button type="button" class="btn-secondary hidden" id="cricket-retry">다시하기</button>
      <p class="game-feedback" id="cricket-feedback">공이 다가옵니다…</p>
      ${Bn()}
    </div>
  `;const m=e.querySelector("#cricket-canvas"),s=m.getContext("2d"),w=e.querySelector("#cricket-runs"),S=e.querySelector("#cricket-balls"),$=e.querySelector("#cricket-feedback"),k=e.querySelector("#cricket-swing"),b=e.querySelector("#cricket-retry"),A=.72,q=.09;function N(){const y=Math.min(320,Math.max(260,e.clientWidth-16||300));m.width=y,m.height=Math.round(y*1.3)}function D(){const y=m.width,M=m.height;s.clearRect(0,0,y,M),s.fillStyle="#6ec8ff",s.fillRect(0,0,y,M*.22),s.fillStyle="#3d8c3a",s.fillRect(0,M*.18,y,M*.12);for(let x=0;x<18;x++)s.fillStyle=`hsl(${x*47%360} 70% 45%)`,s.beginPath(),s.arc(10+x*(y/17),M*.22,6,0,Math.PI*2),s.fill();s.fillStyle="#4caf50",s.fillRect(0,M*.28,y,M*.72);const C=y*.28,d=(y-C)/2,h=M*.3,L=M*.58;s.fillStyle="#c4a574",s.beginPath(),s.moveTo(d+C*.15,h),s.lineTo(d+C*.85,h),s.lineTo(d+C,h+L),s.lineTo(d,h+L),s.closePath(),s.fill();const E=h+L*A;if(s.strokeStyle="#fff41a",s.lineWidth=3,s.setLineDash([6,4]),s.beginPath(),s.moveTo(d-8,E),s.lineTo(d+C+8,E),s.stroke(),s.setLineDash([]),s.fillStyle="#8d6e63",s.beginPath(),s.ellipse(y/2,h+18,10,14,0,0,Math.PI*2),s.fill(),s.fillStyle="#66bb6a",s.beginPath(),s.ellipse(y/2,h+L-10,16,22,0,0,Math.PI*2),s.fill(),s.save(),s.translate(y/2+14,h+L-18),s.rotate(u>0?-.9:-.2),s.fillStyle="#f5f5f5",s.fillRect(-4,-28,8,36),s.restore(),!l&&!o){const x=h+L*c,P=y/2+Math.sin(c*6)*4,Te=7+c*4;s.beginPath(),s.arc(P,x,Te,0,Math.PI*2),s.fillStyle="#ef5350",s.fill(),s.strokeStyle="#fff",s.lineWidth=1.5,s.stroke()}u>0&&(s.fillStyle="rgba(255,244,26,0.15)",s.fillRect(0,E-20,y,40))}function j(){if(a>=Y){o=!0,k.disabled=!0,k.classList.add("hidden"),b.classList.remove("hidden"),$.textContent=`경기 종료! 총 ${i}점`;return}l=!1,r=!1,c=.05,g=.48+Math.random()*.35,$.textContent="타이밍에 맞춰 스윙!"}function B(y){var h;if((h=y==null?void 0:y.preventDefault)==null||h.call(y),o||r||l)return;r=!0,u=.25,a+=1,S.textContent=`볼: ${a} / ${Y}`;const M=Math.abs(c-A);let C=0,d="헛스윙!";M<=q*.25?(C=6,d="식스! +6"):M<=q*.5?(C=4,d="포! +4"):M<=q*.75?(C=2,d="투런! +2"):M<=q&&(C=1,d="싱글! +1"),i+=C,w.textContent=`득점: ${i}`,$.textContent=d,l=!0,setTimeout(()=>{o||j(),a>=Y&&(o=!0,k.disabled=!0,k.classList.add("hidden"),b.classList.remove("hidden"),$.textContent=`경기 종료! 총 ${i}점`)},650)}function W(y){f||(f=y);const M=Math.min(.05,(y-f)/1e3);f=y,!l&&!o&&(c+=g*M,c>1.05&&(l=!0,r=!0,a+=1,S.textContent=`볼: ${a} / ${Y}`,$.textContent="놓침!",setTimeout(()=>{r=!1,a>=Y?(o=!0,k.disabled=!0,k.classList.add("hidden"),b.classList.remove("hidden"),$.textContent=`경기 종료! 총 ${i}점`):j()},500))),u>0&&(u-=M),D(),v=requestAnimationFrame(W)}function ne(){i=0,a=0,o=!1,r=!1,u=0,w.textContent="득점: 0",S.textContent=`볼: 0 / ${Y}`,k.disabled=!1,k.classList.remove("hidden"),b.classList.add("hidden"),j()}function ae(y){(y.code==="Space"||y.key===" ")&&(y.preventDefault(),B(y))}return N(),j(),v=requestAnimationFrame(W),k.addEventListener("click",B),k.addEventListener("touchstart",B,{passive:!1}),m.addEventListener("pointerdown",B),b.addEventListener("click",ne),window.addEventListener("keydown",ae),window.addEventListener("resize",N),On(e,t,n),()=>{cancelAnimationFrame(v),window.removeEventListener("keydown",ae),window.removeEventListener("resize",N)}}function _n(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function Un(e,t,n){var i,a;(i=e.querySelector('[data-nav="back"]'))==null||i.addEventListener("click",t),(a=e.querySelector('[data-nav="main"]'))==null||a.addEventListener("click",n)}const jn=["#42a5f5","#ef5350","#ffee58","#66bb6a"],Hn=4,De=7;function Fn(e,{onBack:t,onMain:n}){let i=0,a=3,r=!1,l=0,c=0;const g={left:!1,right:!1};let u=320,v=420,f={x:0,y:0,w:70,h:12},o={x:0,y:0,r:6,vx:0,vy:0},m=[];e.innerHTML=`
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
      ${_n()}
    </div>
  `;const s=e.querySelector("#bo-canvas"),w=s.getContext("2d"),S=e.querySelector("#bo-lives"),$=e.querySelector("#bo-score"),k=e.querySelector("#bo-feedback"),b=e.querySelector("#bo-start");function A(){u=Math.min(320,Math.max(260,e.clientWidth-16||300)),v=Math.round(u*1.3),s.width=u,s.height=v,f.y=v-36,f.w=u*.22}function q(){m=[];const d=4,h=56,L=(u-d*(De+1))/De,E=16;for(let x=0;x<Hn;x++)for(let P=0;P<De;P++)m.push({x:d+P*(L+d),y:h+x*(E+d),w:L,h:E,color:jn[x],alive:!0})}function N(){f.x=(u-f.w)/2,o.x=u/2,o.y=f.y-20;const d=-Math.PI/3+Math.random()*(Math.PI/3),h=Math.min(u,v)*1.05;o.vx=Math.sin(d)*h,o.vy=-Math.abs(Math.cos(d)*h)}function D(){S.textContent=`생명: ${"●".repeat(a)}${"○".repeat(3-a)}`,$.textContent=`점수: ${String(i).padStart(5,"0")}`}function j(){w.fillStyle="#1a1030",w.fillRect(0,0,u,v);for(const d of m)d.alive&&(w.fillStyle=d.color,B(w,d.x,d.y,d.w,d.h,4),w.fill());w.fillStyle="#fff",B(w,f.x,f.y,f.w,f.h,6),w.fill(),w.beginPath(),w.arc(o.x,o.y,o.r,0,Math.PI*2),w.fillStyle="#fff",w.fill()}function B(d,h,L,E,x,P){d.beginPath(),d.moveTo(h+P,L),d.arcTo(h+E,L,h+E,L+x,P),d.arcTo(h+E,L+x,h,L+x,P),d.arcTo(h,L+x,h,L,P),d.arcTo(h,L,h+E,L,P),d.closePath()}function W(d){c||(c=d);const h=Math.min(.033,(d-c)/1e3);if(c=d,r){const L=u*1.6*h;if(g.left&&(f.x-=L),g.right&&(f.x+=L),f.x=Math.max(0,Math.min(u-f.w,f.x)),o.x+=o.vx*h,o.y+=o.vy*h,o.x<o.r&&(o.x=o.r,o.vx*=-1),o.x>u-o.r&&(o.x=u-o.r,o.vx*=-1),o.y<o.r&&(o.y=o.r,o.vy*=-1),o.vy>0&&o.y+o.r>=f.y&&o.y-o.r<=f.y+f.h&&o.x>=f.x&&o.x<=f.x+f.w){o.y=f.y-o.r;const E=(o.x-(f.x+f.w/2))/(f.w/2),x=Math.hypot(o.vx,o.vy)*1.015,P=E*1.1;o.vx=Math.sin(P)*x,o.vy=-Math.abs(Math.cos(P)*x)}for(const E of m)if(E.alive&&o.x+o.r>E.x&&o.x-o.r<E.x+E.w&&o.y+o.r>E.y&&o.y-o.r<E.y+E.h){E.alive=!1,i+=10,D();const x=o.x+o.r-E.x,P=E.x+E.w-(o.x-o.r),Te=o.y+o.r-E.y,At=E.y+E.h-(o.y-o.r),Mt=Math.min(x,P),xt=Math.min(Te,At);Mt<xt?o.vx*=-1:o.vy*=-1;break}m.every(E=>!E.alive)&&(r=!1,k.textContent=`클리어! 점수 ${i}`),o.y>v+20&&(a-=1,D(),a<=0?(r=!1,k.textContent=`게임 오버 · ${i}점`):(N(),k.textContent="생명 -1! 계속…"))}j(),l=requestAnimationFrame(W)}function ne(){i=0,a=3,r=!0,q(),N(),D(),k.textContent="화이팅!"}function ae(d){const h=s.getBoundingClientRect(),L=(d-h.left)/h.width*u;f.x=Math.max(0,Math.min(u-f.w,L-f.w/2))}function y(d){var L;d.preventDefault();const h=((L=d.touches)==null?void 0:L[0])||d;ae(h.clientX)}function M(d){(d.key==="ArrowLeft"||d.key==="a"||d.key==="A")&&(g.left=!0),(d.key==="ArrowRight"||d.key==="d"||d.key==="D")&&(g.right=!0)}function C(d){(d.key==="ArrowLeft"||d.key==="a"||d.key==="A")&&(g.left=!1),(d.key==="ArrowRight"||d.key==="d"||d.key==="D")&&(g.right=!1)}return A(),q(),N(),D(),j(),l=requestAnimationFrame(W),b.addEventListener("click",ne),s.addEventListener("pointerdown",y),s.addEventListener("pointermove",d=>{(d.buttons||d.pressure>0)&&y(d)}),s.addEventListener("touchstart",y,{passive:!1}),s.addEventListener("touchmove",y,{passive:!1}),window.addEventListener("keydown",M),window.addEventListener("keyup",C),window.addEventListener("resize",A),Un(e,t,n),()=>{cancelAnimationFrame(l),window.removeEventListener("keydown",M),window.removeEventListener("keyup",C),window.removeEventListener("resize",A)}}const p=document.getElementById("app");let O=null,X=null,H=null,re=null,at=!1;const it=new Set(["rest","game-dart","game-cricket","game-breakout","admin"]),Gn={login:Kn,main:zn,help:Yn,profile:Jn,grade:Zn,subject:ea,calculator:ta,rest:na,admin:Xn,"game-dart":()=>Be("dart"),"game-cricket":()=>Be("cricket"),"game-breakout":()=>Be("breakout")};Wn();function Wn(){an().then(()=>gt()).finally(()=>{I(mt()?"main":"login")})}function I(e,t={}){re&&(re(),re=null),at&&!it.has(e)&&bn(),e!=="login"&&!mt()&&(e="login",t={});const n=Gn[e];n&&(p.innerHTML="",n(t),at=it.has(e),window.scrollTo(0,0))}function J(e){e.querySelectorAll("[data-action]").forEach(t=>{t.addEventListener("click",()=>Vn(t.dataset.action))})}function Vn(e){if(e==="main"){O=null,X=null,H=null,I("main");return}if(e==="grade"){X=null,H=null,I("grade");return}if(e==="help"&&I("help"),e==="profile"&&I("profile"),e==="logout"){if(!Re(se()))return;Ne().finally(()=>I("login"));return}if(e==="rest"&&I("rest"),e==="admin"){pe()&&I("admin");return}if(e==="subject"&&I("subject",{grade:O}),e==="game-dart"&&I("game-dart"),e==="game-cricket"&&I("game-cricket"),e==="game-breakout"&&I("game-breakout"),e.startsWith("pick-grade-")){O=Number(e.replace("pick-grade-","")),X=null,H=null,I("subject",{grade:O});return}if(e.startsWith("pick-subject-")){const t=decodeURIComponent(e.replace("pick-subject-",""));X=t;const n=wt(O,t);H=(n.length===1,n[0]),I("calculator",{grade:O,subject:t,semester:H});return}e.startsWith("pick-semester-")&&(H=Number(e.replace("pick-semester-","")),I("calculator",{grade:O,subject:X,semester:H}))}function Kn(){let e="login";const t=()=>{var $,k;const n=e==="register";p.innerHTML=U(`
      <div class="stack-screen login-screen">
        ${ee("globe globe-large")}
        <h1 class="login-title">SCHOOL METRICS</h1>
        <p class="login-desc">${n?"처음이면 회원가입하세요":"해연중 계정으로 로그인하세요"}</p>
        <div class="login-form">
          <div class="login-tabs" role="tablist">
            <button type="button" class="login-tab ${n?"":"active"}" data-mode="login">로그인</button>
            <button type="button" class="login-tab ${n?"active":""}" data-mode="register">회원가입</button>
          </div>
          <label class="field">
            <span>학교 계정</span>
            <input type="email" id="login-email" placeholder="20261111@haeyeon.ms.kr" autocomplete="username" />
          </label>
          ${n?`<label class="field">
            <span>이름</span>
            <input type="text" id="login-name" placeholder="홍길동" autocomplete="name" maxlength="20" />
          </label>`:""}
          <label class="field">
            <span>비밀번호</span>
            <input type="password" id="login-password" placeholder="6자 이상" autocomplete="${n?"new-password":"current-password"}" />
          </label>
          ${n?`<label class="field">
            <span>비밀번호 확인</span>
            <input type="password" id="login-password2" placeholder="한 번 더" autocomplete="new-password" />
          </label>`:""}
          <button type="button" class="btn-go" id="login-submit">${n?"가입하기":"로그인"}</button>
          <p class="muted login-hint">예: 20261111@haeyeon.ms.kr<br/>가입 후 학교 메일로 온 인증 링크를 눌러야 로그인됩니다.<br/>인증 메일이 스팸함에 있을 수 있으니 스팸함도 확인해 주세요.</p>
          <p class="warn hidden" id="login-error"></p>
          <p class="ok-msg hidden" id="login-ok"></p>
          <div class="login-verify-actions hidden" id="verify-actions">
            <button type="button" class="link-btn" id="verify-refresh">인증 완료했어요</button>
            <button type="button" class="link-btn" id="verify-resend">인증 메일 다시 받기</button>
          </div>
        </div>
        ${oe(R.footer)}
      </div>
    `);const i=p.querySelector("#login-error"),a=p.querySelector("#login-ok"),r=p.querySelector("#verify-actions"),l=p.querySelector("#login-email"),c=p.querySelector("#login-name"),g=p.querySelector("#login-password"),u=p.querySelector("#login-password2"),v=p.querySelector("#login-submit"),f=b=>{a.classList.add("hidden"),i.textContent=b,i.classList.remove("hidden")},o=b=>{i.classList.add("hidden"),a.textContent=b,a.classList.remove("hidden")},m=b=>{v.disabled=b};p.querySelectorAll("[data-mode]").forEach(b=>{b.addEventListener("click",()=>{e=b.dataset.mode,t()})});const s=b=>{const A=je(b);K({type:"user_login",message:`로그인: ${A}`,account:b.account,displayName:b.displayName||"",studentId:b.studentId||""}),pe()&&K({type:"admin_login",message:"관리자 계정 로그인 — 관리자 모드 자동 활성화",account:b.account}),gt().finally(()=>I("main"))},w=b=>{o(b.error),r.classList.remove("hidden")},S=async()=>{i.classList.add("hidden"),a.classList.add("hidden"),r.classList.add("hidden"),m(!0);try{if(e==="register"){if(g.value!==((u==null?void 0:u.value)||"")){f("비밀번호 확인이 일치하지 않습니다.");return}const A=await Qt(l.value,g.value,(c==null?void 0:c.value)||"");if(A.needVerify){w(A);return}if(!A.ok){f(A.error);return}s(A.user);return}const b=await Zt(l.value,g.value);if(b.needVerify){w(b);return}if(!b.ok){f(b.error);return}s(b.user)}finally{m(!1)}};v.addEventListener("click",S),[l,c,g,u].filter(Boolean).forEach(b=>{b.addEventListener("keydown",A=>{A.key==="Enter"&&S()})}),($=p.querySelector("#verify-refresh"))==null||$.addEventListener("click",async()=>{m(!0);const b=await tn();if(m(!1),b.needVerify){w(b);return}if(!b.ok){f(b.error);return}s(b.user)}),(k=p.querySelector("#verify-resend"))==null||k.addEventListener("click",async()=>{const b=await nn();if(!b.ok){f(b.error);return}o(b.message),r.classList.remove("hidden")})};t()}function zn(){const e=getNextQuote(),t=je()||se()||"",n=Re(se());p.innerHTML=U(`
    <div class="main-screen">
      <button type="button" class="help-btn" data-action="help" aria-label="앱 정보">?</button>
      <div class="main-header">
        <div class="title-block">
          ${Nn()}
          <h1 class="app-title">${R.title}</h1>
        </div>
        <p class="app-subtitle">${R.subtitle}</p>
        <p class="main-quote">"${e}"</p>
      </div>
      <div class="main-body">
        <p class="login-user muted">${V(t)}</p>
        <button type="button" class="link-btn" data-action="profile">내 정보 수정</button>
        ${n?'<button type="button" class="link-btn" data-action="logout">로그아웃</button>':""}
        <button type="button" class="go-btn" data-action="grade" aria-label="시작">
          ${Cn()}
          <span class="go-text">GO</span>
        </button>
      </div>
      <p class="main-footer">${R.footer}</p>
    </div>
  `),J(p)}function Jn(){const e=z(),t=Re(e==null?void 0:e.account);p.innerHTML=U(`
    <div class="stack-screen">
      ${ee()}
      <h2 class="screen-title">내 정보</h2>
      <div class="login-form profile-form">
        <p class="muted login-hint">로그인 계정: ${V((e==null?void 0:e.account)||"")}</p>
        <label class="field">
          <span>이름</span>
          <input type="text" id="profile-name" value="${V((e==null?void 0:e.displayName)||"")}" maxlength="20" />
        </label>
        <label class="field">
          <span>학번 (4자리)</span>
          <input type="text" id="profile-sid" value="${V((e==null?void 0:e.studentId)||"")}" inputmode="numeric" maxlength="4" placeholder="1111" />
        </label>
        <button type="button" class="btn-go" id="profile-save">저장</button>
        ${t?'<button type="button" class="link-btn" data-action="logout">로그아웃</button>':""}
        <p class="warn hidden" id="profile-error"></p>
        <p class="ok-msg hidden" id="profile-ok"></p>
      </div>
      ${te()}
    </div>
  `);const n=p.querySelector("#profile-error"),i=p.querySelector("#profile-ok"),a=p.querySelector("#profile-name"),r=p.querySelector("#profile-sid"),l=p.querySelector("#profile-save");l.addEventListener("click",async()=>{n.classList.add("hidden"),i.classList.add("hidden"),l.disabled=!0;const c=await en({displayName:a.value,studentId:r.value});if(l.disabled=!1,!c.ok){n.textContent=c.error,n.classList.remove("hidden");return}i.textContent="저장되었습니다.",i.classList.remove("hidden"),K({type:"profile_update",message:`정보 수정: ${je(c.user)}`,displayName:c.user.displayName,studentId:c.user.studentId})}),J(p)}function Yn(){const e=le();p.innerHTML=U(`
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
          <li>서로 다른 과목 ${e}개 계산 시 미니게임 1회 해금</li>
          <li>미니게임 이용 후에는 다시 잠금</li>
        </ul>
        <p class="muted">제작: ${R.creator}</p>
        ${pe()?'<p class="success"><button type="button" class="link-btn" data-action="admin">관리자 패널 열기</button></p>':""}
      </div>
      ${te()}
      <p class="muted login-hint" style="text-align:center;margin-top:auto;padding:12px 8px 4px">${R.subtitle}</p>
    </div>
  `),J(p)}function Xn(){var g,u,v,f,o;if(!pe()){I("help");return}const e=F(),t=dn(),n=e.standardScale,i=e.artsScale,a=t.configured?`Firebase 연결됨 (${t.projectId})`:"Firebase 미설정 — src/firebase-config.js 에 키를 넣어주세요",r=t.isCloudAdmin?`클라우드 관리자 계정으로 로그인됨 (${t.adminEmail}) — 전체 기록 조회·설정 저장 가능`:`클라우드 전체 기록/설정 수정은 ${t.adminEmail} 로 로그인한 뒤에만 가능합니다. (지금: ${t.account||"미로그인"})`;p.innerHTML=U(`
    <div class="stack-screen admin-screen">
      <h2 class="screen-title">관리자 모드</h2>
      <p class="screen-desc">기기 ID: ${ge()}</p>
      <p class="muted admin-note">${a}</p>
      <p class="muted admin-note">${r}</p>
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
          ${n.map((m,s)=>`
            <label>${m.letter}
              <input type="number" data-scale="std" data-i="${s}" data-letter="${m.letter}" min="0" max="100" value="${m.min}" />
            </label>
          `).join("")}
        </div>
        <h4>예체능 등급 기준 (점 이상)</h4>
        <div class="admin-scale" id="adm-arts">
          ${i.map((m,s)=>`
            <label>${m.letter}
              <input type="number" data-scale="arts" data-i="${s}" data-letter="${m.letter}" min="0" max="100" value="${m.min}" />
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
        <button type="button" class="link-btn" data-action="main">메인으로</button>
        ${te()}
      </div>
      ${oe("ADMIN")}
    </div>
  `),J(p);let l=Ve();async function c(){const m=p.querySelector("#adm-logs"),s=p.querySelector("#adm-log-count");m&&(m.innerHTML='<p class="muted">불러오는 중…</p>');const w=await ln();if(l=w.logs,s&&(s.textContent=`(${l.length} · ${w.source}${w.error?" · 오류":""})`),!!m){if(l.length===0){m.innerHTML='<p class="muted">아직 기록이 없습니다.</p>';return}m.innerHTML=l.slice(0,120).map(S=>{const $=[S.displayName,S.studentId,S.account||S.deviceId].filter(Boolean).join(" · ");return`
      <article class="admin-log-item">
        <header>${V($)} · ${V(S.type)} · ${Qn(S.at)}</header>
        <p>${V(S.message||"")}</p>
        ${S.detail?`<pre>${V(typeof S.detail=="string"?S.detail:JSON.stringify(S.detail,null,0))}</pre>`:""}
      </article>
    `}).join("")}}c(),(g=p.querySelector("#adm-refresh-logs"))==null||g.addEventListener("click",()=>c()),(u=p.querySelector("#adm-save"))==null||u.addEventListener("click",async()=>{var $,k;const m=Number(($=p.querySelector("#adm-unlock"))==null?void 0:$.value),s=!!((k=p.querySelector("#adm-free-games"))!=null&&k.checked),w=[...p.querySelectorAll('[data-scale="std"]')].map(b=>({letter:b.dataset.letter,min:Number(b.value)||0})),S=[...p.querySelectorAll('[data-scale="arts"]')].map(b=>({letter:b.dataset.letter,min:Number(b.value)||0}));sn({restUnlockUses:Number.isFinite(m)&&m>0?m:8,freeGames:s,standardScale:w,artsScale:S}),window.alert(T()?"설정을 저장했고 클라우드에도 올렸습니다.":"설정을 이 기기에 저장했습니다. (Firebase 미설정)"),I("admin")}),(v=p.querySelector("#adm-feedback-save"))==null||v.addEventListener("click",()=>{var s,w;const m=(w=(s=p.querySelector("#adm-feedback"))==null?void 0:s.value)==null?void 0:w.trim();if(!m){window.alert("내용을 입력하세요.");return}K({type:"game_feedback",message:m}),window.alert("피드백을 저장했습니다."),I("admin")}),(f=p.querySelector("#adm-export"))==null||f.addEventListener("click",async()=>{const m=cn(l);try{await navigator.clipboard.writeText(m),window.alert("기록이 클립보드에 복사되었습니다.")}catch{window.prompt("아래 내용을 복사하세요",m)}}),(o=p.querySelector("#adm-clear-logs"))==null||o.addEventListener("click",async()=>{window.confirm("로컬+클라우드 활동 기록을 비울까요?")&&(await on({cloud:!0}),I("admin"))})}function V(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Qn(e){try{const t=new Date(e);return`${t.getMonth()+1}/${t.getDate()} ${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`}catch{return e}}function Zn(){const e=he(),t=ht();p.innerHTML=U(`
    <div class="stack-screen grade-screen">
      ${ee()}
      <h2 class="screen-title">자신의 학년을 선택하세요</h2>
      <div class="grade-list">
        <button type="button" class="grade-btn grade-1" data-action="pick-grade-1">1학년</button>
        <button type="button" class="grade-btn grade-2" data-action="pick-grade-2">2학년</button>
        <button type="button" class="grade-btn grade-3" data-action="pick-grade-3">3학년</button>
      </div>
      ${e?'<button type="button" class="rest-btn" data-action="rest">휴식 · 미니게임</button>':`<p class="unlock-hint">${t}</p>`}
      ${te()}
      ${oe(R.subtitle)}
    </div>
  `),J(p)}function ea({grade:e}){if(!e||!me(e)){I("grade");return}O=e;const t=me(e),n=pn(e);p.innerHTML=U(`
    <div class="stack-screen ${Et(e)}">
      ${ee()}
      <h2 class="screen-title">${t.label} 과목 선택</h2>
      ${t.note?`<p class="screen-note">${t.note}</p>`:""}
      ${$t()}
      <div class="subject-list">
        ${n.map(i=>`<button type="button" class="subject-btn" data-action="pick-subject-${encodeURIComponent(i)}">${i}</button>`).join("")}
      </div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="grade">학년 선택으로</button>
        ${te()}
      </div>
      ${oe(R.subtitle)}
    </div>
  `),J(p),Lt(p)}function ta({grade:e,subject:t,semester:n}){if(!e||!t||!n){I("subject",{grade:O});return}O=e,X=t,H=n;const i=me(e),a=wt(e,t),r=kn(e,t,n),l=tt(e,t,n),c={},g=a.length>1?`<div class="semester-tabs">
          ${a.map(o=>`<button type="button" class="semester-tab ${o===n?"active":""}" data-action="pick-semester-${o}">${tt(e,t,o)}</button>`).join("")}
        </div>`:`<p class="semester-only">${l}</p>`;p.innerHTML=U(`
    <div class="stack-screen calculator-screen ${Et(e)}">
      ${ee("globe globe-small")}
      <h2 class="screen-title subject-title">${t}</h2>
      <p class="screen-desc">${i.label} · ${l}${Ye(t)?" · 예체능(A·B·C)":" · 일반(A~E)"}</p>
      ${$t(t)}
      ${g}
      <form id="calc-form" class="calc-form"></form>
      <button type="submit" form="calc-form" class="btn-calc">계산하기</button>
      <div id="calc-result" class="calc-result hidden"></div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="subject">과목 선택으로</button>
        ${te()}
      </div>
      ${oe(R.subtitle)}
    </div>
  `);const u=p.querySelector("#calc-form");let v="";for(const o of r){if(o.kind!==v){v=o.kind;const s=document.createElement("h3");s.className="section-heading",s.textContent=o.kind==="exam"?"지필고사":"수행평가",u.appendChild(s)}const m=document.createElement("label");m.className="score-row",m.innerHTML=`
      <span>${o.label} <em>${o.weight}%</em></span>
      <input type="number" min="0" max="100" step="0.1" inputmode="decimal"
        name="${o.key}" placeholder="점수" />
    `,u.appendChild(m)}const f=p.querySelector("#calc-result");u.addEventListener("submit",o=>{var A,q;o.preventDefault();const m=new FormData(u);for(const N of r)c[N.key]=m.get(N.key);const s=xn(r,c,t);if(!s){f.classList.remove("hidden"),f.innerHTML='<p class="warn">최소 1개 이상 점수를 입력하세요.</p>';return}const w=fn(t);K({type:"calc",message:`${e}학년 ${t} (${l}) → ${s.rounded}점 ${ue(s.letter)}`,detail:{grade:e,subject:t,semester:n,scores:c,rounded:s.rounded,letter:s.letter,average:s.average}});let S="";((A=s.needed)==null?void 0:A.needed)!=null?S=`<p>상위 <strong>${ue(s.needed.targetLetter)}</strong>까지 남은 항목 평균 <strong>${s.needed.needed}점</strong> 이상</p>`:(q=s.needed)!=null&&q.message&&(S=`<p>${s.needed.message}</p>`);let $="";if(s.projection.remainingCount>0&&s.letter===s.projLetter){const N=ue(s.letter);let D="";s.confirmMin&&(s.confirmMin.minScore<=0?D=`<p>남은 항목이 <strong>0점</strong>이어도 ${N} 유지</p>`:D=`<p>남은 항목 각각 최소 <strong>${s.confirmMin.minScore}점</strong> 이상이면 ${N} 유지</p>`),$=`
        <p><strong>${N} 확정입니다.</strong></p>
        ${D}
      `}let k="";Ln(s)&&(k=`<p class="cheer-msg">${En()}</p>`);let b="";w.justUnlocked?b=`<p class="success">서로 다른 과목 ${le()}개 달성! 학년 선택에서 휴식 미니게임 이용</p>`:he()?b='<p class="success">휴식 미니게임 이용 가능 (학년 선택 화면)</p>':w.isNew?b=`<p class="muted">${ht()}</p>`:b='<p class="muted">이미 계산한 과목입니다. 다른 과목을 계산하면 해금에 가까워져요.</p>',f.classList.remove("hidden"),f.innerHTML=`
      <h3>${t} 결과</h3>
      <p>총점(반올림) <strong>${s.rounded}점</strong> · <strong>${ue(s.letter)}</strong></p>
      <p class="muted">가중 평균 ${s.average.toFixed(1)}점</p>
      <p>남은 항목 100점 시 <strong>${s.projRounded}점</strong> · <strong>${ue(s.projLetter)}</strong></p>
      ${$}
      ${k}
      ${S}
      ${b}
    `}),J(p),Lt(p)}function na(){if(!he()){I("grade");return}p.innerHTML=U(`
    <div class="stack-screen">
      ${ee()}
      <h2 class="screen-title">휴식 · 미니게임</h2>
      <div class="game-list">
        <button type="button" class="game-card" data-action="game-dart">다트 게임</button>
        <button type="button" class="game-card" data-action="game-cricket">크리켓 게임</button>
        <button type="button" class="game-card" data-action="game-breakout">벽돌깨기</button>
      </div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="grade">학년 선택으로</button>
        ${te()}
      </div>
      ${oe(R.subtitle)}
    </div>
  `),J(p)}function Be(e){if(!he()){I("grade");return}K({type:"game_open",message:`미니게임 시작: ${e}${Ce()?" (관리자)":""}`,detail:{type:e}}),p.innerHTML=U('<div id="game-root"></div>',"game-screen");const t=p.querySelector("#game-root"),n={onBack:()=>I("rest"),onMain:()=>{O=null,X=null,H=null,I("main")}};e==="dart"?re=Dn(t,n)??null:e==="cricket"?re=Rn(t,n)??null:e==="breakout"&&(re=Fn(t,n)??null)}
