(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();const wt=8,J={title:"SCHOOL METRICS",subtitle:"철저한 내신관리 시스템",footer:"for 해연중 학생들",creator:"2210 박민호"},be={apiKey:"AIzaSyB7YJBfYa9zGnUvLD4DFgR5KLiNKuluHJM",authDomain:"school-metrics-fdee3.firebaseapp.com",projectId:"school-metrics-fdee3",storageBucket:"school-metrics-fdee3.firebasestorage.app",messagingSenderId:"378255554733",appId:"1:378255554733:web:01b06dca5b5307860eae24",measurementId:"G-0BL416S3QD"},ge="alyssabell729@gmail.com",tn=[ge,"20251413@haeyeon.ms.kr"];function C(){return!!(be.apiKey&&be.projectId&&be.appId)}function Me(e){return String(e||"").trim().toLowerCase()===ge.toLowerCase()}function Ke(e){const t=String(e||"").trim().toLowerCase();return tn.some(n=>n.toLowerCase()===t)}const nn="https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js",D="https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js",ee="https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";let ue=null,ve=null,fe=null,Se=null;async function yt(){return C()?ue||(Se||(Se=(async()=>{const{initializeApp:e,getApps:t}=await import(nn);return ue=t().length?t()[0]:e(be),ue})().catch(e=>(console.warn("[firebase] app init failed",e),Se=null,ue=null,null))),Se):null}async function B(){if(!C())return null;if(await oe(),ve)return ve;const e=await yt();if(!e)return null;const{getFirestore:t}=await import(D);return ve=t(e),ve}async function oe(){if(!C())return null;if(fe)return fe;const e=await yt();if(!e)return null;const{getAuth:t,setPersistence:n,browserLocalPersistence:r}=await import(ee);fe=t(e);try{await n(fe,r)}catch(a){console.warn("[firebase] auth persistence",a)}return fe}function Ie(e){const t=(e==null?void 0:e.code)||"";return{"auth/email-already-in-use":"이미 가입된 계정입니다. 로그인하세요.","auth/invalid-email":"이메일 형식이 올바르지 않습니다.","auth/weak-password":"비밀번호는 6자 이상이어야 합니다.","auth/user-not-found":"가입되지 않은 계정입니다. 먼저 회원가입하세요.","auth/wrong-password":"비밀번호가 틀렸습니다.","auth/invalid-credential":"이메일 또는 비밀번호가 올바르지 않습니다.","auth/too-many-requests":"시도가 너무 많습니다. 잠시 후 다시 시도하세요.","auth/network-request-failed":"네트워크 오류입니다. 연결을 확인하세요.","auth/operation-not-allowed":"Firebase에서 이메일/비밀번호 로그인을 켜야 합니다.","auth/missing-email":"이메일을 입력하세요.","auth/requires-recent-login":"보안을 위해 비밀번호를 다시 입력한 뒤 탈퇴해 주세요."}[t]||(e==null?void 0:e.message)||"인증에 실패했습니다."}async function an(e,t){const n=await oe();if(!n)throw new Error("Firebase가 설정되지 않았습니다.");const{createUserWithEmailAndPassword:r,sendEmailVerification:a}=await import(ee);try{const s=await r(n,e,t);try{await a(s.user)}catch(i){console.warn("[firebase] verification mail",i)}return s.user}catch(s){throw s.friendlyMessage=Ie(s),s}}async function rn(e,t){const n=await oe();if(!n)throw new Error("Firebase가 설정되지 않았습니다.");const{signInWithEmailAndPassword:r}=await import(ee);try{return(await r(n,e,t)).user}catch(a){throw a.friendlyMessage=Ie(a),a}}async function Ae(){const e=await oe();if(!e)return;const{signOut:t}=await import(ee);await t(e)}async function sn(e){const t=await oe();if(!(t!=null&&t.currentUser)){const i=new Error("로그인이 필요합니다.");throw i.friendlyMessage="로그인이 필요합니다.",i}const{EmailAuthProvider:n,reauthenticateWithCredential:r,deleteUser:a}=await import(ee),s=t.currentUser;try{const i=n.credential(s.email,e);await r(s,i),await a(s)}catch(i){throw i.friendlyMessage=Ie(i),i}}async function on(e,t){const n=await oe();if(!(n!=null&&n.currentUser)){const o=new Error("로그인이 필요합니다.");throw o.friendlyMessage="로그인이 필요합니다.",o}const{EmailAuthProvider:r,reauthenticateWithCredential:a,updatePassword:s}=await import(ee),i=n.currentUser;try{const o=r.credential(i.email,e);await a(i,o),await s(i,t)}catch(o){throw o.friendlyMessage=Ie(o),o}}async function xe(){const e=await oe();if(!e)return null;if(e.currentUser)return e.currentUser;const{onAuthStateChanged:t}=await import(ee);return new Promise(n=>{const r=t(e,a=>{r(),n(a||null)})})}async function ln(){const e=await xe();return e?(await e.reload(),e):null}async function cn(){const e=await xe();if(!e)throw new Error("로그인된 사용자가 없습니다.");const{sendEmailVerification:t}=await import(ee);await t(e)}async function dn(e){const t=await xe();if(!t)return;const{updateProfile:n}=await import(ee);await n(t,e)}async function kt(e,t){if(!e)return!1;const n=await B();if(!n)return!1;const{doc:r,setDoc:a,serverTimestamp:s}=await import(D),i={...t};return Object.keys(i).forEach(o=>{i[o]===void 0&&delete i[o]}),await a(r(n,"userProfiles",e),{...i,updatedAt:s()},{merge:!0}),!0}async function un(e){if(!e)return null;const t=await B();if(!t)return null;const{doc:n,getDoc:r}=await import(D),a=await r(n(t,"userProfiles",e));if(!a.exists())return null;const s=a.data();return delete s.updatedAt,s}async function fn(){const e=await B();if(!e)return[];const{collection:t,getDocs:n}=await import(D);return(await n(t(e,"userProfiles"))).docs.map(a=>({id:a.id,uid:a.id,...a.data()}))}async function vt(e){if(!e)return!1;const t=await B();if(!t)return!1;const{doc:n,deleteDoc:r}=await import(D);return await r(n(t,"userProfiles",e)),!0}async function mn(e){const t=String(e||"").trim().toLowerCase();if(!t)return!1;const n=await B();if(!n)return!1;const{doc:r,setDoc:a,serverTimestamp:s}=await import(D);return await a(r(n,"blockedAccounts",t),{account:t,blockedAt:s()}),!0}async function bn(e){const t=String(e||"").trim().toLowerCase();if(!t)return!1;const n=await B();if(!n)return!1;const{doc:r,deleteDoc:a}=await import(D);return await a(r(n,"blockedAccounts",t)),!0}async function gn(){const e=await B();if(!e)return[];const{collection:t,getDocs:n}=await import(D);return(await n(t(e,"blockedAccounts"))).docs.map(a=>{const s=a.data()||{};return{id:a.id,account:String(s.account||a.id||"").toLowerCase()}}).filter(a=>a.account).sort((a,s)=>a.account.localeCompare(s.account))}async function St(e){const t=String(e||"").trim().toLowerCase();if(!t)return!1;const n=await B();if(!n)return!1;const{doc:r,getDoc:a}=await import(D);try{return(await a(r(n,"blockedAccounts",t))).exists()}catch(s){return console.warn("[firebase] blocked check",s),!1}}async function pn(e){const t=await B();if(!t)return null;const{collection:n,addDoc:r,serverTimestamp:a}=await import(D),s={...e};return Object.keys(s).forEach(o=>{s[o]===void 0&&delete s[o]}),(await r(n(t,"activityLogs"),{...s,createdAt:a()})).id}async function hn(e=200){const t=await B();if(!t)return[];const{collection:n,query:r,orderBy:a,limit:s,getDocs:i}=await import(D),o=r(n(t,"activityLogs"),a("at","desc"),s(e));return(await i(o)).docs.map(m=>({id:m.id,...m.data()}))}async function me(e){const t=await B();if(!t)return 0;const{collection:n,getCountFromServer:r}=await import(D),a=await r(n(t,e));return Number(a.data().count)||0}async function wn(){const[e,t,n,r,a]=await Promise.all([me("activityLogs"),me("userProfiles"),me("blockedAccounts"),me("adminSettings"),me("deviceBindings")]),s=e+t+n+r+a,i=e*900+t*450+n*150+r*800+a*200;return{activityLogs:e,userProfiles:t,blockedAccounts:n,adminSettings:r,deviceBindings:a,totalDocs:s,estimateBytes:i}}async function yn(){const e=await B();if(!e)return 0;const{collection:t,getDocs:n,deleteDoc:r,query:a,limit:s}=await import(D);let i=0;for(;;){const o=await n(a(t(e,"activityLogs"),s(100)));if(o.empty||(await Promise.all(o.docs.map(b=>r(b.ref))),i+=o.size,o.size<100))break}return i}async function kn(e){const t=await B();if(!t)return!1;const{doc:n,setDoc:r,serverTimestamp:a}=await import(D),s={...e};return Object.keys(s).forEach(i=>{s[i]===void 0&&delete s[i]}),await r(n(t,"adminSettings","global"),{...s,updatedAt:a()}),!0}async function vn(){const e=await B();if(!e)return null;const{doc:t,getDoc:n}=await import(D),r=await n(t(e,"adminSettings","global"));if(!r.exists())return null;const a=r.data();return delete a.updatedAt,a}const Sn="modulepreload",$n=function(e,t){return new URL(e,t).href},lt={},$t=function(t,n,r){let a=Promise.resolve();if(n&&n.length>0){let i=function(g){return Promise.all(g.map(d=>Promise.resolve(d).then(c=>({status:"fulfilled",value:c}),c=>({status:"rejected",reason:c}))))};const o=document.getElementsByTagName("link"),b=document.querySelector("meta[property=csp-nonce]"),m=(b==null?void 0:b.nonce)||(b==null?void 0:b.getAttribute("nonce"));a=i(n.map(g=>{if(g=$n(g,r),g in lt)return;lt[g]=!0;const d=g.endsWith(".css"),c=d?'[rel="stylesheet"]':"";if(!!r)for(let w=o.length-1;w>=0;w--){const x=o[w];if(x.href===g&&(!d||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${g}"]${c}`))return;const l=document.createElement("link");if(l.rel=d?"stylesheet":Sn,d||(l.as="script"),l.crossOrigin="",l.href=g,m&&l.setAttribute("nonce",m),document.head.appendChild(l),d)return new Promise((w,x)=>{l.addEventListener("load",w),l.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${g}`)))})}))}function s(i){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i}return a.then(i=>{for(const o of i||[])o.status==="rejected"&&s(o.reason);return t().catch(s)})},we="schoolMetricsUserAccount",Ln=new Set(["2024","2025","2026"]),An=/^(\d{4})(\d{4})@haeyeon\.ms\.kr$/i,ct=6;function Lt(e){return String(e||"").trim().toLowerCase().replace(/\uFF20/g,"@").replace(/[\u200B-\u200D\uFEFF]/g,"").replace(/\s+/g,"")}function En(e){const n=Lt(e).match(An);if(!n)return{ok:!1,error:"해연중 계정(예: 20261111@haeyeon.ms.kr) 형식으로 입력하세요."};const r=n[1],a=n[2],s=Ee(a);return s.ok?Ln.has(r)?{ok:!0,account:`${r}${s.studentId}@haeyeon.ms.kr`,year:r,studentId:s.studentId,grade:s.grade,classNo:s.classNo,number:s.number,isAdminAccount:!1}:{ok:!1,error:"년도는 2024, 2025, 2026만 가능합니다."}:s}function Ce(e){const t=Lt(e);return Me(t)||t===ge.toLowerCase()?{ok:!0,account:ge.toLowerCase(),year:"admin",studentId:"admin",grade:0,classNo:0,number:0,isAdminAccount:!0}:t.includes("@")&&!t.endsWith("@haeyeon.ms.kr")?{ok:!1,error:"해연중 학교 계정(@haeyeon.ms.kr)만 사용할 수 있습니다."}:En(t)}function Ee(e){const t=String(e||"").trim();if(!/^\d{4}$/.test(t))return{ok:!1,error:"학번은 숫자 4자리여야 합니다. (예: 1111)"};const n=t[0],r=t[1],a=Number(t.slice(2));return["1","2","3"].includes(n)?"12345678".includes(r)?!Number.isInteger(a)||a<1||a>35?{ok:!1,error:"번호는 01~35만 가능합니다."}:{ok:!0,studentId:t,grade:Number(n),classNo:Number(r),number:a}:{ok:!1,error:"학번 둘째 자리(반)는 1~8만 가능합니다."}:{ok:!1,error:"학번 첫 자리(학년)는 1·2·3만 가능합니다."}}function At(e){const t=String(e||"").trim().replace(/\s+/g," ");return t.length<2?{ok:!1,error:"이름은 2글자 이상 입력하세요."}:t.length>20?{ok:!1,error:"이름은 20글자 이하로 입력하세요."}:{ok:!0,displayName:t}}function pe(e){return String(e||"").length<ct?{ok:!1,error:`비밀번호는 ${ct}자 이상이어야 합니다.`}:{ok:!0}}function Ve(e){return localStorage.setItem(we,JSON.stringify(e)),e}function Et(e,t={}){return{account:e.account,year:e.year,studentId:e.studentId,grade:e.grade,classNo:e.classNo,number:e.number,displayName:t.displayName||"",loggedInAt:new Date().toISOString(),viaPassword:!0,...t}}function T(){try{const e=localStorage.getItem(we);if(!e)return null;const t=JSON.parse(e);return t!=null&&t.account&&Ce(t.account).ok?t:null}catch{return null}}function Nt(){return!!T()}function de(){var e;return((e=T())==null?void 0:e.account)||null}function Nn(){var e;return((e=T())==null?void 0:e.displayName)||""}function Mn(){var e;return((e=T())==null?void 0:e.studentId)||""}function ze(e=T()){if(!e)return"";const t=[];return e.year&&e.year!=="admin"&&t.push(String(e.year)),e.studentId&&e.studentId!=="admin"&&t.push(e.studentId),e.displayName&&t.push(e.displayName),t.join(" · ")||e.account||""}function In(){var e;return((e=T())==null?void 0:e.year)||""}async function xn(){localStorage.removeItem(we);try{await Ae()}catch{}}async function Cn(e,t,n){if(!C())return{ok:!1,error:"Firebase 설정이 없습니다."};const r=T();if(!(r!=null&&r.account))return{ok:!1,error:"로그인이 필요합니다."};if(!pe(e).ok)return{ok:!1,error:"현재 비밀번호를 확인해 주세요."};const s=pe(t);if(!s.ok)return s;if(String(t)!==String(n||""))return{ok:!1,error:"새 비밀번호 확인이 일치하지 않습니다."};if(String(e)===String(t))return{ok:!1,error:"현재 비밀번호와 다른 비밀번호를 입력하세요."};try{await on(e,t);try{const{logActivity:i}=await $t(async()=>{const{logActivity:o}=await Promise.resolve().then(()=>Dt);return{logActivity:o}},[],import.meta.url);await i({type:"password_change",message:"비밀번호 변경",account:r.account,displayName:r.displayName||"",studentId:r.studentId||"",year:r.year||""})}catch(i){console.warn("[auth] password log",i)}return{ok:!0}}catch(i){return{ok:!1,error:i.friendlyMessage||i.message||"비밀번호 변경 실패"}}}async function qn(e){if(!C())return{ok:!1,error:"Firebase 설정이 없습니다."};const t=T();if(!(t!=null&&t.account))return{ok:!1,error:"로그인이 필요합니다."};if(t.isAdminAccount||Me(t.account))return{ok:!1,error:"이 계정은 탈퇴할 수 없습니다."};const n=pe(e);if(!n.ok)return n;try{try{const{logActivity:r}=await $t(async()=>{const{logActivity:a}=await Promise.resolve().then(()=>Dt);return{logActivity:a}},void 0,import.meta.url);await r({type:"user_withdraw",message:`계정 탈퇴: ${t.displayName||""} ${t.account}`.trim(),account:t.account,displayName:t.displayName||"",studentId:t.studentId||"",year:t.year||""})}catch(r){console.warn("[auth] withdraw log",r)}if(t.uid)try{await vt(t.uid)}catch(r){console.warn("[auth] delete profile",r)}return await sn(e),localStorage.removeItem(we),{ok:!0}}catch(r){return{ok:!1,error:r.friendlyMessage||r.message||"계정 탈퇴에 실패했습니다."}}}async function Mt(e,t){if(e){try{await dn({displayName:t.displayName||""})}catch(n){console.warn("[auth] updateProfile",n)}try{await kt(e,{displayName:t.displayName||"",studentId:t.studentId||"",year:t.year||"",account:t.account||"",grade:t.grade,classNo:t.classNo,number:t.number,uniqueSubjectCount:t.uniqueSubjectCount??0,gameUnlockCount:t.gameUnlockCount??0})}catch(n){console.warn("[auth] cloud profile",n)}}}async function Je(e,{requireVerified:t=!0}={}){const n=e==null?void 0:e.email;if(!n)return await Ae().catch(()=>{}),{ok:!1,error:"계정 이메일을 가져오지 못했습니다."};const r=Ce(n);if(!r.ok)return await Ae().catch(()=>{}),r;if(t&&!e.emailVerified&&!r.isAdminAccount)return{ok:!1,needVerify:!0,error:"학교 메일함에서 인증 메일의 링크를 눌러주세요. (스팸함도 확인)",account:r.account};let a=String(e.displayName||"").trim(),s=r.studentId,i=r.grade,o=r.classNo,b=r.number;try{const d=await un(e.uid);if(d!=null&&d.displayName&&(a=String(d.displayName).trim()),d!=null&&d.studentId){const c=Ee(d.studentId);c.ok&&(s=c.studentId,i=c.grade,o=c.classNo,b=c.number)}}catch(d){console.warn("[auth] load profile",d)}const m=T();if((m==null?void 0:m.account)===r.account&&(!a&&m.displayName&&(a=m.displayName),m.studentId)){const d=Ee(m.studentId);d.ok&&s===r.studentId&&m.studentId!==r.studentId&&(s=d.studentId,i=d.grade,o=d.classNo,b=d.number)}return{ok:!0,user:Ve(Et({...r,studentId:s,grade:i,classNo:o,number:b},{uid:e.uid||null,emailVerified:!!e.emailVerified,displayName:a,isAdminAccount:!!r.isAdminAccount}))}}async function Pn(e,t,n){if(!C())return{ok:!1,error:"Firebase 설정이 없습니다."};const r=At(n);if(!r.ok)return r;const a=Ce(e);if(!a.ok)return a;const s=pe(t);if(!s.ok)return s;try{if(await St(a.account))return{ok:!1,error:"관리자에 의해 삭제·차단된 계정입니다. 다시 가입할 수 없습니다."};const i=await an(a.account,t);return await Mt(i.uid,{displayName:r.displayName,studentId:a.studentId,year:a.year,account:a.account,grade:a.grade,classNo:a.classNo,number:a.number,uniqueSubjectCount:0,gameUnlockCount:0}),Ve(Et(a,{uid:i.uid,displayName:r.displayName,emailVerified:!1})),{ok:!1,needVerify:!0,registered:!0,account:a.account,displayName:r.displayName,error:"가입되었습니다. 학교 메일함의 인증 링크를 누른 뒤 로그인하세요. (스팸함도 확인)",uid:i==null?void 0:i.uid}}catch(i){const o=String(i.friendlyMessage||i.message||"");return/insufficient permissions|permission-denied/i.test(o)?{ok:!1,error:"서버 권한 설정이 아직 반영되지 않았습니다. 관리자에게 Firebase Rules 게시를 요청하세요."}:{ok:!1,error:i.friendlyMessage||i.message||"회원가입 실패"}}}async function Tn(e,t){if(!C())return{ok:!1,error:"Firebase 설정이 없습니다."};const n=Ce(e);if(!n.ok)return n;const r=pe(t);if(!r.ok)return r;try{const a=await rn(n.account,t);if(await a.reload(),await St(n.account))return await Ae().catch(()=>{}),{ok:!1,error:"관리자에 의해 삭제·차단된 계정입니다."};const s=await Je(a,{requireVerified:!n.isAdminAccount});return s.ok,s}catch(a){return{ok:!1,error:a.friendlyMessage||a.message||"로그인 실패"}}}async function _n({displayName:e,studentId:t}){const n=T();if(!n)return{ok:!1,error:"로그인이 필요합니다."};const r=At(e);if(!r.ok)return r;const a=Ee(t);if(!a.ok)return a;const s=Ve({...n,displayName:r.displayName,studentId:a.studentId,grade:a.grade,classNo:a.classNo,number:a.number});return await Mt(n.uid,{displayName:s.displayName,studentId:s.studentId,year:s.year,account:s.account,grade:s.grade,classNo:s.classNo,number:s.number}),{ok:!0,user:s}}async function Dn(){try{const e=await ln();if(!e)return{ok:!1,error:"먼저 로그인(비밀번호)을 다시 시도하세요."};const t=await Je(e,{requireVerified:!0});return t.ok,t}catch(e){return{ok:!1,error:e.message||"인증 상태 확인 실패"}}}async function Un(){try{return await cn(),{ok:!0,message:"인증 메일을 다시 보냈습니다. 메일함·스팸함을 확인하세요."}}catch(e){return{ok:!1,error:e.message||"인증 메일 재전송 실패"}}}async function jn(){if(!C())return $e(),null;try{const e=await xe();if(!e)return $e(),null;await e.reload();const t=await Je(e,{requireVerified:!0});return t.ok?t.user:($e(),null)}catch(e){return console.warn("[auth] restore",e),$e(),null}}function $e(){localStorage.removeItem(we)}const dt="schoolMetricsDeviceId";function qe(){let e=localStorage.getItem(dt);return e||(e=`dev-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,localStorage.setItem(dt,e)),e}const Ye="schoolMetricsAdminSettings",Ne="schoolMetricsActivityLog",Bn=500,le={restUnlockUses:wt,freeGames:!0,standardScale:[{letter:"A",min:90},{letter:"B",min:80},{letter:"C",min:70},{letter:"D",min:60},{letter:"E",min:0}],artsScale:[{letter:"A",min:80},{letter:"B",min:60},{letter:"C",min:0}]};function Xe(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function Qe(e,t){localStorage.setItem(e,JSON.stringify(t))}function H(){return Me(de())}function Fn(){}function Y(){const e=Xe(Ye,{});return{...le,...e,standardScale:e.standardScale||le.standardScale,artsScale:e.artsScale||le.artsScale}}function It(e){const t={...Y(),...e};return Qe(Ye,t),V({type:"admin_settings",message:"관리자 설정 변경",detail:e}),C()&&kn(t).catch(n=>console.warn("[firebase] settings save",n)),t}async function Ze(){if(!C())return Y();try{const e=await vn();if(e&&typeof e=="object"){const t={...le,...e,standardScale:e.standardScale||le.standardScale,artsScale:e.artsScale||le.artsScale};return Qe(Ye,t),t}}catch(e){console.warn("[firebase] settings load",e)}return Y()}function re(){return Number(Y().restUnlockUses)||wt}function ye(){return H()&&Y().freeGames!==!1}async function V(e){const t=T(),n={id:`${Date.now()}-${Math.random().toString(36).slice(2,7)}`,at:new Date().toISOString(),deviceId:qe(),...e,account:e.account||de()||"guest",displayName:e.displayName||Nn()||"",studentId:e.studentId||Mn()||"",year:e.year||In()||(t==null?void 0:t.year)||""},r=Xe(Ne,[]);if(r.unshift(n),Qe(Ne,r.slice(0,Bn)),C())try{await pn(n)}catch(a){console.warn("[firebase] log",a)}return n}function Pe(){return Xe(Ne,[])}async function et(){const e=Pe();if(!C())return{source:"local",logs:e};try{const t=await hn(300),n=new Map;for(const a of[...t,...e]){const s=a.id||`${a.at}-${a.deviceId}-${a.type}-${a.message}`;n.has(s)||n.set(s,a)}return{source:"firebase",logs:[...n.values()].sort((a,s)=>String(s.at).localeCompare(String(a.at)))}}catch(t){return console.warn("[firebase] fetch logs",t),{source:"local-fallback",logs:e,error:String(t.message||t)}}}async function xt(){if(!C())return{source:"none",users:[],error:"Firebase 미설정"};try{return{source:"firebase",users:(await fn()).filter(n=>n.account&&!String(n.account).includes("@gmail.com")&&!n.deleted).map(n=>({uid:n.uid||n.id||"",account:n.account||"",displayName:n.displayName||"",studentId:n.studentId||"",year:n.year||"",uniqueSubjectCount:Number(n.uniqueSubjectCount)||0,gameUnlockCount:Number(n.gameUnlockCount)||0})).sort((n,r)=>{const a=String(n.year).localeCompare(String(r.year));return a!==0?a:String(n.studentId).localeCompare(String(r.studentId))})}}catch(e){return console.warn("[firebase] fetch users",e),{source:"error",users:[],error:String(e.message||e)}}}async function Ct({uid:e,account:t,displayName:n,block:r=!1}){if(!C())return{ok:!1,error:"Firebase 미설정"};if(!e||!t)return{ok:!1,error:"삭제할 사용자 정보가 없습니다."};try{return r&&await mn(t),await vt(e),V({type:"admin_delete_user",message:`계정 삭제${r?"+차단":""}: ${n||""} ${t}`.trim(),detail:{uid:e,account:t,displayName:n,blocked:!!r}}),{ok:!0}}catch(a){return{ok:!1,error:a.message||"삭제 실패"}}}async function Oe(){if(!C())return{source:"none",accounts:[],error:"Firebase 미설정"};try{return{source:"firebase",accounts:await gn()}}catch(e){return{source:"error",accounts:[],error:e.message||"불러오기 실패"}}}async function He(e){if(!C())return{ok:!1,error:"Firebase 미설정"};const t=String(e||"").trim().toLowerCase();if(!t)return{ok:!1,error:"계정이 없습니다."};try{return await bn(t),V({type:"admin_unblock_user",message:`차단 해제: ${t}`,detail:{account:t}}),{ok:!0}}catch(n){return{ok:!1,error:n.message||"차단 해제 실패"}}}async function qt({cloud:e=!0}={}){if(localStorage.removeItem(Ne),e&&C())try{await yn()}catch(t){console.warn("[firebase] clear",t)}V({type:"admin_clear_logs",message:"활동 로그 초기화"})}function Pt(e=Pe()){return JSON.stringify({exportedAt:new Date().toISOString(),deviceId:qe(),firebase:C(),settings:Y(),logs:e},null,2)}async function Tt(){if(!C())return{ok:!1,error:"Firebase 미설정"};try{return{ok:!0,...await wn()}}catch(e){return{ok:!1,error:e.message||"사용량 조회 실패"}}}function _t(){const e=de();return{configured:C(),projectId:be.projectId||"",adminEmail:ge,isCloudAdmin:Me(e),account:e||""}}const Dt=Object.freeze(Object.defineProperty({__proto__:null,adminLogout:Fn,clearActivityLogs:qt,deleteRegisteredUser:Ct,exportActivityLogsText:Pt,getActivityLogs:Pe,getAdminSettings:Y,getBlockedAccounts:Oe,getCloudUsageStats:Tt,getDeviceId:qe,getEffectiveUnlockUses:re,getFirebaseStatus:_t,getMergedActivityLogs:et,getRegisteredUsers:xt,isAdminFreeGames:ye,isAdminSession:H,logActivity:V,saveAdminSettings:It,syncAdminSettingsFromCloud:Ze,unblockAccount:He},Symbol.toStringTag,{value:"Module"})),Te="schoolMetricsUniqueSubjects",tt="schoolMetricsGameUnlockCount";function Ut(){try{const e=localStorage.getItem(Te),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch{return[]}}function Rn(e){localStorage.setItem(Te,JSON.stringify(e))}function jt(){const e=Number(localStorage.getItem(tt)||0);return Number.isFinite(e)&&e>0?Math.floor(e):0}function On(e){localStorage.setItem(tt,String(Math.max(0,Math.floor(e))))}function nt(){var t;const e=T();!(e!=null&&e.uid)||!C()||e.isAdminAccount||(t=e.account)!=null&&t.includes("@gmail.com")||kt(e.uid,{displayName:e.displayName||"",studentId:e.studentId||"",year:e.year||"",account:e.account||"",grade:e.grade,classNo:e.classNo,number:e.number,uniqueSubjectCount:_e(),gameUnlockCount:jt()}).catch(n=>console.warn("[storage] profile sync",n))}function Hn(e){const t=re(),n=Ut(),r=!n.includes(e);r&&(n.push(e),Rn(n));const a=n.length,s=r&&a>=t;return s&&On(jt()+1),nt(),{isNew:r,uniqueCount:a,justUnlocked:s}}function _e(){return Ut().length}function ke(){return ye()?!0:_e()>=re()}function Wn(){return Math.max(0,re()-_e())}function Gn(){ye()||(localStorage.removeItem(Te),nt())}function Kn(){localStorage.removeItem(Te),localStorage.removeItem(tt)}function Bt(){const e=re(),t=_e(),n=Wn();return ye()?"관리자 모드: 미니게임 자유 이용":ke()?`서로 다른 과목 ${t}개 달성! 휴식 미니게임 이용 가능`:`서로 다른 과목 ${n}개 더 계산하면 해금 (${t}/${e})`}const je=["희망은 좋은 것이다. 어쩌면 가장 좋은 것일지도. — 《쇼생크 탈출》","해야 한다, 아니면 안 된다. 그 중간은 없다. — 《스타워즈》","과거는 과거일 뿐이야. 배울 수만 있다면. — 《라이온 킹》","가장 어두운 시간은 해가 뜨기 직전이다. — 《어벤져스: 엔드게임》","세상에서 중요한 건 내가 누구냐가 아니라, 내가 뭘 하느냐다. — 《배트맨: 다크나이트》","우리에게 주어진 시간을 어떻게 쓸지만 결정하면 된다. — 《반지의 제왕》","아주 작은 존재도 미래를 바꿀 수 있다. — 《반지의 제왕》","자유는 아무 대가 없이 오지 않는다. — 《브레이브하트》","지금 이 순간을 잡아라. — 《데드 포엇 소사이어티》","무엇이든 할 수 있다. — 《쿵푸 판다》","그냥 계속 헤엄쳐. — 《니모를 찾아서》","모든 걸 시도해 봐. — 《주토피아》","두려움을 없애는 방법은 그것과 마주하는 것이다. — 《인사이드 아웃》","뜻이 있는 곳에 길이 있다. — 《아바타》","비가 그친 뒤에는 반드시 맑은 하늘이 온다. — 《날씨의 아이》","나는 이 세계를 이해할 수 없어. 그래도 계속한다. — 《록키》","시련이 없었다면 챔피언도 없다. — 《록키》","인생은 수레바퀴와 같아. 항상 앞으로 나아가야 한다. — 《니모를 찾아서》","이겨야 한다. 어떻게든. — 《친구》","꿈은 거짓말이 아니다. 반드시 이루어질 내일이다. — 《드림하이》","포기하면 그 순간 게임 끝이야, 인생도 마찬가지다. — 《슬램덩크》","죽을 때 후회 없는 인생을 살아라. — 《원피스》","약한 것은 죄가 아니다. 약한 채로 있으면 안 될 뿐. — 《귀멸의 칼날》","막을 때까지 싸워라. — 《진격의 거인》","노력은 배신하지 않는다. — 《하이큐!!》","패배는 패배하지 않는 것보다 낫다. — 《하이큐!!》","시선을 돌리지 마. 앞만 봐. — 《센과 치히로의 행방불명》","살아있는 한 힘을 내라. — 《하울의 움직이는 성》","바람이 분다. 견뎌야 한다. — 《바람의 나라》","상대는 나 자신이다. — 《초속 5센티미터》","포기하지 말 것. 내일이 있으니. — 《드래곤볼》","사람은 누구나 다시 태어날 수 있다. — 《바람의 나라》","아는 것이 힘이다. — 프랜시스 베이컨","천 리 길도 한 걸음부터. — 노자","배우고 또 배우면 어찌 기쁘지 아니하랴. — 공자","백번 듣는 것보다 한 번 보는 것이 낫다. — 공자","세 사람이 길을 가면 반드시 나의 스승이 있다. — 공자","하늘은 큰 뜻을 품은 자에게 먼저 고생을 시킨다. — 맹자","독서는 마음의 양식이다. — 키케로","하늘은 스스로 돕는 자를 돕는다. — 소포클레스","그대가 갈망하는 것을 따르라. — 랄프 왔도 에머슨","겁쟁이는 죽기 전에 여러 번 죽는다. 용감한 자는 한 번만 죽는다. — 셰익스피어","열정 없이는 위대한 것은 이루어지지 않는다. — 게오르크 빌헬름 프리드리히 헤겔","나는 나의 운명을 사랑한다. — 프리드리히 니체","오늘 할 일을 내일로 미루지 마라. — 벤자민 프랭클린","천재는 1%의 영감과 99%의 땀이다. — 토마스 에디슨","실패는 성공의 어머니이다. — 토마스 에디슨","시간은 금이다. — 벤자민 프랭클린","어리석은 자는 경험에서 아무것도 배우지 않는다. — 벤자민 프랭클린","실용적인 것이 가장 시적인 것이다. — 벤자민 프랭클린","깊은 생각 없는 독서는 낮잠과 같다. — 프랜시스 베이컨","인생은 속도가 아니라 방향이다. — 에이브러햄 링컨","성공은 최종적인 것이 아니며, 실패는 치명적인 것이 아니다. — 윈스턴 처칠","가장 위대한 영광은 넘어지지 않는 것이 아니라, 넘어질 때마다 일어서는 것이다. — 넬슨 만델라","용기는 두려움의 부재가 아니라, 두려움에도 행동하는 것이다. — 넬슨 만델라","네가 할 수 있다고 믿든 못 한다고 믿든, 네 말이 맞다. — 헨리 포드","성공의 비결은 시작하는 것이다. — 마크 트웨인","행운은 준비된 자에게 찾아온다. — 루이 파스퇴르","한계란 대부분 마음속에 있는 환상일 뿐이다. — 무하마드 알리","나는 세계 챔피언이다. 내가 그렇다고 말하기 전부터. — 무하마드 알리","항상 갈망하고, 우직하게 나아가라. — 스티브 잡스","당신의 시간은 제한되어 있다. 다른 사람의 인생을 살며 낭비하지 마라. — 스티브 잡스","오늘 나는 죽었다면 무엇을 후회하겠는가. — 스티브 잡스","죽고자 하면 살 것이요, 살고자 하면 죽을 것이니라. — 이순신","한 번도 실수한 적 없는 사람은 새로운 것을 시도한 적이 없는 사람이다. — 알버트 아인슈타인","네가 정말 소중히 여기는 것에 시간을 써라. — 《어린 왕자》","꽃을 단 한 송이라도 내가 직접 가꾸면, 내 세계에 엇비슷한 시간이 흐른다. — 《어린 왕자》","세상에서 가장 강한 사람은 스스로를 이기는 사람이다. — 무라카미 하루키","빛을 보고자 한다면 어둠을 견뎌야 한다. — 무라카미 하루키","사람은 마음먹은 것은 다 이룬다. — 《바보》","고통 없이는 얻는 것도 없다. — 라틴 격언","로마는 하루아침에 이루어지지 않았다. — 속담","연습이 완벽을 만든다. — 속담","배움에는 왕도가 없다. — 유클리드","작은 일에 충실하라. 그곳에 네 힘이 있다. — 루드야드 키플링","가장 큰 위험은 위험을 감수하지 않는 것이다. — 마크 주커버그","인생은 짧고, 예술은 길다. — 히포크라테스","삶을 살아가는 가장 좋은 복수는 성공하는 것이다. — 프랭크 시나트라","피할 수 없으면 즐겨라. — 로버트 엘리엇","포기하지 않는 한, 늦었다고 생각할 때가 가장 빠른 때다. — 속담","꾸준함은 재능을 이긴다. — 속담","반복은 지루하지만, 반복 없는 실력은 환상이다. — 속담","오늘의 노력이 내일의 실력이 된다. — 속담","지금이 가장 빠른 시작이다. — 속담","목표 없는 공부는 방향 잃은 배와 같다. — 속담","모르는 것을 아는 것이 배움의 시작이다. — 속담","실력은 하루아침에 생기지 않는다. — 속담","쉬는 것도 실력이다. 번아웃을 조심하자. — 속담","비교하지 말고, 어제의 나와 겨루자. — 속담","이해가 안 되면 다시 보면 된다. 반복이 답이다. — 속담","시험은 결과일 뿐, 과정이 실력이다. — 속담","1%씩 매일 오르면 37배가 된다. — 속담","모르는 건 부끄러운 게 아니다. 묻지 않는 게 문제다. — 속담","오답 노트 한 장이 교과서 열 페이지보다 강하다. — 속담","할 수 있다고 믿는 순간, 절반은 온 것이다. — 속담","오늘 공부한 만큼, 내일은 덜 불안하다. — 속담"],ut="schoolMetricsQuoteIndex";function Vn(){let e=Number(localStorage.getItem(ut)||0);const t=je[e%je.length];return localStorage.setItem(ut,String((e+1)%je.length)),t}const zn={1:{label:"1학년",note:"1학년은 2학기부터 내신 성적이 반영됩니다.",subjects:{국어:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"나만의 노트(나노)",weight:15,kind:"perf"}]}}},수학:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"기본도형 탐구 프로젝트",weight:20,kind:"perf"},{label:"평면·입체 도형 탐구",weight:20,kind:"perf"}]}}},사회:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"사회화 자서전 만들기",weight:20,kind:"perf"},{label:"모의 선거",weight:20,kind:"perf"}]}}},과학:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"실험 보고서 작성",weight:20,kind:"perf"},{label:"달의 위상 변화 관찰",weight:20,kind:"perf"}]}}},영어:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"희망 직업 소개",weight:20,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]}}},음악:{semesters:{2:{label:"2학기",items:[{label:"우쿨렐레 연주",weight:50,kind:"perf"},{label:"작곡가 탐구 활동",weight:50,kind:"perf"}]}}},미술:{semesters:{2:{label:"2학기",items:[{label:"스텐실",weight:50,kind:"perf"},{label:"문자도",weight:50,kind:"perf"}]}}},체육:{semesters:{2:{label:"2학기",items:[{label:"경기형 스포츠(축구)",weight:50,kind:"perf"},{label:"기록 도전형(달리기)",weight:50,kind:"perf"}]}}},정보:{semesters:{2:{label:"2학기",items:[{label:"AI 활용",weight:50,kind:"perf"},{label:"디지털 문화 표현",weight:50,kind:"perf"}]}}},"진로와 직업":{semesters:{2:{label:"2학기",items:[{label:"창업 프로젝트",weight:50,kind:"perf"},{label:"진로 디자인",weight:50,kind:"perf"}]}}},기술가정:{semesters:{2:{label:"2학기",items:[{label:"과학·미래기술 보고서",weight:35,kind:"perf"},{label:"에너지 신문 제작",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]}}}}},2:{label:"2학년",subjects:{국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"발표와 듣기",weight:15,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"복합양식 자료를 활용한 글 작성",weight:15,kind:"perf"}]}}},수학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"일차방정식·일차부등식",weight:20,kind:"perf"},{label:"연립일차방정식·일차함수",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"삼각형·사각형의 성질",weight:20,kind:"perf"},{label:"도형의 닮음·피타고라스",weight:20,kind:"perf"}]}}},역사:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"고대 문명 지도 만들기",weight:20,kind:"perf"},{label:"고대사 신문 만들기",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"서양 고대 문화유산 소개",weight:20,kind:"perf"},{label:"유럽 여행 소개 글쓰기",weight:20,kind:"perf"}]}}},과학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"밀도 측정",weight:10,kind:"perf"},{label:"지권 층상구조 모형 제작",weight:10,kind:"perf"},{label:"주기율표 탐구",weight:10,kind:"perf"},{label:"광합성 탐구",weight:10,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"소리의 성질 탐구",weight:10,kind:"perf"},{label:"인체 프로젝트",weight:20,kind:"perf"},{label:"전류,전압,저항 사이의 관계 탐구",weight:10,kind:"perf"}]}}},영어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"},{label:"발명품 소개",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"지역 축제 홍보",weight:20,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]}}},음악:{semesters:{1:{label:"1학기",items:[{label:"우쿨렐레 연주",weight:50,kind:"perf"},{label:"텅드럼 연주",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"펜비트 연주",weight:50,kind:"perf"},{label:"리코더 연주",weight:50,kind:"perf"}]}}},미술:{semesters:{1:{label:"1학기",items:[{label:"세밀화",weight:50,kind:"perf"},{label:"음식 모형 만들기",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"점묘화",weight:50,kind:"perf"},{label:"서양미술사 보고서",weight:50,kind:"perf"}]}}},체육:{semesters:{1:{label:"1학기",items:[{label:"경기형 스포츠(킨볼)",weight:60,kind:"perf"},{label:"도전형(제자리멀리뛰기)",weight:40,kind:"perf"}]},2:{label:"2학기",items:[{label:"경기형 스포츠(배드민턴)",weight:60,kind:"perf"},{label:"건강관리(줄넘기)",weight:40,kind:"perf"}]}}},도덕:{semesters:{1:{label:"1학기",items:[{label:"도덕적 인물 지폐 제작",weight:50,kind:"perf"},{label:"우정 네 컷 만들기",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"정보 카드 뉴스 제작",weight:50,kind:"perf"},{label:"인권 모니터링 제안서",weight:50,kind:"perf"}]}}},중국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 기말고사",weight:40,kind:"exam"},{label:"한어병음 작성",weight:30,kind:"perf"},{label:"중국어 말하기",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 기말고사",weight:40,kind:"exam"},{label:"하루 일과표 만들기",weight:30,kind:"perf"},{label:"중국어 말하기",weight:30,kind:"perf"}]}}},"금융과 미래":{semesters:{2:{label:"2학기",items:[{label:"투자 성향 검사",weight:50,kind:"perf"},{label:"투자 포트폴리오 구성",weight:50,kind:"perf"}]}}},기술가정:{semesters:{1:{label:"1학기",items:[{label:"효과적 의사소통 프로젝트",weight:35,kind:"perf"},{label:"제조 기술 프로젝트",weight:35,kind:"perf"},{label:"자기주도노트 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"균형 잡힌 식단 계획",weight:35,kind:"perf"},{label:"친환경 의복 생활",weight:35,kind:"perf"},{label:"자기주도노트 작성",weight:30,kind:"perf"}]}}}}},3:{label:"3학년",note:"3학년 2학기에는 기말고사가 없습니다.",subjects:{국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"논설문 쓰기",weight:15,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"한 학기 한 권 읽기",weight:30,kind:"perf"},{label:"문장의 짜임 고려해서 자신감 있게 발표",weight:30,kind:"perf"}]}}},사회:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"국가 기관 탐구로 권력 분립 이해",weight:20,kind:"perf"},{label:"국민 경제 지표와 국제 거래 이해",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"인구·도시 문제 탐구",weight:30,kind:"perf"},{label:"농업 산업화·세계화",weight:30,kind:"perf"}]}}},역사:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"고려 정치 변천",weight:20,kind:"perf"},{label:"고려의 문화 및 조선 통치 체제 탐구",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"조선 왕 가상 인터뷰",weight:30,kind:"perf"},{label:"양 난의 이해 및 영정조 정책 탐구",weight:30,kind:"perf"}]}}},도덕:{semesters:{1:{label:"1학기",items:[{label:"1학기 기말고사",weight:40,kind:"exam"},{label:"폭력 예방 논술문 작성",weight:30,kind:"perf"},{label:"사회 정의 실현 논술문 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"환경 보호 제안서",weight:30,kind:"perf"},{label:"실패 이력서 소개",weight:30,kind:"perf"}]}}},수학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"인수분해를 이용한 수의 성질 탐구",weight:20,kind:"perf"},{label:"이차함수 그래프",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"삼각비 개념 보고서",weight:30,kind:"perf"},{label:"원의 성질 문제해결",weight:30,kind:"perf"}]}}},과학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"기상 현상 실험",weight:20,kind:"perf"},{label:"화학 반응의 규칙 탐구",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"세포분열 관찰 실험",weight:30,kind:"perf"},{label:"물체 운동 분석",weight:30,kind:"perf"}]}}},영어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:15,kind:"perf"},{label:"급식 메뉴 프로젝트",weight:15,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"영어 듣기",weight:20,kind:"perf"},{label:"영어독서",weight:20,kind:"perf"},{label:"통계 자료 활용 프로젝트",weight:20,kind:"perf"}]}}},음악:{semesters:{1:{label:"1학기",items:[{label:"칼림바 연주",weight:50,kind:"perf"},{label:"전자드럼 연주",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"노래 부르기",weight:50,kind:"perf"},{label:"디자인사 연구보고서",weight:50,kind:"perf"}]}}},미술:{semesters:{1:{label:"1학기",items:[{label:"포트레이트 드로잉",weight:50,kind:"perf"},{label:"비주얼 리터러시",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"오마주",weight:50,kind:"perf"},{label:"디자인 조사 보고서",weight:50,kind:"perf"}]}}},체육:{semesters:{1:{label:"1학기",items:[{label:"전통 표현(티니클링)",weight:40,kind:"perf"},{label:"플로어볼",weight:60,kind:"perf"}]},2:{label:"2학기",items:[{label:"건강·체력 관리(타바타)",weight:40,kind:"perf"},{label:"배구",weight:60,kind:"perf"}]}}},기술가정:{semesters:{1:{label:"1학기",items:[{label:"생애 설계",weight:35,kind:"perf"},{label:"수송기술 제작",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"스마트폰 앱 만들기",weight:35,kind:"perf"},{label:"적정 기술 사례 조사",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]}}}}}};function he(e){return zn[e]??null}function Jn(e){const t=he(e);return t?Object.keys(t.subjects):[]}function at(e,t){var n;return((n=he(e))==null?void 0:n.subjects[t])??null}function Ft(e,t){const n=at(e,t);return n?Object.keys(n.semesters).map(Number).sort((r,a)=>r-a):[]}function We(e,t,n){var a;const r=at(e,t);return((a=r==null?void 0:r.semesters[n])==null?void 0:a.items)??[]}function ft(e,t,n){var a;const r=at(e,t);return((a=r==null?void 0:r.semesters[n])==null?void 0:a.label)??`${n}학기`}function Yn(e,t,n,r){return`${e}-${t}-${n}-${r}`}function rt(e,t,n){return We(e,t,n).map((a,s)=>({key:Yn(e,t,n,s),subject:t,semester:n,label:a.label,weight:a.weight,kind:a.kind}))}function st(e,t){let n=0,r=0;for(const a of e){const s=t[a.key];if(s===""||s===null||s===void 0)continue;const i=Number(s);Number.isNaN(i)||(n+=a.weight,r+=i*a.weight)}return n===0?null:r/n}function Xn(e,t){const n={},r=[];for(const s of e){const i=t[s.key];if(i===""||i===null||i===void 0){r.push(s);continue}const o=Number(i);if(Number.isNaN(o)){r.push(s);continue}n[s.key]=o}const a={...n};for(const s of r)a[s.key]=100;return{average:st(e,a),remainingCount:r.length}}const Qn=["음악","미술","체육"],Zn=[{letter:"A",min:90},{letter:"B",min:80},{letter:"C",min:70},{letter:"D",min:60},{letter:"E",min:0}],ea=[{letter:"A",min:80},{letter:"B",min:60},{letter:"C",min:0}];function Rt(e){return e.map((t,n,r)=>{const a=r[n-1],s=t.min===0?`${t.letter} (${(a==null?void 0:a.min)??60}점 미만)`:`${t.letter} (${t.min}점 이상)`;return{letter:t.letter,min:Number(t.min)||0,label:s}})}function Ot(){const e=Y().standardScale;return Rt(e!=null&&e.length?e:Zn)}function Ht(){const e=Y().artsScale;return Rt(e!=null&&e.length?e:ea)}function it(e){return Qn.includes(e)}function De(e){return e==null||Number.isNaN(e)?null:Math.round(e)}function ot(e){return it(e)?Ht():Ot()}function Ge(e,t){const n=De(e);if(n===null)return"-";const r=ot(t);for(const a of r)if(n>=a.min)return a.letter;return r[r.length-1].letter}function ae(e){return`${e}등급`}const mt=["조금만 더 올리면 된다. 할 수 있어!","상위 등급이 코앞이다. 끝까지 달려보자!","지금의 노력이 등급을 바꾼다. 포기하지 마!","아직 끝나지 않았어. 충분히 올릴 수 있어!","남은 항목이 기회다. 집중해서 마무리하자!","한 걸음만 더 가면 등급이 달라진다. 파이팅!","가능성은 아직 살아 있다. 믿고 가보자!","오늘의 한 문제가 등급을 바꿀 수도 있어!","목표 등급까지 거의 다 왔다. 조금만 더!","실력은 거짓말하지 않는다. 계속 밀어붙여!"];function ta(e){return e.projection.remainingCount>0&&e.letter!==e.projLetter}function na(){const e=Math.floor(Math.random()*mt.length);return mt[e]}function Wt(e=null){const t=e?it(e):!1,n=e?t?`${e}은(는) 예체능 과목 (A·B·C)`:`${e}은(는) 일반 과목 (A·B·C·D·E)`:"과목 유형에 따라 등급 기준이 다릅니다.",r=Ot(),a=Ht();return`
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
  `}function Gt(e){const t=e.querySelector("[data-toggle='criteria']"),n=e.querySelector("#criteria-panel");!t||!n||t.addEventListener("click",()=>{const r=n.classList.toggle("hidden");t.setAttribute("aria-expanded",String(!r)),t.textContent=r?"▶ 등급 기준표 확인":"▼ 등급 기준표 닫기"})}function Kt(e,t,n,r){if(n===null)return null;const a=De(n),s=Ge(a,r),i=ot(r),o=i.findIndex($=>$.letter===s);if(o<=0)return{targetLetter:s,needed:null,message:"이미 최고 등급입니다."};const b=i[o-1],m=b.min,g=e.filter($=>{const v=t[$.key];return v===""||v===null||v===void 0||Number.isNaN(Number(v))});if(g.length===0)return{targetLetter:b.letter,needed:null,message:"모든 항목이 입력되었습니다."};let d=0,c=0,k=0;for(const $ of e){const v=t[$.key];if(v===""||v===null||v===void 0||Number.isNaN(Number(v))){k+=$.weight;continue}d+=$.weight,c+=Number(v)*$.weight}if(k===0)return null;const l=d+k,w=(m*l-c)/k,x=Math.max(0,Math.min(100,w));return{targetLetter:b.letter,needed:Math.ceil(x*10)/10,remainingCount:g.length,message:null}}function aa(e,t,n,r){const s=ot(r).find(l=>l.letter===n);if(!s)return null;let i=0,o=0,b=0,m=0;for(const l of e){const w=t[l.key];if(w===""||w===null||w===void 0||Number.isNaN(Number(w))){b+=l.weight,m+=1;continue}o+=l.weight,i+=Number(w)*l.weight}if(b===0)return null;const g=o+b,c=((s.min-.5)*g-i)/b;return{minScore:Math.ceil(Math.max(0,Math.min(100,c))*10)/10,remainingCount:m}}function ra(e){const t=De(e);return{raw:e,rounded:t,display:`${t}점`}}function sa(e,t,n){const r=st(e,t);if(r===null)return null;const{rounded:a}=ra(r),s=Ge(a,n),i=Xn(e,t),o=De(i.average),b=Kt(e,t,r,n),m=aa(e,t,s,n);return{average:r,rounded:a,letter:s,projection:i,projRounded:o,projLetter:Ge(o,n),needed:b,confirmMin:m}}function te(e="globe"){return`
    <svg class="${e}" viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="48" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.35"/>
      <ellipse cx="60" cy="60" rx="48" ry="16" fill="none" stroke="currentColor" stroke-width="1"/>
      <ellipse cx="60" cy="60" rx="16" ry="48" fill="none" stroke="currentColor" stroke-width="1"/>
      <ellipse cx="60" cy="60" rx="34" ry="48" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.7"/>
      <line x1="12" y1="60" x2="108" y2="60" stroke="currentColor" stroke-width="0.8"/>
      <line x1="60" y1="12" x2="60" y2="108" stroke="currentColor" stroke-width="0.8"/>
    </svg>
  `}function ia(){return'<img class="title-bg" src="./title-bg.png" alt="" aria-hidden="true" />'}function oa(){return'<img class="go-bg" src="./go-bg.png" alt="" aria-hidden="true" />'}function Vt(e){return`grade-theme-${e}`}function U(e,t=""){return`<div class="phone-screen ${t}">${e}</div>`}function ne(e){return`<p class="screen-footer">${e}</p>`}function z(e="main"){return`<button type="button" class="link-btn" data-action="${e}">메인화면으로</button>`}const zt=[20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5],Le=8;function la(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function ca(e,t,n){var r,a;(r=e.querySelector('[data-nav="back"]'))==null||r.addEventListener("click",t),(a=e.querySelector('[data-nav="main"]'))==null||a.addEventListener("click",n)}function da(e,t){const n=Math.hypot(e,t);if(n>1)return{points:0,label:"보드 밖"};if(n<=.07)return{points:50,label:"더블 불 · 50"};if(n<=.14)return{points:25,label:"싱글 불 · 25"};let r=Math.atan2(e,-t);r<0&&(r+=Math.PI*2);const a=Math.floor((r+Math.PI/20)%(Math.PI*2)/(Math.PI/10)),s=zt[a];return n>=.9?{points:s*2,label:`더블 ${s} · ${s*2}`}:n>=.52&&n<=.62?{points:s*3,label:`트리플 ${s} · ${s*3}`}:{points:s,label:`싱글 ${s} · ${s}`}}function Be(e,t,n){const r=t/2,a=t/2,s=t*.42;e.clearRect(0,0,t,t),e.fillStyle="#1a1a1a",e.beginPath(),e.arc(r,a,s*1.08,0,Math.PI*2),e.fill();for(let i=0;i<20;i++){const o=-Math.PI/2-Math.PI/20+i*Math.PI/10,b=o+Math.PI/10,m=i%2===0;e.beginPath(),e.moveTo(r,a),e.arc(r,a,s*.9,o,b),e.closePath(),e.fillStyle=m?"#111":"#ece6d8",e.fill(),e.beginPath(),e.moveTo(r,a),e.arc(r,a,s*.52,o,b),e.closePath(),e.fillStyle=m?"#1c1c1c":"#f5f0e6",e.fill(),e.beginPath(),e.arc(r,a,s,o,b),e.arc(r,a,s*.9,b,o,!0),e.closePath(),e.fillStyle=i%2===0?"#c4122f":"#0a7a3c",e.fill(),e.beginPath(),e.arc(r,a,s*.62,o,b),e.arc(r,a,s*.52,b,o,!0),e.closePath(),e.fillStyle=i%2===0?"#c4122f":"#0a7a3c",e.fill()}e.strokeStyle="rgba(180,180,180,0.55)",e.lineWidth=1;for(let i=0;i<20;i++){const o=-Math.PI/2-Math.PI/20+i*Math.PI/10;e.beginPath(),e.moveTo(r,a),e.lineTo(r+Math.cos(o)*s,a+Math.sin(o)*s),e.stroke()}[.9,.62,.52,.14,.07].forEach(i=>{e.beginPath(),e.arc(r,a,s*i,0,Math.PI*2),e.stroke()}),e.beginPath(),e.arc(r,a,s*.14,0,Math.PI*2),e.fillStyle="#0a7a3c",e.fill(),e.beginPath(),e.arc(r,a,s*.07,0,Math.PI*2),e.fillStyle="#c4122f",e.fill(),e.fillStyle="#fff",e.font=`bold ${Math.max(10,t*.045)}px sans-serif`,e.textAlign="center",e.textBaseline="middle";for(let i=0;i<20;i++){const o=-Math.PI/2+i*Math.PI/10,b=r+Math.cos(o)*s*1.14,m=a+Math.sin(o)*s*1.14;e.fillText(String(zt[i]),b,m)}for(const i of n)e.beginPath(),e.arc(r+i.nx*s,a+i.ny*s,4,0,Math.PI*2),e.fillStyle="#fff700",e.fill(),e.strokeStyle="#000",e.stroke()}function ua(e,{onBack:t,onMain:n}){let r=0,a=Le,s="vertical",i=.5,o=.5,b=1,m=1,g=0,d=0;const c=[],k=1.35;e.innerHTML=`
    <div class="game-panel">
      <h2 class="game-title">다트 게임</h2>
      <p class="game-desc">바가 가운데 올 때 탭/스페이스로 멈추세요. (세로 → 가로)</p>
      <div class="dart-stats">
        <span id="dart-score">점수: 0</span>
        <span id="dart-throws">남은 횟수: ${Le}</span>
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
      ${la()}
    </div>
  `;const l=e.querySelector("#dart-canvas"),w=l.getContext("2d"),x=e.querySelector("#dart-score"),$=e.querySelector("#dart-throws"),v=e.querySelector("#dart-feedback"),p=e.querySelector("#dart-stop"),M=e.querySelector("#dart-retry"),_=e.querySelector("#aim-v"),R=e.querySelector("#aim-h"),W=e.querySelector(".aim-bar-v"),O=e.querySelector(".aim-bar-h");function j(){const u=Math.min(300,e.clientWidth||300);l.width=u,l.height=u,Be(w,u,c)}function G(){_.style.top=`${i*100}%`,R.style.left=`${o*100}%`,W.classList.toggle("active",s==="vertical"),O.classList.toggle("active",s==="horizontal")}function X(u){d||(d=u);const h=Math.min(.05,(u-d)/1e3);d=u,s==="vertical"?(i+=b*k*h,i>=1&&(i=1,b=-1),i<=0&&(i=0,b=1)):s==="horizontal"&&(o+=m*k*h,o>=1&&(o=1,m=-1),o<=0&&(o=0,m=1)),G(),g=requestAnimationFrame(X)}function Q(){const u=(i-.5)*2.05,h=(o-.5)*2.05,A=da(h,u);if(c.push({nx:h,ny:u}),r+=A.points,a-=1,x.textContent=`점수: ${r}`,$.textContent=`남은 횟수: ${a}`,Be(w,l.width,c),v.textContent=A.label,a<=0){s="done",p.classList.add("hidden"),M.classList.remove("hidden"),v.textContent=`게임 종료! 최종 ${r}점`;return}s="vertical",i=Math.random(),o=Math.random(),v.textContent="세로 바를 가운데에 맞춰 멈추세요!"}function y(u){var h;if((h=u==null?void 0:u.preventDefault)==null||h.call(u),s==="vertical"){s="horizontal",v.textContent="가로 바를 가운데에 맞춰 멈추세요!";return}s==="horizontal"&&(s="result",Q())}function N(u){(u.code==="Space"||u.key===" ")&&(u.preventDefault(),y(u))}function L(){r=0,a=Le,s="vertical",c.length=0,i=.2,o=.2,x.textContent="점수: 0",$.textContent=`남은 횟수: ${Le}`,v.textContent="세로 바를 가운데에 맞춰 멈추세요!",p.classList.remove("hidden"),M.classList.add("hidden"),Be(w,l.width,c)}return j(),G(),g=requestAnimationFrame(X),p.addEventListener("click",y),p.addEventListener("touchstart",y,{passive:!1}),M.addEventListener("click",L),window.addEventListener("keydown",N),window.addEventListener("resize",j),ca(e,t,n),()=>{cancelAnimationFrame(g),window.removeEventListener("keydown",N),window.removeEventListener("resize",j)}}const se=12;function fa(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function ma(e,t,n){var r,a;(r=e.querySelector('[data-nav="back"]'))==null||r.addEventListener("click",t),(a=e.querySelector('[data-nav="main"]'))==null||a.addEventListener("click",n)}function ba(e,{onBack:t,onMain:n}){let r=0,a=0,s=!1,i=!0,o=.08,b=.55,m=0,g=0,d=0,c=!1;e.innerHTML=`
    <div class="game-panel">
      <h2 class="game-title">크리켓 게임</h2>
      <p class="game-desc">공이 타격존(노란 선)에 올 때 탭/스페이스로 스윙!</p>
      <div class="cricket-stats">
        <span id="cricket-runs">득점: 0</span>
        <span id="cricket-balls">볼: 0 / ${se}</span>
      </div>
      <canvas id="cricket-canvas" class="game-canvas cricket-canvas" width="320" height="420"></canvas>
      <button type="button" class="btn-go" id="cricket-swing">SWING!</button>
      <button type="button" class="btn-secondary hidden" id="cricket-retry">다시하기</button>
      <p class="game-feedback" id="cricket-feedback">공이 다가옵니다…</p>
      ${fa()}
    </div>
  `;const k=e.querySelector("#cricket-canvas"),l=k.getContext("2d"),w=e.querySelector("#cricket-runs"),x=e.querySelector("#cricket-balls"),$=e.querySelector("#cricket-feedback"),v=e.querySelector("#cricket-swing"),p=e.querySelector("#cricket-retry"),M=.72,_=.09;function R(){const y=Math.min(320,Math.max(260,e.clientWidth-16||300));k.width=y,k.height=Math.round(y*1.3)}function W(){const y=k.width,N=k.height;l.clearRect(0,0,y,N),l.fillStyle="#6ec8ff",l.fillRect(0,0,y,N*.22),l.fillStyle="#3d8c3a",l.fillRect(0,N*.18,y,N*.12);for(let q=0;q<18;q++)l.fillStyle=`hsl(${q*47%360} 70% 45%)`,l.beginPath(),l.arc(10+q*(y/17),N*.22,6,0,Math.PI*2),l.fill();l.fillStyle="#4caf50",l.fillRect(0,N*.28,y,N*.72);const L=y*.28,u=(y-L)/2,h=N*.3,A=N*.58;l.fillStyle="#c4a574",l.beginPath(),l.moveTo(u+L*.15,h),l.lineTo(u+L*.85,h),l.lineTo(u+L,h+A),l.lineTo(u,h+A),l.closePath(),l.fill();const E=h+A*M;if(l.strokeStyle="#fff41a",l.lineWidth=3,l.setLineDash([6,4]),l.beginPath(),l.moveTo(u-8,E),l.lineTo(u+L+8,E),l.stroke(),l.setLineDash([]),l.fillStyle="#8d6e63",l.beginPath(),l.ellipse(y/2,h+18,10,14,0,0,Math.PI*2),l.fill(),l.fillStyle="#66bb6a",l.beginPath(),l.ellipse(y/2,h+A-10,16,22,0,0,Math.PI*2),l.fill(),l.save(),l.translate(y/2+14,h+A-18),l.rotate(m>0?-.9:-.2),l.fillStyle="#f5f5f5",l.fillRect(-4,-28,8,36),l.restore(),!i&&!c){const q=h+A*o,P=y/2+Math.sin(o*6)*4,Ue=7+o*4;l.beginPath(),l.arc(P,q,Ue,0,Math.PI*2),l.fillStyle="#ef5350",l.fill(),l.strokeStyle="#fff",l.lineWidth=1.5,l.stroke()}m>0&&(l.fillStyle="rgba(255,244,26,0.15)",l.fillRect(0,E-20,y,40))}function O(){if(a>=se){c=!0,v.disabled=!0,v.classList.add("hidden"),p.classList.remove("hidden"),$.textContent=`경기 종료! 총 ${r}점`;return}i=!1,s=!1,o=.05,b=.48+Math.random()*.35,$.textContent="타이밍에 맞춰 스윙!"}function j(y){var h;if((h=y==null?void 0:y.preventDefault)==null||h.call(y),c||s||i)return;s=!0,m=.25,a+=1,x.textContent=`볼: ${a} / ${se}`;const N=Math.abs(o-M);let L=0,u="헛스윙!";N<=_*.25?(L=6,u="식스! +6"):N<=_*.5?(L=4,u="포! +4"):N<=_*.75?(L=2,u="투런! +2"):N<=_&&(L=1,u="싱글! +1"),r+=L,w.textContent=`득점: ${r}`,$.textContent=u,i=!0,setTimeout(()=>{c||O(),a>=se&&(c=!0,v.disabled=!0,v.classList.add("hidden"),p.classList.remove("hidden"),$.textContent=`경기 종료! 총 ${r}점`)},650)}function G(y){d||(d=y);const N=Math.min(.05,(y-d)/1e3);d=y,!i&&!c&&(o+=b*N,o>1.05&&(i=!0,s=!0,a+=1,x.textContent=`볼: ${a} / ${se}`,$.textContent="놓침!",setTimeout(()=>{s=!1,a>=se?(c=!0,v.disabled=!0,v.classList.add("hidden"),p.classList.remove("hidden"),$.textContent=`경기 종료! 총 ${r}점`):O()},500))),m>0&&(m-=N),W(),g=requestAnimationFrame(G)}function X(){r=0,a=0,c=!1,s=!1,m=0,w.textContent="득점: 0",x.textContent=`볼: 0 / ${se}`,v.disabled=!1,v.classList.remove("hidden"),p.classList.add("hidden"),O()}function Q(y){(y.code==="Space"||y.key===" ")&&(y.preventDefault(),j(y))}return R(),O(),g=requestAnimationFrame(G),v.addEventListener("click",j),v.addEventListener("touchstart",j,{passive:!1}),k.addEventListener("pointerdown",j),p.addEventListener("click",X),window.addEventListener("keydown",Q),window.addEventListener("resize",R),ma(e,t,n),()=>{cancelAnimationFrame(g),window.removeEventListener("keydown",Q),window.removeEventListener("resize",R)}}function ga(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function pa(e,t,n){var r,a;(r=e.querySelector('[data-nav="back"]'))==null||r.addEventListener("click",t),(a=e.querySelector('[data-nav="main"]'))==null||a.addEventListener("click",n)}const ha=["#42a5f5","#ef5350","#ffee58","#66bb6a"],wa=4,Fe=7;function ya(e,{onBack:t,onMain:n}){let r=0,a=3,s=!1,i=0,o=0;const b={left:!1,right:!1};let m=320,g=420,d={x:0,y:0,w:70,h:12},c={x:0,y:0,r:6,vx:0,vy:0},k=[];e.innerHTML=`
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
      ${ga()}
    </div>
  `;const l=e.querySelector("#bo-canvas"),w=l.getContext("2d"),x=e.querySelector("#bo-lives"),$=e.querySelector("#bo-score"),v=e.querySelector("#bo-feedback"),p=e.querySelector("#bo-start");function M(){m=Math.min(320,Math.max(260,e.clientWidth-16||300)),g=Math.round(m*1.3),l.width=m,l.height=g,d.y=g-36,d.w=m*.22}function _(){k=[];const u=4,h=56,A=(m-u*(Fe+1))/Fe,E=16;for(let q=0;q<wa;q++)for(let P=0;P<Fe;P++)k.push({x:u+P*(A+u),y:h+q*(E+u),w:A,h:E,color:ha[q],alive:!0})}function R(){d.x=(m-d.w)/2,c.x=m/2,c.y=d.y-20;const u=-Math.PI/3+Math.random()*(Math.PI/3),h=Math.min(m,g)*1.05;c.vx=Math.sin(u)*h,c.vy=-Math.abs(Math.cos(u)*h)}function W(){x.textContent=`생명: ${"●".repeat(a)}${"○".repeat(3-a)}`,$.textContent=`점수: ${String(r).padStart(5,"0")}`}function O(){w.fillStyle="#1a1030",w.fillRect(0,0,m,g);for(const u of k)u.alive&&(w.fillStyle=u.color,j(w,u.x,u.y,u.w,u.h,4),w.fill());w.fillStyle="#fff",j(w,d.x,d.y,d.w,d.h,6),w.fill(),w.beginPath(),w.arc(c.x,c.y,c.r,0,Math.PI*2),w.fillStyle="#fff",w.fill()}function j(u,h,A,E,q,P){u.beginPath(),u.moveTo(h+P,A),u.arcTo(h+E,A,h+E,A+q,P),u.arcTo(h+E,A+q,h,A+q,P),u.arcTo(h,A+q,h,A,P),u.arcTo(h,A,h+E,A,P),u.closePath()}function G(u){o||(o=u);const h=Math.min(.033,(u-o)/1e3);if(o=u,s){const A=m*1.6*h;if(b.left&&(d.x-=A),b.right&&(d.x+=A),d.x=Math.max(0,Math.min(m-d.w,d.x)),c.x+=c.vx*h,c.y+=c.vy*h,c.x<c.r&&(c.x=c.r,c.vx*=-1),c.x>m-c.r&&(c.x=m-c.r,c.vx*=-1),c.y<c.r&&(c.y=c.r,c.vy*=-1),c.vy>0&&c.y+c.r>=d.y&&c.y-c.r<=d.y+d.h&&c.x>=d.x&&c.x<=d.x+d.w){c.y=d.y-c.r;const E=(c.x-(d.x+d.w/2))/(d.w/2),q=Math.hypot(c.vx,c.vy)*1.015,P=E*1.1;c.vx=Math.sin(P)*q,c.vy=-Math.abs(Math.cos(P)*q)}for(const E of k)if(E.alive&&c.x+c.r>E.x&&c.x-c.r<E.x+E.w&&c.y+c.r>E.y&&c.y-c.r<E.y+E.h){E.alive=!1,r+=10,W();const q=c.x+c.r-E.x,P=E.x+E.w-(c.x-c.r),Ue=c.y+c.r-E.y,Qt=E.y+E.h-(c.y-c.r),Zt=Math.min(q,P),en=Math.min(Ue,Qt);Zt<en?c.vx*=-1:c.vy*=-1;break}k.every(E=>!E.alive)&&(s=!1,v.textContent=`클리어! 점수 ${r}`),c.y>g+20&&(a-=1,W(),a<=0?(s=!1,v.textContent=`게임 오버 · ${r}점`):(R(),v.textContent="생명 -1! 계속…"))}O(),i=requestAnimationFrame(G)}function X(){r=0,a=3,s=!0,_(),R(),W(),v.textContent="화이팅!"}function Q(u){const h=l.getBoundingClientRect(),A=(u-h.left)/h.width*m;d.x=Math.max(0,Math.min(m-d.w,A-d.w/2))}function y(u){var A;u.preventDefault();const h=((A=u.touches)==null?void 0:A[0])||u;Q(h.clientX)}function N(u){(u.key==="ArrowLeft"||u.key==="a"||u.key==="A")&&(b.left=!0),(u.key==="ArrowRight"||u.key==="d"||u.key==="D")&&(b.right=!0)}function L(u){(u.key==="ArrowLeft"||u.key==="a"||u.key==="A")&&(b.left=!1),(u.key==="ArrowRight"||u.key==="d"||u.key==="D")&&(b.right=!1)}return M(),_(),R(),W(),O(),i=requestAnimationFrame(G),p.addEventListener("click",X),l.addEventListener("pointerdown",y),l.addEventListener("pointermove",u=>{(u.buttons||u.pressure>0)&&y(u)}),l.addEventListener("touchstart",y,{passive:!1}),l.addEventListener("touchmove",y,{passive:!1}),window.addEventListener("keydown",N),window.addEventListener("keyup",L),window.addEventListener("resize",M),pa(e,t,n),()=>{cancelAnimationFrame(i),window.removeEventListener("keydown",N),window.removeEventListener("keyup",L),window.removeEventListener("resize",M)}}const f=document.getElementById("app");let K=null,ie=null,Z=null,ce=null,bt=!1;const gt=new Set(["rest","game-dart","game-cricket","game-breakout","admin","admin-users","admin-logs","admin-user-logs"]),ka={login:$a,main:La,help:Ea,"change-password":Na,"account-withdraw":Ma,profile:Aa,grade:Ba,subject:Fa,calculator:Ra,rest:Oa,admin:Ia,"admin-users":xa,"admin-logs":Ca,"admin-user-logs":qa,"game-dart":()=>Re("dart"),"game-cricket":()=>Re("cricket"),"game-breakout":()=>Re("breakout")};va();function va(){jn().then(()=>Ze()).finally(()=>{S(Nt()?"main":"login")})}function S(e,t={}){ce&&(ce(),ce=null),bt&&!gt.has(e)&&Gn(),e!=="login"&&!Nt()&&(e="login",t={});const n=ka[e];n&&(f.innerHTML="",n(t),bt=gt.has(e),window.scrollTo(0,0))}function F(e){e.querySelectorAll("[data-action]").forEach(t=>{t.addEventListener("click",()=>Sa(t.dataset.action))})}function Sa(e){if(e==="main"){K=null,ie=null,Z=null,S("main");return}if(e==="grade"){ie=null,Z=null,S("grade");return}if(e==="help"&&S("help"),e==="change-password"&&S("change-password"),e==="account-withdraw"&&S("account-withdraw"),e==="profile"&&S("profile"),e==="logout"){if(!Ke(de()))return;xn().finally(()=>S("login"));return}if(e==="rest"&&S("rest"),e==="admin"){H()&&S("admin");return}if(e==="admin-users"){H()&&S("admin-users");return}if(e==="admin-logs"){H()&&S("admin-logs");return}if(e==="subject"&&S("subject",{grade:K}),e==="game-dart"&&S("game-dart"),e==="game-cricket"&&S("game-cricket"),e==="game-breakout"&&S("game-breakout"),e.startsWith("pick-grade-")){K=Number(e.replace("pick-grade-","")),ie=null,Z=null,S("subject",{grade:K});return}if(e.startsWith("pick-subject-")){const t=decodeURIComponent(e.replace("pick-subject-",""));ie=t;const n=Ft(K,t);Z=(n.length===1,n[0]),S("calculator",{grade:K,subject:t,semester:Z});return}e.startsWith("pick-semester-")&&(Z=Number(e.replace("pick-semester-","")),S("calculator",{grade:K,subject:ie,semester:Z}))}function $a(){let e="login";const t=()=>{var $,v;const n=e==="register";f.innerHTML=U(`
      <div class="stack-screen login-screen">
        ${te("globe globe-large")}
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
        ${ne(J.footer)}
      </div>
    `);const r=f.querySelector("#login-error"),a=f.querySelector("#login-ok"),s=f.querySelector("#verify-actions"),i=f.querySelector("#login-email"),o=f.querySelector("#login-name"),b=f.querySelector("#login-password"),m=f.querySelector("#login-password2"),g=f.querySelector("#login-submit"),d=p=>{a.classList.add("hidden"),r.textContent=p,r.classList.remove("hidden")},c=p=>{r.classList.add("hidden"),a.textContent=p,a.classList.remove("hidden")},k=(p,M)=>{g.disabled=p,p?(g.dataset.label=g.textContent,g.textContent=n?"가입 중…":"로그인 중…"):g.dataset.label&&(g.textContent=g.dataset.label)};f.querySelectorAll("[data-mode]").forEach(p=>{p.addEventListener("click",()=>{e=p.dataset.mode,t()})});const l=p=>{const M=ze(p);V({type:"user_login",message:`로그인: ${M}`,account:p.account,displayName:p.displayName||"",studentId:p.studentId||""}),H()&&V({type:"admin_login",message:"관리자 계정 로그인 — 관리자 모드 자동 활성화",account:p.account}),S("main"),Ze(),nt()},w=p=>{c(p.error),s.classList.remove("hidden")},x=async()=>{r.classList.add("hidden"),a.classList.add("hidden"),s.classList.add("hidden"),k(!0);try{if(e==="register"){if(b.value!==((m==null?void 0:m.value)||"")){d("비밀번호 확인이 일치하지 않습니다.");return}const M=await Pn(i.value,b.value,(o==null?void 0:o.value)||"");if(M.needVerify){w(M);return}if(!M.ok){d(M.error);return}l(M.user);return}const p=await Tn(i.value,b.value);if(p.needVerify){w(p);return}if(!p.ok){d(p.error);return}l(p.user)}finally{k(!1)}};g.addEventListener("click",x),[i,o,b,m].filter(Boolean).forEach(p=>{p.addEventListener("keydown",M=>{M.key==="Enter"&&x()})}),($=f.querySelector("#verify-refresh"))==null||$.addEventListener("click",async()=>{k(!0);const p=await Dn();if(k(!1),p.needVerify){w(p);return}if(!p.ok){d(p.error);return}l(p.user)}),(v=f.querySelector("#verify-resend"))==null||v.addEventListener("click",async()=>{const p=await Un();if(!p.ok){d(p.error);return}c(p.message),s.classList.remove("hidden")})};t()}function La(){const e=Vn(),t=ze()||de()||"",n=Ke(de());f.innerHTML=U(`
    <div class="main-screen">
      <button type="button" class="help-btn" data-action="help" aria-label="앱 정보">?</button>
      <div class="main-header">
        <div class="title-block">
          ${ia()}
          <h1 class="app-title">${J.title}</h1>
        </div>
        <p class="app-subtitle">${J.subtitle}</p>
        <p class="main-quote">"${e}"</p>
      </div>
      <div class="main-body">
        <p class="login-user muted">${I(t)}</p>
        <button type="button" class="link-btn" data-action="profile">내 정보 수정</button>
        ${n?'<button type="button" class="link-btn" data-action="logout">로그아웃</button>':""}
        <button type="button" class="go-btn" data-action="grade" aria-label="시작">
          ${oa()}
          <span class="go-text">GO</span>
        </button>
      </div>
      <p class="main-footer">${J.footer}</p>
    </div>
  `),F(f)}function Aa(){const e=T(),t=Ke(e==null?void 0:e.account);f.innerHTML=U(`
    <div class="stack-screen">
      ${te()}
      <h2 class="screen-title">내 정보</h2>
      <div class="login-form profile-form">
        <p class="muted login-hint">로그인 계정: ${I((e==null?void 0:e.account)||"")}</p>
        <label class="field">
          <span>이름</span>
          <input type="text" id="profile-name" value="${I((e==null?void 0:e.displayName)||"")}" maxlength="20" />
        </label>
        <label class="field">
          <span>학번 (4자리)</span>
          <input type="text" id="profile-sid" value="${I((e==null?void 0:e.studentId)||"")}" inputmode="numeric" maxlength="4" placeholder="1111" />
        </label>
        <button type="button" class="btn-go" id="profile-save">저장</button>
        ${t?'<button type="button" class="link-btn" data-action="logout">로그아웃</button>':""}
        <p class="warn hidden" id="profile-error"></p>
        <p class="ok-msg hidden" id="profile-ok"></p>
      </div>
      ${z()}
    </div>
  `);const n=f.querySelector("#profile-error"),r=f.querySelector("#profile-ok"),a=f.querySelector("#profile-name"),s=f.querySelector("#profile-sid"),i=f.querySelector("#profile-save");i.addEventListener("click",async()=>{n.classList.add("hidden"),r.classList.add("hidden"),i.disabled=!0;const o=await _n({displayName:a.value,studentId:s.value});if(i.disabled=!1,!o.ok){n.textContent=o.error,n.classList.remove("hidden");return}r.textContent="저장되었습니다.",r.classList.remove("hidden"),V({type:"profile_update",message:`정보 수정: ${ze(o.user)}`,displayName:o.user.displayName,studentId:o.user.studentId})}),F(f)}function Jt(){const e=T();return!!(e!=null&&e.account)&&!H()&&!(e!=null&&e.isAdminAccount)&&!String((e==null?void 0:e.account)||"").toLowerCase().includes("@gmail.com")}function Ea(){var r;const e=re(),t=!!((r=T())!=null&&r.account),n=Jt();f.innerHTML=U(`
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
          <li>서로 다른 과목 ${e}개 계산 시 미니게임 1회 해금</li>
          <li>미니게임 이용 후에는 다시 잠금</li>
        </ul>
        <p class="muted">제작: ${J.creator}</p>
        ${H()?'<p class="success"><button type="button" class="link-btn" data-action="admin">관리자 패널 열기</button></p>':""}
      </div>
      ${t?`<div class="info-card account-tools-card">
        <h3>계정</h3>
        <div class="admin-actions">
          <button type="button" class="btn-withdraw" data-action="change-password">비밀번호 변경</button>
          ${n?'<button type="button" class="btn-withdraw" data-action="account-withdraw">계정 탈퇴</button>':""}
        </div>
      </div>`:""}
      ${z()}
      <p class="muted login-hint" style="text-align:center;margin-top:auto;padding:12px 8px 4px">${J.subtitle}</p>
    </div>
  `),F(f)}function Na(){var t;if(!((t=T())!=null&&t.account)){S("help");return}f.innerHTML=U(`
    <div class="stack-screen">
      ${te("globe globe-small")}
      <h2 class="screen-title">비밀번호 변경</h2>
      <div class="info-card withdraw-card">
        <label class="withdraw-field">
          <span>현재 비밀번호</span>
          <input type="password" id="pw-current" placeholder="현재 비밀번호" autocomplete="current-password" />
        </label>
        <label class="withdraw-field">
          <span>새 비밀번호</span>
          <input type="password" id="pw-new" placeholder="6자 이상" autocomplete="new-password" />
        </label>
        <label class="withdraw-field">
          <span>새 비밀번호 확인</span>
          <input type="password" id="pw-new2" placeholder="한 번 더" autocomplete="new-password" />
        </label>
        <button type="button" class="btn-withdraw" id="btn-change-pw">변경하기</button>
        <p class="warn hidden" id="pw-error"></p>
        <p class="ok-msg hidden" id="pw-ok"></p>
      </div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="help">도움말로</button>
        ${z()}
      </div>
    </div>
  `),F(f);const e=f.querySelector("#btn-change-pw");e==null||e.addEventListener("click",async()=>{var o,b,m;const n=f.querySelector("#pw-error"),r=f.querySelector("#pw-ok"),a=g=>{r==null||r.classList.add("hidden"),n&&(n.textContent=g,n.classList.remove("hidden"))},s=g=>{n==null||n.classList.add("hidden"),r&&(r.textContent=g,r.classList.remove("hidden"))};e.disabled=!0;const i=await Cn(((o=f.querySelector("#pw-current"))==null?void 0:o.value)||"",((b=f.querySelector("#pw-new"))==null?void 0:b.value)||"",((m=f.querySelector("#pw-new2"))==null?void 0:m.value)||"");if(e.disabled=!1,!i.ok){a(i.error||"변경 실패");return}f.querySelector("#pw-current").value="",f.querySelector("#pw-new").value="",f.querySelector("#pw-new2").value="",s("비밀번호가 변경되었습니다.")})}function Ma(){if(!Jt()){S("help");return}f.innerHTML=U(`
    <div class="stack-screen">
      ${te("globe globe-small")}
      <h2 class="screen-title">계정 탈퇴</h2>
      <div class="info-card withdraw-card">
        <label class="withdraw-field">
          <span>비밀번호 확인</span>
          <input type="password" id="withdraw-password" placeholder="현재 비밀번호" autocomplete="current-password" />
        </label>
        <button type="button" class="btn-withdraw" id="btn-withdraw">탈퇴하기</button>
        <p class="warn hidden" id="withdraw-error"></p>
      </div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="help">도움말로</button>
        ${z()}
      </div>
    </div>
  `),F(f);const e=f.querySelector("#btn-withdraw");e==null||e.addEventListener("click",async()=>{var s;const t=f.querySelector("#withdraw-error"),n=((s=f.querySelector("#withdraw-password"))==null?void 0:s.value)||"",r=i=>{t&&(t.textContent=i,t.classList.remove("hidden"))};if(!window.confirm(`정말 탈퇴할까요?
탈퇴 후 같은 계정으로 다시 회원가입할 수 있습니다.`)||!window.confirm("마지막 확인: 계정 탈퇴를 진행합니다."))return;e.disabled=!0;const a=await qn(n);if(!a.ok){r(a.error||"탈퇴 실패"),e.disabled=!1;return}Kn(),window.alert("탈퇴되었습니다. 다시 회원가입해 주세요."),S("login")})}function Ia(){var b,m,g;if(!H()){S("help");return}const e=Y(),t=_t(),n=e.standardScale,r=e.artsScale,a=t.configured?`Firebase 연결됨 (${t.projectId})`:"Firebase 미설정 — src/firebase-config.js 에 키를 넣어주세요",s=t.isCloudAdmin?"클라우드 관리자 로그인됨 — 전체 기록 조회·설정 저장 가능":"클라우드 전체 기록/설정 수정은 관리자 로그인 후에만 가능합니다.";f.innerHTML=U(`
    <div class="stack-screen admin-screen">
      <h2 class="screen-title">관리자 모드</h2>
      <p class="screen-desc">기기 ID: ${qe()}</p>
      <p class="muted admin-note">${a}</p>
      <p class="muted admin-note">${s}</p>

      <div class="info-card admin-card">
        <h3>저장 공간 (Firestore)</h3>
        <p class="muted admin-note" id="adm-usage">불러오는 중…</p>
        <button type="button" class="btn-secondary" id="adm-usage-refresh">사용량 새로고침</button>
      </div>

      <div class="info-card admin-card">
        <h3>조회</h3>
        <div class="admin-actions">
          <button type="button" class="btn-go" data-action="admin-users">가입 회원명단</button>
          <button type="button" class="btn-go" data-action="admin-logs">전체 활동 기록</button>
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
          ${n.map((d,c)=>`
            <label>${d.letter}
              <input type="number" data-scale="std" data-i="${c}" data-letter="${d.letter}" min="0" max="100" value="${d.min}" />
            </label>
          `).join("")}
        </div>
        <h4>예체능 등급 기준 (점 이상)</h4>
        <div class="admin-scale" id="adm-arts">
          ${r.map((d,c)=>`
            <label>${d.letter}
              <input type="number" data-scale="arts" data-i="${c}" data-letter="${d.letter}" min="0" max="100" value="${d.min}" />
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
        ${z()}
      </div>
      ${ne("ADMIN")}
    </div>
  `),F(f);function i(d){const c=Number(d)||0;return c<1024?`${c} B`:c<1024*1024?`${(c/1024).toFixed(1)} KB`:`${(c/(1024*1024)).toFixed(2)} MB`}async function o(){const d=f.querySelector("#adm-usage");if(!d)return;d.textContent="불러오는 중…";const c=await Tt();if(!c.ok){d.textContent=c.error||"사용량을 불러오지 못했습니다.";return}const k=1,l=(c.estimateBytes||0)/(1024*1024*1024),w=Math.min(100,l/k*100);d.innerHTML=`
      활동 기록 <strong>${c.activityLogs}</strong>건 ·
      회원 <strong>${c.userProfiles}</strong>명 ·
      차단 <strong>${c.blockedAccounts}</strong>건<br/>
      문서 합계 <strong>${c.totalDocs}</strong>개 ·
      예상 용량 <strong>${i(c.estimateBytes)}</strong>
      (무료 약 1GB 중 ~${w.toFixed(3)}%)<br/>
      <span class="muted">실제 Firebase 청구량과 다를 수 있는 추정치입니다.</span>
    `}o(),(b=f.querySelector("#adm-usage-refresh"))==null||b.addEventListener("click",()=>o()),(m=f.querySelector("#adm-save"))==null||m.addEventListener("click",async()=>{var w,x;const d=Number((w=f.querySelector("#adm-unlock"))==null?void 0:w.value),c=!!((x=f.querySelector("#adm-free-games"))!=null&&x.checked),k=[...f.querySelectorAll('[data-scale="std"]')].map($=>({letter:$.dataset.letter,min:Number($.value)||0})),l=[...f.querySelectorAll('[data-scale="arts"]')].map($=>({letter:$.dataset.letter,min:Number($.value)||0}));It({restUnlockUses:Number.isFinite(d)&&d>0?d:8,freeGames:c,standardScale:k,artsScale:l}),window.alert(C()?"설정을 저장했고 클라우드에도 올렸습니다.":"설정을 이 기기에 저장했습니다. (Firebase 미설정)"),S("admin")}),(g=f.querySelector("#adm-feedback-save"))==null||g.addEventListener("click",()=>{var c,k;const d=(k=(c=f.querySelector("#adm-feedback"))==null?void 0:c.value)==null?void 0:k.trim();if(!d){window.alert("내용을 입력하세요.");return}V({type:"game_feedback",message:d}),window.alert("피드백을 저장했습니다."),S("admin")})}function xa(){var n;if(!H()){S("help");return}f.innerHTML=U(`
    <div class="stack-screen admin-screen">
      <h2 class="screen-title">가입 회원명단</h2>
      <p class="muted admin-note">회원별 활동 기록 · 삭제</p>
      <div class="admin-actions">
        <button type="button" class="btn-secondary" id="adm-refresh-users">새로고침</button>
      </div>
      <div class="admin-user-list" id="adm-users">
        <p class="muted">불러오는 중…</p>
      </div>
      <h3 class="section-heading">영구차단 계정</h3>
      <div class="admin-user-list" id="adm-blocked">
        <p class="muted">불러오는 중…</p>
      </div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="admin">관리자 홈</button>
        ${z()}
      </div>
      ${ne("ADMIN")}
    </div>
  `),F(f);async function e(){const r=f.querySelector("#adm-blocked");if(!r)return;r.innerHTML='<p class="muted">불러오는 중…</p>';const a=await Oe();if(a.error&&a.accounts.length===0){r.innerHTML=`<p class="warn">${I(a.error)}</p>`;return}if(a.accounts.length===0){r.innerHTML='<p class="muted">차단된 계정이 없습니다.</p>';return}r.innerHTML=a.accounts.map(s=>`
      <article class="admin-user-item admin-blocked-item">
        <span class="admin-blocked-email">${I(s.account)}</span>
        <button type="button" class="btn-secondary adm-unblock"
          data-account="${I(s.account)}">차단 해제</button>
      </article>`).join(""),r.querySelectorAll(".adm-unblock").forEach(s=>{s.addEventListener("click",async()=>{const i=s.dataset.account||"";if(!window.confirm(`${i}
차단을 해제할까요? 다시 가입·로그인할 수 있습니다.`))return;s.disabled=!0;const o=await He(i);if(!o.ok){window.alert(o.error||"차단 해제 실패"),s.disabled=!1;return}window.alert("차단 해제되었습니다."),e()})})}async function t(){const r=f.querySelector("#adm-users");r&&(r.innerHTML='<p class="muted">불러오는 중…</p>');const a=await xt();if(r){if(a.error&&a.users.length===0){r.innerHTML=`<p class="warn">${I(a.error)}</p>`;return}if(a.users.length===0)r.innerHTML='<p class="muted">아직 가입한 학생이 없습니다.</p>';else{const s=re();r.innerHTML=`
      <div class="admin-user-head">
        <span>이름</span><span>년도·학번</span><span>과목</span><span>해금</span><span>관리</span>
      </div>
      ${a.users.map(i=>`
        <article class="admin-user-item">
          <span>${I(i.displayName||"-")}</span>
          <span>${I(`${i.year||"-"} ${i.studentId||""}`.trim())}</span>
          <span>${i.uniqueSubjectCount}/${s}</span>
          <span>${i.gameUnlockCount}회</span>
          <span class="admin-user-actions">
            <button type="button" class="btn-secondary adm-user-logs"
              data-account="${I(i.account)}"
              data-name="${I(i.displayName||"")}"
              data-year="${I(i.year||"")}"
              data-sid="${I(i.studentId||"")}">기록</button>
            <button type="button" class="btn-secondary adm-del-user"
              data-uid="${I(i.uid)}"
              data-account="${I(i.account)}"
              data-name="${I(i.displayName||"")}">삭제</button>
          </span>
        </article>`).join("")}
    `,r.querySelectorAll(".adm-user-logs").forEach(i=>{i.addEventListener("click",()=>{S("admin-user-logs",{account:i.dataset.account||"",displayName:i.dataset.name||"",year:i.dataset.year||"",studentId:i.dataset.sid||""})})}),r.querySelectorAll(".adm-del-user").forEach(i=>{i.addEventListener("click",async()=>{const o=i.dataset.name||"",b=i.dataset.account||"";if(!window.confirm(`${o||b} 계정을 삭제할까요?`))return;const m=window.confirm(`영구차단도 같이 할까요?

확인 = 삭제 + 차단 (재가입·로그인 불가)
취소 = 삭제만 (차단 안 함)`);i.disabled=!0;const g=await Ct({uid:i.dataset.uid,account:b,displayName:o,block:m});if(!g.ok){window.alert(g.error||"삭제 실패"),i.disabled=!1;return}window.alert(m?"삭제 + 차단 완료":"삭제만 완료 (차단 안 함)"),t(),e()})})}await e()}}(async()=>{const r="schoolMetricsUnblock_20251413_haeyeon_v2";if(localStorage.getItem(r)){t();return}const a=["20251413@haeyeon.ms.kr"],s=await Oe(),i=new Set((s.accounts||[]).map(b=>b.account));let o=!1;for(const b of a){if(!i.has(b))continue;(await He(b)).ok&&(o=!0)}localStorage.setItem(r,"1"),o&&window.alert("20251413@haeyeon.ms.kr 차단을 해제했습니다."),t()})(),(n=f.querySelector("#adm-refresh-users"))==null||n.addEventListener("click",()=>t())}function Ca(){var n,r,a;if(!H()){S("help");return}f.innerHTML=U(`
    <div class="stack-screen admin-screen">
      <h2 class="screen-title">전체 활동 기록</h2>
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
        ${z()}
      </div>
      ${ne("ADMIN")}
    </div>
  `),F(f);let e=Pe();async function t(){const s=f.querySelector("#adm-logs"),i=f.querySelector("#adm-log-count");s&&(s.innerHTML='<p class="muted">불러오는 중…</p>');const o=await et();e=o.logs,i&&(i.textContent=`${e.length}건 · ${o.source}${o.error?" · 오류":""}`),s&&(s.innerHTML=Yt(e.slice(0,120),{showWho:!0}))}t(),(n=f.querySelector("#adm-refresh-logs"))==null||n.addEventListener("click",()=>t()),(r=f.querySelector("#adm-export"))==null||r.addEventListener("click",async()=>{const s=Pt(e);try{await navigator.clipboard.writeText(s),window.alert("기록이 클립보드에 복사되었습니다.")}catch{window.prompt("아래 내용을 복사하세요",s)}}),(a=f.querySelector("#adm-clear-logs"))==null||a.addEventListener("click",async()=>{window.confirm("로컬+클라우드 활동 기록을 비울까요?")&&(await qt({cloud:!0}),S("admin-logs"))})}function qa({account:e,displayName:t,year:n,studentId:r}={}){var i;if(!H()){S("help");return}if(!e){S("admin-users");return}const a=[t,n,r].filter(Boolean).join(" · ")||e;f.innerHTML=U(`
    <div class="stack-screen admin-screen">
      <h2 class="screen-title">회원 활동 기록</h2>
      <p class="muted admin-note">${I(a)}</p>
      <p class="muted admin-note">${I(e)}</p>
      <p class="muted admin-note"><span id="adm-user-log-count">불러오는 중…</span></p>
      <div class="admin-actions">
        <button type="button" class="btn-secondary" id="adm-refresh-user-logs">새로고침</button>
      </div>
      <div class="admin-log-list" id="adm-user-logs">
        <p class="muted">기록을 불러오는 중…</p>
      </div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="admin-users">회원명단으로</button>
        <button type="button" class="link-btn" data-action="admin">관리자 홈</button>
      </div>
      ${ne("ADMIN")}
    </div>
  `),F(f);async function s(){const o=f.querySelector("#adm-user-logs"),b=f.querySelector("#adm-user-log-count");o&&(o.innerHTML='<p class="muted">불러오는 중…</p>');const m=await et(),g=Pa(m.logs,e);b&&(b.textContent=`${g.length}건 · ${m.source}${m.error?" · 오류":""}`),o&&(o.innerHTML=Yt(g.slice(0,200),{showWho:!1}))}s(),(i=f.querySelector("#adm-refresh-user-logs"))==null||i.addEventListener("click",()=>s())}function Pa(e,t){const n=String(t||"").trim().toLowerCase();return n?(e||[]).filter(r=>String(r.account||"").trim().toLowerCase()===n):[]}function Yt(e,{showWho:t=!0}={}){return e.length?e.map(n=>{const a=[n.year,n.studentId,n.displayName].filter(o=>o&&o!=="admin").join(" · ")||n.account||n.deviceId||"",s=ja(n);return`
      <article class="admin-log-item">
        <header>${t?`${I(a)} · ${I(pt(n.type))} · ${ht(n.at)}`:`${I(pt(n.type))} · ${ht(n.at)}`}</header>
        <p>${I(n.message||"")}</p>
        ${s?`<pre>${I(s)}</pre>`:""}
      </article>`}).join(""):'<p class="muted">아직 기록이 없습니다.</p>'}function pt(e){return{calc:"성적 계산",user_login:"로그인",user_withdraw:"계정 탈퇴",password_change:"비밀번호 변경",admin_login:"관리자 로그인",admin_settings:"설정 변경",admin_clear_logs:"기록 초기화",admin_delete_user:"계정 삭제",admin_unblock_user:"차단 해제",game_open:"미니게임",game_feedback:"게임 피드백",profile_update:"정보 수정"}[e]||e||"기록"}function Xt(e,t){var a,s;const n=String(e||""),r=n.match(/^(\d+)-(.+)-(\d+)-(\d+)$/);if(r){const i=Number(r[1]),o=r[2],b=Number(r[3]),m=Number(r[4]),g=(a=We(i,o,b)[m])==null?void 0:a.label;if(g)return g}if(t!=null&&t.grade&&(t!=null&&t.subject)&&(t==null?void 0:t.semester)!=null){const i=n.match(/(\d+)$/);if(i){const o=(s=We(Number(t.grade),t.subject,Number(t.semester))[Number(i[1])])==null?void 0:s.label;if(o)return o}}return n}function Ta(e){if(!(e!=null&&e.grade)||!(e!=null&&e.subject)||(e==null?void 0:e.semester)==null)return null;const t=rt(Number(e.grade),e.subject,Number(e.semester));if(!t.length)return null;const n={};for(const r of t)n[r.key]="";if(Array.isArray(e.scoreLines))for(const r of e.scoreLines){if(r.key&&r.key in n){n[r.key]=r.score;continue}const a=t.find(s=>s.label===r.label);a&&(n[a.key]=r.score)}else if(e.scores&&typeof e.scores=="object")for(const[r,a]of Object.entries(e.scores))r in n&&(n[r]=a);else return null;return{items:t,scores:n}}function _a(e){let t=e==null?void 0:e.needed;if((t==null?void 0:t.needed)==null||!(t!=null&&t.targetLetter)){const n=Ta(e);if(n){const r=st(n.items,n.scores);t=Kt(n.items,n.scores,r,e.subject)}}return(t==null?void 0:t.needed)!=null&&(t!=null&&t.targetLetter)?`한 단계 상위 ${ae(t.targetLetter)} → 남은 항목 평균 ${t.needed}점 이상`:(t==null?void 0:t.message)==="이미 최고 등급입니다."?"한 단계 상위 등급 없음 (이미 최고 등급)":(t==null?void 0:t.message)==="모든 항목이 입력되었습니다."?"남은 항목 없음 (전부 입력됨)":e!=null&&e.neededLine?e.neededLine:""}function Da(e,t){const n=e.label||Xt(e.key,t);return e.missing||e.score===null||e.score===void 0||e.score===""?`${n}: 미입력`:`${n}: ${e.score}점`}function Ua(e){if((e==null?void 0:e.grade)!=null&&(e!=null&&e.subject)&&(e==null?void 0:e.semester)!=null){const t=rt(Number(e.grade),e.subject,Number(e.semester));if(t.length){const n=new Map,r=new Map;if(Array.isArray(e.scoreLines))for(const a of e.scoreLines)a.key&&n.set(a.key,a),a.label&&r.set(a.label,a);if(e.scores&&typeof e.scores=="object")for(const[a,s]of Object.entries(e.scores))n.set(a,{key:a,score:s,missing:s===""||s==null});return t.map(a=>{const s=n.get(a.key)||r.get(a.label);if(!s||s.missing||s.score===""||s.score==null)return{key:a.key,label:a.label,weight:a.weight,score:null,missing:!0};const i=Number(s.score);return Number.isFinite(i)?{key:a.key,label:a.label,weight:a.weight,score:i,missing:!1}:{key:a.key,label:a.label,weight:a.weight,score:null,missing:!0}})}}return Array.isArray(e==null?void 0:e.scoreLines)&&e.scoreLines.length?e.scoreLines:e!=null&&e.scores&&typeof e.scores=="object"?Object.entries(e.scores).map(([t,n])=>({key:t,label:Xt(t,e),score:n===""||n==null?null:Number(n),missing:n===""||n==null||!Number.isFinite(Number(n))})):[]}function ja(e){const t=e==null?void 0:e.detail;if(!t)return"";if(typeof t=="string")return t;const n=[],r=Ua(t);for(const s of r)n.push(Da(s,t));t.rounded!=null&&n.push(`합계(반올림): ${t.rounded}점`),t.letter&&n.push(`현재 등급: ${ae(t.letter)}`);const a=_a(t);return a&&n.push(a),n.join(`
`)}function I(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function ht(e){try{const t=new Date(e);return`${t.getMonth()+1}/${t.getDate()} ${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`}catch{return e}}function Ba(){const e=ke(),t=Bt();f.innerHTML=U(`
    <div class="stack-screen grade-screen">
      ${te()}
      <h2 class="screen-title">자신의 학년을 선택하세요</h2>
      <div class="grade-list">
        <button type="button" class="grade-btn grade-1" data-action="pick-grade-1">1학년</button>
        <button type="button" class="grade-btn grade-2" data-action="pick-grade-2">2학년</button>
        <button type="button" class="grade-btn grade-3" data-action="pick-grade-3">3학년</button>
      </div>
      ${e?'<button type="button" class="rest-btn" data-action="rest">휴식 · 미니게임</button>':`<p class="unlock-hint">${t}</p>`}
      ${z()}
      ${ne(J.subtitle)}
    </div>
  `),F(f)}function Fa({grade:e}){if(!e||!he(e)){S("grade");return}K=e;const t=he(e),n=Jn(e);f.innerHTML=U(`
    <div class="stack-screen ${Vt(e)}">
      ${te()}
      <h2 class="screen-title">${t.label} 과목 선택</h2>
      ${t.note?`<p class="screen-note">${t.note}</p>`:""}
      ${Wt()}
      <div class="subject-list">
        ${n.map(r=>`<button type="button" class="subject-btn" data-action="pick-subject-${encodeURIComponent(r)}">${r}</button>`).join("")}
      </div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="grade">학년 선택으로</button>
        ${z()}
      </div>
      ${ne(J.subtitle)}
    </div>
  `),F(f),Gt(f)}function Ra({grade:e,subject:t,semester:n}){if(!e||!t||!n){S("subject",{grade:K});return}K=e,ie=t,Z=n;const r=he(e),a=Ft(e,t),s=rt(e,t,n),i=ft(e,t,n),o={},b=a.length>1?`<div class="semester-tabs">
          ${a.map(c=>`<button type="button" class="semester-tab ${c===n?"active":""}" data-action="pick-semester-${c}">${ft(e,t,c)}</button>`).join("")}
        </div>`:`<p class="semester-only">${i}</p>`;f.innerHTML=U(`
    <div class="stack-screen calculator-screen ${Vt(e)}">
      ${te("globe globe-small")}
      <h2 class="screen-title subject-title">${t}</h2>
      <p class="screen-desc">${r.label} · ${i}${it(t)?" · 예체능(A·B·C)":" · 일반(A~E)"}</p>
      ${Wt(t)}
      ${b}
      <form id="calc-form" class="calc-form"></form>
      <button type="submit" form="calc-form" class="btn-calc">계산하기</button>
      <div id="calc-result" class="calc-result hidden"></div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="subject">과목 선택으로</button>
        ${z()}
      </div>
      ${ne(J.subtitle)}
    </div>
  `);const m=f.querySelector("#calc-form");let g="";for(const c of s){if(c.kind!==g){g=c.kind;const l=document.createElement("h3");l.className="section-heading",l.textContent=c.kind==="exam"?"지필고사":"수행평가",m.appendChild(l)}const k=document.createElement("label");k.className="score-row",k.innerHTML=`
      <span>${c.label} <em>${c.weight}%</em></span>
      <input type="number" min="0" max="100" step="0.1" inputmode="decimal"
        name="${c.key}" placeholder="점수" />
    `,m.appendChild(k)}const d=f.querySelector("#calc-result");m.addEventListener("submit",c=>{var R,W,O,j,G,X,Q,y,N;c.preventDefault();const k=new FormData(m);for(const L of s)o[L.key]=k.get(L.key);const l=sa(s,o,t);if(!l){d.classList.remove("hidden"),d.innerHTML='<p class="warn">최소 1개 이상 점수를 입력하세요.</p>';return}const w=Hn(t),x=s.map(L=>{const u=o[L.key];if(u===""||u===null||u===void 0)return{key:L.key,label:L.label,weight:L.weight,score:null,missing:!0};const h=Number(u);return Number.isFinite(h)?{key:L.key,label:L.label,weight:L.weight,score:h,missing:!1}:{key:L.key,label:L.label,weight:L.weight,score:null,missing:!0}});let $="";((R=l.needed)==null?void 0:R.needed)!=null&&((W=l.needed)!=null&&W.targetLetter)?$=`한 단계 상위 ${ae(l.needed.targetLetter)} → 남은 항목 평균 ${l.needed.needed}점 이상`:((O=l.needed)==null?void 0:O.message)==="이미 최고 등급입니다."?$="한 단계 상위 등급 없음 (이미 최고 등급)":((j=l.needed)==null?void 0:j.message)==="모든 항목이 입력되었습니다."?$="남은 항목 없음 (전부 입력됨)":(G=l.needed)!=null&&G.message&&($=l.needed.message),V({type:"calc",message:`${e}학년 ${t} (${i}) → ${l.rounded}점 · 현재 ${ae(l.letter)}`,detail:{grade:e,subject:t,semester:n,semLabel:i,scoreLines:x,rounded:l.rounded,letter:l.letter,average:l.average,needed:l.needed?{targetLetter:l.needed.targetLetter,needed:l.needed.needed,message:l.needed.message}:null,neededLine:$}});let v="";((X=l.needed)==null?void 0:X.needed)!=null?v=`<p>한 단계 상위 <strong>${ae(l.needed.targetLetter)}</strong> → 남은 항목 평균 <strong>${l.needed.needed}점</strong> 이상</p>`:((Q=l.needed)==null?void 0:Q.message)==="이미 최고 등급입니다."?v="<p>한 단계 상위 등급 없음 (이미 최고 등급)</p>":((y=l.needed)==null?void 0:y.message)==="모든 항목이 입력되었습니다."?v="<p>남은 항목 없음 (전부 입력됨)</p>":(N=l.needed)!=null&&N.message&&(v=`<p>${l.needed.message}</p>`);let p="";if(l.projection.remainingCount>0&&l.letter===l.projLetter){const L=ae(l.letter);let u="";l.confirmMin&&(l.confirmMin.minScore<=0?u=`<p>남은 항목이 <strong>0점</strong>이어도 ${L} 유지</p>`:u=`<p>남은 항목 각각 최소 <strong>${l.confirmMin.minScore}점</strong> 이상이면 ${L} 유지</p>`),p=`
        <p><strong>${L} 확정입니다.</strong></p>
        ${u}
      `}let M="";ta(l)&&(M=`<p class="cheer-msg">${na()}</p>`);let _="";w.justUnlocked?_=`<p class="success">서로 다른 과목 ${re()}개 달성! 학년 선택에서 휴식 미니게임 이용</p>`:ke()?_='<p class="success">휴식 미니게임 이용 가능 (학년 선택 화면)</p>':w.isNew?_=`<p class="muted">${Bt()}</p>`:_='<p class="muted">이미 계산한 과목입니다. 다른 과목을 계산하면 해금에 가까워져요.</p>',d.classList.remove("hidden"),d.innerHTML=`
      <h3>${t} 결과</h3>
      <p>총점(반올림) <strong>${l.rounded}점</strong> · 현재 <strong>${ae(l.letter)}</strong></p>
      ${v}
      <p class="muted">가중 평균 ${l.average.toFixed(1)}점</p>
      <p>남은 항목 100점 시 <strong>${l.projRounded}점</strong> · <strong>${ae(l.projLetter)}</strong></p>
      ${p}
      ${M}
      ${_}
    `}),F(f),Gt(f)}function Oa(){if(!ke()){S("grade");return}f.innerHTML=U(`
    <div class="stack-screen">
      ${te()}
      <h2 class="screen-title">휴식 · 미니게임</h2>
      <div class="game-list">
        <button type="button" class="game-card" data-action="game-dart">다트 게임</button>
        <button type="button" class="game-card" data-action="game-cricket">크리켓 게임</button>
        <button type="button" class="game-card" data-action="game-breakout">벽돌깨기</button>
      </div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="grade">학년 선택으로</button>
        ${z()}
      </div>
      ${ne(J.subtitle)}
    </div>
  `),F(f)}function Re(e){if(!ke()){S("grade");return}V({type:"game_open",message:`미니게임 시작: ${e}${ye()?" (관리자)":""}`,detail:{type:e}}),f.innerHTML=U('<div id="game-root"></div>',"game-screen");const t=f.querySelector("#game-root"),n={onBack:()=>S("rest"),onMain:()=>{K=null,ie=null,Z=null,S("main")}};e==="dart"?ce=ua(t,n)??null:e==="cricket"?ce=ba(t,n)??null:e==="breakout"&&(ce=ya(t,n)??null)}
