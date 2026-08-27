(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();const st=8,O={title:"SCHOOL METRICS",subtitle:"철저한 내신관리 시스템",footer:"for 해연중 학생들",creator:"2210 박민호"},fe={apiKey:"AIzaSyB7YJBfYa9zGnUvLD4DFgR5KLiNKuluHJM",authDomain:"school-metrics-fdee3.firebaseapp.com",projectId:"school-metrics-fdee3",storageBucket:"school-metrics-fdee3.firebasestorage.app",messagingSenderId:"378255554733",appId:"1:378255554733:web:01b06dca5b5307860eae24",measurementId:"G-0BL416S3QD"},ie="alyssabell729@gmail.com",Ct=[ie,"20251413@haeyeon.ms.kr"];function q(){return!!(fe.apiKey&&fe.projectId&&fe.appId)}function be(e){return String(e||"").trim().toLowerCase()===ie.toLowerCase()}function Oe(e){const t=String(e||"").trim().toLowerCase();return Ct.some(n=>n.toLowerCase()===t)}const Pt="https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js",U="https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js",Z="https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";let ce=null,ke=null,de=null,ye=null;async function lt(){return q()?ce||(ye||(ye=(async()=>{const{initializeApp:e,getApps:t}=await import(Pt);return ce=t().length?t()[0]:e(fe),ce})().catch(e=>(console.warn("[firebase] app init failed",e),ye=null,ce=null,null))),ye):null}async function W(){if(!q())return null;if(await ge(),ke)return ke;const e=await lt();if(!e)return null;const{getFirestore:t}=await import(U);return ke=t(e),ke}async function ge(){if(!q())return null;if(de)return de;const e=await lt();if(!e)return null;const{getAuth:t,setPersistence:n,browserLocalPersistence:i}=await import(Z);de=t(e);try{await n(de,i)}catch(a){console.warn("[firebase] auth persistence",a)}return de}function ot(e){const t=(e==null?void 0:e.code)||"";return{"auth/email-already-in-use":"이미 가입된 계정입니다. 로그인하세요.","auth/invalid-email":"이메일 형식이 올바르지 않습니다.","auth/weak-password":"비밀번호는 6자 이상이어야 합니다.","auth/user-not-found":"가입되지 않은 계정입니다. 먼저 회원가입하세요.","auth/wrong-password":"비밀번호가 틀렸습니다.","auth/invalid-credential":"이메일 또는 비밀번호가 올바르지 않습니다.","auth/too-many-requests":"시도가 너무 많습니다. 잠시 후 다시 시도하세요.","auth/network-request-failed":"네트워크 오류입니다. 연결을 확인하세요.","auth/operation-not-allowed":"Firebase에서 이메일/비밀번호 로그인을 켜야 합니다.","auth/missing-email":"이메일을 입력하세요."}[t]||(e==null?void 0:e.message)||"인증에 실패했습니다."}async function qt(e,t){const n=await ge();if(!n)throw new Error("Firebase가 설정되지 않았습니다.");const{createUserWithEmailAndPassword:i,sendEmailVerification:a}=await import(Z);try{const r=await i(n,e,t);try{await a(r.user)}catch(l){console.warn("[firebase] verification mail",l)}return r.user}catch(r){throw r.friendlyMessage=ot(r),r}}async function Tt(e,t){const n=await ge();if(!n)throw new Error("Firebase가 설정되지 않았습니다.");const{signInWithEmailAndPassword:i}=await import(Z);try{return(await i(n,e,t)).user}catch(a){throw a.friendlyMessage=ot(a),a}}async function $e(){const e=await ge();if(!e)return;const{signOut:t}=await import(Z);await t(e)}async function xe(){const e=await ge();if(!e)return null;if(e.currentUser)return e.currentUser;const{onAuthStateChanged:t}=await import(Z);return new Promise(n=>{const i=t(e,a=>{i(),n(a||null)})})}async function Dt(){const e=await xe();return e?(await e.reload(),e):null}async function Bt(){const e=await xe();if(!e)throw new Error("로그인된 사용자가 없습니다.");const{sendEmailVerification:t}=await import(Z);await t(e)}async function Rt(e){const t=await xe();if(!t)return;const{updateProfile:n}=await import(Z);await n(t,e)}async function Ot(e,t){if(!e)return!1;const n=await W();if(!n)return!1;const{doc:i,setDoc:a,serverTimestamp:r}=await import(U),l={...t};return Object.keys(l).forEach(c=>{l[c]===void 0&&delete l[c]}),await a(i(n,"userProfiles",e),{...l,updatedAt:r()},{merge:!0}),!0}async function Ut(e){if(!e)return null;const t=await W();if(!t)return null;const{doc:n,getDoc:i}=await import(U),a=await i(n(t,"userProfiles",e));if(!a.exists())return null;const r=a.data();return delete r.updatedAt,r}async function jt(e,t,n=null){if(!e||!t)return{ok:!1,error:"기기 정보가 없습니다."};const i=await W();if(!i)return{ok:!1,error:"Firebase가 설정되지 않았습니다."};const{doc:a,setDoc:r,serverTimestamp:l}=await import(U),c=String(t).trim().toLowerCase();return await r(a(i,"deviceBindings",e),{account:c,uid:n||null,updatedAt:l(),createdAt:l()},{merge:!0}),{ok:!0,account:c}}async function Ft(e){if(!e)return!1;const t=await W();if(!t)return!1;const{doc:n,deleteDoc:i}=await import(U);try{return await i(n(t,"deviceBindings",e)),!0}catch(a){return console.warn("[firebase] unbind device",a),!1}}async function _t(e){const t=await W();if(!t)return null;const{collection:n,addDoc:i,serverTimestamp:a}=await import(U),r={...e};return Object.keys(r).forEach(c=>{r[c]===void 0&&delete r[c]}),(await i(n(t,"activityLogs"),{...r,createdAt:a()})).id}async function Ht(e=200){const t=await W();if(!t)return[];const{collection:n,query:i,orderBy:a,limit:r,getDocs:l}=await import(U),c=i(n(t,"activityLogs"),a("at","desc"),r(e));return(await l(c)).docs.map(f=>({id:f.id,...f.data()}))}async function Wt(){const e=await W();if(!e)return 0;const{collection:t,getDocs:n,deleteDoc:i,query:a,limit:r}=await import(U);let l=0;for(;;){const c=await n(a(t(e,"activityLogs"),r(100)));if(c.empty||(await Promise.all(c.docs.map(p=>i(p.ref))),l+=c.size,c.size<100))break}return l}async function Gt(e){const t=await W();if(!t)return!1;const{doc:n,setDoc:i,serverTimestamp:a}=await import(U),r={...e};return Object.keys(r).forEach(l=>{r[l]===void 0&&delete r[l]}),await i(n(t,"adminSettings","global"),{...r,updatedAt:a()}),!0}async function Vt(){const e=await W();if(!e)return null;const{doc:t,getDoc:n}=await import(U),i=await n(t(e,"adminSettings","global"));if(!i.exists())return null;const a=i.data();return delete a.updatedAt,a}const Qe="schoolMetricsDeviceId",ct="schoolMetricsBoundAccount";function pe(){let e=localStorage.getItem(Qe);return e||(e=`dev-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,localStorage.setItem(Qe,e)),e}function Ze(e){localStorage.setItem(ct,String(e).trim().toLowerCase())}function dt(){localStorage.removeItem(ct)}const Ie="schoolMetricsUserAccount",Kt=new Set(["2024","2025","2026"]),zt=/^(\d{4})(\d{4})@haeyeon\.ms\.kr$/i,et=6;function Ue(e){return String(e||"").trim().toLowerCase().replace(/\uFF20/g,"@").replace(/\s+/g,"")}function Jt(e){const n=Ue(e).match(zt);if(!n)return{ok:!1,error:"해연중 계정(예: 20261111@haeyeon.ms.kr) 형식으로 입력하세요."};const i=n[1],a=n[2],r=Le(a);return r.ok?Kt.has(i)?{ok:!0,account:`${i}${r.studentId}@haeyeon.ms.kr`,year:i,studentId:r.studentId,grade:r.grade,classNo:r.classNo,number:r.number,isAdminAccount:!1}:{ok:!1,error:"년도는 2024, 2025, 2026만 가능합니다."}:r}function Me(e){const t=Ue(e);return be(t)||t===ie.toLowerCase()?{ok:!0,account:ie.toLowerCase(),year:"admin",studentId:"admin",grade:0,classNo:0,number:0,isAdminAccount:!0}:t.includes("@")&&!t.endsWith("@haeyeon.ms.kr")?t.includes("alyssa")||t.endsWith("@gmail.com")?{ok:!1,error:`관리자 계정은 ${ie} 만 사용할 수 있습니다. 철자를 확인해 주세요.`}:{ok:!1,error:"학생은 @haeyeon.ms.kr 계정만 사용할 수 있습니다."}:Jt(t)}function Le(e){const t=String(e||"").trim();if(!/^\d{4}$/.test(t))return{ok:!1,error:"학번은 숫자 4자리여야 합니다. (예: 1111)"};const n=t[0],i=t[1],a=Number(t.slice(2));return["1","2","3"].includes(n)?"12345678".includes(i)?!Number.isInteger(a)||a<1||a>35?{ok:!1,error:"번호는 01~35만 가능합니다."}:{ok:!0,studentId:t,grade:Number(n),classNo:Number(i),number:a}:{ok:!1,error:"학번 둘째 자리(반)는 1~8만 가능합니다."}:{ok:!1,error:"학번 첫 자리(학년)는 1·2·3만 가능합니다."}}function ut(e){const t=String(e||"").trim().replace(/\s+/g," ");return t.length<2?{ok:!1,error:"이름은 2글자 이상 입력하세요."}:t.length>20?{ok:!1,error:"이름은 20글자 이하로 입력하세요."}:{ok:!0,displayName:t}}function ft(e){return String(e||"").length<et?{ok:!1,error:`비밀번호는 ${et}자 이상이어야 합니다.`}:{ok:!0}}async function Ne(e,t=null){const n=Ue(e),i=pe();if(be(n))return{ok:!0,deviceId:i,account:n,skipped:!0};try{const a=await jt(i,n,t);return a.ok?(Ze(n),{ok:!0,deviceId:i,account:n}):a}catch(a){return console.warn("[auth] bind device",a),Ze(n),{ok:!0,deviceId:i,account:n,softFail:!0}}}function je(e){return localStorage.setItem(Ie,JSON.stringify(e)),e}function mt(e,t={}){return{account:e.account,year:e.year,studentId:e.studentId,grade:e.grade,classNo:e.classNo,number:e.number,displayName:t.displayName||"",loggedInAt:new Date().toISOString(),viaPassword:!0,...t}}function z(){try{const e=localStorage.getItem(Ie);if(!e)return null;const t=JSON.parse(e);return t!=null&&t.account&&Me(t.account).ok?t:null}catch{return null}}function bt(){return!!z()}function Q(){var e;return((e=z())==null?void 0:e.account)||null}function Yt(){var e;return((e=z())==null?void 0:e.displayName)||""}function Xt(){var e;return((e=z())==null?void 0:e.studentId)||""}function Fe(e=z()){if(!e)return"";const t=[];return e.displayName&&t.push(e.displayName),e.studentId&&t.push(e.studentId),t.join(" · ")||e.account||""}async function Qt(){const e=Q(),t=pe();if(!be(e)){try{await Ft(t)}catch(n){console.warn("[auth] unbind on logout",n)}dt()}localStorage.removeItem(Ie);try{await $e()}catch{}}async function gt(e,t){if(e){try{await Rt({displayName:t.displayName||""})}catch(n){console.warn("[auth] updateProfile",n)}try{await Ot(e,{displayName:t.displayName||"",studentId:t.studentId||"",year:t.year||"",account:t.account||"",grade:t.grade,classNo:t.classNo,number:t.number})}catch(n){console.warn("[auth] cloud profile",n)}}}async function _e(e,{requireVerified:t=!0}={}){const n=e==null?void 0:e.email;if(!n)return await $e().catch(()=>{}),{ok:!1,error:"계정 이메일을 가져오지 못했습니다."};const i=Me(n);if(!i.ok)return await $e().catch(()=>{}),i;if(t&&!e.emailVerified)return{ok:!1,needVerify:!0,error:"학교 메일함에서 인증 메일의 링크를 눌러주세요. (스팸함도 확인)",account:i.account};let a=String(e.displayName||"").trim(),r=i.studentId,l=i.grade,c=i.classNo,p=i.number;try{const u=await Ut(e.uid);if(u!=null&&u.displayName&&(a=String(u.displayName).trim()),u!=null&&u.studentId){const o=Le(u.studentId);o.ok&&(r=o.studentId,l=o.grade,c=o.classNo,p=o.number)}}catch(u){console.warn("[auth] load profile",u)}const f=z();if((f==null?void 0:f.account)===i.account&&(!a&&f.displayName&&(a=f.displayName),f.studentId)){const u=Le(f.studentId);u.ok&&r===i.studentId&&f.studentId!==i.studentId&&(r=u.studentId,l=u.grade,c=u.classNo,p=u.number)}return{ok:!0,user:je(mt({...i,studentId:r,grade:l,classNo:c,number:p},{uid:e.uid||null,emailVerified:!!e.emailVerified,displayName:a}))}}async function Zt(e,t,n){if(!q())return{ok:!1,error:"Firebase 설정이 없습니다."};const i=ut(n);if(!i.ok)return i;const a=Me(e);if(!a.ok)return a;const r=ft(t);if(!r.ok)return r;try{const l=await qt(a.account,t),c=await Ne(a.account,l.uid);return c.ok?(await gt(l.uid,{displayName:i.displayName,studentId:a.studentId,year:a.year,account:a.account,grade:a.grade,classNo:a.classNo,number:a.number}),je(mt(a,{uid:l.uid,displayName:i.displayName,emailVerified:!1})),{ok:!1,needVerify:!0,registered:!0,account:a.account,displayName:i.displayName,error:"가입되었습니다. 학교 메일함의 인증 링크를 누른 뒤 로그인하세요. (스팸함도 확인)",uid:l==null?void 0:l.uid}):(await $e().catch(()=>{}),c)}catch(l){return{ok:!1,error:l.friendlyMessage||l.message||"회원가입 실패"}}}async function en(e,t){if(!q())return{ok:!1,error:"Firebase 설정이 없습니다."};const n=Me(e);if(!n.ok)return n;const i=ft(t);if(!i.ok)return i;try{const a=await Tt(n.account,t);await a.reload();const r=await _e(a,{requireVerified:!0});return r.ok&&await Ne(n.account,a.uid),r}catch(a){return{ok:!1,error:a.friendlyMessage||a.message||"로그인 실패"}}}async function tn({displayName:e,studentId:t}){const n=z();if(!n)return{ok:!1,error:"로그인이 필요합니다."};const i=ut(e);if(!i.ok)return i;const a=Le(t);if(!a.ok)return a;const r=je({...n,displayName:i.displayName,studentId:a.studentId,grade:a.grade,classNo:a.classNo,number:a.number});return await gt(n.uid,{displayName:r.displayName,studentId:r.studentId,year:r.year,account:r.account,grade:r.grade,classNo:r.classNo,number:r.number}),{ok:!0,user:r}}async function nn(){try{const e=await Dt();if(!e)return{ok:!1,error:"먼저 로그인(비밀번호)을 다시 시도하세요."};const t=await _e(e,{requireVerified:!0});return t.ok&&await Ne(t.user.account,e.uid),t}catch(e){return{ok:!1,error:e.message||"인증 상태 확인 실패"}}}async function an(){try{return await Bt(),{ok:!0,message:"인증 메일을 다시 보냈습니다. 메일함·스팸함을 확인하세요."}}catch(e){return{ok:!1,error:e.message||"인증 메일 재전송 실패"}}}async function rn(){if(!q())return ve(),null;try{const e=await xe();if(!e)return ve(),null;await e.reload();const t=await _e(e,{requireVerified:!0});return t.ok?(await Ne(t.user.account,e.uid),t.user):(ve(),null)}catch(e){return console.warn("[auth] restore",e),ve(),null}}function ve(){localStorage.removeItem(Ie),dt()}const He="schoolMetricsAdminSettings",Ee="schoolMetricsActivityLog",sn=500,re={restUnlockUses:st,freeGames:!0,standardScale:[{letter:"A",min:90},{letter:"B",min:80},{letter:"C",min:70},{letter:"D",min:60},{letter:"E",min:0}],artsScale:[{letter:"A",min:80},{letter:"B",min:60},{letter:"C",min:0}]};function We(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function Ge(e,t){localStorage.setItem(e,JSON.stringify(t))}function he(){return be(Q())}function H(){const e=We(He,{});return{...re,...e,standardScale:e.standardScale||re.standardScale,artsScale:e.artsScale||re.artsScale}}function ln(e){const t={...H(),...e};return Ge(He,t),K({type:"admin_settings",message:"관리자 설정 변경",detail:e}),q()&&Gt(t).catch(n=>console.warn("[firebase] settings save",n)),t}async function pt(){if(!q())return H();try{const e=await Vt();if(e&&typeof e=="object"){const t={...re,...e,standardScale:e.standardScale||re.standardScale,artsScale:e.artsScale||re.artsScale};return Ge(He,t),t}}catch(e){console.warn("[firebase] settings load",e)}return H()}function le(){return Number(H().restUnlockUses)||st}function Ae(){return he()&&H().freeGames!==!1}function K(e){const t={id:`${Date.now()}-${Math.random().toString(36).slice(2,7)}`,at:new Date().toISOString(),deviceId:pe(),...e,account:e.account||Q()||"guest",displayName:e.displayName||Yt()||"",studentId:e.studentId||Xt()||""},n=We(Ee,[]);return n.unshift(t),Ge(Ee,n.slice(0,sn)),q()&&_t(t).catch(i=>console.warn("[firebase] log",i)),t}function Ve(){return We(Ee,[])}async function on(){const e=Ve();if(!q())return{source:"local",logs:e};try{const t=await Ht(300),n=new Map;for(const a of[...t,...e]){const r=a.id||`${a.at}-${a.deviceId}-${a.type}-${a.message}`;n.has(r)||n.set(r,a)}return{source:"firebase",logs:[...n.values()].sort((a,r)=>String(r.at).localeCompare(String(a.at)))}}catch(t){return console.warn("[firebase] fetch logs",t),{source:"local-fallback",logs:e,error:String(t.message||t)}}}async function cn({cloud:e=!0}={}){if(localStorage.removeItem(Ee),e&&q())try{await Wt()}catch(t){console.warn("[firebase] clear",t)}K({type:"admin_clear_logs",message:"활동 로그 초기화"})}function dn(e=Ve()){return JSON.stringify({exportedAt:new Date().toISOString(),deviceId:pe(),firebase:q(),settings:H(),logs:e},null,2)}function un(){const e=Q();return{configured:q(),projectId:fe.projectId||"",adminEmail:ie,isCloudAdmin:be(e),account:e||""}}const Ke="schoolMetricsUniqueSubjects";function ht(){try{const e=localStorage.getItem(Ke),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch{return[]}}function fn(e){localStorage.setItem(Ke,JSON.stringify(e))}function mn(e){const t=le(),n=ht(),i=!n.includes(e);return i&&(n.push(e),fn(n)),{isNew:i,uniqueCount:n.length,justUnlocked:i&&n.length>=t}}function ze(){return ht().length}function we(){return Ae()?!0:ze()>=le()}function bn(){return Math.max(0,le()-ze())}function gn(){Ae()||localStorage.removeItem(Ke)}function wt(){const e=le(),t=ze(),n=bn();return Ae()?"관리자 모드: 미니게임 자유 이용":we()?`서로 다른 과목 ${t}개 달성! 휴식 미니게임 이용 가능`:`서로 다른 과목 ${n}개 더 계산하면 해금 (${t}/${e})`}const qe=["희망은 좋은 것이다. 어쩌면 가장 좋은 것일지도. — 《쇼생크 탈출》","해야 한다, 아니면 안 된다. 그 중간은 없다. — 《스타워즈》","과거는 과거일 뿐이야. 배울 수만 있다면. — 《라이온 킹》","가장 어두운 시간은 해가 뜨기 직전이다. — 《어벤져스: 엔드게임》","세상에서 중요한 건 내가 누구냐가 아니라, 내가 뭘 하느냐다. — 《배트맨: 다크나이트》","우리에게 주어진 시간을 어떻게 쓸지만 결정하면 된다. — 《반지의 제왕》","아주 작은 존재도 미래를 바꿀 수 있다. — 《반지의 제왕》","자유는 아무 대가 없이 오지 않는다. — 《브레이브하트》","지금 이 순간을 잡아라. — 《데드 포엇 소사이어티》","무엇이든 할 수 있다. — 《쿵푸 판다》","그냥 계속 헤엄쳐. — 《니모를 찾아서》","모든 걸 시도해 봐. — 《주토피아》","두려움을 없애는 방법은 그것과 마주하는 것이다. — 《인사이드 아웃》","뜻이 있는 곳에 길이 있다. — 《아바타》","비가 그친 뒤에는 반드시 맑은 하늘이 온다. — 《날씨의 아이》","나는 이 세계를 이해할 수 없어. 그래도 계속한다. — 《록키》","시련이 없었다면 챔피언도 없다. — 《록키》","인생은 수레바퀴와 같아. 항상 앞으로 나아가야 한다. — 《니모를 찾아서》","이겨야 한다. 어떻게든. — 《친구》","꿈은 거짓말이 아니다. 반드시 이루어질 내일이다. — 《드림하이》","포기하면 그 순간 게임 끝이야, 인생도 마찬가지다. — 《슬램덩크》","죽을 때 후회 없는 인생을 살아라. — 《원피스》","약한 것은 죄가 아니다. 약한 채로 있으면 안 될 뿐. — 《귀멸의 칼날》","막을 때까지 싸워라. — 《진격의 거인》","노력은 배신하지 않는다. — 《하이큐!!》","패배는 패배하지 않는 것보다 낫다. — 《하이큐!!》","시선을 돌리지 마. 앞만 봐. — 《센과 치히로의 행방불명》","살아있는 한 힘을 내라. — 《하울의 움직이는 성》","바람이 분다. 견뎌야 한다. — 《바람의 나라》","상대는 나 자신이다. — 《초속 5센티미터》","포기하지 말 것. 내일이 있으니. — 《드래곤볼》","사람은 누구나 다시 태어날 수 있다. — 《바람의 나라》","아는 것이 힘이다. — 프랜시스 베이컨","천 리 길도 한 걸음부터. — 노자","배우고 또 배우면 어찌 기쁘지 아니하랴. — 공자","백번 듣는 것보다 한 번 보는 것이 낫다. — 공자","세 사람이 길을 가면 반드시 나의 스승이 있다. — 공자","하늘은 큰 뜻을 품은 자에게 먼저 고생을 시킨다. — 맹자","독서는 마음의 양식이다. — 키케로","하늘은 스스로 돕는 자를 돕는다. — 소포클레스","그대가 갈망하는 것을 따르라. — 랄프 왔도 에머슨","겁쟁이는 죽기 전에 여러 번 죽는다. 용감한 자는 한 번만 죽는다. — 셰익스피어","열정 없이는 위대한 것은 이루어지지 않는다. — 게오르크 빌헬름 프리드리히 헤겔","나는 나의 운명을 사랑한다. — 프리드리히 니체","오늘 할 일을 내일로 미루지 마라. — 벤자민 프랭클린","천재는 1%의 영감과 99%의 땀이다. — 토마스 에디슨","실패는 성공의 어머니이다. — 토마스 에디슨","시간은 금이다. — 벤자민 프랭클린","어리석은 자는 경험에서 아무것도 배우지 않는다. — 벤자민 프랭클린","실용적인 것이 가장 시적인 것이다. — 벤자민 프랭클린","깊은 생각 없는 독서는 낮잠과 같다. — 프랜시스 베이컨","인생은 속도가 아니라 방향이다. — 에이브러햄 링컨","성공은 최종적인 것이 아니며, 실패는 치명적인 것이 아니다. — 윈스턴 처칠","가장 위대한 영광은 넘어지지 않는 것이 아니라, 넘어질 때마다 일어서는 것이다. — 넬슨 만델라","용기는 두려움의 부재가 아니라, 두려움에도 행동하는 것이다. — 넬슨 만델라","네가 할 수 있다고 믿든 못 한다고 믿든, 네 말이 맞다. — 헨리 포드","성공의 비결은 시작하는 것이다. — 마크 트웨인","행운은 준비된 자에게 찾아온다. — 루이 파스퇴르","한계란 대부분 마음속에 있는 환상일 뿐이다. — 무하마드 알리","나는 세계 챔피언이다. 내가 그렇다고 말하기 전부터. — 무하마드 알리","항상 갈망하고, 우직하게 나아가라. — 스티브 잡스","당신의 시간은 제한되어 있다. 다른 사람의 인생을 살며 낭비하지 마라. — 스티브 잡스","오늘 나는 죽었다면 무엇을 후회하겠는가. — 스티브 잡스","죽고자 하면 살 것이요, 살고자 하면 죽을 것이니라. — 이순신","한 번도 실수한 적 없는 사람은 새로운 것을 시도한 적이 없는 사람이다. — 알버트 아인슈타인","네가 정말 소중히 여기는 것에 시간을 써라. — 《어린 왕자》","꽃을 단 한 송이라도 내가 직접 가꾸면, 내 세계에 엇비슷한 시간이 흐른다. — 《어린 왕자》","세상에서 가장 강한 사람은 스스로를 이기는 사람이다. — 무라카미 하루키","빛을 보고자 한다면 어둠을 견뎌야 한다. — 무라카미 하루키","사람은 마음먹은 것은 다 이룬다. — 《바보》","고통 없이는 얻는 것도 없다. — 라틴 격언","로마는 하루아침에 이루어지지 않았다. — 속담","연습이 완벽을 만든다. — 속담","배움에는 왕도가 없다. — 유클리드","작은 일에 충실하라. 그곳에 네 힘이 있다. — 루드야드 키플링","가장 큰 위험은 위험을 감수하지 않는 것이다. — 마크 주커버그","인생은 짧고, 예술은 길다. — 히포크라테스","삶을 살아가는 가장 좋은 복수는 성공하는 것이다. — 프랭크 시나트라","피할 수 없으면 즐겨라. — 로버트 엘리엇","포기하지 않는 한, 늦었다고 생각할 때가 가장 빠른 때다. — 속담","꾸준함은 재능을 이긴다. — 속담","반복은 지루하지만, 반복 없는 실력은 환상이다. — 속담","오늘의 노력이 내일의 실력이 된다. — 속담","지금이 가장 빠른 시작이다. — 속담","목표 없는 공부는 방향 잃은 배와 같다. — 속담","모르는 것을 아는 것이 배움의 시작이다. — 속담","실력은 하루아침에 생기지 않는다. — 속담","쉬는 것도 실력이다. 번아웃을 조심하자. — 속담","비교하지 말고, 어제의 나와 겨루자. — 속담","이해가 안 되면 다시 보면 된다. 반복이 답이다. — 속담","시험은 결과일 뿐, 과정이 실력이다. — 속담","1%씩 매일 오르면 37배가 된다. — 속담","모르는 건 부끄러운 게 아니다. 묻지 않는 게 문제다. — 속담","오답 노트 한 장이 교과서 열 페이지보다 강하다. — 속담","할 수 있다고 믿는 순간, 절반은 온 것이다. — 속담","오늘 공부한 만큼, 내일은 덜 불안하다. — 속담"],tt="schoolMetricsQuoteIndex";function pn(){let e=Number(localStorage.getItem(tt)||0);const t=qe[e%qe.length];return localStorage.setItem(tt,String((e+1)%qe.length)),t}const hn={1:{label:"1학년",note:"1학년은 2학기부터 내신 성적이 반영됩니다.",subjects:{국어:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"나만의 노트(나노)",weight:15,kind:"perf"}]}}},수학:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"기본도형 탐구 프로젝트",weight:20,kind:"perf"},{label:"평면·입체 도형 탐구",weight:20,kind:"perf"}]}}},사회:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"사회화 자서전 만들기",weight:20,kind:"perf"},{label:"모의 선거",weight:20,kind:"perf"}]}}},과학:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"실험 보고서 작성",weight:20,kind:"perf"},{label:"달의 위상 변화 관찰",weight:20,kind:"perf"}]}}},영어:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"희망 직업 소개",weight:20,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]}}},음악:{semesters:{2:{label:"2학기",items:[{label:"우쿨렐레 연주",weight:50,kind:"perf"},{label:"작곡가 탐구 활동",weight:50,kind:"perf"}]}}},미술:{semesters:{2:{label:"2학기",items:[{label:"스텐실",weight:50,kind:"perf"},{label:"문자도",weight:50,kind:"perf"}]}}},체육:{semesters:{2:{label:"2학기",items:[{label:"경기형 스포츠(축구)",weight:50,kind:"perf"},{label:"기록 도전형(달리기)",weight:50,kind:"perf"}]}}},정보:{semesters:{2:{label:"2학기",items:[{label:"AI 활용",weight:50,kind:"perf"},{label:"디지털 문화 표현",weight:50,kind:"perf"}]}}},"진로와 직업":{semesters:{2:{label:"2학기",items:[{label:"창업 프로젝트",weight:50,kind:"perf"},{label:"진로 디자인",weight:50,kind:"perf"}]}}},기술가정:{semesters:{2:{label:"2학기",items:[{label:"과학·미래기술 보고서",weight:35,kind:"perf"},{label:"에너지 신문 제작",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]}}}}},2:{label:"2학년",subjects:{국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"발표와 듣기",weight:15,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"복합양식 자료를 활용한 글 작성",weight:15,kind:"perf"}]}}},수학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"일차방정식·일차부등식",weight:20,kind:"perf"},{label:"연립일차방정식·일차함수",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"삼각형·사각형의 성질",weight:20,kind:"perf"},{label:"도형의 닮음·피타고라스",weight:20,kind:"perf"}]}}},역사:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"고대 문명 지도 만들기",weight:20,kind:"perf"},{label:"고대사 신문 만들기",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"서양 고대 문화유산 소개",weight:20,kind:"perf"},{label:"유럽 여행 소개 글쓰기",weight:20,kind:"perf"}]}}},과학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"밀도 측정",weight:10,kind:"perf"},{label:"지권 층상구조 모형 제작",weight:10,kind:"perf"},{label:"주기율표 탐구",weight:10,kind:"perf"},{label:"광합성 탐구",weight:10,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"소리의 성질 탐구",weight:10,kind:"perf"},{label:"인체 프로젝트",weight:20,kind:"perf"},{label:"전류,전압,저항 사이의 관계 탐구",weight:10,kind:"perf"}]}}},영어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"},{label:"발명품 소개",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"지역 축제 홍보",weight:20,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]}}},음악:{semesters:{1:{label:"1학기",items:[{label:"우쿨렐레 연주",weight:50,kind:"perf"},{label:"텅드럼 연주",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"펜비트 연주",weight:50,kind:"perf"},{label:"리코더 연주",weight:50,kind:"perf"}]}}},미술:{semesters:{1:{label:"1학기",items:[{label:"세밀화",weight:50,kind:"perf"},{label:"음식 모형 만들기",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"점묘화",weight:50,kind:"perf"},{label:"서양미술사 보고서",weight:50,kind:"perf"}]}}},체육:{semesters:{1:{label:"1학기",items:[{label:"경기형 스포츠(킨볼)",weight:60,kind:"perf"},{label:"도전형(제자리멀리뛰기)",weight:40,kind:"perf"}]},2:{label:"2학기",items:[{label:"경기형 스포츠(배드민턴)",weight:60,kind:"perf"},{label:"건강관리(줄넘기)",weight:40,kind:"perf"}]}}},도덕:{semesters:{1:{label:"1학기",items:[{label:"도덕적 인물 지폐 제작",weight:50,kind:"perf"},{label:"우정 네 컷 만들기",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"정보 카드 뉴스 제작",weight:50,kind:"perf"},{label:"인권 모니터링 제안서",weight:50,kind:"perf"}]}}},중국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 기말고사",weight:40,kind:"exam"},{label:"한어병음 작성",weight:30,kind:"perf"},{label:"중국어 말하기",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 기말고사",weight:40,kind:"exam"},{label:"하루 일과표 만들기",weight:30,kind:"perf"},{label:"중국어 말하기",weight:30,kind:"perf"}]}}},"금융과 미래":{semesters:{2:{label:"2학기",items:[{label:"투자 성향 검사",weight:50,kind:"perf"},{label:"투자 포트폴리오 구성",weight:50,kind:"perf"}]}}},기술가정:{semesters:{1:{label:"1학기",items:[{label:"효과적 의사소통 프로젝트",weight:35,kind:"perf"},{label:"제조 기술 프로젝트",weight:35,kind:"perf"},{label:"자기주도노트 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"균형 잡힌 식단 계획",weight:35,kind:"perf"},{label:"친환경 의복 생활",weight:35,kind:"perf"},{label:"자기주도노트 작성",weight:30,kind:"perf"}]}}}}},3:{label:"3학년",note:"3학년 2학기에는 기말고사가 없습니다.",subjects:{국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"논설문 쓰기",weight:15,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"한 학기 한 권 읽기",weight:30,kind:"perf"},{label:"문장의 짜임 고려해서 자신감 있게 발표",weight:30,kind:"perf"}]}}},사회:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"국가 기관 탐구로 권력 분립 이해",weight:20,kind:"perf"},{label:"국민 경제 지표와 국제 거래 이해",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"인구·도시 문제 탐구",weight:30,kind:"perf"},{label:"농업 산업화·세계화",weight:30,kind:"perf"}]}}},역사:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"고려 정치 변천",weight:20,kind:"perf"},{label:"고려의 문화 및 조선 통치 체제 탐구",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"조선 왕 가상 인터뷰",weight:30,kind:"perf"},{label:"양 난의 이해 및 영정조 정책 탐구",weight:30,kind:"perf"}]}}},도덕:{semesters:{1:{label:"1학기",items:[{label:"1학기 기말고사",weight:40,kind:"exam"},{label:"폭력 예방 논술문 작성",weight:30,kind:"perf"},{label:"사회 정의 실현 논술문 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"환경 보호 제안서",weight:30,kind:"perf"},{label:"실패 이력서 소개",weight:30,kind:"perf"}]}}},수학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"인수분해를 이용한 수의 성질 탐구",weight:20,kind:"perf"},{label:"이차함수 그래프",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"삼각비 개념 보고서",weight:30,kind:"perf"},{label:"원의 성질 문제해결",weight:30,kind:"perf"}]}}},과학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"기상 현상 실험",weight:20,kind:"perf"},{label:"화학 반응의 규칙 탐구",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"세포분열 관찰 실험",weight:30,kind:"perf"},{label:"물체 운동 분석",weight:30,kind:"perf"}]}}},영어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:15,kind:"perf"},{label:"급식 메뉴 프로젝트",weight:15,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"영어 듣기",weight:20,kind:"perf"},{label:"영어독서",weight:20,kind:"perf"},{label:"통계 자료 활용 프로젝트",weight:20,kind:"perf"}]}}},음악:{semesters:{1:{label:"1학기",items:[{label:"칼림바 연주",weight:50,kind:"perf"},{label:"전자드럼 연주",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"노래 부르기",weight:50,kind:"perf"},{label:"디자인사 연구보고서",weight:50,kind:"perf"}]}}},미술:{semesters:{1:{label:"1학기",items:[{label:"포트레이트 드로잉",weight:50,kind:"perf"},{label:"비주얼 리터러시",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"오마주",weight:50,kind:"perf"},{label:"디자인 조사 보고서",weight:50,kind:"perf"}]}}},체육:{semesters:{1:{label:"1학기",items:[{label:"전통 표현(티니클링)",weight:40,kind:"perf"},{label:"플로어볼",weight:60,kind:"perf"}]},2:{label:"2학기",items:[{label:"건강·체력 관리(타바타)",weight:40,kind:"perf"},{label:"배구",weight:60,kind:"perf"}]}}},기술가정:{semesters:{1:{label:"1학기",items:[{label:"생애 설계",weight:35,kind:"perf"},{label:"수송기술 제작",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"스마트폰 앱 만들기",weight:35,kind:"perf"},{label:"적정 기술 사례 조사",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]}}}}}};function me(e){return hn[e]??null}function wn(e){const t=me(e);return t?Object.keys(t.subjects):[]}function Je(e,t){var n;return((n=me(e))==null?void 0:n.subjects[t])??null}function kt(e,t){const n=Je(e,t);return n?Object.keys(n.semesters).map(Number).sort((i,a)=>i-a):[]}function kn(e,t,n){var a;const i=Je(e,t);return((a=i==null?void 0:i.semesters[n])==null?void 0:a.items)??[]}function nt(e,t,n){var a;const i=Je(e,t);return((a=i==null?void 0:i.semesters[n])==null?void 0:a.label)??`${n}학기`}function yn(e,t,n,i){return`${e}-${t}-${n}-${i}`}function vn(e,t,n){return kn(e,t,n).map((a,r)=>({key:yn(e,t,n,r),subject:t,semester:n,label:a.label,weight:a.weight,kind:a.kind}))}function yt(e,t){let n=0,i=0;for(const a of e){const r=t[a.key];if(r===""||r===null||r===void 0)continue;const l=Number(r);Number.isNaN(l)||(n+=a.weight,i+=l*a.weight)}return n===0?null:i/n}function Sn(e,t){const n={},i=[];for(const r of e){const l=t[r.key];if(l===""||l===null||l===void 0){i.push(r);continue}const c=Number(l);if(Number.isNaN(c)){i.push(r);continue}n[r.key]=c}const a={...n};for(const r of i)a[r.key]=100;return{average:yt(e,a),remainingCount:i.length}}const $n=["음악","미술","체육"],Ln=[{letter:"A",min:90},{letter:"B",min:80},{letter:"C",min:70},{letter:"D",min:60},{letter:"E",min:0}],En=[{letter:"A",min:80},{letter:"B",min:60},{letter:"C",min:0}];function vt(e){return e.map((t,n,i)=>{const a=i[n-1],r=t.min===0?`${t.letter} (${(a==null?void 0:a.min)??60}점 미만)`:`${t.letter} (${t.min}점 이상)`;return{letter:t.letter,min:Number(t.min)||0,label:r}})}function St(){const e=H().standardScale;return vt(e!=null&&e.length?e:Ln)}function $t(){const e=H().artsScale;return vt(e!=null&&e.length?e:En)}function Ye(e){return $n.includes(e)}function Ce(e){return e==null||Number.isNaN(e)?null:Math.round(e)}function Xe(e){return Ye(e)?$t():St()}function Re(e,t){const n=Ce(e);if(n===null)return"-";const i=Xe(t);for(const a of i)if(n>=a.min)return a.letter;return i[i.length-1].letter}function ue(e){return`${e}등급`}const at=["조금만 더 올리면 된다. 할 수 있어!","상위 등급이 코앞이다. 끝까지 달려보자!","지금의 노력이 등급을 바꾼다. 포기하지 마!","아직 끝나지 않았어. 충분히 올릴 수 있어!","남은 항목이 기회다. 집중해서 마무리하자!","한 걸음만 더 가면 등급이 달라진다. 파이팅!","가능성은 아직 살아 있다. 믿고 가보자!","오늘의 한 문제가 등급을 바꿀 수도 있어!","목표 등급까지 거의 다 왔다. 조금만 더!","실력은 거짓말하지 않는다. 계속 밀어붙여!"];function xn(e){return e.projection.remainingCount>0&&e.letter!==e.projLetter}function In(){const e=Math.floor(Math.random()*at.length);return at[e]}function Lt(e=null){const t=e?Ye(e):!1,n=e?t?`${e}은(는) 예체능 과목 (A·B·C)`:`${e}은(는) 일반 과목 (A·B·C·D·E)`:"과목 유형에 따라 등급 기준이 다릅니다.",i=St(),a=$t();return`
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
  `}function Et(e){const t=e.querySelector("[data-toggle='criteria']"),n=e.querySelector("#criteria-panel");!t||!n||t.addEventListener("click",()=>{const i=n.classList.toggle("hidden");t.setAttribute("aria-expanded",String(!i)),t.textContent=i?"▶ 등급 기준표 확인":"▼ 등급 기준표 닫기"})}function Mn(e,t,n,i){if(n===null)return null;const a=Ce(n),r=Re(a,i),l=Xe(i),c=l.findIndex($=>$.letter===r);if(c<=0)return{targetLetter:r,needed:null,message:"이미 최고 등급입니다."};const p=l[c-1],f=p.min,v=e.filter($=>{const k=t[$.key];return k===""||k===null||k===void 0||Number.isNaN(Number(k))});if(v.length===0)return{targetLetter:p.letter,needed:null,message:"모든 항목이 입력되었습니다."};let u=0,o=0,b=0;for(const $ of e){const k=t[$.key];if(k===""||k===null||k===void 0||Number.isNaN(Number(k))){b+=$.weight;continue}u+=$.weight,o+=Number(k)*$.weight}if(b===0)return null;const s=u+b,w=(f*s-o)/b,S=Math.max(0,Math.min(100,w));return{targetLetter:p.letter,needed:Math.ceil(S*10)/10,remainingCount:v.length,message:null}}function Nn(e,t,n,i){const r=Xe(i).find(s=>s.letter===n);if(!r)return null;let l=0,c=0,p=0,f=0;for(const s of e){const w=t[s.key];if(w===""||w===null||w===void 0||Number.isNaN(Number(w))){p+=s.weight,f+=1;continue}c+=s.weight,l+=Number(w)*s.weight}if(p===0)return null;const v=c+p,o=((r.min-.5)*v-l)/p;return{minScore:Math.ceil(Math.max(0,Math.min(100,o))*10)/10,remainingCount:f}}function An(e){const t=Ce(e);return{raw:e,rounded:t,display:`${t}점`}}function Cn(e,t,n){const i=yt(e,t);if(i===null)return null;const{rounded:a}=An(i),r=Re(a,n),l=Sn(e,t),c=Ce(l.average),p=Mn(e,t,i,n),f=Nn(e,t,r,n);return{average:i,rounded:a,letter:r,projection:l,projRounded:c,projLetter:Re(c,n),needed:p,confirmMin:f}}function ee(e="globe"){return`
    <svg class="${e}" viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="48" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.35"/>
      <ellipse cx="60" cy="60" rx="48" ry="16" fill="none" stroke="currentColor" stroke-width="1"/>
      <ellipse cx="60" cy="60" rx="16" ry="48" fill="none" stroke="currentColor" stroke-width="1"/>
      <ellipse cx="60" cy="60" rx="34" ry="48" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.7"/>
      <line x1="12" y1="60" x2="108" y2="60" stroke="currentColor" stroke-width="0.8"/>
      <line x1="60" y1="12" x2="60" y2="108" stroke="currentColor" stroke-width="0.8"/>
    </svg>
  `}function Pn(){return'<img class="title-bg" src="./title-bg.png" alt="" aria-hidden="true" />'}function qn(){return'<img class="go-bg" src="./go-bg.png" alt="" aria-hidden="true" />'}function xt(e){return`grade-theme-${e}`}function j(e,t=""){return`<div class="phone-screen ${t}">${e}</div>`}function oe(e){return`<p class="screen-footer">${e}</p>`}function te(e="main"){return`<button type="button" class="link-btn" data-action="${e}">메인화면으로</button>`}const It=[20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5],Se=8;function Tn(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function Dn(e,t,n){var i,a;(i=e.querySelector('[data-nav="back"]'))==null||i.addEventListener("click",t),(a=e.querySelector('[data-nav="main"]'))==null||a.addEventListener("click",n)}function Bn(e,t){const n=Math.hypot(e,t);if(n>1)return{points:0,label:"보드 밖"};if(n<=.07)return{points:50,label:"더블 불 · 50"};if(n<=.14)return{points:25,label:"싱글 불 · 25"};let i=Math.atan2(e,-t);i<0&&(i+=Math.PI*2);const a=Math.floor((i+Math.PI/20)%(Math.PI*2)/(Math.PI/10)),r=It[a];return n>=.9?{points:r*2,label:`더블 ${r} · ${r*2}`}:n>=.52&&n<=.62?{points:r*3,label:`트리플 ${r} · ${r*3}`}:{points:r,label:`싱글 ${r} · ${r}`}}function Te(e,t,n){const i=t/2,a=t/2,r=t*.42;e.clearRect(0,0,t,t),e.fillStyle="#1a1a1a",e.beginPath(),e.arc(i,a,r*1.08,0,Math.PI*2),e.fill();for(let l=0;l<20;l++){const c=-Math.PI/2-Math.PI/20+l*Math.PI/10,p=c+Math.PI/10,f=l%2===0;e.beginPath(),e.moveTo(i,a),e.arc(i,a,r*.9,c,p),e.closePath(),e.fillStyle=f?"#111":"#ece6d8",e.fill(),e.beginPath(),e.moveTo(i,a),e.arc(i,a,r*.52,c,p),e.closePath(),e.fillStyle=f?"#1c1c1c":"#f5f0e6",e.fill(),e.beginPath(),e.arc(i,a,r,c,p),e.arc(i,a,r*.9,p,c,!0),e.closePath(),e.fillStyle=l%2===0?"#c4122f":"#0a7a3c",e.fill(),e.beginPath(),e.arc(i,a,r*.62,c,p),e.arc(i,a,r*.52,p,c,!0),e.closePath(),e.fillStyle=l%2===0?"#c4122f":"#0a7a3c",e.fill()}e.strokeStyle="rgba(180,180,180,0.55)",e.lineWidth=1;for(let l=0;l<20;l++){const c=-Math.PI/2-Math.PI/20+l*Math.PI/10;e.beginPath(),e.moveTo(i,a),e.lineTo(i+Math.cos(c)*r,a+Math.sin(c)*r),e.stroke()}[.9,.62,.52,.14,.07].forEach(l=>{e.beginPath(),e.arc(i,a,r*l,0,Math.PI*2),e.stroke()}),e.beginPath(),e.arc(i,a,r*.14,0,Math.PI*2),e.fillStyle="#0a7a3c",e.fill(),e.beginPath(),e.arc(i,a,r*.07,0,Math.PI*2),e.fillStyle="#c4122f",e.fill(),e.fillStyle="#fff",e.font=`bold ${Math.max(10,t*.045)}px sans-serif`,e.textAlign="center",e.textBaseline="middle";for(let l=0;l<20;l++){const c=-Math.PI/2+l*Math.PI/10,p=i+Math.cos(c)*r*1.14,f=a+Math.sin(c)*r*1.14;e.fillText(String(It[l]),p,f)}for(const l of n)e.beginPath(),e.arc(i+l.nx*r,a+l.ny*r,4,0,Math.PI*2),e.fillStyle="#fff700",e.fill(),e.strokeStyle="#000",e.stroke()}function Rn(e,{onBack:t,onMain:n}){let i=0,a=Se,r="vertical",l=.5,c=.5,p=1,f=1,v=0,u=0;const o=[],b=1.35;e.innerHTML=`
    <div class="game-panel">
      <h2 class="game-title">다트 게임</h2>
      <p class="game-desc">바가 가운데 올 때 탭/스페이스로 멈추세요. (세로 → 가로)</p>
      <div class="dart-stats">
        <span id="dart-score">점수: 0</span>
        <span id="dart-throws">남은 횟수: ${Se}</span>
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
      ${Tn()}
    </div>
  `;const s=e.querySelector("#dart-canvas"),w=s.getContext("2d"),S=e.querySelector("#dart-score"),$=e.querySelector("#dart-throws"),k=e.querySelector("#dart-feedback"),m=e.querySelector("#dart-stop"),I=e.querySelector("#dart-retry"),T=e.querySelector("#aim-v"),A=e.querySelector("#aim-h"),D=e.querySelector(".aim-bar-v"),F=e.querySelector(".aim-bar-h");function B(){const d=Math.min(300,e.clientWidth||300);s.width=d,s.height=d,Te(w,d,o)}function G(){T.style.top=`${l*100}%`,A.style.left=`${c*100}%`,D.classList.toggle("active",r==="vertical"),F.classList.toggle("active",r==="horizontal")}function ne(d){u||(u=d);const h=Math.min(.05,(d-u)/1e3);u=d,r==="vertical"?(l+=p*b*h,l>=1&&(l=1,p=-1),l<=0&&(l=0,p=1)):r==="horizontal"&&(c+=f*b*h,c>=1&&(c=1,f=-1),c<=0&&(c=0,f=1)),G(),v=requestAnimationFrame(ne)}function ae(){const d=(l-.5)*2.05,h=(c-.5)*2.05,L=Bn(h,d);if(o.push({nx:h,ny:d}),i+=L.points,a-=1,S.textContent=`점수: ${i}`,$.textContent=`남은 횟수: ${a}`,Te(w,s.width,o),k.textContent=L.label,a<=0){r="done",m.classList.add("hidden"),I.classList.remove("hidden"),k.textContent=`게임 종료! 최종 ${i}점`;return}r="vertical",l=Math.random(),c=Math.random(),k.textContent="세로 바를 가운데에 맞춰 멈추세요!"}function y(d){var h;if((h=d==null?void 0:d.preventDefault)==null||h.call(d),r==="vertical"){r="horizontal",k.textContent="가로 바를 가운데에 맞춰 멈추세요!";return}r==="horizontal"&&(r="result",ae())}function M(d){(d.code==="Space"||d.key===" ")&&(d.preventDefault(),y(d))}function C(){i=0,a=Se,r="vertical",o.length=0,l=.2,c=.2,S.textContent="점수: 0",$.textContent=`남은 횟수: ${Se}`,k.textContent="세로 바를 가운데에 맞춰 멈추세요!",m.classList.remove("hidden"),I.classList.add("hidden"),Te(w,s.width,o)}return B(),G(),v=requestAnimationFrame(ne),m.addEventListener("click",y),m.addEventListener("touchstart",y,{passive:!1}),I.addEventListener("click",C),window.addEventListener("keydown",M),window.addEventListener("resize",B),Dn(e,t,n),()=>{cancelAnimationFrame(v),window.removeEventListener("keydown",M),window.removeEventListener("resize",B)}}const Y=12;function On(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function Un(e,t,n){var i,a;(i=e.querySelector('[data-nav="back"]'))==null||i.addEventListener("click",t),(a=e.querySelector('[data-nav="main"]'))==null||a.addEventListener("click",n)}function jn(e,{onBack:t,onMain:n}){let i=0,a=0,r=!1,l=!0,c=.08,p=.55,f=0,v=0,u=0,o=!1;e.innerHTML=`
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
      ${On()}
    </div>
  `;const b=e.querySelector("#cricket-canvas"),s=b.getContext("2d"),w=e.querySelector("#cricket-runs"),S=e.querySelector("#cricket-balls"),$=e.querySelector("#cricket-feedback"),k=e.querySelector("#cricket-swing"),m=e.querySelector("#cricket-retry"),I=.72,T=.09;function A(){const y=Math.min(320,Math.max(260,e.clientWidth-16||300));b.width=y,b.height=Math.round(y*1.3)}function D(){const y=b.width,M=b.height;s.clearRect(0,0,y,M),s.fillStyle="#6ec8ff",s.fillRect(0,0,y,M*.22),s.fillStyle="#3d8c3a",s.fillRect(0,M*.18,y,M*.12);for(let N=0;N<18;N++)s.fillStyle=`hsl(${N*47%360} 70% 45%)`,s.beginPath(),s.arc(10+N*(y/17),M*.22,6,0,Math.PI*2),s.fill();s.fillStyle="#4caf50",s.fillRect(0,M*.28,y,M*.72);const C=y*.28,d=(y-C)/2,h=M*.3,L=M*.58;s.fillStyle="#c4a574",s.beginPath(),s.moveTo(d+C*.15,h),s.lineTo(d+C*.85,h),s.lineTo(d+C,h+L),s.lineTo(d,h+L),s.closePath(),s.fill();const E=h+L*I;if(s.strokeStyle="#fff41a",s.lineWidth=3,s.setLineDash([6,4]),s.beginPath(),s.moveTo(d-8,E),s.lineTo(d+C+8,E),s.stroke(),s.setLineDash([]),s.fillStyle="#8d6e63",s.beginPath(),s.ellipse(y/2,h+18,10,14,0,0,Math.PI*2),s.fill(),s.fillStyle="#66bb6a",s.beginPath(),s.ellipse(y/2,h+L-10,16,22,0,0,Math.PI*2),s.fill(),s.save(),s.translate(y/2+14,h+L-18),s.rotate(f>0?-.9:-.2),s.fillStyle="#f5f5f5",s.fillRect(-4,-28,8,36),s.restore(),!l&&!o){const N=h+L*c,P=y/2+Math.sin(c*6)*4,Pe=7+c*4;s.beginPath(),s.arc(P,N,Pe,0,Math.PI*2),s.fillStyle="#ef5350",s.fill(),s.strokeStyle="#fff",s.lineWidth=1.5,s.stroke()}f>0&&(s.fillStyle="rgba(255,244,26,0.15)",s.fillRect(0,E-20,y,40))}function F(){if(a>=Y){o=!0,k.disabled=!0,k.classList.add("hidden"),m.classList.remove("hidden"),$.textContent=`경기 종료! 총 ${i}점`;return}l=!1,r=!1,c=.05,p=.48+Math.random()*.35,$.textContent="타이밍에 맞춰 스윙!"}function B(y){var h;if((h=y==null?void 0:y.preventDefault)==null||h.call(y),o||r||l)return;r=!0,f=.25,a+=1,S.textContent=`볼: ${a} / ${Y}`;const M=Math.abs(c-I);let C=0,d="헛스윙!";M<=T*.25?(C=6,d="식스! +6"):M<=T*.5?(C=4,d="포! +4"):M<=T*.75?(C=2,d="투런! +2"):M<=T&&(C=1,d="싱글! +1"),i+=C,w.textContent=`득점: ${i}`,$.textContent=d,l=!0,setTimeout(()=>{o||F(),a>=Y&&(o=!0,k.disabled=!0,k.classList.add("hidden"),m.classList.remove("hidden"),$.textContent=`경기 종료! 총 ${i}점`)},650)}function G(y){u||(u=y);const M=Math.min(.05,(y-u)/1e3);u=y,!l&&!o&&(c+=p*M,c>1.05&&(l=!0,r=!0,a+=1,S.textContent=`볼: ${a} / ${Y}`,$.textContent="놓침!",setTimeout(()=>{r=!1,a>=Y?(o=!0,k.disabled=!0,k.classList.add("hidden"),m.classList.remove("hidden"),$.textContent=`경기 종료! 총 ${i}점`):F()},500))),f>0&&(f-=M),D(),v=requestAnimationFrame(G)}function ne(){i=0,a=0,o=!1,r=!1,f=0,w.textContent="득점: 0",S.textContent=`볼: 0 / ${Y}`,k.disabled=!1,k.classList.remove("hidden"),m.classList.add("hidden"),F()}function ae(y){(y.code==="Space"||y.key===" ")&&(y.preventDefault(),B(y))}return A(),F(),v=requestAnimationFrame(G),k.addEventListener("click",B),k.addEventListener("touchstart",B,{passive:!1}),b.addEventListener("pointerdown",B),m.addEventListener("click",ne),window.addEventListener("keydown",ae),window.addEventListener("resize",A),Un(e,t,n),()=>{cancelAnimationFrame(v),window.removeEventListener("keydown",ae),window.removeEventListener("resize",A)}}function Fn(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function _n(e,t,n){var i,a;(i=e.querySelector('[data-nav="back"]'))==null||i.addEventListener("click",t),(a=e.querySelector('[data-nav="main"]'))==null||a.addEventListener("click",n)}const Hn=["#42a5f5","#ef5350","#ffee58","#66bb6a"],Wn=4,De=7;function Gn(e,{onBack:t,onMain:n}){let i=0,a=3,r=!1,l=0,c=0;const p={left:!1,right:!1};let f=320,v=420,u={x:0,y:0,w:70,h:12},o={x:0,y:0,r:6,vx:0,vy:0},b=[];e.innerHTML=`
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
      ${Fn()}
    </div>
  `;const s=e.querySelector("#bo-canvas"),w=s.getContext("2d"),S=e.querySelector("#bo-lives"),$=e.querySelector("#bo-score"),k=e.querySelector("#bo-feedback"),m=e.querySelector("#bo-start");function I(){f=Math.min(320,Math.max(260,e.clientWidth-16||300)),v=Math.round(f*1.3),s.width=f,s.height=v,u.y=v-36,u.w=f*.22}function T(){b=[];const d=4,h=56,L=(f-d*(De+1))/De,E=16;for(let N=0;N<Wn;N++)for(let P=0;P<De;P++)b.push({x:d+P*(L+d),y:h+N*(E+d),w:L,h:E,color:Hn[N],alive:!0})}function A(){u.x=(f-u.w)/2,o.x=f/2,o.y=u.y-20;const d=-Math.PI/3+Math.random()*(Math.PI/3),h=Math.min(f,v)*1.05;o.vx=Math.sin(d)*h,o.vy=-Math.abs(Math.cos(d)*h)}function D(){S.textContent=`생명: ${"●".repeat(a)}${"○".repeat(3-a)}`,$.textContent=`점수: ${String(i).padStart(5,"0")}`}function F(){w.fillStyle="#1a1030",w.fillRect(0,0,f,v);for(const d of b)d.alive&&(w.fillStyle=d.color,B(w,d.x,d.y,d.w,d.h,4),w.fill());w.fillStyle="#fff",B(w,u.x,u.y,u.w,u.h,6),w.fill(),w.beginPath(),w.arc(o.x,o.y,o.r,0,Math.PI*2),w.fillStyle="#fff",w.fill()}function B(d,h,L,E,N,P){d.beginPath(),d.moveTo(h+P,L),d.arcTo(h+E,L,h+E,L+N,P),d.arcTo(h+E,L+N,h,L+N,P),d.arcTo(h,L+N,h,L,P),d.arcTo(h,L,h+E,L,P),d.closePath()}function G(d){c||(c=d);const h=Math.min(.033,(d-c)/1e3);if(c=d,r){const L=f*1.6*h;if(p.left&&(u.x-=L),p.right&&(u.x+=L),u.x=Math.max(0,Math.min(f-u.w,u.x)),o.x+=o.vx*h,o.y+=o.vy*h,o.x<o.r&&(o.x=o.r,o.vx*=-1),o.x>f-o.r&&(o.x=f-o.r,o.vx*=-1),o.y<o.r&&(o.y=o.r,o.vy*=-1),o.vy>0&&o.y+o.r>=u.y&&o.y-o.r<=u.y+u.h&&o.x>=u.x&&o.x<=u.x+u.w){o.y=u.y-o.r;const E=(o.x-(u.x+u.w/2))/(u.w/2),N=Math.hypot(o.vx,o.vy)*1.015,P=E*1.1;o.vx=Math.sin(P)*N,o.vy=-Math.abs(Math.cos(P)*N)}for(const E of b)if(E.alive&&o.x+o.r>E.x&&o.x-o.r<E.x+E.w&&o.y+o.r>E.y&&o.y-o.r<E.y+E.h){E.alive=!1,i+=10,D();const N=o.x+o.r-E.x,P=E.x+E.w-(o.x-o.r),Pe=o.y+o.r-E.y,Mt=E.y+E.h-(o.y-o.r),Nt=Math.min(N,P),At=Math.min(Pe,Mt);Nt<At?o.vx*=-1:o.vy*=-1;break}b.every(E=>!E.alive)&&(r=!1,k.textContent=`클리어! 점수 ${i}`),o.y>v+20&&(a-=1,D(),a<=0?(r=!1,k.textContent=`게임 오버 · ${i}점`):(A(),k.textContent="생명 -1! 계속…"))}F(),l=requestAnimationFrame(G)}function ne(){i=0,a=3,r=!0,T(),A(),D(),k.textContent="화이팅!"}function ae(d){const h=s.getBoundingClientRect(),L=(d-h.left)/h.width*f;u.x=Math.max(0,Math.min(f-u.w,L-u.w/2))}function y(d){var L;d.preventDefault();const h=((L=d.touches)==null?void 0:L[0])||d;ae(h.clientX)}function M(d){(d.key==="ArrowLeft"||d.key==="a"||d.key==="A")&&(p.left=!0),(d.key==="ArrowRight"||d.key==="d"||d.key==="D")&&(p.right=!0)}function C(d){(d.key==="ArrowLeft"||d.key==="a"||d.key==="A")&&(p.left=!1),(d.key==="ArrowRight"||d.key==="d"||d.key==="D")&&(p.right=!1)}return I(),T(),A(),D(),F(),l=requestAnimationFrame(G),m.addEventListener("click",ne),s.addEventListener("pointerdown",y),s.addEventListener("pointermove",d=>{(d.buttons||d.pressure>0)&&y(d)}),s.addEventListener("touchstart",y,{passive:!1}),s.addEventListener("touchmove",y,{passive:!1}),window.addEventListener("keydown",M),window.addEventListener("keyup",C),window.addEventListener("resize",I),_n(e,t,n),()=>{cancelAnimationFrame(l),window.removeEventListener("keydown",M),window.removeEventListener("keyup",C),window.removeEventListener("resize",I)}}const g=document.getElementById("app");let R=null,X=null,_=null,se=null,it=!1;const rt=new Set(["rest","game-dart","game-cricket","game-breakout","admin"]),Vn={login:Jn,main:Yn,help:Qn,profile:Xn,grade:ta,subject:na,calculator:aa,rest:ia,admin:Zn,"game-dart":()=>Be("dart"),"game-cricket":()=>Be("cricket"),"game-breakout":()=>Be("breakout")};Kn();function Kn(){rn().then(()=>pt()).finally(()=>{x(bt()?"main":"login")})}function x(e,t={}){se&&(se(),se=null),it&&!rt.has(e)&&gn(),e!=="login"&&!bt()&&(e="login",t={});const n=Vn[e];n&&(g.innerHTML="",n(t),it=rt.has(e),window.scrollTo(0,0))}function J(e){e.querySelectorAll("[data-action]").forEach(t=>{t.addEventListener("click",()=>zn(t.dataset.action))})}function zn(e){if(e==="main"){R=null,X=null,_=null,x("main");return}if(e==="grade"){X=null,_=null,x("grade");return}if(e==="help"&&x("help"),e==="profile"&&x("profile"),e==="logout"){if(!Oe(Q()))return;Qt().finally(()=>x("login"));return}if(e==="rest"&&x("rest"),e==="admin"){he()&&x("admin");return}if(e==="subject"&&x("subject",{grade:R}),e==="game-dart"&&x("game-dart"),e==="game-cricket"&&x("game-cricket"),e==="game-breakout"&&x("game-breakout"),e.startsWith("pick-grade-")){R=Number(e.replace("pick-grade-","")),X=null,_=null,x("subject",{grade:R});return}if(e.startsWith("pick-subject-")){const t=decodeURIComponent(e.replace("pick-subject-",""));X=t;const n=kt(R,t);_=(n.length===1,n[0]),x("calculator",{grade:R,subject:t,semester:_});return}e.startsWith("pick-semester-")&&(_=Number(e.replace("pick-semester-","")),x("calculator",{grade:R,subject:X,semester:_}))}function Jn(){let e="login";const t=()=>{var $,k;const n=e==="register";g.innerHTML=j(`
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
          <p class="muted login-hint">학생 예: 20261111@haeyeon.ms.kr<br/>관리자: alyssabell729@gmail.com<br/>가입 후 메일 인증 링크를 눌러야 로그인됩니다.<br/>인증 메일이 스팸함에 있을 수 있으니 스팸함도 확인해 주세요.</p>
          <p class="warn hidden" id="login-error"></p>
          <p class="ok-msg hidden" id="login-ok"></p>
          <div class="login-verify-actions hidden" id="verify-actions">
            <button type="button" class="link-btn" id="verify-refresh">인증 완료했어요</button>
            <button type="button" class="link-btn" id="verify-resend">인증 메일 다시 받기</button>
          </div>
        </div>
        ${oe(O.footer)}
      </div>
    `);const i=g.querySelector("#login-error"),a=g.querySelector("#login-ok"),r=g.querySelector("#verify-actions"),l=g.querySelector("#login-email"),c=g.querySelector("#login-name"),p=g.querySelector("#login-password"),f=g.querySelector("#login-password2"),v=g.querySelector("#login-submit"),u=m=>{a.classList.add("hidden"),i.textContent=m,i.classList.remove("hidden")},o=m=>{i.classList.add("hidden"),a.textContent=m,a.classList.remove("hidden")},b=(m,I)=>{v.disabled=m,m?(v.dataset.label=v.textContent,v.textContent=n?"가입 중…":"로그인 중…"):v.dataset.label&&(v.textContent=v.dataset.label)};g.querySelectorAll("[data-mode]").forEach(m=>{m.addEventListener("click",()=>{e=m.dataset.mode,t()})});const s=m=>{const I=Fe(m);K({type:"user_login",message:`로그인: ${I}`,account:m.account,displayName:m.displayName||"",studentId:m.studentId||""}),he()&&K({type:"admin_login",message:"관리자 계정 로그인 — 관리자 모드 자동 활성화",account:m.account}),x("main"),pt()},w=m=>{o(m.error),r.classList.remove("hidden")},S=async()=>{i.classList.add("hidden"),a.classList.add("hidden"),r.classList.add("hidden"),b(!0);try{if(e==="register"){if(p.value!==((f==null?void 0:f.value)||"")){u("비밀번호 확인이 일치하지 않습니다.");return}const I=await Zt(l.value,p.value,(c==null?void 0:c.value)||"");if(I.needVerify){w(I);return}if(!I.ok){u(I.error);return}s(I.user);return}const m=await en(l.value,p.value);if(m.needVerify){w(m);return}if(!m.ok){u(m.error);return}s(m.user)}finally{b(!1)}};v.addEventListener("click",S),[l,c,p,f].filter(Boolean).forEach(m=>{m.addEventListener("keydown",I=>{I.key==="Enter"&&S()})}),($=g.querySelector("#verify-refresh"))==null||$.addEventListener("click",async()=>{b(!0);const m=await nn();if(b(!1),m.needVerify){w(m);return}if(!m.ok){u(m.error);return}s(m.user)}),(k=g.querySelector("#verify-resend"))==null||k.addEventListener("click",async()=>{const m=await an();if(!m.ok){u(m.error);return}o(m.message),r.classList.remove("hidden")})};t()}function Yn(){const e=pn(),t=Fe()||Q()||"",n=Oe(Q());g.innerHTML=j(`
    <div class="main-screen">
      <button type="button" class="help-btn" data-action="help" aria-label="앱 정보">?</button>
      <div class="main-header">
        <div class="title-block">
          ${Pn()}
          <h1 class="app-title">${O.title}</h1>
        </div>
        <p class="app-subtitle">${O.subtitle}</p>
        <p class="main-quote">"${e}"</p>
      </div>
      <div class="main-body">
        <p class="login-user muted">${V(t)}</p>
        <button type="button" class="link-btn" data-action="profile">내 정보 수정</button>
        ${n?'<button type="button" class="link-btn" data-action="logout">로그아웃</button>':""}
        <button type="button" class="go-btn" data-action="grade" aria-label="시작">
          ${qn()}
          <span class="go-text">GO</span>
        </button>
      </div>
      <p class="main-footer">${O.footer}</p>
    </div>
  `),J(g)}function Xn(){const e=z(),t=Oe(e==null?void 0:e.account);g.innerHTML=j(`
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
  `);const n=g.querySelector("#profile-error"),i=g.querySelector("#profile-ok"),a=g.querySelector("#profile-name"),r=g.querySelector("#profile-sid"),l=g.querySelector("#profile-save");l.addEventListener("click",async()=>{n.classList.add("hidden"),i.classList.add("hidden"),l.disabled=!0;const c=await tn({displayName:a.value,studentId:r.value});if(l.disabled=!1,!c.ok){n.textContent=c.error,n.classList.remove("hidden");return}i.textContent="저장되었습니다.",i.classList.remove("hidden"),K({type:"profile_update",message:`정보 수정: ${Fe(c.user)}`,displayName:c.user.displayName,studentId:c.user.studentId})}),J(g)}function Qn(){const e=le();g.innerHTML=j(`
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
        ${he()?'<p class="success"><button type="button" class="link-btn" data-action="admin">관리자 패널 열기</button></p>':""}
      </div>
      ${te()}
      <p class="muted login-hint" style="text-align:center;margin-top:auto;padding:12px 8px 4px">${O.subtitle}</p>
    </div>
  `),J(g)}function Zn(){var p,f,v,u,o;if(!he()){x("help");return}const e=H(),t=un(),n=e.standardScale,i=e.artsScale,a=t.configured?`Firebase 연결됨 (${t.projectId})`:"Firebase 미설정 — src/firebase-config.js 에 키를 넣어주세요",r=t.isCloudAdmin?`클라우드 관리자 계정으로 로그인됨 (${t.adminEmail}) — 전체 기록 조회·설정 저장 가능`:`클라우드 전체 기록/설정 수정은 ${t.adminEmail} 로 로그인한 뒤에만 가능합니다. (지금: ${t.account||"미로그인"})`;g.innerHTML=j(`
    <div class="stack-screen admin-screen">
      <h2 class="screen-title">관리자 모드</h2>
      <p class="screen-desc">기기 ID: ${pe()}</p>
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
          ${n.map((b,s)=>`
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
        <button type="button" class="link-btn" data-action="main">메인으로</button>
        ${te()}
      </div>
      ${oe("ADMIN")}
    </div>
  `),J(g);let l=Ve();async function c(){const b=g.querySelector("#adm-logs"),s=g.querySelector("#adm-log-count");b&&(b.innerHTML='<p class="muted">불러오는 중…</p>');const w=await on();if(l=w.logs,s&&(s.textContent=`(${l.length} · ${w.source}${w.error?" · 오류":""})`),!!b){if(l.length===0){b.innerHTML='<p class="muted">아직 기록이 없습니다.</p>';return}b.innerHTML=l.slice(0,120).map(S=>{const $=[S.displayName,S.studentId,S.account||S.deviceId].filter(Boolean).join(" · ");return`
      <article class="admin-log-item">
        <header>${V($)} · ${V(S.type)} · ${ea(S.at)}</header>
        <p>${V(S.message||"")}</p>
        ${S.detail?`<pre>${V(typeof S.detail=="string"?S.detail:JSON.stringify(S.detail,null,0))}</pre>`:""}
      </article>
    `}).join("")}}c(),(p=g.querySelector("#adm-refresh-logs"))==null||p.addEventListener("click",()=>c()),(f=g.querySelector("#adm-save"))==null||f.addEventListener("click",async()=>{var $,k;const b=Number(($=g.querySelector("#adm-unlock"))==null?void 0:$.value),s=!!((k=g.querySelector("#adm-free-games"))!=null&&k.checked),w=[...g.querySelectorAll('[data-scale="std"]')].map(m=>({letter:m.dataset.letter,min:Number(m.value)||0})),S=[...g.querySelectorAll('[data-scale="arts"]')].map(m=>({letter:m.dataset.letter,min:Number(m.value)||0}));ln({restUnlockUses:Number.isFinite(b)&&b>0?b:8,freeGames:s,standardScale:w,artsScale:S}),window.alert(q()?"설정을 저장했고 클라우드에도 올렸습니다.":"설정을 이 기기에 저장했습니다. (Firebase 미설정)"),x("admin")}),(v=g.querySelector("#adm-feedback-save"))==null||v.addEventListener("click",()=>{var s,w;const b=(w=(s=g.querySelector("#adm-feedback"))==null?void 0:s.value)==null?void 0:w.trim();if(!b){window.alert("내용을 입력하세요.");return}K({type:"game_feedback",message:b}),window.alert("피드백을 저장했습니다."),x("admin")}),(u=g.querySelector("#adm-export"))==null||u.addEventListener("click",async()=>{const b=dn(l);try{await navigator.clipboard.writeText(b),window.alert("기록이 클립보드에 복사되었습니다.")}catch{window.prompt("아래 내용을 복사하세요",b)}}),(o=g.querySelector("#adm-clear-logs"))==null||o.addEventListener("click",async()=>{window.confirm("로컬+클라우드 활동 기록을 비울까요?")&&(await cn({cloud:!0}),x("admin"))})}function V(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function ea(e){try{const t=new Date(e);return`${t.getMonth()+1}/${t.getDate()} ${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`}catch{return e}}function ta(){const e=we(),t=wt();g.innerHTML=j(`
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
  `),J(g)}function na({grade:e}){if(!e||!me(e)){x("grade");return}R=e;const t=me(e),n=wn(e);g.innerHTML=j(`
    <div class="stack-screen ${xt(e)}">
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
  `),J(g),Et(g)}function aa({grade:e,subject:t,semester:n}){if(!e||!t||!n){x("subject",{grade:R});return}R=e,X=t,_=n;const i=me(e),a=kt(e,t),r=vn(e,t,n),l=nt(e,t,n),c={},p=a.length>1?`<div class="semester-tabs">
          ${a.map(o=>`<button type="button" class="semester-tab ${o===n?"active":""}" data-action="pick-semester-${o}">${nt(e,t,o)}</button>`).join("")}
        </div>`:`<p class="semester-only">${l}</p>`;g.innerHTML=j(`
    <div class="stack-screen calculator-screen ${xt(e)}">
      ${ee("globe globe-small")}
      <h2 class="screen-title subject-title">${t}</h2>
      <p class="screen-desc">${i.label} · ${l}${Ye(t)?" · 예체능(A·B·C)":" · 일반(A~E)"}</p>
      ${Lt(t)}
      ${p}
      <form id="calc-form" class="calc-form"></form>
      <button type="submit" form="calc-form" class="btn-calc">계산하기</button>
      <div id="calc-result" class="calc-result hidden"></div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="subject">과목 선택으로</button>
        ${te()}
      </div>
      ${oe(O.subtitle)}
    </div>
  `);const f=g.querySelector("#calc-form");let v="";for(const o of r){if(o.kind!==v){v=o.kind;const s=document.createElement("h3");s.className="section-heading",s.textContent=o.kind==="exam"?"지필고사":"수행평가",f.appendChild(s)}const b=document.createElement("label");b.className="score-row",b.innerHTML=`
      <span>${o.label} <em>${o.weight}%</em></span>
      <input type="number" min="0" max="100" step="0.1" inputmode="decimal"
        name="${o.key}" placeholder="점수" />
    `,f.appendChild(b)}const u=g.querySelector("#calc-result");f.addEventListener("submit",o=>{var I,T;o.preventDefault();const b=new FormData(f);for(const A of r)c[A.key]=b.get(A.key);const s=Cn(r,c,t);if(!s){u.classList.remove("hidden"),u.innerHTML='<p class="warn">최소 1개 이상 점수를 입력하세요.</p>';return}const w=mn(t);K({type:"calc",message:`${e}학년 ${t} (${l}) → ${s.rounded}점 ${ue(s.letter)}`,detail:{grade:e,subject:t,semester:n,scores:c,rounded:s.rounded,letter:s.letter,average:s.average}});let S="";((I=s.needed)==null?void 0:I.needed)!=null?S=`<p>상위 <strong>${ue(s.needed.targetLetter)}</strong>까지 남은 항목 평균 <strong>${s.needed.needed}점</strong> 이상</p>`:(T=s.needed)!=null&&T.message&&(S=`<p>${s.needed.message}</p>`);let $="";if(s.projection.remainingCount>0&&s.letter===s.projLetter){const A=ue(s.letter);let D="";s.confirmMin&&(s.confirmMin.minScore<=0?D=`<p>남은 항목이 <strong>0점</strong>이어도 ${A} 유지</p>`:D=`<p>남은 항목 각각 최소 <strong>${s.confirmMin.minScore}점</strong> 이상이면 ${A} 유지</p>`),$=`
        <p><strong>${A} 확정입니다.</strong></p>
        ${D}
      `}let k="";xn(s)&&(k=`<p class="cheer-msg">${In()}</p>`);let m="";w.justUnlocked?m=`<p class="success">서로 다른 과목 ${le()}개 달성! 학년 선택에서 휴식 미니게임 이용</p>`:we()?m='<p class="success">휴식 미니게임 이용 가능 (학년 선택 화면)</p>':w.isNew?m=`<p class="muted">${wt()}</p>`:m='<p class="muted">이미 계산한 과목입니다. 다른 과목을 계산하면 해금에 가까워져요.</p>',u.classList.remove("hidden"),u.innerHTML=`
      <h3>${t} 결과</h3>
      <p>총점(반올림) <strong>${s.rounded}점</strong> · <strong>${ue(s.letter)}</strong></p>
      <p class="muted">가중 평균 ${s.average.toFixed(1)}점</p>
      <p>남은 항목 100점 시 <strong>${s.projRounded}점</strong> · <strong>${ue(s.projLetter)}</strong></p>
      ${$}
      ${k}
      ${S}
      ${m}
    `}),J(g),Et(g)}function ia(){if(!we()){x("grade");return}g.innerHTML=j(`
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
  `),J(g)}function Be(e){if(!we()){x("grade");return}K({type:"game_open",message:`미니게임 시작: ${e}${Ae()?" (관리자)":""}`,detail:{type:e}}),g.innerHTML=j('<div id="game-root"></div>',"game-screen");const t=g.querySelector("#game-root"),n={onBack:()=>x("rest"),onMain:()=>{R=null,X=null,_=null,x("main")}};e==="dart"?se=Rn(t,n)??null:e==="cricket"?se=jn(t,n)??null:e==="breakout"&&(se=Gn(t,n)??null)}
