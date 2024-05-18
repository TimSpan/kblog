import{_ as o,r as c,o as l,c as p,b as e,d as t,a as s,e as n}from"./app.a801a5dc.js";const i={},d=s(`<h1 id="dom\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#dom\u8282\u70B9" aria-hidden="true">#</a> DOM\u8282\u70B9</h1><h2 id="insertadjacentelement" tabindex="-1"><a class="header-anchor" href="#insertadjacentelement" aria-hidden="true">#</a> insertAdjacentElement()</h2><p><strong>\u628A\u5B57\u7B26\u4E32\u683C\u5F0F\u5143\u7D20\u6DFB\u52A0\u5230\u7236\u5143\u7D20\u4E2D</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code>element<span class="token punctuation">.</span><span class="token function">insertAdjacentElement</span><span class="token punctuation">(</span>position<span class="token punctuation">,</span> element<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\u628A\u5B57\u7B26\u4E32\u683C\u5F0F\u5143\u7D20\u6DFB\u52A0\u5230\u7236\u5143\u7D20\u4E2D</span>
</code></pre></div><p>position:</p><ul><li><code>&#39;beforebegin&#39;</code>: \u5728\u8BE5\u5143\u7D20\u672C\u8EAB\u7684\u524D\u9762\u3002</li><li><code>&#39;afterbegin&#39;</code>:\u53EA\u5728\u8BE5\u5143\u7D20\u5F53\u4E2D\uFF0C\u5728\u8BE5\u5143\u7D20\u7B2C\u4E00\u4E2A\u5B50\u5B69\u5B50\u524D\u9762\u3002</li><li><code>&#39;beforeend&#39;</code>:\u53EA\u5728\u8BE5\u5143\u7D20\u5F53\u4E2D\uFF0C\u5728\u8BE5\u5143\u7D20\u6700\u540E\u4E00\u4E2A\u5B50\u5B69\u5B50\u540E\u9762\u3002</li><li><code>&#39;afterend&#39;</code>: \u5728\u8BE5\u5143\u7D20\u672C\u8EAB\u7684\u540E\u9762</li></ul><p><code>element</code>:\u8981\u63D2\u5165\u5230\u6811\u4E2D\u7684\u5143\u7D20\u3002</p><blockquote><p>\u5982\u679C\u63D2\u5165\u5931\u8D25\u5219\u8FD4\u56DE null.</p><p>appendChild\u4E0D\u652F\u6301\u8FFD\u52A0\u5B57\u7B26\u4E32\u7684\u5B50\u5143\u7D20,insertAdjacentElement\u652F\u6301\u8FFD\u52A0\u5B57\u7B26\u4E32\u7684\u5143\u7D20</p></blockquote><p>DOM\u6811\u91CC\u6BCF\u4E00\u4E2A\u5185\u5BB9\u90FD\u79F0\u4E4B\u4E3A\u8282\u70B9</p><h2 id="\u8282\u70B9\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u8282\u70B9\u7C7B\u578B" aria-hidden="true">#</a> \u8282\u70B9\u7C7B\u578B</h2><h3 id="\u5143\u7D20\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5143\u7D20\u8282\u70B9" aria-hidden="true">#</a> \u5143\u7D20\u8282\u70B9</h3><ol><li>\u6240\u6709\u7684\u6807\u7B7E \u6BD4\u5982 body\u3001 div</li><li>html \u662F\u6839\u8282\u70B9</li></ol><h3 id="\u5C5E\u6027\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u8282\u70B9" aria-hidden="true">#</a> \u5C5E\u6027\u8282\u70B9</h3><p>\u6240\u6709\u7684\u5C5E\u6027 \u6BD4\u5982 href class</p><h3 id="\u6587\u672C\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u6587\u672C\u8282\u70B9" aria-hidden="true">#</a> \u6587\u672C\u8282\u70B9</h3><p>\u6240\u6709\u7684\u6587\u672C</p><h2 id="\u67E5\u627E\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u67E5\u627E\u8282\u70B9" aria-hidden="true">#</a> \u67E5\u627E\u8282\u70B9</h2><h3 id="\u7236\u8282\u70B9\u67E5\u627Eparentnode" tabindex="-1"><a class="header-anchor" href="#\u7236\u8282\u70B9\u67E5\u627Eparentnode" aria-hidden="true">#</a> \u7236\u8282\u70B9\u67E5\u627EparentNode</h3><p><code>parentNode \u5C5E\u6027</code></p><p>\u8FD4\u56DE\u6700\u8FD1\u4E00\u7EA7\u7684\u7236\u8282\u70B9 \u627E\u4E0D\u5230\u8FD4\u56DE\u4E3A<code>null</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code>\u5B50\u5143\u7D20<span class="token punctuation">.</span>parentNode
</code></pre></div><h3 id="\u5B50\u8282\u70B9\u67E5\u627Echildnodes" tabindex="-1"><a class="header-anchor" href="#\u5B50\u8282\u70B9\u67E5\u627Echildnodes" aria-hidden="true">#</a> \u5B50\u8282\u70B9\u67E5\u627EchildNodes</h3><p><code>childNodes</code></p><p>\u83B7\u5F97\u6240\u6709\u5B50\u8282\u70B9\u3001\u5305\u62EC\u6587\u672C\u8282\u70B9\uFF08\u7A7A\u683C\u3001\u6362\u884C\uFF09\u3001\u6CE8\u91CA\u8282\u70B9\u7B49</p><p><code>children</code></p><p>\u4EC5\u83B7\u5F97\u6240\u6709\u5143\u7D20\u8282\u70B9</p>`,26),r=n("\u8FD4\u56DE \u4E00\u4E2A Node \u7684\u5B50"),h={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element",target:"_blank",rel:"noopener noreferrer"},u=e("code",null,"elements",-1),k=n(" \uFF0C\u662F\u4E00\u4E2A\u52A8\u6001\u66F4\u65B0\u7684 "),g={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCollection",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"HTMLCollection",-1),_=n("\u3002"),f=e("code",null,"children",-1),v=n(" \u5C5E\u6027\u4E3A\u53EA\u8BFB\u5C5E\u6027\uFF0C\u5BF9\u8C61\u7C7B\u578B\u4E3A "),b={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCollection",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"HTMLCollection",-1),j=n("\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 "),N=e("code",null,"elementNodeReference.children[1].nodeName",-1),M=n(" \u6765\u83B7\u53D6\u67D0\u4E2A\u5B50\u5143\u7D20\u7684\u6807\u7B7E\u540D\u79F0\u3002"),C=s(`<h3 id="\u5144\u5F1F\u5173\u7CFB\u67E5\u627Enextelementsibling" tabindex="-1"><a class="header-anchor" href="#\u5144\u5F1F\u5173\u7CFB\u67E5\u627Enextelementsibling" aria-hidden="true">#</a> \u5144\u5F1F\u5173\u7CFB\u67E5\u627EnextElementSibling</h3><p>\u4E0B\u4E00\u4E2A\u5144\u5F1F\u8282\u70B9<code>nextElementSibling</code>\u5C5E\u6027</p><p>\u4E0A\u4E00\u4E2A\u5144\u5F1F\u8282\u70B9<code>previousElementSibling</code> \u5C5E\u6027</p><h2 id="\u589E\u52A0\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u589E\u52A0\u8282\u70B9" aria-hidden="true">#</a> \u589E\u52A0\u8282\u70B9</h2><h3 id="\u521B\u5EFA\u8282\u70B9createelement" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u8282\u70B9createelement" aria-hidden="true">#</a> \u521B\u5EFA\u8282\u70B9createElement</h3><p>\u5373\u521B\u9020\u51FA\u4E00\u4E2A\u65B0\u7684\u7F51\u9875\u5143\u7D20\uFF0C\u518D\u6DFB\u52A0\u5230\u7F51\u9875\u5185\uFF0C\u4E00\u822C\u5148\u521B\u5EFA\u8282\u70B9\uFF0C\u7136\u540E\u63D2\u5165\u8282\u70B9</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u521B\u9020\u4E00\u4E2A\u65B0\u7684\u5143\u7D20\u8282\u70B9</span>
document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;\u6807\u7B7E\u540D&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u8FFD\u52A0\u8282\u70B9appendchild" tabindex="-1"><a class="header-anchor" href="#\u8FFD\u52A0\u8282\u70B9appendchild" aria-hidden="true">#</a> \u8FFD\u52A0\u8282\u70B9appendChild</h3><p>\u8981\u60F3\u5728\u754C\u9762\u770B\u5230\uFF0C\u8FD8\u5F97\u63D2\u5165\u5230\u67D0\u4E2A\u7236\u5143\u7D20\u4E2D</p><p>\u63D2\u5165\u5230\u7236\u5143\u7D20\u7684\u6700\u540E\u4E00\u4E2A\u5B50\u5143\u7D20</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u63D2\u5165\u5230\u8FD9\u4E2A\u7236\u5143\u7D20\u7684\u6700\u540E</span>
\u7236\u5143\u7D20<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>\u8981\u63D2\u5165\u7684\u5143\u7D20<span class="token punctuation">)</span>
</code></pre></div><p>\u63D2\u5165\u5230\u7236\u5143\u7D20\u4E2D\u67D0\u4E2A\u5B50\u5143\u7D20\u7684\u524D\u9762</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u63D2\u63D2\u5165\u5230\u67D0\u4E2A\u5B50\u5143\u7D20\u7684\u524D\u9762</span>
\u7236\u5143\u7D20<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>\u8981\u63D2\u5165\u7684\u5143\u7D20<span class="token punctuation">,</span>\u5728\u54EA\u4E2A\u5143\u7D20\u524D\u9762<span class="token punctuation">)</span>
ul<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>li<span class="token punctuation">,</span> ul<span class="token punctuation">.</span>children<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">//\u793A\u4F8B</span>
<span class="token keyword">const</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>div<span class="token punctuation">)</span>
</code></pre></div><h3 id="\u63D2\u5165\u8282\u70B9insertadjacenthtml" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165\u8282\u70B9insertadjacenthtml" aria-hidden="true">#</a> \u63D2\u5165\u8282\u70B9insertAdjacentHTML</h3>`,15),E=e("strong",null,[e("code",null,"insertAdjacentHTML()")],-1),y=n(" \u65B9\u6CD5\u5C06\u6307\u5B9A\u7684\u6587\u672C\u89E3\u6790\u4E3A "),O={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element",target:"_blank",rel:"noopener noreferrer"},A=e("code",null,"Element",-1),L=n(" \u5143\u7D20\uFF0C\u5E76\u5C06\u7ED3\u679C\u8282\u70B9\u63D2\u5165\u5230 DOM \u6811\u4E2D\u7684\u6307\u5B9A\u4F4D\u7F6E\u3002\u5B83\u4E0D\u4F1A\u91CD\u65B0\u89E3\u6790\u5B83\u6B63\u5728\u4F7F\u7528\u7684\u5143\u7D20\uFF0C\u56E0\u6B64\u5B83\u4E0D\u4F1A\u7834\u574F\u5143\u7D20\u5185\u7684\u73B0\u6709\u5143\u7D20\u3002\u8FD9\u907F\u514D\u4E86\u989D\u5916\u7684\u5E8F\u5217\u5316\u6B65\u9AA4\uFF0C\u4F7F\u5176\u6BD4\u76F4\u63A5\u4F7F\u7528 innerHTML \u64CD\u4F5C\u66F4\u5FEB\u3002"),T=s(`<div class="language-javascript ext-js"><pre class="language-javascript"><code>element<span class="token punctuation">.</span><span class="token function">insertAdjacentHTML</span><span class="token punctuation">(</span>position<span class="token punctuation">,</span> text<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>POSITION</p><ul><li><code>&#39;beforebegin&#39;</code>\uFF1A\u5143\u7D20\u81EA\u8EAB\u7684\u524D\u9762\u3002</li><li><code>&#39;afterbegin&#39;</code>\uFF1A\u63D2\u5165\u5143\u7D20\u5185\u90E8\u7684\u7B2C\u4E00\u4E2A\u5B50\u8282\u70B9\u4E4B\u524D\u3002</li><li><code>&#39;beforeend&#39;</code>\uFF1A\u63D2\u5165\u5143\u7D20\u5185\u90E8\u7684\u6700\u540E\u4E00\u4E2A\u5B50\u8282\u70B9\u4E4B\u540E\u3002</li><li><code>&#39;afterend&#39;</code>\uFF1A\u5143\u7D20\u81EA\u8EAB\u7684\u540E\u9762\u3002</li></ul><h3 id="\u514B\u9686\u8282\u70B9clonenode" tabindex="-1"><a class="header-anchor" href="#\u514B\u9686\u8282\u70B9clonenode" aria-hidden="true">#</a> \u514B\u9686\u8282\u70B9cloneNode</h3><p>\u590D\u5236\u4E00\u4E2A\u539F\u6709\u7684\u8282\u70B9</p><p>\u628A\u590D\u5236\u7684\u8282\u70B9\u653E\u5165\u5230\u6307\u5B9A\u7684\u5143\u7D20\u5185\u90E8</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u514B\u9686\u4E00\u4E2A\u5DF2\u6709\u7684\u800C\u5143\u7D20\u8282\u70B9</span>
\u5143\u7D20<span class="token punctuation">.</span><span class="token function">cloneNode</span><span class="token punctuation">(</span>\u5E03\u5C14\u503C<span class="token punctuation">)</span>
</code></pre></div><p><code>cloneNode</code>\u4F1A\u514B\u9686\u51FA\u4E00\u4E2A\u8DDF\u539F\u6807\u7B7E\u4E00\u6837\u7684\u5143\u7D20\uFF0C\u62EC\u53F7\u5185\u4F20\u5165\u5E03\u5C14\u503C</p><ol><li>\u82E5\u4E3Atrue\uFF0C\u5219\u4EE3\u8868\u514B\u9686\u65F6\u4F1A\u5305\u542B\u540E\u4EE3\u8282\u70B9\u4E00\u8D77\u514B\u9686</li><li>\u82E5\u4E3Afalse\uFF0C\u5219\u4EE3\u8868\u514B\u9686\u65F6\u4E0D\u5305\u542B\u540E\u4EE3\u8282\u70B9</li><li>\u9ED8\u8BA4\u4E3Afalse</li></ol><h3 id="\u5220\u9664\u8282\u70B9removechild" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u8282\u70B9removechild" aria-hidden="true">#</a> \u5220\u9664\u8282\u70B9removeChild</h3><p>\u5728 JavaScript \u539F\u751FDOM\u64CD\u4F5C\u4E2D\uFF0C\u8981\u5220\u9664\u5143\u7D20\u5FC5\u987B\u901A\u8FC7\u7236\u5143\u7D20\u5220\u9664</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>\u7236\u5143\u7D20<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>\u8981\u5220\u9664\u7684\u5143\u7D20<span class="token punctuation">)</span>
</code></pre></div><blockquote><p>\u5982\u4E0D\u5B58\u5728\u7236\u5B50\u5173\u7CFB\u5219\u5220\u9664\u4E0D\u6210\u529F</p><p>\u5220\u9664\u8282\u70B9\u548C\u9690\u85CF\u8282\u70B9\uFF08display:none\uFF09 \u6709\u533A\u522B\u7684\uFF1A \u9690\u85CF\u8282\u70B9\u8FD8\u662F\u5B58\u5728\u7684\uFF0C\u4F46\u662F\u5220\u9664\uFF0C\u5219\u4ECEhtml\u4E2D\u5220\u9664\u8282\u70B9</p></blockquote><h2 id="\u89E6\u5C4F\u4E8B\u4EF6touch" tabindex="-1"><a class="header-anchor" href="#\u89E6\u5C4F\u4E8B\u4EF6touch" aria-hidden="true">#</a> \u89E6\u5C4F\u4E8B\u4EF6touch</h2><table><thead><tr><th style="text-align:center;">\u89E6\u6478touch\u4E8B\u4EF6</th><th style="text-align:center;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">touchstart</td><td style="text-align:center;">\u624B\u6307\u89E6\u6478\u5230\u4E00\u4E2ADOM\u5143\u7D20\u65F6\u7684\u89E6\u53D1</td></tr><tr><td style="text-align:center;">touchmove</td><td style="text-align:center;">\u624B\u6307\u5728\u4E00\u4E2ADOM\u5143\u7D20\u4E0A\u6ED1\u52A8\u65F6\u89E6\u53D1</td></tr><tr><td style="text-align:center;">touchend</td><td style="text-align:center;">\u624B\u6307\u5728\u4E00\u4E2ADOM\u5143\u7D20\u4E0A\u79FB\u5F00\u65F6\u89E6\u53D1</td></tr></tbody></table>`,15);function D(z,H){const a=c("ExternalLinkIcon");return l(),p("div",null,[d,e("blockquote",null,[e("p",null,[r,e("a",h,[u,t(a)]),k,e("a",g,[m,t(a)]),_]),e("p",null,[f,v,e("a",b,[x,t(a)]),j,N,M])]),C,e("p",null,[E,y,e("a",O,[A,t(a)]),L]),T])}var S=o(i,[["render",D],["__file","DOM\u8282\u70B9.html.vue"]]);export{S as default};
