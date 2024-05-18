import{_ as n,o as a,c as s,a as t}from"./app.a801a5dc.js";const p={},e=t(`<h1 id="\u4E8B\u4EF6\u6D41" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u6D41" aria-hidden="true">#</a> \u4E8B\u4EF6\u6D41</h1><h2 id="\u4E8B\u4EF6\u6355\u83B7" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u6355\u83B7" aria-hidden="true">#</a> \u4E8B\u4EF6\u6355\u83B7</h2><p>\u6982\u5FF5:\u4ECEDOM\u7684\u6839\u5143\u7D20\u5F00\u59CB\u53BB\u6267\u884C\u5BF9\u5E94\u7684\u4E8B\u4EF6(\u4ECE\u5916\u5230\u91CC)</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token constant">DOM</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>\u4E8B\u4EF6\u7C7B\u578B<span class="token punctuation">,</span>\u4E8B\u4EF6\u5904\u7406\u51FD\u6570<span class="token punctuation">,</span>\u662F\u5426\u4F7F\u7528\u6355\u83B7\u673A\u5236<span class="token punctuation">)</span>
</code></pre></div><blockquote><ol><li>addEventListener\u7B2C\u4E09\u4E2A\u53C2\u6570\u4F20\u5165 true \u4EE3\u8868\u662F\u6355\u83B7\u9636\u6BB5\u89E6\u53D1\uFF08\u5F88\u5C11\u4F7F\u7528\uFF09</li><li>\u82E5\u4F20\u5165false\u4EE3\u8868\u5192\u6CE1\u9636\u6BB5\u89E6\u53D1\uFF0C\u9ED8\u8BA4\u5C31\u662Ffalse</li><li>\u82E5\u662F\u7528 L0 \u4E8B\u4EF6\u76D1\u542C\uFF0C\u5219\u53EA\u6709\u5192\u6CE1\u9636\u6BB5\uFF0C\u6CA1\u6709\u6355\u83B7</li></ol></blockquote><h2 id="\u4E8B\u4EF6\u5192\u6CE1" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u5192\u6CE1" aria-hidden="true">#</a> \u4E8B\u4EF6\u5192\u6CE1</h2><p>\u5F53\u4E00\u4E2A\u5143\u7D20\u7684\u4E8B\u4EF6\u88AB\u89E6\u53D1\u65F6\uFF0C\u540C\u6837\u7684\u4E8B\u4EF6\u5C06\u4F1A\u5728\u8BE5\u5143\u7D20\u7684\u6240\u6709\u7956\u5148\u5143\u7D20\u4E2D\u4F9D\u6B21\u88AB\u89E6\u53D1\u3002\u8FD9\u4E00\u8FC7\u7A0B\u88AB\u79F0\u4E3A\u4E8B\u4EF6\u5192\u6CE1</p><ul><li>\u7B80\u5355\u7406\u89E3\uFF1A\u5F53\u4E00\u4E2A\u5143\u7D20\u89E6\u53D1\u4E8B\u4EF6\u540E\uFF0C\u4F1A\u4F9D\u6B21\u5411\u4E0A\u8C03\u7528\u6240\u6709\u7236\u7EA7\u5143\u7D20\u7684 <strong>\u540C\u540D\u4E8B\u4EF6</strong></li><li>\u4E8B\u4EF6\u5192\u6CE1\u662F\u9ED8\u8BA4\u5B58\u5728\u7684</li><li>L2\u4E8B\u4EF6\u76D1\u542C\u7B2C\u4E09\u4E2A\u53C2\u6570\u662F false\uFF0C\u6216\u8005\u9ED8\u8BA4\u90FD\u662F\u5192\u6CE1</li></ul><h2 id="\u963B\u6B62\u5192\u6CE1" tabindex="-1"><a class="header-anchor" href="#\u963B\u6B62\u5192\u6CE1" aria-hidden="true">#</a> \u963B\u6B62\u5192\u6CE1</h2><ul><li>\u56E0\u4E3A\u9ED8\u8BA4\u5C31\u6709\u5192\u6CE1\u6A21\u5F0F\u7684\u5B58\u5728\uFF0C\u6240\u4EE5\u5BB9\u6613\u5BFC\u81F4\u4E8B\u4EF6\u5F71\u54CD\u5230\u7236\u7EA7\u5143\u7D20</li><li>\u82E5\u60F3\u628A\u4E8B\u4EF6\u5C31\u9650\u5236\u5728\u5F53\u524D\u5143\u7D20\u5185\uFF0C\u5C31\u9700\u8981\u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1</li><li>\u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1\u9700\u8981\u62FF\u5230\u4E8B\u4EF6\u5BF9\u8C61</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code>\u4E8B\u4EF6\u5BF9\u8C61<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6211\u4EEC\u67D0\u4E9B\u60C5\u51B5\u4E0B\u9700\u8981\u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A\u7684\u53D1\u751F\uFF0C\u6BD4\u5982 \u963B\u6B62 \u94FE\u63A5\u7684\u8DF3\u8F6C\uFF0C\u8868\u5355\u57DF\u8DF3\u8F6C</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u89E3\u7ED1\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u89E3\u7ED1\u4E8B\u4EF6" aria-hidden="true">#</a> \u89E3\u7ED1\u4E8B\u4EF6</h2><p>on\u4E8B\u4EF6\u65B9\u5F0F\uFF0C\u76F4\u63A5\u4F7F\u7528null\u8986\u76D6\u5076\u5C31\u53EF\u4EE5\u5B9E\u73B0\u4E8B\u4EF6\u7684\u89E3\u7ED1</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.btn&#39;</span><span class="token punctuation">)</span>
btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;\u70B9\u9519\u4E86&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u89E3\u7ED1\u65F6\u95F4</span>
btn<span class="token punctuation">.</span>onclick <span class="token operator">=</span> <span class="token keyword">null</span>
</code></pre></div><p>addEventListener\u65B9\u5F0F\uFF0C\u5FC5\u987B\u4F7F\u7528\uFF1A</p><p>removeEventListener(\u4E8B\u4EF6\u7C7B\u578B, \u4E8B\u4EF6\u5904\u7406\u51FD\u6570, [\u83B7\u53D6\u6355\u83B7\u6216\u8005\u5192\u6CE1\u9636\u6BB5])</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>btn<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span>fn<span class="token punctuation">)</span>
</code></pre></div><h2 id="\u9F20\u6807\u7ECF\u8FC7\u4E8B\u4EF6\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u9F20\u6807\u7ECF\u8FC7\u4E8B\u4EF6\u7684\u533A\u522B" aria-hidden="true">#</a> \u9F20\u6807\u7ECF\u8FC7\u4E8B\u4EF6\u7684\u533A\u522B</h2><p>mouseover \u548C mouseout \u4F1A\u6709\u5192\u6CE1\u6548\u679C</p><p>mouseenter \u548C mouseleave \u6CA1\u6709\u5192\u6CE1\u6548\u679C (\u63A8\u8350)</p><h2 id="\u4E24\u79CD\u6CE8\u518C\u4E8B\u4EF6\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u4E24\u79CD\u6CE8\u518C\u4E8B\u4EF6\u7684\u533A\u522B" aria-hidden="true">#</a> \u4E24\u79CD\u6CE8\u518C\u4E8B\u4EF6\u7684\u533A\u522B</h2><h3 id="\u4F20\u7EDFon\u6CE8\u518C-l0" tabindex="-1"><a class="header-anchor" href="#\u4F20\u7EDFon\u6CE8\u518C-l0" aria-hidden="true">#</a> \u4F20\u7EDFon\u6CE8\u518C\uFF08L0\uFF09</h3><ul><li>\u540C\u4E00\u4E2A\u5BF9\u8C61,\u540E\u9762\u6CE8\u518C\u7684\u4E8B\u4EF6\u4F1A\u8986\u76D6\u524D\u9762\u6CE8\u518C(\u540C\u4E00\u4E2A\u4E8B\u4EF6)</li><li>\u76F4\u63A5\u4F7F\u7528null\u8986\u76D6\u5076\u5C31\u53EF\u4EE5\u5B9E\u73B0\u4E8B\u4EF6\u7684\u89E3\u7ED1</li><li>\u90FD\u662F\u5192\u6CE1\u9636\u6BB5\u6267\u884C\u7684</li></ul><h3 id="\u4E8B\u4EF6\u76D1\u542C\u6CE8\u518C-l2" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u76D1\u542C\u6CE8\u518C-l2" aria-hidden="true">#</a> \u4E8B\u4EF6\u76D1\u542C\u6CE8\u518C\uFF08L2\uFF09</h3><ul><li>\u8BED\u6CD5: addEventListener(\u4E8B\u4EF6\u7C7B\u578B, \u4E8B\u4EF6\u5904\u7406\u51FD\u6570, \u662F\u5426\u4F7F\u7528\u6355\u83B7)</li><li>\u540E\u9762\u6CE8\u518C\u7684\u4E8B\u4EF6\u4E0D\u4F1A\u8986\u76D6\u524D\u9762\u6CE8\u518C\u7684\u4E8B\u4EF6(\u540C\u4E00\u4E2A\u4E8B\u4EF6)</li><li>\u53EF\u4EE5\u901A\u8FC7\u7B2C\u4E09\u4E2A\u53C2\u6570\u53BB\u786E\u5B9A\u662F\u5728\u5192\u6CE1\u6216\u8005\u6355\u83B7\u9636\u6BB5\u6267\u884C</li><li>\u5FC5\u987B\u4F7F\u7528removeEventListener(\u4E8B\u4EF6\u7C7B\u578B, \u4E8B\u4EF6\u5904\u7406\u51FD\u6570, \u83B7\u53D6\u6355\u83B7\u6216\u8005\u5192\u6CE1\u9636\u6BB5</li><li>\u533F\u540D\u51FD\u6570\u65E0\u6CD5\u88AB\u89E3\u7ED1</li></ul><h2 id="\u4E8B\u4EF6\u59D4\u6258" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u59D4\u6258" aria-hidden="true">#</a> \u4E8B\u4EF6\u59D4\u6258</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>tagName
</code></pre></div><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u7B2C1\u4E2A\u5B69\u5B50<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u7B2C2\u4E2A\u5B69\u5B50<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u7B2C3\u4E2A\u5B69\u5B50<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u7B2C4\u4E2A\u5B69\u5B50<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u7B2C5\u4E2A\u5B69\u5B50<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\u6211\u4E0D\u9700\u8981\u53D8\u8272<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// \u70B9\u51FB\u6BCF\u4E2A\u5C0Fli \u5F53\u524Dli \u6587\u5B57\u53D8\u4E3A\u7EA2\u8272</span>
  <span class="token comment">// \u6309\u7167\u4E8B\u4EF6\u59D4\u6258\u7684\u65B9\u5F0F  \u59D4\u6258\u7ED9\u7236\u7EA7\uFF0C\u4E8B\u4EF6\u5199\u5230\u7236\u7EA7\u8EAB\u4E0A</span>
  <span class="token keyword">const</span> ul <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">)</span>
  ul<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>tagName <span class="token operator">===</span> <span class="token string">&#39;LI&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,30),c=[e];function o(l,i){return a(),s("div",null,c)}var k=n(p,[["render",o],["__file","\u4E8B\u4EF6\u6D41.html.vue"]]);export{k as default};
