import{_ as o,r as p,o as c,c as r,b as n,d as e,e as s,a as t}from"./app.a801a5dc.js";const l={},i=n("h1",{id:"javascript\u63A7\u5236\u7ED3\u6784",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#javascript\u63A7\u5236\u7ED3\u6784","aria-hidden":"true"},"#"),s(" JavaScript\u63A7\u5236\u7ED3\u6784")],-1),d={id:"for-of\u4E0Efor-in\u7684\u533A\u522B",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#for-of\u4E0Efor-in\u7684\u533A\u522B","aria-hidden":"true"},"#",-1),k=s(),h={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of#for...of%E4%B8%8Efor...in%E7%9A%84%E5%8C%BA%E5%88%AB",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"for...of",-1),f=s("\u4E0E"),m=n("code",null,"for...in",-1),g=s("\u7684\u533A\u522B"),v=n("p",null,[s("\u65E0\u8BBA\u662F"),n("code",null,"for...in"),s("\u8FD8\u662F"),n("code",null,"for...of"),s("\u8BED\u53E5\u90FD\u662F\u8FED\u4EE3\u4E00\u4E9B\u4E1C\u897F\u3002\u5B83\u4EEC\u4E4B\u95F4\u7684\u4E3B\u8981\u533A\u522B\u5728\u4E8E\u5B83\u4EEC\u7684\u8FED\u4EE3\u65B9\u5F0F\u3002")],-1),b={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"for...in",-1),w=s(" \u8BED\u53E5\u4EE5\u4EFB\u610F\u987A\u5E8F\u8FED\u4EE3\u5BF9\u8C61\u7684"),x={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties",target:"_blank",rel:"noopener noreferrer"},S=s("\u53EF\u679A\u4E3E\u5C5E\u6027"),y=s("\u3002"),J=n("code",null,"for...of",-1),z=s(" \u8BED\u53E5\u904D\u5386"),E={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_Generators#iterables",target:"_blank",rel:"noopener noreferrer"},N=s("\u53EF\u8FED\u4EE3\u5BF9\u8C61"),B=s("\u5B9A\u4E49\u8981\u8FED\u4EE3\u7684\u6570\u636E\u3002"),C=n("h2",{id:"for-of",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#for-of","aria-hidden":"true"},"#"),s(" for of")],-1),W=s("JavaScript \u4E5F\u8FD8\u5305\u62EC\u5176\u4ED6\u4E24\u79CD\u91CD\u8981\u7684 for \u5FAA\u73AF\uFF1A "),q={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of",target:"_blank",rel:"noopener noreferrer"},R=n("code",null,"for",-1),V=s("..."),A=n("code",null,"of",-1),I=t(`<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> value <span class="token keyword">of</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// do something with value</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="for-in" tabindex="-1"><a class="header-anchor" href="#for-in" aria-hidden="true">#</a> for in</h2>`,2),G=s("\u548C "),L={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in",target:"_blank",rel:"noopener noreferrer"},U=n("code",null,"for",-1),T=s("..."),D=n("code",null,"in",-1),F=s(" \uFF1A\u4E00\u822C\u7528\u4E8E\u904D\u5386\u5BF9\u8C61"),H=t(`<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> property <span class="token keyword">in</span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// do something with object property\u7528\u5BF9\u8C61\u5C5E\u6027\u505A\u4E9B\u4EC0\u4E48</span>
  <span class="token comment">//\u904D\u5386\u5BF9\u8C61</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7C7B\u4F3C\u5730\uFF0CJavaScript \u4E5F\u6709\u4E00\u4E2A\u7528\u4E8E\u6761\u4EF6\u8868\u8FBE\u5F0F\u7684\u4E09\u5143\u64CD\u4F5C\u7B26\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">var</span> allowed <span class="token operator">=</span> <span class="token punctuation">(</span>age <span class="token operator">&gt;</span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">&quot;yes&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;no&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// \u6761\u4EF6 ? \u6EE1\u8DB3\u6761\u4EF6\u6267\u884C\u7684\u4EE3\u7801 : \u4E0D\u6EE1\u8DB3\u6761\u4EF6\u6267\u884C\u7684\u4EE3\u7801</span>
</code></pre></div><h2 id="if\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#if\u8BED\u53E5" aria-hidden="true">#</a> if\u8BED\u53E5</h2><p>if\u8BED\u53E5\u6709\u4E09\u79CD\u4F7F\u7528\uFF1A\u5355\u5206\u652F\u3001\u53CC\u5206\u652F\u3001\u591A\u5206\u652F</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>\u6761\u4EF6<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	\u6EE1\u8DB3\u6761\u4EF6\u8981\u6267\u884C\u7684\u4EE3\u7801
<span class="token punctuation">}</span>
</code></pre></div><ol><li>\u62EC\u53F7\u5185\u7684\u6761\u4EF6\u4E3Atrue\u65F6\uFF0C\u8FDB\u5165\u5927\u62EC\u53F7\u91CC\u6267\u884C\u4EE3\u7801</li><li>\u5C0F\u62EC\u53F7\u5185\u7684\u7ED3\u679C\u82E5\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B\u65F6\uFF0C\u4F1A\u53D1\u751F\u9690\u5F0F\u8F6C\u6362\u8F6C\u4E3A\u5E03\u5C14\u7C7B\u578B</li></ol><h2 id="\u4E09\u5143\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E09\u5143\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> \u4E09\u5143\u8868\u8FBE\u5F0F</h2><p>\u6848\u4F8B</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> num1 <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&#39;\u8F93\u5165\u7B2C\u4E00\u4E2A\u503C&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> num2 <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&#39;\u8F93\u5165\u7B2C\u4E00\u4E2A\u503C&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> src <span class="token operator">=</span> <span class="token punctuation">(</span>num1<span class="token operator">&gt;</span>num2<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u8FD9\u662F\u6700\u5927\u503C&amp;{num1}</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u8FD9\u662F\u6700\u5927\u503C&amp;{num2}</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token comment">// \u4E09\u5143\u8868\u8FBE\u5F0F\u4E2D\u8FD8\u5305\u542B\u4E86\u4E00\u4E2A\u529F\u80FD,\u8FD4\u56DE\u7684\u529F\u80FD\uFF0C\u53EF\u4EE5\u628A\u6210\u529F\u6267\u884C\u7684\u4EE3\u7801\u8FD4\u56DE</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// 1. \u7528\u6237\u8F93\u5165</span>
<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u60A8\u8F93\u5165\u4E00\u4E2A\u6570\u5B57:&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 2. \u5224\u65AD\u8F93\u51FA- \u5C0F\u4E8E10\u624D\u88650</span>
num <span class="token operator">=</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;=</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">?</span> num <span class="token operator">:</span> <span class="token string">&#39;0&#39;</span> <span class="token operator">+</span> num
<span class="token function">alert</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
</code></pre></div><h2 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h2><ol><li>\u5C0F\u62EC\u53F7\u6570\u636E\u5168\u7B49<code>===</code>case\u503C\uFF0C\u5219\u6267\u884C\u5BF9\u5E94\u7684\u4EE3\u7801</li><li>\u82E5\u6CA1\u6709\u5168\u7B49 === \uFF0C\u5219\u4F1A\u6267\u884Cdefault\u5BF9\u5E94\u4EE3\u7801</li><li>switch case \u914D\u5408break\u5173\u952E\u5B57\u4F7F\u7528\uFF0C\u6CA1\u6709break\u5219\u4F1A\u9020\u6210case\u7A7F\u900F</li></ol>`,13);function K(M,O){const a=p("ExternalLinkIcon");return c(),r("div",null,[i,n("h3",d,[u,k,n("a",h,[_,f,m,g,e(a)])]),v,n("p",null,[n("a",b,[j,e(a)]),w,n("a",x,[S,e(a)]),y]),n("p",null,[J,z,n("a",E,[N,e(a)]),B]),C,n("p",null,[W,n("a",q,[R,V,A,e(a)])]),I,n("p",null,[G,n("a",L,[U,T,D,e(a)]),F]),H])}var Q=o(l,[["render",K],["__file","JavaScript\u63A7\u5236\u7ED3\u6784.html.vue"]]);export{Q as default};
