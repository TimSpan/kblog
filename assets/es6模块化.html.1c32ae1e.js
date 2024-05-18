import{_ as a,o as s,c as n,a as t}from"./app.a801a5dc.js";const e={},o=t(`<h1 id="es6\u6A21\u5757\u5316" tabindex="-1"><a class="header-anchor" href="#es6\u6A21\u5757\u5316" aria-hidden="true">#</a> ES6\u6A21\u5757\u5316</h1><h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2><p>\u5386\u53F2\u4E0A,JavaScript \u4E00\u76F4\u6CA1\u6709\u6A21\u5757 module \u4F53\u7CFB,\u65E0\u6CD5\u5C06\u4E00\u4E2A\u5927\u7A0B\u5E8F\u62C6\u5206\u6210\u4E92\u76F8\u4F9D\u8D56\u7684\u5C0F\u6587\u4EF6,\u518D\u7528\u7B80\u5355\u7684\u65B9\u6CD5\u62FC\u88C5\u8D77\u6765\u3002\u5176\u4ED6\u8BED\u8A00\u90FD\u6709\u8FD9\u9879\u529F\u80FD\uFF0C\u6BD4\u5982 Ruby \u7684require\u3001Python \u7684import,\u751A\u81F3\u5C31\u8FDE CSS \u90FD\u6709@import,\u4F46\u662F JavaScript \u4EFB\u4F55\u8FD9\u65B9\u9762\u7684\u652F\u6301\u90FD\u6CA1\u6709,\u8FD9\u5BF9\u5F00\u53D1\u5927\u578B\u7684\u3001\u590D\u6742\u7684\u9879\u76EE\u5F62\u6210\u4E86\u5DE8\u5927\u969C\u788D\u3002</p><p>\u5728 ES6 \u4E4B\u524D,\u793E\u533A\u5236\u5B9A\u4E86\u4E00\u4E9B\u6A21\u5757\u52A0\u8F7D\u65B9\u6848\uFF0C\u6700\u4E3B\u8981\u7684\u6709 CommonJS \u548C AMD \u4E24\u79CD\u3002\u524D\u8005\u7528\u4E8E\u670D\u52A1\u5668\uFF0C\u540E\u8005\u7528\u4E8E\u6D4F\u89C8\u5668\u3002ES6 \u5728\u8BED\u8A00\u6807\u51C6\u7684\u5C42\u9762\u4E0A,\u5B9E\u73B0\u4E86\u6A21\u5757\u529F\u80FD\uFF0C\u800C\u4E14\u5B9E\u73B0\u5F97\u76F8\u5F53\u7B80\u5355,\u5B8C\u5168\u53EF\u4EE5\u53D6\u4EE3 CommonJS \u548C AMD \u89C4\u8303,\u6210\u4E3A\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u901A\u7528\u7684\u6A21\u5757\u89E3\u51B3\u65B9\u6848\u3002</p><p>ES6 \u6A21\u5757\u7684\u8BBE\u8BA1\u601D\u60F3\u662F\u5C3D\u91CF\u7684\u9759\u6001\u5316,\u4F7F\u5F97\u7F16\u8BD1\u65F6\u5C31\u80FD\u786E\u5B9A\u6A21\u5757\u7684\u4F9D\u8D56\u5173\u7CFB,\u4EE5\u53CA\u8F93\u5165\u548C\u8F93\u51FA\u7684\u53D8\u91CF\u3002CommonJS \u548C AMD \u6A21\u5757,\u90FD\u53EA\u80FD\u5728\u8FD0\u884C\u65F6\u786E\u5B9A\u8FD9\u4E9B\u4E1C\u897F\u3002\u6BD4\u5982,CommonJS \u6A21\u5757\u5C31\u662F\u5BF9\u8C61,\u8F93\u5165\u65F6\u5FC5\u987B\u67E5\u627E\u5BF9\u8C61\u5C5E\u6027\u3002</p><p>\u9664\u4E86\u9759\u6001\u52A0\u8F7D\u5E26\u6765\u7684\u5404\u79CD\u597D\u5904\uFF0CES6 \u6A21\u5757\u8FD8\u6709\u4EE5\u4E0B\u597D\u5904\u3002</p><ol><li>\u4E0D\u518D\u9700\u8981<code>UMD</code>\u6A21\u5757\u683C\u5F0F\u4E86,\u5C06\u6765\u670D\u52A1\u5668\u548C\u6D4F\u89C8\u5668\u90FD\u4F1A\u652F\u6301 ES6 \u6A21\u5757\u683C\u5F0F\u3002\u76EE\u524D,\u901A\u8FC7\u5404\u79CD\u5DE5\u5177\u5E93\uFF0C\u5176\u5B9E\u5DF2\u7ECF\u505A\u5230\u4E86\u8FD9\u4E00\u70B9\u3002</li><li>\u5C06\u6765\u6D4F\u89C8\u5668\u7684\u65B0 API \u5C31\u80FD\u7528\u6A21\u5757\u683C\u5F0F\u63D0\u4F9B,\u4E0D\u518D\u5FC5\u987B\u505A\u6210\u5168\u5C40\u53D8\u91CF\u6216\u8005navigator\u5BF9\u8C61\u7684\u5C5E\u6027\u3002</li><li>\u4E0D\u518D\u9700\u8981\u5BF9\u8C61\u4F5C\u4E3A\u547D\u540D\u7A7A\u95F4\uFF08\u6BD4\u5982<code>Math</code>\u5BF9\u8C61\uFF09,\u672A\u6765\u8FD9\u4E9B\u529F\u80FD\u53EF\u4EE5\u901A\u8FC7\u6A21\u5757\u63D0\u4F9B\u3002</li></ol><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><h3 id="es6\u6A21\u5757\u5316\u89C4\u5B9A" tabindex="-1"><a class="header-anchor" href="#es6\u6A21\u5757\u5316\u89C4\u5B9A" aria-hidden="true">#</a> ES6\u6A21\u5757\u5316\u89C4\u5B9A</h3><ul><li>\u6BCF\u4E2Ajs\u6587\u4EF6\u90FD\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u6A21\u5757</li><li>\u5BFC\u5165\u5176\u4ED6\u6A21\u5757\u6210\u5458\u4F7F\u7528 <code>import</code> \u5173\u952E\u5B57</li><li>\u5411\u5916\u5171\u4EAB\u6210\u5458\u4F7F\u7528 export \u5173\u952E\u5B57</li></ul><h3 id="\u5728node-js\u4E2D\u4F7F\u7528es6-\u6A21\u5757\u5316" tabindex="-1"><a class="header-anchor" href="#\u5728node-js\u4E2D\u4F7F\u7528es6-\u6A21\u5757\u5316" aria-hidden="true">#</a> \u5728node.js\u4E2D\u4F7F\u7528ES6 \u6A21\u5757\u5316</h3><p>\u5728package.json\u6587\u4EF6\u4E2D\u6DFB\u52A0 <code>&quot;type&quot;:&quot;module&quot;</code> \u8282\u70B9</p><p>\u6216\u8005\u4E5F\u53EF\u4EE5\u7528\u53E6\u5916\u4E00\u79CD\u5F62\u5F0F\uFF1A</p><ol><li>\u521D\u59CB\u5316package.json: <code>npm init -y</code></li><li>\u5B89\u88C5\u63D2\u4EF6\uFF1A<code>npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node</code></li><li>\u5B89\u88C5\u7B2C\u4E8C\u6CE2\u63D2\u4EF6\uFF1A<code>npm install --save @babel/polyfill</code></li><li>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E2D\u521B\u5EFA\u4E00\u4E2A <code>babel.config.js</code> \u6587\u4EF6\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code>  <span class="token keyword">const</span> presets <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">[</span>
         <span class="token string">&quot;@babel/env&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
            <span class="token literal-property property">targets</span><span class="token operator">:</span><span class="token punctuation">{</span>
               <span class="token literal-property property">edge</span><span class="token operator">:</span><span class="token string">&quot;17&quot;</span><span class="token punctuation">,</span>
               <span class="token literal-property property">firefox</span><span class="token operator">:</span><span class="token string">&quot;60&quot;</span><span class="token punctuation">,</span>
               <span class="token literal-property property">chrome</span><span class="token operator">:</span><span class="token string">&quot;67&quot;</span><span class="token punctuation">,</span>
               <span class="token literal-property property">safari</span><span class="token operator">:</span><span class="token string">&quot;11.1&quot;</span>
            <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
      
   <span class="token punctuation">]</span>
   module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
      presets
   <span class="token punctuation">}</span>
</code></pre></div><p>\u4F7F\u7528\u7279\u5B9A\u547D\u4EE4\u8FD0\u884Cjs\u6587\u4EF6\uFF1A<code>npx babel-node ./index.js</code></p><h3 id="es6\u9ED8\u8BA4\u5BFC\u51FA\u548C\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#es6\u9ED8\u8BA4\u5BFC\u51FA\u548C\u5BFC\u5165" aria-hidden="true">#</a> ES6\u9ED8\u8BA4\u5BFC\u51FA\u548C\u5BFC\u5165</h3><h3 id="\u5BFC\u51FAexport" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u51FAexport" aria-hidden="true">#</a> \u5BFC\u51FAexport</h3><p><code>export default</code></p><h3 id="\u5BFC\u5165import" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u5165import" aria-hidden="true">#</a> \u5BFC\u5165import</h3><p>\u4F7F\u7528<code>export</code>\u547D\u4EE4\u5B9A\u4E49\u4E86\u6A21\u5757\u7684\u5BF9\u5916\u63A5\u53E3\u4EE5\u540E\uFF0C\u5176\u4ED6 JS \u6587\u4EF6\u5C31\u53EF\u4EE5\u901A\u8FC7<code>import</code>\u547D\u4EE4\u52A0\u8F7D\u8FD9\u4E2A\u6A21\u5757\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> \u63A5\u53D7\u540D\u79F0 <span class="token keyword">from</span> <span class="token string">&#39; \u6A21\u5757\u6807\u8BC6\u7B26 &#39;</span>
</code></pre></div><h3 id="\u5BFC\u51FA\u548C\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u51FA\u548C\u5BFC\u5165" aria-hidden="true">#</a> \u5BFC\u51FA\u548C\u5BFC\u5165</h3><blockquote><p>\u6BCF\u4E2A\u6A21\u5757\u4E2D,\u53EA\u5141\u8BB8\u4F7F\u7528\u552F\u4E00\u7684\u4E00\u6B21 <code>export default</code>.\u5426\u5219\u4F1A\u62A5\u9519</p></blockquote><h3 id="\u6309\u9700\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#\u6309\u9700\u5BFC\u5165" aria-hidden="true">#</a> \u6309\u9700\u5BFC\u5165</h3><p>\u5927\u62EC\u53F7\u5B57\u9762\u91CF</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vant&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Swipe<span class="token punctuation">,</span> SwipeItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vant&#39;</span>
</code></pre></div><h1 id="module\u7684\u52A0\u8F7D\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#module\u7684\u52A0\u8F7D\u5B9E\u73B0" aria-hidden="true">#</a> Module\u7684\u52A0\u8F7D\u5B9E\u73B0</h1><h3 id="_1-\u6D4F\u89C8\u5668\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#_1-\u6D4F\u89C8\u5668\u52A0\u8F7D" aria-hidden="true">#</a> 1_\u6D4F\u89C8\u5668\u52A0\u8F7D</h3><p>HTML \u7F51\u9875\u4E2D\uFF0C\u6D4F\u89C8\u5668\u901A\u8FC7<code>&lt;script&gt;</code>\u6807\u7B7E\u52A0\u8F7D JavaScript \u811A\u672C\u3002</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- \u9875\u9762\u5185\u5D4C\u7684\u811A\u672C --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>application/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// module code</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- \u5916\u90E8\u811A\u672C --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>application/javascript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>path/to/myModule.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u7531\u4E8E\u6D4F\u89C8\u5668\u811A\u672C\u7684\u9ED8\u8BA4\u8BED\u8A00\u662F JavaScript\uFF0C\u56E0\u6B64<code>type=&quot;application/javascript&quot;</code>\u53EF\u4EE5\u7701\u7565\u3002</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6D4F\u89C8\u5668\u662F\u540C\u6B65\u52A0\u8F7D JavaScript \u811A\u672C\uFF0C\u5373\u6E32\u67D3\u5F15\u64CE\u9047\u5230<code>&lt;script&gt;</code>\u6807\u7B7E\u5C31\u4F1A\u505C\u4E0B\u6765\uFF0C\u7B49\u5230\u6267\u884C\u5B8C\u811A\u672C\uFF0C\u518D\u7EE7\u7EED\u5411\u4E0B\u6E32\u67D3\u3002\u5982\u679C\u662F\u5916\u90E8\u811A\u672C\uFF0C\u8FD8\u5FC5\u987B\u52A0\u5165\u811A\u672C\u4E0B\u8F7D\u7684\u65F6\u95F4\u3002</p><p>\u5982\u679C\u811A\u672C\u4F53\u79EF\u5F88\u5927\uFF0C\u4E0B\u8F7D\u548C\u6267\u884C\u7684\u65F6\u95F4\u5C31\u4F1A\u5F88\u957F\uFF0C\u56E0\u6B64\u9020\u6210\u6D4F\u89C8\u5668\u5835\u585E\uFF0C\u7528\u6237\u4F1A\u611F\u89C9\u5230\u6D4F\u89C8\u5668\u201C\u5361\u6B7B\u201D\u4E86\uFF0C\u6CA1\u6709\u4EFB\u4F55\u54CD\u5E94\u3002\u8FD9\u663E\u7136\u662F\u5F88\u4E0D\u597D\u7684\u4F53\u9A8C\uFF0C\u6240\u4EE5\u6D4F\u89C8\u5668\u5141\u8BB8\u811A\u672C\u5F02\u6B65\u52A0\u8F7D\uFF0C\u4E0B\u9762\u5C31\u662F\u4E24\u79CD\u5F02\u6B65\u52A0\u8F7D\u7684\u8BED\u6CD5\u3002</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>path/to/myModule.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">defer</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>path/to/myModule.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">async</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>&lt;script&gt;</code>\u6807\u7B7E\u6253\u5F00<code>defer</code>\u6216<code>async</code>\u5C5E\u6027\uFF0C\u811A\u672C\u5C31\u4F1A\u5F02\u6B65\u52A0\u8F7D\u3002\u6E32\u67D3\u5F15\u64CE\u9047\u5230\u8FD9\u4E00\u884C\u547D\u4EE4\uFF0C\u5C31\u4F1A\u5F00\u59CB\u4E0B\u8F7D\u5916\u90E8\u811A\u672C\uFF0C\u4F46\u4E0D\u4F1A\u7B49\u5B83\u4E0B\u8F7D\u548C\u6267\u884C\uFF0C\u800C\u662F\u76F4\u63A5\u6267\u884C\u540E\u9762\u7684\u547D\u4EE4\u3002</p><p><code>defer</code>\u4E0E<code>async</code>\u7684\u533A\u522B\u662F\uFF1A<code>defer</code>\u8981\u7B49\u5230\u6574\u4E2A\u9875\u9762\u5728\u5185\u5B58\u4E2D\u6B63\u5E38\u6E32\u67D3\u7ED3\u675F\uFF08DOM \u7ED3\u6784\u5B8C\u5168\u751F\u6210\uFF0C\u4EE5\u53CA\u5176\u4ED6\u811A\u672C\u6267\u884C\u5B8C\u6210\uFF09\uFF0C\u624D\u4F1A\u6267\u884C\uFF1B<code>async</code>\u4E00\u65E6\u4E0B\u8F7D\u5B8C\uFF0C\u6E32\u67D3\u5F15\u64CE\u5C31\u4F1A\u4E2D\u65AD\u6E32\u67D3\uFF0C\u6267\u884C\u8FD9\u4E2A\u811A\u672C\u4EE5\u540E\uFF0C\u518D\u7EE7\u7EED\u6E32\u67D3\u3002\u4E00\u53E5\u8BDD\uFF0C<code>defer</code>\u662F\u201C\u6E32\u67D3\u5B8C\u518D\u6267\u884C\u201D\uFF0C<code>async</code>\u662F\u201C\u4E0B\u8F7D\u5B8C\u5C31\u6267\u884C\u201D\u3002\u53E6\u5916\uFF0C\u5982\u679C\u6709\u591A\u4E2A<code>defer</code>\u811A\u672C\uFF0C\u4F1A\u6309\u7167\u5B83\u4EEC\u5728\u9875\u9762\u51FA\u73B0\u7684\u987A\u5E8F\u52A0\u8F7D\uFF0C\u800C\u591A\u4E2A<code>async</code>\u811A\u672C\u662F\u4E0D\u80FD\u4FDD\u8BC1\u52A0\u8F7D\u987A\u5E8F\u7684\u3002</p><p>\u6D4F\u89C8\u5668\u52A0\u8F7D ES6 \u6A21\u5757\uFF0C\u4E5F\u4F7F\u7528<code>&lt;script&gt;</code>\u6807\u7B7E\uFF0C\u4F46\u662F\u8981\u52A0\u5165<code>type=&quot;module&quot;</code>\u5C5E\u6027\u3002</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./foo.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u5728\u7F51\u9875\u4E2D\u63D2\u5165\u4E00\u4E2A\u6A21\u5757<code>foo.js</code>\uFF0C\u7531\u4E8E<code>type</code>\u5C5E\u6027\u8BBE\u4E3A<code>module</code>\uFF0C\u6240\u4EE5\u6D4F\u89C8\u5668\u77E5\u9053\u8FD9\u662F\u4E00\u4E2A ES6 \u6A21\u5757\u3002</p><p>\u6D4F\u89C8\u5668\u5BF9\u4E8E\u5E26\u6709<code>type=&quot;module&quot;</code>\u7684<code>&lt;script&gt;</code>\uFF0C\u90FD\u662F\u5F02\u6B65\u52A0\u8F7D\uFF0C\u4E0D\u4F1A\u9020\u6210\u5835\u585E\u6D4F\u89C8\u5668\uFF0C\u5373\u7B49\u5230\u6574\u4E2A\u9875\u9762\u6E32\u67D3\u5B8C\uFF0C\u518D\u6267\u884C\u6A21\u5757\u811A\u672C\uFF0C\u7B49\u540C\u4E8E\u6253\u5F00\u4E86<code>&lt;script&gt;</code>\u6807\u7B7E\u7684<code>defer</code>\u5C5E\u6027\u3002</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./foo.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- \u7B49\u540C\u4E8E --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./foo.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">defer</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u5982\u679C\u7F51\u9875\u6709\u591A\u4E2A<code>&lt;script type=&quot;module&quot;&gt;</code>\uFF0C\u5B83\u4EEC\u4F1A\u6309\u7167\u5728\u9875\u9762\u51FA\u73B0\u7684\u987A\u5E8F\u4F9D\u6B21\u6267\u884C\u3002</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./foo.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">async</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u4E00\u65E6\u4F7F\u7528\u4E86<code>async</code>\u5C5E\u6027\uFF0C<code>&lt;script type=&quot;module&quot;&gt;</code>\u5C31\u4E0D\u4F1A\u6309\u7167\u5728\u9875\u9762\u51FA\u73B0\u7684\u987A\u5E8F\u6267\u884C\uFF0C\u800C\u662F\u53EA\u8981\u8BE5\u6A21\u5757\u52A0\u8F7D\u5B8C\u6210\uFF0C\u5C31\u6267\u884C\u8BE5\u6A21\u5757\u3002</p><p>ES6 \u6A21\u5757\u4E5F\u5141\u8BB8\u5185\u5D4C\u5728\u7F51\u9875\u4E2D\uFF0C\u8BED\u6CD5\u884C\u4E3A\u4E0E\u52A0\u8F7D\u5916\u90E8\u811A\u672C\u5B8C\u5168\u4E00\u81F4\u3002</p><h3 id="_2-esm\u4E0Ecommenjs\u7684\u5DEE\u5F02" tabindex="-1"><a class="header-anchor" href="#_2-esm\u4E0Ecommenjs\u7684\u5DEE\u5F02" aria-hidden="true">#</a> 2_ESM\u4E0ECommenJS\u7684\u5DEE\u5F02</h3><p>\u8BA8\u8BBA Node.js \u52A0\u8F7D ES6 \u6A21\u5757\u4E4B\u524D\uFF0C\u5FC5\u987B\u4E86\u89E3 ES6 \u6A21\u5757\u4E0E CommonJS \u6A21\u5757\u5B8C\u5168\u4E0D\u540C\u3002</p><p>\u5B83\u4EEC\u6709\u4E09\u4E2A\u91CD\u5927\u5DEE\u5F02\u3002</p><ul><li>CommonJS \u6A21\u5757\u8F93\u51FA\u7684\u662F\u4E00\u4E2A\u503C\u7684\u62F7\u8D1D\uFF0CES6 \u6A21\u5757\u8F93\u51FA\u7684\u662F\u503C\u7684\u5F15\u7528\u3002</li><li>CommonJS \u6A21\u5757\u662F\u8FD0\u884C\u65F6\u52A0\u8F7D\uFF0CES6 \u6A21\u5757\u662F\u7F16\u8BD1\u65F6\u8F93\u51FA\u63A5\u53E3\u3002</li><li>CommonJS \u6A21\u5757\u7684<code>require()</code>\u662F\u540C\u6B65\u52A0\u8F7D\u6A21\u5757\uFF0CES6 \u6A21\u5757\u7684<code>import</code>\u547D\u4EE4\u662F\u5F02\u6B65\u52A0\u8F7D\uFF0C\u6709\u4E00\u4E2A\u72EC\u7ACB\u7684\u6A21\u5757\u4F9D\u8D56\u7684\u89E3\u6790\u9636\u6BB5\u3002</li></ul><p>\u7B2C\u4E8C\u4E2A\u5DEE\u5F02\u662F\u56E0\u4E3A CommonJS \u52A0\u8F7D\u7684\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF08\u5373<code>module.exports</code>\u5C5E\u6027\uFF09\uFF0C\u8BE5\u5BF9\u8C61\u53EA\u6709\u5728\u811A\u672C\u8FD0\u884C\u5B8C\u624D\u4F1A\u751F\u6210\u3002\u800C ES6 \u6A21\u5757\u4E0D\u662F\u5BF9\u8C61\uFF0C\u5B83\u7684\u5BF9\u5916\u63A5\u53E3\u53EA\u662F\u4E00\u79CD\u9759\u6001\u5B9A\u4E49\uFF0C\u5728\u4EE3\u7801\u9759\u6001\u89E3\u6790\u9636\u6BB5\u5C31\u4F1A\u751F\u6210\u3002</p><p>ES6 \u6A21\u5757\u7684\u8FD0\u884C\u673A\u5236\u4E0E CommonJS \u4E0D\u4E00\u6837\u3002JS \u5F15\u64CE\u5BF9\u811A\u672C\u9759\u6001\u5206\u6790\u7684\u65F6\u5019\uFF0C\u9047\u5230\u6A21\u5757\u52A0\u8F7D\u547D\u4EE4<code>import</code>\uFF0C\u5C31\u4F1A\u751F\u6210\u4E00\u4E2A\u53EA\u8BFB\u5F15\u7528\u3002\u7B49\u5230\u811A\u672C\u771F\u6B63\u6267\u884C\u65F6\uFF0C\u518D\u6839\u636E\u8FD9\u4E2A\u53EA\u8BFB\u5F15\u7528\uFF0C\u5230\u88AB\u52A0\u8F7D\u7684\u90A3\u4E2A\u6A21\u5757\u91CC\u9762\u53BB\u53D6\u503C\u3002\u6362\u53E5\u8BDD\u8BF4\uFF0CES6 \u7684<code>import</code>\u6709\u70B9\u50CF Unix \u7CFB\u7EDF\u7684\u201C\u7B26\u53F7\u8FDE\u63A5\u201D\uFF0C\u539F\u59CB\u503C\u53D8\u4E86\uFF0C<code>import</code>\u52A0\u8F7D\u7684\u503C\u4E5F\u4F1A\u8DDF\u7740\u53D8\u3002\u56E0\u6B64\uFF0CES6 \u6A21\u5757\u662F\u52A8\u6001\u5F15\u7528\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u7F13\u5B58\u503C\uFF0C\u6A21\u5757\u91CC\u9762\u7684\u53D8\u91CF\u7ED1\u5B9A\u5176\u6240\u5728\u7684\u6A21\u5757\u3002</p><h3 id="_3-node-js\u7684\u6A21\u5757\u52A0\u8F7D\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-node-js\u7684\u6A21\u5757\u52A0\u8F7D\u65B9\u6CD5" aria-hidden="true">#</a> 3_Node.js\u7684\u6A21\u5757\u52A0\u8F7D\u65B9\u6CD5</h3><p>JavaScript \u73B0\u5728\u6709\u4E24\u79CD\u6A21\u5757\u3002\u4E00\u79CD\u662F ES6 \u6A21\u5757\uFF0C\u7B80\u79F0 ESM\uFF1B\u53E6\u4E00\u79CD\u662F CommonJS \u6A21\u5757\uFF0C\u7B80\u79F0 CJS\u3002</p><p>CommonJS \u6A21\u5757\u662F Node.js \u4E13\u7528\u7684\uFF0C\u4E0E ES6 \u6A21\u5757\u4E0D\u517C\u5BB9\u3002\u8BED\u6CD5\u4E0A\u9762\uFF0C\u4E24\u8005\u6700\u660E\u663E\u7684\u5DEE\u5F02\u662F\uFF0CCommonJS \u6A21\u5757\u4F7F\u7528<code>require()</code>\u548C<code>module.exports</code>\uFF0CES6 \u6A21\u5757\u4F7F\u7528<code>import</code>\u548C<code>export</code>\u3002</p><p>\u5B83\u4EEC\u91C7\u7528\u4E0D\u540C\u7684\u52A0\u8F7D\u65B9\u6848\u3002\u4ECE Node.js v13.2 \u7248\u672C\u5F00\u59CB\uFF0CNode.js \u5DF2\u7ECF\u9ED8\u8BA4\u6253\u5F00\u4E86 ES6 \u6A21\u5757\u652F\u6301\u3002</p><p>Node.js \u8981\u6C42 ES6 \u6A21\u5757\u91C7\u7528<code>.mjs</code>\u540E\u7F00\u6587\u4EF6\u540D\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u53EA\u8981\u811A\u672C\u6587\u4EF6\u91CC\u9762\u4F7F\u7528<code>import</code>\u6216\u8005<code>export</code>\u547D\u4EE4\uFF0C\u90A3\u4E48\u5C31\u5FC5\u987B\u91C7\u7528<code>.mjs</code>\u540E\u7F00\u540D\u3002Node.js \u9047\u5230<code>.mjs</code>\u6587\u4EF6\uFF0C\u5C31\u8BA4\u4E3A\u5B83\u662F ES6 \u6A21\u5757\uFF0C\u9ED8\u8BA4\u542F\u7528\u4E25\u683C\u6A21\u5F0F\uFF0C\u4E0D\u5FC5\u5728\u6BCF\u4E2A\u6A21\u5757\u6587\u4EF6\u9876\u90E8\u6307\u5B9A<code>&quot;use strict&quot;</code>\u3002</p><p>\u5982\u679C\u4E0D\u5E0C\u671B\u5C06\u540E\u7F00\u540D\u6539\u6210<code>.mjs</code>\uFF0C\u53EF\u4EE5\u5728\u9879\u76EE\u7684<code>package.json</code>\u6587\u4EF6\u4E2D\uFF0C\u6307\u5B9A<code>type</code>\u5B57\u6BB5\u4E3A<code>module</code>\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
   <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E00\u65E6\u8BBE\u7F6E\u4E86\u4EE5\u540E\uFF0C\u8BE5\u9879\u76EE\u7684 JS \u811A\u672C\uFF0C\u5C31\u88AB\u89E3\u91CA\u6210 ES6 \u6A21\u5757\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F .cjs\u6587\u4EF6</p><p>\u5982\u679C\u8FD9\u65F6\u8FD8\u8981\u4F7F\u7528 CommonJS \u6A21\u5757\uFF0C\u90A3\u4E48\u9700\u8981\u5C06 CommonJS \u811A\u672C\u7684\u540E\u7F00\u540D\u90FD\u6539\u6210<code>.cjs</code>\u3002\u5982\u679C\u6CA1\u6709<code>type</code>\u5B57\u6BB5\uFF0C\u6216\u8005<code>type</code>\u5B57\u6BB5\u4E3A<code>commonjs</code>\uFF0C\u5219<code>.js</code>\u811A\u672C\u4F1A\u88AB\u89E3\u91CA\u6210 CommonJS \u6A21\u5757\u3002</p><p>\u603B\u7ED3\u4E3A\u4E00\u53E5\u8BDD\uFF1A<code>.mjs</code>\u6587\u4EF6\u603B\u662F\u4EE5 ES6 \u6A21\u5757\u52A0\u8F7D\uFF0C<code>.cjs</code>\u6587\u4EF6\u603B\u662F\u4EE5 CommonJS \u6A21\u5757\u52A0\u8F7D\uFF0C<code>.js</code>\u6587\u4EF6\u7684\u52A0\u8F7D\u53D6\u51B3\u4E8E<code>package.json</code>\u91CC\u9762<code>type</code>\u5B57\u6BB5\u7684\u8BBE\u7F6E\u3002</p></div><p>\u6CE8\u610F\uFF0CES6 \u6A21\u5757\u4E0E CommonJS \u6A21\u5757\u5C3D\u91CF\u4E0D\u8981\u6DF7\u7528\u3002<code>require</code>\u547D\u4EE4\u4E0D\u80FD\u52A0\u8F7D<code>.mjs</code>\u6587\u4EF6\uFF0C\u4F1A\u62A5\u9519\uFF0C\u53EA\u6709<code>import</code>\u547D\u4EE4\u624D\u53EF\u4EE5\u52A0\u8F7D<code>.mjs</code>\u6587\u4EF6\u3002\u53CD\u8FC7\u6765\uFF0C<code>.mjs</code>\u6587\u4EF6\u91CC\u9762\u4E5F\u4E0D\u80FD\u4F7F\u7528<code>require</code>\u547D\u4EE4\uFF0C\u5FC5\u987B\u4F7F\u7528<code>import</code>\u3002</p><h3 id="_4-\u540C\u65F6\u652F\u6301\u4E24\u79CD\u683C\u5F0F\u7684\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_4-\u540C\u65F6\u652F\u6301\u4E24\u79CD\u683C\u5F0F\u7684\u6A21\u5757" aria-hidden="true">#</a> 4_\u540C\u65F6\u652F\u6301\u4E24\u79CD\u683C\u5F0F\u7684\u6A21\u5757</h3><p>\u4E00\u4E2A\u6A21\u5757\u540C\u65F6\u8981\u652F\u6301 CommonJS \u548C ES6 \u4E24\u79CD\u683C\u5F0F\uFF0C\u4E5F\u5F88\u5BB9\u6613\u3002</p><p>\u5982\u679C\u539F\u59CB\u6A21\u5757\u662F ES6 \u683C\u5F0F\uFF0C\u90A3\u4E48\u9700\u8981\u7ED9\u51FA\u4E00\u4E2A\u6574\u4F53\u8F93\u51FA\u63A5\u53E3\uFF0C\u6BD4\u5982<code>export default obj</code>\uFF0C\u4F7F\u5F97 CommonJS \u53EF\u4EE5\u7528<code>import()</code>\u8FDB\u884C\u52A0\u8F7D\u3002</p><p>\u5982\u679C\u539F\u59CB\u6A21\u5757\u662F CommonJS \u683C\u5F0F\uFF0C\u90A3\u4E48\u53EF\u4EE5\u52A0\u4E00\u4E2A\u5305\u88C5\u5C42\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> cjsModule <span class="token keyword">from</span> <span class="token string">&#39;../index.js&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> foo <span class="token operator">=</span> cjsModule<span class="token punctuation">.</span>foo<span class="token punctuation">;</span>
</code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u5148\u6574\u4F53\u8F93\u5165 CommonJS \u6A21\u5757\uFF0C\u7136\u540E\u518D\u6839\u636E\u9700\u8981\u8F93\u51FA\u5177\u540D\u63A5\u53E3\u3002</p><p>\u4F60\u53EF\u4EE5\u628A\u8FD9\u4E2A\u6587\u4EF6\u7684\u540E\u7F00\u540D\u6539\u4E3A<code>.mjs</code>\uFF0C\u6216\u8005\u5C06\u5B83\u653E\u5728\u4E00\u4E2A\u5B50\u76EE\u5F55\uFF0C\u518D\u5728\u8FD9\u4E2A\u5B50\u76EE\u5F55\u91CC\u9762\u653E\u4E00\u4E2A\u5355\u72EC\u7684<code>package.json</code>\u6587\u4EF6\uFF0C\u6307\u660E<code>{ type: &quot;module&quot; }</code>\u3002</p><p>\u53E6\u4E00\u79CD\u505A\u6CD5\u662F\u5728<code>package.json</code>\u6587\u4EF6\u7684<code>exports</code>\u5B57\u6BB5\uFF0C\u6307\u660E\u4E24\u79CD\u683C\u5F0F\u6A21\u5757\u5404\u81EA\u7684\u52A0\u8F7D\u5165\u53E3\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token string">&quot;exports&quot;</span>\uFF1A<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;require&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./index.js&quot;</span>\uFF0C
  <span class="token string-property property">&quot;import&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./esm/wrapper.js&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u6307\u5B9A<code>require()</code>\u548C<code>import</code>\uFF0C\u52A0\u8F7D\u8BE5\u6A21\u5757\u4F1A\u81EA\u52A8\u5207\u6362\u5230\u4E0D\u4E00\u6837\u7684\u5165\u53E3\u6587\u4EF6\u3002</p><h3 id="_5-\u52A0\u8F7D\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#_5-\u52A0\u8F7D\u8DEF\u5F84" aria-hidden="true">#</a> 5_\u52A0\u8F7D\u8DEF\u5F84</h3><p>ES6 \u6A21\u5757\u7684\u52A0\u8F7D\u8DEF\u5F84\u5FC5\u987B\u7ED9\u51FA\u811A\u672C\u7684\u5B8C\u6574\u8DEF\u5F84\uFF0C\u4E0D\u80FD\u7701\u7565\u811A\u672C\u7684\u540E\u7F00\u540D\u3002<code>import</code>\u547D\u4EE4\u548C<code>package.json</code>\u6587\u4EF6\u7684<code>main</code>\u5B57\u6BB5\u5982\u679C\u7701\u7565\u811A\u672C\u7684\u540E\u7F00\u540D\uFF0C\u4F1A\u62A5\u9519\u3002</p>`,74),p=[o];function c(l,r){return s(),n("div",null,p)}var d=a(e,[["render",c],["__file","es6\u6A21\u5757\u5316.html.vue"]]);export{d as default};
