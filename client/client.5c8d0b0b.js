function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a;function c(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function l(t,n,s,r){return t[1]&&r?e(s.ctx.slice(),t[1](r(n))):s.ctx}function u(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function f(t){return null==t?"":t}let h,d,m=!1;function p(t,e,n,s){for(;t<e;){const r=t+(e-t>>1);n(r)<=s?t=r+1:e=r}return t}function g(t,e){if(m){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const s=e[n];void 0!==s.claim_order&&t.push(s)}e=t}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let r=0;for(let t=0;t<e.length;t++){const o=e[t].claim_order,i=(r>0&&e[n[r]].claim_order<=o?r+1:p(1,r,(t=>e[n[t]].claim_order),o))-1;s[t]=n[i]+1;const a=i+1;n[a]=t,r=Math.max(a,r)}const o=[],i=[];let a=e.length-1;for(let t=n[r]+1;0!=t;t=s[t-1]){for(o.push(e[t-1]);a>=t;a--)i.push(e[a]);a--}for(;a>=0;a--)i.push(e[a]);o.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<o.length&&i[e].claim_order>=o[n].claim_order;)n++;const s=n<o.length?o[n]:null;t.insertBefore(i[e],s)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function _(t,e,n){m&&!n?g(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function $(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function x(){return E(" ")}function S(){return E("")}function T(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function A(t){return function(e){return e.preventDefault(),t.call(this,e)}}function N(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function L(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)null==e[s]?t.removeAttribute(s):"style"===s?t.style.cssText=e[s]:"__value"===s?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:N(t,s,e[s])}function I(t){return Array.from(t.childNodes)}function P(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function R(t,e,n,s,r=!1){P(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const e=n(o);return void 0===e?t.splice(s,1):t[s]=e,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const e=n(o);return void 0===e?t.splice(s,1):t[s]=e,r?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return s()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function k(t,e,n,s){return R(t,(t=>t.nodeName===e),(t=>{const e=[];for(let s=0;s<t.attributes.length;s++){const r=t.attributes[s];n[r.name]||e.push(r.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>s(e)))}function H(t,e,n){return k(t,e,n,w)}function C(t,e,n){return k(t,e,n,y)}function U(t,e){return R(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>E(e)),!0)}function O(t){return U(t," ")}function G(t,e,n){for(let s=n;s<t.length;s+=1){const n=t[s];if(8===n.nodeType&&n.textContent.trim()===e)return s}return t.length}function j(t){const e=G(t,"HTML_TAG_START",0),n=G(t,"HTML_TAG_END",e);if(e===n)return new V;P(t);const s=t.splice(e,n+1);v(s[0]),v(s[s.length-1]);const r=s.slice(1,s.length-1);for(const e of r)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new V(r)}function M(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function D(t,e){t.value=null==e?"":e}function z(){if(void 0===h){h=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){h=!0}}return h}function B(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=w("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=z();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=T(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{r=T(n.contentWindow,"resize",e)}),function(t,e){t.appendChild(e)}(t,n),()=>{(s||r&&n.contentWindow)&&r(),v(n)}}function q(t,e=document.body){return Array.from(e.querySelectorAll(t))}class V extends class{constructor(){this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.e=w(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)b(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(v)}}{constructor(t){super(),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)_(this.t,this.n[e],t)}}function W(t){d=t}function K(){if(!d)throw new Error("Function called outside component initialization");return d}function J(t){K().$$.on_mount.push(t)}function F(t){K().$$.after_update.push(t)}function Y(t){K().$$.on_destroy.push(t)}const X=[],Q=[],Z=[],tt=[],et=Promise.resolve();let nt=!1;function st(t){Z.push(t)}let rt=!1;const ot=new Set;function it(){if(!rt){rt=!0;do{for(let t=0;t<X.length;t+=1){const e=X[t];W(e),at(e.$$)}for(W(null),X.length=0;Q.length;)Q.pop()();for(let t=0;t<Z.length;t+=1){const e=Z[t];ot.has(e)||(ot.add(e),e())}Z.length=0}while(X.length);for(;tt.length;)tt.pop()();nt=!1,rt=!1,ot.clear()}}function at(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(st)}}const ct=new Set;let lt;function ut(){lt={r:0,c:[],p:lt}}function ft(){lt.r||r(lt.c),lt=lt.p}function ht(t,e){t&&t.i&&(ct.delete(t),t.i(e))}function dt(t,e,n,s){if(t&&t.o){if(ct.has(t))return;ct.add(t),lt.c.push((()=>{ct.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function mt(t,e){const n={},s={},r={$$scope:1};let o=t.length;for(;o--;){const i=t[o],a=e[o];if(a){for(const t in i)t in a||(s[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[o]=a}else for(const t in i)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function pt(t){return"object"==typeof t&&null!==t?t:{}}function gt(t){t&&t.c()}function bt(t,e){t&&t.l(e)}function _t(t,e,s,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,s),i||st((()=>{const e=c.map(n).filter(o);l?l.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(st)}function vt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function $t(t,e){-1===t.$$.dirty[0]&&(X.push(t),nt||(nt=!0,et.then(it)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function wt(e,n,o,i,a,c,l,u=[-1]){const f=d;W(e);const h=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};l&&l(h.root);let p=!1;if(h.ctx=o?o(e,n.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return h.ctx&&a(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),p&&$t(e,t)),n})):[],h.update(),p=!0,r(h.before_update),h.fragment=!!i&&i(h.ctx),n.target){if(n.hydrate){m=!0;const t=I(n.target);h.fragment&&h.fragment.l(t),t.forEach(v)}else h.fragment&&h.fragment.c();n.intro&&ht(e.$$.fragment),_t(e,n.target,n.anchor,n.customElement),m=!1,it()}W(f)}class yt{$destroy(){vt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Et=[];function xt(e,n=t){let s;const r=new Set;function o(t){if(i(e,t)&&(e=t,s)){const t=!Et.length;for(const t of r)t[1](),Et.push(t,e);if(t){for(let t=0;t<Et.length;t+=2)Et[t][0](Et[t+1]);Et.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(i,a=t){const c=[i,a];return r.add(c),1===r.size&&(s=n(o)||t),i(e),()=>{r.delete(c),0===r.size&&(s(),s=null)}}}}const St={};var Tt={owner:"triopsi",repo:"statuspage",sites:[{name:"Triopsi Hosting Webseite",url:"https://triopsi:$WEBSITE_KEY@triopsi-hosting.com"},{name:"WEB01",url:"https://admin.triopsi-hosting.com"},{name:"WEB02",url:"https://web02.triopsi-hosting.com:8443"},{name:"Kundeninterface",url:"https://cp.triopsi-hosting.com",icon:"https://assets.triopsi-hosting.com/images/logo/favicon-96x96.ico"},{name:"Webmail-01",url:"https://webmail.triopsi-hosting.com"},{name:"Host-01",url:"https://host1.phoenix.com.de:8006",__dangerous__insecure:!0},{name:"Host-02",url:"https://host2.phoenix.com.de:8006",__dangerous__insecure:!0},{name:"Host-03",url:"https://host3.phoenix.com.de:8006",__dangerous__insecure:!0},{name:"Host-04",url:"https://host4.phoenix.com.de:8006",__dangerous__insecure:!0},{name:"Host-05",url:"https://host5.phoenix.com.de:8006",__dangerous__insecure:!0}],"status-website":{theme:"ocean",favicon:"https://assets.triopsi-hosting.com/images/logo/favicon-32x32.png",cname:"status.triopsi-hosting.com",logoUrl:"https://raw.githubusercontent.com/triopsi/statuspage/master/assets/triopsi-logo-light.svg",name:"Triopsi-Hosting Statusseite",introTitle:"**System-Überwachung**",introMessage:"Hier werden alle Sub Systeme von Triopsi Hosting überwacht.",navbar:[{title:"Status",href:"/"},{title:"Triopsi-Hosting",href:"https://triopsi-hosting.com"}]},assignees:["triopsi"],i18n:{activeIncidents:"Aktive Vorfälle",allSystemsOperational:"Alle Systeme sind betriebsbereit",incidentReport:"Vorfall #$NUMBER report →",activeIncidentSummary:"Geöffnet am $DATE mit $POSTS beiträgen",incidentTitle:"Vorfall $NUMBER Details",incidentDetails:"Vorfall Details",incidentFixed:"Fixed",incidentOngoing:"Laufend",incidentOpenedAt:"Geöffnet am",incidentClosedAt:"Geschlossen am",incidentSubscribe:"Abonnieren Sie für Updates",incidentViewOnGitHub:"Auf GitHub anschauen",incidentCommentSummary:"Veröffentlicht am $DATE von $AUTHOR",incidentBack:"← Zurück zu allen Vorfällen",pastIncidents:"Frühere Vorfälle",pastIncidentsResolved:"In $MINUTES Minuten mit $POSTS beiträgen gelöst",liveStatus:"Live Status",overallUptime:"Gesamtverfügbarkeit: $UPTIME",overallUptimeTitle:"Gesamtverfügbarkeit",averageResponseTime:"Durchschnittliche Reaktionszeit: $TIMEms",averageResponseTimeTitle:"Durchschnittliche Antwort",sevelDayResponseTime:"7-tages Reaktionszeit",responseTimeMs:"Reaktionszeit (ms)",up:"Up",down:"Down",degraded:"Verschlechtert",ms:"ms",loading:"Laden",navGitHub:"GitHub",footer:"Diese Seite wurde automatisch erstellt. Powered by [Upptime](https://upptime.js.org) | [Impressum](https://triopsi-hosting.com/impressum/) | [Support](mailto:support@triopsi.com)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"Was bedeutet dieser Fehler?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Gehen Sie zur Homepage",pastScheduledMaintenance:"Vergangene geplante Wartung",scheduledMaintenance:"Geplante Wartung",scheduledMaintenanceSummaryStarted:"Gestartet am $DATE für $DURATION minuten",scheduledMaintenanceSummaryStarts:"Startet am $DATE für $DURATION minuten",startedAt:"Gestartet am",startsAt:"Startet am",duration:"Dauer",durationMin:"$DURATION minuten",incidentCompleted:"Abgeschlossen",incidentScheduled:"Geplant"},path:"https://status.triopsi-hosting.com"};function At(t,e,n){const s=t.slice();return s[1]=e[n],s}function Nt(e){let n,s,r,o=Tt["status-website"]&&!Tt["status-website"].hideNavLogo&&function(e){let n,s;return{c(){n=w("img"),this.h()},l(t){n=H(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){N(n,"alt",""),c(n.src,s=Tt["status-website"].logoUrl)||N(n,"src",s),N(n,"class","svelte-a08hsz")},m(t,e){_(t,n,e)},p:t,d(t){t&&v(n)}}}(),i=Tt["status-website"]&&!Tt["status-website"].hideNavTitle&&function(e){let n,s,r=Tt["status-website"].name+"";return{c(){n=w("div"),s=E(r)},l(t){n=H(t,"DIV",{});var e=I(n);s=U(e,r),e.forEach(v)},m(t,e){_(t,n,e),g(n,s)},p:t,d(t){t&&v(n)}}}();return{c(){n=w("div"),s=w("a"),o&&o.c(),r=x(),i&&i.c(),this.h()},l(t){n=H(t,"DIV",{});var e=I(n);s=H(e,"A",{href:!0,class:!0});var a=I(s);o&&o.l(a),r=O(a),i&&i.l(a),a.forEach(v),e.forEach(v),this.h()},h(){N(s,"href",Tt["status-website"].logoHref||Tt.path),N(s,"class","logo svelte-a08hsz")},m(t,e){_(t,n,e),g(n,s),o&&o.m(s,null),g(s,r),i&&i.m(s,null)},p(t,e){Tt["status-website"]&&!Tt["status-website"].hideNavLogo&&o.p(t,e),Tt["status-website"]&&!Tt["status-website"].hideNavTitle&&i.p(t,e)},d(t){t&&v(n),o&&o.d(),i&&i.d()}}}function Lt(t){let e,n,s,r,o,i,a=t[1].title+"";return{c(){e=w("li"),n=w("a"),s=E(a),i=x(),this.h()},l(t){e=H(t,"LI",{});var r=I(e);n=H(r,"A",{"aria-current":!0,href:!0,class:!0});var o=I(n);s=U(o,a),o.forEach(v),i=O(r),r.forEach(v),this.h()},h(){N(n,"aria-current",r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),N(n,"href",o=t[1].href.replace("$OWNER",Tt.owner).replace("$REPO",Tt.repo)),N(n,"class","svelte-a08hsz")},m(t,r){_(t,e,r),g(e,n),g(n,s),g(e,i)},p(t,e){1&e&&r!==(r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&N(n,"aria-current",r)},d(t){t&&v(e)}}}function It(e){let n,s,r,o,i,a=Tt["status-website"]&&Tt["status-website"].logoUrl&&Nt(),c=Tt["status-website"]&&Tt["status-website"].navbar&&function(t){let e,n=Tt["status-website"].navbar,s=[];for(let e=0;e<n.length;e+=1)s[e]=Lt(At(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=S()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=S()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);_(t,e,n)},p(t,r){if(1&r){let o;for(n=Tt["status-website"].navbar,o=0;o<n.length;o+=1){const i=At(t,n,o);s[o]?s[o].p(i,r):(s[o]=Lt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){$(s,t),t&&v(e)}}}(e),l=Tt["status-website"]&&Tt["status-website"].navbarGitHub&&!Tt["status-website"].navbar&&function(e){let n,s,r,o=Tt.i18n.navGitHub+"";return{c(){n=w("li"),s=w("a"),r=E(o),this.h()},l(t){n=H(t,"LI",{});var e=I(n);s=H(e,"A",{href:!0,class:!0});var i=I(s);r=U(i,o),i.forEach(v),e.forEach(v),this.h()},h(){N(s,"href",`https://github.com/${Tt.owner}/${Tt.repo}`),N(s,"class","svelte-a08hsz")},m(t,e){_(t,n,e),g(n,s),g(s,r)},p:t,d(t){t&&v(n)}}}();return{c(){n=w("nav"),s=w("div"),a&&a.c(),r=x(),o=w("ul"),c&&c.c(),i=x(),l&&l.c(),this.h()},l(t){n=H(t,"NAV",{class:!0});var e=I(n);s=H(e,"DIV",{class:!0});var u=I(s);a&&a.l(u),r=O(u),o=H(u,"UL",{class:!0});var f=I(o);c&&c.l(f),i=O(f),l&&l.l(f),f.forEach(v),u.forEach(v),e.forEach(v),this.h()},h(){N(o,"class","svelte-a08hsz"),N(s,"class","container svelte-a08hsz"),N(n,"class","svelte-a08hsz")},m(t,e){_(t,n,e),g(n,s),a&&a.m(s,null),g(s,r),g(s,o),c&&c.m(o,null),g(o,i),l&&l.m(o,null)},p(t,[e]){Tt["status-website"]&&Tt["status-website"].logoUrl&&a.p(t,e),Tt["status-website"]&&Tt["status-website"].navbar&&c.p(t,e),Tt["status-website"]&&Tt["status-website"].navbarGitHub&&!Tt["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&v(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function Pt(t,e,n){let{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment)},[s]}class Rt extends yt{constructor(t){super(),wt(this,t,Pt,It,i,{segment:0})}}var kt={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ht(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ct(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ut(t,e){var n,s,r,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},f=0;function h(t){var e=kt[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function d(){for(var t="";c.length;)t+=h(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=a.exec(t);)s=t.substring(f,r.index),f=a.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((i=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+Ht(Ct(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=r[6])?(i.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=Ut(Ht(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):r[8]?n='<img src="'+Ct(r[8])+'" alt="'+Ct(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+Ct(r[11]||u[s.toLowerCase()])+'">'),n=d()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(i="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+Ut(r[12]||r[15],u)+"</"+i+">":r[16]?n="<code>"+Ct(r[16])+"</code>":(r[17]||r[1])&&(n=h(r[17]||"--"))),l+=s,l+=n;return(l+t.substring(f)+d()).replace(/^\n+|\n+$/g,"")}function Ot(t,e,n){const s=t.slice();return s[3]=e[n],s}function Gt(t,e,n){const s=t.slice();return s[3]=e[n],s}function jt(t,e,n){const s=t.slice();return s[8]=e[n],s}function Mt(e){let n;return{c(){n=w("link"),this.h()},l(t){n=H(t,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",`${Tt.path}/themes/${(Tt["status-website"]||{}).theme||"light"}.css`)},m(t,e){_(t,n,e)},p:t,d(t){t&&v(n)}}}function Dt(e){let n;return{c(){n=w("link"),this.h()},l(t){n=H(t,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",(Tt["status-website"]||{}).themeUrl)},m(t,e){_(t,n,e)},p:t,d(t){t&&v(n)}}}function zt(e){let n,s;return{c(){n=w("script"),this.h()},l(t){n=H(t,"SCRIPT",{src:!0}),I(n).forEach(v),this.h()},h(){c(n.src,s=e[8].src)||N(n,"src",s),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){_(t,n,e)},p:t,d(t){t&&v(n)}}}function Bt(e){let n;return{c(){n=w("link"),this.h()},l(t){n=H(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){N(n,"rel",e[3].rel),N(n,"href",e[3].href),N(n,"media",e[3].media)},m(t,e){_(t,n,e)},p:t,d(t){t&&v(n)}}}function qt(e){let n;return{c(){n=w("meta"),this.h()},l(t){n=H(t,"META",{name:!0,content:!0}),this.h()},h(){N(n,"name",e[3].name),N(n,"content",e[3].content)},m(t,e){_(t,n,e)},p:t,d(t){t&&v(n)}}}function Vt(e){let n,s,r,o,i,a,c,u,f,h,d,m,p,b,y,E,T,A,L=Ut(Tt.i18n.footer.replace(/\$REPO/,`https://github.com/${Tt.owner}/${Tt.repo}`))+"",P=(Tt["status-website"]||{}).customHeadHtml&&function(e){let n,s,r=(Tt["status-website"]||{}).customHeadHtml+"";return{c(){n=new V,s=S(),this.h()},l(t){n=j(t),s=S(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),_(t,s,e)},p:t,d(t){t&&v(s),t&&n.d()}}}();let R=((Tt["status-website"]||{}).themeUrl?Dt:Mt)(e),k=(Tt["status-website"]||{}).scripts&&function(t){let e,n=(Tt["status-website"]||{}).scripts,s=[];for(let e=0;e<n.length;e+=1)s[e]=zt(jt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=S()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=S()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);_(t,e,n)},p(t,r){if(0&r){let o;for(n=(Tt["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=jt(t,n,o);s[o]?s[o].p(i,r):(s[o]=zt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){$(s,t),t&&v(e)}}}(e),C=(Tt["status-website"]||{}).links&&function(t){let e,n=(Tt["status-website"]||{}).links,s=[];for(let e=0;e<n.length;e+=1)s[e]=Bt(Gt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=S()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=S()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);_(t,e,n)},p(t,r){if(0&r){let o;for(n=(Tt["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=Gt(t,n,o);s[o]?s[o].p(i,r):(s[o]=Bt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){$(s,t),t&&v(e)}}}(e),U=(Tt["status-website"]||{}).metaTags&&function(t){let e,n=(Tt["status-website"]||{}).metaTags,s=[];for(let e=0;e<n.length;e+=1)s[e]=qt(Ot(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=S()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=S()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);_(t,e,n)},p(t,r){if(0&r){let o;for(n=(Tt["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Ot(t,n,o);s[o]?s[o].p(i,r):(s[o]=qt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){$(s,t),t&&v(e)}}}(e),G=Tt["status-website"].css&&function(e){let n,s,r=`<style>${Tt["status-website"].css}</style>`;return{c(){n=new V,s=S(),this.h()},l(t){n=j(t),s=S(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),_(t,s,e)},p:t,d(t){t&&v(s),t&&n.d()}}}(),M=Tt["status-website"].js&&function(e){let n,s,r=`<script>${Tt["status-website"].js}<\/script>`;return{c(){n=new V,s=S(),this.h()},l(t){n=j(t),s=S(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),_(t,s,e)},p:t,d(t){t&&v(s),t&&n.d()}}}(),D=(Tt["status-website"]||{}).customBodyHtml&&function(e){let n,s,r=(Tt["status-website"]||{}).customBodyHtml+"";return{c(){n=new V,s=S(),this.h()},l(t){n=j(t),s=S(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),_(t,s,e)},p:t,d(t){t&&v(s),t&&n.d()}}}();m=new Rt({props:{segment:e[0]}});const z=e[2].default,B=function(t,e,n,s){if(t){const r=l(t,e,n,s);return t[0](r)}}(z,e,e[1],null);return{c(){P&&P.c(),n=S(),R.c(),s=w("link"),r=w("link"),o=w("link"),k&&k.c(),i=S(),C&&C.c(),a=S(),U&&U.c(),c=S(),G&&G.c(),u=S(),M&&M.c(),f=S(),h=x(),D&&D.c(),d=x(),gt(m.$$.fragment),p=x(),b=w("main"),B&&B.c(),y=x(),E=w("footer"),T=w("p"),this.h()},l(t){const e=q('[data-svelte="svelte-ri9y7q"]',document.head);P&&P.l(e),n=S(),R.l(e),s=H(e,"LINK",{rel:!0,href:!0}),r=H(e,"LINK",{rel:!0,type:!0,href:!0}),o=H(e,"LINK",{rel:!0,type:!0,href:!0}),k&&k.l(e),i=S(),C&&C.l(e),a=S(),U&&U.l(e),c=S(),G&&G.l(e),u=S(),M&&M.l(e),f=S(),e.forEach(v),h=O(t),D&&D.l(t),d=O(t),bt(m.$$.fragment,t),p=O(t),b=H(t,"MAIN",{class:!0});var l=I(b);B&&B.l(l),l.forEach(v),y=O(t),E=H(t,"FOOTER",{class:!0});var g=I(E);T=H(g,"P",{}),I(T).forEach(v),g.forEach(v),this.h()},h(){N(s,"rel","stylesheet"),N(s,"href",`${Tt.path}/global.css`),N(r,"rel","icon"),N(r,"type","image/svg"),N(r,"href",(Tt["status-website"]||{}).faviconSvg||(Tt["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),N(o,"rel","icon"),N(o,"type","image/png"),N(o,"href",(Tt["status-website"]||{}).favicon||"/logo-192.png"),N(b,"class","container"),N(E,"class","svelte-jbr799")},m(t,e){P&&P.m(document.head,null),g(document.head,n),R.m(document.head,null),g(document.head,s),g(document.head,r),g(document.head,o),k&&k.m(document.head,null),g(document.head,i),C&&C.m(document.head,null),g(document.head,a),U&&U.m(document.head,null),g(document.head,c),G&&G.m(document.head,null),g(document.head,u),M&&M.m(document.head,null),g(document.head,f),_(t,h,e),D&&D.m(t,e),_(t,d,e),_t(m,t,e),_(t,p,e),_(t,b,e),B&&B.m(b,null),_(t,y,e),_(t,E,e),g(E,T),T.innerHTML=L,A=!0},p(t,[e]){(Tt["status-website"]||{}).customHeadHtml&&P.p(t,e),R.p(t,e),(Tt["status-website"]||{}).scripts&&k.p(t,e),(Tt["status-website"]||{}).links&&C.p(t,e),(Tt["status-website"]||{}).metaTags&&U.p(t,e),Tt["status-website"].css&&G.p(t,e),Tt["status-website"].js&&M.p(t,e),(Tt["status-website"]||{}).customBodyHtml&&D.p(t,e);const n={};1&e&&(n.segment=t[0]),m.$set(n),B&&B.p&&(!A||2&e)&&function(t,e,n,s,r,o){if(r){const i=l(e,n,s,o);t.p(i,r)}}(B,z,t,t[1],A?function(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}(z,t[1],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[1]),null)},i(t){A||(ht(m.$$.fragment,t),ht(B,t),A=!0)},o(t){dt(m.$$.fragment,t),dt(B,t),A=!1},d(t){P&&P.d(t),v(n),R.d(t),v(s),v(r),v(o),k&&k.d(t),v(i),C&&C.d(t),v(a),U&&U.d(t),v(c),G&&G.d(t),v(u),M&&M.d(t),v(f),t&&v(h),D&&D.d(t),t&&v(d),vt(m,t),t&&v(p),t&&v(b),B&&B.d(t),t&&v(y),t&&v(E)}}}function Wt(t,e,n){let{$$slots:s={},$$scope:r}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,r=t.$$scope)},[o,r,s]}class Kt extends yt{constructor(t){super(),wt(this,t,Wt,Vt,i,{segment:0})}}function Jt(t){let e,n,s=t[1].stack+"";return{c(){e=w("pre"),n=E(s)},l(t){e=H(t,"PRE",{});var r=I(e);n=U(r,s),r.forEach(v)},m(t,s){_(t,e,s),g(e,n)},p(t,e){2&e&&s!==(s=t[1].stack+"")&&M(n,s)},d(t){t&&v(e)}}}function Ft(e){let n,s,r,o,i,a,c,l,u,f=e[1].message+"";document.title=n=e[0];let h=e[2]&&e[1].stack&&Jt(e);return{c(){s=x(),r=w("h1"),o=E(e[0]),i=x(),a=w("p"),c=E(f),l=x(),h&&h.c(),u=S(),this.h()},l(t){q('[data-svelte="svelte-1moakz"]',document.head).forEach(v),s=O(t),r=H(t,"H1",{class:!0});var n=I(r);o=U(n,e[0]),n.forEach(v),i=O(t),a=H(t,"P",{class:!0});var d=I(a);c=U(d,f),d.forEach(v),l=O(t),h&&h.l(t),u=S(),this.h()},h(){N(r,"class","svelte-17w3omn"),N(a,"class","svelte-17w3omn")},m(t,e){_(t,s,e),_(t,r,e),g(r,o),_(t,i,e),_(t,a,e),g(a,c),_(t,l,e),h&&h.m(t,e),_(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&M(o,t[0]),2&e&&f!==(f=t[1].message+"")&&M(c,f),t[2]&&t[1].stack?h?h.p(t,e):(h=Jt(t),h.c(),h.m(u.parentNode,u)):h&&(h.d(1),h=null)},i:t,o:t,d(t){t&&v(s),t&&v(r),t&&v(i),t&&v(a),t&&v(l),h&&h.d(t),t&&v(u)}}}function Yt(t,e,n){let{status:s}=e,{error:r}=e;return t.$$set=t=>{"status"in t&&n(0,s=t.status),"error"in t&&n(1,r=t.error)},[s,r,false]}class Xt extends yt{constructor(t){super(),wt(this,t,Yt,Ft,i,{status:0,error:1})}}function Qt(t){let n,s,r;const o=[t[4].props];var i=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return i&&(n=new i(a())),{c(){n&&gt(n.$$.fragment),s=S()},l(t){n&&bt(n.$$.fragment,t),s=S()},m(t,e){n&&_t(n,t,e),_(t,s,e),r=!0},p(t,e){const r=16&e?mt(o,[pt(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){ut();const t=n;dt(t.$$.fragment,1,0,(()=>{vt(t,1)})),ft()}i?(n=new i(a()),gt(n.$$.fragment),ht(n.$$.fragment,1),_t(n,s.parentNode,s)):n=null}else i&&n.$set(r)},i(t){r||(n&&ht(n.$$.fragment,t),r=!0)},o(t){n&&dt(n.$$.fragment,t),r=!1},d(t){t&&v(s),n&&vt(n,t)}}}function Zt(t){let e,n;return e=new Xt({props:{error:t[0],status:t[1]}}),{c(){gt(e.$$.fragment)},l(t){bt(e.$$.fragment,t)},m(t,s){_t(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.error=t[0]),2&n&&(s.status=t[1]),e.$set(s)},i(t){n||(ht(e.$$.fragment,t),n=!0)},o(t){dt(e.$$.fragment,t),n=!1},d(t){vt(e,t)}}}function te(t){let e,n,s,r;const o=[Zt,Qt],i=[];function a(t,e){return t[0]?0:1}return e=a(t),n=i[e]=o[e](t),{c(){n.c(),s=S()},l(t){n.l(t),s=S()},m(t,n){i[e].m(t,n),_(t,s,n),r=!0},p(t,r){let c=e;e=a(t),e===c?i[e].p(t,r):(ut(),dt(i[c],1,1,(()=>{i[c]=null})),ft(),n=i[e],n?n.p(t,r):(n=i[e]=o[e](t),n.c()),ht(n,1),n.m(s.parentNode,s))},i(t){r||(ht(n),r=!0)},o(t){dt(n),r=!1},d(t){i[e].d(t),t&&v(s)}}}function ee(t){let n,s;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[te]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);return n=new Kt({props:o}),{c(){gt(n.$$.fragment)},l(t){bt(n.$$.fragment,t)},m(t,e){_t(n,t,e),s=!0},p(t,[e]){const s=12&e?mt(r,[4&e&&{segment:t[2][0]},8&e&&pt(t[3].props)]):{};147&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(ht(n.$$.fragment,t),s=!0)},o(t){dt(n.$$.fragment,t),s=!1},d(t){vt(n,t)}}}function ne(t,e,n){let{stores:s}=e,{error:r}=e,{status:o}=e,{segments:i}=e,{level0:a}=e,{level1:c=null}=e,{notify:l}=e;var u,f;return F(l),u=St,f=s,K().$$.context.set(u,f),t.$$set=t=>{"stores"in t&&n(5,s=t.stores),"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[r,o,i,a,c,s,l]}class se extends yt{constructor(t){super(),wt(this,t,ne,ee,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const re=[],oe=[{js:()=>Promise.all([import("./index.e63009f7.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.94eed6db.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].b0a37f31.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].c2c05c77.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-bc1bb552.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.a57009af.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],ie=(ae=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:ae(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:ae(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ae;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function ce(t,e,n,s){return new(n||(n=Promise))((function(r,o){function i(t){try{c(s.next(t))}catch(t){o(t)}}function a(t){try{c(s.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}c((s=s.apply(t,e||[])).next())}))}function le(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let ue,fe=1;const he="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},de={};let me,pe;function ge(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function be(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(me))return null;let e=t.pathname.slice(me.length);if(""===e&&(e="/"),!re.some((t=>t.test(e))))for(let n=0;n<ie.length;n+=1){const s=ie[n],r=s.pattern.exec(e);if(r){const n=ge(t.search),o=s.parts[s.parts.length-1],i=o.params?o.params(r):{},a={host:location.host,path:e,query:n,params:i};return{href:t.href,route:s,match:r,page:a}}}}function _e(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=le(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(n?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=be(r);if(o){we(o,null,e.hasAttribute("sapper:noscroll"),r.hash),t.preventDefault(),he.pushState({id:ue},"",r.href)}}function ve(){return{x:pageXOffset,y:pageYOffset}}function $e(t){if(de[ue]=ve(),t.state){const e=be(new URL(location.href));e?we(e,t.state.id):location.href=location.href}else!function(t){fe=t}(fe+1),function(t){ue=t}(fe),he.replaceState({id:ue},"",location.href)}function we(t,e,n,s){return ce(this,void 0,void 0,(function*(){const r=!!e;if(r)ue=e;else{const t=ve();de[ue]=t,ue=e=++fe,de[ue]=n?t:{x:0,y:0}}if(yield pe(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=de[e];s&&(t=document.getElementById(s.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),de[ue]=n,n&&(r||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function ye(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Ee,xe=null;function Se(t){const e=le(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=be(new URL(t,ye(document)));if(e)xe&&t===xe.href||(xe={href:t,promise:ze(e)}),xe.promise}(e.href)}function Te(t){clearTimeout(Ee),Ee=setTimeout((()=>{Se(t)}),20)}function Ae(t,e={noscroll:!1,replaceState:!1}){const n=be(new URL(t,ye(document)));if(n){const s=we(n,null,e.noscroll);return he[e.replaceState?"replaceState":"pushState"]({id:ue},"",t),s}return location.href=t,new Promise((()=>{}))}const Ne="undefined"!=typeof __SAPPER__&&__SAPPER__;let Le,Ie,Pe,Re=!1,ke=[],He="{}";const Ce={page:function(t){const e=xt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let s;return e.subscribe((e=>{(void 0===s||n&&e!==s)&&t(s=e)}))}}}({}),preloading:xt(null),session:xt(Ne&&Ne.session)};let Ue,Oe,Ge;function je(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Me(t){return ce(this,void 0,void 0,(function*(){Le&&Ce.preloading.set(!0);const e=function(t){return xe&&xe.href===t.href?xe.promise:ze(t)}(t),n=Ie={},s=yield e,{redirect:r}=s;if(n===Ie)if(r)yield Ae(r.location,{replaceState:!0});else{const{props:e,branch:n}=s;yield De(n,e,je(e,t.page))}}))}function De(t,e,n){return ce(this,void 0,void 0,(function*(){Ce.page.set(n),Ce.preloading.set(!1),Le?Le.$set(e):(e.stores={page:{subscribe:Ce.page.subscribe},preloading:{subscribe:Ce.preloading.subscribe},session:Ce.session},e.level0={props:yield Pe},e.notify=Ce.page.notify,Le=new se({target:Ge,props:e,hydrate:!0})),ke=t,He=JSON.stringify(n.query),Re=!0,Oe=!1}))}function ze(t){return ce(this,void 0,void 0,(function*(){const{route:e,page:n}=t,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(r&&(r.statusCode!==t||r.location!==e))throw new Error("Conflicting redirects");r={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Pe){const t=()=>({});Pe=Ne.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Ue)}let a,c=1;try{const r=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map(((e,a)=>ce(this,void 0,void 0,(function*(){const f=s[a];if(function(t,e,n,s){if(s!==He)return!0;const r=ke[t];return!!r&&(e!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,f,l,r)&&(u=!0),o.segments[c]=s[a+1],!e)return{segment:f};const h=c++;let d;if(Oe||u||!ke[a]||ke[a].part!==e.i){u=!1;const{default:s,preload:r}=yield oe[e.i].js();let o;o=Re||!Ne.preloaded[a+1]?r?yield r.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ue):{}:Ne.preloaded[a+1],d={component:s,props:o,segment:f,match:l,part:e.i}}else d=ke[a];return o[`level${h}`]=d})))))}catch(t){o.error=t,o.status=500,a=[]}return{redirect:r,props:o,branch:a}}))}var Be,qe,Ve;Ce.session.subscribe((t=>ce(void 0,void 0,void 0,(function*(){if(Ue=t,!Re)return;Oe=!0;const e=be(new URL(location.href)),n=Ie={},{redirect:s,props:r,branch:o}=yield ze(e);n===Ie&&(s?yield Ae(s.location,{replaceState:!0}):yield De(o,r,je(r,e.page)))})))),Be={target:document.querySelector("#sapper")},qe=Be.target,Ge=qe,Ve=Ne.baseUrl,me=Ve,pe=Me,"scrollRestoration"in he&&(he.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{he.scrollRestoration="auto"})),addEventListener("load",(()=>{he.scrollRestoration="manual"})),addEventListener("click",_e),addEventListener("popstate",$e),addEventListener("touchstart",Se),addEventListener("mousemove",Te),Ne.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:s,preloaded:r,status:o,error:i}=Ne;Pe||(Pe=r&&r[0]);const a={error:i,status:o,session:s,level0:{props:Pe},level1:{props:{status:o,error:i},component:Xt},segments:r},c=ge(n);De([],a,{host:t,path:e,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;he.replaceState({id:fe},"",e);const n=be(new URL(location.href));if(n)return we(n,fe,!0,t)}));export{vt as A,T as B,r as C,Q as D,j as E,c as F,f as G,V as H,q as I,Ut as J,y as K,C as L,Ae as M,D as N,A as O,e as P,L as Q,mt as R,yt as S,F as T,Y as U,u as V,pt as W,st as X,B as Y,I as a,U as b,H as c,v as d,w as e,N as f,_ as g,g as h,wt as i,x as j,O as k,ut as l,dt as m,t as n,ft as o,ht as p,J as q,Tt as r,i as s,E as t,M as u,S as v,$ as w,gt as x,bt as y,_t as z};

import __inject_styles from './inject_styles.803b7e80.js';