(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();const ht=8,z={title:"SCHOOL METRICS",subtitle:"철저한 내신관리 시스템",footer:"for 해연중 학생들",creator:"2210 박민호"},me={apiKey:"AIzaSyB7YJBfYa9zGnUvLD4DFgR5KLiNKuluHJM",authDomain:"school-metrics-fdee3.firebaseapp.com",projectId:"school-metrics-fdee3",storageBucket:"school-metrics-fdee3.firebasestorage.app",messagingSenderId:"378255554733",appId:"1:378255554733:web:01b06dca5b5307860eae24",measurementId:"G-0BL416S3QD"},be="alyssabell729@gmail.com",Yt=[be,"20251413@haeyeon.ms.kr"];function q(){return!!(me.apiKey&&me.projectId&&me.appId)}function Ne(e){return String(e||"").trim().toLowerCase()===be.toLowerCase()}function He(e){const t=String(e||"").trim().toLowerCase();return Yt.some(n=>n.toLowerCase()===t)}const Xt="https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js",D="https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js",ne="https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";let ue=null,ye=null,fe=null,ke=null;async function wt(){return q()?ue||(ke||(ke=(async()=>{const{initializeApp:e,getApps:t}=await import(Xt);return ue=t().length?t()[0]:e(me),ue})().catch(e=>(console.warn("[firebase] app init failed",e),ke=null,ue=null,null))),ke):null}async function _(){if(!q())return null;if(await de(),ye)return ye;const e=await wt();if(!e)return null;const{getFirestore:t}=await import(D);return ye=t(e),ye}async function de(){if(!q())return null;if(fe)return fe;const e=await wt();if(!e)return null;const{getAuth:t,setPersistence:n,browserLocalPersistence:r}=await import(ne);fe=t(e);try{await n(fe,r)}catch(a){console.warn("[firebase] auth persistence",a)}return fe}function We(e){const t=(e==null?void 0:e.code)||"";return{"auth/email-already-in-use":"이미 가입된 계정입니다. 로그인하세요.","auth/invalid-email":"이메일 형식이 올바르지 않습니다.","auth/weak-password":"비밀번호는 6자 이상이어야 합니다.","auth/user-not-found":"가입되지 않은 계정입니다. 먼저 회원가입하세요.","auth/wrong-password":"비밀번호가 틀렸습니다.","auth/invalid-credential":"이메일 또는 비밀번호가 올바르지 않습니다.","auth/too-many-requests":"시도가 너무 많습니다. 잠시 후 다시 시도하세요.","auth/network-request-failed":"네트워크 오류입니다. 연결을 확인하세요.","auth/operation-not-allowed":"Firebase에서 이메일/비밀번호 로그인을 켜야 합니다.","auth/missing-email":"이메일을 입력하세요.","auth/requires-recent-login":"보안을 위해 비밀번호를 다시 입력한 뒤 탈퇴해 주세요."}[t]||(e==null?void 0:e.message)||"인증에 실패했습니다."}async function Qt(e,t){const n=await de();if(!n)throw new Error("Firebase가 설정되지 않았습니다.");const{createUserWithEmailAndPassword:r,sendEmailVerification:a}=await import(ne);try{const s=await r(n,e,t);try{await a(s.user)}catch(i){console.warn("[firebase] verification mail",i)}return s.user}catch(s){throw s.friendlyMessage=We(s),s}}async function Zt(e,t){const n=await de();if(!n)throw new Error("Firebase가 설정되지 않았습니다.");const{signInWithEmailAndPassword:r}=await import(ne);try{return(await r(n,e,t)).user}catch(a){throw a.friendlyMessage=We(a),a}}async function $e(){const e=await de();if(!e)return;const{signOut:t}=await import(ne);await t(e)}async function en(e){const t=await de();if(!(t!=null&&t.currentUser)){const i=new Error("로그인이 필요합니다.");throw i.friendlyMessage="로그인이 필요합니다.",i}const{EmailAuthProvider:n,reauthenticateWithCredential:r,deleteUser:a}=await import(ne),s=t.currentUser;try{const i=n.credential(s.email,e);await r(s,i),await a(s)}catch(i){throw i.friendlyMessage=We(i),i}}async function Ee(){const e=await de();if(!e)return null;if(e.currentUser)return e.currentUser;const{onAuthStateChanged:t}=await import(ne);return new Promise(n=>{const r=t(e,a=>{r(),n(a||null)})})}async function tn(){const e=await Ee();return e?(await e.reload(),e):null}async function nn(){const e=await Ee();if(!e)throw new Error("로그인된 사용자가 없습니다.");const{sendEmailVerification:t}=await import(ne);await t(e)}async function an(e){const t=await Ee();if(!t)return;const{updateProfile:n}=await import(ne);await n(t,e)}async function yt(e,t){if(!e)return!1;const n=await _();if(!n)return!1;const{doc:r,setDoc:a,serverTimestamp:s}=await import(D),i={...t};return Object.keys(i).forEach(l=>{i[l]===void 0&&delete i[l]}),await a(r(n,"userProfiles",e),{...i,updatedAt:s()},{merge:!0}),!0}async function rn(e){if(!e)return null;const t=await _();if(!t)return null;const{doc:n,getDoc:r}=await import(D),a=await r(n(t,"userProfiles",e));if(!a.exists())return null;const s=a.data();return delete s.updatedAt,s}async function sn(){const e=await _();if(!e)return[];const{collection:t,getDocs:n}=await import(D);return(await n(t(e,"userProfiles"))).docs.map(a=>({id:a.id,uid:a.id,...a.data()}))}async function kt(e){if(!e)return!1;const t=await _();if(!t)return!1;const{doc:n,deleteDoc:r}=await import(D);return await r(n(t,"userProfiles",e)),!0}async function on(e){const t=String(e||"").trim().toLowerCase();if(!t)return!1;const n=await _();if(!n)return!1;const{doc:r,setDoc:a,serverTimestamp:s}=await import(D);return await a(r(n,"blockedAccounts",t),{account:t,blockedAt:s()}),!0}async function ln(e){const t=String(e||"").trim().toLowerCase();if(!t)return!1;const n=await _();if(!n)return!1;const{doc:r,deleteDoc:a}=await import(D);return await a(r(n,"blockedAccounts",t)),!0}async function cn(){const e=await _();if(!e)return[];const{collection:t,getDocs:n}=await import(D);return(await n(t(e,"blockedAccounts"))).docs.map(a=>{const s=a.data()||{};return{id:a.id,account:String(s.account||a.id||"").toLowerCase()}}).filter(a=>a.account).sort((a,s)=>a.account.localeCompare(s.account))}async function vt(e){const t=String(e||"").trim().toLowerCase();if(!t)return!1;const n=await _();if(!n)return!1;const{doc:r,getDoc:a}=await import(D);try{return(await a(r(n,"blockedAccounts",t))).exists()}catch(s){return console.warn("[firebase] blocked check",s),!1}}async function dn(e){const t=await _();if(!t)return null;const{collection:n,addDoc:r,serverTimestamp:a}=await import(D),s={...e};return Object.keys(s).forEach(l=>{s[l]===void 0&&delete s[l]}),(await r(n(t,"activityLogs"),{...s,createdAt:a()})).id}async function un(e=200){const t=await _();if(!t)return[];const{collection:n,query:r,orderBy:a,limit:s,getDocs:i}=await import(D),l=r(n(t,"activityLogs"),a("at","desc"),s(e));return(await i(l)).docs.map(f=>({id:f.id,...f.data()}))}async function fn(){const e=await _();if(!e)return 0;const{collection:t,getDocs:n,deleteDoc:r,query:a,limit:s}=await import(D);let i=0;for(;;){const l=await n(a(t(e,"activityLogs"),s(100)));if(l.empty||(await Promise.all(l.docs.map(u=>r(u.ref))),i+=l.size,l.size<100))break}return i}async function mn(e){const t=await _();if(!t)return!1;const{doc:n,setDoc:r,serverTimestamp:a}=await import(D),s={...e};return Object.keys(s).forEach(i=>{s[i]===void 0&&delete s[i]}),await r(n(t,"adminSettings","global"),{...s,updatedAt:a()}),!0}async function bn(){const e=await _();if(!e)return null;const{doc:t,getDoc:n}=await import(D),r=await n(t(e,"adminSettings","global"));if(!r.exists())return null;const a=r.data();return delete a.updatedAt,a}const gn="modulepreload",pn=function(e,t){return new URL(e,t).href},ot={},hn=function(t,n,r){let a=Promise.resolve();if(n&&n.length>0){let i=function(g){return Promise.all(g.map(m=>Promise.resolve(m).then(c=>({status:"fulfilled",value:c}),c=>({status:"rejected",reason:c}))))};const l=document.getElementsByTagName("link"),u=document.querySelector("meta[property=csp-nonce]"),f=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));a=i(n.map(g=>{if(g=pn(g,r),g in ot)return;ot[g]=!0;const m=g.endsWith(".css"),c=m?'[rel="stylesheet"]':"";if(!!r)for(let k=l.length-1;k>=0;k--){const C=l[k];if(C.href===g&&(!m||C.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${g}"]${c}`))return;const o=document.createElement("link");if(o.rel=m?"stylesheet":gn,m||(o.as="script"),o.crossOrigin="",o.href=g,f&&o.setAttribute("nonce",f),document.head.appendChild(o),m)return new Promise((k,C)=>{o.addEventListener("load",k),o.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${g}`)))})}))}function s(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return a.then(i=>{for(const l of i||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})},pe="schoolMetricsUserAccount",wn=new Set(["2024","2025","2026"]),yn=/^(\d{4})(\d{4})@haeyeon\.ms\.kr$/i,lt=6;function St(e){return String(e||"").trim().toLowerCase().replace(/\uFF20/g,"@").replace(/[\u200B-\u200D\uFEFF]/g,"").replace(/\s+/g,"")}function kn(e){const n=St(e).match(yn);if(!n)return{ok:!1,error:"해연중 계정(예: 20261111@haeyeon.ms.kr) 형식으로 입력하세요."};const r=n[1],a=n[2],s=Le(a);return s.ok?wn.has(r)?{ok:!0,account:`${r}${s.studentId}@haeyeon.ms.kr`,year:r,studentId:s.studentId,grade:s.grade,classNo:s.classNo,number:s.number,isAdminAccount:!1}:{ok:!1,error:"년도는 2024, 2025, 2026만 가능합니다."}:s}function Me(e){const t=St(e);return Ne(t)||t===be.toLowerCase()?{ok:!0,account:be.toLowerCase(),year:"admin",studentId:"admin",grade:0,classNo:0,number:0,isAdminAccount:!0}:t.includes("@")&&!t.endsWith("@haeyeon.ms.kr")?{ok:!1,error:"해연중 학교 계정(@haeyeon.ms.kr)만 사용할 수 있습니다."}:kn(t)}function Le(e){const t=String(e||"").trim();if(!/^\d{4}$/.test(t))return{ok:!1,error:"학번은 숫자 4자리여야 합니다. (예: 1111)"};const n=t[0],r=t[1],a=Number(t.slice(2));return["1","2","3"].includes(n)?"12345678".includes(r)?!Number.isInteger(a)||a<1||a>35?{ok:!1,error:"번호는 01~35만 가능합니다."}:{ok:!0,studentId:t,grade:Number(n),classNo:Number(r),number:a}:{ok:!1,error:"학번 둘째 자리(반)는 1~8만 가능합니다."}:{ok:!1,error:"학번 첫 자리(학년)는 1·2·3만 가능합니다."}}function $t(e){const t=String(e||"").trim().replace(/\s+/g," ");return t.length<2?{ok:!1,error:"이름은 2글자 이상 입력하세요."}:t.length>20?{ok:!1,error:"이름은 20글자 이하로 입력하세요."}:{ok:!0,displayName:t}}function Ge(e){return String(e||"").length<lt?{ok:!1,error:`비밀번호는 ${lt}자 이상이어야 합니다.`}:{ok:!0}}function Ke(e){return localStorage.setItem(pe,JSON.stringify(e)),e}function Lt(e,t={}){return{account:e.account,year:e.year,studentId:e.studentId,grade:e.grade,classNo:e.classNo,number:e.number,displayName:t.displayName||"",loggedInAt:new Date().toISOString(),viaPassword:!0,...t}}function U(){try{const e=localStorage.getItem(pe);if(!e)return null;const t=JSON.parse(e);return t!=null&&t.account&&Me(t.account).ok?t:null}catch{return null}}function At(){return!!U()}function ce(){var e;return((e=U())==null?void 0:e.account)||null}function vn(){var e;return((e=U())==null?void 0:e.displayName)||""}function Sn(){var e;return((e=U())==null?void 0:e.studentId)||""}function Ve(e=U()){if(!e)return"";const t=[];return e.year&&e.year!=="admin"&&t.push(String(e.year)),e.studentId&&e.studentId!=="admin"&&t.push(e.studentId),e.displayName&&t.push(e.displayName),t.join(" · ")||e.account||""}function $n(){var e;return((e=U())==null?void 0:e.year)||""}async function Ln(){localStorage.removeItem(pe);try{await $e()}catch{}}async function An(e){if(!q())return{ok:!1,error:"Firebase 설정이 없습니다."};const t=U();if(!(t!=null&&t.account))return{ok:!1,error:"로그인이 필요합니다."};if(t.isAdminAccount||Ne(t.account))return{ok:!1,error:"이 계정은 탈퇴할 수 없습니다."};const n=Ge(e);if(!n.ok)return n;try{try{const{logActivity:r}=await hn(async()=>{const{logActivity:a}=await Promise.resolve().then(()=>Tn);return{logActivity:a}},[],import.meta.url);await r({type:"user_withdraw",message:`계정 탈퇴: ${t.displayName||""} ${t.account}`.trim(),account:t.account,displayName:t.displayName||"",studentId:t.studentId||"",year:t.year||""})}catch(r){console.warn("[auth] withdraw log",r)}if(t.uid)try{await kt(t.uid)}catch(r){console.warn("[auth] delete profile",r)}return await en(e),localStorage.removeItem(pe),{ok:!0}}catch(r){return{ok:!1,error:r.friendlyMessage||r.message||"계정 탈퇴에 실패했습니다."}}}async function Nt(e,t){if(e){try{await an({displayName:t.displayName||""})}catch(n){console.warn("[auth] updateProfile",n)}try{await yt(e,{displayName:t.displayName||"",studentId:t.studentId||"",year:t.year||"",account:t.account||"",grade:t.grade,classNo:t.classNo,number:t.number,uniqueSubjectCount:t.uniqueSubjectCount??0,gameUnlockCount:t.gameUnlockCount??0})}catch(n){console.warn("[auth] cloud profile",n)}}}async function ze(e,{requireVerified:t=!0}={}){const n=e==null?void 0:e.email;if(!n)return await $e().catch(()=>{}),{ok:!1,error:"계정 이메일을 가져오지 못했습니다."};const r=Me(n);if(!r.ok)return await $e().catch(()=>{}),r;if(t&&!e.emailVerified&&!r.isAdminAccount)return{ok:!1,needVerify:!0,error:"학교 메일함에서 인증 메일의 링크를 눌러주세요. (스팸함도 확인)",account:r.account};let a=String(e.displayName||"").trim(),s=r.studentId,i=r.grade,l=r.classNo,u=r.number;try{const m=await rn(e.uid);if(m!=null&&m.displayName&&(a=String(m.displayName).trim()),m!=null&&m.studentId){const c=Le(m.studentId);c.ok&&(s=c.studentId,i=c.grade,l=c.classNo,u=c.number)}}catch(m){console.warn("[auth] load profile",m)}const f=U();if((f==null?void 0:f.account)===r.account&&(!a&&f.displayName&&(a=f.displayName),f.studentId)){const m=Le(f.studentId);m.ok&&s===r.studentId&&f.studentId!==r.studentId&&(s=m.studentId,i=m.grade,l=m.classNo,u=m.number)}return{ok:!0,user:Ke(Lt({...r,studentId:s,grade:i,classNo:l,number:u},{uid:e.uid||null,emailVerified:!!e.emailVerified,displayName:a,isAdminAccount:!!r.isAdminAccount}))}}async function Nn(e,t,n){if(!q())return{ok:!1,error:"Firebase 설정이 없습니다."};const r=$t(n);if(!r.ok)return r;const a=Me(e);if(!a.ok)return a;const s=Ge(t);if(!s.ok)return s;try{if(await vt(a.account))return{ok:!1,error:"관리자에 의해 삭제·차단된 계정입니다. 다시 가입할 수 없습니다."};const i=await Qt(a.account,t);return await Nt(i.uid,{displayName:r.displayName,studentId:a.studentId,year:a.year,account:a.account,grade:a.grade,classNo:a.classNo,number:a.number,uniqueSubjectCount:0,gameUnlockCount:0}),Ke(Lt(a,{uid:i.uid,displayName:r.displayName,emailVerified:!1})),{ok:!1,needVerify:!0,registered:!0,account:a.account,displayName:r.displayName,error:"가입되었습니다. 학교 메일함의 인증 링크를 누른 뒤 로그인하세요. (스팸함도 확인)",uid:i==null?void 0:i.uid}}catch(i){const l=String(i.friendlyMessage||i.message||"");return/insufficient permissions|permission-denied/i.test(l)?{ok:!1,error:"서버 권한 설정이 아직 반영되지 않았습니다. 관리자에게 Firebase Rules 게시를 요청하세요."}:{ok:!1,error:i.friendlyMessage||i.message||"회원가입 실패"}}}async function En(e,t){if(!q())return{ok:!1,error:"Firebase 설정이 없습니다."};const n=Me(e);if(!n.ok)return n;const r=Ge(t);if(!r.ok)return r;try{const a=await Zt(n.account,t);if(await a.reload(),await vt(n.account))return await $e().catch(()=>{}),{ok:!1,error:"관리자에 의해 삭제·차단된 계정입니다."};const s=await ze(a,{requireVerified:!n.isAdminAccount});return s.ok,s}catch(a){return{ok:!1,error:a.friendlyMessage||a.message||"로그인 실패"}}}async function Mn({displayName:e,studentId:t}){const n=U();if(!n)return{ok:!1,error:"로그인이 필요합니다."};const r=$t(e);if(!r.ok)return r;const a=Le(t);if(!a.ok)return a;const s=Ke({...n,displayName:r.displayName,studentId:a.studentId,grade:a.grade,classNo:a.classNo,number:a.number});return await Nt(n.uid,{displayName:s.displayName,studentId:s.studentId,year:s.year,account:s.account,grade:s.grade,classNo:s.classNo,number:s.number}),{ok:!0,user:s}}async function In(){try{const e=await tn();if(!e)return{ok:!1,error:"먼저 로그인(비밀번호)을 다시 시도하세요."};const t=await ze(e,{requireVerified:!0});return t.ok,t}catch(e){return{ok:!1,error:e.message||"인증 상태 확인 실패"}}}async function xn(){try{return await nn(),{ok:!0,message:"인증 메일을 다시 보냈습니다. 메일함·스팸함을 확인하세요."}}catch(e){return{ok:!1,error:e.message||"인증 메일 재전송 실패"}}}async function Cn(){if(!q())return ve(),null;try{const e=await Ee();if(!e)return ve(),null;await e.reload();const t=await ze(e,{requireVerified:!0});return t.ok?t.user:(ve(),null)}catch(e){return console.warn("[auth] restore",e),ve(),null}}function ve(){localStorage.removeItem(pe)}const ct="schoolMetricsDeviceId";function Ie(){let e=localStorage.getItem(ct);return e||(e=`dev-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,localStorage.setItem(ct,e)),e}const Je="schoolMetricsAdminSettings",Ae="schoolMetricsActivityLog",qn=500,oe={restUnlockUses:ht,freeGames:!0,standardScale:[{letter:"A",min:90},{letter:"B",min:80},{letter:"C",min:70},{letter:"D",min:60},{letter:"E",min:0}],artsScale:[{letter:"A",min:80},{letter:"B",min:60},{letter:"C",min:0}]};function Ye(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function Xe(e,t){localStorage.setItem(e,JSON.stringify(t))}function O(){return Ne(ce())}function Pn(){}function J(){const e=Ye(Je,{});return{...oe,...e,standardScale:e.standardScale||oe.standardScale,artsScale:e.artsScale||oe.artsScale}}function Et(e){const t={...J(),...e};return Xe(Je,t),K({type:"admin_settings",message:"관리자 설정 변경",detail:e}),q()&&mn(t).catch(n=>console.warn("[firebase] settings save",n)),t}async function Qe(){if(!q())return J();try{const e=await bn();if(e&&typeof e=="object"){const t={...oe,...e,standardScale:e.standardScale||oe.standardScale,artsScale:e.artsScale||oe.artsScale};return Xe(Je,t),t}}catch(e){console.warn("[firebase] settings load",e)}return J()}function ae(){return Number(J().restUnlockUses)||ht}function he(){return O()&&J().freeGames!==!1}async function K(e){const t=U(),n={id:`${Date.now()}-${Math.random().toString(36).slice(2,7)}`,at:new Date().toISOString(),deviceId:Ie(),...e,account:e.account||ce()||"guest",displayName:e.displayName||vn()||"",studentId:e.studentId||Sn()||"",year:e.year||$n()||(t==null?void 0:t.year)||""},r=Ye(Ae,[]);if(r.unshift(n),Xe(Ae,r.slice(0,qn)),q())try{await dn(n)}catch(a){console.warn("[firebase] log",a)}return n}function xe(){return Ye(Ae,[])}async function Ze(){const e=xe();if(!q())return{source:"local",logs:e};try{const t=await un(300),n=new Map;for(const a of[...t,...e]){const s=a.id||`${a.at}-${a.deviceId}-${a.type}-${a.message}`;n.has(s)||n.set(s,a)}return{source:"firebase",logs:[...n.values()].sort((a,s)=>String(s.at).localeCompare(String(a.at)))}}catch(t){return console.warn("[firebase] fetch logs",t),{source:"local-fallback",logs:e,error:String(t.message||t)}}}async function Mt(){if(!q())return{source:"none",users:[],error:"Firebase 미설정"};try{return{source:"firebase",users:(await sn()).filter(n=>n.account&&!String(n.account).includes("@gmail.com")&&!n.deleted).map(n=>({uid:n.uid||n.id||"",account:n.account||"",displayName:n.displayName||"",studentId:n.studentId||"",year:n.year||"",uniqueSubjectCount:Number(n.uniqueSubjectCount)||0,gameUnlockCount:Number(n.gameUnlockCount)||0})).sort((n,r)=>{const a=String(n.year).localeCompare(String(r.year));return a!==0?a:String(n.studentId).localeCompare(String(r.studentId))})}}catch(e){return console.warn("[firebase] fetch users",e),{source:"error",users:[],error:String(e.message||e)}}}async function It({uid:e,account:t,displayName:n,block:r=!1}){if(!q())return{ok:!1,error:"Firebase 미설정"};if(!e||!t)return{ok:!1,error:"삭제할 사용자 정보가 없습니다."};try{return r&&await on(t),await kt(e),K({type:"admin_delete_user",message:`계정 삭제${r?"+차단":""}: ${n||""} ${t}`.trim(),detail:{uid:e,account:t,displayName:n,blocked:!!r}}),{ok:!0}}catch(a){return{ok:!1,error:a.message||"삭제 실패"}}}async function Re(){if(!q())return{source:"none",accounts:[],error:"Firebase 미설정"};try{return{source:"firebase",accounts:await cn()}}catch(e){return{source:"error",accounts:[],error:e.message||"불러오기 실패"}}}async function Be(e){if(!q())return{ok:!1,error:"Firebase 미설정"};const t=String(e||"").trim().toLowerCase();if(!t)return{ok:!1,error:"계정이 없습니다."};try{return await ln(t),K({type:"admin_unblock_user",message:`차단 해제: ${t}`,detail:{account:t}}),{ok:!0}}catch(n){return{ok:!1,error:n.message||"차단 해제 실패"}}}async function xt({cloud:e=!0}={}){if(localStorage.removeItem(Ae),e&&q())try{await fn()}catch(t){console.warn("[firebase] clear",t)}K({type:"admin_clear_logs",message:"활동 로그 초기화"})}function Ct(e=xe()){return JSON.stringify({exportedAt:new Date().toISOString(),deviceId:Ie(),firebase:q(),settings:J(),logs:e},null,2)}function qt(){const e=ce();return{configured:q(),projectId:me.projectId||"",adminEmail:be,isCloudAdmin:Ne(e),account:e||""}}const Tn=Object.freeze(Object.defineProperty({__proto__:null,adminLogout:Pn,clearActivityLogs:xt,deleteRegisteredUser:It,exportActivityLogsText:Ct,getActivityLogs:xe,getAdminSettings:J,getBlockedAccounts:Re,getDeviceId:Ie,getEffectiveUnlockUses:ae,getFirebaseStatus:qt,getMergedActivityLogs:Ze,getRegisteredUsers:Mt,isAdminFreeGames:he,isAdminSession:O,logActivity:K,saveAdminSettings:Et,syncAdminSettingsFromCloud:Qe,unblockAccount:Be},Symbol.toStringTag,{value:"Module"})),Ce="schoolMetricsUniqueSubjects",et="schoolMetricsGameUnlockCount";function Pt(){try{const e=localStorage.getItem(Ce),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch{return[]}}function jn(e){localStorage.setItem(Ce,JSON.stringify(e))}function Tt(){const e=Number(localStorage.getItem(et)||0);return Number.isFinite(e)&&e>0?Math.floor(e):0}function Dn(e){localStorage.setItem(et,String(Math.max(0,Math.floor(e))))}function tt(){var t;const e=U();!(e!=null&&e.uid)||!q()||e.isAdminAccount||(t=e.account)!=null&&t.includes("@gmail.com")||yt(e.uid,{displayName:e.displayName||"",studentId:e.studentId||"",year:e.year||"",account:e.account||"",grade:e.grade,classNo:e.classNo,number:e.number,uniqueSubjectCount:qe(),gameUnlockCount:Tt()}).catch(n=>console.warn("[storage] profile sync",n))}function _n(e){const t=ae(),n=Pt(),r=!n.includes(e);r&&(n.push(e),jn(n));const a=n.length,s=r&&a>=t;return s&&Dn(Tt()+1),tt(),{isNew:r,uniqueCount:a,justUnlocked:s}}function qe(){return Pt().length}function we(){return he()?!0:qe()>=ae()}function Un(){return Math.max(0,ae()-qe())}function Rn(){he()||(localStorage.removeItem(Ce),tt())}function Bn(){localStorage.removeItem(Ce),localStorage.removeItem(et)}function jt(){const e=ae(),t=qe(),n=Un();return he()?"관리자 모드: 미니게임 자유 이용":we()?`서로 다른 과목 ${t}개 달성! 휴식 미니게임 이용 가능`:`서로 다른 과목 ${n}개 더 계산하면 해금 (${t}/${e})`}const je=["희망은 좋은 것이다. 어쩌면 가장 좋은 것일지도. — 《쇼생크 탈출》","해야 한다, 아니면 안 된다. 그 중간은 없다. — 《스타워즈》","과거는 과거일 뿐이야. 배울 수만 있다면. — 《라이온 킹》","가장 어두운 시간은 해가 뜨기 직전이다. — 《어벤져스: 엔드게임》","세상에서 중요한 건 내가 누구냐가 아니라, 내가 뭘 하느냐다. — 《배트맨: 다크나이트》","우리에게 주어진 시간을 어떻게 쓸지만 결정하면 된다. — 《반지의 제왕》","아주 작은 존재도 미래를 바꿀 수 있다. — 《반지의 제왕》","자유는 아무 대가 없이 오지 않는다. — 《브레이브하트》","지금 이 순간을 잡아라. — 《데드 포엇 소사이어티》","무엇이든 할 수 있다. — 《쿵푸 판다》","그냥 계속 헤엄쳐. — 《니모를 찾아서》","모든 걸 시도해 봐. — 《주토피아》","두려움을 없애는 방법은 그것과 마주하는 것이다. — 《인사이드 아웃》","뜻이 있는 곳에 길이 있다. — 《아바타》","비가 그친 뒤에는 반드시 맑은 하늘이 온다. — 《날씨의 아이》","나는 이 세계를 이해할 수 없어. 그래도 계속한다. — 《록키》","시련이 없었다면 챔피언도 없다. — 《록키》","인생은 수레바퀴와 같아. 항상 앞으로 나아가야 한다. — 《니모를 찾아서》","이겨야 한다. 어떻게든. — 《친구》","꿈은 거짓말이 아니다. 반드시 이루어질 내일이다. — 《드림하이》","포기하면 그 순간 게임 끝이야, 인생도 마찬가지다. — 《슬램덩크》","죽을 때 후회 없는 인생을 살아라. — 《원피스》","약한 것은 죄가 아니다. 약한 채로 있으면 안 될 뿐. — 《귀멸의 칼날》","막을 때까지 싸워라. — 《진격의 거인》","노력은 배신하지 않는다. — 《하이큐!!》","패배는 패배하지 않는 것보다 낫다. — 《하이큐!!》","시선을 돌리지 마. 앞만 봐. — 《센과 치히로의 행방불명》","살아있는 한 힘을 내라. — 《하울의 움직이는 성》","바람이 분다. 견뎌야 한다. — 《바람의 나라》","상대는 나 자신이다. — 《초속 5센티미터》","포기하지 말 것. 내일이 있으니. — 《드래곤볼》","사람은 누구나 다시 태어날 수 있다. — 《바람의 나라》","아는 것이 힘이다. — 프랜시스 베이컨","천 리 길도 한 걸음부터. — 노자","배우고 또 배우면 어찌 기쁘지 아니하랴. — 공자","백번 듣는 것보다 한 번 보는 것이 낫다. — 공자","세 사람이 길을 가면 반드시 나의 스승이 있다. — 공자","하늘은 큰 뜻을 품은 자에게 먼저 고생을 시킨다. — 맹자","독서는 마음의 양식이다. — 키케로","하늘은 스스로 돕는 자를 돕는다. — 소포클레스","그대가 갈망하는 것을 따르라. — 랄프 왔도 에머슨","겁쟁이는 죽기 전에 여러 번 죽는다. 용감한 자는 한 번만 죽는다. — 셰익스피어","열정 없이는 위대한 것은 이루어지지 않는다. — 게오르크 빌헬름 프리드리히 헤겔","나는 나의 운명을 사랑한다. — 프리드리히 니체","오늘 할 일을 내일로 미루지 마라. — 벤자민 프랭클린","천재는 1%의 영감과 99%의 땀이다. — 토마스 에디슨","실패는 성공의 어머니이다. — 토마스 에디슨","시간은 금이다. — 벤자민 프랭클린","어리석은 자는 경험에서 아무것도 배우지 않는다. — 벤자민 프랭클린","실용적인 것이 가장 시적인 것이다. — 벤자민 프랭클린","깊은 생각 없는 독서는 낮잠과 같다. — 프랜시스 베이컨","인생은 속도가 아니라 방향이다. — 에이브러햄 링컨","성공은 최종적인 것이 아니며, 실패는 치명적인 것이 아니다. — 윈스턴 처칠","가장 위대한 영광은 넘어지지 않는 것이 아니라, 넘어질 때마다 일어서는 것이다. — 넬슨 만델라","용기는 두려움의 부재가 아니라, 두려움에도 행동하는 것이다. — 넬슨 만델라","네가 할 수 있다고 믿든 못 한다고 믿든, 네 말이 맞다. — 헨리 포드","성공의 비결은 시작하는 것이다. — 마크 트웨인","행운은 준비된 자에게 찾아온다. — 루이 파스퇴르","한계란 대부분 마음속에 있는 환상일 뿐이다. — 무하마드 알리","나는 세계 챔피언이다. 내가 그렇다고 말하기 전부터. — 무하마드 알리","항상 갈망하고, 우직하게 나아가라. — 스티브 잡스","당신의 시간은 제한되어 있다. 다른 사람의 인생을 살며 낭비하지 마라. — 스티브 잡스","오늘 나는 죽었다면 무엇을 후회하겠는가. — 스티브 잡스","죽고자 하면 살 것이요, 살고자 하면 죽을 것이니라. — 이순신","한 번도 실수한 적 없는 사람은 새로운 것을 시도한 적이 없는 사람이다. — 알버트 아인슈타인","네가 정말 소중히 여기는 것에 시간을 써라. — 《어린 왕자》","꽃을 단 한 송이라도 내가 직접 가꾸면, 내 세계에 엇비슷한 시간이 흐른다. — 《어린 왕자》","세상에서 가장 강한 사람은 스스로를 이기는 사람이다. — 무라카미 하루키","빛을 보고자 한다면 어둠을 견뎌야 한다. — 무라카미 하루키","사람은 마음먹은 것은 다 이룬다. — 《바보》","고통 없이는 얻는 것도 없다. — 라틴 격언","로마는 하루아침에 이루어지지 않았다. — 속담","연습이 완벽을 만든다. — 속담","배움에는 왕도가 없다. — 유클리드","작은 일에 충실하라. 그곳에 네 힘이 있다. — 루드야드 키플링","가장 큰 위험은 위험을 감수하지 않는 것이다. — 마크 주커버그","인생은 짧고, 예술은 길다. — 히포크라테스","삶을 살아가는 가장 좋은 복수는 성공하는 것이다. — 프랭크 시나트라","피할 수 없으면 즐겨라. — 로버트 엘리엇","포기하지 않는 한, 늦었다고 생각할 때가 가장 빠른 때다. — 속담","꾸준함은 재능을 이긴다. — 속담","반복은 지루하지만, 반복 없는 실력은 환상이다. — 속담","오늘의 노력이 내일의 실력이 된다. — 속담","지금이 가장 빠른 시작이다. — 속담","목표 없는 공부는 방향 잃은 배와 같다. — 속담","모르는 것을 아는 것이 배움의 시작이다. — 속담","실력은 하루아침에 생기지 않는다. — 속담","쉬는 것도 실력이다. 번아웃을 조심하자. — 속담","비교하지 말고, 어제의 나와 겨루자. — 속담","이해가 안 되면 다시 보면 된다. 반복이 답이다. — 속담","시험은 결과일 뿐, 과정이 실력이다. — 속담","1%씩 매일 오르면 37배가 된다. — 속담","모르는 건 부끄러운 게 아니다. 묻지 않는 게 문제다. — 속담","오답 노트 한 장이 교과서 열 페이지보다 강하다. — 속담","할 수 있다고 믿는 순간, 절반은 온 것이다. — 속담","오늘 공부한 만큼, 내일은 덜 불안하다. — 속담"],dt="schoolMetricsQuoteIndex";function Fn(){let e=Number(localStorage.getItem(dt)||0);const t=je[e%je.length];return localStorage.setItem(dt,String((e+1)%je.length)),t}const On={1:{label:"1학년",note:"1학년은 2학기부터 내신 성적이 반영됩니다.",subjects:{국어:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"나만의 노트(나노)",weight:15,kind:"perf"}]}}},수학:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"기본도형 탐구 프로젝트",weight:20,kind:"perf"},{label:"평면·입체 도형 탐구",weight:20,kind:"perf"}]}}},사회:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"사회화 자서전 만들기",weight:20,kind:"perf"},{label:"모의 선거",weight:20,kind:"perf"}]}}},과학:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"실험 보고서 작성",weight:20,kind:"perf"},{label:"달의 위상 변화 관찰",weight:20,kind:"perf"}]}}},영어:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"희망 직업 소개",weight:20,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]}}},음악:{semesters:{2:{label:"2학기",items:[{label:"우쿨렐레 연주",weight:50,kind:"perf"},{label:"작곡가 탐구 활동",weight:50,kind:"perf"}]}}},미술:{semesters:{2:{label:"2학기",items:[{label:"스텐실",weight:50,kind:"perf"},{label:"문자도",weight:50,kind:"perf"}]}}},체육:{semesters:{2:{label:"2학기",items:[{label:"경기형 스포츠(축구)",weight:50,kind:"perf"},{label:"기록 도전형(달리기)",weight:50,kind:"perf"}]}}},정보:{semesters:{2:{label:"2학기",items:[{label:"AI 활용",weight:50,kind:"perf"},{label:"디지털 문화 표현",weight:50,kind:"perf"}]}}},"진로와 직업":{semesters:{2:{label:"2학기",items:[{label:"창업 프로젝트",weight:50,kind:"perf"},{label:"진로 디자인",weight:50,kind:"perf"}]}}},기술가정:{semesters:{2:{label:"2학기",items:[{label:"과학·미래기술 보고서",weight:35,kind:"perf"},{label:"에너지 신문 제작",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]}}}}},2:{label:"2학년",subjects:{국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"발표와 듣기",weight:15,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"복합양식 자료를 활용한 글 작성",weight:15,kind:"perf"}]}}},수학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"일차방정식·일차부등식",weight:20,kind:"perf"},{label:"연립일차방정식·일차함수",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"삼각형·사각형의 성질",weight:20,kind:"perf"},{label:"도형의 닮음·피타고라스",weight:20,kind:"perf"}]}}},역사:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"고대 문명 지도 만들기",weight:20,kind:"perf"},{label:"고대사 신문 만들기",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"서양 고대 문화유산 소개",weight:20,kind:"perf"},{label:"유럽 여행 소개 글쓰기",weight:20,kind:"perf"}]}}},과학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"밀도 측정",weight:10,kind:"perf"},{label:"지권 층상구조 모형 제작",weight:10,kind:"perf"},{label:"주기율표 탐구",weight:10,kind:"perf"},{label:"광합성 탐구",weight:10,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"소리의 성질 탐구",weight:10,kind:"perf"},{label:"인체 프로젝트",weight:20,kind:"perf"},{label:"전류,전압,저항 사이의 관계 탐구",weight:10,kind:"perf"}]}}},영어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"},{label:"발명품 소개",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"지역 축제 홍보",weight:20,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]}}},음악:{semesters:{1:{label:"1학기",items:[{label:"우쿨렐레 연주",weight:50,kind:"perf"},{label:"텅드럼 연주",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"펜비트 연주",weight:50,kind:"perf"},{label:"리코더 연주",weight:50,kind:"perf"}]}}},미술:{semesters:{1:{label:"1학기",items:[{label:"세밀화",weight:50,kind:"perf"},{label:"음식 모형 만들기",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"점묘화",weight:50,kind:"perf"},{label:"서양미술사 보고서",weight:50,kind:"perf"}]}}},체육:{semesters:{1:{label:"1학기",items:[{label:"경기형 스포츠(킨볼)",weight:60,kind:"perf"},{label:"도전형(제자리멀리뛰기)",weight:40,kind:"perf"}]},2:{label:"2학기",items:[{label:"경기형 스포츠(배드민턴)",weight:60,kind:"perf"},{label:"건강관리(줄넘기)",weight:40,kind:"perf"}]}}},도덕:{semesters:{1:{label:"1학기",items:[{label:"도덕적 인물 지폐 제작",weight:50,kind:"perf"},{label:"우정 네 컷 만들기",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"정보 카드 뉴스 제작",weight:50,kind:"perf"},{label:"인권 모니터링 제안서",weight:50,kind:"perf"}]}}},중국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 기말고사",weight:40,kind:"exam"},{label:"한어병음 작성",weight:30,kind:"perf"},{label:"중국어 말하기",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 기말고사",weight:40,kind:"exam"},{label:"하루 일과표 만들기",weight:30,kind:"perf"},{label:"중국어 말하기",weight:30,kind:"perf"}]}}},"금융과 미래":{semesters:{2:{label:"2학기",items:[{label:"투자 성향 검사",weight:50,kind:"perf"},{label:"투자 포트폴리오 구성",weight:50,kind:"perf"}]}}},기술가정:{semesters:{1:{label:"1학기",items:[{label:"효과적 의사소통 프로젝트",weight:35,kind:"perf"},{label:"제조 기술 프로젝트",weight:35,kind:"perf"},{label:"자기주도노트 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"균형 잡힌 식단 계획",weight:35,kind:"perf"},{label:"친환경 의복 생활",weight:35,kind:"perf"},{label:"자기주도노트 작성",weight:30,kind:"perf"}]}}}}},3:{label:"3학년",note:"3학년 2학기에는 기말고사가 없습니다.",subjects:{국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"논설문 쓰기",weight:15,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"한 학기 한 권 읽기",weight:30,kind:"perf"},{label:"문장의 짜임 고려해서 자신감 있게 발표",weight:30,kind:"perf"}]}}},사회:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"국가 기관 탐구로 권력 분립 이해",weight:20,kind:"perf"},{label:"국민 경제 지표와 국제 거래 이해",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"인구·도시 문제 탐구",weight:30,kind:"perf"},{label:"농업 산업화·세계화",weight:30,kind:"perf"}]}}},역사:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"고려 정치 변천",weight:20,kind:"perf"},{label:"고려의 문화 및 조선 통치 체제 탐구",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"조선 왕 가상 인터뷰",weight:30,kind:"perf"},{label:"양 난의 이해 및 영정조 정책 탐구",weight:30,kind:"perf"}]}}},도덕:{semesters:{1:{label:"1학기",items:[{label:"1학기 기말고사",weight:40,kind:"exam"},{label:"폭력 예방 논술문 작성",weight:30,kind:"perf"},{label:"사회 정의 실현 논술문 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"환경 보호 제안서",weight:30,kind:"perf"},{label:"실패 이력서 소개",weight:30,kind:"perf"}]}}},수학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"인수분해를 이용한 수의 성질 탐구",weight:20,kind:"perf"},{label:"이차함수 그래프",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"삼각비 개념 보고서",weight:30,kind:"perf"},{label:"원의 성질 문제해결",weight:30,kind:"perf"}]}}},과학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"기상 현상 실험",weight:20,kind:"perf"},{label:"화학 반응의 규칙 탐구",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"세포분열 관찰 실험",weight:30,kind:"perf"},{label:"물체 운동 분석",weight:30,kind:"perf"}]}}},영어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:15,kind:"perf"},{label:"급식 메뉴 프로젝트",weight:15,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"영어 듣기",weight:20,kind:"perf"},{label:"영어독서",weight:20,kind:"perf"},{label:"통계 자료 활용 프로젝트",weight:20,kind:"perf"}]}}},음악:{semesters:{1:{label:"1학기",items:[{label:"칼림바 연주",weight:50,kind:"perf"},{label:"전자드럼 연주",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"노래 부르기",weight:50,kind:"perf"},{label:"디자인사 연구보고서",weight:50,kind:"perf"}]}}},미술:{semesters:{1:{label:"1학기",items:[{label:"포트레이트 드로잉",weight:50,kind:"perf"},{label:"비주얼 리터러시",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"오마주",weight:50,kind:"perf"},{label:"디자인 조사 보고서",weight:50,kind:"perf"}]}}},체육:{semesters:{1:{label:"1학기",items:[{label:"전통 표현(티니클링)",weight:40,kind:"perf"},{label:"플로어볼",weight:60,kind:"perf"}]},2:{label:"2학기",items:[{label:"건강·체력 관리(타바타)",weight:40,kind:"perf"},{label:"배구",weight:60,kind:"perf"}]}}},기술가정:{semesters:{1:{label:"1학기",items:[{label:"생애 설계",weight:35,kind:"perf"},{label:"수송기술 제작",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"스마트폰 앱 만들기",weight:35,kind:"perf"},{label:"적정 기술 사례 조사",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]}}}}}};function ge(e){return On[e]??null}function Hn(e){const t=ge(e);return t?Object.keys(t.subjects):[]}function nt(e,t){var n;return((n=ge(e))==null?void 0:n.subjects[t])??null}function Dt(e,t){const n=nt(e,t);return n?Object.keys(n.semesters).map(Number).sort((r,a)=>r-a):[]}function Fe(e,t,n){var a;const r=nt(e,t);return((a=r==null?void 0:r.semesters[n])==null?void 0:a.items)??[]}function ut(e,t,n){var a;const r=nt(e,t);return((a=r==null?void 0:r.semesters[n])==null?void 0:a.label)??`${n}학기`}function Wn(e,t,n,r){return`${e}-${t}-${n}-${r}`}function at(e,t,n){return Fe(e,t,n).map((a,s)=>({key:Wn(e,t,n,s),subject:t,semester:n,label:a.label,weight:a.weight,kind:a.kind}))}function rt(e,t){let n=0,r=0;for(const a of e){const s=t[a.key];if(s===""||s===null||s===void 0)continue;const i=Number(s);Number.isNaN(i)||(n+=a.weight,r+=i*a.weight)}return n===0?null:r/n}function Gn(e,t){const n={},r=[];for(const s of e){const i=t[s.key];if(i===""||i===null||i===void 0){r.push(s);continue}const l=Number(i);if(Number.isNaN(l)){r.push(s);continue}n[s.key]=l}const a={...n};for(const s of r)a[s.key]=100;return{average:rt(e,a),remainingCount:r.length}}const Kn=["음악","미술","체육"],Vn=[{letter:"A",min:90},{letter:"B",min:80},{letter:"C",min:70},{letter:"D",min:60},{letter:"E",min:0}],zn=[{letter:"A",min:80},{letter:"B",min:60},{letter:"C",min:0}];function _t(e){return e.map((t,n,r)=>{const a=r[n-1],s=t.min===0?`${t.letter} (${(a==null?void 0:a.min)??60}점 미만)`:`${t.letter} (${t.min}점 이상)`;return{letter:t.letter,min:Number(t.min)||0,label:s}})}function Ut(){const e=J().standardScale;return _t(e!=null&&e.length?e:Vn)}function Rt(){const e=J().artsScale;return _t(e!=null&&e.length?e:zn)}function st(e){return Kn.includes(e)}function Pe(e){return e==null||Number.isNaN(e)?null:Math.round(e)}function it(e){return st(e)?Rt():Ut()}function Oe(e,t){const n=Pe(e);if(n===null)return"-";const r=it(t);for(const a of r)if(n>=a.min)return a.letter;return r[r.length-1].letter}function te(e){return`${e}등급`}const ft=["조금만 더 올리면 된다. 할 수 있어!","상위 등급이 코앞이다. 끝까지 달려보자!","지금의 노력이 등급을 바꾼다. 포기하지 마!","아직 끝나지 않았어. 충분히 올릴 수 있어!","남은 항목이 기회다. 집중해서 마무리하자!","한 걸음만 더 가면 등급이 달라진다. 파이팅!","가능성은 아직 살아 있다. 믿고 가보자!","오늘의 한 문제가 등급을 바꿀 수도 있어!","목표 등급까지 거의 다 왔다. 조금만 더!","실력은 거짓말하지 않는다. 계속 밀어붙여!"];function Jn(e){return e.projection.remainingCount>0&&e.letter!==e.projLetter}function Yn(){const e=Math.floor(Math.random()*ft.length);return ft[e]}function Bt(e=null){const t=e?st(e):!1,n=e?t?`${e}은(는) 예체능 과목 (A·B·C)`:`${e}은(는) 일반 과목 (A·B·C·D·E)`:"과목 유형에 따라 등급 기준이 다릅니다.",r=Ut(),a=Rt();return`
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
  `}function Ft(e){const t=e.querySelector("[data-toggle='criteria']"),n=e.querySelector("#criteria-panel");!t||!n||t.addEventListener("click",()=>{const r=n.classList.toggle("hidden");t.setAttribute("aria-expanded",String(!r)),t.textContent=r?"▶ 등급 기준표 확인":"▼ 등급 기준표 닫기"})}function Ot(e,t,n,r){if(n===null)return null;const a=Pe(n),s=Oe(a,r),i=it(r),l=i.findIndex(N=>N.letter===s);if(l<=0)return{targetLetter:s,needed:null,message:"이미 최고 등급입니다."};const u=i[l-1],f=u.min,g=e.filter(N=>{const y=t[N.key];return y===""||y===null||y===void 0||Number.isNaN(Number(y))});if(g.length===0)return{targetLetter:u.letter,needed:null,message:"모든 항목이 입력되었습니다."};let m=0,c=0,v=0;for(const N of e){const y=t[N.key];if(y===""||y===null||y===void 0||Number.isNaN(Number(y))){v+=N.weight;continue}m+=N.weight,c+=Number(y)*N.weight}if(v===0)return null;const o=m+v,k=(f*o-c)/v,C=Math.max(0,Math.min(100,k));return{targetLetter:u.letter,needed:Math.ceil(C*10)/10,remainingCount:g.length,message:null}}function Xn(e,t,n,r){const s=it(r).find(o=>o.letter===n);if(!s)return null;let i=0,l=0,u=0,f=0;for(const o of e){const k=t[o.key];if(k===""||k===null||k===void 0||Number.isNaN(Number(k))){u+=o.weight,f+=1;continue}l+=o.weight,i+=Number(k)*o.weight}if(u===0)return null;const g=l+u,c=((s.min-.5)*g-i)/u;return{minScore:Math.ceil(Math.max(0,Math.min(100,c))*10)/10,remainingCount:f}}function Qn(e){const t=Pe(e);return{raw:e,rounded:t,display:`${t}점`}}function Zn(e,t,n){const r=rt(e,t);if(r===null)return null;const{rounded:a}=Qn(r),s=Oe(a,n),i=Gn(e,t),l=Pe(i.average),u=Ot(e,t,r,n),f=Xn(e,t,s,n);return{average:r,rounded:a,letter:s,projection:i,projRounded:l,projLetter:Oe(l,n),needed:u,confirmMin:f}}function ie(e="globe"){return`
    <svg class="${e}" viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="48" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.35"/>
      <ellipse cx="60" cy="60" rx="48" ry="16" fill="none" stroke="currentColor" stroke-width="1"/>
      <ellipse cx="60" cy="60" rx="16" ry="48" fill="none" stroke="currentColor" stroke-width="1"/>
      <ellipse cx="60" cy="60" rx="34" ry="48" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.7"/>
      <line x1="12" y1="60" x2="108" y2="60" stroke="currentColor" stroke-width="0.8"/>
      <line x1="60" y1="12" x2="60" y2="108" stroke="currentColor" stroke-width="0.8"/>
    </svg>
  `}function ea(){return'<img class="title-bg" src="./title-bg.png" alt="" aria-hidden="true" />'}function ta(){return'<img class="go-bg" src="./go-bg.png" alt="" aria-hidden="true" />'}function Ht(e){return`grade-theme-${e}`}function R(e,t=""){return`<div class="phone-screen ${t}">${e}</div>`}function Z(e){return`<p class="screen-footer">${e}</p>`}function ee(e="main"){return`<button type="button" class="link-btn" data-action="${e}">메인화면으로</button>`}const Wt=[20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5],Se=8;function na(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function aa(e,t,n){var r,a;(r=e.querySelector('[data-nav="back"]'))==null||r.addEventListener("click",t),(a=e.querySelector('[data-nav="main"]'))==null||a.addEventListener("click",n)}function ra(e,t){const n=Math.hypot(e,t);if(n>1)return{points:0,label:"보드 밖"};if(n<=.07)return{points:50,label:"더블 불 · 50"};if(n<=.14)return{points:25,label:"싱글 불 · 25"};let r=Math.atan2(e,-t);r<0&&(r+=Math.PI*2);const a=Math.floor((r+Math.PI/20)%(Math.PI*2)/(Math.PI/10)),s=Wt[a];return n>=.9?{points:s*2,label:`더블 ${s} · ${s*2}`}:n>=.52&&n<=.62?{points:s*3,label:`트리플 ${s} · ${s*3}`}:{points:s,label:`싱글 ${s} · ${s}`}}function De(e,t,n){const r=t/2,a=t/2,s=t*.42;e.clearRect(0,0,t,t),e.fillStyle="#1a1a1a",e.beginPath(),e.arc(r,a,s*1.08,0,Math.PI*2),e.fill();for(let i=0;i<20;i++){const l=-Math.PI/2-Math.PI/20+i*Math.PI/10,u=l+Math.PI/10,f=i%2===0;e.beginPath(),e.moveTo(r,a),e.arc(r,a,s*.9,l,u),e.closePath(),e.fillStyle=f?"#111":"#ece6d8",e.fill(),e.beginPath(),e.moveTo(r,a),e.arc(r,a,s*.52,l,u),e.closePath(),e.fillStyle=f?"#1c1c1c":"#f5f0e6",e.fill(),e.beginPath(),e.arc(r,a,s,l,u),e.arc(r,a,s*.9,u,l,!0),e.closePath(),e.fillStyle=i%2===0?"#c4122f":"#0a7a3c",e.fill(),e.beginPath(),e.arc(r,a,s*.62,l,u),e.arc(r,a,s*.52,u,l,!0),e.closePath(),e.fillStyle=i%2===0?"#c4122f":"#0a7a3c",e.fill()}e.strokeStyle="rgba(180,180,180,0.55)",e.lineWidth=1;for(let i=0;i<20;i++){const l=-Math.PI/2-Math.PI/20+i*Math.PI/10;e.beginPath(),e.moveTo(r,a),e.lineTo(r+Math.cos(l)*s,a+Math.sin(l)*s),e.stroke()}[.9,.62,.52,.14,.07].forEach(i=>{e.beginPath(),e.arc(r,a,s*i,0,Math.PI*2),e.stroke()}),e.beginPath(),e.arc(r,a,s*.14,0,Math.PI*2),e.fillStyle="#0a7a3c",e.fill(),e.beginPath(),e.arc(r,a,s*.07,0,Math.PI*2),e.fillStyle="#c4122f",e.fill(),e.fillStyle="#fff",e.font=`bold ${Math.max(10,t*.045)}px sans-serif`,e.textAlign="center",e.textBaseline="middle";for(let i=0;i<20;i++){const l=-Math.PI/2+i*Math.PI/10,u=r+Math.cos(l)*s*1.14,f=a+Math.sin(l)*s*1.14;e.fillText(String(Wt[i]),u,f)}for(const i of n)e.beginPath(),e.arc(r+i.nx*s,a+i.ny*s,4,0,Math.PI*2),e.fillStyle="#fff700",e.fill(),e.strokeStyle="#000",e.stroke()}function sa(e,{onBack:t,onMain:n}){let r=0,a=Se,s="vertical",i=.5,l=.5,u=1,f=1,g=0,m=0;const c=[],v=1.35;e.innerHTML=`
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
      ${na()}
    </div>
  `;const o=e.querySelector("#dart-canvas"),k=o.getContext("2d"),C=e.querySelector("#dart-score"),N=e.querySelector("#dart-throws"),y=e.querySelector("#dart-feedback"),p=e.querySelector("#dart-stop"),M=e.querySelector("#dart-retry"),T=e.querySelector("#aim-v"),B=e.querySelector("#aim-h"),H=e.querySelector(".aim-bar-v"),F=e.querySelector(".aim-bar-h");function j(){const d=Math.min(300,e.clientWidth||300);o.width=d,o.height=d,De(k,d,c)}function W(){T.style.top=`${i*100}%`,B.style.left=`${l*100}%`,H.classList.toggle("active",s==="vertical"),F.classList.toggle("active",s==="horizontal")}function Y(d){m||(m=d);const h=Math.min(.05,(d-m)/1e3);m=d,s==="vertical"?(i+=u*v*h,i>=1&&(i=1,u=-1),i<=0&&(i=0,u=1)):s==="horizontal"&&(l+=f*v*h,l>=1&&(l=1,f=-1),l<=0&&(l=0,f=1)),W(),g=requestAnimationFrame(Y)}function X(){const d=(i-.5)*2.05,h=(l-.5)*2.05,L=ra(h,d);if(c.push({nx:h,ny:d}),r+=L.points,a-=1,C.textContent=`점수: ${r}`,N.textContent=`남은 횟수: ${a}`,De(k,o.width,c),y.textContent=L.label,a<=0){s="done",p.classList.add("hidden"),M.classList.remove("hidden"),y.textContent=`게임 종료! 최종 ${r}점`;return}s="vertical",i=Math.random(),l=Math.random(),y.textContent="세로 바를 가운데에 맞춰 멈추세요!"}function w(d){var h;if((h=d==null?void 0:d.preventDefault)==null||h.call(d),s==="vertical"){s="horizontal",y.textContent="가로 바를 가운데에 맞춰 멈추세요!";return}s==="horizontal"&&(s="result",X())}function E(d){(d.code==="Space"||d.key===" ")&&(d.preventDefault(),w(d))}function S(){r=0,a=Se,s="vertical",c.length=0,i=.2,l=.2,C.textContent="점수: 0",N.textContent=`남은 횟수: ${Se}`,y.textContent="세로 바를 가운데에 맞춰 멈추세요!",p.classList.remove("hidden"),M.classList.add("hidden"),De(k,o.width,c)}return j(),W(),g=requestAnimationFrame(Y),p.addEventListener("click",w),p.addEventListener("touchstart",w,{passive:!1}),M.addEventListener("click",S),window.addEventListener("keydown",E),window.addEventListener("resize",j),aa(e,t,n),()=>{cancelAnimationFrame(g),window.removeEventListener("keydown",E),window.removeEventListener("resize",j)}}const re=12;function ia(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function oa(e,t,n){var r,a;(r=e.querySelector('[data-nav="back"]'))==null||r.addEventListener("click",t),(a=e.querySelector('[data-nav="main"]'))==null||a.addEventListener("click",n)}function la(e,{onBack:t,onMain:n}){let r=0,a=0,s=!1,i=!0,l=.08,u=.55,f=0,g=0,m=0,c=!1;e.innerHTML=`
    <div class="game-panel">
      <h2 class="game-title">크리켓 게임</h2>
      <p class="game-desc">공이 타격존(노란 선)에 올 때 탭/스페이스로 스윙!</p>
      <div class="cricket-stats">
        <span id="cricket-runs">득점: 0</span>
        <span id="cricket-balls">볼: 0 / ${re}</span>
      </div>
      <canvas id="cricket-canvas" class="game-canvas cricket-canvas" width="320" height="420"></canvas>
      <button type="button" class="btn-go" id="cricket-swing">SWING!</button>
      <button type="button" class="btn-secondary hidden" id="cricket-retry">다시하기</button>
      <p class="game-feedback" id="cricket-feedback">공이 다가옵니다…</p>
      ${ia()}
    </div>
  `;const v=e.querySelector("#cricket-canvas"),o=v.getContext("2d"),k=e.querySelector("#cricket-runs"),C=e.querySelector("#cricket-balls"),N=e.querySelector("#cricket-feedback"),y=e.querySelector("#cricket-swing"),p=e.querySelector("#cricket-retry"),M=.72,T=.09;function B(){const w=Math.min(320,Math.max(260,e.clientWidth-16||300));v.width=w,v.height=Math.round(w*1.3)}function H(){const w=v.width,E=v.height;o.clearRect(0,0,w,E),o.fillStyle="#6ec8ff",o.fillRect(0,0,w,E*.22),o.fillStyle="#3d8c3a",o.fillRect(0,E*.18,w,E*.12);for(let x=0;x<18;x++)o.fillStyle=`hsl(${x*47%360} 70% 45%)`,o.beginPath(),o.arc(10+x*(w/17),E*.22,6,0,Math.PI*2),o.fill();o.fillStyle="#4caf50",o.fillRect(0,E*.28,w,E*.72);const S=w*.28,d=(w-S)/2,h=E*.3,L=E*.58;o.fillStyle="#c4a574",o.beginPath(),o.moveTo(d+S*.15,h),o.lineTo(d+S*.85,h),o.lineTo(d+S,h+L),o.lineTo(d,h+L),o.closePath(),o.fill();const A=h+L*M;if(o.strokeStyle="#fff41a",o.lineWidth=3,o.setLineDash([6,4]),o.beginPath(),o.moveTo(d-8,A),o.lineTo(d+S+8,A),o.stroke(),o.setLineDash([]),o.fillStyle="#8d6e63",o.beginPath(),o.ellipse(w/2,h+18,10,14,0,0,Math.PI*2),o.fill(),o.fillStyle="#66bb6a",o.beginPath(),o.ellipse(w/2,h+L-10,16,22,0,0,Math.PI*2),o.fill(),o.save(),o.translate(w/2+14,h+L-18),o.rotate(f>0?-.9:-.2),o.fillStyle="#f5f5f5",o.fillRect(-4,-28,8,36),o.restore(),!i&&!c){const x=h+L*l,P=w/2+Math.sin(l*6)*4,Te=7+l*4;o.beginPath(),o.arc(P,x,Te,0,Math.PI*2),o.fillStyle="#ef5350",o.fill(),o.strokeStyle="#fff",o.lineWidth=1.5,o.stroke()}f>0&&(o.fillStyle="rgba(255,244,26,0.15)",o.fillRect(0,A-20,w,40))}function F(){if(a>=re){c=!0,y.disabled=!0,y.classList.add("hidden"),p.classList.remove("hidden"),N.textContent=`경기 종료! 총 ${r}점`;return}i=!1,s=!1,l=.05,u=.48+Math.random()*.35,N.textContent="타이밍에 맞춰 스윙!"}function j(w){var h;if((h=w==null?void 0:w.preventDefault)==null||h.call(w),c||s||i)return;s=!0,f=.25,a+=1,C.textContent=`볼: ${a} / ${re}`;const E=Math.abs(l-M);let S=0,d="헛스윙!";E<=T*.25?(S=6,d="식스! +6"):E<=T*.5?(S=4,d="포! +4"):E<=T*.75?(S=2,d="투런! +2"):E<=T&&(S=1,d="싱글! +1"),r+=S,k.textContent=`득점: ${r}`,N.textContent=d,i=!0,setTimeout(()=>{c||F(),a>=re&&(c=!0,y.disabled=!0,y.classList.add("hidden"),p.classList.remove("hidden"),N.textContent=`경기 종료! 총 ${r}점`)},650)}function W(w){m||(m=w);const E=Math.min(.05,(w-m)/1e3);m=w,!i&&!c&&(l+=u*E,l>1.05&&(i=!0,s=!0,a+=1,C.textContent=`볼: ${a} / ${re}`,N.textContent="놓침!",setTimeout(()=>{s=!1,a>=re?(c=!0,y.disabled=!0,y.classList.add("hidden"),p.classList.remove("hidden"),N.textContent=`경기 종료! 총 ${r}점`):F()},500))),f>0&&(f-=E),H(),g=requestAnimationFrame(W)}function Y(){r=0,a=0,c=!1,s=!1,f=0,k.textContent="득점: 0",C.textContent=`볼: 0 / ${re}`,y.disabled=!1,y.classList.remove("hidden"),p.classList.add("hidden"),F()}function X(w){(w.code==="Space"||w.key===" ")&&(w.preventDefault(),j(w))}return B(),F(),g=requestAnimationFrame(W),y.addEventListener("click",j),y.addEventListener("touchstart",j,{passive:!1}),v.addEventListener("pointerdown",j),p.addEventListener("click",Y),window.addEventListener("keydown",X),window.addEventListener("resize",B),oa(e,t,n),()=>{cancelAnimationFrame(g),window.removeEventListener("keydown",X),window.removeEventListener("resize",B)}}function ca(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function da(e,t,n){var r,a;(r=e.querySelector('[data-nav="back"]'))==null||r.addEventListener("click",t),(a=e.querySelector('[data-nav="main"]'))==null||a.addEventListener("click",n)}const ua=["#42a5f5","#ef5350","#ffee58","#66bb6a"],fa=4,_e=7;function ma(e,{onBack:t,onMain:n}){let r=0,a=3,s=!1,i=0,l=0;const u={left:!1,right:!1};let f=320,g=420,m={x:0,y:0,w:70,h:12},c={x:0,y:0,r:6,vx:0,vy:0},v=[];e.innerHTML=`
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
      ${ca()}
    </div>
  `;const o=e.querySelector("#bo-canvas"),k=o.getContext("2d"),C=e.querySelector("#bo-lives"),N=e.querySelector("#bo-score"),y=e.querySelector("#bo-feedback"),p=e.querySelector("#bo-start");function M(){f=Math.min(320,Math.max(260,e.clientWidth-16||300)),g=Math.round(f*1.3),o.width=f,o.height=g,m.y=g-36,m.w=f*.22}function T(){v=[];const d=4,h=56,L=(f-d*(_e+1))/_e,A=16;for(let x=0;x<fa;x++)for(let P=0;P<_e;P++)v.push({x:d+P*(L+d),y:h+x*(A+d),w:L,h:A,color:ua[x],alive:!0})}function B(){m.x=(f-m.w)/2,c.x=f/2,c.y=m.y-20;const d=-Math.PI/3+Math.random()*(Math.PI/3),h=Math.min(f,g)*1.05;c.vx=Math.sin(d)*h,c.vy=-Math.abs(Math.cos(d)*h)}function H(){C.textContent=`생명: ${"●".repeat(a)}${"○".repeat(3-a)}`,N.textContent=`점수: ${String(r).padStart(5,"0")}`}function F(){k.fillStyle="#1a1030",k.fillRect(0,0,f,g);for(const d of v)d.alive&&(k.fillStyle=d.color,j(k,d.x,d.y,d.w,d.h,4),k.fill());k.fillStyle="#fff",j(k,m.x,m.y,m.w,m.h,6),k.fill(),k.beginPath(),k.arc(c.x,c.y,c.r,0,Math.PI*2),k.fillStyle="#fff",k.fill()}function j(d,h,L,A,x,P){d.beginPath(),d.moveTo(h+P,L),d.arcTo(h+A,L,h+A,L+x,P),d.arcTo(h+A,L+x,h,L+x,P),d.arcTo(h,L+x,h,L,P),d.arcTo(h,L,h+A,L,P),d.closePath()}function W(d){l||(l=d);const h=Math.min(.033,(d-l)/1e3);if(l=d,s){const L=f*1.6*h;if(u.left&&(m.x-=L),u.right&&(m.x+=L),m.x=Math.max(0,Math.min(f-m.w,m.x)),c.x+=c.vx*h,c.y+=c.vy*h,c.x<c.r&&(c.x=c.r,c.vx*=-1),c.x>f-c.r&&(c.x=f-c.r,c.vx*=-1),c.y<c.r&&(c.y=c.r,c.vy*=-1),c.vy>0&&c.y+c.r>=m.y&&c.y-c.r<=m.y+m.h&&c.x>=m.x&&c.x<=m.x+m.w){c.y=m.y-c.r;const A=(c.x-(m.x+m.w/2))/(m.w/2),x=Math.hypot(c.vx,c.vy)*1.015,P=A*1.1;c.vx=Math.sin(P)*x,c.vy=-Math.abs(Math.cos(P)*x)}for(const A of v)if(A.alive&&c.x+c.r>A.x&&c.x-c.r<A.x+A.w&&c.y+c.r>A.y&&c.y-c.r<A.y+A.h){A.alive=!1,r+=10,H();const x=c.x+c.r-A.x,P=A.x+A.w-(c.x-c.r),Te=c.y+c.r-A.y,Vt=A.y+A.h-(c.y-c.r),zt=Math.min(x,P),Jt=Math.min(Te,Vt);zt<Jt?c.vx*=-1:c.vy*=-1;break}v.every(A=>!A.alive)&&(s=!1,y.textContent=`클리어! 점수 ${r}`),c.y>g+20&&(a-=1,H(),a<=0?(s=!1,y.textContent=`게임 오버 · ${r}점`):(B(),y.textContent="생명 -1! 계속…"))}F(),i=requestAnimationFrame(W)}function Y(){r=0,a=3,s=!0,T(),B(),H(),y.textContent="화이팅!"}function X(d){const h=o.getBoundingClientRect(),L=(d-h.left)/h.width*f;m.x=Math.max(0,Math.min(f-m.w,L-m.w/2))}function w(d){var L;d.preventDefault();const h=((L=d.touches)==null?void 0:L[0])||d;X(h.clientX)}function E(d){(d.key==="ArrowLeft"||d.key==="a"||d.key==="A")&&(u.left=!0),(d.key==="ArrowRight"||d.key==="d"||d.key==="D")&&(u.right=!0)}function S(d){(d.key==="ArrowLeft"||d.key==="a"||d.key==="A")&&(u.left=!1),(d.key==="ArrowRight"||d.key==="d"||d.key==="D")&&(u.right=!1)}return M(),T(),B(),H(),F(),i=requestAnimationFrame(W),p.addEventListener("click",Y),o.addEventListener("pointerdown",w),o.addEventListener("pointermove",d=>{(d.buttons||d.pressure>0)&&w(d)}),o.addEventListener("touchstart",w,{passive:!1}),o.addEventListener("touchmove",w,{passive:!1}),window.addEventListener("keydown",E),window.addEventListener("keyup",S),window.addEventListener("resize",M),da(e,t,n),()=>{cancelAnimationFrame(i),window.removeEventListener("keydown",E),window.removeEventListener("keyup",S),window.removeEventListener("resize",M)}}const b=document.getElementById("app");let G=null,se=null,Q=null,le=null,mt=!1;const bt=new Set(["rest","game-dart","game-cricket","game-breakout","admin","admin-users","admin-logs","admin-user-logs"]),ba={login:ha,main:wa,help:ka,profile:ya,grade:Ca,subject:qa,calculator:Pa,rest:Ta,admin:va,"admin-users":Sa,"admin-logs":$a,"admin-user-logs":La,"game-dart":()=>Ue("dart"),"game-cricket":()=>Ue("cricket"),"game-breakout":()=>Ue("breakout")};ga();function ga(){Cn().then(()=>Qe()).finally(()=>{$(At()?"main":"login")})}function $(e,t={}){le&&(le(),le=null),mt&&!bt.has(e)&&Rn(),e!=="login"&&!At()&&(e="login",t={});const n=ba[e];n&&(b.innerHTML="",n(t),mt=bt.has(e),window.scrollTo(0,0))}function V(e){e.querySelectorAll("[data-action]").forEach(t=>{t.addEventListener("click",()=>pa(t.dataset.action))})}function pa(e){if(e==="main"){G=null,se=null,Q=null,$("main");return}if(e==="grade"){se=null,Q=null,$("grade");return}if(e==="help"&&$("help"),e==="profile"&&$("profile"),e==="logout"){if(!He(ce()))return;Ln().finally(()=>$("login"));return}if(e==="rest"&&$("rest"),e==="admin"){O()&&$("admin");return}if(e==="admin-users"){O()&&$("admin-users");return}if(e==="admin-logs"){O()&&$("admin-logs");return}if(e==="subject"&&$("subject",{grade:G}),e==="game-dart"&&$("game-dart"),e==="game-cricket"&&$("game-cricket"),e==="game-breakout"&&$("game-breakout"),e.startsWith("pick-grade-")){G=Number(e.replace("pick-grade-","")),se=null,Q=null,$("subject",{grade:G});return}if(e.startsWith("pick-subject-")){const t=decodeURIComponent(e.replace("pick-subject-",""));se=t;const n=Dt(G,t);Q=(n.length===1,n[0]),$("calculator",{grade:G,subject:t,semester:Q});return}e.startsWith("pick-semester-")&&(Q=Number(e.replace("pick-semester-","")),$("calculator",{grade:G,subject:se,semester:Q}))}function ha(){let e="login";const t=()=>{var N,y;const n=e==="register";b.innerHTML=R(`
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
        ${Z(z.footer)}
      </div>
    `);const r=b.querySelector("#login-error"),a=b.querySelector("#login-ok"),s=b.querySelector("#verify-actions"),i=b.querySelector("#login-email"),l=b.querySelector("#login-name"),u=b.querySelector("#login-password"),f=b.querySelector("#login-password2"),g=b.querySelector("#login-submit"),m=p=>{a.classList.add("hidden"),r.textContent=p,r.classList.remove("hidden")},c=p=>{r.classList.add("hidden"),a.textContent=p,a.classList.remove("hidden")},v=(p,M)=>{g.disabled=p,p?(g.dataset.label=g.textContent,g.textContent=n?"가입 중…":"로그인 중…"):g.dataset.label&&(g.textContent=g.dataset.label)};b.querySelectorAll("[data-mode]").forEach(p=>{p.addEventListener("click",()=>{e=p.dataset.mode,t()})});const o=p=>{const M=Ve(p);K({type:"user_login",message:`로그인: ${M}`,account:p.account,displayName:p.displayName||"",studentId:p.studentId||""}),O()&&K({type:"admin_login",message:"관리자 계정 로그인 — 관리자 모드 자동 활성화",account:p.account}),$("main"),Qe(),tt()},k=p=>{c(p.error),s.classList.remove("hidden")},C=async()=>{r.classList.add("hidden"),a.classList.add("hidden"),s.classList.add("hidden"),v(!0);try{if(e==="register"){if(u.value!==((f==null?void 0:f.value)||"")){m("비밀번호 확인이 일치하지 않습니다.");return}const M=await Nn(i.value,u.value,(l==null?void 0:l.value)||"");if(M.needVerify){k(M);return}if(!M.ok){m(M.error);return}o(M.user);return}const p=await En(i.value,u.value);if(p.needVerify){k(p);return}if(!p.ok){m(p.error);return}o(p.user)}finally{v(!1)}};g.addEventListener("click",C),[i,l,u,f].filter(Boolean).forEach(p=>{p.addEventListener("keydown",M=>{M.key==="Enter"&&C()})}),(N=b.querySelector("#verify-refresh"))==null||N.addEventListener("click",async()=>{v(!0);const p=await In();if(v(!1),p.needVerify){k(p);return}if(!p.ok){m(p.error);return}o(p.user)}),(y=b.querySelector("#verify-resend"))==null||y.addEventListener("click",async()=>{const p=await xn();if(!p.ok){m(p.error);return}c(p.message),s.classList.remove("hidden")})};t()}function wa(){const e=Fn(),t=Ve()||ce()||"",n=He(ce());b.innerHTML=R(`
    <div class="main-screen">
      <button type="button" class="help-btn" data-action="help" aria-label="앱 정보">?</button>
      <div class="main-header">
        <div class="title-block">
          ${ea()}
          <h1 class="app-title">${z.title}</h1>
        </div>
        <p class="app-subtitle">${z.subtitle}</p>
        <p class="main-quote">"${e}"</p>
      </div>
      <div class="main-body">
        <p class="login-user muted">${I(t)}</p>
        <button type="button" class="link-btn" data-action="profile">내 정보 수정</button>
        ${n?'<button type="button" class="link-btn" data-action="logout">로그아웃</button>':""}
        <button type="button" class="go-btn" data-action="grade" aria-label="시작">
          ${ta()}
          <span class="go-text">GO</span>
        </button>
      </div>
      <p class="main-footer">${z.footer}</p>
    </div>
  `),V(b)}function ya(){const e=U(),t=He(e==null?void 0:e.account);b.innerHTML=R(`
    <div class="stack-screen">
      ${ie()}
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
      ${ee()}
    </div>
  `);const n=b.querySelector("#profile-error"),r=b.querySelector("#profile-ok"),a=b.querySelector("#profile-name"),s=b.querySelector("#profile-sid"),i=b.querySelector("#profile-save");i.addEventListener("click",async()=>{n.classList.add("hidden"),r.classList.add("hidden"),i.disabled=!0;const l=await Mn({displayName:a.value,studentId:s.value});if(i.disabled=!1,!l.ok){n.textContent=l.error,n.classList.remove("hidden");return}r.textContent="저장되었습니다.",r.classList.remove("hidden"),K({type:"profile_update",message:`정보 수정: ${Ve(l.user)}`,displayName:l.user.displayName,studentId:l.user.studentId})}),V(b)}function ka(){const e=ae(),t=U(),n=!!(t!=null&&t.account)&&!O();b.innerHTML=R(`
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
        <p class="muted">제작: ${z.creator}</p>
        ${O()?'<p class="success"><button type="button" class="link-btn" data-action="admin">관리자 패널 열기</button></p>':""}
      </div>
      ${n?`<div class="info-card">
        <h3>계정 탈퇴</h3>
        <p class="muted">탈퇴하면 이 기기 기록이 지워지고, 같은 학교 계정으로 다시 회원가입할 수 있습니다.</p>
        <label class="field">
          <span>비밀번호 확인</span>
          <input type="password" id="withdraw-password" placeholder="현재 비밀번호" autocomplete="current-password" />
        </label>
        <button type="button" class="btn-secondary" id="btn-withdraw">계정 탈퇴</button>
        <p class="warn hidden" id="withdraw-error"></p>
      </div>`:""}
      ${ee()}
      <p class="muted login-hint" style="text-align:center;margin-top:auto;padding:12px 8px 4px">${z.subtitle}</p>
    </div>
  `),V(b);const r=b.querySelector("#btn-withdraw");r&&r.addEventListener("click",async()=>{var u;const a=b.querySelector("#withdraw-error"),s=((u=b.querySelector("#withdraw-password"))==null?void 0:u.value)||"",i=f=>{a&&(a.textContent=f,a.classList.remove("hidden"))};if(!window.confirm(`정말 탈퇴할까요?
탈퇴 후 같은 계정으로 다시 회원가입할 수 있습니다.`)||!window.confirm("마지막 확인: 계정 탈퇴를 진행합니다."))return;r.disabled=!0;const l=await An(s);if(!l.ok){i(l.error||"탈퇴 실패"),r.disabled=!1;return}Bn(),window.alert("탈퇴되었습니다. 다시 회원가입해 주세요."),$("login")})}function va(){var i,l;if(!O()){$("help");return}const e=J(),t=qt(),n=e.standardScale,r=e.artsScale,a=t.configured?`Firebase 연결됨 (${t.projectId})`:"Firebase 미설정 — src/firebase-config.js 에 키를 넣어주세요",s=t.isCloudAdmin?"클라우드 관리자 로그인됨 — 전체 기록 조회·설정 저장 가능":"클라우드 전체 기록/설정 수정은 관리자 로그인 후에만 가능합니다.";b.innerHTML=R(`
    <div class="stack-screen admin-screen">
      <h2 class="screen-title">관리자 모드</h2>
      <p class="screen-desc">기기 ID: ${Ie()}</p>
      <p class="muted admin-note">${a}</p>
      <p class="muted admin-note">${s}</p>

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
          ${n.map((u,f)=>`
            <label>${u.letter}
              <input type="number" data-scale="std" data-i="${f}" data-letter="${u.letter}" min="0" max="100" value="${u.min}" />
            </label>
          `).join("")}
        </div>
        <h4>예체능 등급 기준 (점 이상)</h4>
        <div class="admin-scale" id="adm-arts">
          ${r.map((u,f)=>`
            <label>${u.letter}
              <input type="number" data-scale="arts" data-i="${f}" data-letter="${u.letter}" min="0" max="100" value="${u.min}" />
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
        ${ee()}
      </div>
      ${Z("ADMIN")}
    </div>
  `),V(b),(i=b.querySelector("#adm-save"))==null||i.addEventListener("click",async()=>{var c,v;const u=Number((c=b.querySelector("#adm-unlock"))==null?void 0:c.value),f=!!((v=b.querySelector("#adm-free-games"))!=null&&v.checked),g=[...b.querySelectorAll('[data-scale="std"]')].map(o=>({letter:o.dataset.letter,min:Number(o.value)||0})),m=[...b.querySelectorAll('[data-scale="arts"]')].map(o=>({letter:o.dataset.letter,min:Number(o.value)||0}));Et({restUnlockUses:Number.isFinite(u)&&u>0?u:8,freeGames:f,standardScale:g,artsScale:m}),window.alert(q()?"설정을 저장했고 클라우드에도 올렸습니다.":"설정을 이 기기에 저장했습니다. (Firebase 미설정)"),$("admin")}),(l=b.querySelector("#adm-feedback-save"))==null||l.addEventListener("click",()=>{var f,g;const u=(g=(f=b.querySelector("#adm-feedback"))==null?void 0:f.value)==null?void 0:g.trim();if(!u){window.alert("내용을 입력하세요.");return}K({type:"game_feedback",message:u}),window.alert("피드백을 저장했습니다."),$("admin")})}function Sa(){var n;if(!O()){$("help");return}b.innerHTML=R(`
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
        ${ee()}
      </div>
      ${Z("ADMIN")}
    </div>
  `),V(b);async function e(){const r=b.querySelector("#adm-blocked");if(!r)return;r.innerHTML='<p class="muted">불러오는 중…</p>';const a=await Re();if(a.error&&a.accounts.length===0){r.innerHTML=`<p class="warn">${I(a.error)}</p>`;return}if(a.accounts.length===0){r.innerHTML='<p class="muted">차단된 계정이 없습니다.</p>';return}r.innerHTML=a.accounts.map(s=>`
      <article class="admin-user-item admin-blocked-item">
        <span class="admin-blocked-email">${I(s.account)}</span>
        <button type="button" class="btn-secondary adm-unblock"
          data-account="${I(s.account)}">차단 해제</button>
      </article>`).join(""),r.querySelectorAll(".adm-unblock").forEach(s=>{s.addEventListener("click",async()=>{const i=s.dataset.account||"";if(!window.confirm(`${i}
차단을 해제할까요? 다시 가입·로그인할 수 있습니다.`))return;s.disabled=!0;const l=await Be(i);if(!l.ok){window.alert(l.error||"차단 해제 실패"),s.disabled=!1;return}window.alert("차단 해제되었습니다."),e()})})}async function t(){const r=b.querySelector("#adm-users");r&&(r.innerHTML='<p class="muted">불러오는 중…</p>');const a=await Mt();if(r){if(a.error&&a.users.length===0){r.innerHTML=`<p class="warn">${I(a.error)}</p>`;return}if(a.users.length===0)r.innerHTML='<p class="muted">아직 가입한 학생이 없습니다.</p>';else{const s=ae();r.innerHTML=`
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
    `,r.querySelectorAll(".adm-user-logs").forEach(i=>{i.addEventListener("click",()=>{$("admin-user-logs",{account:i.dataset.account||"",displayName:i.dataset.name||"",year:i.dataset.year||"",studentId:i.dataset.sid||""})})}),r.querySelectorAll(".adm-del-user").forEach(i=>{i.addEventListener("click",async()=>{const l=i.dataset.name||"",u=i.dataset.account||"";if(!window.confirm(`${l||u} 계정을 삭제할까요?`))return;const f=window.confirm(`영구차단도 같이 할까요?

확인 = 삭제 + 차단 (재가입·로그인 불가)
취소 = 삭제만 (차단 안 함)`);i.disabled=!0;const g=await It({uid:i.dataset.uid,account:u,displayName:l,block:f});if(!g.ok){window.alert(g.error||"삭제 실패"),i.disabled=!1;return}window.alert(f?"삭제 + 차단 완료":"삭제만 완료 (차단 안 함)"),t(),e()})})}await e()}}(async()=>{const r="schoolMetricsUnblock_20251413_haeyeon_v2";if(localStorage.getItem(r)){t();return}const a=["20251413@haeyeon.ms.kr"],s=await Re(),i=new Set((s.accounts||[]).map(u=>u.account));let l=!1;for(const u of a){if(!i.has(u))continue;(await Be(u)).ok&&(l=!0)}localStorage.setItem(r,"1"),l&&window.alert("20251413@haeyeon.ms.kr 차단을 해제했습니다."),t()})(),(n=b.querySelector("#adm-refresh-users"))==null||n.addEventListener("click",()=>t())}function $a(){var n,r,a;if(!O()){$("help");return}b.innerHTML=R(`
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
        ${ee()}
      </div>
      ${Z("ADMIN")}
    </div>
  `),V(b);let e=xe();async function t(){const s=b.querySelector("#adm-logs"),i=b.querySelector("#adm-log-count");s&&(s.innerHTML='<p class="muted">불러오는 중…</p>');const l=await Ze();e=l.logs,i&&(i.textContent=`${e.length}건 · ${l.source}${l.error?" · 오류":""}`),s&&(s.innerHTML=Gt(e.slice(0,120),{showWho:!0}))}t(),(n=b.querySelector("#adm-refresh-logs"))==null||n.addEventListener("click",()=>t()),(r=b.querySelector("#adm-export"))==null||r.addEventListener("click",async()=>{const s=Ct(e);try{await navigator.clipboard.writeText(s),window.alert("기록이 클립보드에 복사되었습니다.")}catch{window.prompt("아래 내용을 복사하세요",s)}}),(a=b.querySelector("#adm-clear-logs"))==null||a.addEventListener("click",async()=>{window.confirm("로컬+클라우드 활동 기록을 비울까요?")&&(await xt({cloud:!0}),$("admin-logs"))})}function La({account:e,displayName:t,year:n,studentId:r}={}){var i;if(!O()){$("help");return}if(!e){$("admin-users");return}const a=[t,n,r].filter(Boolean).join(" · ")||e;b.innerHTML=R(`
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
      ${Z("ADMIN")}
    </div>
  `),V(b);async function s(){const l=b.querySelector("#adm-user-logs"),u=b.querySelector("#adm-user-log-count");l&&(l.innerHTML='<p class="muted">불러오는 중…</p>');const f=await Ze(),g=Aa(f.logs,e);u&&(u.textContent=`${g.length}건 · ${f.source}${f.error?" · 오류":""}`),l&&(l.innerHTML=Gt(g.slice(0,200),{showWho:!1}))}s(),(i=b.querySelector("#adm-refresh-user-logs"))==null||i.addEventListener("click",()=>s())}function Aa(e,t){const n=String(t||"").trim().toLowerCase();return n?(e||[]).filter(r=>String(r.account||"").trim().toLowerCase()===n):[]}function Gt(e,{showWho:t=!0}={}){return e.length?e.map(n=>{const a=[n.year,n.studentId,n.displayName].filter(l=>l&&l!=="admin").join(" · ")||n.account||n.deviceId||"",s=xa(n);return`
      <article class="admin-log-item">
        <header>${t?`${I(a)} · ${I(gt(n.type))} · ${pt(n.at)}`:`${I(gt(n.type))} · ${pt(n.at)}`}</header>
        <p>${I(n.message||"")}</p>
        ${s?`<pre>${I(s)}</pre>`:""}
      </article>`}).join(""):'<p class="muted">아직 기록이 없습니다.</p>'}function gt(e){return{calc:"성적 계산",user_login:"로그인",user_withdraw:"계정 탈퇴",admin_login:"관리자 로그인",admin_settings:"설정 변경",admin_clear_logs:"기록 초기화",admin_delete_user:"계정 삭제",admin_unblock_user:"차단 해제",game_open:"미니게임",game_feedback:"게임 피드백",profile_update:"정보 수정"}[e]||e||"기록"}function Kt(e,t){var a,s;const n=String(e||""),r=n.match(/^(\d+)-(.+)-(\d+)-(\d+)$/);if(r){const i=Number(r[1]),l=r[2],u=Number(r[3]),f=Number(r[4]),g=(a=Fe(i,l,u)[f])==null?void 0:a.label;if(g)return g}if(t!=null&&t.grade&&(t!=null&&t.subject)&&(t==null?void 0:t.semester)!=null){const i=n.match(/(\d+)$/);if(i){const l=(s=Fe(Number(t.grade),t.subject,Number(t.semester))[Number(i[1])])==null?void 0:s.label;if(l)return l}}return n}function Na(e){if(!(e!=null&&e.grade)||!(e!=null&&e.subject)||(e==null?void 0:e.semester)==null)return null;const t=at(Number(e.grade),e.subject,Number(e.semester));if(!t.length)return null;const n={};for(const r of t)n[r.key]="";if(Array.isArray(e.scoreLines))for(const r of e.scoreLines){if(r.key&&r.key in n){n[r.key]=r.score;continue}const a=t.find(s=>s.label===r.label);a&&(n[a.key]=r.score)}else if(e.scores&&typeof e.scores=="object")for(const[r,a]of Object.entries(e.scores))r in n&&(n[r]=a);else return null;return{items:t,scores:n}}function Ea(e){let t=e==null?void 0:e.needed;if((t==null?void 0:t.needed)==null||!(t!=null&&t.targetLetter)){const n=Na(e);if(n){const r=rt(n.items,n.scores);t=Ot(n.items,n.scores,r,e.subject)}}return(t==null?void 0:t.needed)!=null&&(t!=null&&t.targetLetter)?`한 단계 상위 ${te(t.targetLetter)} → 남은 항목 평균 ${t.needed}점 이상`:(t==null?void 0:t.message)==="이미 최고 등급입니다."?"한 단계 상위 등급 없음 (이미 최고 등급)":(t==null?void 0:t.message)==="모든 항목이 입력되었습니다."?"남은 항목 없음 (전부 입력됨)":e!=null&&e.neededLine?e.neededLine:""}function Ma(e,t){const n=e.label||Kt(e.key,t);return e.missing||e.score===null||e.score===void 0||e.score===""?`${n}: 미입력`:`${n}: ${e.score}점`}function Ia(e){if((e==null?void 0:e.grade)!=null&&(e!=null&&e.subject)&&(e==null?void 0:e.semester)!=null){const t=at(Number(e.grade),e.subject,Number(e.semester));if(t.length){const n=new Map,r=new Map;if(Array.isArray(e.scoreLines))for(const a of e.scoreLines)a.key&&n.set(a.key,a),a.label&&r.set(a.label,a);if(e.scores&&typeof e.scores=="object")for(const[a,s]of Object.entries(e.scores))n.set(a,{key:a,score:s,missing:s===""||s==null});return t.map(a=>{const s=n.get(a.key)||r.get(a.label);if(!s||s.missing||s.score===""||s.score==null)return{key:a.key,label:a.label,weight:a.weight,score:null,missing:!0};const i=Number(s.score);return Number.isFinite(i)?{key:a.key,label:a.label,weight:a.weight,score:i,missing:!1}:{key:a.key,label:a.label,weight:a.weight,score:null,missing:!0}})}}return Array.isArray(e==null?void 0:e.scoreLines)&&e.scoreLines.length?e.scoreLines:e!=null&&e.scores&&typeof e.scores=="object"?Object.entries(e.scores).map(([t,n])=>({key:t,label:Kt(t,e),score:n===""||n==null?null:Number(n),missing:n===""||n==null||!Number.isFinite(Number(n))})):[]}function xa(e){const t=e==null?void 0:e.detail;if(!t)return"";if(typeof t=="string")return t;const n=[],r=Ia(t);for(const s of r)n.push(Ma(s,t));t.rounded!=null&&n.push(`합계(반올림): ${t.rounded}점`),t.letter&&n.push(`현재 등급: ${te(t.letter)}`);const a=Ea(t);return a&&n.push(a),n.join(`
`)}function I(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function pt(e){try{const t=new Date(e);return`${t.getMonth()+1}/${t.getDate()} ${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`}catch{return e}}function Ca(){const e=we(),t=jt();b.innerHTML=R(`
    <div class="stack-screen grade-screen">
      ${ie()}
      <h2 class="screen-title">자신의 학년을 선택하세요</h2>
      <div class="grade-list">
        <button type="button" class="grade-btn grade-1" data-action="pick-grade-1">1학년</button>
        <button type="button" class="grade-btn grade-2" data-action="pick-grade-2">2학년</button>
        <button type="button" class="grade-btn grade-3" data-action="pick-grade-3">3학년</button>
      </div>
      ${e?'<button type="button" class="rest-btn" data-action="rest">휴식 · 미니게임</button>':`<p class="unlock-hint">${t}</p>`}
      ${ee()}
      ${Z(z.subtitle)}
    </div>
  `),V(b)}function qa({grade:e}){if(!e||!ge(e)){$("grade");return}G=e;const t=ge(e),n=Hn(e);b.innerHTML=R(`
    <div class="stack-screen ${Ht(e)}">
      ${ie()}
      <h2 class="screen-title">${t.label} 과목 선택</h2>
      ${t.note?`<p class="screen-note">${t.note}</p>`:""}
      ${Bt()}
      <div class="subject-list">
        ${n.map(r=>`<button type="button" class="subject-btn" data-action="pick-subject-${encodeURIComponent(r)}">${r}</button>`).join("")}
      </div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="grade">학년 선택으로</button>
        ${ee()}
      </div>
      ${Z(z.subtitle)}
    </div>
  `),V(b),Ft(b)}function Pa({grade:e,subject:t,semester:n}){if(!e||!t||!n){$("subject",{grade:G});return}G=e,se=t,Q=n;const r=ge(e),a=Dt(e,t),s=at(e,t,n),i=ut(e,t,n),l={},u=a.length>1?`<div class="semester-tabs">
          ${a.map(c=>`<button type="button" class="semester-tab ${c===n?"active":""}" data-action="pick-semester-${c}">${ut(e,t,c)}</button>`).join("")}
        </div>`:`<p class="semester-only">${i}</p>`;b.innerHTML=R(`
    <div class="stack-screen calculator-screen ${Ht(e)}">
      ${ie("globe globe-small")}
      <h2 class="screen-title subject-title">${t}</h2>
      <p class="screen-desc">${r.label} · ${i}${st(t)?" · 예체능(A·B·C)":" · 일반(A~E)"}</p>
      ${Bt(t)}
      ${u}
      <form id="calc-form" class="calc-form"></form>
      <button type="submit" form="calc-form" class="btn-calc">계산하기</button>
      <div id="calc-result" class="calc-result hidden"></div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="subject">과목 선택으로</button>
        ${ee()}
      </div>
      ${Z(z.subtitle)}
    </div>
  `);const f=b.querySelector("#calc-form");let g="";for(const c of s){if(c.kind!==g){g=c.kind;const o=document.createElement("h3");o.className="section-heading",o.textContent=c.kind==="exam"?"지필고사":"수행평가",f.appendChild(o)}const v=document.createElement("label");v.className="score-row",v.innerHTML=`
      <span>${c.label} <em>${c.weight}%</em></span>
      <input type="number" min="0" max="100" step="0.1" inputmode="decimal"
        name="${c.key}" placeholder="점수" />
    `,f.appendChild(v)}const m=b.querySelector("#calc-result");f.addEventListener("submit",c=>{var B,H,F,j,W,Y,X,w,E;c.preventDefault();const v=new FormData(f);for(const S of s)l[S.key]=v.get(S.key);const o=Zn(s,l,t);if(!o){m.classList.remove("hidden"),m.innerHTML='<p class="warn">최소 1개 이상 점수를 입력하세요.</p>';return}const k=_n(t),C=s.map(S=>{const d=l[S.key];if(d===""||d===null||d===void 0)return{key:S.key,label:S.label,weight:S.weight,score:null,missing:!0};const h=Number(d);return Number.isFinite(h)?{key:S.key,label:S.label,weight:S.weight,score:h,missing:!1}:{key:S.key,label:S.label,weight:S.weight,score:null,missing:!0}});let N="";((B=o.needed)==null?void 0:B.needed)!=null&&((H=o.needed)!=null&&H.targetLetter)?N=`한 단계 상위 ${te(o.needed.targetLetter)} → 남은 항목 평균 ${o.needed.needed}점 이상`:((F=o.needed)==null?void 0:F.message)==="이미 최고 등급입니다."?N="한 단계 상위 등급 없음 (이미 최고 등급)":((j=o.needed)==null?void 0:j.message)==="모든 항목이 입력되었습니다."?N="남은 항목 없음 (전부 입력됨)":(W=o.needed)!=null&&W.message&&(N=o.needed.message),K({type:"calc",message:`${e}학년 ${t} (${i}) → ${o.rounded}점 · 현재 ${te(o.letter)}`,detail:{grade:e,subject:t,semester:n,semLabel:i,scoreLines:C,rounded:o.rounded,letter:o.letter,average:o.average,needed:o.needed?{targetLetter:o.needed.targetLetter,needed:o.needed.needed,message:o.needed.message}:null,neededLine:N}});let y="";((Y=o.needed)==null?void 0:Y.needed)!=null?y=`<p>한 단계 상위 <strong>${te(o.needed.targetLetter)}</strong> → 남은 항목 평균 <strong>${o.needed.needed}점</strong> 이상</p>`:((X=o.needed)==null?void 0:X.message)==="이미 최고 등급입니다."?y="<p>한 단계 상위 등급 없음 (이미 최고 등급)</p>":((w=o.needed)==null?void 0:w.message)==="모든 항목이 입력되었습니다."?y="<p>남은 항목 없음 (전부 입력됨)</p>":(E=o.needed)!=null&&E.message&&(y=`<p>${o.needed.message}</p>`);let p="";if(o.projection.remainingCount>0&&o.letter===o.projLetter){const S=te(o.letter);let d="";o.confirmMin&&(o.confirmMin.minScore<=0?d=`<p>남은 항목이 <strong>0점</strong>이어도 ${S} 유지</p>`:d=`<p>남은 항목 각각 최소 <strong>${o.confirmMin.minScore}점</strong> 이상이면 ${S} 유지</p>`),p=`
        <p><strong>${S} 확정입니다.</strong></p>
        ${d}
      `}let M="";Jn(o)&&(M=`<p class="cheer-msg">${Yn()}</p>`);let T="";k.justUnlocked?T=`<p class="success">서로 다른 과목 ${ae()}개 달성! 학년 선택에서 휴식 미니게임 이용</p>`:we()?T='<p class="success">휴식 미니게임 이용 가능 (학년 선택 화면)</p>':k.isNew?T=`<p class="muted">${jt()}</p>`:T='<p class="muted">이미 계산한 과목입니다. 다른 과목을 계산하면 해금에 가까워져요.</p>',m.classList.remove("hidden"),m.innerHTML=`
      <h3>${t} 결과</h3>
      <p>총점(반올림) <strong>${o.rounded}점</strong> · 현재 <strong>${te(o.letter)}</strong></p>
      ${y}
      <p class="muted">가중 평균 ${o.average.toFixed(1)}점</p>
      <p>남은 항목 100점 시 <strong>${o.projRounded}점</strong> · <strong>${te(o.projLetter)}</strong></p>
      ${p}
      ${M}
      ${T}
    `}),V(b),Ft(b)}function Ta(){if(!we()){$("grade");return}b.innerHTML=R(`
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
        ${ee()}
      </div>
      ${Z(z.subtitle)}
    </div>
  `),V(b)}function Ue(e){if(!we()){$("grade");return}K({type:"game_open",message:`미니게임 시작: ${e}${he()?" (관리자)":""}`,detail:{type:e}}),b.innerHTML=R('<div id="game-root"></div>',"game-screen");const t=b.querySelector("#game-root"),n={onBack:()=>$("rest"),onMain:()=>{G=null,se=null,Q=null,$("main")}};e==="dart"?le=sa(t,n)??null:e==="cricket"?le=la(t,n)??null:e==="breakout"&&(le=ma(t,n)??null)}
