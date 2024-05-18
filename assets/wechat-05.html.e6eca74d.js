import{_ as n,o as s,c as a,a as p}from"./app.a801a5dc.js";var t="/kblog/assets/package.62aee22a.png";const o={},e=p(`<h1 id="\u5C0F\u7A0B\u5E8F-05" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7A0B\u5E8F-05" aria-hidden="true">#</a> \u5C0F\u7A0B\u5E8F-05</h1><h2 id="\u4E00\u3001\u4F7F\u7528-npm-\u5305" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u4F7F\u7528-npm-\u5305" aria-hidden="true">#</a> \u4E00\u3001\u4F7F\u7528 npm \u5305</h2><h3 id="_1-1\u3001\u5C0F\u7A0B\u5E8F\u5BF9-npm-\u7684\u652F\u6301\u4E0E\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#_1-1\u3001\u5C0F\u7A0B\u5E8F\u5BF9-npm-\u7684\u652F\u6301\u4E0E\u9650\u5236" aria-hidden="true">#</a> 1.1\u3001\u5C0F\u7A0B\u5E8F\u5BF9 npm \u7684\u652F\u6301\u4E0E\u9650\u5236</h3><p>\u76EE\u524D\uFF0C\u5C0F\u7A0B\u5E8F\u4E2D\u5DF2\u7ECF\u652F\u6301\u4F7F\u7528 npm \u5B89\u88C5\u7B2C\u4E09\u65B9\u5305\uFF0C\u4ECE\u800C\u6765\u63D0\u9AD8\u5C0F\u7A0B\u5E8F\u7684\u5F00\u53D1\u6548\u7387\u3002</p><p>\u4F46\u662F\uFF0C\u5728\u5C0F\u7A0B\u5E8F\u4E2D\u4F7F\u7528 npm \u5305\u6709\u5982\u4E0B 3 \u4E2A\u9650\u5236\uFF1A</p><p>\u2460 \u4E0D\u652F\u6301\u4F9D\u8D56\u4E8E Node.js \u5185\u7F6E\u5E93\u7684\u5305</p><p>\u2461 \u4E0D\u652F\u6301\u4F9D\u8D56\u4E8E\u6D4F\u89C8\u5668\u5185\u7F6E\u5BF9\u8C61\u7684\u5305</p><p>\u2462 \u4E0D\u652F\u6301\u4F9D\u8D56\u4E8E C++ \u63D2\u4EF6\u7684\u5305</p><p>\u603B\u7ED3\uFF1A\u867D\u7136 npm \u4E0A\u7684\u5305\u6709\u5343\u5343\u4E07\uFF0C\u4F46\u662F\u80FD\u4F9B\u5C0F\u7A0B\u5E8F\u4F7F\u7528\u7684\u5305\u5374\u201C\u4E3A\u6570\u4E0D\u591A\u201D\u3002</p><h3 id="_1-2\u3001api-promise-\u5316" tabindex="-1"><a class="header-anchor" href="#_1-2\u3001api-promise-\u5316" aria-hidden="true">#</a> 1.2\u3001API Promise \u5316</h3><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5C0F\u7A0B\u5E8F\u5B98\u65B9\u63D0\u4F9B\u7684\u5F02\u6B65 API \u90FD\u662F\u57FA\u4E8E\u56DE\u8C03\u51FD\u6570\u5B9E\u73B0\u7684\uFF0C\u4F8B\u5982\uFF0C\u7F51\u7EDC\u8BF7\u6C42\u7684 API \u9700\u8981\u6309\u7167 \u5982\u4E0B\u7684\u65B9\u5F0F\u8C03\u7528\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>wx.request({
  method: &#39;&#39;,
  url: &#39;&#39;,
  data: {},
  success: () =&gt; {}, // \u6210\u529F\u7684\u56DE\u8C03
  complate: () =&gt; {}, // \u65E0\u8BBA\u6210\u529F\u4E0E\u5426\u90FD\u4F1A\u6267\u884C\u7684\u56DE\u8C03
  fail: () =&gt; {} // \u5931\u8D25\u7684\u56DE\u8C03
})
</code></pre></div><p>\u8FD9\u79CD\u4EE3\u7801\u7684\u7F3A\u70B9\u662F\u663E\u800C\u6613\u89C1\u7684, \u5BB9\u6613\u9020\u6210\u56DE\u8C03\u5730\u72F1\u7684\u95EE\u9898\uFF0C\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\u3001\u7EF4\u62A4\u6027\u5DEE\uFF01\u800C\u6211\u4EEC\u5C31\u60F3\u5C06\u8FD9 \u79CD\u7C7B\u578B\u7684\u4EE3\u7801\u4F7F\u7528 API Promise \u5316\u8FDB\u884C\u6539\u9020</p><p>API Promise \u5316\uFF0C\u6307\u7684\u662F\u901A\u8FC7\u989D\u5916\u7684\u914D\u7F6E\uFF0C\u5C06\u5B98\u65B9\u63D0\u4F9B\u7684\u3001\u57FA\u4E8E\u56DE\u8C03\u51FD\u6570\u7684\u5F02\u6B65 API \uFF0C\u5347\u7EA7\u6539\u9020\u4E3A\u57FA \u4E8E Promise \u7684\u5F02\u6B65 API \uFF0C\u4ECE\u800C\u63D0\u9AD8\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\u3001\u7EF4\u62A4\u6027\uFF0C\u907F\u514D\u56DE\u8C03\u5730\u72F1\u7684\u95EE\u9898\u3002</p><h3 id="_1-3\u3001\u5B9E\u73B0-api-promise-\u5316" tabindex="-1"><a class="header-anchor" href="#_1-3\u3001\u5B9E\u73B0-api-promise-\u5316" aria-hidden="true">#</a> 1.3\u3001\u5B9E\u73B0 API Promise \u5316</h3><p>\u5728\u5C0F\u7A0B\u5E8F\u4E2D\uFF0C\u5B9E\u73B0 API Promise \u5316\u4E3B\u8981\u4F9D\u8D56\u4E8E miniprogram-api-promise \u8FD9\u4E2A\u7B2C\u4E09\u65B9\u7684 npm \u5305\u3002</p><p>\u5B83\u7684\u5B89\u88C5\u548C\u4F7F\u7528\u6B65\u9AA4\u5982\u4E0B:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> i --save miniprogram-api-promise

- \u4E0B\u8F7D\u5B8C\u6210\uFF0C\u6211\u4EEC\u4E0D\u80FD\u76F4\u63A5\u4F7F\u7528\uFF0C\u800C\u662F\u9700\u8981\u518D\u6B21\u91CD\u65B0\u6784\u5EFAnpm\u5305
- \u5EFA\u8BAE\u5728\u6784\u5EFA\u524D\u5148\u5220\u9664\u539F\u6709\u7684miniprogram_npm
- \u7136\u540E\u518D\u70B9\u51FB\u5DE5\u5177\uFF0C\u6784\u5EFAnpm
</code></pre></div><p>\u5BFC\u5165\u5E76\u6267\u884C\u4EE3\u7801</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u5728\u5C0F\u7A0B\u5E8F\u5165\u53E3\u6587\u4EF6\u4E2D\uFF08app.js),\u53EA\u9700\u8981\u8C03\u7528\u4E00\u6B21 promisifyAll()\u65B9\u6CD5</span>
<span class="token comment">// \u5373\u53EF\u5B9E\u73B0\u5F02\u6B65API \u7684Promise\u5316</span>
<span class="token comment">// \u6309\u9700\u5BFC\u5165\u4E00\u4E2A\u65B9\u6CD5</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  promisifyAll
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;miniprogram-api-promise&#39;</span>
<span class="token comment">// \u58F0\u660E\u4E00\u4E2A\u5E38\u91CF\uFF0C\u4E3A\u4E00\u4E2A\u7A7A\u5BF9\u8C61\uFF0C</span>
<span class="token comment">// \u5E76\u5728wx\u9876\u7EA7\u5BF9\u8C61\u4E0B\u6DFB\u52A0\u4E00\u4E2A\u5C5E\u6027p\u4E5F\u6307\u5411\u8BE5\u7A7A\u5BF9\u8C61\uFF0C\u4F7F\u6240\u6709\u6210\u5458\u90FD\u53EF\u4EE5\u4F7F\u7528\u8BE5\u5BF9\u8C61</span>
<span class="token keyword">const</span> wxp <span class="token operator">=</span> wx<span class="token punctuation">.</span>p <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// promisify all wx&#39;s api</span>
<span class="token comment">// \u53C2\u65701\uFF1A wx\u9876\u7EA7\u5BF9\u8C61</span>
<span class="token comment">// \u53C2\u65702\uFF1A wxp\u6307\u5411\u4E00\u4E2A\u7A7A\u5BF9\u8C61</span>
<span class="token function">promisifyAll</span><span class="token punctuation">(</span>wx<span class="token punctuation">,</span> wxp<span class="token punctuation">)</span>
</code></pre></div><p>\u89E3\u91CA\u4E0A\u8FF0\u4EE3\u7801:</p><ul><li>promisifyAll : \u505A\u7684\u4E8B\u5C31\u662F\u5C06 wx \u62E5\u6709\u7684\u5C5E\u6027\u65B9\u6CD5\u90FDcopy\u5E76\u6539\u9020\u4E86\u4E00\u4EFD\u7ED9\u4E86 wxp \u8FD9\u4E2A\u5BF9\u8C61</li><li>\u7136\u800C, wxp \u53EA\u662F\u5F53\u524D js \u6587\u4EF6\u7684\u4E00\u4E2A\u5E38\u91CF\uFF0C\u53EA\u80FD\u5728\u5F53\u524D\u6587\u4EF6\u4F7F\u7528</li><li>\u56E0\u6B64\uFF1A\u6211\u4EEC\u5728 wx \u4E0A\u6302\u8F7D\u4E00\u4E2A\u5C5E\u6027 p \u8BA9\u4ED6\u548C wxp \u6307\u5411\u540C\u4E00\u4E2A\u7A7A\u5BF9\u8C61</li><li>\u5728\u5176\u4ED6\u9875\u9762\u6216\u8005\u7EC4\u4EF6\u5C31\u53EF\u4EE5\u901A\u8FC7\u5168\u5C40\u5BF9\u8C61 wx \u70B9\u51FA p \u6765\u8BBF\u95EE\u5230 wxp</li><li>\u6B64\u65F6 wx.p \u53D1\u8D77\u5F02\u6B65\u7684\u8BF7\u6C42\u65F6\uFF0C\u5F97\u5230\u7684\u662F\u4E00\u4E2A promise \u5BF9\u8C61</li><li>\u90A3\u4E48\u6211\u4EEC\u5C31\u53EF\u4EE5\u4F7F\u7528 async/await \u7B80\u5316Promise\u8BED\u6CD5</li></ul><h2 id="\u4E8C\u3001\u5168\u5C40\u6570\u636E\u5171\u4EAB" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5168\u5C40\u6570\u636E\u5171\u4EAB" aria-hidden="true">#</a> \u4E8C\u3001\u5168\u5C40\u6570\u636E\u5171\u4EAB</h2><p>\u5168\u5C40\u6570\u636E\u5171\u4EAB\uFF08\u53C8\u53EB\u505A\uFF1A\u72B6\u6001\u7BA1\u7406\uFF09\u662F\u4E3A\u4E86\u89E3\u51B3\u7EC4\u4EF6\u4E4B\u95F4\u6570\u636E\u5171\u4EAB\u7684\u95EE\u9898\u3002</p><p>\u5F00\u53D1\u4E2D\u5E38\u7528\u7684\u5168\u5C40\u6570\u636E\u5171\u4EAB\u65B9\u6848\u6709\uFF1A Vuex \u3001 Redux \u3001 MobX \u7B49\u3002</p><p>\u5728\u5C0F\u7A0B\u5E8F\u4E2D\uFF0C\u53EF\u4F7F\u7528 mobx-miniprogram \u914D\u5408 mobx-miniprogram-bindings \u5B9E\u73B0\u5168\u5C40\u6570\u636E\u5171\u4EAB\u3002\u5176 \u4E2D\uFF1A</p><ul><li>mobx-miniprogram \u7528\u6765\u521B\u5EFA Store \u5B9E\u4F8B\u5BF9\u8C61</li><li>mobx-miniprogram-bindings \u7528\u6765\u628A Store \u4E2D\u7684\u5171\u4EAB\u6570\u636E\u6216\u65B9\u6CD5\uFF0C\u7ED1\u5B9A\u5230\u7EC4\u4EF6\u6216\u9875\u9762\u4E2D\u4F7F\u7528</li></ul><h3 id="_2-1\u3001mobx" tabindex="-1"><a class="header-anchor" href="#_2-1\u3001mobx" aria-hidden="true">#</a> 2.1\u3001MobX</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> init -y
<span class="token function">npm</span> <span class="token function">install</span> --save mobx-miniprogram mobx-miniprogram-bindings
</code></pre></div><p>\u8FD9\u91CC\u7528\u5230\u4E86 mobx-miniprogram-bindings \u6A21\u5757\uFF0C\u6A21\u5757\u8BF4\u660E\u5728\u8FD9\u91CC\uFF1A</p><p>https://developers.weixin.qq.com/miniprogram/dev/extended/functional/mobx.html</p><p>npm \u547D\u4EE4\u6267\u884C\u5B8C\u540E\uFF0C\u8BB0\u5F97\u5728\u5F00\u53D1\u8005\u5DE5\u5177\u7684\u9879\u76EE\u4E2D\u70B9\u4E00\u4E0B\u83DC\u5355\u680F\u4E2D\u7684 <code>\u5DE5\u5177</code> - <code>\u6784\u5EFA npm</code> \u3002</p><p>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u65B0\u5EFAstore\u6587\u4EF6\u5939\uFF0C\u5E76\u4E14\u65B0\u5EFA store.js \u6587\u4EF6</p><p><strong>\u5982\u4F55\u4F7F\u7528\u53C2\u8003\u8FD9\u7BC7\u6587\u7AE0</strong>\uFF1A</p><p>https://developers.weixin.qq.com/community/develop/article/doc/0004686e3c8980b53469f176e51413</p><h3 id="_2-2\u3001\u521B\u5EFA-mobx-\u7684-store-\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-2\u3001\u521B\u5EFA-mobx-\u7684-store-\u5B9E\u4F8B" aria-hidden="true">#</a> 2.2\u3001\u521B\u5EFA MobX \u7684 Store \u5B9E\u4F8B</h3><p>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u65B0\u5EFAstore\u6587\u4EF6\u5939\uFF0C\u5E76\u4E14\u65B0\u5EFA store.js \u6587\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u6309\u9700\u5BFC\u5165\u7B2C\u4E09\u65B9\u5305\u7684\u65B9\u6CD5observable, action</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
	observable<span class="token punctuation">,</span>
	action
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mobx-miniprogram&#39;</span>
<span class="token comment">// \u521B\u5EFA Store\u5B9E\u4F8B\u5BF9\u8C61,\u5E76\u5C06\u5176\u5BFC\u51FA</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">observable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token comment">// \u6570\u636E\u5B57\u6BB5</span>
	<span class="token literal-property property">numA</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
	<span class="token literal-property property">numB</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
	<span class="token comment">// \u8BA1\u7B97\u5C5E\u6027</span>
	<span class="token comment">// \u5728\u8BA1\u7B97\u5C5E\u6027\u7684\u65B9\u6CD5\u524D\uFF0C\u5FC5\u987B\u52A0 get\u4FEE\u9970\u7B26\uFF0C\u4EE3\u8868sum\u7684\u503C\u662F\u53EA\u8BFB\u7684\uFF0C\u65E0\u6CD5\u8FDB\u884C\u4FEE\u6539</span>
	<span class="token comment">// \u8BA1\u7B97\u5C5E\u6027sum \u4F9D\u8D56\u4E8EnumA\u548CnumB\u7684\u503C\uFF0C\u56E0\u6B64sum\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u5C31\u662F\u6700\u7EC8\u7684\u503C</span>
	<span class="token keyword">get</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>numA <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>numB
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token comment">// \u5B9A\u4E49actions\u65B9\u6CD5, \u7528\u6765\u4FEE\u6539 store\u4E2D\u7684\u6570\u636E</span>
	<span class="token literal-property property">updateNum1</span><span class="token operator">:</span> <span class="token function">action</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">step</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>numA <span class="token operator">+=</span> step
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token literal-property property">updateNum2</span><span class="token operator">:</span> <span class="token function">action</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">step</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>numB <span class="token operator">+=</span> step
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="_2-3\u3001\u4F7F\u7528-store-\u4E2D\u7684\u6210\u5458" tabindex="-1"><a class="header-anchor" href="#_2-3\u3001\u4F7F\u7528-store-\u4E2D\u7684\u6210\u5458" aria-hidden="true">#</a> 2.3\u3001\u4F7F\u7528 Store \u4E2D\u7684\u6210\u5458</h3><p>\u5728\u9875\u9762\u4E2D\u4F7F\u7528</p><p>\u9875\u9762\u7684 js \u6587\u4EF6\u4E2D</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// 1.\u9996\u5148 \u5BFC\u5165\u7B2C\u4E09\u65B9\u5305\uFF0C\u5C06\u6570\u636E\u7ED1\u5B9A\u5230\u9875\u9762</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  createStoreBindings
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mobx-miniprogram-bindings&#39;</span>
<span class="token comment">// 2.\u5176\u6B21 \u5728\u9875\u9762\u7684js\u6587\u4EF6\u7684\u5934\u90E8\u533A\u57DF\u5BFC\u5165\u5BB9\u5668\u7684\u6570\u636E</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  store
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../../store/store&#39;</span>
<span class="token comment">// 3. \u7ED1\u5B9A\u64CD\u4F5C\uFF1A\u5C06\u4ED3\u5E93\u7684\u4E1C\u897F\u7ED1\u5B9A\u5230\u5F53\u524D\u7684\u9875\u9762\u4E2D\uFF0C\u5728\u9875\u9762\u7684js\u6587\u4EF6\u7684Page\u65B9\u6CD5\u4E2D</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// \u4E0A\u9762\u5468\u671F\u51FD\u6570--\u76D1\u542C\u9875\u9762\u7684\u52A0\u8F7D</span>
  <span class="token function-variable function">onLoad</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8C03\u7528createStoreBindings\u65B9\u6CD5</span>
    <span class="token comment">// \u53C2\u65701\uFF1A \u7ED1\u5B9A\u7ED9\u8C01\uFF1A\u5F53\u524D\u9875\u9762this</span>
    <span class="token comment">// \u53C2\u65702\uFF1A \u5BF9\u8C61{ store(\u5BB9\u5668)\uFF0C fields(\u6570\u636E)\uFF0C actions(\u4FEE\u6539\u65B9\u6CD5)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>storeBindings <span class="token operator">=</span> <span class="token function">createStoreBindings</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u6620\u5C04\u5BB9\u5668\u7684\u5B9E\u4F8B</span>
      store<span class="token punctuation">,</span>
      <span class="token comment">// \u6620\u5C04\u5BB9\u5668\u7684\u6570\u636E\u5B57\u6BB5</span>
      <span class="token literal-property property">fields</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;numA&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;numB&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;sum&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// \u6620\u5C04\u5BB9\u5668\u4FEE\u6539\u7684\u65B9\u6CD5</span>
      <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;updateNum1&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u751F\u547D\u5468\u671F\u51FD\u6570--\u76D1\u542C\u9875\u9762\u7684\u5378\u8F7D</span>
  <span class="token function-variable function">onUnload</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4F7F\u7528this.storeBindings\uFF0C\u5F97\u5230\u8C03\u7528createStoreBindings\u65B9\u6CD5\u7684\u8FD4\u56DE\u503C</span>
    <span class="token comment">//\u8C03\u7528destroyStoreBindings \u65B9\u6CD5\uFF0C\u8FDB\u884C\u6E05\u7406\u9500\u6BC1\u7684\u5DE5\u4F5C</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>storeBindings<span class="token punctuation">.</span><span class="token function">destroyStoreBindings</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u9875\u9762\u7684js\u6587\u4EF6\u4E2D\u7684 tap\u4E8B\u4EF6\u5904\u7406\u51FD\u6570</span>
  <span class="token function">btnHnadler1</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
    <span class="token comment">// \u4F7F\u7528\u4ED3\u5E93\u4E2D\u7684\u65B9\u6CD5\uFF0C\u5E76\u4F20\u9012\u6570\u636E</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateNum1</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u9875\u9762\u7684 wxml \u6587\u4EF6\u4E2D</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- \u4F7F\u7528\u4ED3\u5E93\u4E2D\u7684\u6570\u636E --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>{{numA}} + {{numB}} = {{sum}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btnHnadler1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>numA+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-button</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="_2-4\u3001\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-4\u3001\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528" aria-hidden="true">#</a> 2.4\u3001\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528</h3><ol><li>\u65B0\u5EFA\u7EC4\u4EF6\u6587\u4EF6\u5939\u4EE5\u53CA\u7EC4\u4EF6\u6587\u4EF6 numbers</li><li>\u5168\u5C40\u6CE8\u518C\u8FD9\u4E2A\u7EC4\u4EF6</li><li>\u5728 message \u9875\u9762\u4E2D\u4F7F\u7528\u5B50\u7EC4\u4EF6</li></ol><h2 id="\u4E09\u3001\u5206\u5305" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u5206\u5305" aria-hidden="true">#</a> \u4E09\u3001\u5206\u5305</h2><h3 id="_3-1\u3001\u5206\u5305\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_3-1\u3001\u5206\u5305\u6982\u5FF5" aria-hidden="true">#</a> 3.1\u3001\u5206\u5305\u6982\u5FF5</h3><p>\u5206\u5305\u6307\u7684\u662F\u628A\u4E00\u4E2A<strong>\u5B8C\u6574\u7684\u5C0F\u7A0B\u5E8F\u9879\u76EE</strong>\uFF0C\u6309\u7167\u9700\u6C42<strong>\u5212\u5206\u4E3A\u4E0D\u540C\u7684\u5B50\u5305</strong>\uFF0C\u5728<strong>\u6784\u5EFA\u65F6\u6253\u5305\u6210\u4E0D\u540C\u7684\u5206\u5305</strong>\uFF0C<strong>\u7528\u6237\u5728\u4F7F\u7528\u65F6\u6309\u9700\u8FDB\u884C\u52A0\u8F7D</strong>\u3002</p><p>\u5206\u5305\u7684\u597D\u5904\uFF1A</p><ul><li>\u53EF\u4EE5\u4F18\u5316\u5C0F\u7A0B\u5E8F\u9996\u6B21\u542F\u52A8\u7684\u4E0B\u8F7D\u65F6\u95F4</li><li>\u5728\u591A\u56E2\u961F\u5171\u540C\u5F00\u53D1\u65F6\u53EF\u4EE5\u66F4\u597D\u7684\u89E3\u8026\u534F\u4F5C</li></ul><p><strong>\u5206\u5305\u524D</strong> \u9879\u76EE\u7684\u6784\u6210</p><p>\u5206\u5305\u524D\uFF0C\u5C0F\u7A0B\u5E8F\u9879\u76EE\u4E2D\u6240\u6709\u7684\u9875\u9762\u548C\u8D44\u6E90\u90FD\u88AB\u6253\u5305\u5230\u4E86\u4E00\u8D77\uFF0C\u5BFC\u81F4\u6574\u4E2A\u9879\u76EE\u4F53\u79EF\u8FC7\u5927\uFF0C\u5F71\u54CD\u5C0F\u7A0B\u5E8F\u9996\u6B21 \u542F\u52A8\u7684\u4E0B\u8F7D\u65F6\u95F4\u3002</p><p><strong>\u5206\u5305\u540E</strong> \u9879\u76EE\u7684\u6784\u6210\uFF1A</p><p>\u5206\u5305\u540E\uFF0C\u5C0F\u7A0B\u5E8F\u9879\u76EE\u7531 <strong>1\u4E2A\u4E3B\u5305</strong> + <strong>\u591A\u4E2A\u5206\u5305</strong>\u7EC4\u6210\uFF1A</p><ul><li><strong>\u4E3B\u5305</strong>\uFF1A\u4E00\u822C\u53EA\u5305\u542B\u9879\u76EE\u7684\u542F\u52A8\u9875\u9762\u6216 TabBar \u9875\u9762\u3001\u4EE5\u53CA\u6240\u6709\u5206\u5305\u90FD\u9700\u8981\u7528\u5230\u7684\u4E00\u4E9B\u516C\u5171\u8D44\u6E90</li><li><strong>\u5206\u5305</strong>\uFF1A\u53EA\u5305\u542B\u548C\u5F53\u524D\u5206\u5305\u6709\u5173\u7684\u9875\u9762\u548C\u79C1\u6709\u8D44\u6E90</li></ul><p>\u5206\u5305\u7684\u52A0\u8F7D\u89C4\u5219\uFF1A</p><ol><li>\u5728\u5C0F\u7A0B\u5E8F\u542F\u52A8\u65F6\uFF0C\u9ED8\u8BA4\u4F1A\u4E0B\u8F7D\u4E3B\u5305\u5E76\u542F\u52A8\u4E3B\u5305\u5185\u9875\u9762\u3002tabBar \u9875\u9762\u9700\u8981\u653E\u5230\u4E3B\u5305\u4E2D</li><li>\u5F53\u7528\u6237\u8FDB\u5165\u5206\u5305\u5185\u67D0\u4E2A\u9875\u9762\u65F6\uFF0C\u5BA2\u6237\u7AEF\u4F1A\u628A\u5BF9\u5E94\u5206\u5305\u4E0B\u8F7D\u4E0B\u6765\uFF0C\u4E0B\u8F7D\u5B8C\u6210\u540E\u518D\u8FDB\u884C\u5C55\u793A\u3002\u3002\u975E tabBar \u9875\u9762\u53EF\u4EE5\u6309\u7167\u529F\u80FD\u7684\u4E0D\u540C\uFF0C\u5212\u5206\u4E3A\u4E0D\u540C\u7684\u5206\u5305\u4E4B\u540E\uFF0C\u8FDB\u884C\u6309\u9700\u4E0B\u8F7D</li></ol><p>\u5206\u5305\u7684\u4F53\u79EF\u9650\u5236\uFF1A</p><p>\u76EE\u524D\uFF0C\u5C0F\u7A0B\u5E8F\u5206\u5305\u7684\u5927\u5C0F\u6709\u4EE5\u4E0B\u4E24\u4E2A\u9650\u5236\uFF1A</p><ul><li>\u6574\u4E2A\u5C0F\u7A0B\u5E8F\u6240\u6709\u5206\u5305\u5927\u5C0F\u4E0D\u8D85\u8FC7 16M \uFF08\u4E3B\u5305 + \u6240\u6709\u5206\u5305\uFF09</li><li>\u5355\u4E2A\u5206\u5305/\u4E3B\u5305\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 2M</li></ul><h3 id="_3-2\u3001\u4F7F\u7528\u5206\u5305" tabindex="-1"><a class="header-anchor" href="#_3-2\u3001\u4F7F\u7528\u5206\u5305" aria-hidden="true">#</a> 3.2\u3001\u4F7F\u7528\u5206\u5305</h3><p>\u914D\u7F6E\u65B9\u6CD5\uFF1A</p><p>\u5728 app.json \u914D\u7F6E\u6587\u4EF6\u4E2D, \u65B0\u589E subpackages \u7684\u8282\u70B9, \u5C06\u5E0C\u671B\u653E\u5230\u5206\u5305\u7684\u9875\u9762,\u5199\u5165 subpackages \u6570\u7EC4\u7684 \u5143\u7D20\u4E2D.</p><p>\u6253\u5305\u539F\u5219\uFF1A</p><ol><li>\u5C0F\u7A0B\u5E8F\u4F1A\u6309 subpackages \u7684\u914D\u7F6E\u8FDB\u884C\u5206\u5305\uFF0C subpackages \u4E4B\u5916\u7684\u76EE\u5F55\u5C06\u88AB\u6253\u5305\u5230\u4E3B\u5305\u4E2D</li><li>\u4E3B\u5305\u4E5F\u53EF\u4EE5\u6709\u81EA\u5DF1\u7684 pages \uFF08\u5373\u6700\u5916\u5C42\u7684 pages \u5B57\u6BB5\uFF09</li><li>tabBar \u9875\u9762\u5FC5\u987B\u5728\u4E3B\u5305\u5185</li><li>\u5206\u5305\u4E4B\u95F4\u4E0D\u80FD\u4E92\u76F8\u5D4C\u5957</li></ol><p>\u5F15\u7528\u539F\u5219\uFF1A</p><ol><li>\u4E3B\u5305\u65E0\u6CD5\u5F15\u7528\u5206\u5305\u5185\u7684\u79C1\u6709\u8D44\u6E90</li><li>\u5206\u5305\u4E4B\u95F4\u4E0D\u80FD\u76F8\u4E92\u5F15\u7528\u79C1\u6709\u8D44\u6E90</li><li>\u5206\u5305\u53EF\u4EE5\u5F15\u7528\u4E3B\u5305\u5185\u7684\u516C\u5171\u8D44\u6E90</li></ol><h3 id="_3-3\u3001\u72EC\u7ACB\u5206\u5305" tabindex="-1"><a class="header-anchor" href="#_3-3\u3001\u72EC\u7ACB\u5206\u5305" aria-hidden="true">#</a> 3.3\u3001\u72EC\u7ACB\u5206\u5305</h3><p>\u72EC\u7ACB\u5206\u5305\u672C\u8D28\u4E0A\u4E5F\u662F\u5206\u5305\uFF0C\u53EA\u4E0D\u8FC7\u5B83\u6BD4\u8F83\u7279\u6B8A\uFF0C\u53EF\u4EE5\u72EC\u7ACB\u4E8E\u4E3B\u5305\u548C\u5176\u4ED6\u5206\u5305\u800C\u5355\u72EC\u8FD0\u884C\u3002</p><p>\u72EC\u7ACB\u5206\u5305\u548C\u666E\u901A\u5206\u5305\u7684\u533A\u522B:</p><p>\u6700\u4E3B\u8981\u7684\u533A\u522B\uFF1A\u662F\u5426\u4F9D\u8D56\u4E8E\u4E3B\u5305\u624D\u80FD\u8FD0\u884C</p><ul><li>\u666E\u901A\u5206\u5305\u5FC5\u987B\u4F9D\u8D56\u4E8E\u4E3B\u5305\u624D\u80FD\u8FD0\u884C</li><li>\u72EC\u7ACB\u5206\u5305\u53EF\u4EE5\u5728\u4E0D\u4E0B\u8F7D\u4E3B\u5305\u7684\u60C5\u51B5\u4E0B\uFF0C\u72EC\u7ACB\u8FD0\u884C</li></ul><p>\u72EC\u7ACB\u5206\u5305\u7684\u5E94\u7528\u573A\u666F:</p><p>\u5F00\u53D1\u8005\u53EF\u4EE5\u6309\u9700\uFF0C\u5C06\u67D0\u4E9B\u5177\u6709\u4E00\u5B9A\u529F\u80FD\u72EC\u7ACB\u6027\u7684\u9875\u9762\u914D\u7F6E\u5230\u72EC\u7ACB\u5206\u5305\u4E2D\u3002\u539F\u56E0\u5982\u4E0B\uFF1A</p><ul><li>\u5F53\u5C0F\u7A0B\u5E8F\u4ECE\u666E\u901A\u7684\u5206\u5305\u9875\u9762\u542F\u52A8\u65F6\uFF0C</li><li>\u9700\u8981\u9996\u5148\u4E0B\u8F7D\u4E3B\u5305 \u800C\u72EC\u7ACB\u5206\u5305\u4E0D\u4F9D\u8D56\u4E3B\u5305\u5373\u53EF\u8FD0\u884C\uFF0C\u53EF\u4EE5\u5F88\u5927\u7A0B\u5EA6\u4E0A\u63D0\u5347\u5206\u5305\u9875\u9762\u7684\u542F\u52A8\u901F\u5EA6</li></ul><blockquote><p>\u6CE8\u610F\uFF1A\u4E00\u4E2A\u5C0F\u7A0B\u5E8F\u4E2D\u53EF\u4EE5\u6709\u591A\u4E2A\u72EC\u7ACB\u5206\u5305\u3002</p></blockquote><p>\u548C\u666E\u901A\u5206\u5305\u5BF9\u6BD4, \u72EC\u7ACB\u5206\u5305\u5C31\u662F\u5728 subpackages \u6570\u7EC4\u7684\u67D0\u4E2A\u5143\u7D20\u4E2D, \u914D\u7F6E independent \u4E3Atrue\u5373\u53EF</p><ol start="5"><li>\u5F15\u7528\u539F\u5219:</li></ol><p>\u72EC\u7ACB\u5206\u5305\u548C\u666E\u901A\u5206\u5305\u4EE5\u53CA\u4E3B\u5305\u4E4B\u95F4\uFF0C\u662F\u76F8\u4E92\u9694\u7EDD\u7684\uFF0C\u4E0D\u80FD\u76F8\u4E92\u5F15\u7528\u5F7C\u6B64\u7684\u8D44\u6E90\uFF01\u4F8B\u5982\uFF1A</p><ol><li>\u4E3B\u5305\u65E0\u6CD5\u5F15\u7528\u72EC\u7ACB\u5206\u5305\u5185\u7684\u79C1\u6709\u8D44\u6E90</li><li>\u72EC\u7ACB\u5206\u5305\u4E4B\u95F4\uFF0C\u4E0D\u80FD\u76F8\u4E92\u5F15\u7528\u79C1\u6709\u8D44\u6E90</li><li>\u72EC\u7ACB\u5206\u5305\u548C\u666E\u901A\u5206\u5305\u4E4B\u95F4\uFF0C\u4E0D\u80FD\u76F8\u4E92\u5F15\u7528\u79C1\u6709\u8D44\u6E90</li><li>\u7279\u522B\u6CE8\u610F\uFF1A\u72EC\u7ACB\u5206\u5305\u4E2D\u4E0D\u80FD\u5F15\u7528\u4E3B\u5305\u5185\u7684\u516C\u5171\u8D44\u6E90</li></ol><h3 id="_3-4\u3001\u5206\u5305\u9884\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#_3-4\u3001\u5206\u5305\u9884\u4E0B\u8F7D" aria-hidden="true">#</a> 3.4\u3001\u5206\u5305\u9884\u4E0B\u8F7D</h3><p>\u5206\u5305\u9884\u4E0B\u8F7D\u6307\u7684\u662F\uFF1A\u5728\u8FDB\u5165\u5C0F\u7A0B\u5E8F\u7684\u67D0\u4E2A\u9875\u9762\u65F6\uFF0C\u7531\u6846\u67B6\u81EA\u52A8\u9884\u4E0B\u8F7D\u53EF\u80FD\u9700\u8981\u7684\u5206\u5305\uFF0C\u4ECE\u800C\u63D0\u5347\u8FDB\u5165\u540E \u7EED\u5206\u5305\u9875\u9762\u65F6\u7684\u542F\u52A8\u901F\u5EA6\u3002</p><p>\u914D\u7F6E\u5206\u5305\u7684\u9884\u4E0B\u8F7D\uFF1A</p><p>\u9884\u4E0B\u8F7D\u5206\u5305\u7684\u884C\u4E3A\uFF0C\u4F1A\u5728\u8FDB\u5165\u6307\u5B9A\u7684\u9875\u9762\u65F6\u89E6\u53D1\u3002\u5728 app.json \u4E2D\uFF0C\u4F7F\u7528 preloadRule \u8282\u70B9\u5B9A\u4E49\u5206\u5305 \u7684\u9884\u4E0B\u8F7D\u89C4\u5219\uFF0C\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token property">&quot;preloadRule&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u89E6\u53D1\u5206\u5305\u9884\u4E0B\u8F7D\u7684\u9875\u9762\u8DEF\u5F84</span>
    <span class="token property">&quot;page/concact/concact&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// network \u8868\u793A\u5728\u6307\u5B9A\u7684\u7F51\u7EDC\u6A21\u5F0F\u4E0B\u8FDB\u884C\u9884\u4E0B\u8F7D</span>
      <span class="token comment">// \u53EF\u9009\u503C\u6709\uFF1A all(\u4E0D\u9650\u7F51\u7EDC)\u548Cwifi(\u4EC5 wifi \u6A21\u5F0F\u4E0B\u8FDB\u884C\u9884\u4E0B\u8F7D)</span>
      <span class="token comment">// \u9ED8\u8BA4\u503C\u4E3A\uFF1A wifi</span>
      <span class="token property">&quot;network&quot;</span><span class="token operator">:</span> <span class="token string">&quot;all&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// packages \u8868\u793A\u8FDB\u5165\u9875\u9762\u540E\uFF0C \u9884\u4E0B\u8F7D\u54EA\u4E9B\u5206\u5305</span>
      <span class="token comment">// \u53EF\u4EE5\u901A\u8FC7root \u6216name \u6307\u5B9A\u9884\u4E0B\u8F7D\u54EA\u4E9B\u5206\u5305</span>
      <span class="token property">&quot;packages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;pkgA&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre></div><p>\u540C\u4E00\u4E2A\u5206\u5305\u4E2D\u7684\u9875\u9762\u4EAB\u6709\u5171\u540C\u7684\u9884\u4E0B\u8F7D\u5927\u5C0F\u9650\u989D 2M \uFF0C\u4F8B\u5982\uFF1A</p><p><img src="`+t+`" alt=""></p><h2 id="\u56DB\u3001\u81EA\u5B9A\u4E49-tabbar" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u81EA\u5B9A\u4E49-tabbar" aria-hidden="true">#</a> \u56DB\u3001\u81EA\u5B9A\u4E49 tabBar</h2><p>\u4E09\u5927\u6B65\u9AA4\uFF1A</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token property">&quot;tabBar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token property">&quot;custom&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>2\u3001\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u521B\u5EFAcustom-tab-bar\u6587\u4EF6\u5939, \u5E76\u521B\u5EFAindex\u7EC4\u4EF6</p><p>\u65B0\u5EFAComponent\uFF0C\u8F93\u5165\u7EC4\u4EF6\u540D\u6BD4\u5982 index\uFF0C\u81EA\u52A8\u751F\u6210\u4EE5\u4E0B\u6587\u4EF6\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>custom-tab-bar/index.js
custom-tab-bar/index.json
custom-tab-bar/index.wxml
custom-tab-bar/index.wxss

</code></pre></div><blockquote><p>\u6CE8\u610F: \u6587\u4EF6\u5939\u7684\u540D\u79F0\u548C\u7EC4\u4EF6\u7684\u540D\u79F0\u90FD\u4E0D\u80FD\u6539</p></blockquote><p>3\u3001\u7F16\u5199 tabBar \u4EE3\u7801</p>`,96),c=[e];function l(i,r){return s(),a("div",null,c)}var k=n(o,[["render",l],["__file","wechat-05.html.vue"]]);export{k as default};
