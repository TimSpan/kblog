import{_ as n,o as s,c as a,a as t}from"./app.a801a5dc.js";var p="/kblog/assets/\u663E\u5F0F\u8F6C\u6362.1d0703e7.png";const o={},c=t('<h1 id="javascript\u663E\u5F0F\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#javascript\u663E\u5F0F\u8F6C\u6362" aria-hidden="true">#</a> JavaScript\u663E\u5F0F\u8F6C\u6362</h1><h2 id="\u8F6C\u6362\u4E3A\u6570\u5B57\u578B" tabindex="-1"><a class="header-anchor" href="#\u8F6C\u6362\u4E3A\u6570\u5B57\u578B" aria-hidden="true">#</a> \u8F6C\u6362\u4E3A\u6570\u5B57\u578B</h2><h3 id="number-\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#number-\u6570\u636E" aria-hidden="true">#</a> Number(\u6570\u636E)</h3><blockquote><ol><li>\u8F6C\u6210\u6570\u5B57\u578B</li><li>\u5982\u679C\u5B57\u7B26\u4E32\u5185\u5BB9\u91CC\u6709\u975E\u6570\u5B57,\u8F6C\u6362\u5931\u8D25\u65F6\u7ED3\u679C\u4E3ANaN(Not a Number)\u5373\u4E0D\u662F\u4E00\u4E2A\u6570\u5B57</li><li>NaN\u4E5F\u662Fnumber\u7C7B\u578B\u7684\u6570\u636E,\u4EE3\u8868\u975E\u6570\u5B57</li></ol></blockquote><h3 id="parseint-\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#parseint-\u6570\u636E" aria-hidden="true">#</a> parseInt(\u6570\u636E)</h3><blockquote><p>\u53EA\u4FDD\u7559\u6574\u6570</p></blockquote><h3 id="parsefloat-\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#parsefloat-\u6570\u636E" aria-hidden="true">#</a> parseFloat(\u6570\u636E)</h3><blockquote><p>\u53EF\u4EE5\u4FDD\u7559\u5C0F\u6570</p></blockquote><p><img src="'+p+`" alt=""></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;12&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//12</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">&#39;pink&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//NaN</span>
<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&#39;\u8F93\u5165\u5E74\u85AA&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//\u8F93\u516520</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//20</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>  <span class="token comment">//20</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;12px&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//12</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;12.34px&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 12</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;12.94px&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">//12</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;abc12.94px&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token string">&#39;12px&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 12</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token string">&#39;12.34px&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 12.34</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token string">&#39;12.94px&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 12.94</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token string">&#39;abc12.94px&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// NaN</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token string">&#39;kevin12.94&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// NaN</span>
</code></pre></div><h2 id="\u8F6C\u6362\u4E3A\u5B57\u7B26\u578B" tabindex="-1"><a class="header-anchor" href="#\u8F6C\u6362\u4E3A\u5B57\u7B26\u578B" aria-hidden="true">#</a> \u8F6C\u6362\u4E3A\u5B57\u7B26\u578B</h2><h3 id="string-\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#string-\u6570\u636E" aria-hidden="true">#</a> String(\u6570\u636E)</h3><h3 id="\u53D8\u91CF-tostring-\u8FDB\u5236" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF-tostring-\u8FDB\u5236" aria-hidden="true">#</a> \u53D8\u91CF.toString(\u8FDB\u5236)</h3>`,13),e=[c];function l(u,i){return s(),a("div",null,e)}var r=n(o,[["render",l],["__file","JavaScript\u663E\u5F0F\u8F6C\u6362.html.vue"]]);export{r as default};
