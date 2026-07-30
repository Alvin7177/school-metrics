(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();const ve=8,R={title:"SCHOOL METRICS",subtitle:"철저한 내신관리 시스템",footer:"for 해연중 학생들",creator:"2210 박민호"},ce={apiKey:"AIzaSyB7YJBfYa9zGnUvLD4DFgR5KLiNKuluHJM",authDomain:"school-metrics-fdee3.firebaseapp.com",projectId:"school-metrics-fdee3",storageBucket:"school-metrics-fdee3.firebasestorage.app",messagingSenderId:"378255554733",appId:"1:378255554733:web:01b06dca5b5307860eae24",measurementId:"G-0BL416S3QD"};function q(){return!!(ce.apiKey&&ce.projectId&&ce.appId)}const xt="https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js",_="https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js",Q="https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";let se=null,be=null,le=null,ge=null;async function rt(){return q()?se||(ge||(ge=(async()=>{const{initializeApp:e,getApps:t}=await import(xt);return se=t().length?t()[0]:e(ce),se})().catch(e=>(console.warn("[firebase] app init failed",e),ge=null,se=null,null))),ge):null}async function G(){if(!q())return null;if(be)return be;const e=await rt();if(!e)return null;const{getFirestore:t}=await import(_);return be=t(e),be}async function Se(){if(!q())return null;if(le)return le;const e=await rt();if(!e)return null;const{getAuth:t,setPersistence:a,browserLocalPersistence:i}=await import(Q);le=t(e);try{await a(le,i)}catch(n){console.warn("[firebase] auth persistence",n)}return le}function st(e){const t=(e==null?void 0:e.code)||"";return{"auth/email-already-in-use":"이미 가입된 계정입니다. 로그인하세요.","auth/invalid-email":"이메일 형식이 올바르지 않습니다.","auth/weak-password":"비밀번호는 6자 이상이어야 합니다.","auth/user-not-found":"가입되지 않은 계정입니다. 먼저 회원가입하세요.","auth/wrong-password":"비밀번호가 틀렸습니다.","auth/invalid-credential":"이메일 또는 비밀번호가 올바르지 않습니다.","auth/too-many-requests":"시도가 너무 많습니다. 잠시 후 다시 시도하세요.","auth/network-request-failed":"네트워크 오류입니다. 연결을 확인하세요.","auth/operation-not-allowed":"Firebase에서 이메일/비밀번호 로그인을 켜야 합니다."}[t]||(e==null?void 0:e.message)||"인증에 실패했습니다."}async function At(e,t){const a=await Se();if(!a)throw new Error("Firebase가 설정되지 않았습니다.");const{createUserWithEmailAndPassword:i,sendEmailVerification:n}=await import(Q);try{const r=await i(a,e,t);try{await n(r.user)}catch(l){console.warn("[firebase] verification mail",l)}return r.user}catch(r){throw r.friendlyMessage=st(r),r}}async function Ct(e,t){const a=await Se();if(!a)throw new Error("Firebase가 설정되지 않았습니다.");const{signInWithEmailAndPassword:i}=await import(Q);try{return(await i(a,e,t)).user}catch(n){throw n.friendlyMessage=st(n),n}}async function we(){const e=await Se();if(!e)return;const{signOut:t}=await import(Q);await t(e)}async function $e(){const e=await Se();if(!e)return null;if(e.currentUser)return e.currentUser;const{onAuthStateChanged:t}=await import(Q);return new Promise(a=>{const i=t(e,n=>{i(),a(n||null)})})}async function Pt(){const e=await $e();return e?(await e.reload(),e):null}async function qt(){const e=await $e();if(!e)throw new Error("로그인된 사용자가 없습니다.");const{sendEmailVerification:t}=await import(Q);await t(e)}async function Tt(e){const t=await $e();if(!t)return;const{updateProfile:a}=await import(Q);await a(t,e)}async function Dt(e,t){if(!e)return!1;const a=await G();if(!a)return!1;const{doc:i,setDoc:n,serverTimestamp:r}=await import(_),l={...t};return Object.keys(l).forEach(c=>{l[c]===void 0&&delete l[c]}),await n(i(a,"userProfiles",e),{...l,updatedAt:r()},{merge:!0}),!0}async function Bt(e){if(!e)return null;const t=await G();if(!t)return null;const{doc:a,getDoc:i}=await import(_),n=await i(a(t,"userProfiles",e));if(!n.exists())return null;const r=n.data();return delete r.updatedAt,r}async function Ot(e){if(!e)return null;const t=await G();if(!t)return null;const{doc:a,getDoc:i}=await import(_),n=await i(a(t,"deviceBindings",e));return n.exists()?n.data():null}async function Rt(e,t,a=null){if(!e||!t)return{ok:!1,error:"기기 정보가 없습니다."};const i=await G();if(!i)return{ok:!1,error:"Firebase가 설정되지 않았습니다."};const{doc:n,runTransaction:r,serverTimestamp:l}=await import(_),c=n(i,"deviceBindings",e),g=String(t).trim().toLowerCase();try{return await r(i,async u=>{var f;const v=await u.get(c);if(v.exists()){const o=String(((f=v.data())==null?void 0:f.account)||"").toLowerCase();if(o&&o!==g){const m=new Error("DEVICE_BOUND_OTHER");throw m.code="DEVICE_BOUND_OTHER",m.boundAccount=o,m}}u.set(c,{account:g,uid:a||null,updatedAt:l(),...v.exists()?{}:{createdAt:l()}},{merge:!0})}),{ok:!0,account:g}}catch(u){if((u==null?void 0:u.code)==="DEVICE_BOUND_OTHER"||(u==null?void 0:u.message)==="DEVICE_BOUND_OTHER")return{ok:!1,conflict:!0,boundAccount:u.boundAccount||null,error:"이 기기에서는 이미 다른 계정이 사용 중입니다. (도용·사칭 방지)"};throw u}}async function _t(e){const t=await G();if(!t)return null;const{collection:a,addDoc:i,serverTimestamp:n}=await import(_),r={...e};return Object.keys(r).forEach(c=>{r[c]===void 0&&delete r[c]}),(await i(a(t,"activityLogs"),{...r,createdAt:n()})).id}async function Ut(e=200){const t=await G();if(!t)return[];const{collection:a,query:i,orderBy:n,limit:r,getDocs:l}=await import(_),c=i(a(t,"activityLogs"),n("at","desc"),r(e));return(await l(c)).docs.map(u=>({id:u.id,...u.data()}))}async function jt(){const e=await G();if(!e)return 0;const{collection:t,getDocs:a,deleteDoc:i,query:n,limit:r}=await import(_);let l=0;for(;;){const c=await a(n(t(e,"activityLogs"),r(100)));if(c.empty||(await Promise.all(c.docs.map(g=>i(g.ref))),l+=c.size,c.size<100))break}return l}async function Ht(e){const t=await G();if(!t)return!1;const{doc:a,setDoc:i,serverTimestamp:n}=await import(_),r={...e};return Object.keys(r).forEach(l=>{r[l]===void 0&&delete r[l]}),await i(a(t,"adminSettings","global"),{...r,updatedAt:n()}),!0}async function Ft(){const e=await G();if(!e)return null;const{doc:t,getDoc:a}=await import(_),i=await a(t(e,"adminSettings","global"));if(!i.exists())return null;const n=i.data();return delete n.updatedAt,n}const Xe="schoolMetricsDeviceId",lt="schoolMetricsBoundAccount";function fe(){let e=localStorage.getItem(Xe);return e||(e=`dev-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,localStorage.setItem(Xe,e)),e}function Gt(){return String(localStorage.getItem(lt)||"").trim().toLowerCase()||null}function ot(e){localStorage.setItem(lt,String(e).trim().toLowerCase())}const Le="schoolMetricsUserAccount",Wt=new Set(["2024","2025","2026"]),Vt=/^(\d{4})(\d{4})@haeyeon\.ms\.kr$/i,Qe=6;function Ee(e){const a=String(e||"").trim().toLowerCase().match(Vt);if(!a)return{ok:!1,error:"해연중 계정(@haeyeon.ms.kr) 형식으로 입력하세요."};const i=a[1],n=a[2],r=ke(n);return r.ok?Wt.has(i)?{ok:!0,account:`${i}${r.studentId}@haeyeon.ms.kr`,year:i,studentId:r.studentId,grade:r.grade,classNo:r.classNo,number:r.number}:{ok:!1,error:"년도는 2024, 2025, 2026만 가능합니다."}:r}function ke(e){const t=String(e||"").trim();if(!/^\d{4}$/.test(t))return{ok:!1,error:"학번은 숫자 4자리여야 합니다. (예: 1111)"};const a=t[0],i=t[1],n=Number(t.slice(2));return["1","2","3"].includes(a)?"12345678".includes(i)?!Number.isInteger(n)||n<1||n>35?{ok:!1,error:"번호는 01~35만 가능합니다."}:{ok:!0,studentId:t,grade:Number(a),classNo:Number(i),number:n}:{ok:!1,error:"학번 둘째 자리(반)는 1~8만 가능합니다."}:{ok:!1,error:"학번 첫 자리(학년)는 1·2·3만 가능합니다."}}function ct(e){const t=String(e||"").trim().replace(/\s+/g," ");return t.length<2?{ok:!1,error:"이름은 2글자 이상 입력하세요."}:t.length>20?{ok:!1,error:"이름은 20글자 이하로 입력하세요."}:{ok:!0,displayName:t}}function dt(e){return String(e||"").length<Qe?{ok:!1,error:`비밀번호는 ${Qe}자 이상이어야 합니다.`}:{ok:!0}}const Ze="이 기기에서는 이미 다른 계정이 사용 중입니다. (도용·사칭 방지)";async function Be(e){const t=String(e||"").trim().toLowerCase(),a=fe(),i=Gt();if(i&&i!==t)return{ok:!1,error:Ze,boundAccount:i};try{const n=await Ot(a),r=String((n==null?void 0:n.account)||"").toLowerCase();if(r&&r!==t)return ot(r),{ok:!1,error:Ze,boundAccount:r}}catch(n){console.warn("[auth] device binding check",n)}return{ok:!0,deviceId:a}}async function Ie(e,t=null){const a=String(e||"").trim().toLowerCase(),i=fe(),n=await Rt(i,a,t);return n.ok?(ot(a),{ok:!0,deviceId:i,account:a}):n}function Oe(e){return localStorage.setItem(Le,JSON.stringify(e)),e}function ut(e,t={}){return{account:e.account,year:e.year,studentId:e.studentId,grade:e.grade,classNo:e.classNo,number:e.number,displayName:t.displayName||"",loggedInAt:new Date().toISOString(),viaPassword:!0,...t}}function K(){try{const e=localStorage.getItem(Le);if(!e)return null;const t=JSON.parse(e);return t!=null&&t.account&&Ee(t.account).ok?t:null}catch{return null}}function ft(){return!!K()}function mt(){var e;return((e=K())==null?void 0:e.account)||null}function Kt(){var e;return((e=K())==null?void 0:e.displayName)||""}function zt(){var e;return((e=K())==null?void 0:e.studentId)||""}function Re(e=K()){if(!e)return"";const t=[];return e.displayName&&t.push(e.displayName),e.studentId&&t.push(e.studentId),t.join(" · ")||e.account||""}async function _e(){localStorage.removeItem(Le);try{await we()}catch{}}async function bt(e,t){if(e){try{await Tt({displayName:t.displayName||""})}catch(a){console.warn("[auth] updateProfile",a)}try{await Dt(e,{displayName:t.displayName||"",studentId:t.studentId||"",year:t.year||"",account:t.account||"",grade:t.grade,classNo:t.classNo,number:t.number})}catch(a){console.warn("[auth] cloud profile",a)}}}async function Ue(e,{requireVerified:t=!0}={}){const a=e==null?void 0:e.email;if(!a)return await we().catch(()=>{}),{ok:!1,error:"계정 이메일을 가져오지 못했습니다."};const i=Ee(a);if(!i.ok)return await we().catch(()=>{}),i;if(t&&!e.emailVerified)return{ok:!1,needVerify:!0,error:"학교 메일함에서 인증 메일의 링크를 눌러주세요. (스팸함도 확인)",account:i.account};let n=String(e.displayName||"").trim(),r=i.studentId,l=i.grade,c=i.classNo,g=i.number;try{const f=await Bt(e.uid);if(f!=null&&f.displayName&&(n=String(f.displayName).trim()),f!=null&&f.studentId){const o=ke(f.studentId);o.ok&&(r=o.studentId,l=o.grade,c=o.classNo,g=o.number)}}catch(f){console.warn("[auth] load profile",f)}const u=K();if((u==null?void 0:u.account)===i.account&&(!n&&u.displayName&&(n=u.displayName),u.studentId)){const f=ke(u.studentId);f.ok&&r===i.studentId&&u.studentId!==i.studentId&&(r=f.studentId,l=f.grade,c=f.classNo,g=f.number)}return{ok:!0,user:Oe(ut({...i,studentId:r,grade:l,classNo:c,number:g},{uid:e.uid||null,emailVerified:!!e.emailVerified,displayName:n}))}}async function Jt(e,t,a){if(!q())return{ok:!1,error:"Firebase 설정이 없습니다."};const i=ct(a);if(!i.ok)return i;const n=Ee(e);if(!n.ok)return n;const r=dt(t);if(!r.ok)return r;const l=await Be(n.account);if(!l.ok)return l;try{const c=await At(n.account,t),g=await Ie(n.account,c.uid);return g.ok?(await bt(c.uid,{displayName:i.displayName,studentId:n.studentId,year:n.year,account:n.account,grade:n.grade,classNo:n.classNo,number:n.number}),Oe(ut(n,{uid:c.uid,displayName:i.displayName,emailVerified:!1})),{ok:!1,needVerify:!0,registered:!0,account:n.account,displayName:i.displayName,error:"가입되었습니다. 학교 메일함의 인증 링크를 누른 뒤 로그인하세요.",uid:c==null?void 0:c.uid}):(await we().catch(()=>{}),g)}catch(c){return{ok:!1,error:c.friendlyMessage||c.message||"회원가입 실패"}}}async function Yt(e,t){if(!q())return{ok:!1,error:"Firebase 설정이 없습니다."};const a=Ee(e);if(!a.ok)return a;const i=dt(t);if(!i.ok)return i;const n=await Be(a.account);if(!n.ok)return n;try{const r=await Ct(a.account,t);await r.reload();const l=await Ue(r,{requireVerified:!0});if(!l.ok)return l;const c=await Ie(a.account,r.uid);return c.ok?l:(await _e(),c)}catch(r){return{ok:!1,error:r.friendlyMessage||r.message||"로그인 실패"}}}async function Xt({displayName:e,studentId:t}){const a=K();if(!a)return{ok:!1,error:"로그인이 필요합니다."};const i=ct(e);if(!i.ok)return i;const n=ke(t);if(!n.ok)return n;const r=Oe({...a,displayName:i.displayName,studentId:n.studentId,grade:n.grade,classNo:n.classNo,number:n.number});return await bt(a.uid,{displayName:r.displayName,studentId:r.studentId,year:r.year,account:r.account,grade:r.grade,classNo:r.classNo,number:r.number}),{ok:!0,user:r}}async function Qt(){try{const e=await Pt();if(!e)return{ok:!1,error:"먼저 로그인(비밀번호)을 다시 시도하세요."};const t=await Ue(e,{requireVerified:!0});if(!t.ok)return t;const a=await Ie(t.user.account,e.uid);return a.ok?t:(await _e(),a)}catch(e){return{ok:!1,error:e.message||"인증 상태 확인 실패"}}}async function Zt(){try{return await qt(),{ok:!0,message:"인증 메일을 다시 보냈습니다. 메일함을 확인하세요."}}catch(e){return{ok:!1,error:e.message||"인증 메일 재전송 실패"}}}async function en(){if(!q())return pe(),null;try{const e=await $e();if(!e)return pe(),null;await e.reload();const t=await Ue(e,{requireVerified:!0});return t.ok?(await Be(t.user.account)).ok?(await Ie(t.user.account,e.uid),t.user):(await _e(),null):(pe(),null)}catch(e){return console.warn("[auth] restore",e),pe(),null}}function pe(){localStorage.removeItem(Le)}const tn="73357442",je="schoolMetricsAdminSession",He="schoolMetricsAdminSettings",ye="schoolMetricsActivityLog",nn=500,ae={restUnlockUses:ve,freeGames:!0,standardScale:[{letter:"A",min:90},{letter:"B",min:80},{letter:"C",min:70},{letter:"D",min:60},{letter:"E",min:0}],artsScale:[{letter:"A",min:80},{letter:"B",min:60},{letter:"C",min:0}]};function Fe(e,t){try{const a=localStorage.getItem(e);return a?JSON.parse(a):t}catch{return t}}function Ge(e,t){localStorage.setItem(e,JSON.stringify(t))}function de(){return sessionStorage.getItem(je)==="1"}function an(e){return String(e)===tn?(sessionStorage.setItem(je,"1"),z({type:"admin_login",message:"관리자 로그인"}),!0):!1}function rn(){sessionStorage.removeItem(je)}function F(){const e=Fe(He,{});return{...ae,...e,standardScale:e.standardScale||ae.standardScale,artsScale:e.artsScale||ae.artsScale}}function sn(e){const t={...F(),...e};return Ge(He,t),z({type:"admin_settings",message:"관리자 설정 변경",detail:e}),q()&&Ht(t).catch(a=>console.warn("[firebase] settings save",a)),t}async function ln(){if(!q())return F();try{const e=await Ft();if(e&&typeof e=="object"){const t={...ae,...e,standardScale:e.standardScale||ae.standardScale,artsScale:e.artsScale||ae.artsScale};return Ge(He,t),t}}catch(e){console.warn("[firebase] settings load",e)}return F()}function Me(){return Number(F().restUnlockUses)||ve}function Ne(){return de()&&F().freeGames!==!1}function z(e){const t={id:`${Date.now()}-${Math.random().toString(36).slice(2,7)}`,at:new Date().toISOString(),deviceId:fe(),...e,account:e.account||mt()||"guest",displayName:e.displayName||Kt()||"",studentId:e.studentId||zt()||""},a=Fe(ye,[]);return a.unshift(t),Ge(ye,a.slice(0,nn)),q()&&_t(t).catch(i=>console.warn("[firebase] log",i)),t}function We(){return Fe(ye,[])}async function on(){const e=We();if(!q())return{source:"local",logs:e};try{const t=await Ut(300),a=new Map;for(const n of[...t,...e]){const r=n.id||`${n.at}-${n.deviceId}-${n.type}-${n.message}`;a.has(r)||a.set(r,n)}return{source:"firebase",logs:[...a.values()].sort((n,r)=>String(r.at).localeCompare(String(n.at)))}}catch(t){return console.warn("[firebase] fetch logs",t),{source:"local-fallback",logs:e,error:String(t.message||t)}}}async function cn({cloud:e=!0}={}){if(localStorage.removeItem(ye),e&&q())try{await jt()}catch(t){console.warn("[firebase] clear",t)}z({type:"admin_clear_logs",message:"활동 로그 초기화"})}function dn(e=We()){return JSON.stringify({exportedAt:new Date().toISOString(),deviceId:fe(),firebase:q(),settings:F(),logs:e},null,2)}function un(){return{configured:q(),projectId:ce.projectId||""}}const Ve="schoolMetricsUniqueSubjects";function gt(){try{const e=localStorage.getItem(Ve),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch{return[]}}function fn(e){localStorage.setItem(Ve,JSON.stringify(e))}function mn(e){const t=Me(),a=gt(),i=!a.includes(e);return i&&(a.push(e),fn(a)),{isNew:i,uniqueCount:a.length,justUnlocked:i&&a.length>=t}}function Ke(){return gt().length}function me(){return Ne()?!0:Ke()>=Me()}function bn(){return Math.max(0,Me()-Ke())}function gn(){Ne()||localStorage.removeItem(Ve)}function pt(){const e=Me(),t=Ke(),a=bn();return Ne()?"관리자 모드: 미니게임 자유 이용":me()?`서로 다른 과목 ${t}개 달성! 휴식 미니게임 이용 가능`:`서로 다른 과목 ${a}개 더 계산하면 해금 (${t}/${e})`}const Ce=["희망은 좋은 것이다. 어쩌면 가장 좋은 것일지도. — 《쇼생크 탈출》","해야 한다, 아니면 안 된다. 그 중간은 없다. — 《스타워즈》","과거는 과거일 뿐이야. 배울 수만 있다면. — 《라이온 킹》","가장 어두운 시간은 해가 뜨기 직전이다. — 《어벤져스: 엔드게임》","세상에서 중요한 건 내가 누구냐가 아니라, 내가 뭘 하느냐다. — 《배트맨: 다크나이트》","우리에게 주어진 시간을 어떻게 쓸지만 결정하면 된다. — 《반지의 제왕》","아주 작은 존재도 미래를 바꿀 수 있다. — 《반지의 제왕》","자유는 아무 대가 없이 오지 않는다. — 《브레이브하트》","지금 이 순간을 잡아라. — 《데드 포엇 소사이어티》","무엇이든 할 수 있다. — 《쿵푸 판다》","그냥 계속 헤엄쳐. — 《니모를 찾아서》","모든 걸 시도해 봐. — 《주토피아》","두려움을 없애는 방법은 그것과 마주하는 것이다. — 《인사이드 아웃》","뜻이 있는 곳에 길이 있다. — 《아바타》","비가 그친 뒤에는 반드시 맑은 하늘이 온다. — 《날씨의 아이》","나는 이 세계를 이해할 수 없어. 그래도 계속한다. — 《록키》","시련이 없었다면 챔피언도 없다. — 《록키》","인생은 수레바퀴와 같아. 항상 앞으로 나아가야 한다. — 《니모를 찾아서》","이겨야 한다. 어떻게든. — 《친구》","꿈은 거짓말이 아니다. 반드시 이루어질 내일이다. — 《드림하이》","포기하면 그 순간 게임 끝이야, 인생도 마찬가지다. — 《슬램덩크》","죽을 때 후회 없는 인생을 살아라. — 《원피스》","약한 것은 죄가 아니다. 약한 채로 있으면 안 될 뿐. — 《귀멸의 칼날》","막을 때까지 싸워라. — 《진격의 거인》","노력은 배신하지 않는다. — 《하이큐!!》","패배는 패배하지 않는 것보다 낫다. — 《하이큐!!》","시선을 돌리지 마. 앞만 봐. — 《센과 치히로의 행방불명》","살아있는 한 힘을 내라. — 《하울의 움직이는 성》","바람이 분다. 견뎌야 한다. — 《바람의 나라》","상대는 나 자신이다. — 《초속 5센티미터》","포기하지 말 것. 내일이 있으니. — 《드래곤볼》","사람은 누구나 다시 태어날 수 있다. — 《바람의 나라》","아는 것이 힘이다. — 프랜시스 베이컨","천 리 길도 한 걸음부터. — 노자","배우고 또 배우면 어찌 기쁘지 아니하랴. — 공자","백번 듣는 것보다 한 번 보는 것이 낫다. — 공자","세 사람이 길을 가면 반드시 나의 스승이 있다. — 공자","하늘은 큰 뜻을 품은 자에게 먼저 고생을 시킨다. — 맹자","독서는 마음의 양식이다. — 키케로","하늘은 스스로 돕는 자를 돕는다. — 소포클레스","그대가 갈망하는 것을 따르라. — 랄프 왔도 에머슨","겁쟁이는 죽기 전에 여러 번 죽는다. 용감한 자는 한 번만 죽는다. — 셰익스피어","열정 없이는 위대한 것은 이루어지지 않는다. — 게오르크 빌헬름 프리드리히 헤겔","나는 나의 운명을 사랑한다. — 프리드리히 니체","오늘 할 일을 내일로 미루지 마라. — 벤자민 프랭클린","천재는 1%의 영감과 99%의 땀이다. — 토마스 에디슨","실패는 성공의 어머니이다. — 토마스 에디슨","시간은 금이다. — 벤자민 프랭클린","어리석은 자는 경험에서 아무것도 배우지 않는다. — 벤자민 프랭클린","실용적인 것이 가장 시적인 것이다. — 벤자민 프랭클린","깊은 생각 없는 독서는 낮잠과 같다. — 프랜시스 베이컨","인생은 속도가 아니라 방향이다. — 에이브러햄 링컨","성공은 최종적인 것이 아니며, 실패는 치명적인 것이 아니다. — 윈스턴 처칠","가장 위대한 영광은 넘어지지 않는 것이 아니라, 넘어질 때마다 일어서는 것이다. — 넬슨 만델라","용기는 두려움의 부재가 아니라, 두려움에도 행동하는 것이다. — 넬슨 만델라","네가 할 수 있다고 믿든 못 한다고 믿든, 네 말이 맞다. — 헨리 포드","성공의 비결은 시작하는 것이다. — 마크 트웨인","행운은 준비된 자에게 찾아온다. — 루이 파스퇴르","한계란 대부분 마음속에 있는 환상일 뿐이다. — 무하마드 알리","나는 세계 챔피언이다. 내가 그렇다고 말하기 전부터. — 무하마드 알리","항상 갈망하고, 우직하게 나아가라. — 스티브 잡스","당신의 시간은 제한되어 있다. 다른 사람의 인생을 살며 낭비하지 마라. — 스티브 잡스","오늘 나는 죽었다면 무엇을 후회하겠는가. — 스티브 잡스","죽고자 하면 살 것이요, 살고자 하면 죽을 것이니라. — 이순신","한 번도 실수한 적 없는 사람은 새로운 것을 시도한 적이 없는 사람이다. — 알버트 아인슈타인","네가 정말 소중히 여기는 것에 시간을 써라. — 《어린 왕자》","꽃을 단 한 송이라도 내가 직접 가꾸면, 내 세계에 엇비슷한 시간이 흐른다. — 《어린 왕자》","세상에서 가장 강한 사람은 스스로를 이기는 사람이다. — 무라카미 하루키","빛을 보고자 한다면 어둠을 견뎌야 한다. — 무라카미 하루키","사람은 마음먹은 것은 다 이룬다. — 《바보》","고통 없이는 얻는 것도 없다. — 라틴 격언","로마는 하루아침에 이루어지지 않았다. — 속담","연습이 완벽을 만든다. — 속담","배움에는 왕도가 없다. — 유클리드","작은 일에 충실하라. 그곳에 네 힘이 있다. — 루드야드 키플링","가장 큰 위험은 위험을 감수하지 않는 것이다. — 마크 주커버그","인생은 짧고, 예술은 길다. — 히포크라테스","삶을 살아가는 가장 좋은 복수는 성공하는 것이다. — 프랭크 시나트라","피할 수 없으면 즐겨라. — 로버트 엘리엇","포기하지 않는 한, 늦었다고 생각할 때가 가장 빠른 때다. — 속담","꾸준함은 재능을 이긴다. — 속담","반복은 지루하지만, 반복 없는 실력은 환상이다. — 속담","오늘의 노력이 내일의 실력이 된다. — 속담","지금이 가장 빠른 시작이다. — 속담","목표 없는 공부는 방향 잃은 배와 같다. — 속담","모르는 것을 아는 것이 배움의 시작이다. — 속담","실력은 하루아침에 생기지 않는다. — 속담","쉬는 것도 실력이다. 번아웃을 조심하자. — 속담","비교하지 말고, 어제의 나와 겨루자. — 속담","이해가 안 되면 다시 보면 된다. 반복이 답이다. — 속담","시험은 결과일 뿐, 과정이 실력이다. — 속담","1%씩 매일 오르면 37배가 된다. — 속담","모르는 건 부끄러운 게 아니다. 묻지 않는 게 문제다. — 속담","오답 노트 한 장이 교과서 열 페이지보다 강하다. — 속담","할 수 있다고 믿는 순간, 절반은 온 것이다. — 속담","오늘 공부한 만큼, 내일은 덜 불안하다. — 속담"],et="schoolMetricsQuoteIndex";function pn(){let e=Number(localStorage.getItem(et)||0);const t=Ce[e%Ce.length];return localStorage.setItem(et,String((e+1)%Ce.length)),t}const hn={1:{label:"1학년",note:"1학년은 2학기부터 내신 성적이 반영됩니다.",subjects:{국어:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"나만의 노트(나노)",weight:15,kind:"perf"}]}}},수학:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"기본도형 탐구 프로젝트",weight:20,kind:"perf"},{label:"평면·입체 도형 탐구",weight:20,kind:"perf"}]}}},사회:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"사회화 자서전 만들기",weight:20,kind:"perf"},{label:"모의 선거",weight:20,kind:"perf"}]}}},과학:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"실험 보고서 작성",weight:20,kind:"perf"},{label:"달의 위상 변화 관찰",weight:20,kind:"perf"}]}}},영어:{semesters:{2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"희망 직업 소개",weight:20,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]}}},음악:{semesters:{2:{label:"2학기",items:[{label:"우쿨렐레 연주",weight:50,kind:"perf"},{label:"작곡가 탐구 활동",weight:50,kind:"perf"}]}}},미술:{semesters:{2:{label:"2학기",items:[{label:"스텐실",weight:50,kind:"perf"},{label:"문자도",weight:50,kind:"perf"}]}}},체육:{semesters:{2:{label:"2학기",items:[{label:"경기형 스포츠(축구)",weight:50,kind:"perf"},{label:"기록 도전형(달리기)",weight:50,kind:"perf"}]}}},정보:{semesters:{2:{label:"2학기",items:[{label:"AI 활용",weight:50,kind:"perf"},{label:"디지털 문화 표현",weight:50,kind:"perf"}]}}},"진로와 직업":{semesters:{2:{label:"2학기",items:[{label:"창업 프로젝트",weight:50,kind:"perf"},{label:"진로 디자인",weight:50,kind:"perf"}]}}},기술가정:{semesters:{2:{label:"2학기",items:[{label:"과학·미래기술 보고서",weight:35,kind:"perf"},{label:"에너지 신문 제작",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]}}}}},2:{label:"2학년",subjects:{국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"발표와 듣기",weight:15,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"복합양식 자료를 활용한 글 작성",weight:15,kind:"perf"}]}}},수학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"일차방정식·일차부등식",weight:20,kind:"perf"},{label:"연립일차방정식·일차함수",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"삼각형·사각형의 성질",weight:20,kind:"perf"},{label:"도형의 닮음·피타고라스",weight:20,kind:"perf"}]}}},역사:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"고대 문명 지도 만들기",weight:20,kind:"perf"},{label:"고대사 신문 만들기",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"서양 고대 문화유산 소개",weight:20,kind:"perf"},{label:"유럽 여행 소개 글쓰기",weight:20,kind:"perf"}]}}},과학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"밀도 측정",weight:10,kind:"perf"},{label:"지권 층상구조 모형 제작",weight:10,kind:"perf"},{label:"주기율표 탐구",weight:10,kind:"perf"},{label:"광합성 탐구",weight:10,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"소리의 성질 탐구",weight:10,kind:"perf"},{label:"인체 프로젝트",weight:20,kind:"perf"},{label:"전류,전압,저항 사이의 관계 탐구",weight:10,kind:"perf"}]}}},영어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"},{label:"발명품 소개",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:30,kind:"exam"},{label:"2학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:10,kind:"perf"},{label:"지역 축제 홍보",weight:20,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]}}},음악:{semesters:{1:{label:"1학기",items:[{label:"우쿨렐레 연주",weight:50,kind:"perf"},{label:"텅드럼 연주",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"펜비트 연주",weight:50,kind:"perf"},{label:"리코더 연주",weight:50,kind:"perf"}]}}},미술:{semesters:{1:{label:"1학기",items:[{label:"세밀화",weight:50,kind:"perf"},{label:"음식 모형 만들기",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"점묘화",weight:50,kind:"perf"},{label:"서양미술사 보고서",weight:50,kind:"perf"}]}}},체육:{semesters:{1:{label:"1학기",items:[{label:"경기형 스포츠(킨볼)",weight:60,kind:"perf"},{label:"도전형(제자리멀리뛰기)",weight:40,kind:"perf"}]},2:{label:"2학기",items:[{label:"경기형 스포츠(배드민턴)",weight:60,kind:"perf"},{label:"건강관리(줄넘기)",weight:40,kind:"perf"}]}}},도덕:{semesters:{1:{label:"1학기",items:[{label:"도덕적 인물 지폐 제작",weight:50,kind:"perf"},{label:"우정 네 컷 만들기",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"정보 카드 뉴스 제작",weight:50,kind:"perf"},{label:"인권 모니터링 제안서",weight:50,kind:"perf"}]}}},중국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 기말고사",weight:40,kind:"exam"},{label:"한어병음 작성",weight:30,kind:"perf"},{label:"중국어 말하기",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 기말고사",weight:40,kind:"exam"},{label:"하루 일과표 만들기",weight:30,kind:"perf"},{label:"중국어 말하기",weight:30,kind:"perf"}]}}},"금융과 미래":{semesters:{2:{label:"2학기",items:[{label:"투자 성향 검사",weight:50,kind:"perf"},{label:"투자 포트폴리오 구성",weight:50,kind:"perf"}]}}},기술가정:{semesters:{1:{label:"1학기",items:[{label:"효과적 의사소통 프로젝트",weight:35,kind:"perf"},{label:"제조 기술 프로젝트",weight:35,kind:"perf"},{label:"자기주도노트 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"균형 잡힌 식단 계획",weight:35,kind:"perf"},{label:"친환경 의복 생활",weight:35,kind:"perf"},{label:"자기주도노트 작성",weight:30,kind:"perf"}]}}}}},3:{label:"3학년",note:"3학년 2학기에는 기말고사가 없습니다.",subjects:{국어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"한 학기 한 권 읽기",weight:25,kind:"perf"},{label:"논설문 쓰기",weight:15,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"한 학기 한 권 읽기",weight:30,kind:"perf"},{label:"문장의 짜임 고려해서 자신감 있게 발표",weight:30,kind:"perf"}]}}},사회:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"국가 기관 탐구로 권력 분립 이해",weight:20,kind:"perf"},{label:"국민 경제 지표와 국제 거래 이해",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"인구·도시 문제 탐구",weight:30,kind:"perf"},{label:"농업 산업화·세계화",weight:30,kind:"perf"}]}}},역사:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"고려 정치 변천",weight:20,kind:"perf"},{label:"고려의 문화 및 조선 통치 체제 탐구",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"조선 왕 가상 인터뷰",weight:30,kind:"perf"},{label:"양 난의 이해 및 영정조 정책 탐구",weight:30,kind:"perf"}]}}},도덕:{semesters:{1:{label:"1학기",items:[{label:"1학기 기말고사",weight:40,kind:"exam"},{label:"폭력 예방 논술문 작성",weight:30,kind:"perf"},{label:"사회 정의 실현 논술문 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"환경 보호 제안서",weight:30,kind:"perf"},{label:"실패 이력서 소개",weight:30,kind:"perf"}]}}},수학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"인수분해를 이용한 수의 성질 탐구",weight:20,kind:"perf"},{label:"이차함수 그래프",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"삼각비 개념 보고서",weight:30,kind:"perf"},{label:"원의 성질 문제해결",weight:30,kind:"perf"}]}}},과학:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"기상 현상 실험",weight:20,kind:"perf"},{label:"화학 반응의 규칙 탐구",weight:20,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"세포분열 관찰 실험",weight:30,kind:"perf"},{label:"물체 운동 분석",weight:30,kind:"perf"}]}}},영어:{semesters:{1:{label:"1학기",items:[{label:"1학기 중간고사",weight:30,kind:"exam"},{label:"1학기 기말고사",weight:30,kind:"exam"},{label:"영어 듣기",weight:15,kind:"perf"},{label:"급식 메뉴 프로젝트",weight:15,kind:"perf"},{label:"영어독서",weight:10,kind:"perf"}]},2:{label:"2학기",items:[{label:"2학기 중간고사",weight:40,kind:"exam"},{label:"영어 듣기",weight:20,kind:"perf"},{label:"영어독서",weight:20,kind:"perf"},{label:"통계 자료 활용 프로젝트",weight:20,kind:"perf"}]}}},음악:{semesters:{1:{label:"1학기",items:[{label:"칼림바 연주",weight:50,kind:"perf"},{label:"전자드럼 연주",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"노래 부르기",weight:50,kind:"perf"},{label:"디자인사 연구보고서",weight:50,kind:"perf"}]}}},미술:{semesters:{1:{label:"1학기",items:[{label:"포트레이트 드로잉",weight:50,kind:"perf"},{label:"비주얼 리터러시",weight:50,kind:"perf"}]},2:{label:"2학기",items:[{label:"오마주",weight:50,kind:"perf"},{label:"디자인 조사 보고서",weight:50,kind:"perf"}]}}},체육:{semesters:{1:{label:"1학기",items:[{label:"전통 표현(티니클링)",weight:40,kind:"perf"},{label:"플로어볼",weight:60,kind:"perf"}]},2:{label:"2학기",items:[{label:"건강·체력 관리(타바타)",weight:40,kind:"perf"},{label:"배구",weight:60,kind:"perf"}]}}},기술가정:{semesters:{1:{label:"1학기",items:[{label:"생애 설계",weight:35,kind:"perf"},{label:"수송기술 제작",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]},2:{label:"2학기",items:[{label:"스마트폰 앱 만들기",weight:35,kind:"perf"},{label:"적정 기술 사례 조사",weight:35,kind:"perf"},{label:"자기주도 노트 작성",weight:30,kind:"perf"}]}}}}}};function ue(e){return hn[e]??null}function wn(e){const t=ue(e);return t?Object.keys(t.subjects):[]}function ze(e,t){var a;return((a=ue(e))==null?void 0:a.subjects[t])??null}function ht(e,t){const a=ze(e,t);return a?Object.keys(a.semesters).map(Number).sort((i,n)=>i-n):[]}function kn(e,t,a){var n;const i=ze(e,t);return((n=i==null?void 0:i.semesters[a])==null?void 0:n.items)??[]}function tt(e,t,a){var n;const i=ze(e,t);return((n=i==null?void 0:i.semesters[a])==null?void 0:n.label)??`${a}학기`}function yn(e,t,a,i){return`${e}-${t}-${a}-${i}`}function vn(e,t,a){return kn(e,t,a).map((n,r)=>({key:yn(e,t,a,r),subject:t,semester:a,label:n.label,weight:n.weight,kind:n.kind}))}function wt(e,t){let a=0,i=0;for(const n of e){const r=t[n.key];if(r===""||r===null||r===void 0)continue;const l=Number(r);Number.isNaN(l)||(a+=n.weight,i+=l*n.weight)}return a===0?null:i/a}function Sn(e,t){const a={},i=[];for(const r of e){const l=t[r.key];if(l===""||l===null||l===void 0){i.push(r);continue}const c=Number(l);if(Number.isNaN(c)){i.push(r);continue}a[r.key]=c}const n={...a};for(const r of i)n[r.key]=100;return{average:wt(e,n),remainingCount:i.length}}const $n=["음악","미술","체육"],Ln=[{letter:"A",min:90},{letter:"B",min:80},{letter:"C",min:70},{letter:"D",min:60},{letter:"E",min:0}],En=[{letter:"A",min:80},{letter:"B",min:60},{letter:"C",min:0}];function kt(e){return e.map((t,a,i)=>{const n=i[a-1],r=t.min===0?`${t.letter} (${(n==null?void 0:n.min)??60}점 미만)`:`${t.letter} (${t.min}점 이상)`;return{letter:t.letter,min:Number(t.min)||0,label:r}})}function yt(){const e=F().standardScale;return kt(e!=null&&e.length?e:Ln)}function vt(){const e=F().artsScale;return kt(e!=null&&e.length?e:En)}function Je(e){return $n.includes(e)}function xe(e){return e==null||Number.isNaN(e)?null:Math.round(e)}function Ye(e){return Je(e)?vt():yt()}function De(e,t){const a=xe(e);if(a===null)return"-";const i=Ye(t);for(const n of i)if(a>=n.min)return n.letter;return i[i.length-1].letter}function oe(e){return`${e}등급`}const nt=["조금만 더 올리면 된다. 할 수 있어!","상위 등급이 코앞이다. 끝까지 달려보자!","지금의 노력이 등급을 바꾼다. 포기하지 마!","아직 끝나지 않았어. 충분히 올릴 수 있어!","남은 항목이 기회다. 집중해서 마무리하자!","한 걸음만 더 가면 등급이 달라진다. 파이팅!","가능성은 아직 살아 있다. 믿고 가보자!","오늘의 한 문제가 등급을 바꿀 수도 있어!","목표 등급까지 거의 다 왔다. 조금만 더!","실력은 거짓말하지 않는다. 계속 밀어붙여!"];function In(e){return e.projection.remainingCount>0&&e.letter!==e.projLetter}function Mn(){const e=Math.floor(Math.random()*nt.length);return nt[e]}function St(e=null){const t=e?Je(e):!1,a=e?t?`${e}은(는) 예체능 과목 (A·B·C)`:`${e}은(는) 일반 과목 (A·B·C·D·E)`:"과목 유형에 따라 등급 기준이 다릅니다.",i=yt(),n=vt();return`
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
            ${i.map(r=>`<tr><td>${r.letter}</td><td>${r.label.replace(/^[A-E]\s*/,"")}</td></tr>`).join("")}
          </tbody>
        </table>
        <table class="criteria-table">
          <thead>
            <tr><th colspan="2">예체능 (음악·미술·체육)</th></tr>
          </thead>
          <tbody>
            ${n.map(r=>`<tr><td>${r.letter}</td><td>${r.label.replace(/^[A-E]\s*/,"")}</td></tr>`).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `}function $t(e){const t=e.querySelector("[data-toggle='criteria']"),a=e.querySelector("#criteria-panel");!t||!a||t.addEventListener("click",()=>{const i=a.classList.toggle("hidden");t.setAttribute("aria-expanded",String(!i)),t.textContent=i?"▶ 등급 기준표 확인":"▼ 등급 기준표 닫기"})}function Nn(e,t,a,i){if(a===null)return null;const n=xe(a),r=De(n,i),l=Ye(i),c=l.findIndex($=>$.letter===r);if(c<=0)return{targetLetter:r,needed:null,message:"이미 최고 등급입니다."};const g=l[c-1],u=g.min,v=e.filter($=>{const k=t[$.key];return k===""||k===null||k===void 0||Number.isNaN(Number(k))});if(v.length===0)return{targetLetter:g.letter,needed:null,message:"모든 항목이 입력되었습니다."};let f=0,o=0,m=0;for(const $ of e){const k=t[$.key];if(k===""||k===null||k===void 0||Number.isNaN(Number(k))){m+=$.weight;continue}f+=$.weight,o+=Number(k)*$.weight}if(m===0)return null;const s=f+m,w=(u*s-o)/m,S=Math.max(0,Math.min(100,w));return{targetLetter:g.letter,needed:Math.ceil(S*10)/10,remainingCount:v.length,message:null}}function xn(e,t,a,i){const r=Ye(i).find(s=>s.letter===a);if(!r)return null;let l=0,c=0,g=0,u=0;for(const s of e){const w=t[s.key];if(w===""||w===null||w===void 0||Number.isNaN(Number(w))){g+=s.weight,u+=1;continue}c+=s.weight,l+=Number(w)*s.weight}if(g===0)return null;const v=c+g,o=((r.min-.5)*v-l)/g;return{minScore:Math.ceil(Math.max(0,Math.min(100,o))*10)/10,remainingCount:u}}function An(e){const t=xe(e);return{raw:e,rounded:t,display:`${t}점`}}function Cn(e,t,a){const i=wt(e,t);if(i===null)return null;const{rounded:n}=An(i),r=De(n,a),l=Sn(e,t),c=xe(l.average),g=Nn(e,t,i,a),u=xn(e,t,r,a);return{average:i,rounded:n,letter:r,projection:l,projRounded:c,projLetter:De(c,a),needed:g,confirmMin:u}}function Z(e="globe"){return`
    <svg class="${e}" viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="48" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.35"/>
      <ellipse cx="60" cy="60" rx="48" ry="16" fill="none" stroke="currentColor" stroke-width="1"/>
      <ellipse cx="60" cy="60" rx="16" ry="48" fill="none" stroke="currentColor" stroke-width="1"/>
      <ellipse cx="60" cy="60" rx="34" ry="48" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.7"/>
      <line x1="12" y1="60" x2="108" y2="60" stroke="currentColor" stroke-width="0.8"/>
      <line x1="60" y1="12" x2="60" y2="108" stroke="currentColor" stroke-width="0.8"/>
    </svg>
  `}function Pn(){return'<img class="title-bg" src="./title-bg.png" alt="" aria-hidden="true" />'}function qn(){return'<img class="go-bg" src="./go-bg.png" alt="" aria-hidden="true" />'}function Lt(e){return`grade-theme-${e}`}function U(e,t=""){return`<div class="phone-screen ${t}">${e}</div>`}function re(e){return`<p class="screen-footer">${e}</p>`}function ee(e="main"){return`<button type="button" class="link-btn" data-action="${e}">메인화면으로</button>`}const Et=[20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5],he=8;function Tn(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function Dn(e,t,a){var i,n;(i=e.querySelector('[data-nav="back"]'))==null||i.addEventListener("click",t),(n=e.querySelector('[data-nav="main"]'))==null||n.addEventListener("click",a)}function Bn(e,t){const a=Math.hypot(e,t);if(a>1)return{points:0,label:"보드 밖"};if(a<=.07)return{points:50,label:"더블 불 · 50"};if(a<=.14)return{points:25,label:"싱글 불 · 25"};let i=Math.atan2(e,-t);i<0&&(i+=Math.PI*2);const n=Math.floor((i+Math.PI/20)%(Math.PI*2)/(Math.PI/10)),r=Et[n];return a>=.9?{points:r*2,label:`더블 ${r} · ${r*2}`}:a>=.52&&a<=.62?{points:r*3,label:`트리플 ${r} · ${r*3}`}:{points:r,label:`싱글 ${r} · ${r}`}}function Pe(e,t,a){const i=t/2,n=t/2,r=t*.42;e.clearRect(0,0,t,t),e.fillStyle="#1a1a1a",e.beginPath(),e.arc(i,n,r*1.08,0,Math.PI*2),e.fill();for(let l=0;l<20;l++){const c=-Math.PI/2-Math.PI/20+l*Math.PI/10,g=c+Math.PI/10,u=l%2===0;e.beginPath(),e.moveTo(i,n),e.arc(i,n,r*.9,c,g),e.closePath(),e.fillStyle=u?"#111":"#ece6d8",e.fill(),e.beginPath(),e.moveTo(i,n),e.arc(i,n,r*.52,c,g),e.closePath(),e.fillStyle=u?"#1c1c1c":"#f5f0e6",e.fill(),e.beginPath(),e.arc(i,n,r,c,g),e.arc(i,n,r*.9,g,c,!0),e.closePath(),e.fillStyle=l%2===0?"#c4122f":"#0a7a3c",e.fill(),e.beginPath(),e.arc(i,n,r*.62,c,g),e.arc(i,n,r*.52,g,c,!0),e.closePath(),e.fillStyle=l%2===0?"#c4122f":"#0a7a3c",e.fill()}e.strokeStyle="rgba(180,180,180,0.55)",e.lineWidth=1;for(let l=0;l<20;l++){const c=-Math.PI/2-Math.PI/20+l*Math.PI/10;e.beginPath(),e.moveTo(i,n),e.lineTo(i+Math.cos(c)*r,n+Math.sin(c)*r),e.stroke()}[.9,.62,.52,.14,.07].forEach(l=>{e.beginPath(),e.arc(i,n,r*l,0,Math.PI*2),e.stroke()}),e.beginPath(),e.arc(i,n,r*.14,0,Math.PI*2),e.fillStyle="#0a7a3c",e.fill(),e.beginPath(),e.arc(i,n,r*.07,0,Math.PI*2),e.fillStyle="#c4122f",e.fill(),e.fillStyle="#fff",e.font=`bold ${Math.max(10,t*.045)}px sans-serif`,e.textAlign="center",e.textBaseline="middle";for(let l=0;l<20;l++){const c=-Math.PI/2+l*Math.PI/10,g=i+Math.cos(c)*r*1.14,u=n+Math.sin(c)*r*1.14;e.fillText(String(Et[l]),g,u)}for(const l of a)e.beginPath(),e.arc(i+l.nx*r,n+l.ny*r,4,0,Math.PI*2),e.fillStyle="#fff700",e.fill(),e.strokeStyle="#000",e.stroke()}function On(e,{onBack:t,onMain:a}){let i=0,n=he,r="vertical",l=.5,c=.5,g=1,u=1,v=0,f=0;const o=[],m=1.35;e.innerHTML=`
    <div class="game-panel">
      <h2 class="game-title">다트 게임</h2>
      <p class="game-desc">바가 가운데 올 때 탭/스페이스로 멈추세요. (세로 → 가로)</p>
      <div class="dart-stats">
        <span id="dart-score">점수: 0</span>
        <span id="dart-throws">남은 횟수: ${he}</span>
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
  `;const s=e.querySelector("#dart-canvas"),w=s.getContext("2d"),S=e.querySelector("#dart-score"),$=e.querySelector("#dart-throws"),k=e.querySelector("#dart-feedback"),b=e.querySelector("#dart-stop"),M=e.querySelector("#dart-retry"),T=e.querySelector("#aim-v"),A=e.querySelector("#aim-h"),D=e.querySelector(".aim-bar-v"),j=e.querySelector(".aim-bar-h");function B(){const d=Math.min(300,e.clientWidth||300);s.width=d,s.height=d,Pe(w,d,o)}function W(){T.style.top=`${l*100}%`,A.style.left=`${c*100}%`,D.classList.toggle("active",r==="vertical"),j.classList.toggle("active",r==="horizontal")}function te(d){f||(f=d);const h=Math.min(.05,(d-f)/1e3);f=d,r==="vertical"?(l+=g*m*h,l>=1&&(l=1,g=-1),l<=0&&(l=0,g=1)):r==="horizontal"&&(c+=u*m*h,c>=1&&(c=1,u=-1),c<=0&&(c=0,u=1)),W(),v=requestAnimationFrame(te)}function ne(){const d=(l-.5)*2.05,h=(c-.5)*2.05,L=Bn(h,d);if(o.push({nx:h,ny:d}),i+=L.points,n-=1,S.textContent=`점수: ${i}`,$.textContent=`남은 횟수: ${n}`,Pe(w,s.width,o),k.textContent=L.label,n<=0){r="done",b.classList.add("hidden"),M.classList.remove("hidden"),k.textContent=`게임 종료! 최종 ${i}점`;return}r="vertical",l=Math.random(),c=Math.random(),k.textContent="세로 바를 가운데에 맞춰 멈추세요!"}function y(d){var h;if((h=d==null?void 0:d.preventDefault)==null||h.call(d),r==="vertical"){r="horizontal",k.textContent="가로 바를 가운데에 맞춰 멈추세요!";return}r==="horizontal"&&(r="result",ne())}function N(d){(d.code==="Space"||d.key===" ")&&(d.preventDefault(),y(d))}function C(){i=0,n=he,r="vertical",o.length=0,l=.2,c=.2,S.textContent="점수: 0",$.textContent=`남은 횟수: ${he}`,k.textContent="세로 바를 가운데에 맞춰 멈추세요!",b.classList.remove("hidden"),M.classList.add("hidden"),Pe(w,s.width,o)}return B(),W(),v=requestAnimationFrame(te),b.addEventListener("click",y),b.addEventListener("touchstart",y,{passive:!1}),M.addEventListener("click",C),window.addEventListener("keydown",N),window.addEventListener("resize",B),Dn(e,t,a),()=>{cancelAnimationFrame(v),window.removeEventListener("keydown",N),window.removeEventListener("resize",B)}}const Y=12;function Rn(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function _n(e,t,a){var i,n;(i=e.querySelector('[data-nav="back"]'))==null||i.addEventListener("click",t),(n=e.querySelector('[data-nav="main"]'))==null||n.addEventListener("click",a)}function Un(e,{onBack:t,onMain:a}){let i=0,n=0,r=!1,l=!0,c=.08,g=.55,u=0,v=0,f=0,o=!1;e.innerHTML=`
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
      ${Rn()}
    </div>
  `;const m=e.querySelector("#cricket-canvas"),s=m.getContext("2d"),w=e.querySelector("#cricket-runs"),S=e.querySelector("#cricket-balls"),$=e.querySelector("#cricket-feedback"),k=e.querySelector("#cricket-swing"),b=e.querySelector("#cricket-retry"),M=.72,T=.09;function A(){const y=Math.min(320,Math.max(260,e.clientWidth-16||300));m.width=y,m.height=Math.round(y*1.3)}function D(){const y=m.width,N=m.height;s.clearRect(0,0,y,N),s.fillStyle="#6ec8ff",s.fillRect(0,0,y,N*.22),s.fillStyle="#3d8c3a",s.fillRect(0,N*.18,y,N*.12);for(let x=0;x<18;x++)s.fillStyle=`hsl(${x*47%360} 70% 45%)`,s.beginPath(),s.arc(10+x*(y/17),N*.22,6,0,Math.PI*2),s.fill();s.fillStyle="#4caf50",s.fillRect(0,N*.28,y,N*.72);const C=y*.28,d=(y-C)/2,h=N*.3,L=N*.58;s.fillStyle="#c4a574",s.beginPath(),s.moveTo(d+C*.15,h),s.lineTo(d+C*.85,h),s.lineTo(d+C,h+L),s.lineTo(d,h+L),s.closePath(),s.fill();const E=h+L*M;if(s.strokeStyle="#fff41a",s.lineWidth=3,s.setLineDash([6,4]),s.beginPath(),s.moveTo(d-8,E),s.lineTo(d+C+8,E),s.stroke(),s.setLineDash([]),s.fillStyle="#8d6e63",s.beginPath(),s.ellipse(y/2,h+18,10,14,0,0,Math.PI*2),s.fill(),s.fillStyle="#66bb6a",s.beginPath(),s.ellipse(y/2,h+L-10,16,22,0,0,Math.PI*2),s.fill(),s.save(),s.translate(y/2+14,h+L-18),s.rotate(u>0?-.9:-.2),s.fillStyle="#f5f5f5",s.fillRect(-4,-28,8,36),s.restore(),!l&&!o){const x=h+L*c,P=y/2+Math.sin(c*6)*4,Ae=7+c*4;s.beginPath(),s.arc(P,x,Ae,0,Math.PI*2),s.fillStyle="#ef5350",s.fill(),s.strokeStyle="#fff",s.lineWidth=1.5,s.stroke()}u>0&&(s.fillStyle="rgba(255,244,26,0.15)",s.fillRect(0,E-20,y,40))}function j(){if(n>=Y){o=!0,k.disabled=!0,k.classList.add("hidden"),b.classList.remove("hidden"),$.textContent=`경기 종료! 총 ${i}점`;return}l=!1,r=!1,c=.05,g=.48+Math.random()*.35,$.textContent="타이밍에 맞춰 스윙!"}function B(y){var h;if((h=y==null?void 0:y.preventDefault)==null||h.call(y),o||r||l)return;r=!0,u=.25,n+=1,S.textContent=`볼: ${n} / ${Y}`;const N=Math.abs(c-M);let C=0,d="헛스윙!";N<=T*.25?(C=6,d="식스! +6"):N<=T*.5?(C=4,d="포! +4"):N<=T*.75?(C=2,d="투런! +2"):N<=T&&(C=1,d="싱글! +1"),i+=C,w.textContent=`득점: ${i}`,$.textContent=d,l=!0,setTimeout(()=>{o||j(),n>=Y&&(o=!0,k.disabled=!0,k.classList.add("hidden"),b.classList.remove("hidden"),$.textContent=`경기 종료! 총 ${i}점`)},650)}function W(y){f||(f=y);const N=Math.min(.05,(y-f)/1e3);f=y,!l&&!o&&(c+=g*N,c>1.05&&(l=!0,r=!0,n+=1,S.textContent=`볼: ${n} / ${Y}`,$.textContent="놓침!",setTimeout(()=>{r=!1,n>=Y?(o=!0,k.disabled=!0,k.classList.add("hidden"),b.classList.remove("hidden"),$.textContent=`경기 종료! 총 ${i}점`):j()},500))),u>0&&(u-=N),D(),v=requestAnimationFrame(W)}function te(){i=0,n=0,o=!1,r=!1,u=0,w.textContent="득점: 0",S.textContent=`볼: 0 / ${Y}`,k.disabled=!1,k.classList.remove("hidden"),b.classList.add("hidden"),j()}function ne(y){(y.code==="Space"||y.key===" ")&&(y.preventDefault(),B(y))}return A(),j(),v=requestAnimationFrame(W),k.addEventListener("click",B),k.addEventListener("touchstart",B,{passive:!1}),m.addEventListener("pointerdown",B),b.addEventListener("click",te),window.addEventListener("keydown",ne),window.addEventListener("resize",A),_n(e,t,a),()=>{cancelAnimationFrame(v),window.removeEventListener("keydown",ne),window.removeEventListener("resize",A)}}function jn(){return`
    <div class="nav-row">
      <button type="button" class="nav-btn" data-nav="back">뒤로</button>
      <button type="button" class="nav-btn nav-btn-main" data-nav="main">메인화면으로</button>
    </div>
  `}function Hn(e,t,a){var i,n;(i=e.querySelector('[data-nav="back"]'))==null||i.addEventListener("click",t),(n=e.querySelector('[data-nav="main"]'))==null||n.addEventListener("click",a)}const Fn=["#42a5f5","#ef5350","#ffee58","#66bb6a"],Gn=4,qe=7;function Wn(e,{onBack:t,onMain:a}){let i=0,n=3,r=!1,l=0,c=0;const g={left:!1,right:!1};let u=320,v=420,f={x:0,y:0,w:70,h:12},o={x:0,y:0,r:6,vx:0,vy:0},m=[];e.innerHTML=`
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
      ${jn()}
    </div>
  `;const s=e.querySelector("#bo-canvas"),w=s.getContext("2d"),S=e.querySelector("#bo-lives"),$=e.querySelector("#bo-score"),k=e.querySelector("#bo-feedback"),b=e.querySelector("#bo-start");function M(){u=Math.min(320,Math.max(260,e.clientWidth-16||300)),v=Math.round(u*1.3),s.width=u,s.height=v,f.y=v-36,f.w=u*.22}function T(){m=[];const d=4,h=56,L=(u-d*(qe+1))/qe,E=16;for(let x=0;x<Gn;x++)for(let P=0;P<qe;P++)m.push({x:d+P*(L+d),y:h+x*(E+d),w:L,h:E,color:Fn[x],alive:!0})}function A(){f.x=(u-f.w)/2,o.x=u/2,o.y=f.y-20;const d=-Math.PI/3+Math.random()*(Math.PI/3),h=Math.min(u,v)*1.05;o.vx=Math.sin(d)*h,o.vy=-Math.abs(Math.cos(d)*h)}function D(){S.textContent=`생명: ${"●".repeat(n)}${"○".repeat(3-n)}`,$.textContent=`점수: ${String(i).padStart(5,"0")}`}function j(){w.fillStyle="#1a1030",w.fillRect(0,0,u,v);for(const d of m)d.alive&&(w.fillStyle=d.color,B(w,d.x,d.y,d.w,d.h,4),w.fill());w.fillStyle="#fff",B(w,f.x,f.y,f.w,f.h,6),w.fill(),w.beginPath(),w.arc(o.x,o.y,o.r,0,Math.PI*2),w.fillStyle="#fff",w.fill()}function B(d,h,L,E,x,P){d.beginPath(),d.moveTo(h+P,L),d.arcTo(h+E,L,h+E,L+x,P),d.arcTo(h+E,L+x,h,L+x,P),d.arcTo(h,L+x,h,L,P),d.arcTo(h,L,h+E,L,P),d.closePath()}function W(d){c||(c=d);const h=Math.min(.033,(d-c)/1e3);if(c=d,r){const L=u*1.6*h;if(g.left&&(f.x-=L),g.right&&(f.x+=L),f.x=Math.max(0,Math.min(u-f.w,f.x)),o.x+=o.vx*h,o.y+=o.vy*h,o.x<o.r&&(o.x=o.r,o.vx*=-1),o.x>u-o.r&&(o.x=u-o.r,o.vx*=-1),o.y<o.r&&(o.y=o.r,o.vy*=-1),o.vy>0&&o.y+o.r>=f.y&&o.y-o.r<=f.y+f.h&&o.x>=f.x&&o.x<=f.x+f.w){o.y=f.y-o.r;const E=(o.x-(f.x+f.w/2))/(f.w/2),x=Math.hypot(o.vx,o.vy)*1.015,P=E*1.1;o.vx=Math.sin(P)*x,o.vy=-Math.abs(Math.cos(P)*x)}for(const E of m)if(E.alive&&o.x+o.r>E.x&&o.x-o.r<E.x+E.w&&o.y+o.r>E.y&&o.y-o.r<E.y+E.h){E.alive=!1,i+=10,D();const x=o.x+o.r-E.x,P=E.x+E.w-(o.x-o.r),Ae=o.y+o.r-E.y,It=E.y+E.h-(o.y-o.r),Mt=Math.min(x,P),Nt=Math.min(Ae,It);Mt<Nt?o.vx*=-1:o.vy*=-1;break}m.every(E=>!E.alive)&&(r=!1,k.textContent=`클리어! 점수 ${i}`),o.y>v+20&&(n-=1,D(),n<=0?(r=!1,k.textContent=`게임 오버 · ${i}점`):(A(),k.textContent="생명 -1! 계속…"))}j(),l=requestAnimationFrame(W)}function te(){i=0,n=3,r=!0,T(),A(),D(),k.textContent="화이팅!"}function ne(d){const h=s.getBoundingClientRect(),L=(d-h.left)/h.width*u;f.x=Math.max(0,Math.min(u-f.w,L-f.w/2))}function y(d){var L;d.preventDefault();const h=((L=d.touches)==null?void 0:L[0])||d;ne(h.clientX)}function N(d){(d.key==="ArrowLeft"||d.key==="a"||d.key==="A")&&(g.left=!0),(d.key==="ArrowRight"||d.key==="d"||d.key==="D")&&(g.right=!0)}function C(d){(d.key==="ArrowLeft"||d.key==="a"||d.key==="A")&&(g.left=!1),(d.key==="ArrowRight"||d.key==="d"||d.key==="D")&&(g.right=!1)}return M(),T(),A(),D(),j(),l=requestAnimationFrame(W),b.addEventListener("click",te),s.addEventListener("pointerdown",y),s.addEventListener("pointermove",d=>{(d.buttons||d.pressure>0)&&y(d)}),s.addEventListener("touchstart",y,{passive:!1}),s.addEventListener("touchmove",y,{passive:!1}),window.addEventListener("keydown",N),window.addEventListener("keyup",C),window.addEventListener("resize",M),Hn(e,t,a),()=>{cancelAnimationFrame(l),window.removeEventListener("keydown",N),window.removeEventListener("keyup",C),window.removeEventListener("resize",M)}}const p=document.getElementById("app");let O=null,X=null,H=null,ie=null,at=!1;const it=new Set(["rest","game-dart","game-cricket","game-breakout","admin"]),Vn={login:Jn,main:Yn,help:Qn,profile:Xn,grade:ta,subject:na,calculator:aa,rest:ia,admin:Zn,"game-dart":()=>Te("dart"),"game-cricket":()=>Te("cricket"),"game-breakout":()=>Te("breakout")};Kn();function Kn(){Promise.all([ln(),en()]).finally(()=>{I(ft()?"main":"login")})}function I(e,t={}){ie&&(ie(),ie=null),at&&!it.has(e)&&gn(),e!=="login"&&!ft()&&(e="login",t={});const a=Vn[e];a&&(p.innerHTML="",a(t),at=it.has(e),window.scrollTo(0,0))}function J(e){e.querySelectorAll("[data-action]").forEach(t=>{t.addEventListener("click",()=>zn(t.dataset.action))})}function zn(e){if(e==="main"){O=null,X=null,H=null,I("main");return}if(e==="grade"){X=null,H=null,I("grade");return}if(e==="help"&&I("help"),e==="profile"&&I("profile"),e==="rest"&&I("rest"),e==="admin"){de()&&I("admin");return}if(e==="subject"&&I("subject",{grade:O}),e==="game-dart"&&I("game-dart"),e==="game-cricket"&&I("game-cricket"),e==="game-breakout"&&I("game-breakout"),e.startsWith("pick-grade-")){O=Number(e.replace("pick-grade-","")),X=null,H=null,I("subject",{grade:O});return}if(e.startsWith("pick-subject-")){const t=decodeURIComponent(e.replace("pick-subject-",""));X=t;const a=ht(O,t);H=(a.length===1,a[0]),I("calculator",{grade:O,subject:t,semester:H});return}e.startsWith("pick-semester-")&&(H=Number(e.replace("pick-semester-","")),I("calculator",{grade:O,subject:X,semester:H}))}function Jn(){let e="login";const t=()=>{var $,k;const a=e==="register";p.innerHTML=U(`
      <div class="stack-screen login-screen">
        ${Z("globe globe-large")}
        <h1 class="login-title">SCHOOL METRICS</h1>
        <p class="login-desc">${a?"처음이면 회원가입하세요":"해연중 계정으로 로그인하세요"}</p>
        <div class="login-form">
          <div class="login-tabs" role="tablist">
            <button type="button" class="login-tab ${a?"":"active"}" data-mode="login">로그인</button>
            <button type="button" class="login-tab ${a?"active":""}" data-mode="register">회원가입</button>
          </div>
          <label class="field">
            <span>학교 계정</span>
            <input type="email" id="login-email" placeholder="20261111@haeyeon.ms.kr" autocomplete="username" />
          </label>
          ${a?`<label class="field">
            <span>이름</span>
            <input type="text" id="login-name" placeholder="홍길동" autocomplete="name" maxlength="20" />
          </label>`:""}
          <label class="field">
            <span>비밀번호</span>
            <input type="password" id="login-password" placeholder="6자 이상" autocomplete="${a?"new-password":"current-password"}" />
          </label>
          ${a?`<label class="field">
            <span>비밀번호 확인</span>
            <input type="password" id="login-password2" placeholder="한 번 더" autocomplete="new-password" />
          </label>`:""}
          <button type="button" class="btn-go" id="login-submit">${a?"가입하기":"로그인"}</button>
          <p class="muted login-hint">예: 20261111@haeyeon.ms.kr<br/>가입 후 학교 메일로 온 인증 링크를 눌러야 로그인됩니다.</p>
          <p class="warn hidden" id="login-error"></p>
          <p class="ok-msg hidden" id="login-ok"></p>
          <div class="login-verify-actions hidden" id="verify-actions">
            <button type="button" class="link-btn" id="verify-refresh">인증 완료했어요</button>
            <button type="button" class="link-btn" id="verify-resend">인증 메일 다시 받기</button>
          </div>
        </div>
        ${re(R.footer)}
      </div>
    `);const i=p.querySelector("#login-error"),n=p.querySelector("#login-ok"),r=p.querySelector("#verify-actions"),l=p.querySelector("#login-email"),c=p.querySelector("#login-name"),g=p.querySelector("#login-password"),u=p.querySelector("#login-password2"),v=p.querySelector("#login-submit"),f=b=>{n.classList.add("hidden"),i.textContent=b,i.classList.remove("hidden")},o=b=>{i.classList.add("hidden"),n.textContent=b,n.classList.remove("hidden")},m=b=>{v.disabled=b};p.querySelectorAll("[data-mode]").forEach(b=>{b.addEventListener("click",()=>{e=b.dataset.mode,t()})});const s=b=>{const M=Re(b);z({type:"user_login",message:`로그인: ${M}`,account:b.account,displayName:b.displayName||"",studentId:b.studentId||""}),I("main")},w=b=>{o(b.error),r.classList.remove("hidden")},S=async()=>{i.classList.add("hidden"),n.classList.add("hidden"),r.classList.add("hidden"),m(!0);try{if(e==="register"){if(g.value!==((u==null?void 0:u.value)||"")){f("비밀번호 확인이 일치하지 않습니다.");return}const M=await Jt(l.value,g.value,(c==null?void 0:c.value)||"");if(M.needVerify){w(M);return}if(!M.ok){f(M.error);return}s(M.user);return}const b=await Yt(l.value,g.value);if(b.needVerify){w(b);return}if(!b.ok){f(b.error);return}s(b.user)}finally{m(!1)}};v.addEventListener("click",S),[l,c,g,u].filter(Boolean).forEach(b=>{b.addEventListener("keydown",M=>{M.key==="Enter"&&S()})}),($=p.querySelector("#verify-refresh"))==null||$.addEventListener("click",async()=>{m(!0);const b=await Qt();if(m(!1),b.needVerify){w(b);return}if(!b.ok){f(b.error);return}s(b.user)}),(k=p.querySelector("#verify-resend"))==null||k.addEventListener("click",async()=>{const b=await Zt();if(!b.ok){f(b.error);return}o(b.message),r.classList.remove("hidden")})};t()}function Yn(){const e=pn(),t=Re()||mt()||"";p.innerHTML=U(`
    <div class="main-screen">
      <button type="button" class="help-btn" data-action="help" aria-label="앱 정보">?</button>
      <div class="main-header">
        <div class="title-block">
          ${Pn()}
          <h1 class="app-title">${R.title}</h1>
        </div>
        <p class="app-subtitle">${R.subtitle}</p>
        <p class="main-quote">"${e}"</p>
      </div>
      <div class="main-body">
        <p class="login-user muted">${V(t)}</p>
        <button type="button" class="link-btn" data-action="profile">내 정보 수정</button>
        <button type="button" class="go-btn" data-action="grade" aria-label="시작">
          ${qn()}
          <span class="go-text">GO</span>
        </button>
      </div>
      <p class="main-footer">${R.footer}</p>
    </div>
  `),J(p)}function Xn(){const e=K();p.innerHTML=U(`
    <div class="stack-screen">
      ${Z()}
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
        <p class="warn hidden" id="profile-error"></p>
        <p class="ok-msg hidden" id="profile-ok"></p>
      </div>
      ${ee()}
    </div>
  `);const t=p.querySelector("#profile-error"),a=p.querySelector("#profile-ok"),i=p.querySelector("#profile-name"),n=p.querySelector("#profile-sid"),r=p.querySelector("#profile-save");r.addEventListener("click",async()=>{t.classList.add("hidden"),a.classList.add("hidden"),r.disabled=!0;const l=await Xt({displayName:i.value,studentId:n.value});if(r.disabled=!1,!l.ok){t.textContent=l.error,t.classList.remove("hidden");return}a.textContent="저장되었습니다.",a.classList.remove("hidden"),z({type:"profile_update",message:`정보 수정: ${Re(l.user)}`,displayName:l.user.displayName,studentId:l.user.studentId})}),J(p)}function Qn(){p.innerHTML=U(`
    <div class="stack-screen">
      ${Z()}
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
          <li>서로 다른 과목 ${ve}개 계산 시 미니게임 1회 해금</li>
          <li>미니게임 이용 후에는 다시 잠금</li>
        </ul>
        <p class="muted">제작: ${R.creator}</p>
        ${de()?'<p class="success"><button type="button" class="link-btn" data-action="admin">관리자 패널 열기</button></p>':""}
      </div>
      ${ee()}
      <button type="button" class="admin-secret-trigger" id="admin-secret" title="">
        ${R.subtitle}
      </button>
    </div>
  `),J(p);const e=p.querySelector("#admin-secret");e==null||e.addEventListener("click",()=>{if(de()){I("admin");return}const t=window.prompt("관리자 비밀번호를 입력하세요");t!=null&&(an(t)?(window.alert("관리자 모드가 켜졌습니다."),I("admin")):window.alert("비밀번호가 올바르지 않습니다."))})}function Zn(){var c,g,u,v,f,o;if(!de()){I("help");return}const e=F(),t=un(),a=e.standardScale,i=e.artsScale,n=t.configured?`Firebase 연결됨 (${t.projectId})`:"Firebase 미설정 — src/firebase-config.js 에 키를 넣어주세요";p.innerHTML=U(`
    <div class="stack-screen admin-screen">
      <h2 class="screen-title">관리자 모드</h2>
      <p class="screen-desc">기기 ID: ${fe()}</p>
      <p class="muted admin-note">${n}</p>
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
          ${a.map((m,s)=>`
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
        <button type="button" class="link-btn" id="adm-logout">관리자 로그아웃</button>
        ${ee()}
      </div>
      ${re("ADMIN")}
    </div>
  `),J(p);let r=We();async function l(){const m=p.querySelector("#adm-logs"),s=p.querySelector("#adm-log-count");m&&(m.innerHTML='<p class="muted">불러오는 중…</p>');const w=await on();if(r=w.logs,s&&(s.textContent=`(${r.length} · ${w.source}${w.error?" · 오류":""})`),!!m){if(r.length===0){m.innerHTML='<p class="muted">아직 기록이 없습니다.</p>';return}m.innerHTML=r.slice(0,120).map(S=>{const $=[S.displayName,S.studentId,S.account||S.deviceId].filter(Boolean).join(" · ");return`
      <article class="admin-log-item">
        <header>${V($)} · ${V(S.type)} · ${ea(S.at)}</header>
        <p>${V(S.message||"")}</p>
        ${S.detail?`<pre>${V(typeof S.detail=="string"?S.detail:JSON.stringify(S.detail,null,0))}</pre>`:""}
      </article>
    `}).join("")}}l(),(c=p.querySelector("#adm-refresh-logs"))==null||c.addEventListener("click",()=>l()),(g=p.querySelector("#adm-save"))==null||g.addEventListener("click",async()=>{var $,k;const m=Number(($=p.querySelector("#adm-unlock"))==null?void 0:$.value),s=!!((k=p.querySelector("#adm-free-games"))!=null&&k.checked),w=[...p.querySelectorAll('[data-scale="std"]')].map(b=>({letter:b.dataset.letter,min:Number(b.value)||0})),S=[...p.querySelectorAll('[data-scale="arts"]')].map(b=>({letter:b.dataset.letter,min:Number(b.value)||0}));sn({restUnlockUses:Number.isFinite(m)&&m>0?m:8,freeGames:s,standardScale:w,artsScale:S}),window.alert(q()?"설정을 저장했고 클라우드에도 올렸습니다.":"설정을 이 기기에 저장했습니다. (Firebase 미설정)"),I("admin")}),(u=p.querySelector("#adm-feedback-save"))==null||u.addEventListener("click",()=>{var s,w;const m=(w=(s=p.querySelector("#adm-feedback"))==null?void 0:s.value)==null?void 0:w.trim();if(!m){window.alert("내용을 입력하세요.");return}z({type:"game_feedback",message:m}),window.alert("피드백을 저장했습니다."),I("admin")}),(v=p.querySelector("#adm-export"))==null||v.addEventListener("click",async()=>{const m=dn(r);try{await navigator.clipboard.writeText(m),window.alert("기록이 클립보드에 복사되었습니다.")}catch{window.prompt("아래 내용을 복사하세요",m)}}),(f=p.querySelector("#adm-clear-logs"))==null||f.addEventListener("click",async()=>{window.confirm("로컬+클라우드 활동 기록을 비울까요?")&&(await cn({cloud:!0}),I("admin"))}),(o=p.querySelector("#adm-logout"))==null||o.addEventListener("click",()=>{rn(),window.alert("관리자 모드가 종료되었습니다."),I("main")})}function V(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function ea(e){try{const t=new Date(e);return`${t.getMonth()+1}/${t.getDate()} ${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`}catch{return e}}function ta(){const e=me(),t=pt();p.innerHTML=U(`
    <div class="stack-screen grade-screen">
      ${Z()}
      <h2 class="screen-title">자신의 학년을 선택하세요</h2>
      <div class="grade-list">
        <button type="button" class="grade-btn grade-1" data-action="pick-grade-1">1학년</button>
        <button type="button" class="grade-btn grade-2" data-action="pick-grade-2">2학년</button>
        <button type="button" class="grade-btn grade-3" data-action="pick-grade-3">3학년</button>
      </div>
      ${e?'<button type="button" class="rest-btn" data-action="rest">휴식 · 미니게임</button>':`<p class="unlock-hint">${t}</p>`}
      ${ee()}
      ${re(R.subtitle)}
    </div>
  `),J(p)}function na({grade:e}){if(!e||!ue(e)){I("grade");return}O=e;const t=ue(e),a=wn(e);p.innerHTML=U(`
    <div class="stack-screen ${Lt(e)}">
      ${Z()}
      <h2 class="screen-title">${t.label} 과목 선택</h2>
      ${t.note?`<p class="screen-note">${t.note}</p>`:""}
      ${St()}
      <div class="subject-list">
        ${a.map(i=>`<button type="button" class="subject-btn" data-action="pick-subject-${encodeURIComponent(i)}">${i}</button>`).join("")}
      </div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="grade">학년 선택으로</button>
        ${ee()}
      </div>
      ${re(R.subtitle)}
    </div>
  `),J(p),$t(p)}function aa({grade:e,subject:t,semester:a}){if(!e||!t||!a){I("subject",{grade:O});return}O=e,X=t,H=a;const i=ue(e),n=ht(e,t),r=vn(e,t,a),l=tt(e,t,a),c={},g=n.length>1?`<div class="semester-tabs">
          ${n.map(o=>`<button type="button" class="semester-tab ${o===a?"active":""}" data-action="pick-semester-${o}">${tt(e,t,o)}</button>`).join("")}
        </div>`:`<p class="semester-only">${l}</p>`;p.innerHTML=U(`
    <div class="stack-screen calculator-screen ${Lt(e)}">
      ${Z("globe globe-small")}
      <h2 class="screen-title subject-title">${t}</h2>
      <p class="screen-desc">${i.label} · ${l}${Je(t)?" · 예체능(A·B·C)":" · 일반(A~E)"}</p>
      ${St(t)}
      ${g}
      <form id="calc-form" class="calc-form"></form>
      <button type="submit" form="calc-form" class="btn-calc">계산하기</button>
      <div id="calc-result" class="calc-result hidden"></div>
      <div class="nav-row">
        <button type="button" class="link-btn" data-action="subject">과목 선택으로</button>
        ${ee()}
      </div>
      ${re(R.subtitle)}
    </div>
  `);const u=p.querySelector("#calc-form");let v="";for(const o of r){if(o.kind!==v){v=o.kind;const s=document.createElement("h3");s.className="section-heading",s.textContent=o.kind==="exam"?"지필고사":"수행평가",u.appendChild(s)}const m=document.createElement("label");m.className="score-row",m.innerHTML=`
      <span>${o.label} <em>${o.weight}%</em></span>
      <input type="number" min="0" max="100" step="0.1" inputmode="decimal"
        name="${o.key}" placeholder="점수" />
    `,u.appendChild(m)}const f=p.querySelector("#calc-result");u.addEventListener("submit",o=>{var M,T;o.preventDefault();const m=new FormData(u);for(const A of r)c[A.key]=m.get(A.key);const s=Cn(r,c,t);if(!s){f.classList.remove("hidden"),f.innerHTML='<p class="warn">최소 1개 이상 점수를 입력하세요.</p>';return}const w=mn(t);z({type:"calc",message:`${e}학년 ${t} (${l}) → ${s.rounded}점 ${oe(s.letter)}`,detail:{grade:e,subject:t,semester:a,scores:c,rounded:s.rounded,letter:s.letter,average:s.average}});let S="";((M=s.needed)==null?void 0:M.needed)!=null?S=`<p>상위 <strong>${oe(s.needed.targetLetter)}</strong>까지 남은 항목 평균 <strong>${s.needed.needed}점</strong> 이상</p>`:(T=s.needed)!=null&&T.message&&(S=`<p>${s.needed.message}</p>`);let $="";if(s.projection.remainingCount>0&&s.letter===s.projLetter){const A=oe(s.letter);let D="";s.confirmMin&&(s.confirmMin.minScore<=0?D=`<p>남은 항목이 <strong>0점</strong>이어도 ${A} 유지</p>`:D=`<p>남은 항목 각각 최소 <strong>${s.confirmMin.minScore}점</strong> 이상이면 ${A} 유지</p>`),$=`
        <p><strong>${A} 확정입니다.</strong></p>
        ${D}
      `}let k="";In(s)&&(k=`<p class="cheer-msg">${Mn()}</p>`);let b="";w.justUnlocked?b=`<p class="success">서로 다른 과목 ${ve}개 달성! 학년 선택에서 휴식 미니게임 이용</p>`:me()?b='<p class="success">휴식 미니게임 이용 가능 (학년 선택 화면)</p>':w.isNew?b=`<p class="muted">${pt()}</p>`:b='<p class="muted">이미 계산한 과목입니다. 다른 과목을 계산하면 해금에 가까워져요.</p>',f.classList.remove("hidden"),f.innerHTML=`
      <h3>${t} 결과</h3>
      <p>총점(반올림) <strong>${s.rounded}점</strong> · <strong>${oe(s.letter)}</strong></p>
      <p class="muted">가중 평균 ${s.average.toFixed(1)}점</p>
      <p>남은 항목 100점 시 <strong>${s.projRounded}점</strong> · <strong>${oe(s.projLetter)}</strong></p>
      ${$}
      ${k}
      ${S}
      ${b}
    `}),J(p),$t(p)}function ia(){if(!me()){I("grade");return}p.innerHTML=U(`
    <div class="stack-screen">
      ${Z()}
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
      ${re(R.subtitle)}
    </div>
  `),J(p)}function Te(e){if(!me()){I("grade");return}z({type:"game_open",message:`미니게임 시작: ${e}${Ne()?" (관리자)":""}`,detail:{type:e}}),p.innerHTML=U('<div id="game-root"></div>',"game-screen");const t=p.querySelector("#game-root"),a={onBack:()=>I("rest"),onMain:()=>{O=null,X=null,H=null,I("main")}};e==="dart"?ie=On(t,a)??null:e==="cricket"?ie=Un(t,a)??null:e==="breakout"&&(ie=Wn(t,a)??null)}
