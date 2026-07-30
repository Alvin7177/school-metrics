(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();const lt=8,O={title:"SCHOOL METRICS",subtitle:"철저한 내신관리 시스템",footer:"for 해연중 학생들",creator:"2210 박민호"},fe={apiKey:"AIzaSyB7YJBfYa9zGnUvLD4DFgR5KLiNKuluHJM",authDomain:"school-metrics-fdee3.firebaseapp.com",projectId:"school-metrics-fdee3",storageBucket:"school-metrics-fdee3.firebasestorage.app",messagingSenderId:"378255554733",appId:"1:378255554733:web:01b06dca5b5307860eae24",measurementId:"G-0BL416S3QD"},Oe="alyssabell729@gmail.com";function T(){return!!(fe.apiKey&&fe.projectId&&fe.appId)}function Z(e){return String(e||"").trim().toLowerCase()===Oe.toLowerCase()}const Ct="https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js",_="https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js",z="https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";let ce=null,we=null,de=null,ke=null;async function ot(){return T()?ce||(ke||(ke=(async()=>{const{initializeApp:e,getApps:t}=await import(Ct);return ce=t().length?t()[0]:e(fe),ce})().catch(e=>(console.warn("[firebase] app init failed",e),ke=null,ce=null,null))),ke):null}async function G(){if(!T())return null;if(await se(),we)return we;const e=await ot();if(!e)return null;const{getFirestore:t}=await import(_);return we=t(e),we}async function se(){if(!T())return null;if(de)return de;const e=await ot();if(!e)return null;const{getAuth:t,setPersistence:n,browserLocalPersistence:i}=await import(z);de=t(e);try{await n(de,i)}catch(a){console.warn("[firebase] auth persistence",a)}return de}function _e(e){const t=(e==null?void 0:e.code)||"";return{"auth/email-already-in-use":"이미 가입된 계정입니다. 로그인하세요.","auth/invalid-email":"이메일 형식이 올바르지 않습니다.","auth/weak-password":"비밀번호는 6자 이상이어야 합니다.","auth/user-not-found":"가입되지 않은 계정입니다. 먼저 회원가입하세요.","auth/wrong-password":"비밀번호가 틀렸습니다.","auth/invalid-credential":"이메일 또는 비밀번호가 올바르지 않습니다.","auth/too-many-requests":"시도가 너무 많습니다. 잠시 후 다시 시도하세요.","auth/network-request-failed":"네트워크 오류입니다. 연결을 확인하세요.","auth/operation-not-allowed":"Firebase에서 이메일/비밀번호 로그인을 켜야 합니다.","auth/missing-email":"이메일을 입력하세요."}[t]||(e==null?void 0:e.message)||"인증에 실패했습니다."}async function Pt(e,t){const n=await se();if(!n)throw new Error("Firebase가 설정되지 않았습니다.");const{createUserWithEmailAndPassword:i,sendEmailVerification:a}=await import(z);try{const r=await i(n,e,t);try{await a(r.user)}catch(l){console.warn("[firebase] verification mail",l)}return r.user}catch(r){throw r.friendlyMessage=_e(r),r}}async function qt(e,t){const n=await se();if(!n)throw new Error("Firebase가 설정되지 않았습니다.");const{signInWithEmailAndPassword:i}=await import(z);try{return(await i(n,e,t)).user}catch(a){throw a.friendlyMessage=_e(a),a}}async function Se(){const e=await se();if(!e)return;const{signOut:t}=await import(z);await t(e)}async function Tt(e){const t=await se();if(!t)throw new Error("Firebase가 설정되지 않았습니다.");const{sendPasswordResetEmail:n}=await import(z);try{await n(t,e)}catch(i){throw i.friendlyMessage=_e(i),i}}async function Ee(){const e=await se();if(!e)return null;if(e.currentUser)return e.currentUser;const{onAuthStateChanged:t}=await import(z);return new Promise(n=>{const i=t(e,a=>{i(),n(a||null)})})}async function Dt(){const e=await Ee();return e?(await e.reload(),e):null}async function Bt(){const e=await Ee();if(!e)throw new Error("로그인된 사용자가 없습니다.");const{sendEmailVerification:t}=await import(z);await t(e)}async function Rt(e){const t=await Ee();if(!t)return;const{updateProfile:n}=await import(z);await n(t,e)}async function Ot(e,t){if(!e)return!1;const n=await G();if(!n)return!1;const{doc:i,setDoc:a,serverTimestamp:r}=await import(_),l={...t};return Object.keys(l).forEach(c=>{l[c]===void 0&&delete l[c]}),await a(i(n,"userProfiles",e),{...l,updatedAt:r()},{merge:!0}),!0}async function _t(e){if(!e)return null;const t=await G();if(!t)return null;const{doc:n,getDoc:i}=await import(_),a=await i(n(t,"userProfiles",e));if(!a.exists())return null;const r=a.data();return delete r.updatedAt,r}async function Ut(e){if(!e)return null;const t=await G();if(!t)return null;const{doc:n,getDoc:i}=await import(_),a=await i(n(t,"deviceBindings",e));return a.exists()?a.data():null}async function jt(e,t,n=null){if(!e||!t)return{ok:!1,error:"기기 정보가 없습니다."};const i=await G();if(!i)return{ok:!1,error:"Firebase가 설정되지 않았습니다."};const{doc:a,runTransaction:r,serverTimestamp:l}=await import(_),c=a(i,"deviceBindings",e),b=String(t).trim().toLowerCase();try{return await r(i,async f=>{var u;const v=await f.get(c);if(v.exists()){const o=String(((u=v.data())==null?void 0:u.account)||"").toLowerCase();if(o&&o!==b){const m=new Error("DEVICE_BOUND_OTHER");throw m.code="DEVICE_BOUND_OTHER",m.boundAccount=o,m}}f.set(c,{account:b,uid:n||null,updatedAt:l(),...v.exists()?{}:{createdAt:l()}},{merge:!0})}),{ok:!0,account:b}}catch(f){if((f==null?void 0:f.code)==="DEVICE_BOUND_OTHER"||(f==null?void 0:f.message)==="DEVICE_BOUND_OTHER")return{ok:!1,conflict:!0,boundAccount:f.boundAccount||null,error:"이 기기에서는 이미 다른 계정이 사용 중입니다. (도용·사칭 방지)"};throw f}}async function Ht(e){const t=await G();if(!t)return null;const{collection:n,addDoc:i,serverTimestamp:a}=await import(_),r={...e};return Object.keys(r).forEach(c=>{r[c]===void 0&&delete r[c]}),(await i(n(t,"activityLogs"),{...r,createdAt:a()})).id}async function Ft(e=200){const t=await G();if(!t)return[];const{collection:n,query:i,orderBy:a,limit:r,getDocs:l}=await import(_),c=i(n(t,"activityLogs"),a("at","desc"),r(e));return(await l(c)).docs.map(f=>({id:f.id,...f.data()}))}async function Gt(){const e=await G();if(!e)return 0;const{collection:t,getDocs:n,deleteDoc:i,query:a,limit:r}=await import(_);let l=0;for(;;){const c=await n(a(t(e,"activityLogs"),r(100)));if(c.empty||(await Promise.all(c.docs.map(b=>i(b.ref))),l+=c.size,c.size<100))break}return l}async function Wt(e){const t=await G();if(!t)return!1;const{doc:n,setDoc:i,serverTimestamp:a}=await import(_),r={...e};return Object.keys(r).forEach(l=>{r[l]===void 0&&delete r[l]}),await i(n(t,"adminSettings","global"),{...r,updatedAt:a()}),!0}async function Vt(){const e=await G();if(!e)return null;const{doc:t,getDoc:n}=await import(_),i=await n(t(e,"adminSettings","global"));if(!i.exists())return null;const a=i.data();return delete a.updatedAt,a}const Ze="schoolMetricsDeviceId",ct="schoolMetricsBoundAccount";function be(){let e=localStorage.getItem(Ze);return e||(e=`dev-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,localStorage.setItem(Ze,e)),e}function Kt(){return String(localStorage.getItem(ct)||"").trim().toLowerCase()||null}function dt(e){localStorage.setItem(ct,String(e).trim().toLowerCase())}const Ie="schoolMetricsUserAccount",zt=new Set(["2024","2025","2026"]),Jt=/^(\d{4})(\d{4})@haeyeon\.ms\.kr$/i,et=6;function Yt(e){const n=String(e||"").trim().toLowerCase().match(Jt);if(!n)return{ok:!1,error:"해연중 계정(@haeyeon.ms.kr) 형식으로 입력하세요."};const i=n[1],a=n[2],r=$e(a);return r.ok?zt.has(i)?{ok:!0,account:`${i}${r.studentId}@haeyeon.ms.kr`,year:i,studentId:r.studentId,grade:r.grade,classNo:r.classNo,number:r.number,isAdminAccount:!1}:{ok:!1,error:"년도는 2024, 2025, 2026만 가능합니다."}:r}function ge(e){const t=String(e||"").trim().toLowerCase();return Z(t)?{ok:!0,account:Oe.toLowerCase(),year:"admin",studentId:"admin",grade:0,classNo:0,number:0,isAdminAccount:!0}:Yt(t)}function $e(e){const t=String(e||"").trim();if(!/^\d{4}$/.test(t))return{ok:!1,error:"학번은 숫자 4자리여야 합니다. (예: 1111)"};const n=t[0],i=t[1],a=Number(t.slice(2));return["1","2","3"].includes(n)?"12345678".includes(i)?!Number.isInteger(a)||a<1||a>35?{ok:!1,error:"번호는 01~35만 가능합니다."}:{ok:!0,studentId:t,grade:Number(n),classNo:Number(i),number:a}:{ok:!1,error:"학번 둘째 자리(반)는 1~8만 가능합니다."}:{ok:!1,error:"학번 첫 자리(학년)는 1·2·3만 가능합니다."}}function ut(e){const t=String(e||"").trim().replace(/\s+/g," ");return t.length<2?{ok:!1,error:"이름은 2글자 이상 입력하세요."}:t.length>20?{ok:!1,error:"이름은 20글자 이하로 입력하세요."}:{ok:!0,displayName:t}}function ft(e){return String(e||"").length<et?{ok:!1,error:`비밀번호는 ${et}자 이상이어야 합니다.`}:{ok:!0}}const tt="이 기기에서는 이미 다른 계정이 사용 중입니다. (도용·사칭 방지)";async function Ue(e){const t=String(e||"").trim().toLowerCase(),n=be();if(Z(t))return{ok:!0,deviceId:n,bypass:!0};const i=Kt();if(i&&i!==t&&!Z(i))return{ok:!1,error:tt,boundAccount:i};try{const a=await Ut(n),r=String((a==null?void 0:a.account)||"").toLowerCase();if(r&&r!==t&&!Z(r))return dt(r),{ok:!1,error:tt,boundAccount:r}}catch(a){console.warn("[auth] device binding check",a)}return{ok:!0,deviceId:n}}async function Me(e,t=null){const n=String(e||"").trim().toLowerCase(),i=be();if(Z(n))return{ok:!0,deviceId:i,account:n,skipped:!0};const a=await jt(i,n,t);return a.ok?(dt(n),{ok:!0,deviceId:i,account:n}):a}function je(e){return localStorage.setItem(Ie,JSON.stringify(e)),e}function mt(e,t={}){return{account:e.account,year:e.year,studentId:e.studentId,grade:e.grade,classNo:e.classNo,number:e.number,displayName:t.displayName||"",loggedInAt:new Date().toISOString(),viaPassword:!0,...t}}function J(){try{const e=localStorage.getItem(Ie);if(!e)return null;const t=JSON.parse(e);return t!=null&&t.account&&ge(t.account).ok?t:null}catch{return null}}function bt(){return!!J()}function xe(){var e;return((e=J())==null?void 0:e.account)||null}function Xt(){var e;return((e=J())==null?void 0:e.displayName)||""}function Qt(){var e;return((e=J())==null?void 0:e.studentId)||""}function He(e=J()){if(!e)return"";const t=[];return e.displayName&&t.push(e.displayName),e.studentId&&t.push(e.studentId),t.join(" · ")||e.account||""}async function Ne(){localStorage.removeItem(Ie);try{await Se()}catch{}}async function gt(e,t){if(e){try{await Rt({displayName:t.displayName||""})}catch(n){console.warn("[auth] updateProfile",n)}try{await Ot(e,{displayName:t.displayName||"",studentId:t.studentId||"",year:t.year||"",account:t.account||"",grade:t.grade,classNo:t.classNo,number:t.number})}catch(n){console.warn("[auth] cloud profile",n)}}}async function Fe(e,{requireVerified:t=!0}={}){const n=e==null?void 0:e.email;if(!n)return await Se().catch(()=>{}),{ok:!1,error:"계정 이메일을 가져오지 못했습니다."};const i=ge(n);if(!i.ok)return await Se().catch(()=>{}),i;if(t&&!e.emailVerified)return{ok:!1,needVerify:!0,error:"학교 메일함에서 인증 메일의 링크를 눌러주세요. (스팸함도 확인)",account:i.account};let a=String(e.displayName||"").trim(),r=i.studentId,l=i.grade,c=i.classNo,b=i.number;try{const u=await _t(e.uid);if(u!=null&&u.displayName&&(a=String(u.displayName).trim()),u!=null&&u.studentId){const o=$e(u.studentId);o.ok&&(r=o.studentId,l=o.grade,c=o.classNo,b=o.number)}}catch(u){console.warn("[auth] load profile",u)}const f=J();if((f==null?void 0:f.account)===i.account&&(!a&&f.displayName&&(a=f.displayName),f.studentId)){const u=$e(f.studentId);u.ok&&r===i.studentId&&f.studentId!==i.studentId&&(r=u.studentId,l=u.grade,c=u.classNo,b=u.number)}return{ok:!0,user:je(mt({...i,studentId:r,grade:l,classNo:c,number:b},{uid:e.uid||null,emailVerified:!!e.emailVerified,displayName:a}))}}async function Zt(e,t,n){if(!T())return{ok:!1,error:"Firebase 설정이 없습니다."};const i=ut(n);if(!i.ok)return i;const a=ge(e);if(!a.ok)return a;const r=ft(t);if(!r.ok)return r;const l=await Ue(a.account);if(!l.ok)return l;try{const c=await Pt(a.account,t),b=await Me(a.account,c.uid);return b.ok?(await gt(c.uid,{displayName:i.displayName,studentId:a.studentId,year:a.year,account:a.account,grade:a.grade,classNo:a.classNo,number:a.number}),je(mt(a,{uid:c.uid,displayName:i.displayName,emailVerified:!1})),{ok:!1,needVerify:!0,registered:!0,account:a.account,displayName:i.displayName,error:"가입되었습니다. 학교 메일함의 인증 링크를 누른 뒤 로그인하세요.",uid:c==null?void 0:c.uid}):(await Se().catch(()=>{}),b)}catch(c){return{ok:!1,error:c.friendlyMessage||c.message||"회원가입 실패"}}}async function en(e,t){if(!T())return{ok:!1,error:"Firebase 설정이 없습니다."};const n=ge(e);if(!n.ok)return n;const i=ft(t);if(!i.ok)return i;const a=await Ue(n.account);if(!a.ok)return a;try{const r=await qt(n.account,t);await r.reload();const l=await Fe(r,{requireVerified:!0});if(!l.ok)return l;const c=await Me(n.account,r.uid);return c.ok?l:(await Ne(),c)}catch(r){return{ok:!1,error:r.friendlyMessage||r.message||"로그인 실패"}}}async function tn(e){if(!T())return{ok:!1,error:"Firebase 설정이 없습니다."};const t=ge(e);if(!t.ok)return t;try{return await Tt(t.account),{ok:!0,message:"비밀번호 재설정 메일을 보냈습니다. 학교 메일함을 확인하세요."}}catch(n){return{ok:!1,error:n.friendlyMessage||n.message||"재설정 메일 전송 실패"}}}async function nn({displayName:e,studentId:t}){const n=J();if(!n)return{ok:!1,error:"로그인이 필요합니다."};const i=ut(e);if(!i.ok)return i;const a=$e(t);if(!a.ok)return a;const r=je({...n,displayName:i.displayName,studentId:a.studentId,grade:a.grade,classNo:a.classNo,number:a.number});return await gt(n.uid,{displayName:r.displayName,studentId:r.studentId,year:r.year,account:r.account,grade:r.grade,classNo:r.classNo,number:r.number}),{ok:!0,user:r}}async function an(){try{const e=await Dt();if(!e)return{ok:!1,error:"먼저 로그인(비밀번호)을 다시 시도하세요."};const t=await Fe(e,{requireVerified:!0});if(!t.ok)return t;const n=await Me(t.user.account,e.uid);return n.ok?t:(await Ne(),n)}catch(e){return{ok:!1,error:e.message||"인증 상태 확인 실패"}}}async function rn(){try{return await Bt(),{ok:!0,message:"인증 메일을 다시 보냈습니다. 메일함을 확인하세요."}}catch(e){return{ok:!1,error:e.message||"인증 메일 재전송 실패"}}}async function sn(){if(!T())return ye(),null;try{const e=await Ee();if(!e)return ye(),null;await e.reload();const t=await Fe(e,{requireVerified:!0});return t.ok?(await Ue(t.user.account)).ok?(await Me(t.user.account,e.uid),t.user):(await Ne(),null):(ye(),null)}catch(e){return console.warn("[auth] restore",e),ye(),null}}function ye(){localStorage.removeItem(Ie)}const Ge="schoolMetricsAdminSettings",Le="schoolMetricsActivityLog",ln=500,ie={restUnlockUses:lt,freeGames:!0,standardScale:[{letter:"A",min:90},{letter:"B",min:80},{letter:"C",min:70},{letter:"D",min:60},{letter:"E",min:0}],artsScale:[{letter:"A",min:80},{letter:"B",min:60},{letter:"C",min:0}]};function We(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function Ve(e,t){localStorage.setItem(e,JSON.stringify(t))}function pe(){return Z(xe())}function F(){const e=We(Ge,{});return{...ie,...e,standardScale:e.standardScale||ie.standardScale,artsScale:e.artsScale||ie.artsScale}}function on(e){const t={...F(),...e};return Ve(Ge,t),K({type:"admin_settings",message:"관리자 설정 변경",detail:e}),T()&&Wt(t).catch(n=>console.warn("[firebase] settings save",n)),t}async function pt(){if(!T())return F();try{const e=await Vt();if(e&&typeof e=="object"){const t={...ie,...e,standardScale:e.standardScale||ie.standardScale,artsScale:e.artsScale||ie.artsScale};return Ve(Ge,t),t}}catch(e){console.warn("[firebase] settings load",e)}return F()}function le(){return Number(F().restUnlockUses)||lt}function Ae(){return pe()&&F().freeGames!==!1}function K(e){const t={id:`${Date.now()}-${Math.random().toString(36).slice(2,7)}`,at:new Date().toISOString(),deviceId:be(),...e,account:e.account||xe()||"guest",displayName:e.displayName||Xt()||"",studentId:e.studentId||Qt()||""},n=We(Le,[]);return n.unshift(t),Ve(Le,n.slice(0,ln)),T()&&Ht(t).catch(i=>console.warn("[firebase] log",i)),t}function Ke(){return We(Le,[])}async function cn(){const e=Ke();if(!T())return{source:"local",logs:e};try{const t=await Ft(300),n=new Map;for(const a of[...t,...e]){const r=a.id||`${a.at}-${a.deviceId}-${a.type}-${a.message}`;n.has(r)||n.set(r,a)}return{source:"firebase",logs:[...n.values()].sort((a,r)=>String(r.at).localeCompare(String(a.at)))}}catch(t){return console.warn("[firebase] fetch logs",t),{source:"local-fallback",logs:e,error:String(t.message||t)}}}async function dn({cloud:e=!0}={}){if(localStorage.removeItem(Le),e&&T())try{await Gt()}catch(t){console.warn("[firebase] clear",t)}K({type:"admin_clear_logs",message:"활동 로그 초기화"})}function un(e=Ke()){return JSON.stringify({exportedAt:new Date().toISOString(),deviceId:be(),firebase:T(),settings:F(),logs:e},null,2)}function fn(){const e=xe();return{configured:T(),projectId:fe.projectId||"",adminEmail:Oe,isCloudAdmin:Z(e),account:e||""}}const ze="schoolMetricsUniqueSubjects";function ht(){try{const e=localStorage.getItem(ze),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch{return[]}}function mn(e){localStorage.setItem(ze,JSON.stringify(e))}function bn(e){const t=le(),n=ht(),i=!n.includes(e);return i&&(n.push(e),mn(n)),{isNew:i,uniqueCount:n.length,justUnlocked:i&&n.length>=t}}function Je(){return ht().length}function he(){return Ae()?!0:Je()>=le()}function gn(){return Math.max(0,le()-Je())}function pn(){Ae()||localStorage.removeItem(ze)}function wt(){const e=le(),t=Je(),n=gn();return Ae()?"관리자 모드: 미니게임 자유 이용":he()?`서로 다른 과목 ${t}개 달성! 휴식 미니게임 이용 가능`:`서로 다른 과목 ${n}개 더 계산하면 해금 (${t}/${e})`}const qe=["희망은 좋은 것이다. 어쩌면 가장 좋은 것일지도. — 《쇼생크 탈출》","해야 한다, 아니면 안 된다. 그 중간은 없다. — 《스타워즈》","과거는 과거일 뿐이야. 배울 수만 있다면. — 《라이온 킹》","가장 어두운 시간은 해가 뜨기 직전이다. — 《어벤져스: 엔드게임》","세상에서 중요한 건 내가 누구냐가 아니라, 내가 뭘 하느냐다. — 《배트맨: 다크나이트》","우리에게 주어진 시간을 어떻게 쓸지만 결정하면 된다. — 《반지의 제왕》","아주 작은 존재도 미래를 바꿀 수 있다. — 《반지의 제왕》","자유는 아무 대가 없이 오지 않는다. — 《브레이브하트》","지금 이 순간을 잡아라. — 《데드 포엇 소사이어티》","무엇이든 할 수 있다. — 《쿵푸 판다》","그냥 계속 헤엄쳐. — 《니모를 찾아서》","모든 걸 시도해 봐. — 《주토피아》","두려움을 없애는 방법은 그것과 마주하는 것이다. — 《인사이드 아웃》","뜻이 있는 곳에 길이 있다. — 《아바타》","비가 그친 뒤에는 반드시 맑은 하늘이 온다. — 《날씨의 아이》","나는 이 세계를 이해할 수 없어. 그래도 계속한다. — 《록키》","시련이 없었다면 챔피언도 없다. — 《록키》","인생은 수레바퀴와 같아. 항상 앞으로 나아가야 한다. — 《니모를 찾아서》","이겨야 한다. 어떻게든. — 《친구》","꿈은 거짓말이 아니다. 반드시 이루어질 내일이다. — 《드림하이》","포기하면 그 순간 게임 끝이야, 인생도 마찬가지다. — 《슬램덩크》","죽을 때 후회 없는 인생을 살아라. — 《원피스》","약한 것은 죄가 아니다. 약한 채로 있으면 안 될 뿐. — 《귀멸의 칼날》","막을 때까지 싸워라. — 《진격의 거인》","노력은 배신하지 않는다. — 《하이큐!!》","패배는 패배하지 않는 것보다 낫다. — 《하이큐!!》","시선을 돌리지 마. 앞만 봐. — 《센과 치히로의 행방불명》","살아있는 한 힘을 내라. — 《하울의 움직이는 성》","바람이 분다. 견뎌야 한다. — 《바람의 나라》","상대는 나 자신이다. — 《초속 5센티미터》","포기하지 말 것. 내일이 있으니. — 《드래곤볼》","사람은 누구나 다시 태어날 수 있다. — 《바람의 나라》","아는 것이 힘이다. — 프랜시스 베이컨","천 리 길도 한 걸음부터. — 노자","배우고 또 배우면 어찌 기쁘지 아니하랴. — 공자","백번 듣는 것보다 한 번 보는 것이 낫다. — 공자","세 사람이 길을 가면 반드시 나의 스승이 있다. — 공자","하늘은 큰 뜻을 품은 자에게 먼저 고생을 시킨다. — 맹자","독서는 마음의 양식이다. — 키케로","하늘은 스스로 돕는 자를 돕는다. — 소포클레스","그대가 갈망하는 것을 따르라. — 랄프 왔도 에머슨","겁쟁이는 죽기 전에 여러 번 죽는다. 용감한 자는 한 번만 죽는다. — 셰익스피어","열정 없이는 위대한 것은 이루어지지 않는다. — 게오르크 빌헬름 프리드리히 헤겔","나는 나의 운명을 사랑한다. — 프리드리히 니체","오늘 할 일을 내일로 미루지 마라. — 벤자민 프랭클린","천재는 1%의 영감과 99%의 땀이다. — 토마스 에디슨","실패는 성공의 어머니이다. — 토마스 에디슨","시간은 금이다. — 벤자민 프랭클린","어리석은 자는 경험에서 아무것도 배우지 않는다. — 벤자민 프랭클린","실용적인 것이 가장 시적인 것이다. — 벤자민 프랭클린","깊은 생각 없는 독서는 낮잠과 같다. — 프랜시스 베이컨","인생은 속도가 아니라 방향이다. — 에이브러햄 링컨","성공은 최종적인 것이 아니며, 실패는 치명적인 것이 아니다. — 윈스턴 처칠","가장 위대한 영광은 넘어지지 않는 것이 아니라, 넘어질 때마다 일어서는 것이다. — 넬슨 만델라","용기는 두려움의 부재가 아니라, 두려움에도 행동하는 것이다. — 넬슨 만델라","네가 할 수 있다고 믿든 못 한다고 믿든, 네 말이 맞다. — 헨리 포드","성공의 비결은 시작하는 것이다. — 마크 트웨인","행운은 준비된 자에게 찾아온다. — 루이 파스퇴르","한계란 대부분 마음속에 있는 환상일 뿐이다. — 무하마드 알리","나는 세계 챔피언이다. 내가 그렇다고 말하기 전부터. — 무하마드 알리","항상 갈망하고, 우직하게 나아가라. — 스티브 잡스","당신의 시간은 제한되어 있다. 다른 사람의 인생을 살며 낭비하지 마라. — 스티브 잡스","오늘 나는 죽었다면 무엇을 후회하겠는가. — 스티브 잡스","죽고자 하면 살 것이요, 살고자 하면 죽을 것이니라. — 이순신","한 번도 실수한 적 없는 사람은 새로운 것을 시도한 적이 없는 사람이다. — 알버트 아인슈타인","네가 정말 소중히 여기는 것에 시간을 써라. — 《어린 왕자》","꽃을 단 한 송이라도 내가 직접 가꾸면, 내 세계에 엇비슷한 시간이 흐른다. — 《어린 왕자》","세상에서 가장 강한 사람은 스스로를 이기는 사람이다. — 무라카미 하루키","빛을 보고자 한다면 어둠을 견뎌야 한다. — 무라카미 하루키","사람은 마음먹은 것은 다 이룬다. — 《바보》","고통 없이는 얻는 것도 없다. — 라틴 격언","로마는 하루아침에 이루어지지 않았다. — 속담","연습이 완벽을 만든다. — 속담","배움에는 왕도가 없다. — 유클리드","작은 일에 충실하라. 그곳에 네 힘이 있다. — 루드야드 키플링","가장 큰 위험은 위험을 감수하지 않는 것이다. — 마크 주커버그","인생은 짧고, 예술은 길다. — 히포크라테스","삶을 살아가는 가장 좋은 복수는 성공하는 것이다. — 프랭크 시나트라","피할 수 없으면 즐겨라. — 로버트 엘리엇","포기하지 않는 한, 늦었다고 생각할 때가 가장 빠른 때다. — 속담","꾸준함은 재능을 이긴다. — 속담","반복은 지루하지만, 반복 없는 실력은 환상이다. — 속담","오늘의 노력이 내일의 실력이 된다. — 속담","지금이 가장 빠른 시작이다. — 속담","목표 없는 공부는 방향 잃은 배와 같다. — 속담","모르는 것을 아는 것이 배움의 시작이다. — 속담","실력은 하루아침에 생기지 않는다. — 속담","쉬는 것도 실력이다. 번아웃을 조심하자. — 속담","비교하지 말고, 어제의 나와 겨루자. — 속담","이해가 안 되면 다시 보면 된다. 반복이 답이다. — 속담","시험은 결과일 뿐, 과정이 실력이다. — 속담","1%씩 매일 오르면 37배가 된다. — 속담","모르는 건 부끄러운 게 아니다. 묻지 않는 게 문제다. — 속담","오답 노트 한 장이 교과서 열 페이지보다 강하다. — 속담","할 수 있다고 믿는 순간, 절반은 온 것이다. — 속담","오늘 공부한 만큼, 내일은 덜 불안하다. — 속담"],nt="schoolMetricsQuoteIndex";function hn(){let e=Number(localStorage.getItem(nt)||0);const t=qe[e%qe.length];return localStorage.setItem(nt,String((e+1)%qe.length)),t}const wn={1:{label:"1학년",note:"1학년은 2학기부터 내신 성적이 반영됩니다.",subjects:{국어:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"나만의 노트(나노)",weight:15,kind:"perf"}]}}},수학:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"기본도형 탐구 프로젝트",weight:20,kind:"perf"},{label:"평면·입체 도형 탐구",weight:20,kind:"perf"}]}}},사회:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"사회화 자서전 만들기",weight:20,kind:"perf"},{label:"모의 선거",weight:20,kind:"perf"}]}}},과학:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"실험 보고서 작성",weight:20,kind:"perf"},{label:"달의 위상 변화 관찰",weight:20,kind:"perf"}]}}},영어:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"희망 직업 소개",weight:20,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]}}},음악:{semesters:{2:{label:"2학기",items:[{label:"우쿨렐레 연주",weight:50,kind:"perf"},{label:"작곡가 탐구 활동",weight:50,kind:"perf"}]}}},미술:{semesters:{2:{label:"2학기",items:[{label:"스텐실",weight:50,kind:"perf"},{label:"문자도",weight:50,kind:"perf"}]}}},체육:{semesters:{2:{label:"2학기",items:[{label:"경기형 스포츠(축구)",weight:50,kind:"perf"},{label:"기록 도전형(달리기)",weight:50,kind:"perf"}]}}},정보:{semesters:{2:{label:"2학기",items:[{label:"AI 활용",weight:50,kind:"perf"},{label:"디지털 문화 표현",weight:50,kind:"perf"}]}}},"진로와 직업":{semesters:{2:{label:"2학기",items:[{label:"창업 프로젝트",weight:50,kind:"perf"},{label:"진로 디자인",weight:50,kind:"perf"}]}}},기술가정:{semesters:{2:{label:"2학기",items:[{label:"과학·미래기술 보고서",weight:35,kind:"perf"},{label:"에너지 신문 제작",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]}}}}},2:{label:"2학년",subjects:{국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"발표와 듣기",weight:15,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"복합양식 자료를 활용한 글 작성",weight:15,kind:"perf"}]}}},수학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"일차방정식·일차부등식",weight:20,kind:"perf"},{label:"연립일차방정식·일차함수",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"삼각형·사각형의 성질",weight:20,kind:"perf"},{label:"도형의 닮음·피타고라스",weight:20,kind:"perf"}]}}},역사:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"고대 문명 지도 만들기",weight:20,kind:"perf"},{label:"고대사 신문 만들기",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"서양 고대 문화유산 소개",weight:20,kind:"perf"},{label:"유럽 여행 소개 글쓰기",weight:20,kind:"perf"}]}}},과학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"밀도 측정",weight:10,kind:"perf"},{label:"지권 층상구조 모형 제작",weight:10,kind:"perf"},{label:"주기율표 탐구",weight:10,kind:"perf"},{label:"광합성 탐구",weight:10,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"소리의 성질 탐구",weight:10,kind:"perf"},{label:"인체 프로젝트",weight:20,kind:"perf"},{label:"전류,전압,저항 사이의 관계 탐구",weight:10,kind:"perf"}]}}},영어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"},{label:"발명품 소개",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"지역 축제 홍보",weight:20,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]}}},음악:{semesters:{1:{label:"1학기",items:[{label:"우쿨렐레 연주",weight:50,kind:"perf"},{label:"텅드럼 연주",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"펜비트 연주",weight:50,kind:"perf"},{label:"리코더 연주",weight:50,kind:"perf"}]}}},미술:{semesters:{1:{label:"1학기",items:[{label:"세밀화",weight:50,kind:"perf"},{label:"음식 모형 만들기",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"점묘화",weight:50,kind:"perf"},{label:"서양미술사 보고서",weight:50,kind:"perf"}]}}},체육:{semesters:{1:{label:"1학기",items:[{label:"경기형 스포츠(킨볼)",weight:60,kind:"perf"},{label:"도전형(제자리멀리뛰기)",weight:40,kind:"perf"}]},2:{label:"2학기",items:[{label:"경기형 스포츠(배드민턴)",weight:60,kind:"perf"},{label:"건강관리(줄넘기)",weight:40,kind:"perf"}]}}},도덕:{semesters:{1:{label:"1학기",items:[{label:"도덕적 인물 지폐 제작",weight:50,kind:"perf"},{label:"우정 네 컷 만들기",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"정보 카드 뉴스 제작",weight:50,kind:"perf"},{label:"인권 모니터링 제안서",weight:50,kind:"perf"}]}}},중국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 기말고사",weight:40,kind:"exam"},{label:"한어병음 작성",weight:30,kind:"perf"},{label:"중국어 말하기",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 기말고사",weight:40,kind:"exam"},{label:"하루 일과표 만들기",weight:30,kind:"perf"},{label:"중국어 말하기",weight:30,kind:"perf"}]}}},"금융과 미래":{semesters:{2:{label:"2학기",items:[{label:"투자 성향 검사",weight:50,kind:"perf"},{label:"투자 포트폴리오 구성",weight:50,kind:"perf"}]}}},기술가정:{semesters:{1:{label:"1학기",items:[{label:"효과적 의사소통 프로젝트",weight:35,kind:"perf"},{label:"제조 기술 프로젝트",weight:35,kind:"perf"},{label:"자기주도노트 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"균형 잡힌 식단 계획",weight:35,kind:"perf"},{label:"친환경 의복 생활",weight:35,kind:"perf"},{label:"자기주도노트 작성",weight:30,kind:"perf"}]}}}}},3:{label:"3학년",note:"3학년 2학기에는 기말고사가 없습니다.",subjects:{국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"논설문 쓰기",weight:15,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"한 학기 한 권 읽기",weight:30,kind:"perf"},{label:"문장의 짜임 고려해서 자신감 있게 발표",weight:30,kind:"perf"}]}}},사회:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"국가 기관 탐구로 권력 분립 이해",weight:20,kind:"perf"},{label:"국민 경제 지표와 국제 거래 이해",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"인구·도시 문제 탐구",weight:30,kind:"perf"},{label:"농업 산업화·세계화",weight:30,kind:"perf"}]}}},역사:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"고려 정치 변천",weight:20,kind:"perf"},{label:"고려의 문화 및 조선 통치 체제 탐구",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"조선 왕 가상 인터뷰",weight:30,kind:"perf"},{label:"양 난의 이해 및 영정조 정책 탐구",weight:30,kind:"perf"}]}}},도덕:{semesters:{1:{label:"1학기",items:[{label:"1학기 기말고사",weight:40,kind:"exam"},{label:"폭력 예방 논술문 작성",weight:30,kind:"perf"},{label:"사회 정의 실현 논술문 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"환경 보호 제안서",weight:30,kind:"perf"},{label:"실패 이력서 소개",weight:30,kind:"perf"}]}}},수학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"인수분해를 이용한 수의 성질 탐구",weight:20,kind:"perf"},{label:"이차함수 그래프",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"삼각비 개념 보고서",weight:30,kind:"perf"},{label:"원의 성질 문제해결",weight:30,kind:"perf"}]}}},과학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"기상 현상 실험",weight:20,kind:"perf"},{label:"화학 반응의 규칙 탐구",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"세포분열 관찰 실험",weight:30,kind:"perf"},{label:"물체 운동 분석",weight:30,kind:"perf"}]}}},영어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:15,kind:"perf"},{label:"급식 메뉴 프로젝트",weight:15,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"영어 듣기",weight:20,kind:"perf"},{label:"영어독서",weight:20,kind:"perf"},{label:"통계 자료 활용 프로젝트",weight:20,kind:"perf"}]}}},음악:{semesters:{1:{label:"1학기",items:[{label:"칼림바 연주",weight:50,kind:"perf"},{label:"전자드럼 연주",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"노래 부르기",weight:50,kind:"perf"},{label:"디자인사 연구보고서",weight:50,kind:"perf"}]}}},미술:{semesters:{1:{label:"1학기",items:[{label:"포트레이트 드로잉",weight:50,kind:"perf"},{label:"비주얼 리터러시",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"오마주",weight:50,kind:"perf"},{label:"디자인 조사 보고서",weight:50,kind:"perf"}]}}},체육:{semesters:{1:{label:"1학기",items:[{label:"전통 표현(티니클링)",weight:40,kind:"perf"},{label:"플로어볼",weight:60,kind:"perf"}]},2:{label:"2학기",items:[{label:"건강·체력 관리(타바타)",weight:40,kind:"perf"},{label:"배구",weight:60,kind:"perf"}]}}},기술가정:{semesters:{1:{label:"1학기",items:[{label:"생애 설계",weight:35,kind:"perf"},{label:"수송기술 제작",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"스마트폰 앱 만들기",weight:35,kind:"perf"},{label:"적정 기술 사례 조사",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]}}}}}};function me(e){return wn[e]??null}function kn(e){const t=me(e);return t?Object.keys(t.subjects):[]}function Ye(e,t){var n;return((n=me(e))==null?void 0:n.subjects[t])??null}function kt(e,t){const n=Ye(e,t);return n?Object.keys(n.semesters).map(Number).sort((i,a)=>i-a):[]}function yn(e,t,n){var a;const i=Ye(e,t);return((a=i==null?void 0:i.semesters[n])==null?void 0:a.items)??[]}function at(e,t,n){var a;const i=Ye(e,t);return((a=i==null?void 0:i.semesters[n])==null?void 0:a.label)??`${n}학기`}function vn(e,t,n,i){return`${e}-${t}-${n}-${i}`}function Sn(e,t,n){return yn(e,t,n).map((a,r)=>({key:vn(e,t,n,r),subject:t,semester:n,label:a.label,weight:a.weight,kind:a.kind}))}function yt(e,t){let n=0,i=0;for(const a of e){const r=t[a.key];if(r===""||r===null||r===void 0)continue;const l=Number(r);Number.isNaN(l)||(n+=a.weight,i+=l*a.weight)}return n===0?null:i/n}function $n(e,t){const n={},i=[];for(const r of e){const l=t[r.key];if(l===""||l===null||l===void 0){i.push(r);continue}const c=Number(l);if(Number.isNaN(c)){i.push(r);continue}n[r.key]=c}const a={...n};for(const r of i)a[r.key]=100;return{average:yt(e,a),remainingCount:i.length}}const Ln=["음악","미술","체육"],En=[{letter:"A",min:90},{letter:"B",min:80},{letter:"C",min:70},{letter:"D",min:60},{letter:"E",min:0}],In=[{letter:"A",min:80},{letter:"B",min:60},{letter:"C",min:0}];function vt(e){return e.map((t,n,i)=>{const a=i[n-1],r=t.min===0?`${t.letter} (${(a==null?void 0:a.min)??60}점 미만)`:`${t.letter} (${t.min}점 이상)`;return{letter:t.letter,min:Number(t.min)||0,label:r}})}function St(){const e=F().standardScale;return vt(e!=null&&e.length?e:En)}function $t(){const e=F().artsScale;return vt(e!=null&&e.length?e:In)}function Xe(e){return Ln.includes(e)}function Ce(e){return e==null||Number.isNaN(e)?null:Math.round(e)}function Qe(e){return Xe(e)?$t():St()}function Re(e,t){const n=Ce(e);if(n===null)return"-";const i=Qe(t);for(const a of i)if(n>=a.min)return a.letter;return i[i.length-1].letter}function ue(e){return`${e}등급`}const it=["조금만 더 올리면 된다. 할 수 있어!","상위 등급이 코앞이다. 끝까지 달려보자!","지금의 노력이 등급을 바꾼다. 포기하지 마!","아직 끝나지 않았어. 충분히 올릴 수 있어!","남은 항목이 기회다. 집중해서 마무리하자!","한 걸음만 더 가면 등급이 달라진다. 파이팅!","가능성은 아직 살아 있다. 믿고 가보자!","오늘의 한 문제가 등급을 바꿀 수도 있어!","목표 등급까지 거의 다 왔다. 조금만 더!","실력은 거짓말하지 않는다. 계속 밀어붙여!"];function Mn(e){return e.projection.remainingCount>0&&e.letter!==e.projLetter}function xn(){const e=Math.floor(Math.random()*it.length);return it[e]}function Lt(e=null){const t=e?Xe(e):!1,n=e?t?`${e}은(는) 예체능 과목 (A·B·C)`:`${e}은(는) 일반 과목 (A·B·C·D·E)`:"과목 유형에 따라 등급 기준이 다릅니다.",i=St(),a=$t();return`
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
  `}function Et(e){const t=e.querySelector("[data-toggle='criteria']"),n=e.querySelector("#criteria-panel");!t||!n||t.addEventListener("click",()=>{const i=n.classList.toggle("hidden");t.setAttribute("aria-expanded",String(!i)),t.textContent=i?"▶ 등급 기준표 확인":"▼ 등급 기준표 닫기"})}function Nn(e,t,n,i){if(n===null)return null;const a=Ce(n),r=Re(a,i),l=Qe(i),c=l.findIndex($=>$.letter===r);if(c<=0)return{targetLetter:r,needed:null,message:"이미 최고 등급입니다."};const b=l[c-1],f=b.min,v=e.filter($=>{const k=t[$.key];return k===""||k===null||k===void 0||Number.isNaN(Number(k))});if(v.length===0)return{targetLetter:b.letter,needed:null,message:"모든 항목이 입력되었습니다."};let u=0,o=0,m=0;for(const $ of e){const k=t[$.key];if(k===""||k===null||k===void 0||Number.isNaN(Number(k))){m+=$.weight;continue}u+=$.weight,o+=Number(k)*$.weight}if(m===0)return null;const s=u+m,w=(f*s-o)/m,S=Math.max(0,Math.min(100,w));return{targetLetter:b.letter,needed:Math.ceil(S*10)/10,remainingCount:v.length,message:null}}function An(e,t,n,i){const r=Qe(i).find(s=>s.letter===n);if(!r)return null;let l=0,c=0,b=0,f=0;for(const s of e){const w=t[s.key];if(w===""||w===null||w===void 0||Number.isNaN(Number(w))){b+=s.weight,f+=1;continue}c+=s.weight,l+=Number(w)*s.weight}if(b===0)return null;const v=c+b,o=((r.min-.5)*v-l)/b;return{minScore:Math.ceil(Math.max(0,Math.min(100,o))*10)/10,remainingCount:f}}function Cn(e){const t=Ce(e);return{raw:e,rounded:t,display:`${t}점`}}function Pn(e,t,n){const i=yt(e,t);if(i===null)return null;const{rounded:a}=Cn(i),r=Re(a,n),l=$n(e,t),c=Ce(l.average),b=Nn(e,t,i,n),f=An(e,t,r,n);return{average:i,rounded:a,letter:r,projection:l,projRounded:c,projLetter:Re(c,n),needed:b,confirmMin:f}}function ee(e="globe"){return`
    <svg class="${e}" viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="48" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.35"/>
      <ellipse cx="60" cy="60" rx="48" ry="16" fill="none" stroke="currentColor" stroke-width="1"/>
      <ellipse cx="60" cy="60" rx="16" ry="48" fill="none" stroke="currentColor" stroke-width="1"/>
      <ellipse cx="60" cy="60" rx="34" ry="48" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.7"/>
      <line x1="12" y1="60" x2="108" y2="60" stroke="currentColor" stroke-width="0.8"/>
      <line x1="60" y1="12" x2="60" y2="108" stroke="currentColor" stroke-width="0.8"/>
    </svg>
  `}function qn(){return'<img class="title-bg" src="./title-bg.png" alt="" aria-hidden="true" />'}function Tn(){return'<img class="go-bg" src="./go-bg.png" alt="" aria-hidden="true" />'}function It(e){return`grade-theme-${e}`}function U(e,t=""){return`<div class="phone-screen ${t}">${e}</div>`}function oe(e){return`<p class="screen-footer">${e}</p>`}function te(e="main"){return`<button type="button" class="link-btn" data-action="${e}">메인화면으로</button>`}const Mt=[20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5],ve=8;function Dn(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function Bn(e,t,n){var i,a;(i=e.querySelector('[data-nav="back"]'))==null||i.addEventListener("click",t),(a=e.querySelector('[data-nav="main"]'))==null||a.addEventListener("click",n)}function Rn(e,t){const n=Math.hypot(e,t);if(n>1)return{points:0,label:"보드 밖"};if(n<=.07)return{points:50,label:"더블 불 · 50"};if(n<=.14)return{points:25,label:"싱글 불 · 25"};let i=Math.atan2(e,-t);i<0&&(i+=Math.PI*2);const a=Math.floor((i+Math.PI/20)%(Math.PI*2)/(Math.PI/10)),r=Mt[a];return n>=.9?{points:r*2,label:`더블 ${r} · ${r*2}`}:n>=.52&&n<=.62?{points:r*3,label:`트리플 ${r} · ${r*3}`}:{points:r,label:`싱글 ${r} · ${r}`}}function Te(e,t,n){const i=t/2,a=t/2,r=t*.42;e.clearRect(0,0,t,t),e.fillStyle="#1a1a1a",e.beginPath(),e.arc(i,a,r*1.08,0,Math.PI*2),e.fill();for(let l=0;l<20;l++){const c=-Math.PI/2-Math.PI/20+l*Math.PI/10,b=c+Math.PI/10,f=l%2===0;e.beginPath(),e.moveTo(i,a),e.arc(i,a,r*.9,c,b),e.closePath(),e.fillStyle=f?"#111":"#ece6d8",e.fill(),e.beginPath(),e.moveTo(i,a),e.arc(i,a,r*.52,c,b),e.closePath(),e.fillStyle=f?"#1c1c1c":"#f5f0e6",e.fill(),e.beginPath(),e.arc(i,a,r,c,b),e.arc(i,a,r*.9,b,c,!0),e.closePath(),e.fillStyle=l%2===0?"#c4122f":"#0a7a3c",e.fill(),e.beginPath(),e.arc(i,a,r*.62,c,b),e.arc(i,a,r*.52,b,c,!0),e.closePath(),e.fillStyle=l%2===0?"#c4122f":"#0a7a3c",e.fill()}e.strokeStyle="rgba(180,180,180,0.55)",e.lineWidth=1;for(let l=0;l<20;l++){const c=-Math.PI/2-Math.PI/20+l*Math.PI/10;e.beginPath(),e.moveTo(i,a),e.lineTo(i+Math.cos(c)*r,a+Math.sin(c)*r),e.stroke()}[.9,.62,.52,.14,.07].forEach(l=>{e.beginPath(),e.arc(i,a,r*l,0,Math.PI*2),e.stroke()}),e.beginPath(),e.arc(i,a,r*.14,0,Math.PI*2),e.fillStyle="#0a7a3c",e.fill(),e.beginPath(),e.arc(i,a,r*.07,0,Math.PI*2),e.fillStyle="#c4122f",e.fill(),e.fillStyle="#fff",e.font=`bold ${Math.max(10,t*.045)}px sans-serif`,e.textAlign="center",e.textBaseline="middle";for(let l=0;l<20;l++){const c=-Math.PI/2+l*Math.PI/10,b=i+Math.cos(c)*r*1.14,f=a+Math.sin(c)*r*1.14;e.fillText(String(Mt[l]),b,f)}for(const l of n)e.beginPath(),e.arc(i+l.nx*r,a+l.ny*r,4,0,Math.PI*2),e.fillStyle="#fff700",e.fill(),e.strokeStyle="#000",e.stroke()}function On(e,{onBack:t,onMain:n}){let i=0,a=ve,r="vertical",l=.5,c=.5,b=1,f=1,v=0,u=0;const o=[],m=1.35;e.innerHTML=`
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
      ${Dn()}
    </div>
  `;const s=e.querySelector("#dart-canvas"),w=s.getContext("2d"),S=e.querySelector("#dart-score"),$=e.querySelector("#dart-throws"),k=e.querySelector("#dart-feedback"),I=e.querySelector("#dart-stop"),p=e.querySelector("#dart-retry"),N=e.querySelector("#aim-v"),C=e.querySelector("#aim-h"),D=e.querySelector(".aim-bar-v"),j=e.querySelector(".aim-bar-h");function B(){const d=Math.min(300,e.clientWidth||300);s.width=d,s.height=d,Te(w,d,o)}function W(){N.style.top=`${l*100}%`,C.style.left=`${c*100}%`,D.classList.toggle("active",r==="vertical"),j.classList.toggle("active",r==="horizontal")}function ne(d){u||(u=d);const h=Math.min(.05,(d-u)/1e3);u=d,r==="vertical"?(l+=b*m*h,l>=1&&(l=1,b=-1),l<=0&&(l=0,b=1)):r==="horizontal"&&(c+=f*m*h,c>=1&&(c=1,f=-1),c<=0&&(c=0,f=1)),W(),v=requestAnimationFrame(ne)}function ae(){const d=(l-.5)*2.05,h=(c-.5)*2.05,L=Rn(h,d);if(o.push({nx:h,ny:d}),i+=L.points,a-=1,S.textContent=`점수: ${i}`,$.textContent=`남은 횟수: ${a}`,Te(w,s.width,o),k.textContent=L.label,a<=0){r="done",I.classList.add("hidden"),p.classList.remove("hidden"),k.textContent=`게임 종료! 최종 ${i}점`;return}r="vertical",l=Math.random(),c=Math.random(),k.textContent="세로 바를 가운데에 맞춰 멈추세요!"}function y(d){var h;if((h=d==null?void 0:d.preventDefault)==null||h.call(d),r==="vertical"){r="horizontal",k.textContent="가로 바를 가운데에 맞춰 멈추세요!";return}r==="horizontal"&&(r="result",ae())}function x(d){(d.code==="Space"||d.key===" ")&&(d.preventDefault(),y(d))}function P(){i=0,a=ve,r="vertical",o.length=0,l=.2,c=.2,S.textContent="점수: 0",$.textContent=`남은 횟수: ${ve}`,k.textContent="세로 바를 가운데에 맞춰 멈추세요!",I.classList.remove("hidden"),p.classList.add("hidden"),Te(w,s.width,o)}return B(),W(),v=requestAnimationFrame(ne),I.addEventListener("click",y),I.addEventListener("touchstart",y,{passive:!1}),p.addEventListener("click",P),window.addEventListener("keydown",x),window.addEventListener("resize",B),Bn(e,t,n),()=>{cancelAnimationFrame(v),window.removeEventListener("keydown",x),window.removeEventListener("resize",B)}}const X=12;function _n(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function Un(e,t,n){var i,a;(i=e.querySelector('[data-nav="back"]'))==null||i.addEventListener("click",t),(a=e.querySelector('[data-nav="main"]'))==null||a.addEventListener("click",n)}function jn(e,{onBack:t,onMain:n}){let i=0,a=0,r=!1,l=!0,c=.08,b=.55,f=0,v=0,u=0,o=!1;e.innerHTML=`
    <div class="game-panel">
      <h2 class="game-title">크리켓 게임</h2>
      <p class="game-desc">공이 타격존(노란 선)에 올 때 탭/스페이스로 스윙!</p>
      <div class="cricket-stats">
        <span id="cricket-runs">득점: 0</span>
        <span id="cricket-balls">볼: 0 / ${X}</span>
      </div>
      <canvas id="cricket-canvas" class="game-canvas cricket-canvas" width="320" height="420"></canvas>
      <button type="button" class="btn-go" id="cricket-swing">SWING!</button>
      <button type="button" class="btn-secondary hidden" id="cricket-retry">다시하기</button>
      <p class="game-feedback" id="cricket-feedback">공이 다가옵니다…</p>
      ${_n()}
    </div>
  `;const m=e.querySelector("#cricket-canvas"),s=m.getContext("2d"),w=e.querySelector("#cricket-runs"),S=e.querySelector("#cricket-balls"),$=e.querySelector("#cricket-feedback"),k=e.querySelector("#cricket-swing"),I=e.querySelector("#cricket-retry"),p=.72,N=.09;function C(){const y=Math.min(320,Math.max(260,e.clientWidth-16||300));m.width=y,m.height=Math.round(y*1.3)}function D(){const y=m.width,x=m.height;s.clearRect(0,0,y,x),s.fillStyle="#6ec8ff",s.fillRect(0,0,y,x*.22),s.fillStyle="#3d8c3a",s.fillRect(0,x*.18,y,x*.12);for(let A=0;A<18;A++)s.fillStyle=`hsl(${A*47%360} 70% 45%)`,s.beginPath(),s.arc(10+A*(y/17),x*.22,6,0,Math.PI*2),s.fill();s.fillStyle="#4caf50",s.fillRect(0,x*.28,y,x*.72);const P=y*.28,d=(y-P)/2,h=x*.3,L=x*.58;s.fillStyle="#c4a574",s.beginPath(),s.moveTo(d+P*.15,h),s.lineTo(d+P*.85,h),s.lineTo(d+P,h+L),s.lineTo(d,h+L),s.closePath(),s.fill();const E=h+L*p;if(s.strokeStyle="#fff41a",s.lineWidth=3,s.setLineDash([6,4]),s.beginPath(),s.moveTo(d-8,E),s.lineTo(d+P+8,E),s.stroke(),s.setLineDash([]),s.fillStyle="#8d6e63",s.beginPath(),s.ellipse(y/2,h+18,10,14,0,0,Math.PI*2),s.fill(),s.fillStyle="#66bb6a",s.beginPath(),s.ellipse(y/2,h+L-10,16,22,0,0,Math.PI*2),s.fill(),s.save(),s.translate(y/2+14,h+L-18),s.rotate(f>0?-.9:-.2),s.fillStyle="#f5f5f5",s.fillRect(-4,-28,8,36),s.restore(),!l&&!o){const A=h+L*c,q=y/2+Math.sin(c*6)*4,Pe=7+c*4;s.beginPath(),s.arc(q,A,Pe,0,Math.PI*2),s.fillStyle="#ef5350",s.fill(),s.strokeStyle="#fff",s.lineWidth=1.5,s.stroke()}f>0&&(s.fillStyle="rgba(255,244,26,0.15)",s.fillRect(0,E-20,y,40))}function j(){if(a>=X){o=!0,k.disabled=!0,k.classList.add("hidden"),I.classList.remove("hidden"),$.textContent=`경기 종료! 총 ${i}점`;return}l=!1,r=!1,c=.05,b=.48+Math.random()*.35,$.textContent="타이밍에 맞춰 스윙!"}function B(y){var h;if((h=y==null?void 0:y.preventDefault)==null||h.call(y),o||r||l)return;r=!0,f=.25,a+=1,S.textContent=`볼: ${a} / ${X}`;const x=Math.abs(c-p);let P=0,d="헛스윙!";x<=N*.25?(P=6,d="식스! +6"):x<=N*.5?(P=4,d="포! +4"):x<=N*.75?(P=2,d="투런! +2"):x<=N&&(P=1,d="싱글! +1"),i+=P,w.textContent=`득점: ${i}`,$.textContent=d,l=!0,setTimeout(()=>{o||j(),a>=X&&(o=!0,k.disabled=!0,k.classList.add("hidden"),I.classList.remove("hidden"),$.textContent=`경기 종료! 총 ${i}점`)},650)}function W(y){u||(u=y);const x=Math.min(.05,(y-u)/1e3);u=y,!l&&!o&&(c+=b*x,c>1.05&&(l=!0,r=!0,a+=1,S.textContent=`볼: ${a} / ${X}`,$.textContent="놓침!",setTimeout(()=>{r=!1,a>=X?(o=!0,k.disabled=!0,k.classList.add("hidden"),I.classList.remove("hidden"),$.textContent=`경기 종료! 총 ${i}점`):j()},500))),f>0&&(f-=x),D(),v=requestAnimationFrame(W)}function ne(){i=0,a=0,o=!1,r=!1,f=0,w.textContent="득점: 0",S.textContent=`볼: 0 / ${X}`,k.disabled=!1,k.classList.remove("hidden"),I.classList.add("hidden"),j()}function ae(y){(y.code==="Space"||y.key===" ")&&(y.preventDefault(),B(y))}return C(),j(),v=requestAnimationFrame(W),k.addEventListener("click",B),k.addEventListener("touchstart",B,{passive:!1}),m.addEventListener("pointerdown",B),I.addEventListener("click",ne),window.addEventListener("keydown",ae),window.addEventListener("resize",C),Un(e,t,n),()=>{cancelAnimationFrame(v),window.removeEventListener("keydown",ae),window.removeEventListener("resize",C)}}function Hn(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function Fn(e,t,n){var i,a;(i=e.querySelector('[data-nav="back"]'))==null||i.addEventListener("click",t),(a=e.querySelector('[data-nav="main"]'))==null||a.addEventListener("click",n)}const Gn=["#42a5f5","#ef5350","#ffee58","#66bb6a"],Wn=4,De=7;function Vn(e,{onBack:t,onMain:n}){let i=0,a=3,r=!1,l=0,c=0;const b={left:!1,right:!1};let f=320,v=420,u={x:0,y:0,w:70,h:12},o={x:0,y:0,r:6,vx:0,vy:0},m=[];e.innerHTML=`
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
      ${Hn()}
    </div>
  `;const s=e.querySelector("#bo-canvas"),w=s.getContext("2d"),S=e.querySelector("#bo-lives"),$=e.querySelector("#bo-score"),k=e.querySelector("#bo-feedback"),I=e.querySelector("#bo-start");function p(){f=Math.min(320,Math.max(260,e.clientWidth-16||300)),v=Math.round(f*1.3),s.width=f,s.height=v,u.y=v-36,u.w=f*.22}function N(){m=[];const d=4,h=56,L=(f-d*(De+1))/De,E=16;for(let A=0;A<Wn;A++)for(let q=0;q<De;q++)m.push({x:d+q*(L+d),y:h+A*(E+d),w:L,h:E,color:Gn[A],alive:!0})}function C(){u.x=(f-u.w)/2,o.x=f/2,o.y=u.y-20;const d=-Math.PI/3+Math.random()*(Math.PI/3),h=Math.min(f,v)*1.05;o.vx=Math.sin(d)*h,o.vy=-Math.abs(Math.cos(d)*h)}function D(){S.textContent=`생명: ${"●".repeat(a)}${"○".repeat(3-a)}`,$.textContent=`점수: ${String(i).padStart(5,"0")}`}function j(){w.fillStyle="#1a1030",w.fillRect(0,0,f,v);for(const d of m)d.alive&&(w.fillStyle=d.color,B(w,d.x,d.y,d.w,d.h,4),w.fill());w.fillStyle="#fff",B(w,u.x,u.y,u.w,u.h,6),w.fill(),w.beginPath(),w.arc(o.x,o.y,o.r,0,Math.PI*2),w.fillStyle="#fff",w.fill()}function B(d,h,L,E,A,q){d.beginPath(),d.moveTo(h+q,L),d.arcTo(h+E,L,h+E,L+A,q),d.arcTo(h+E,L+A,h,L+A,q),d.arcTo(h,L+A,h,L,q),d.arcTo(h,L,h+E,L,q),d.closePath()}function W(d){c||(c=d);const h=Math.min(.033,(d-c)/1e3);if(c=d,r){const L=f*1.6*h;if(b.left&&(u.x-=L),b.right&&(u.x+=L),u.x=Math.max(0,Math.min(f-u.w,u.x)),o.x+=o.vx*h,o.y+=o.vy*h,o.x<o.r&&(o.x=o.r,o.vx*=-1),o.x>f-o.r&&(o.x=f-o.r,o.vx*=-1),o.y<o.r&&(o.y=o.r,o.vy*=-1),o.vy>0&&o.y+o.r>=u.y&&o.y-o.r<=u.y+u.h&&o.x>=u.x&&o.x<=u.x+u.w){o.y=u.y-o.r;const E=(o.x-(u.x+u.w/2))/(u.w/2),A=Math.hypot(o.vx,o.vy)*1.015,q=E*1.1;o.vx=Math.sin(q)*A,o.vy=-Math.abs(Math.cos(q)*A)}for(const E of m)if(E.alive&&o.x+o.r>E.x&&o.x-o.r<E.x+E.w&&o.y+o.r>E.y&&o.y-o.r<E.y+E.h){E.alive=!1,i+=10,D();const A=o.x+o.r-E.x,q=E.x+E.w-(o.x-o.r),Pe=o.y+o.r-E.y,xt=E.y+E.h-(o.y-o.r),Nt=Math.min(A,q),At=Math.min(Pe,xt);Nt<At?o.vx*=-1:o.vy*=-1;break}m.every(E=>!E.alive)&&(r=!1,k.textContent=`클리어! 점수 ${i}`),o.y>v+20&&(a-=1,D(),a<=0?(r=!1,k.textContent=`게임 오버 · ${i}점`):(C(),k.textContent="생명 -1! 계속…"))}j(),l=requestAnimationFrame(W)}function ne(){i=0,a=3,r=!0,N(),C(),D(),k.textContent="화이팅!"}function ae(d){const h=s.getBoundingClientRect(),L=(d-h.left)/h.width*f;u.x=Math.max(0,Math.min(f-u.w,L-u.w/2))}function y(d){var L;d.preventDefault();const h=((L=d.touches)==null?void 0:L[0])||d;ae(h.clientX)}function x(d){(d.key==="ArrowLeft"||d.key==="a"||d.key==="A")&&(b.left=!0),(d.key==="ArrowRight"||d.key==="d"||d.key==="D")&&(b.right=!0)}function P(d){(d.key==="ArrowLeft"||d.key==="a"||d.key==="A")&&(b.left=!1),(d.key==="ArrowRight"||d.key==="d"||d.key==="D")&&(b.right=!1)}return p(),N(),C(),D(),j(),l=requestAnimationFrame(W),I.addEventListener("click",ne),s.addEventListener("pointerdown",y),s.addEventListener("pointermove",d=>{(d.buttons||d.pressure>0)&&y(d)}),s.addEventListener("touchstart",y,{passive:!1}),s.addEventListener("touchmove",y,{passive:!1}),window.addEventListener("keydown",x),window.addEventListener("keyup",P),window.addEventListener("resize",p),Fn(e,t,n),()=>{cancelAnimationFrame(l),window.removeEventListener("keydown",x),window.removeEventListener("keyup",P),window.removeEventListener("resize",p)}}const g=document.getElementById("app");let R=null,Q=null,H=null,re=null,rt=!1;const st=new Set(["rest","game-dart","game-cricket","game-breakout","admin"]),Kn={login:Yn,main:Xn,help:Zn,profile:Qn,grade:na,subject:aa,calculator:ia,rest:ra,admin:ea,"game-dart":()=>Be("dart"),"game-cricket":()=>Be("cricket"),"game-breakout":()=>Be("breakout")};zn();function zn(){sn().then(()=>pt()).finally(()=>{M(bt()?"main":"login")})}function M(e,t={}){re&&(re(),re=null),rt&&!st.has(e)&&pn(),e!=="login"&&!bt()&&(e="login",t={});const n=Kn[e];n&&(g.innerHTML="",n(t),rt=st.has(e),window.scrollTo(0,0))}function Y(e){e.querySelectorAll("[data-action]").forEach(t=>{t.addEventListener("click",()=>Jn(t.dataset.action))})}function Jn(e){if(e==="main"){R=null,Q=null,H=null,M("main");return}if(e==="grade"){Q=null,H=null,M("grade");return}if(e==="help"&&M("help"),e==="profile"&&M("profile"),e==="logout"){Ne().finally(()=>M("login"));return}if(e==="rest"&&M("rest"),e==="admin"){pe()&&M("admin");return}if(e==="subject"&&M("subject",{grade:R}),e==="game-dart"&&M("game-dart"),e==="game-cricket"&&M("game-cricket"),e==="game-breakout"&&M("game-breakout"),e.startsWith("pick-grade-")){R=Number(e.replace("pick-grade-","")),Q=null,H=null,M("subject",{grade:R});return}if(e.startsWith("pick-subject-")){const t=decodeURIComponent(e.replace("pick-subject-",""));Q=t;const n=kt(R,t);H=(n.length===1,n[0]),M("calculator",{grade:R,subject:t,semester:H});return}e.startsWith("pick-semester-")&&(H=Number(e.replace("pick-semester-","")),M("calculator",{grade:R,subject:Q,semester:H}))}function Yn(){let e="login";const t=()=>{var $,k,I;const n=e==="register";g.innerHTML=U(`
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
          ${n?"":'<button type="button" class="link-btn" id="login-reset">비밀번호 찾기</button>'}
          <p class="muted login-hint">예: 20261111@haeyeon.ms.kr<br/>가입 후 학교 메일로 온 인증 링크를 눌러야 로그인됩니다.<br/>인증 메일이 스팸함에 있을 수 있으니 스팸함도 확인해 주세요.</p>
          <p class="warn hidden" id="login-error"></p>
          <p class="ok-msg hidden" id="login-ok"></p>
          <div class="login-verify-actions hidden" id="verify-actions">
            <button type="button" class="link-btn" id="verify-refresh">인증 완료했어요</button>
            <button type="button" class="link-btn" id="verify-resend">인증 메일 다시 받기</button>
          </div>
        </div>
        ${oe(O.footer)}
      </div>
    `);const i=g.querySelector("#login-error"),a=g.querySelector("#login-ok"),r=g.querySelector("#verify-actions"),l=g.querySelector("#login-email"),c=g.querySelector("#login-name"),b=g.querySelector("#login-password"),f=g.querySelector("#login-password2"),v=g.querySelector("#login-submit"),u=p=>{a.classList.add("hidden"),i.textContent=p,i.classList.remove("hidden")},o=p=>{i.classList.add("hidden"),a.textContent=p,a.classList.remove("hidden")},m=p=>{v.disabled=p};g.querySelectorAll("[data-mode]").forEach(p=>{p.addEventListener("click",()=>{e=p.dataset.mode,t()})});const s=p=>{const N=He(p);K({type:"user_login",message:`로그인: ${N}`,account:p.account,displayName:p.displayName||"",studentId:p.studentId||""}),pe()&&K({type:"admin_login",message:"관리자 계정 로그인 — 관리자 모드 자동 활성화",account:p.account}),pt().finally(()=>M("main"))},w=p=>{o(p.error),r.classList.remove("hidden")},S=async()=>{i.classList.add("hidden"),a.classList.add("hidden"),r.classList.add("hidden"),m(!0);try{if(e==="register"){if(b.value!==((f==null?void 0:f.value)||"")){u("비밀번호 확인이 일치하지 않습니다.");return}const N=await Zt(l.value,b.value,(c==null?void 0:c.value)||"");if(N.needVerify){w(N);return}if(!N.ok){u(N.error);return}s(N.user);return}const p=await en(l.value,b.value);if(p.needVerify){w(p);return}if(!p.ok){u(p.error);return}s(p.user)}finally{m(!1)}};v.addEventListener("click",S),[l,c,b,f].filter(Boolean).forEach(p=>{p.addEventListener("keydown",N=>{N.key==="Enter"&&S()})}),($=g.querySelector("#verify-refresh"))==null||$.addEventListener("click",async()=>{m(!0);const p=await an();if(m(!1),p.needVerify){w(p);return}if(!p.ok){u(p.error);return}s(p.user)}),(k=g.querySelector("#verify-resend"))==null||k.addEventListener("click",async()=>{const p=await rn();if(!p.ok){u(p.error);return}o(p.message),r.classList.remove("hidden")}),(I=g.querySelector("#login-reset"))==null||I.addEventListener("click",async()=>{i.classList.add("hidden"),a.classList.add("hidden"),m(!0);const p=await tn(l.value);if(m(!1),!p.ok){u(p.error);return}o(p.message)})};t()}function Xn(){const e=hn(),t=He()||xe()||"";g.innerHTML=U(`
    <div class="main-screen">
      <button type="button" class="help-btn" data-action="help" aria-label="앱 정보">?</button>
      <div class="main-header">
        <div class="title-block">
          ${qn()}
          <h1 class="app-title">${O.title}</h1>
        </div>
        <p class="app-subtitle">${O.subtitle}</p>
        <p class="main-quote">"${e}"</p>
      </div>
      <div class="main-body">
        <p class="login-user muted">${V(t)}</p>
        <button type="button" class="link-btn" data-action="profile">내 정보 수정</button>
        <button type="button" class="link-btn" data-action="logout">로그아웃</button>
        <button type="button" class="go-btn" data-action="grade" aria-label="시작">
          ${Tn()}
          <span class="go-text">GO</span>
        </button>
      </div>
      <p class="main-footer">${O.footer}</p>
    </div>
  `),Y(g)}function Qn(){const e=J();g.innerHTML=U(`
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
        <button type="button" class="link-btn" data-action="logout">로그아웃</button>
        <p class="warn hidden" id="profile-error"></p>
        <p class="ok-msg hidden" id="profile-ok"></p>
      </div>
      ${te()}
    </div>
  `);const t=g.querySelector("#profile-error"),n=g.querySelector("#profile-ok"),i=g.querySelector("#profile-name"),a=g.querySelector("#profile-sid"),r=g.querySelector("#profile-save");r.addEventListener("click",async()=>{t.classList.add("hidden"),n.classList.add("hidden"),r.disabled=!0;const l=await nn({displayName:i.value,studentId:a.value});if(r.disabled=!1,!l.ok){t.textContent=l.error,t.classList.remove("hidden");return}n.textContent="저장되었습니다.",n.classList.remove("hidden"),K({type:"profile_update",message:`정보 수정: ${He(l.user)}`,displayName:l.user.displayName,studentId:l.user.studentId})}),Y(g)}function Zn(){const e=le();g.innerHTML=U(`
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
        <p class="muted">제작: ${O.creator}</p>
        ${pe()?'<p class="success"><button type="button" class="link-btn" data-action="admin">관리자 패널 열기</button></p>':""}
      </div>
      ${te()}
      <p class="muted login-hint" style="text-align:center;margin-top:auto;padding:12px 8px 4px">${O.subtitle}</p>
    </div>
  `),Y(g)}function ea(){var b,f,v,u,o;if(!pe()){M("help");return}const e=F(),t=fn(),n=e.standardScale,i=e.artsScale,a=t.configured?`Firebase 연결됨 (${t.projectId})`:"Firebase 미설정 — src/firebase-config.js 에 키를 넣어주세요",r=t.isCloudAdmin?`클라우드 관리자 계정으로 로그인됨 (${t.adminEmail}) — 전체 기록 조회·설정 저장 가능`:`클라우드 전체 기록/설정 수정은 ${t.adminEmail} 로 로그인한 뒤에만 가능합니다. (지금: ${t.account||"미로그인"})`;g.innerHTML=U(`
    <div class="stack-screen admin-screen">
      <h2 class="screen-title">관리자 모드</h2>
      <p class="screen-desc">기기 ID: ${be()}</p>
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
  `),Y(g);let l=Ke();async function c(){const m=g.querySelector("#adm-logs"),s=g.querySelector("#adm-log-count");m&&(m.innerHTML='<p class="muted">불러오는 중…</p>');const w=await cn();if(l=w.logs,s&&(s.textContent=`(${l.length} · ${w.source}${w.error?" · 오류":""})`),!!m){if(l.length===0){m.innerHTML='<p class="muted">아직 기록이 없습니다.</p>';return}m.innerHTML=l.slice(0,120).map(S=>{const $=[S.displayName,S.studentId,S.account||S.deviceId].filter(Boolean).join(" · ");return`
      <article class="admin-log-item">
        <header>${V($)} · ${V(S.type)} · ${ta(S.at)}</header>
        <p>${V(S.message||"")}</p>
        ${S.detail?`<pre>${V(typeof S.detail=="string"?S.detail:JSON.stringify(S.detail,null,0))}</pre>`:""}
      </article>
    `}).join("")}}c(),(b=g.querySelector("#adm-refresh-logs"))==null||b.addEventListener("click",()=>c()),(f=g.querySelector("#adm-save"))==null||f.addEventListener("click",async()=>{var $,k;const m=Number(($=g.querySelector("#adm-unlock"))==null?void 0:$.value),s=!!((k=g.querySelector("#adm-free-games"))!=null&&k.checked),w=[...g.querySelectorAll('[data-scale="std"]')].map(I=>({letter:I.dataset.letter,min:Number(I.value)||0})),S=[...g.querySelectorAll('[data-scale="arts"]')].map(I=>({letter:I.dataset.letter,min:Number(I.value)||0}));on({restUnlockUses:Number.isFinite(m)&&m>0?m:8,freeGames:s,standardScale:w,artsScale:S}),window.alert(T()?"설정을 저장했고 클라우드에도 올렸습니다.":"설정을 이 기기에 저장했습니다. (Firebase 미설정)"),M("admin")}),(v=g.querySelector("#adm-feedback-save"))==null||v.addEventListener("click",()=>{var s,w;const m=(w=(s=g.querySelector("#adm-feedback"))==null?void 0:s.value)==null?void 0:w.trim();if(!m){window.alert("내용을 입력하세요.");return}K({type:"game_feedback",message:m}),window.alert("피드백을 저장했습니다."),M("admin")}),(u=g.querySelector("#adm-export"))==null||u.addEventListener("click",async()=>{const m=un(l);try{await navigator.clipboard.writeText(m),window.alert("기록이 클립보드에 복사되었습니다.")}catch{window.prompt("아래 내용을 복사하세요",m)}}),(o=g.querySelector("#adm-clear-logs"))==null||o.addEventListener("click",async()=>{window.confirm("로컬+클라우드 활동 기록을 비울까요?")&&(await dn({cloud:!0}),M("admin"))})}function V(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function ta(e){try{const t=new Date(e);return`${t.getMonth()+1}/${t.getDate()} ${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`}catch{return e}}function na(){const e=he(),t=wt();g.innerHTML=U(`
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
      ${oe(O.subtitle)}
    </div>
  `),Y(g)}function aa({grade:e}){if(!e||!me(e)){M("grade");return}R=e;const t=me(e),n=kn(e);g.innerHTML=U(`
    <div class="stack-screen ${It(e)}">
      ${ee()}
      <h2 class="screen-title">${t.label} 과목 선택</h2>
      ${t.note?`<p class="screen-note">${t.note}</p>`:""}
      ${Lt()}
      <div class="subject-list">
        ${n.map(i=>`<button type="button" class="subject-btn" data-action="pick-subject-${encodeURIComponent(i)}">${i}</button>`).join("")}
      </div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="grade">학년 선택으로</button>
        ${te()}
      </div>
      ${oe(O.subtitle)}
    </div>
  `),Y(g),Et(g)}function ia({grade:e,subject:t,semester:n}){if(!e||!t||!n){M("subject",{grade:R});return}R=e,Q=t,H=n;const i=me(e),a=kt(e,t),r=Sn(e,t,n),l=at(e,t,n),c={},b=a.length>1?`<div class="semester-tabs">
          ${a.map(o=>`<button type="button" class="semester-tab ${o===n?"active":""}" data-action="pick-semester-${o}">${at(e,t,o)}</button>`).join("")}
        </div>`:`<p class="semester-only">${l}</p>`;g.innerHTML=U(`
    <div class="stack-screen calculator-screen ${It(e)}">
      ${ee("globe globe-small")}
      <h2 class="screen-title subject-title">${t}</h2>
      <p class="screen-desc">${i.label} · ${l}${Xe(t)?" · 예체능(A·B·C)":" · 일반(A~E)"}</p>
      ${Lt(t)}
      ${b}
      <form id="calc-form" class="calc-form"></form>
      <button type="submit" form="calc-form" class="btn-calc">계산하기</button>
      <div id="calc-result" class="calc-result hidden"></div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="subject">과목 선택으로</button>
        ${te()}
      </div>
      ${oe(O.subtitle)}
    </div>
  `);const f=g.querySelector("#calc-form");let v="";for(const o of r){if(o.kind!==v){v=o.kind;const s=document.createElement("h3");s.className="section-heading",s.textContent=o.kind==="exam"?"지필고사":"수행평가",f.appendChild(s)}const m=document.createElement("label");m.className="score-row",m.innerHTML=`
      <span>${o.label} <em>${o.weight}%</em></span>
      <input type="number" min="0" max="100" step="0.1" inputmode="decimal"
        name="${o.key}" placeholder="점수" />
    `,f.appendChild(m)}const u=g.querySelector("#calc-result");f.addEventListener("submit",o=>{var p,N;o.preventDefault();const m=new FormData(f);for(const C of r)c[C.key]=m.get(C.key);const s=Pn(r,c,t);if(!s){u.classList.remove("hidden"),u.innerHTML='<p class="warn">최소 1개 이상 점수를 입력하세요.</p>';return}const w=bn(t);K({type:"calc",message:`${e}학년 ${t} (${l}) → ${s.rounded}점 ${ue(s.letter)}`,detail:{grade:e,subject:t,semester:n,scores:c,rounded:s.rounded,letter:s.letter,average:s.average}});let S="";((p=s.needed)==null?void 0:p.needed)!=null?S=`<p>상위 <strong>${ue(s.needed.targetLetter)}</strong>까지 남은 항목 평균 <strong>${s.needed.needed}점</strong> 이상</p>`:(N=s.needed)!=null&&N.message&&(S=`<p>${s.needed.message}</p>`);let $="";if(s.projection.remainingCount>0&&s.letter===s.projLetter){const C=ue(s.letter);let D="";s.confirmMin&&(s.confirmMin.minScore<=0?D=`<p>남은 항목이 <strong>0점</strong>이어도 ${C} 유지</p>`:D=`<p>남은 항목 각각 최소 <strong>${s.confirmMin.minScore}점</strong> 이상이면 ${C} 유지</p>`),$=`
        <p><strong>${C} 확정입니다.</strong></p>
        ${D}
      `}let k="";Mn(s)&&(k=`<p class="cheer-msg">${xn()}</p>`);let I="";w.justUnlocked?I=`<p class="success">서로 다른 과목 ${le()}개 달성! 학년 선택에서 휴식 미니게임 이용</p>`:he()?I='<p class="success">휴식 미니게임 이용 가능 (학년 선택 화면)</p>':w.isNew?I=`<p class="muted">${wt()}</p>`:I='<p class="muted">이미 계산한 과목입니다. 다른 과목을 계산하면 해금에 가까워져요.</p>',u.classList.remove("hidden"),u.innerHTML=`
      <h3>${t} 결과</h3>
      <p>총점(반올림) <strong>${s.rounded}점</strong> · <strong>${ue(s.letter)}</strong></p>
      <p class="muted">가중 평균 ${s.average.toFixed(1)}점</p>
      <p>남은 항목 100점 시 <strong>${s.projRounded}점</strong> · <strong>${ue(s.projLetter)}</strong></p>
      ${$}
      ${k}
      ${S}
      ${I}
    `}),Y(g),Et(g)}function ra(){if(!he()){M("grade");return}g.innerHTML=U(`
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
      ${oe(O.subtitle)}
    </div>
  `),Y(g)}function Be(e){if(!he()){M("grade");return}K({type:"game_open",message:`미니게임 시작: ${e}${Ae()?" (관리자)":""}`,detail:{type:e}}),g.innerHTML=U('<div id="game-root"></div>',"game-screen");const t=g.querySelector("#game-root"),n={onBack:()=>M("rest"),onMain:()=>{R=null,Q=null,H=null,M("main")}};e==="dart"?re=On(t,n)??null:e==="cricket"?re=jn(t,n)??null:e==="breakout"&&(re=Vn(t,n)??null)}
