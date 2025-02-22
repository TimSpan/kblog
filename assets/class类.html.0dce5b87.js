import{_ as p,r as o,o as c,c as e,b as n,d as t,e as s,a as l}from"./app.a801a5dc.js";const u={},k=n("h1",{id:"class\u7C7B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#class\u7C7B","aria-hidden":"true"},"#"),s(" class\u7C7B")],-1),i=n("p",null,"\u8FD8\u662F\u76F4\u63A5\u770B\u962E\u4E00\u5CF0\u5199\u7684\u5427!\u6BD5\u7ADF\u4EBA\u5BB6\u5199\u5F97\u597D!\u4F60\u8BF4\u5462?\u6216\u8005\u770B\u7EA2\u76AE\u4E66",-1),r=s("\u962E\u4E00\u5CF0 "),d={href:"https://es6.ruanyifeng.com/#docs/class",target:"_blank",rel:"noopener noreferrer"},m=s("Class\u7684\u57FA\u672C\u8BED\u6CD5"),h=s("\u962E\u4E00\u5CF0 "),g={href:"https://es6.ruanyifeng.com/#docs/class-extends",target:"_blank",rel:"noopener noreferrer"},y=s("Class\u7684\u7EE7\u627F"),w=l(`<h2 id="class" tabindex="-1"><a class="header-anchor" href="#class" aria-hidden="true">#</a> class</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;(&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">+</span> <span class="token string">&#39;, &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">+</span> <span class="token string">&#39;)&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>Point</code>\u7C7B\u9664\u4E86\u6784\u9020\u65B9\u6CD5\uFF0C\u8FD8\u5B9A\u4E49\u4E86\u4E00\u4E2A<code>toString()</code>\u65B9\u6CD5</p><p><em><strong>\u5B9A\u4E49<code>toString()</code>\u65B9\u6CD5\u524D\u9762\u4E0D\u9700\u8981\u52A0\u4E0A<code>function</code>\u8FD9\u4E2A\u5173\u952E\u5B57</strong></em></p><p><strong>\u53E6\u5916\uFF0C\u65B9\u6CD5\u4E0E\u65B9\u6CD5\u4E4B\u95F4\u4E0D\u9700\u8981\u9017\u53F7\u5206\u9694\uFF0C\u52A0\u4E86\u4F1A\u62A5\u9519</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Ke</span> <span class="token punctuation">{</span><span class="token comment">//\u7C7B\u7684\u6570\u636E\u7C7B\u578B\u5C31\u662F\u51FD\u6570</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> Ke<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// function </span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Ke <span class="token operator">===</span> <span class="token class-name">Ke</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//true</span>
<span class="token comment">//\u7C7B\u672C\u8EAB\u5C31\u6307\u5411\u6784\u9020\u51FD\u6570</span>

<span class="token comment">//ES6 \u7684\u7C7B\uFF0C\u5B8C\u5168\u53EF\u4EE5\u770B\u4F5C\u6784\u9020\u51FD\u6570\u7684\u53E6\u4E00\u79CD\u5199\u6CD5\u3002</span>
</code></pre></div><p>\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u4E5F\u662F\u76F4\u63A5\u5BF9\u7C7B\u4F7F\u7528<code>new</code>\u547D\u4EE4\uFF0C\u8DDF\u6784\u9020\u51FD\u6570\u7684\u7528\u6CD5\u5B8C\u5168\u4E00\u81F4\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Ke</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> kevin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Ke</span>
</code></pre></div><p>\u6784\u9020\u51FD\u6570\u7684<code>prototype</code>\u5C5E\u6027\uFF0C\u5728 ES6 \u7684\u201C\u7C7B\u201D\u4E0A\u9762\u7EE7\u7EED\u5B58\u5728\u3002\u4E8B\u5B9E\u4E0A\uFF0C\u7C7B\u7684\u6240\u6709\u65B9\u6CD5\u90FD\u5B9A\u4E49\u5728\u7C7B\u7684<code>prototype</code>\u5C5E\u6027\u4E0A\u9762\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
  <span class="token function">toValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u7B49\u540C\u4E8E</span>
<span class="token class-name">Point</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token comment">//\u539F\u578B\u8BED\u6CD5\u7B80\u5199</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">toValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//constructor()\u3001toString()\u3001toValue()\u8FD9\u4E09\u4E2A\u65B9\u6CD5\uFF0C\u5176\u5B9E\u90FD\u662F\u5B9A\u4E49\u5728Point.prototype\u4E0A\u9762\u3002</span>
</code></pre></div><p>\u56E0\u6B64\uFF0C\u5728\u7C7B\u7684\u5B9E\u4F8B\u4E0A\u9762\u8C03\u7528\u65B9\u6CD5\uFF0C\u5176\u5B9E\u5C31\u662F\u8C03\u7528\u539F\u578B\u4E0A\u7684\u65B9\u6CD5\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b<span class="token punctuation">.</span>constructor <span class="token operator">===</span> <span class="token class-name">B</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token comment">// true</span>
</code></pre></div><h2 id="\u7C7B\u7684\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u7684\u5B9E\u4F8B" aria-hidden="true">#</a> \u7C7B\u7684\u5B9E\u4F8B</h2><p>\u7C7B\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u9664\u975E\u663E\u5F0F\u5B9A\u4E49\u5728\u5176\u672C\u8EAB\uFF08\u5373\u5B9A\u4E49\u5728<code>this</code>\u5BF9\u8C61\u4E0A\uFF09\uFF0C\u5426\u5219\u90FD\u662F\u5B9A\u4E49\u5728\u539F\u578B\u4E0A\uFF08\u5373\u5B9A\u4E49\u5728<code>class</code>\u4E0A\uFF09\u3002</p><h2 id="constructor-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#constructor-\u65B9\u6CD5" aria-hidden="true">#</a> constructor()\u65B9\u6CD5</h2><p><code>constructor()</code>\u65B9\u6CD5\u662F\u7C7B\u7684\u9ED8\u8BA4\u65B9\u6CD5 .<code>constructor()</code>\u65B9\u6CD5\u662F\u7C7B\u7684\u9ED8\u8BA4\u65B9\u6CD5 .\u5982\u679C\u6CA1\u6709\u663E\u5F0F\u5B9A\u4E49\uFF0C\u4E00\u4E2A\u7A7A\u7684<code>constructor()</code>\u65B9\u6CD5\u4F1A\u88AB\u9ED8\u8BA4\u6DFB\u52A0</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;(&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">+</span> <span class="token string">&#39;, &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">+</span> <span class="token string">&#39;)&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> point <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

point<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// (2, 3)</span>

point<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
point<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">&#39;y&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
point<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">&#39;toString&#39;</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
point<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">&#39;toString&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token comment">//\u7C7B\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u9664\u975E\u663E\u5F0F\u5B9A\u4E49\u5728\u5176\u672C\u8EAB\uFF08\u5373\u5B9A\u4E49\u5728this\u5BF9\u8C61\u4E0A\uFF09\uFF0C\u5426\u5219\u90FD\u662F\u5B9A\u4E49\u5728\u539F\u578B\u4E0A\uFF08\u5373\u5B9A\u4E49\u5728class\u4E0A\uFF09\u3002</span>
<span class="token comment">//x\u548Cy\u90FD\u662F\u5B9E\u4F8B\u5BF9\u8C61point\u81EA\u8EAB\u7684\u5C5E\u6027\uFF08\u56E0\u4E3A\u5B9A\u4E49\u5728this\u5BF9\u8C61\u4E0A\uFF09\uFF0C\u6240\u4EE5hasOwnProperty()\u65B9\u6CD5\u8FD4\u56DEtrue\uFF0C\u800CtoString()\u662F\u539F\u578B\u5BF9\u8C61\u7684\u5C5E\u6027\uFF08\u56E0\u4E3A\u5B9A\u4E49\u5728Point\u7C7B\u4E0A\uFF09\uFF0C\u6240\u4EE5hasOwnProperty()\u65B9\u6CD5\u8FD4\u56DEfalse\u3002\u8FD9\u4E9B\u90FD\u4E0E ES5 \u7684\u884C\u4E3A\u4FDD\u6301\u4E00\u81F4\u3002</span>

</code></pre></div><blockquote><p>\u7C7B\u7684\u5C5E\u6027\u540D\uFF0C\u53EF\u4EE5\u91C7\u7528\u8868\u8FBE\u5F0F\u3002</p></blockquote><h2 id="class\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#class\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> Class\u8868\u8FBE\u5F0F</h2><p>\u4E0E\u51FD\u6570\u4E00\u6837\uFF0C\u7C7B\u4E5F\u53EF\u4EE5\u4F7F\u7528\u8868\u8FBE\u5F0F\u7684\u5F62\u5F0F\u5B9A\u4E49\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> MyClass <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token class-name">Me</span> <span class="token punctuation">{</span>
  <span class="token function">getClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Me<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u7C7B\u7684\u540D\u5B57\u662FMe \u4F46\u662FMe\u65E8\u5728Class\u7684\u5185\u90E8\u53EF\u7528,\u6307\u4EE3\u5F53\u524D\u7C7B,\u5728Class\u5916\u90E8 \u8FD9\u4E2A\u7C7B\u53EA\u80FD\u7528MyClass\u4F7F\u7528</span>


<span class="token keyword">let</span> inst <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
inst<span class="token punctuation">.</span><span class="token function">getClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Me</span>
Me<span class="token punctuation">.</span>name <span class="token comment">// ReferenceError: Me is not defined</span>
<span class="token comment">//\u4E0A\u9762\u4EE3\u7801\u8868\u793A\uFF0CMe\u53EA\u5728 Class \u5185\u90E8\u6709\u5B9A\u4E49\u3002</span>

<span class="token comment">//\u5982\u679C\u7C7B\u7684\u5185\u90E8\u6CA1\u7528\u5230\u7684\u8BDD\uFF0C\u53EF\u4EE5\u7701\u7565Me\uFF0C\u4E5F\u5C31\u662F\u53EF\u4EE5\u5199\u6210\u4E0B\u9762\u7684\u5F62\u5F0F\u3002</span>
<span class="token keyword">const</span> MyClass <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u7ACB\u5373\u6267\u884C\u7684\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u7ACB\u5373\u6267\u884C\u7684\u7C7B" aria-hidden="true">#</a> \u7ACB\u5373\u6267\u884C\u7684\u7C7B</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">class</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

person<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;\u5F20\u4E09&quot;</span>
</code></pre></div><h2 id="\u9759\u6001\u65B9\u6CD5static" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u65B9\u6CD5static" aria-hidden="true">#</a> \u9759\u6001\u65B9\u6CD5static</h2><p>\u5982\u679C\u5728\u4E00\u4E2A\u65B9\u6CD5\u524D\uFF0C\u52A0\u4E0A<code>static</code>\u5173\u952E\u5B57\uFF0C\u5C31\u8868\u793A\u8BE5\u65B9\u6CD5\u4E0D\u4F1A\u88AB\u5B9E\u4F8B\u7EE7\u627F.\u800C\u662F\u76F4\u63A5\u901A\u8FC7\u7C7B\u6765\u8C03\u7528</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//static\u5173\u952E\u5B57</span>
    <span class="token keyword">return</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Foo<span class="token punctuation">.</span><span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;hello&#39;.\u53EA\u53EF\u4EE5\u5728Foo\u4E2D\u88AB\u8C03\u7528</span>

<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span><span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">// \u800C\u4E0D\u662F\u5728Foo\u7684\u5B9E\u4F8B\u4E0A\u8C03\u7528</span>
<span class="token comment">// TypeError: foo.classMethod is not a function</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">//\u5982\u679C\u9759\u6001\u65B9\u6CD5\u5305\u542Bthis\u5173\u952E\u5B57\uFF0C\u8FD9\u4E2Athis\u6307\u7684\u662F\u7C7B\uFF0C\u800C\u4E0D\u662F\u5B9E\u4F8B\u3002</span>
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">static</span> <span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Foo<span class="token punctuation">.</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// hello</span>
<span class="token comment">//\u9759\u6001\u65B9\u6CD5bar\u8C03\u7528\u4E86this.baz\uFF0C\u8FD9\u91CC\u7684this\u6307\u7684\u662FFoo\u7C7B\uFF0C\u800C\u4E0D\u662FFoo\u7684\u5B9E\u4F8B\uFF0C\u7B49\u540C\u4E8E\u8C03\u7528Foo.baz\u3002\u53E6\u5916\uFF0C\u4ECE\u8FD9\u4E2A\u4F8B\u5B50\u8FD8\u53EF\u4EE5\u770B\u51FA\uFF0C\u9759\u6001\u65B9\u6CD5\u53EF\u4EE5\u4E0E\u975E\u9759\u6001\u65B9\u6CD5\u91CD\u540D</span>
</code></pre></div><h3 id="super-\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#super-\u5173\u952E\u5B57" aria-hidden="true">#</a> super()\u5173\u952E\u5B57</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">//super\`\u8FD9\u4E2A\u5173\u952E\u5B57\uFF0C\u65E2\u53EF\u4EE5\u5F53\u4F5C\u51FD\u6570\u4F7F\u7528\uFF0C\u4E5F\u53EF\u4EE5\u5F53\u4F5C\u5BF9\u8C61\u4F7F\u7528\u3002\u5728\u8FD9\u4E24\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5B83\u7684\u7528\u6CD5\u5B8C\u5168\u4E0D\u540C\u3002</span>

<span class="token comment">//\u7B2C\u4E00\u79CD\u60C5\u51B5\uFF0C\`super\`\u4F5C\u4E3A\u51FD\u6570\u8C03\u7528\u65F6\u4EE3\u8868\u7236\u7C7B\u7684\u6784\u9020\u51FD\u6570\u3002ES6 \u8981\u6C42\uFF0C\u5B50\u7C7B\u7684\u6784\u9020\u51FD\u6570\u5FC5\u987B\u6267\u884C\u4E00\u6B21\`super\`\u51FD\u6570\u3002</span>
<span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u5B50\u7C7BB\u7684\u6784\u9020\u51FD\u6570\u4E4B\u4E2D\u7684super()\uFF0C\u4EE3\u8868\u8C03\u7528\u7236\u7C7B\u7684\u6784\u9020\u51FD\u6570\u3002\u8FD9\u662F\u5FC5\u987B\u7684\uFF0C\u5426\u5219 JavaScript \u5F15\u64CE\u4F1A\u62A5\u9519\u3002</span>

<span class="token comment">//\u6CE8\u610F\uFF0Csuper\u867D\u7136\u4EE3\u8868\u4E86\u7236\u7C7BA\u7684\u6784\u9020\u51FD\u6570\uFF0C\u4F46\u662F\u8FD4\u56DE\u7684\u662F\u5B50\u7C7BB\u7684\u5B9E\u4F8B\uFF0C\u5373super\u5185\u90E8\u7684this\u6307\u7684\u662FB\u7684\u5B9E\u4F8B\uFF0C\u56E0\u6B64super()\u5728\u8FD9\u91CC\u76F8\u5F53\u4E8EA.prototype.constructor.call(this)\u3002</span>

</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">.</span>target<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// A</span>
<span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// B</span>
<span class="token comment">//new.target\u6307\u5411\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684\u51FD\u6570\u3002\u53EF\u4EE5\u770B\u5230\uFF0C\u5728super()\u6267\u884C\u65F6\uFF0C\u5B83\u6307\u5411\u7684\u662F\u5B50\u7C7BB\u7684\u6784\u9020\u51FD\u6570\uFF0C\u800C\u4E0D\u662F\u7236\u7C7BA\u7684\u6784\u9020\u51FD\u6570\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0Csuper()\u5185\u90E8\u7684this\u6307\u5411\u7684\u662FB\u3002</span>
</code></pre></div><h2 id="extends" tabindex="-1"><a class="header-anchor" href="#extends" aria-hidden="true">#</a> extends</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">//\u7236\u7C7B\u7684\u9759\u6001\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u88AB\u5B50\u7C7B\u7EE7\u627F\u3002</span>
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span> <span class="token comment">//\u7236\u7C7B</span>
  <span class="token keyword">static</span> <span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Bar</span> <span class="token keyword">extends</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span> <span class="token comment">//Bar\u5B50\u7C7B</span>
<span class="token punctuation">}</span>

Bar<span class="token punctuation">.</span><span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;hello&#39;</span>
<span class="token comment">//\u7236\u7C7BFoo\u6709\u4E00\u4E2A\u9759\u6001\u65B9\u6CD5\uFF0C\u5B50\u7C7BBar\u53EF\u4EE5\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\u3002</span>
<span class="token comment">//\u8FD9\u4E24\u4E2A\u7C7B\u5B8C\u5168\u4E00\u6837\uFF0C\u7B49\u4E8E\u590D\u5236\u4E86\u4E00\u4E2APoint\u7C7B</span>
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>class Point { /* ... */ }

class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y); // \u8C03\u7528\u7236\u7C7B\u7684constructor(x, y)
    this.color = color;
  }

  toString() {
    return this.color + &#39; &#39; + super.toString(); // \u8C03\u7528\u7236\u7C7B\u7684toString()
  }
}
</code></pre></div>`,33);function f(v,x){const a=o("ExternalLinkIcon");return c(),e("div",null,[k,i,n("p",null,[r,n("a",d,[m,t(a)])]),n("p",null,[h,n("a",g,[y,t(a)])]),w])}var _=p(u,[["render",f],["__file","class\u7C7B.html.vue"]]);export{_ as default};
