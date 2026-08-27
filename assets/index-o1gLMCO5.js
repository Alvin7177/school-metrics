(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();const lt=8,W={title:"SCHOOL METRICS",subtitle:"철저한 내신관리 시스템",footer:"for 해연중 학생들",creator:"2210 박민호"},me={apiKey:"AIzaSyB7YJBfYa9zGnUvLD4DFgR5KLiNKuluHJM",authDomain:"school-metrics-fdee3.firebaseapp.com",projectId:"school-metrics-fdee3",storageBucket:"school-metrics-fdee3.firebasestorage.app",messagingSenderId:"378255554733",appId:"1:378255554733:web:01b06dca5b5307860eae24",measurementId:"G-0BL416S3QD"},le="alyssabell729@gmail.com",Dt=[le,"20251413@haeyeon.ms.kr"];function x(){return!!(me.apiKey&&me.projectId&&me.appId)}function Ue(e){return String(e||"").trim().toLowerCase()===le.toLowerCase()}function Re(e){const t=String(e||"").trim().toLowerCase();return Dt.some(n=>n.toLowerCase()===t)}const Ut="https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js",R="https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js",re="https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";let ue=null,he=null,fe=null,ye=null;async function ot(){return x()?ue||(ye||(ye=(async()=>{const{initializeApp:e,getApps:t}=await import(Ut);return ue=t().length?t()[0]:e(me),ue})().catch(e=>(console.warn("[firebase] app init failed",e),ye=null,ue=null,null))),ye):null}async function H(){if(!x())return null;if(await ge(),he)return he;const e=await ot();if(!e)return null;const{getFirestore:t}=await import(R);return he=t(e),he}async function ge(){if(!x())return null;if(fe)return fe;const e=await ot();if(!e)return null;const{getAuth:t,setPersistence:n,browserLocalPersistence:r}=await import(re);fe=t(e);try{await n(fe,r)}catch(a){console.warn("[firebase] auth persistence",a)}return fe}function ct(e){const t=(e==null?void 0:e.code)||"";return{"auth/email-already-in-use":"이미 가입된 계정입니다. 로그인하세요.","auth/invalid-email":"이메일 형식이 올바르지 않습니다.","auth/weak-password":"비밀번호는 6자 이상이어야 합니다.","auth/user-not-found":"가입되지 않은 계정입니다. 먼저 회원가입하세요.","auth/wrong-password":"비밀번호가 틀렸습니다.","auth/invalid-credential":"이메일 또는 비밀번호가 올바르지 않습니다.","auth/too-many-requests":"시도가 너무 많습니다. 잠시 후 다시 시도하세요.","auth/network-request-failed":"네트워크 오류입니다. 연결을 확인하세요.","auth/operation-not-allowed":"Firebase에서 이메일/비밀번호 로그인을 켜야 합니다.","auth/missing-email":"이메일을 입력하세요."}[t]||(e==null?void 0:e.message)||"인증에 실패했습니다."}async function Rt(e,t){const n=await ge();if(!n)throw new Error("Firebase가 설정되지 않았습니다.");const{createUserWithEmailAndPassword:r,sendEmailVerification:a}=await import(re);try{const s=await r(n,e,t);try{await a(s.user)}catch(l){console.warn("[firebase] verification mail",l)}return s.user}catch(s){throw s.friendlyMessage=ct(s),s}}async function Ft(e,t){const n=await ge();if(!n)throw new Error("Firebase가 설정되지 않았습니다.");const{signInWithEmailAndPassword:r}=await import(re);try{return(await r(n,e,t)).user}catch(a){throw a.friendlyMessage=ct(a),a}}async function ve(){const e=await ge();if(!e)return;const{signOut:t}=await import(re);await t(e)}async function Le(){const e=await ge();if(!e)return null;if(e.currentUser)return e.currentUser;const{onAuthStateChanged:t}=await import(re);return new Promise(n=>{const r=t(e,a=>{r(),n(a||null)})})}async function Ot(){const e=await Le();return e?(await e.reload(),e):null}async function _t(){const e=await Le();if(!e)throw new Error("로그인된 사용자가 없습니다.");const{sendEmailVerification:t}=await import(re);await t(e)}async function Bt(e){const t=await Le();if(!t)return;const{updateProfile:n}=await import(re);await n(t,e)}async function dt(e,t){if(!e)return!1;const n=await H();if(!n)return!1;const{doc:r,setDoc:a,serverTimestamp:s}=await import(R),l={...t};return Object.keys(l).forEach(c=>{l[c]===void 0&&delete l[c]}),await a(r(n,"userProfiles",e),{...l,updatedAt:s()},{merge:!0}),!0}async function Ht(e){if(!e)return null;const t=await H();if(!t)return null;const{doc:n,getDoc:r}=await import(R),a=await r(n(t,"userProfiles",e));if(!a.exists())return null;const s=a.data();return delete s.updatedAt,s}async function Gt(){const e=await H();if(!e)return[];const{collection:t,getDocs:n}=await import(R);return(await n(t(e,"userProfiles"))).docs.map(a=>({id:a.id,uid:a.id,...a.data()}))}async function Wt(e){if(!e)return!1;const t=await H();if(!t)return!1;const{doc:n,deleteDoc:r}=await import(R);return await r(n(t,"userProfiles",e)),!0}async function Kt(e){const t=String(e||"").trim().toLowerCase();if(!t)return!1;const n=await H();if(!n)return!1;const{doc:r,setDoc:a,serverTimestamp:s}=await import(R);return await a(r(n,"blockedAccounts",t),{account:t,blockedAt:s()}),!0}async function ut(e){const t=String(e||"").trim().toLowerCase();if(!t)return!1;const n=await H();if(!n)return!1;const{doc:r,getDoc:a}=await import(R);return(await a(r(n,"blockedAccounts",t))).exists()}async function Vt(e){const t=await H();if(!t)return null;const{collection:n,addDoc:r,serverTimestamp:a}=await import(R),s={...e};return Object.keys(s).forEach(c=>{s[c]===void 0&&delete s[c]}),(await r(n(t,"activityLogs"),{...s,createdAt:a()})).id}async function zt(e=200){const t=await H();if(!t)return[];const{collection:n,query:r,orderBy:a,limit:s,getDocs:l}=await import(R),c=r(n(t,"activityLogs"),a("at","desc"),s(e));return(await l(c)).docs.map(m=>({id:m.id,...m.data()}))}async function Jt(){const e=await H();if(!e)return 0;const{collection:t,getDocs:n,deleteDoc:r,query:a,limit:s}=await import(R);let l=0;for(;;){const c=await n(a(t(e,"activityLogs"),s(100)));if(c.empty||(await Promise.all(c.docs.map(u=>r(u.ref))),l+=c.size,c.size<100))break}return l}async function Yt(e){const t=await H();if(!t)return!1;const{doc:n,setDoc:r,serverTimestamp:a}=await import(R),s={...e};return Object.keys(s).forEach(l=>{s[l]===void 0&&delete s[l]}),await r(n(t,"adminSettings","global"),{...s,updatedAt:a()}),!0}async function Xt(){const e=await H();if(!e)return null;const{doc:t,getDoc:n}=await import(R),r=await n(t(e,"adminSettings","global"));if(!r.exists())return null;const a=r.data();return delete a.updatedAt,a}const Ne="schoolMetricsUserAccount",Qt=new Set(["2024","2025","2026"]),Zt=/^(\d{4})(\d{4})@haeyeon\.ms\.kr$/i,et=6;function ft(e){return String(e||"").trim().toLowerCase().replace(/\uFF20/g,"@").replace(/[\u200B-\u200D\uFEFF]/g,"").replace(/\s+/g,"")}function en(e){const n=ft(e).match(Zt);if(!n)return{ok:!1,error:"해연중 계정(예: 20261111@haeyeon.ms.kr) 형식으로 입력하세요."};const r=n[1],a=n[2],s=Se(a);return s.ok?Qt.has(r)?{ok:!0,account:`${r}${s.studentId}@haeyeon.ms.kr`,year:r,studentId:s.studentId,grade:s.grade,classNo:s.classNo,number:s.number,isAdminAccount:!1}:{ok:!1,error:"년도는 2024, 2025, 2026만 가능합니다."}:s}function Ae(e){const t=ft(e);return Ue(t)||t===le.toLowerCase()?{ok:!0,account:le.toLowerCase(),year:"admin",studentId:"admin",grade:0,classNo:0,number:0,isAdminAccount:!0}:t.includes("@")&&!t.endsWith("@haeyeon.ms.kr")?t.includes("alyssa")||t.endsWith("@gmail.com")?{ok:!1,error:`관리자 계정은 ${le} 만 사용할 수 있습니다. 철자를 확인해 주세요.`}:{ok:!1,error:"학생은 @haeyeon.ms.kr 계정만 사용할 수 있습니다."}:en(t)}function Se(e){const t=String(e||"").trim();if(!/^\d{4}$/.test(t))return{ok:!1,error:"학번은 숫자 4자리여야 합니다. (예: 1111)"};const n=t[0],r=t[1],a=Number(t.slice(2));return["1","2","3"].includes(n)?"12345678".includes(r)?!Number.isInteger(a)||a<1||a>35?{ok:!1,error:"번호는 01~35만 가능합니다."}:{ok:!0,studentId:t,grade:Number(n),classNo:Number(r),number:a}:{ok:!1,error:"학번 둘째 자리(반)는 1~8만 가능합니다."}:{ok:!1,error:"학번 첫 자리(학년)는 1·2·3만 가능합니다."}}function mt(e){const t=String(e||"").trim().replace(/\s+/g," ");return t.length<2?{ok:!1,error:"이름은 2글자 이상 입력하세요."}:t.length>20?{ok:!1,error:"이름은 20글자 이하로 입력하세요."}:{ok:!0,displayName:t}}function bt(e){return String(e||"").length<et?{ok:!1,error:`비밀번호는 ${et}자 이상이어야 합니다.`}:{ok:!0}}function Fe(e){return localStorage.setItem(Ne,JSON.stringify(e)),e}function gt(e,t={}){return{account:e.account,year:e.year,studentId:e.studentId,grade:e.grade,classNo:e.classNo,number:e.number,displayName:t.displayName||"",loggedInAt:new Date().toISOString(),viaPassword:!0,...t}}function G(){try{const e=localStorage.getItem(Ne);if(!e)return null;const t=JSON.parse(e);return t!=null&&t.account&&Ae(t.account).ok?t:null}catch{return null}}function pt(){return!!G()}function de(){var e;return((e=G())==null?void 0:e.account)||null}function tn(){var e;return((e=G())==null?void 0:e.displayName)||""}function nn(){var e;return((e=G())==null?void 0:e.studentId)||""}function Oe(e=G()){if(!e)return"";const t=[];return e.year&&e.year!=="admin"&&t.push(String(e.year)),e.studentId&&e.studentId!=="admin"&&t.push(e.studentId),e.displayName&&t.push(e.displayName),t.join(" · ")||e.account||""}function an(){var e;return((e=G())==null?void 0:e.year)||""}async function rn(){localStorage.removeItem(Ne);try{await ve()}catch{}}async function ht(e,t){if(e){try{await Bt({displayName:t.displayName||""})}catch(n){console.warn("[auth] updateProfile",n)}try{await dt(e,{displayName:t.displayName||"",studentId:t.studentId||"",year:t.year||"",account:t.account||"",grade:t.grade,classNo:t.classNo,number:t.number,uniqueSubjectCount:t.uniqueSubjectCount??0,gameUnlockCount:t.gameUnlockCount??0})}catch(n){console.warn("[auth] cloud profile",n)}}}async function _e(e,{requireVerified:t=!0}={}){const n=e==null?void 0:e.email;if(!n)return await ve().catch(()=>{}),{ok:!1,error:"계정 이메일을 가져오지 못했습니다."};const r=Ae(n);if(!r.ok)return await ve().catch(()=>{}),r;if(t&&!e.emailVerified&&!r.isAdminAccount)return{ok:!1,needVerify:!0,error:"학교 메일함에서 인증 메일의 링크를 눌러주세요. (스팸함도 확인)",account:r.account};let a=String(e.displayName||"").trim(),s=r.studentId,l=r.grade,c=r.classNo,u=r.number;try{const f=await Ht(e.uid);if(f!=null&&f.displayName&&(a=String(f.displayName).trim()),f!=null&&f.studentId){const o=Se(f.studentId);o.ok&&(s=o.studentId,l=o.grade,c=o.classNo,u=o.number)}}catch(f){console.warn("[auth] load profile",f)}const m=G();if((m==null?void 0:m.account)===r.account&&(!a&&m.displayName&&(a=m.displayName),m.studentId)){const f=Se(m.studentId);f.ok&&s===r.studentId&&m.studentId!==r.studentId&&(s=f.studentId,l=f.grade,c=f.classNo,u=f.number)}return{ok:!0,user:Fe(gt({...r,studentId:s,grade:l,classNo:c,number:u},{uid:e.uid||null,emailVerified:!!e.emailVerified,displayName:a,isAdminAccount:!!r.isAdminAccount}))}}async function sn(e,t,n){if(!x())return{ok:!1,error:"Firebase 설정이 없습니다."};const r=mt(n);if(!r.ok)return r;const a=Ae(e);if(!a.ok)return a;const s=bt(t);if(!s.ok)return s;try{if(await ut(a.account))return{ok:!1,error:"관리자에 의해 삭제·차단된 계정입니다. 다시 가입할 수 없습니다."};const l=await Rt(a.account,t);return await ht(l.uid,{displayName:r.displayName,studentId:a.studentId,year:a.year,account:a.account,grade:a.grade,classNo:a.classNo,number:a.number,uniqueSubjectCount:0,gameUnlockCount:0}),Fe(gt(a,{uid:l.uid,displayName:r.displayName,emailVerified:!1})),{ok:!1,needVerify:!0,registered:!0,account:a.account,displayName:r.displayName,error:"가입되었습니다. 학교 메일함의 인증 링크를 누른 뒤 로그인하세요. (스팸함도 확인)",uid:l==null?void 0:l.uid}}catch(l){return{ok:!1,error:l.friendlyMessage||l.message||"회원가입 실패"}}}async function ln(e,t){if(!x())return{ok:!1,error:"Firebase 설정이 없습니다."};const n=Ae(e);if(!n.ok)return n;const r=bt(t);if(!r.ok)return r;try{const a=await Ft(n.account,t);if(await a.reload(),await ut(n.account))return await ve().catch(()=>{}),{ok:!1,error:"관리자에 의해 삭제·차단된 계정입니다."};const s=await _e(a,{requireVerified:!n.isAdminAccount});return s.ok,s}catch(a){const s=(a==null?void 0:a.code)||"";return n.isAdminAccount&&(s==="auth/user-not-found"||s==="auth/invalid-credential")?{ok:!1,error:"관리자 계정이 없거나 비밀번호가 틀렸습니다. 회원가입을 먼저 했는지 확인하세요."}:n.isAdminAccount&&s==="auth/wrong-password"?{ok:!1,error:"관리자 비밀번호가 틀렸습니다."}:{ok:!1,error:a.friendlyMessage||a.message||"로그인 실패"}}}async function on({displayName:e,studentId:t}){const n=G();if(!n)return{ok:!1,error:"로그인이 필요합니다."};const r=mt(e);if(!r.ok)return r;const a=Se(t);if(!a.ok)return a;const s=Fe({...n,displayName:r.displayName,studentId:a.studentId,grade:a.grade,classNo:a.classNo,number:a.number});return await ht(n.uid,{displayName:s.displayName,studentId:s.studentId,year:s.year,account:s.account,grade:s.grade,classNo:s.classNo,number:s.number}),{ok:!0,user:s}}async function cn(){try{const e=await Ot();if(!e)return{ok:!1,error:"먼저 로그인(비밀번호)을 다시 시도하세요."};const t=await _e(e,{requireVerified:!0});return t.ok,t}catch(e){return{ok:!1,error:e.message||"인증 상태 확인 실패"}}}async function dn(){try{return await _t(),{ok:!0,message:"인증 메일을 다시 보냈습니다. 메일함·스팸함을 확인하세요."}}catch(e){return{ok:!1,error:e.message||"인증 메일 재전송 실패"}}}async function un(){if(!x())return we(),null;try{const e=await Le();if(!e)return we(),null;await e.reload();const t=await _e(e,{requireVerified:!0});return t.ok?t.user:(we(),null)}catch(e){return console.warn("[auth] restore",e),we(),null}}function we(){localStorage.removeItem(Ne)}const tt="schoolMetricsDeviceId";function Be(){let e=localStorage.getItem(tt);return e||(e=`dev-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,localStorage.setItem(tt,e)),e}const He="schoolMetricsAdminSettings",$e="schoolMetricsActivityLog",fn=500,oe={restUnlockUses:lt,freeGames:!0,standardScale:[{letter:"A",min:90},{letter:"B",min:80},{letter:"C",min:70},{letter:"D",min:60},{letter:"E",min:0}],artsScale:[{letter:"A",min:80},{letter:"B",min:60},{letter:"C",min:0}]};function Ge(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function We(e,t){localStorage.setItem(e,JSON.stringify(t))}function Y(){return Ue(de())}function X(){const e=Ge(He,{});return{...oe,...e,standardScale:e.standardScale||oe.standardScale,artsScale:e.artsScale||oe.artsScale}}function mn(e){const t={...X(),...e};return We(He,t),Q({type:"admin_settings",message:"관리자 설정 변경",detail:e}),x()&&Yt(t).catch(n=>console.warn("[firebase] settings save",n)),t}async function yt(){if(!x())return X();try{const e=await Xt();if(e&&typeof e=="object"){const t={...oe,...e,standardScale:e.standardScale||oe.standardScale,artsScale:e.artsScale||oe.artsScale};return We(He,t),t}}catch(e){console.warn("[firebase] settings load",e)}return X()}function se(){return Number(X().restUnlockUses)||lt}function Me(){return Y()&&X().freeGames!==!1}function Q(e){const t=G(),n={id:`${Date.now()}-${Math.random().toString(36).slice(2,7)}`,at:new Date().toISOString(),deviceId:Be(),...e,account:e.account||de()||"guest",displayName:e.displayName||tn()||"",studentId:e.studentId||nn()||"",year:e.year||an()||(t==null?void 0:t.year)||""},r=Ge($e,[]);return r.unshift(n),We($e,r.slice(0,fn)),x()&&Vt(n).catch(a=>console.warn("[firebase] log",a)),n}function Ke(){return Ge($e,[])}async function bn(){const e=Ke();if(!x())return{source:"local",logs:e};try{const t=await zt(300),n=new Map;for(const a of[...t,...e]){const s=a.id||`${a.at}-${a.deviceId}-${a.type}-${a.message}`;n.has(s)||n.set(s,a)}return{source:"firebase",logs:[...n.values()].sort((a,s)=>String(s.at).localeCompare(String(a.at)))}}catch(t){return console.warn("[firebase] fetch logs",t),{source:"local-fallback",logs:e,error:String(t.message||t)}}}async function gn(){if(!x())return{source:"none",users:[],error:"Firebase 미설정"};try{return{source:"firebase",users:(await Gt()).filter(n=>n.account&&!String(n.account).includes("@gmail.com")&&!n.deleted).map(n=>({uid:n.uid||n.id||"",account:n.account||"",displayName:n.displayName||"",studentId:n.studentId||"",year:n.year||"",uniqueSubjectCount:Number(n.uniqueSubjectCount)||0,gameUnlockCount:Number(n.gameUnlockCount)||0})).sort((n,r)=>{const a=String(n.year).localeCompare(String(r.year));return a!==0?a:String(n.studentId).localeCompare(String(r.studentId))})}}catch(e){return console.warn("[firebase] fetch users",e),{source:"error",users:[],error:String(e.message||e)}}}async function pn({uid:e,account:t,displayName:n}){if(!x())return{ok:!1,error:"Firebase 미설정"};if(!e||!t)return{ok:!1,error:"삭제할 사용자 정보가 없습니다."};try{return await Kt(t),await Wt(e),Q({type:"admin_delete_user",message:`계정 삭제: ${n||""} ${t}`.trim(),detail:{uid:e,account:t,displayName:n}}),{ok:!0}}catch(r){return{ok:!1,error:r.message||"삭제 실패"}}}async function hn({cloud:e=!0}={}){if(localStorage.removeItem($e),e&&x())try{await Jt()}catch(t){console.warn("[firebase] clear",t)}Q({type:"admin_clear_logs",message:"활동 로그 초기화"})}function yn(e=Ke()){return JSON.stringify({exportedAt:new Date().toISOString(),deviceId:Be(),firebase:x(),settings:X(),logs:e},null,2)}function wn(){const e=de();return{configured:x(),projectId:me.projectId||"",adminEmail:le,isCloudAdmin:Ue(e),account:e||""}}const Ve="schoolMetricsUniqueSubjects",wt="schoolMetricsGameUnlockCount";function kt(){try{const e=localStorage.getItem(Ve),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch{return[]}}function kn(e){localStorage.setItem(Ve,JSON.stringify(e))}function vt(){const e=Number(localStorage.getItem(wt)||0);return Number.isFinite(e)&&e>0?Math.floor(e):0}function vn(e){localStorage.setItem(wt,String(Math.max(0,Math.floor(e))))}function ze(){var t;const e=G();!(e!=null&&e.uid)||!x()||e.isAdminAccount||(t=e.account)!=null&&t.includes("@gmail.com")||dt(e.uid,{displayName:e.displayName||"",studentId:e.studentId||"",year:e.year||"",account:e.account||"",grade:e.grade,classNo:e.classNo,number:e.number,uniqueSubjectCount:Ie(),gameUnlockCount:vt()}).catch(n=>console.warn("[storage] profile sync",n))}function Sn(e){const t=se(),n=kt(),r=!n.includes(e);r&&(n.push(e),kn(n));const a=n.length,s=r&&a>=t;return s&&vn(vt()+1),ze(),{isNew:r,uniqueCount:a,justUnlocked:s}}function Ie(){return kt().length}function pe(){return Me()?!0:Ie()>=se()}function $n(){return Math.max(0,se()-Ie())}function Ln(){Me()||(localStorage.removeItem(Ve),ze())}function St(){const e=se(),t=Ie(),n=$n();return Me()?"관리자 모드: 미니게임 자유 이용":pe()?`서로 다른 과목 ${t}개 달성! 휴식 미니게임 이용 가능`:`서로 다른 과목 ${n}개 더 계산하면 해금 (${t}/${e})`}const Ce=["희망은 좋은 것이다. 어쩌면 가장 좋은 것일지도. — 《쇼생크 탈출》","해야 한다, 아니면 안 된다. 그 중간은 없다. — 《스타워즈》","과거는 과거일 뿐이야. 배울 수만 있다면. — 《라이온 킹》","가장 어두운 시간은 해가 뜨기 직전이다. — 《어벤져스: 엔드게임》","세상에서 중요한 건 내가 누구냐가 아니라, 내가 뭘 하느냐다. — 《배트맨: 다크나이트》","우리에게 주어진 시간을 어떻게 쓸지만 결정하면 된다. — 《반지의 제왕》","아주 작은 존재도 미래를 바꿀 수 있다. — 《반지의 제왕》","자유는 아무 대가 없이 오지 않는다. — 《브레이브하트》","지금 이 순간을 잡아라. — 《데드 포엇 소사이어티》","무엇이든 할 수 있다. — 《쿵푸 판다》","그냥 계속 헤엄쳐. — 《니모를 찾아서》","모든 걸 시도해 봐. — 《주토피아》","두려움을 없애는 방법은 그것과 마주하는 것이다. — 《인사이드 아웃》","뜻이 있는 곳에 길이 있다. — 《아바타》","비가 그친 뒤에는 반드시 맑은 하늘이 온다. — 《날씨의 아이》","나는 이 세계를 이해할 수 없어. 그래도 계속한다. — 《록키》","시련이 없었다면 챔피언도 없다. — 《록키》","인생은 수레바퀴와 같아. 항상 앞으로 나아가야 한다. — 《니모를 찾아서》","이겨야 한다. 어떻게든. — 《친구》","꿈은 거짓말이 아니다. 반드시 이루어질 내일이다. — 《드림하이》","포기하면 그 순간 게임 끝이야, 인생도 마찬가지다. — 《슬램덩크》","죽을 때 후회 없는 인생을 살아라. — 《원피스》","약한 것은 죄가 아니다. 약한 채로 있으면 안 될 뿐. — 《귀멸의 칼날》","막을 때까지 싸워라. — 《진격의 거인》","노력은 배신하지 않는다. — 《하이큐!!》","패배는 패배하지 않는 것보다 낫다. — 《하이큐!!》","시선을 돌리지 마. 앞만 봐. — 《센과 치히로의 행방불명》","살아있는 한 힘을 내라. — 《하울의 움직이는 성》","바람이 분다. 견뎌야 한다. — 《바람의 나라》","상대는 나 자신이다. — 《초속 5센티미터》","포기하지 말 것. 내일이 있으니. — 《드래곤볼》","사람은 누구나 다시 태어날 수 있다. — 《바람의 나라》","아는 것이 힘이다. — 프랜시스 베이컨","천 리 길도 한 걸음부터. — 노자","배우고 또 배우면 어찌 기쁘지 아니하랴. — 공자","백번 듣는 것보다 한 번 보는 것이 낫다. — 공자","세 사람이 길을 가면 반드시 나의 스승이 있다. — 공자","하늘은 큰 뜻을 품은 자에게 먼저 고생을 시킨다. — 맹자","독서는 마음의 양식이다. — 키케로","하늘은 스스로 돕는 자를 돕는다. — 소포클레스","그대가 갈망하는 것을 따르라. — 랄프 왔도 에머슨","겁쟁이는 죽기 전에 여러 번 죽는다. 용감한 자는 한 번만 죽는다. — 셰익스피어","열정 없이는 위대한 것은 이루어지지 않는다. — 게오르크 빌헬름 프리드리히 헤겔","나는 나의 운명을 사랑한다. — 프리드리히 니체","오늘 할 일을 내일로 미루지 마라. — 벤자민 프랭클린","천재는 1%의 영감과 99%의 땀이다. — 토마스 에디슨","실패는 성공의 어머니이다. — 토마스 에디슨","시간은 금이다. — 벤자민 프랭클린","어리석은 자는 경험에서 아무것도 배우지 않는다. — 벤자민 프랭클린","실용적인 것이 가장 시적인 것이다. — 벤자민 프랭클린","깊은 생각 없는 독서는 낮잠과 같다. — 프랜시스 베이컨","인생은 속도가 아니라 방향이다. — 에이브러햄 링컨","성공은 최종적인 것이 아니며, 실패는 치명적인 것이 아니다. — 윈스턴 처칠","가장 위대한 영광은 넘어지지 않는 것이 아니라, 넘어질 때마다 일어서는 것이다. — 넬슨 만델라","용기는 두려움의 부재가 아니라, 두려움에도 행동하는 것이다. — 넬슨 만델라","네가 할 수 있다고 믿든 못 한다고 믿든, 네 말이 맞다. — 헨리 포드","성공의 비결은 시작하는 것이다. — 마크 트웨인","행운은 준비된 자에게 찾아온다. — 루이 파스퇴르","한계란 대부분 마음속에 있는 환상일 뿐이다. — 무하마드 알리","나는 세계 챔피언이다. 내가 그렇다고 말하기 전부터. — 무하마드 알리","항상 갈망하고, 우직하게 나아가라. — 스티브 잡스","당신의 시간은 제한되어 있다. 다른 사람의 인생을 살며 낭비하지 마라. — 스티브 잡스","오늘 나는 죽었다면 무엇을 후회하겠는가. — 스티브 잡스","죽고자 하면 살 것이요, 살고자 하면 죽을 것이니라. — 이순신","한 번도 실수한 적 없는 사람은 새로운 것을 시도한 적이 없는 사람이다. — 알버트 아인슈타인","네가 정말 소중히 여기는 것에 시간을 써라. — 《어린 왕자》","꽃을 단 한 송이라도 내가 직접 가꾸면, 내 세계에 엇비슷한 시간이 흐른다. — 《어린 왕자》","세상에서 가장 강한 사람은 스스로를 이기는 사람이다. — 무라카미 하루키","빛을 보고자 한다면 어둠을 견뎌야 한다. — 무라카미 하루키","사람은 마음먹은 것은 다 이룬다. — 《바보》","고통 없이는 얻는 것도 없다. — 라틴 격언","로마는 하루아침에 이루어지지 않았다. — 속담","연습이 완벽을 만든다. — 속담","배움에는 왕도가 없다. — 유클리드","작은 일에 충실하라. 그곳에 네 힘이 있다. — 루드야드 키플링","가장 큰 위험은 위험을 감수하지 않는 것이다. — 마크 주커버그","인생은 짧고, 예술은 길다. — 히포크라테스","삶을 살아가는 가장 좋은 복수는 성공하는 것이다. — 프랭크 시나트라","피할 수 없으면 즐겨라. — 로버트 엘리엇","포기하지 않는 한, 늦었다고 생각할 때가 가장 빠른 때다. — 속담","꾸준함은 재능을 이긴다. — 속담","반복은 지루하지만, 반복 없는 실력은 환상이다. — 속담","오늘의 노력이 내일의 실력이 된다. — 속담","지금이 가장 빠른 시작이다. — 속담","목표 없는 공부는 방향 잃은 배와 같다. — 속담","모르는 것을 아는 것이 배움의 시작이다. — 속담","실력은 하루아침에 생기지 않는다. — 속담","쉬는 것도 실력이다. 번아웃을 조심하자. — 속담","비교하지 말고, 어제의 나와 겨루자. — 속담","이해가 안 되면 다시 보면 된다. 반복이 답이다. — 속담","시험은 결과일 뿐, 과정이 실력이다. — 속담","1%씩 매일 오르면 37배가 된다. — 속담","모르는 건 부끄러운 게 아니다. 묻지 않는 게 문제다. — 속담","오답 노트 한 장이 교과서 열 페이지보다 강하다. — 속담","할 수 있다고 믿는 순간, 절반은 온 것이다. — 속담","오늘 공부한 만큼, 내일은 덜 불안하다. — 속담"],nt="schoolMetricsQuoteIndex";function Nn(){let e=Number(localStorage.getItem(nt)||0);const t=Ce[e%Ce.length];return localStorage.setItem(nt,String((e+1)%Ce.length)),t}const An={1:{label:"1학년",note:"1학년은 2학기부터 내신 성적이 반영됩니다.",subjects:{국어:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"나만의 노트(나노)",weight:15,kind:"perf"}]}}},수학:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"기본도형 탐구 프로젝트",weight:20,kind:"perf"},{label:"평면·입체 도형 탐구",weight:20,kind:"perf"}]}}},사회:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"사회화 자서전 만들기",weight:20,kind:"perf"},{label:"모의 선거",weight:20,kind:"perf"}]}}},과학:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"실험 보고서 작성",weight:20,kind:"perf"},{label:"달의 위상 변화 관찰",weight:20,kind:"perf"}]}}},영어:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"희망 직업 소개",weight:20,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]}}},음악:{semesters:{2:{label:"2학기",items:[{label:"우쿨렐레 연주",weight:50,kind:"perf"},{label:"작곡가 탐구 활동",weight:50,kind:"perf"}]}}},미술:{semesters:{2:{label:"2학기",items:[{label:"스텐실",weight:50,kind:"perf"},{label:"문자도",weight:50,kind:"perf"}]}}},체육:{semesters:{2:{label:"2학기",items:[{label:"경기형 스포츠(축구)",weight:50,kind:"perf"},{label:"기록 도전형(달리기)",weight:50,kind:"perf"}]}}},정보:{semesters:{2:{label:"2학기",items:[{label:"AI 활용",weight:50,kind:"perf"},{label:"디지털 문화 표현",weight:50,kind:"perf"}]}}},"진로와 직업":{semesters:{2:{label:"2학기",items:[{label:"창업 프로젝트",weight:50,kind:"perf"},{label:"진로 디자인",weight:50,kind:"perf"}]}}},기술가정:{semesters:{2:{label:"2학기",items:[{label:"과학·미래기술 보고서",weight:35,kind:"perf"},{label:"에너지 신문 제작",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]}}}}},2:{label:"2학년",subjects:{국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"발표와 듣기",weight:15,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"복합양식 자료를 활용한 글 작성",weight:15,kind:"perf"}]}}},수학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"일차방정식·일차부등식",weight:20,kind:"perf"},{label:"연립일차방정식·일차함수",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"삼각형·사각형의 성질",weight:20,kind:"perf"},{label:"도형의 닮음·피타고라스",weight:20,kind:"perf"}]}}},역사:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"고대 문명 지도 만들기",weight:20,kind:"perf"},{label:"고대사 신문 만들기",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"서양 고대 문화유산 소개",weight:20,kind:"perf"},{label:"유럽 여행 소개 글쓰기",weight:20,kind:"perf"}]}}},과학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"밀도 측정",weight:10,kind:"perf"},{label:"지권 층상구조 모형 제작",weight:10,kind:"perf"},{label:"주기율표 탐구",weight:10,kind:"perf"},{label:"광합성 탐구",weight:10,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"소리의 성질 탐구",weight:10,kind:"perf"},{label:"인체 프로젝트",weight:20,kind:"perf"},{label:"전류,전압,저항 사이의 관계 탐구",weight:10,kind:"perf"}]}}},영어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"},{label:"발명품 소개",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"지역 축제 홍보",weight:20,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]}}},음악:{semesters:{1:{label:"1학기",items:[{label:"우쿨렐레 연주",weight:50,kind:"perf"},{label:"텅드럼 연주",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"펜비트 연주",weight:50,kind:"perf"},{label:"리코더 연주",weight:50,kind:"perf"}]}}},미술:{semesters:{1:{label:"1학기",items:[{label:"세밀화",weight:50,kind:"perf"},{label:"음식 모형 만들기",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"점묘화",weight:50,kind:"perf"},{label:"서양미술사 보고서",weight:50,kind:"perf"}]}}},체육:{semesters:{1:{label:"1학기",items:[{label:"경기형 스포츠(킨볼)",weight:60,kind:"perf"},{label:"도전형(제자리멀리뛰기)",weight:40,kind:"perf"}]},2:{label:"2학기",items:[{label:"경기형 스포츠(배드민턴)",weight:60,kind:"perf"},{label:"건강관리(줄넘기)",weight:40,kind:"perf"}]}}},도덕:{semesters:{1:{label:"1학기",items:[{label:"도덕적 인물 지폐 제작",weight:50,kind:"perf"},{label:"우정 네 컷 만들기",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"정보 카드 뉴스 제작",weight:50,kind:"perf"},{label:"인권 모니터링 제안서",weight:50,kind:"perf"}]}}},중국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 기말고사",weight:40,kind:"exam"},{label:"한어병음 작성",weight:30,kind:"perf"},{label:"중국어 말하기",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 기말고사",weight:40,kind:"exam"},{label:"하루 일과표 만들기",weight:30,kind:"perf"},{label:"중국어 말하기",weight:30,kind:"perf"}]}}},"금융과 미래":{semesters:{2:{label:"2학기",items:[{label:"투자 성향 검사",weight:50,kind:"perf"},{label:"투자 포트폴리오 구성",weight:50,kind:"perf"}]}}},기술가정:{semesters:{1:{label:"1학기",items:[{label:"효과적 의사소통 프로젝트",weight:35,kind:"perf"},{label:"제조 기술 프로젝트",weight:35,kind:"perf"},{label:"자기주도노트 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"균형 잡힌 식단 계획",weight:35,kind:"perf"},{label:"친환경 의복 생활",weight:35,kind:"perf"},{label:"자기주도노트 작성",weight:30,kind:"perf"}]}}}}},3:{label:"3학년",note:"3학년 2학기에는 기말고사가 없습니다.",subjects:{국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"논설문 쓰기",weight:15,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"한 학기 한 권 읽기",weight:30,kind:"perf"},{label:"문장의 짜임 고려해서 자신감 있게 발표",weight:30,kind:"perf"}]}}},사회:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"국가 기관 탐구로 권력 분립 이해",weight:20,kind:"perf"},{label:"국민 경제 지표와 국제 거래 이해",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"인구·도시 문제 탐구",weight:30,kind:"perf"},{label:"농업 산업화·세계화",weight:30,kind:"perf"}]}}},역사:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"고려 정치 변천",weight:20,kind:"perf"},{label:"고려의 문화 및 조선 통치 체제 탐구",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"조선 왕 가상 인터뷰",weight:30,kind:"perf"},{label:"양 난의 이해 및 영정조 정책 탐구",weight:30,kind:"perf"}]}}},도덕:{semesters:{1:{label:"1학기",items:[{label:"1학기 기말고사",weight:40,kind:"exam"},{label:"폭력 예방 논술문 작성",weight:30,kind:"perf"},{label:"사회 정의 실현 논술문 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"환경 보호 제안서",weight:30,kind:"perf"},{label:"실패 이력서 소개",weight:30,kind:"perf"}]}}},수학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"인수분해를 이용한 수의 성질 탐구",weight:20,kind:"perf"},{label:"이차함수 그래프",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"삼각비 개념 보고서",weight:30,kind:"perf"},{label:"원의 성질 문제해결",weight:30,kind:"perf"}]}}},과학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"기상 현상 실험",weight:20,kind:"perf"},{label:"화학 반응의 규칙 탐구",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"세포분열 관찰 실험",weight:30,kind:"perf"},{label:"물체 운동 분석",weight:30,kind:"perf"}]}}},영어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:15,kind:"perf"},{label:"급식 메뉴 프로젝트",weight:15,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"영어 듣기",weight:20,kind:"perf"},{label:"영어독서",weight:20,kind:"perf"},{label:"통계 자료 활용 프로젝트",weight:20,kind:"perf"}]}}},음악:{semesters:{1:{label:"1학기",items:[{label:"칼림바 연주",weight:50,kind:"perf"},{label:"전자드럼 연주",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"노래 부르기",weight:50,kind:"perf"},{label:"디자인사 연구보고서",weight:50,kind:"perf"}]}}},미술:{semesters:{1:{label:"1학기",items:[{label:"포트레이트 드로잉",weight:50,kind:"perf"},{label:"비주얼 리터러시",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"오마주",weight:50,kind:"perf"},{label:"디자인 조사 보고서",weight:50,kind:"perf"}]}}},체육:{semesters:{1:{label:"1학기",items:[{label:"전통 표현(티니클링)",weight:40,kind:"perf"},{label:"플로어볼",weight:60,kind:"perf"}]},2:{label:"2학기",items:[{label:"건강·체력 관리(타바타)",weight:40,kind:"perf"},{label:"배구",weight:60,kind:"perf"}]}}},기술가정:{semesters:{1:{label:"1학기",items:[{label:"생애 설계",weight:35,kind:"perf"},{label:"수송기술 제작",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"스마트폰 앱 만들기",weight:35,kind:"perf"},{label:"적정 기술 사례 조사",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]}}}}}};function be(e){return An[e]??null}function Mn(e){const t=be(e);return t?Object.keys(t.subjects):[]}function Je(e,t){var n;return((n=be(e))==null?void 0:n.subjects[t])??null}function $t(e,t){const n=Je(e,t);return n?Object.keys(n.semesters).map(Number).sort((r,a)=>r-a):[]}function je(e,t,n){var a;const r=Je(e,t);return((a=r==null?void 0:r.semesters[n])==null?void 0:a.items)??[]}function at(e,t,n){var a;const r=Je(e,t);return((a=r==null?void 0:r.semesters[n])==null?void 0:a.label)??`${n}학기`}function In(e,t,n,r){return`${e}-${t}-${n}-${r}`}function Ye(e,t,n){return je(e,t,n).map((a,s)=>({key:In(e,t,n,s),subject:t,semester:n,label:a.label,weight:a.weight,kind:a.kind}))}function Xe(e,t){let n=0,r=0;for(const a of e){const s=t[a.key];if(s===""||s===null||s===void 0)continue;const l=Number(s);Number.isNaN(l)||(n+=a.weight,r+=l*a.weight)}return n===0?null:r/n}function En(e,t){const n={},r=[];for(const s of e){const l=t[s.key];if(l===""||l===null||l===void 0){r.push(s);continue}const c=Number(l);if(Number.isNaN(c)){r.push(s);continue}n[s.key]=c}const a={...n};for(const s of r)a[s.key]=100;return{average:Xe(e,a),remainingCount:r.length}}const xn=["음악","미술","체육"],Cn=[{letter:"A",min:90},{letter:"B",min:80},{letter:"C",min:70},{letter:"D",min:60},{letter:"E",min:0}],qn=[{letter:"A",min:80},{letter:"B",min:60},{letter:"C",min:0}];function Lt(e){return e.map((t,n,r)=>{const a=r[n-1],s=t.min===0?`${t.letter} (${(a==null?void 0:a.min)??60}점 미만)`:`${t.letter} (${t.min}점 이상)`;return{letter:t.letter,min:Number(t.min)||0,label:s}})}function Nt(){const e=X().standardScale;return Lt(e!=null&&e.length?e:Cn)}function At(){const e=X().artsScale;return Lt(e!=null&&e.length?e:qn)}function Qe(e){return xn.includes(e)}function Ee(e){return e==null||Number.isNaN(e)?null:Math.round(e)}function Ze(e){return Qe(e)?At():Nt()}function De(e,t){const n=Ee(e);if(n===null)return"-";const r=Ze(t);for(const a of r)if(n>=a.min)return a.letter;return r[r.length-1].letter}function ee(e){return`${e}등급`}const rt=["조금만 더 올리면 된다. 할 수 있어!","상위 등급이 코앞이다. 끝까지 달려보자!","지금의 노력이 등급을 바꾼다. 포기하지 마!","아직 끝나지 않았어. 충분히 올릴 수 있어!","남은 항목이 기회다. 집중해서 마무리하자!","한 걸음만 더 가면 등급이 달라진다. 파이팅!","가능성은 아직 살아 있다. 믿고 가보자!","오늘의 한 문제가 등급을 바꿀 수도 있어!","목표 등급까지 거의 다 왔다. 조금만 더!","실력은 거짓말하지 않는다. 계속 밀어붙여!"];function Pn(e){return e.projection.remainingCount>0&&e.letter!==e.projLetter}function Tn(){const e=Math.floor(Math.random()*rt.length);return rt[e]}function Mt(e=null){const t=e?Qe(e):!1,n=e?t?`${e}은(는) 예체능 과목 (A·B·C)`:`${e}은(는) 일반 과목 (A·B·C·D·E)`:"과목 유형에 따라 등급 기준이 다릅니다.",r=Nt(),a=At();return`
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
            ${r.map(s=>`<tr><td>${s.letter}</td><td>${s.label.replace(/^[A-E]\s*/,"")}</td></tr>`).join("")}
          </tbody>
        </table>
        <table class="criteria-table">
          <thead>
            <tr><th colspan="2">예체능 (음악·미술·체육)</th></tr>
          </thead>
          <tbody>
            ${a.map(s=>`<tr><td>${s.letter}</td><td>${s.label.replace(/^[A-E]\s*/,"")}</td></tr>`).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `}function It(e){const t=e.querySelector("[data-toggle='criteria']"),n=e.querySelector("#criteria-panel");!t||!n||t.addEventListener("click",()=>{const r=n.classList.toggle("hidden");t.setAttribute("aria-expanded",String(!r)),t.textContent=r?"▶ 등급 기준표 확인":"▼ 등급 기준표 닫기"})}function Et(e,t,n,r){if(n===null)return null;const a=Ee(n),s=De(a,r),l=Ze(r),c=l.findIndex(A=>A.letter===s);if(c<=0)return{targetLetter:s,needed:null,message:"이미 최고 등급입니다."};const u=l[c-1],m=u.min,h=e.filter(A=>{const w=t[A.key];return w===""||w===null||w===void 0||Number.isNaN(Number(w))});if(h.length===0)return{targetLetter:u.letter,needed:null,message:"모든 항목이 입력되었습니다."};let f=0,o=0,k=0;for(const A of e){const w=t[A.key];if(w===""||w===null||w===void 0||Number.isNaN(Number(w))){k+=A.weight;continue}f+=A.weight,o+=Number(w)*A.weight}if(k===0)return null;const i=f+k,v=(m*i-o)/k,q=Math.max(0,Math.min(100,v));return{targetLetter:u.letter,needed:Math.ceil(q*10)/10,remainingCount:h.length,message:null}}function jn(e,t,n,r){const s=Ze(r).find(i=>i.letter===n);if(!s)return null;let l=0,c=0,u=0,m=0;for(const i of e){const v=t[i.key];if(v===""||v===null||v===void 0||Number.isNaN(Number(v))){u+=i.weight,m+=1;continue}c+=i.weight,l+=Number(v)*i.weight}if(u===0)return null;const h=c+u,o=((s.min-.5)*h-l)/u;return{minScore:Math.ceil(Math.max(0,Math.min(100,o))*10)/10,remainingCount:m}}function Dn(e){const t=Ee(e);return{raw:e,rounded:t,display:`${t}점`}}function Un(e,t,n){const r=Xe(e,t);if(r===null)return null;const{rounded:a}=Dn(r),s=De(a,n),l=En(e,t),c=Ee(l.average),u=Et(e,t,r,n),m=jn(e,t,s,n);return{average:r,rounded:a,letter:s,projection:l,projRounded:c,projLetter:De(c,n),needed:u,confirmMin:m}}function ie(e="globe"){return`
    <svg class="${e}" viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="48" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.35"/>
      <ellipse cx="60" cy="60" rx="48" ry="16" fill="none" stroke="currentColor" stroke-width="1"/>
      <ellipse cx="60" cy="60" rx="16" ry="48" fill="none" stroke="currentColor" stroke-width="1"/>
      <ellipse cx="60" cy="60" rx="34" ry="48" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.7"/>
      <line x1="12" y1="60" x2="108" y2="60" stroke="currentColor" stroke-width="0.8"/>
      <line x1="60" y1="12" x2="60" y2="108" stroke="currentColor" stroke-width="0.8"/>
    </svg>
  `}function Rn(){return'<img class="title-bg" src="./title-bg.png" alt="" aria-hidden="true" />'}function Fn(){return'<img class="go-bg" src="./go-bg.png" alt="" aria-hidden="true" />'}function xt(e){return`grade-theme-${e}`}function F(e,t=""){return`<div class="phone-screen ${t}">${e}</div>`}function te(e){return`<p class="screen-footer">${e}</p>`}function Z(e="main"){return`<button type="button" class="link-btn" data-action="${e}">메인화면으로</button>`}const Ct=[20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5],ke=8;function On(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function _n(e,t,n){var r,a;(r=e.querySelector('[data-nav="back"]'))==null||r.addEventListener("click",t),(a=e.querySelector('[data-nav="main"]'))==null||a.addEventListener("click",n)}function Bn(e,t){const n=Math.hypot(e,t);if(n>1)return{points:0,label:"보드 밖"};if(n<=.07)return{points:50,label:"더블 불 · 50"};if(n<=.14)return{points:25,label:"싱글 불 · 25"};let r=Math.atan2(e,-t);r<0&&(r+=Math.PI*2);const a=Math.floor((r+Math.PI/20)%(Math.PI*2)/(Math.PI/10)),s=Ct[a];return n>=.9?{points:s*2,label:`더블 ${s} · ${s*2}`}:n>=.52&&n<=.62?{points:s*3,label:`트리플 ${s} · ${s*3}`}:{points:s,label:`싱글 ${s} · ${s}`}}function qe(e,t,n){const r=t/2,a=t/2,s=t*.42;e.clearRect(0,0,t,t),e.fillStyle="#1a1a1a",e.beginPath(),e.arc(r,a,s*1.08,0,Math.PI*2),e.fill();for(let l=0;l<20;l++){const c=-Math.PI/2-Math.PI/20+l*Math.PI/10,u=c+Math.PI/10,m=l%2===0;e.beginPath(),e.moveTo(r,a),e.arc(r,a,s*.9,c,u),e.closePath(),e.fillStyle=m?"#111":"#ece6d8",e.fill(),e.beginPath(),e.moveTo(r,a),e.arc(r,a,s*.52,c,u),e.closePath(),e.fillStyle=m?"#1c1c1c":"#f5f0e6",e.fill(),e.beginPath(),e.arc(r,a,s,c,u),e.arc(r,a,s*.9,u,c,!0),e.closePath(),e.fillStyle=l%2===0?"#c4122f":"#0a7a3c",e.fill(),e.beginPath(),e.arc(r,a,s*.62,c,u),e.arc(r,a,s*.52,u,c,!0),e.closePath(),e.fillStyle=l%2===0?"#c4122f":"#0a7a3c",e.fill()}e.strokeStyle="rgba(180,180,180,0.55)",e.lineWidth=1;for(let l=0;l<20;l++){const c=-Math.PI/2-Math.PI/20+l*Math.PI/10;e.beginPath(),e.moveTo(r,a),e.lineTo(r+Math.cos(c)*s,a+Math.sin(c)*s),e.stroke()}[.9,.62,.52,.14,.07].forEach(l=>{e.beginPath(),e.arc(r,a,s*l,0,Math.PI*2),e.stroke()}),e.beginPath(),e.arc(r,a,s*.14,0,Math.PI*2),e.fillStyle="#0a7a3c",e.fill(),e.beginPath(),e.arc(r,a,s*.07,0,Math.PI*2),e.fillStyle="#c4122f",e.fill(),e.fillStyle="#fff",e.font=`bold ${Math.max(10,t*.045)}px sans-serif`,e.textAlign="center",e.textBaseline="middle";for(let l=0;l<20;l++){const c=-Math.PI/2+l*Math.PI/10,u=r+Math.cos(c)*s*1.14,m=a+Math.sin(c)*s*1.14;e.fillText(String(Ct[l]),u,m)}for(const l of n)e.beginPath(),e.arc(r+l.nx*s,a+l.ny*s,4,0,Math.PI*2),e.fillStyle="#fff700",e.fill(),e.strokeStyle="#000",e.stroke()}function Hn(e,{onBack:t,onMain:n}){let r=0,a=ke,s="vertical",l=.5,c=.5,u=1,m=1,h=0,f=0;const o=[],k=1.35;e.innerHTML=`
    <div class="game-panel">
      <h2 class="game-title">다트 게임</h2>
      <p class="game-desc">바가 가운데 올 때 탭/스페이스로 멈추세요. (세로 → 가로)</p>
      <div class="dart-stats">
        <span id="dart-score">점수: 0</span>
        <span id="dart-throws">남은 횟수: ${ke}</span>
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
      ${On()}
    </div>
  `;const i=e.querySelector("#dart-canvas"),v=i.getContext("2d"),q=e.querySelector("#dart-score"),A=e.querySelector("#dart-throws"),w=e.querySelector("#dart-feedback"),g=e.querySelector("#dart-stop"),I=e.querySelector("#dart-retry"),P=e.querySelector("#aim-v"),D=e.querySelector("#aim-h"),O=e.querySelector(".aim-bar-v"),U=e.querySelector(".aim-bar-h");function T(){const d=Math.min(300,e.clientWidth||300);i.width=d,i.height=d,qe(v,d,o)}function _(){P.style.top=`${l*100}%`,D.style.left=`${c*100}%`,O.classList.toggle("active",s==="vertical"),U.classList.toggle("active",s==="horizontal")}function V(d){f||(f=d);const p=Math.min(.05,(d-f)/1e3);f=d,s==="vertical"?(l+=u*k*p,l>=1&&(l=1,u=-1),l<=0&&(l=0,u=1)):s==="horizontal"&&(c+=m*k*p,c>=1&&(c=1,m=-1),c<=0&&(c=0,m=1)),_(),h=requestAnimationFrame(V)}function z(){const d=(l-.5)*2.05,p=(c-.5)*2.05,$=Bn(p,d);if(o.push({nx:p,ny:d}),r+=$.points,a-=1,q.textContent=`점수: ${r}`,A.textContent=`남은 횟수: ${a}`,qe(v,i.width,o),w.textContent=$.label,a<=0){s="done",g.classList.add("hidden"),I.classList.remove("hidden"),w.textContent=`게임 종료! 최종 ${r}점`;return}s="vertical",l=Math.random(),c=Math.random(),w.textContent="세로 바를 가운데에 맞춰 멈추세요!"}function y(d){var p;if((p=d==null?void 0:d.preventDefault)==null||p.call(d),s==="vertical"){s="horizontal",w.textContent="가로 바를 가운데에 맞춰 멈추세요!";return}s==="horizontal"&&(s="result",z())}function M(d){(d.code==="Space"||d.key===" ")&&(d.preventDefault(),y(d))}function S(){r=0,a=ke,s="vertical",o.length=0,l=.2,c=.2,q.textContent="점수: 0",A.textContent=`남은 횟수: ${ke}`,w.textContent="세로 바를 가운데에 맞춰 멈추세요!",g.classList.remove("hidden"),I.classList.add("hidden"),qe(v,i.width,o)}return T(),_(),h=requestAnimationFrame(V),g.addEventListener("click",y),g.addEventListener("touchstart",y,{passive:!1}),I.addEventListener("click",S),window.addEventListener("keydown",M),window.addEventListener("resize",T),_n(e,t,n),()=>{cancelAnimationFrame(h),window.removeEventListener("keydown",M),window.removeEventListener("resize",T)}}const ne=12;function Gn(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function Wn(e,t,n){var r,a;(r=e.querySelector('[data-nav="back"]'))==null||r.addEventListener("click",t),(a=e.querySelector('[data-nav="main"]'))==null||a.addEventListener("click",n)}function Kn(e,{onBack:t,onMain:n}){let r=0,a=0,s=!1,l=!0,c=.08,u=.55,m=0,h=0,f=0,o=!1;e.innerHTML=`
    <div class="game-panel">
      <h2 class="game-title">크리켓 게임</h2>
      <p class="game-desc">공이 타격존(노란 선)에 올 때 탭/스페이스로 스윙!</p>
      <div class="cricket-stats">
        <span id="cricket-runs">득점: 0</span>
        <span id="cricket-balls">볼: 0 / ${ne}</span>
      </div>
      <canvas id="cricket-canvas" class="game-canvas cricket-canvas" width="320" height="420"></canvas>
      <button type="button" class="btn-go" id="cricket-swing">SWING!</button>
      <button type="button" class="btn-secondary hidden" id="cricket-retry">다시하기</button>
      <p class="game-feedback" id="cricket-feedback">공이 다가옵니다…</p>
      ${Gn()}
    </div>
  `;const k=e.querySelector("#cricket-canvas"),i=k.getContext("2d"),v=e.querySelector("#cricket-runs"),q=e.querySelector("#cricket-balls"),A=e.querySelector("#cricket-feedback"),w=e.querySelector("#cricket-swing"),g=e.querySelector("#cricket-retry"),I=.72,P=.09;function D(){const y=Math.min(320,Math.max(260,e.clientWidth-16||300));k.width=y,k.height=Math.round(y*1.3)}function O(){const y=k.width,M=k.height;i.clearRect(0,0,y,M),i.fillStyle="#6ec8ff",i.fillRect(0,0,y,M*.22),i.fillStyle="#3d8c3a",i.fillRect(0,M*.18,y,M*.12);for(let E=0;E<18;E++)i.fillStyle=`hsl(${E*47%360} 70% 45%)`,i.beginPath(),i.arc(10+E*(y/17),M*.22,6,0,Math.PI*2),i.fill();i.fillStyle="#4caf50",i.fillRect(0,M*.28,y,M*.72);const S=y*.28,d=(y-S)/2,p=M*.3,$=M*.58;i.fillStyle="#c4a574",i.beginPath(),i.moveTo(d+S*.15,p),i.lineTo(d+S*.85,p),i.lineTo(d+S,p+$),i.lineTo(d,p+$),i.closePath(),i.fill();const L=p+$*I;if(i.strokeStyle="#fff41a",i.lineWidth=3,i.setLineDash([6,4]),i.beginPath(),i.moveTo(d-8,L),i.lineTo(d+S+8,L),i.stroke(),i.setLineDash([]),i.fillStyle="#8d6e63",i.beginPath(),i.ellipse(y/2,p+18,10,14,0,0,Math.PI*2),i.fill(),i.fillStyle="#66bb6a",i.beginPath(),i.ellipse(y/2,p+$-10,16,22,0,0,Math.PI*2),i.fill(),i.save(),i.translate(y/2+14,p+$-18),i.rotate(m>0?-.9:-.2),i.fillStyle="#f5f5f5",i.fillRect(-4,-28,8,36),i.restore(),!l&&!o){const E=p+$*c,C=y/2+Math.sin(c*6)*4,xe=7+c*4;i.beginPath(),i.arc(C,E,xe,0,Math.PI*2),i.fillStyle="#ef5350",i.fill(),i.strokeStyle="#fff",i.lineWidth=1.5,i.stroke()}m>0&&(i.fillStyle="rgba(255,244,26,0.15)",i.fillRect(0,L-20,y,40))}function U(){if(a>=ne){o=!0,w.disabled=!0,w.classList.add("hidden"),g.classList.remove("hidden"),A.textContent=`경기 종료! 총 ${r}점`;return}l=!1,s=!1,c=.05,u=.48+Math.random()*.35,A.textContent="타이밍에 맞춰 스윙!"}function T(y){var p;if((p=y==null?void 0:y.preventDefault)==null||p.call(y),o||s||l)return;s=!0,m=.25,a+=1,q.textContent=`볼: ${a} / ${ne}`;const M=Math.abs(c-I);let S=0,d="헛스윙!";M<=P*.25?(S=6,d="식스! +6"):M<=P*.5?(S=4,d="포! +4"):M<=P*.75?(S=2,d="투런! +2"):M<=P&&(S=1,d="싱글! +1"),r+=S,v.textContent=`득점: ${r}`,A.textContent=d,l=!0,setTimeout(()=>{o||U(),a>=ne&&(o=!0,w.disabled=!0,w.classList.add("hidden"),g.classList.remove("hidden"),A.textContent=`경기 종료! 총 ${r}점`)},650)}function _(y){f||(f=y);const M=Math.min(.05,(y-f)/1e3);f=y,!l&&!o&&(c+=u*M,c>1.05&&(l=!0,s=!0,a+=1,q.textContent=`볼: ${a} / ${ne}`,A.textContent="놓침!",setTimeout(()=>{s=!1,a>=ne?(o=!0,w.disabled=!0,w.classList.add("hidden"),g.classList.remove("hidden"),A.textContent=`경기 종료! 총 ${r}점`):U()},500))),m>0&&(m-=M),O(),h=requestAnimationFrame(_)}function V(){r=0,a=0,o=!1,s=!1,m=0,v.textContent="득점: 0",q.textContent=`볼: 0 / ${ne}`,w.disabled=!1,w.classList.remove("hidden"),g.classList.add("hidden"),U()}function z(y){(y.code==="Space"||y.key===" ")&&(y.preventDefault(),T(y))}return D(),U(),h=requestAnimationFrame(_),w.addEventListener("click",T),w.addEventListener("touchstart",T,{passive:!1}),k.addEventListener("pointerdown",T),g.addEventListener("click",V),window.addEventListener("keydown",z),window.addEventListener("resize",D),Wn(e,t,n),()=>{cancelAnimationFrame(h),window.removeEventListener("keydown",z),window.removeEventListener("resize",D)}}function Vn(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function zn(e,t,n){var r,a;(r=e.querySelector('[data-nav="back"]'))==null||r.addEventListener("click",t),(a=e.querySelector('[data-nav="main"]'))==null||a.addEventListener("click",n)}const Jn=["#42a5f5","#ef5350","#ffee58","#66bb6a"],Yn=4,Pe=7;function Xn(e,{onBack:t,onMain:n}){let r=0,a=3,s=!1,l=0,c=0;const u={left:!1,right:!1};let m=320,h=420,f={x:0,y:0,w:70,h:12},o={x:0,y:0,r:6,vx:0,vy:0},k=[];e.innerHTML=`
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
      ${Vn()}
    </div>
  `;const i=e.querySelector("#bo-canvas"),v=i.getContext("2d"),q=e.querySelector("#bo-lives"),A=e.querySelector("#bo-score"),w=e.querySelector("#bo-feedback"),g=e.querySelector("#bo-start");function I(){m=Math.min(320,Math.max(260,e.clientWidth-16||300)),h=Math.round(m*1.3),i.width=m,i.height=h,f.y=h-36,f.w=m*.22}function P(){k=[];const d=4,p=56,$=(m-d*(Pe+1))/Pe,L=16;for(let E=0;E<Yn;E++)for(let C=0;C<Pe;C++)k.push({x:d+C*($+d),y:p+E*(L+d),w:$,h:L,color:Jn[E],alive:!0})}function D(){f.x=(m-f.w)/2,o.x=m/2,o.y=f.y-20;const d=-Math.PI/3+Math.random()*(Math.PI/3),p=Math.min(m,h)*1.05;o.vx=Math.sin(d)*p,o.vy=-Math.abs(Math.cos(d)*p)}function O(){q.textContent=`생명: ${"●".repeat(a)}${"○".repeat(3-a)}`,A.textContent=`점수: ${String(r).padStart(5,"0")}`}function U(){v.fillStyle="#1a1030",v.fillRect(0,0,m,h);for(const d of k)d.alive&&(v.fillStyle=d.color,T(v,d.x,d.y,d.w,d.h,4),v.fill());v.fillStyle="#fff",T(v,f.x,f.y,f.w,f.h,6),v.fill(),v.beginPath(),v.arc(o.x,o.y,o.r,0,Math.PI*2),v.fillStyle="#fff",v.fill()}function T(d,p,$,L,E,C){d.beginPath(),d.moveTo(p+C,$),d.arcTo(p+L,$,p+L,$+E,C),d.arcTo(p+L,$+E,p,$+E,C),d.arcTo(p,$+E,p,$,C),d.arcTo(p,$,p+L,$,C),d.closePath()}function _(d){c||(c=d);const p=Math.min(.033,(d-c)/1e3);if(c=d,s){const $=m*1.6*p;if(u.left&&(f.x-=$),u.right&&(f.x+=$),f.x=Math.max(0,Math.min(m-f.w,f.x)),o.x+=o.vx*p,o.y+=o.vy*p,o.x<o.r&&(o.x=o.r,o.vx*=-1),o.x>m-o.r&&(o.x=m-o.r,o.vx*=-1),o.y<o.r&&(o.y=o.r,o.vy*=-1),o.vy>0&&o.y+o.r>=f.y&&o.y-o.r<=f.y+f.h&&o.x>=f.x&&o.x<=f.x+f.w){o.y=f.y-o.r;const L=(o.x-(f.x+f.w/2))/(f.w/2),E=Math.hypot(o.vx,o.vy)*1.015,C=L*1.1;o.vx=Math.sin(C)*E,o.vy=-Math.abs(Math.cos(C)*E)}for(const L of k)if(L.alive&&o.x+o.r>L.x&&o.x-o.r<L.x+L.w&&o.y+o.r>L.y&&o.y-o.r<L.y+L.h){L.alive=!1,r+=10,O();const E=o.x+o.r-L.x,C=L.x+L.w-(o.x-o.r),xe=o.y+o.r-L.y,Pt=L.y+L.h-(o.y-o.r),Tt=Math.min(E,C),jt=Math.min(xe,Pt);Tt<jt?o.vx*=-1:o.vy*=-1;break}k.every(L=>!L.alive)&&(s=!1,w.textContent=`클리어! 점수 ${r}`),o.y>h+20&&(a-=1,O(),a<=0?(s=!1,w.textContent=`게임 오버 · ${r}점`):(D(),w.textContent="생명 -1! 계속…"))}U(),l=requestAnimationFrame(_)}function V(){r=0,a=3,s=!0,P(),D(),O(),w.textContent="화이팅!"}function z(d){const p=i.getBoundingClientRect(),$=(d-p.left)/p.width*m;f.x=Math.max(0,Math.min(m-f.w,$-f.w/2))}function y(d){var $;d.preventDefault();const p=(($=d.touches)==null?void 0:$[0])||d;z(p.clientX)}function M(d){(d.key==="ArrowLeft"||d.key==="a"||d.key==="A")&&(u.left=!0),(d.key==="ArrowRight"||d.key==="d"||d.key==="D")&&(u.right=!0)}function S(d){(d.key==="ArrowLeft"||d.key==="a"||d.key==="A")&&(u.left=!1),(d.key==="ArrowRight"||d.key==="d"||d.key==="D")&&(u.right=!1)}return I(),P(),D(),O(),U(),l=requestAnimationFrame(_),g.addEventListener("click",V),i.addEventListener("pointerdown",y),i.addEventListener("pointermove",d=>{(d.buttons||d.pressure>0)&&y(d)}),i.addEventListener("touchstart",y,{passive:!1}),i.addEventListener("touchmove",y,{passive:!1}),window.addEventListener("keydown",M),window.addEventListener("keyup",S),window.addEventListener("resize",I),zn(e,t,n),()=>{cancelAnimationFrame(l),window.removeEventListener("keydown",M),window.removeEventListener("keyup",S),window.removeEventListener("resize",I)}}const b=document.getElementById("app");let B=null,ae=null,J=null,ce=null,st=!1;const it=new Set(["rest","game-dart","game-cricket","game-breakout","admin","admin-users","admin-logs"]),Qn={login:ta,main:na,help:ra,profile:aa,grade:ga,subject:pa,calculator:ha,rest:ya,admin:sa,"admin-users":ia,"admin-logs":la,"game-dart":()=>Te("dart"),"game-cricket":()=>Te("cricket"),"game-breakout":()=>Te("breakout")};Zn();function Zn(){un().then(()=>yt()).finally(()=>{N(pt()?"main":"login")})}function N(e,t={}){ce&&(ce(),ce=null),st&&!it.has(e)&&Ln(),e!=="login"&&!pt()&&(e="login",t={});const n=Qn[e];n&&(b.innerHTML="",n(t),st=it.has(e),window.scrollTo(0,0))}function K(e){e.querySelectorAll("[data-action]").forEach(t=>{t.addEventListener("click",()=>ea(t.dataset.action))})}function ea(e){if(e==="main"){B=null,ae=null,J=null,N("main");return}if(e==="grade"){ae=null,J=null,N("grade");return}if(e==="help"&&N("help"),e==="profile"&&N("profile"),e==="logout"){if(!Re(de()))return;rn().finally(()=>N("login"));return}if(e==="rest"&&N("rest"),e==="admin"){Y()&&N("admin");return}if(e==="admin-users"){Y()&&N("admin-users");return}if(e==="admin-logs"){Y()&&N("admin-logs");return}if(e==="subject"&&N("subject",{grade:B}),e==="game-dart"&&N("game-dart"),e==="game-cricket"&&N("game-cricket"),e==="game-breakout"&&N("game-breakout"),e.startsWith("pick-grade-")){B=Number(e.replace("pick-grade-","")),ae=null,J=null,N("subject",{grade:B});return}if(e.startsWith("pick-subject-")){const t=decodeURIComponent(e.replace("pick-subject-",""));ae=t;const n=$t(B,t);J=(n.length===1,n[0]),N("calculator",{grade:B,subject:t,semester:J});return}e.startsWith("pick-semester-")&&(J=Number(e.replace("pick-semester-","")),N("calculator",{grade:B,subject:ae,semester:J}))}function ta(){let e="login";const t=()=>{var A,w;const n=e==="register";b.innerHTML=F(`
      <div class="stack-screen login-screen">
        ${ie("globe globe-large")}
        <h1 class="login-title">SCHOOL METRICS</h1>
        <p class="login-desc">${n?"처음이면 회원가입하세요":"해연중 계정으로 로그인하세요"}</p>
        <div class="login-form">
          <div class="login-tabs" role="tablist">
            <button type="button" class="login-tab ${n?"":"active"}" data-mode="login">로그인</button>
            <button type="button" class="login-tab ${n?"active":""}" data-mode="register">회원가입</button>
          </div>
          <label class="field">
            <span>학교 계정</span>
            <input type="text" id="login-email" placeholder="20261111@haeyeon.ms.kr" autocomplete="username" inputmode="email" />
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
        ${te(W.footer)}
      </div>
    `);const r=b.querySelector("#login-error"),a=b.querySelector("#login-ok"),s=b.querySelector("#verify-actions"),l=b.querySelector("#login-email"),c=b.querySelector("#login-name"),u=b.querySelector("#login-password"),m=b.querySelector("#login-password2"),h=b.querySelector("#login-submit"),f=g=>{a.classList.add("hidden"),r.textContent=g,r.classList.remove("hidden")},o=g=>{r.classList.add("hidden"),a.textContent=g,a.classList.remove("hidden")},k=(g,I)=>{h.disabled=g,g?(h.dataset.label=h.textContent,h.textContent=n?"가입 중…":"로그인 중…"):h.dataset.label&&(h.textContent=h.dataset.label)};b.querySelectorAll("[data-mode]").forEach(g=>{g.addEventListener("click",()=>{e=g.dataset.mode,t()})});const i=g=>{const I=Oe(g);Q({type:"user_login",message:`로그인: ${I}`,account:g.account,displayName:g.displayName||"",studentId:g.studentId||""}),Y()&&Q({type:"admin_login",message:"관리자 계정 로그인 — 관리자 모드 자동 활성화",account:g.account}),N("main"),yt(),ze()},v=g=>{o(g.error),s.classList.remove("hidden")},q=async()=>{r.classList.add("hidden"),a.classList.add("hidden"),s.classList.add("hidden"),k(!0);try{if(e==="register"){if(u.value!==((m==null?void 0:m.value)||"")){f("비밀번호 확인이 일치하지 않습니다.");return}const I=await sn(l.value,u.value,(c==null?void 0:c.value)||"");if(I.needVerify){v(I);return}if(!I.ok){f(I.error);return}i(I.user);return}const g=await ln(l.value,u.value);if(g.needVerify){v(g);return}if(!g.ok){f(g.error);return}i(g.user)}finally{k(!1)}};h.addEventListener("click",q),[l,c,u,m].filter(Boolean).forEach(g=>{g.addEventListener("keydown",I=>{I.key==="Enter"&&q()})}),(A=b.querySelector("#verify-refresh"))==null||A.addEventListener("click",async()=>{k(!0);const g=await cn();if(k(!1),g.needVerify){v(g);return}if(!g.ok){f(g.error);return}i(g.user)}),(w=b.querySelector("#verify-resend"))==null||w.addEventListener("click",async()=>{const g=await dn();if(!g.ok){f(g.error);return}o(g.message),s.classList.remove("hidden")})};t()}function na(){const e=Nn(),t=Oe()||de()||"",n=Re(de());b.innerHTML=F(`
    <div class="main-screen">
      <button type="button" class="help-btn" data-action="help" aria-label="앱 정보">?</button>
      <div class="main-header">
        <div class="title-block">
          ${Rn()}
          <h1 class="app-title">${W.title}</h1>
        </div>
        <p class="app-subtitle">${W.subtitle}</p>
        <p class="main-quote">"${e}"</p>
      </div>
      <div class="main-body">
        <p class="login-user muted">${j(t)}</p>
        <button type="button" class="link-btn" data-action="profile">내 정보 수정</button>
        ${n?'<button type="button" class="link-btn" data-action="logout">로그아웃</button>':""}
        <button type="button" class="go-btn" data-action="grade" aria-label="시작">
          ${Fn()}
          <span class="go-text">GO</span>
        </button>
      </div>
      <p class="main-footer">${W.footer}</p>
    </div>
  `),K(b)}function aa(){const e=G(),t=Re(e==null?void 0:e.account);b.innerHTML=F(`
    <div class="stack-screen">
      ${ie()}
      <h2 class="screen-title">내 정보</h2>
      <div class="login-form profile-form">
        <p class="muted login-hint">로그인 계정: ${j((e==null?void 0:e.account)||"")}</p>
        <label class="field">
          <span>이름</span>
          <input type="text" id="profile-name" value="${j((e==null?void 0:e.displayName)||"")}" maxlength="20" />
        </label>
        <label class="field">
          <span>학번 (4자리)</span>
          <input type="text" id="profile-sid" value="${j((e==null?void 0:e.studentId)||"")}" inputmode="numeric" maxlength="4" placeholder="1111" />
        </label>
        <button type="button" class="btn-go" id="profile-save">저장</button>
        ${t?'<button type="button" class="link-btn" data-action="logout">로그아웃</button>':""}
        <p class="warn hidden" id="profile-error"></p>
        <p class="ok-msg hidden" id="profile-ok"></p>
      </div>
      ${Z()}
    </div>
  `);const n=b.querySelector("#profile-error"),r=b.querySelector("#profile-ok"),a=b.querySelector("#profile-name"),s=b.querySelector("#profile-sid"),l=b.querySelector("#profile-save");l.addEventListener("click",async()=>{n.classList.add("hidden"),r.classList.add("hidden"),l.disabled=!0;const c=await on({displayName:a.value,studentId:s.value});if(l.disabled=!1,!c.ok){n.textContent=c.error,n.classList.remove("hidden");return}r.textContent="저장되었습니다.",r.classList.remove("hidden"),Q({type:"profile_update",message:`정보 수정: ${Oe(c.user)}`,displayName:c.user.displayName,studentId:c.user.studentId})}),K(b)}function ra(){const e=se();b.innerHTML=F(`
    <div class="stack-screen">
      ${ie()}
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
        <p class="muted">제작: ${W.creator}</p>
        ${Y()?'<p class="success"><button type="button" class="link-btn" data-action="admin">관리자 패널 열기</button></p>':""}
      </div>
      ${Z()}
      <p class="muted login-hint" style="text-align:center;margin-top:auto;padding:12px 8px 4px">${W.subtitle}</p>
    </div>
  `),K(b)}function sa(){var l,c;if(!Y()){N("help");return}const e=X(),t=wn(),n=e.standardScale,r=e.artsScale,a=t.configured?`Firebase 연결됨 (${t.projectId})`:"Firebase 미설정 — src/firebase-config.js 에 키를 넣어주세요",s=t.isCloudAdmin?`클라우드 관리자 계정으로 로그인됨 (${t.adminEmail}) — 전체 기록 조회·설정 저장 가능`:`클라우드 전체 기록/설정 수정은 ${t.adminEmail} 로 로그인한 뒤에만 가능합니다. (지금: ${t.account||"미로그인"})`;b.innerHTML=F(`
    <div class="stack-screen admin-screen">
      <h2 class="screen-title">관리자 모드</h2>
      <p class="screen-desc">기기 ID: ${Be()}</p>
      <p class="muted admin-note">${a}</p>
      <p class="muted admin-note">${s}</p>

      <div class="info-card admin-card">
        <h3>조회</h3>
        <div class="admin-actions">
          <button type="button" class="btn-go" data-action="admin-users">현재 회원가입 학생</button>
          <button type="button" class="btn-go" data-action="admin-logs">활동 기록</button>
        </div>
      </div>

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
          ${n.map((u,m)=>`
            <label>${u.letter}
              <input type="number" data-scale="std" data-i="${m}" data-letter="${u.letter}" min="0" max="100" value="${u.min}" />
            </label>
          `).join("")}
        </div>
        <h4>예체능 등급 기준 (점 이상)</h4>
        <div class="admin-scale" id="adm-arts">
          ${r.map((u,m)=>`
            <label>${u.letter}
              <input type="number" data-scale="arts" data-i="${m}" data-letter="${u.letter}" min="0" max="100" value="${u.min}" />
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

      <div class="nav-row">
        <button type="button" class="link-btn" data-action="main">메인으로</button>
        ${Z()}
      </div>
      ${te("ADMIN")}
    </div>
  `),K(b),(l=b.querySelector("#adm-save"))==null||l.addEventListener("click",async()=>{var o,k;const u=Number((o=b.querySelector("#adm-unlock"))==null?void 0:o.value),m=!!((k=b.querySelector("#adm-free-games"))!=null&&k.checked),h=[...b.querySelectorAll('[data-scale="std"]')].map(i=>({letter:i.dataset.letter,min:Number(i.value)||0})),f=[...b.querySelectorAll('[data-scale="arts"]')].map(i=>({letter:i.dataset.letter,min:Number(i.value)||0}));mn({restUnlockUses:Number.isFinite(u)&&u>0?u:8,freeGames:m,standardScale:h,artsScale:f}),window.alert(x()?"설정을 저장했고 클라우드에도 올렸습니다.":"설정을 이 기기에 저장했습니다. (Firebase 미설정)"),N("admin")}),(c=b.querySelector("#adm-feedback-save"))==null||c.addEventListener("click",()=>{var m,h;const u=(h=(m=b.querySelector("#adm-feedback"))==null?void 0:m.value)==null?void 0:h.trim();if(!u){window.alert("내용을 입력하세요.");return}Q({type:"game_feedback",message:u}),window.alert("피드백을 저장했습니다."),N("admin")})}function ia(){var t;if(!Y()){N("help");return}b.innerHTML=F(`
    <div class="stack-screen admin-screen">
      <h2 class="screen-title">현재 회원가입 학생</h2>
      <p class="muted admin-note">이름 · 년도/학번 · 과목 진행 · 해금 횟수</p>
      <div class="admin-actions">
        <button type="button" class="btn-secondary" id="adm-refresh-users">새로고침</button>
      </div>
      <div class="admin-user-list" id="adm-users">
        <p class="muted">불러오는 중…</p>
      </div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="admin">관리자 홈</button>
        ${Z()}
      </div>
      ${te("ADMIN")}
    </div>
  `),K(b);async function e(){const n=b.querySelector("#adm-users");n&&(n.innerHTML='<p class="muted">불러오는 중…</p>');const r=await gn();if(!n)return;if(r.error&&r.users.length===0){n.innerHTML=`<p class="warn">${j(r.error)}</p>`;return}if(r.users.length===0){n.innerHTML='<p class="muted">아직 가입한 학생이 없습니다.</p>';return}const a=se();n.innerHTML=`
      <div class="admin-user-head">
        <span>이름</span><span>년도·학번</span><span>과목</span><span>해금</span><span></span>
      </div>
      ${r.users.map(s=>`
        <article class="admin-user-item">
          <span>${j(s.displayName||"-")}</span>
          <span>${j(`${s.year||"-"} ${s.studentId||""}`.trim())}</span>
          <span>${s.uniqueSubjectCount}/${a}</span>
          <span>${s.gameUnlockCount}회</span>
          <button type="button" class="btn-secondary adm-del-user"
            data-uid="${j(s.uid)}"
            data-account="${j(s.account)}"
            data-name="${j(s.displayName||"")}">삭제</button>
        </article>`).join("")}
    `,n.querySelectorAll(".adm-del-user").forEach(s=>{s.addEventListener("click",async()=>{const l=s.dataset.name||"",c=s.dataset.account||"";if(!window.confirm(`${l||c} 계정을 삭제할까요?
앱 로그인이 차단됩니다.`))return;s.disabled=!0;const u=await pn({uid:s.dataset.uid,account:c,displayName:l});if(!u.ok){window.alert(u.error||"삭제 실패"),s.disabled=!1;return}window.alert("삭제되었습니다."),e()})})}e(),(t=b.querySelector("#adm-refresh-users"))==null||t.addEventListener("click",()=>e())}function la(){var n,r,a;if(!Y()){N("help");return}b.innerHTML=F(`
    <div class="stack-screen admin-screen">
      <h2 class="screen-title">활동 기록</h2>
      <p class="muted admin-note"><span id="adm-log-count">불러오는 중…</span></p>
      <div class="admin-actions">
        <button type="button" class="btn-secondary" id="adm-refresh-logs">새로고침</button>
        <button type="button" class="btn-secondary" id="adm-export">내보내기</button>
        <button type="button" class="btn-secondary" id="adm-clear-logs">기록 비우기</button>
      </div>
      <div class="admin-log-list" id="adm-logs">
        <p class="muted">기록을 불러오는 중…</p>
      </div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="admin">관리자 홈</button>
        ${Z()}
      </div>
      ${te("ADMIN")}
    </div>
  `),K(b);let e=Ke();async function t(){const s=b.querySelector("#adm-logs"),l=b.querySelector("#adm-log-count");s&&(s.innerHTML='<p class="muted">불러오는 중…</p>');const c=await bn();if(e=c.logs,l&&(l.textContent=`${e.length}건 · ${c.source}${c.error?" · 오류":""}`),!!s){if(e.length===0){s.innerHTML='<p class="muted">아직 기록이 없습니다.</p>';return}s.innerHTML=e.slice(0,120).map(u=>{const h=[u.year,u.studentId,u.displayName].filter(o=>o&&o!=="admin").join(" · ")||u.account||u.deviceId||"",f=ma(u);return`
      <article class="admin-log-item">
        <header>${j(h)} · ${j(oa(u.type))} · ${ba(u.at)}</header>
        <p>${j(u.message||"")}</p>
        ${f?`<pre>${j(f)}</pre>`:""}
      </article>
    `}).join("")}}t(),(n=b.querySelector("#adm-refresh-logs"))==null||n.addEventListener("click",()=>t()),(r=b.querySelector("#adm-export"))==null||r.addEventListener("click",async()=>{const s=yn(e);try{await navigator.clipboard.writeText(s),window.alert("기록이 클립보드에 복사되었습니다.")}catch{window.prompt("아래 내용을 복사하세요",s)}}),(a=b.querySelector("#adm-clear-logs"))==null||a.addEventListener("click",async()=>{window.confirm("로컬+클라우드 활동 기록을 비울까요?")&&(await hn({cloud:!0}),N("admin-logs"))})}function oa(e){return{calc:"성적 계산",user_login:"로그인",admin_login:"관리자 로그인",admin_settings:"설정 변경",admin_clear_logs:"기록 초기화",admin_delete_user:"계정 삭제",game_open:"미니게임",game_feedback:"게임 피드백",profile_update:"정보 수정"}[e]||e||"기록"}function qt(e,t){var a,s;const n=String(e||""),r=n.match(/^(\d+)-(.+)-(\d+)-(\d+)$/);if(r){const l=Number(r[1]),c=r[2],u=Number(r[3]),m=Number(r[4]),h=(a=je(l,c,u)[m])==null?void 0:a.label;if(h)return h}if(t!=null&&t.grade&&(t!=null&&t.subject)&&(t==null?void 0:t.semester)!=null){const l=n.match(/(\d+)$/);if(l){const c=(s=je(Number(t.grade),t.subject,Number(t.semester))[Number(l[1])])==null?void 0:s.label;if(c)return c}}return n}function ca(e){if(!(e!=null&&e.grade)||!(e!=null&&e.subject)||(e==null?void 0:e.semester)==null)return null;const t=Ye(Number(e.grade),e.subject,Number(e.semester));if(!t.length)return null;const n={};for(const r of t)n[r.key]="";if(Array.isArray(e.scoreLines))for(const r of e.scoreLines){if(r.key&&r.key in n){n[r.key]=r.score;continue}const a=t.find(s=>s.label===r.label);a&&(n[a.key]=r.score)}else if(e.scores&&typeof e.scores=="object")for(const[r,a]of Object.entries(e.scores))r in n&&(n[r]=a);else return null;return{items:t,scores:n}}function da(e){let t=e==null?void 0:e.needed;if((t==null?void 0:t.needed)==null||!(t!=null&&t.targetLetter)){const n=ca(e);if(n){const r=Xe(n.items,n.scores);t=Et(n.items,n.scores,r,e.subject)}}return(t==null?void 0:t.needed)!=null&&(t!=null&&t.targetLetter)?`한 단계 상위 ${ee(t.targetLetter)} → 남은 항목 평균 ${t.needed}점 이상`:(t==null?void 0:t.message)==="이미 최고 등급입니다."?"한 단계 상위 등급 없음 (이미 최고 등급)":(t==null?void 0:t.message)==="모든 항목이 입력되었습니다."?"남은 항목 없음 (전부 입력됨)":e!=null&&e.neededLine?e.neededLine:""}function ua(e,t){const n=e.label||qt(e.key,t);return e.missing||e.score===null||e.score===void 0||e.score===""?`${n}: 미입력`:`${n}: ${e.score}점`}function fa(e){if((e==null?void 0:e.grade)!=null&&(e!=null&&e.subject)&&(e==null?void 0:e.semester)!=null){const t=Ye(Number(e.grade),e.subject,Number(e.semester));if(t.length){const n=new Map,r=new Map;if(Array.isArray(e.scoreLines))for(const a of e.scoreLines)a.key&&n.set(a.key,a),a.label&&r.set(a.label,a);if(e.scores&&typeof e.scores=="object")for(const[a,s]of Object.entries(e.scores))n.set(a,{key:a,score:s,missing:s===""||s==null});return t.map(a=>{const s=n.get(a.key)||r.get(a.label);if(!s||s.missing||s.score===""||s.score==null)return{key:a.key,label:a.label,weight:a.weight,score:null,missing:!0};const l=Number(s.score);return Number.isFinite(l)?{key:a.key,label:a.label,weight:a.weight,score:l,missing:!1}:{key:a.key,label:a.label,weight:a.weight,score:null,missing:!0}})}}return Array.isArray(e==null?void 0:e.scoreLines)&&e.scoreLines.length?e.scoreLines:e!=null&&e.scores&&typeof e.scores=="object"?Object.entries(e.scores).map(([t,n])=>({key:t,label:qt(t,e),score:n===""||n==null?null:Number(n),missing:n===""||n==null||!Number.isFinite(Number(n))})):[]}function ma(e){const t=e==null?void 0:e.detail;if(!t)return"";if(typeof t=="string")return t;const n=[],r=fa(t);for(const s of r)n.push(ua(s,t));t.rounded!=null&&n.push(`합계(반올림): ${t.rounded}점`),t.letter&&n.push(`현재 등급: ${ee(t.letter)}`);const a=da(t);return a&&n.push(a),n.join(`
`)}function j(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function ba(e){try{const t=new Date(e);return`${t.getMonth()+1}/${t.getDate()} ${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`}catch{return e}}function ga(){const e=pe(),t=St();b.innerHTML=F(`
    <div class="stack-screen grade-screen">
      ${ie()}
      <h2 class="screen-title">자신의 학년을 선택하세요</h2>
      <div class="grade-list">
        <button type="button" class="grade-btn grade-1" data-action="pick-grade-1">1학년</button>
        <button type="button" class="grade-btn grade-2" data-action="pick-grade-2">2학년</button>
        <button type="button" class="grade-btn grade-3" data-action="pick-grade-3">3학년</button>
      </div>
      ${e?'<button type="button" class="rest-btn" data-action="rest">휴식 · 미니게임</button>':`<p class="unlock-hint">${t}</p>`}
      ${Z()}
      ${te(W.subtitle)}
    </div>
  `),K(b)}function pa({grade:e}){if(!e||!be(e)){N("grade");return}B=e;const t=be(e),n=Mn(e);b.innerHTML=F(`
    <div class="stack-screen ${xt(e)}">
      ${ie()}
      <h2 class="screen-title">${t.label} 과목 선택</h2>
      ${t.note?`<p class="screen-note">${t.note}</p>`:""}
      ${Mt()}
      <div class="subject-list">
        ${n.map(r=>`<button type="button" class="subject-btn" data-action="pick-subject-${encodeURIComponent(r)}">${r}</button>`).join("")}
      </div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="grade">학년 선택으로</button>
        ${Z()}
      </div>
      ${te(W.subtitle)}
    </div>
  `),K(b),It(b)}function ha({grade:e,subject:t,semester:n}){if(!e||!t||!n){N("subject",{grade:B});return}B=e,ae=t,J=n;const r=be(e),a=$t(e,t),s=Ye(e,t,n),l=at(e,t,n),c={},u=a.length>1?`<div class="semester-tabs">
          ${a.map(o=>`<button type="button" class="semester-tab ${o===n?"active":""}" data-action="pick-semester-${o}">${at(e,t,o)}</button>`).join("")}
        </div>`:`<p class="semester-only">${l}</p>`;b.innerHTML=F(`
    <div class="stack-screen calculator-screen ${xt(e)}">
      ${ie("globe globe-small")}
      <h2 class="screen-title subject-title">${t}</h2>
      <p class="screen-desc">${r.label} · ${l}${Qe(t)?" · 예체능(A·B·C)":" · 일반(A~E)"}</p>
      ${Mt(t)}
      ${u}
      <form id="calc-form" class="calc-form"></form>
      <button type="submit" form="calc-form" class="btn-calc">계산하기</button>
      <div id="calc-result" class="calc-result hidden"></div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="subject">과목 선택으로</button>
        ${Z()}
      </div>
      ${te(W.subtitle)}
    </div>
  `);const m=b.querySelector("#calc-form");let h="";for(const o of s){if(o.kind!==h){h=o.kind;const i=document.createElement("h3");i.className="section-heading",i.textContent=o.kind==="exam"?"지필고사":"수행평가",m.appendChild(i)}const k=document.createElement("label");k.className="score-row",k.innerHTML=`
      <span>${o.label} <em>${o.weight}%</em></span>
      <input type="number" min="0" max="100" step="0.1" inputmode="decimal"
        name="${o.key}" placeholder="점수" />
    `,m.appendChild(k)}const f=b.querySelector("#calc-result");m.addEventListener("submit",o=>{var D,O,U,T,_,V,z,y,M;o.preventDefault();const k=new FormData(m);for(const S of s)c[S.key]=k.get(S.key);const i=Un(s,c,t);if(!i){f.classList.remove("hidden"),f.innerHTML='<p class="warn">최소 1개 이상 점수를 입력하세요.</p>';return}const v=Sn(t),q=s.map(S=>{const d=c[S.key];if(d===""||d===null||d===void 0)return{key:S.key,label:S.label,weight:S.weight,score:null,missing:!0};const p=Number(d);return Number.isFinite(p)?{key:S.key,label:S.label,weight:S.weight,score:p,missing:!1}:{key:S.key,label:S.label,weight:S.weight,score:null,missing:!0}});let A="";((D=i.needed)==null?void 0:D.needed)!=null&&((O=i.needed)!=null&&O.targetLetter)?A=`한 단계 상위 ${ee(i.needed.targetLetter)} → 남은 항목 평균 ${i.needed.needed}점 이상`:((U=i.needed)==null?void 0:U.message)==="이미 최고 등급입니다."?A="한 단계 상위 등급 없음 (이미 최고 등급)":((T=i.needed)==null?void 0:T.message)==="모든 항목이 입력되었습니다."?A="남은 항목 없음 (전부 입력됨)":(_=i.needed)!=null&&_.message&&(A=i.needed.message),Q({type:"calc",message:`${e}학년 ${t} (${l}) → ${i.rounded}점 · 현재 ${ee(i.letter)}`,detail:{grade:e,subject:t,semester:n,semLabel:l,scoreLines:q,rounded:i.rounded,letter:i.letter,average:i.average,needed:i.needed?{targetLetter:i.needed.targetLetter,needed:i.needed.needed,message:i.needed.message}:null,neededLine:A}});let w="";((V=i.needed)==null?void 0:V.needed)!=null?w=`<p>한 단계 상위 <strong>${ee(i.needed.targetLetter)}</strong> → 남은 항목 평균 <strong>${i.needed.needed}점</strong> 이상</p>`:((z=i.needed)==null?void 0:z.message)==="이미 최고 등급입니다."?w="<p>한 단계 상위 등급 없음 (이미 최고 등급)</p>":((y=i.needed)==null?void 0:y.message)==="모든 항목이 입력되었습니다."?w="<p>남은 항목 없음 (전부 입력됨)</p>":(M=i.needed)!=null&&M.message&&(w=`<p>${i.needed.message}</p>`);let g="";if(i.projection.remainingCount>0&&i.letter===i.projLetter){const S=ee(i.letter);let d="";i.confirmMin&&(i.confirmMin.minScore<=0?d=`<p>남은 항목이 <strong>0점</strong>이어도 ${S} 유지</p>`:d=`<p>남은 항목 각각 최소 <strong>${i.confirmMin.minScore}점</strong> 이상이면 ${S} 유지</p>`),g=`
        <p><strong>${S} 확정입니다.</strong></p>
        ${d}
      `}let I="";Pn(i)&&(I=`<p class="cheer-msg">${Tn()}</p>`);let P="";v.justUnlocked?P=`<p class="success">서로 다른 과목 ${se()}개 달성! 학년 선택에서 휴식 미니게임 이용</p>`:pe()?P='<p class="success">휴식 미니게임 이용 가능 (학년 선택 화면)</p>':v.isNew?P=`<p class="muted">${St()}</p>`:P='<p class="muted">이미 계산한 과목입니다. 다른 과목을 계산하면 해금에 가까워져요.</p>',f.classList.remove("hidden"),f.innerHTML=`
      <h3>${t} 결과</h3>
      <p>총점(반올림) <strong>${i.rounded}점</strong> · 현재 <strong>${ee(i.letter)}</strong></p>
      ${w}
      <p class="muted">가중 평균 ${i.average.toFixed(1)}점</p>
      <p>남은 항목 100점 시 <strong>${i.projRounded}점</strong> · <strong>${ee(i.projLetter)}</strong></p>
      ${g}
      ${I}
      ${P}
    `}),K(b),It(b)}function ya(){if(!pe()){N("grade");return}b.innerHTML=F(`
    <div class="stack-screen">
      ${ie()}
      <h2 class="screen-title">휴식 · 미니게임</h2>
      <div class="game-list">
        <button type="button" class="game-card" data-action="game-dart">다트 게임</button>
        <button type="button" class="game-card" data-action="game-cricket">크리켓 게임</button>
        <button type="button" class="game-card" data-action="game-breakout">벽돌깨기</button>
      </div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="grade">학년 선택으로</button>
        ${Z()}
      </div>
      ${te(W.subtitle)}
    </div>
  `),K(b)}function Te(e){if(!pe()){N("grade");return}Q({type:"game_open",message:`미니게임 시작: ${e}${Me()?" (관리자)":""}`,detail:{type:e}}),b.innerHTML=F('<div id="game-root"></div>',"game-screen");const t=b.querySelector("#game-root"),n={onBack:()=>N("rest"),onMain:()=>{B=null,ae=null,J=null,N("main")}};e==="dart"?ce=Hn(t,n)??null:e==="cricket"?ce=Kn(t,n)??null:e==="breakout"&&(ce=Xn(t,n)??null)}
