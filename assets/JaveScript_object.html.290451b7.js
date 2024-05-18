import{_ as p,r as t,o,c as e,b as s,d as c,a as l,e as n}from"./app.a801a5dc.js";const r={},u=l(`<h1 id="javescript\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#javescript\u5BF9\u8C61" aria-hidden="true">#</a> JaveScript\u5BF9\u8C61</h1><blockquote><p>\u53EF\u4EE5\u7406\u89E3\u4E3A\u4E00\u79CD\u65E0\u5E8F\u7684\u6570\u636E\u96C6\u5408\u3001\u6570\u7EC4\u662F\u6709\u5E8F\u7684\u800C\u6570\u636E\u96C6\u5408</p><p>\u590D\u6742\u6570\u636E\u7C7B\u578B\u90FD\u662Fobject. \u5728 JavaScript\u4E2D,\u6240\u6709\u7684\u4E8B\u7269\u90FD\u662F\u5BF9\u8C61 .</p><p>String ,Number ,Array Function \u90FD\u662F\u5BF9\u8C61</p></blockquote><h2 id="\u91CD\u65B0\u8BA4\u8BC6\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u91CD\u65B0\u8BA4\u8BC6\u5BF9\u8C61" aria-hidden="true">#</a> \u91CD\u65B0\u8BA4\u8BC6\u5BF9\u8C61</h2><p>JavaScript \u4E2D\u7684\u5BF9\u8C61\uFF0CObject\uFF0C\u53EF\u4EE5\u7B80\u5355\u7406\u89E3\u6210\u201C\u540D\u79F0 - \u503C\u201D\u5BF9\uFF08\u800C\u4E0D\u662F\u952E\u503C\u5BF9\uFF1A\u73B0\u5728\uFF0CES 2015 \u7684\u6620\u5C04\u8868\uFF08Map\uFF09\uFF0C\u6BD4\u5BF9\u8C61\u66F4\u63A5\u8FD1\u952E\u503C\u5BF9\uFF09\uFF0C\u4E0D\u96BE\u8054\u60F3 JavaScript \u4E2D\u7684\u5BF9\u8C61\u4E0E\u4E0B\u9762\u8FD9\u4E9B\u6982\u5FF5\u7C7B\u4F3C\uFF1A</p><ul><li>Python \u4E2D\u7684\u5B57\u5178\uFF08Dictionary\uFF09</li><li>Perl \u548C Ruby \u4E2D\u7684\u6563\u5217/\u54C8\u5E0C\uFF08Hash\uFF09</li><li>C/C++ \u4E2D\u7684\u6563\u5217\u8868\uFF08Hash table\uFF09</li><li>Java \u4E2D\u7684\u6563\u5217\u6620\u5C04\u8868\uFF08HashMap\uFF09</li><li>PHP \u4E2D\u7684\u5173\u8054\u6570\u7EC4\uFF08Associative array\uFF09</li></ul><p>\u8FD9\u6837\u7684\u6570\u636E\u7ED3\u6784\u8BBE\u8BA1\u5408\u7406\uFF0C\u80FD\u5E94\u4ED8\u5404\u7C7B\u590D\u6742\u9700\u6C42\uFF0C\u6240\u4EE5\u88AB\u5404\u7C7B\u7F16\u7A0B\u8BED\u8A00\u5E7F\u6CDB\u91C7\u7528\u3002\u6B63\u56E0\u4E3A JavaScript \u4E2D\u7684\u4E00\u5207\uFF08\u9664\u4E86\u6838\u5FC3\u7C7B\u578B\uFF0Ccore object\uFF09\u90FD\u662F\u5BF9\u8C61\uFF0C\u6240\u4EE5 JavaScript \u7A0B\u5E8F\u5FC5\u7136\u4E0E\u5927\u91CF\u7684\u6563\u5217\u8868\u67E5\u627E\u64CD\u4F5C\u6709\u7740\u5343\u4E1D\u4E07\u7F15\u7684\u8054\u7CFB\uFF0C\u800C\u6563\u5217\u8868\u64C5\u957F\u7684\u6B63\u662F\u9AD8\u901F\u67E5\u627E\u3002</p><p>\u201C<strong>\u540D\u79F0</strong>\u201D\u90E8\u5206\u662F\u4E00\u4E2A JavaScript \u5B57\u7B26\u4E32\uFF0C\u201C<strong>\u503C</strong>\u201D\u90E8\u5206\u53EF\u4EE5\u662F\u4EFB\u4F55 JavaScript \u7684\u6570\u636E\u7C7B\u578B\u2014\u2014\u5305\u62EC\u5BF9\u8C61\u3002\u8FD9\u4F7F\u7528\u6237\u53EF\u4EE5\u6839\u636E\u5177\u4F53\u9700\u6C42\uFF0C\u521B\u5EFA\u51FA\u76F8\u5F53\u590D\u6742\u7684\u6570\u636E\u7ED3\u6784\u3002</p><h2 id="\u5BF9\u8C61\u4E2D\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u4E2D\u7684\u65B9\u6CD5" aria-hidden="true">#</a> \u5BF9\u8C61\u4E2D\u7684\u65B9\u6CD5</h2><blockquote><ol><li>\u65B9\u6CD5\u662F\u4F9D\u9644\u5728\u5BF9\u8C61\u4E2D\u7684\u51FD\u6570</li><li>\u8C03\u7528\u5BF9\u8C61\u4E2D\u51FD\u6570\uFF0C\u79F0\u4E4B\u4E3A\u65B9\u6CD5\u8C03\u7528(<code>\u4E5F\u53EF\u4EE5\u6DFB\u52A0\u5F62\u53C2\u548C\u5B9E\u53C2</code>)</li></ol></blockquote><h2 id="\u904D\u5386\u5BF9\u8C61for-in" tabindex="-1"><a class="header-anchor" href="#\u904D\u5386\u5BF9\u8C61for-in" aria-hidden="true">#</a> \u904D\u5386\u5BF9\u8C61for in</h2><ul><li>\u5BF9\u8C61\u6CA1\u6709\u50CF\u6570\u7EC4\u4E00\u6837\u7684length\u5C5E\u6027,\u6240\u4EE5\u65E0\u6CD5\u786E\u5B9A\u957F\u5EA6</li><li>\u5BF9\u8C61\u91CC\u9762\u662F\u65E0\u5E8F\u7684\u952E\u503C\u5BF9, \u6CA1\u6709\u89C4\u5F8B. \u4E0D\u50CF\u6570\u7EC4\u91CC\u9762\u6709\u89C4\u5F8B\u7684\u4E0B\u6807</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code> <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">uname</span><span class="token operator">:</span> <span class="token string">&#39;Kevin&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
   <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">&#39;\u7537&#39;</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> k <span class="token keyword">in</span> obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8F93\u51FA\u6240\u6709\u5C5E\u6027\u540D</span>
   document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment">// \u8F93\u51FA\u6240\u6709\u5C5E\u6027\u503C</span>
   document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>uname<span class="token punctuation">)</span>
   document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span><span class="token string">&#39;uname&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment">//&#39;uname&#39;  === k</span>
 <span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5BF9\u8C61\u58F0\u660E\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u58F0\u660E\u8BED\u6CD5" aria-hidden="true">#</a> \u5BF9\u8C61\u58F0\u660E\u8BED\u6CD5</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> \u5BF9\u8C61\u540D <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> \u5BF9\u8C61\u540D <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5982\u540CJavaScript\u4E2D\u7684\u5F88\u591A\u4E1C\u897F\u4E00\u6837\uFF0C\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\u901A\u5E38\u5148\u5B9A\u4E49\u521D\u59CB\u5316\u53D8\u91CF\u3001\u4F7F\u7528\u82B1\u62EC\u53F7<code>{ }</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Smith&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span> <span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
  <span class="token literal-property property">gender</span> <span class="token operator">:</span> <span class="token string">&#39;male&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">interests</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;music&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;skiing&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function-variable function">bio</span> <span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&#39; is &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">+</span> <span class="token string">&#39; years old. He likes &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>interests<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&#39; and &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>interests<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">greeting</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Hi! I\\&#39;m &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// . \u70B9\u8868\u793A\u6CD5\u3001\u8BBF\u95EE\u5BF9\u8C61\u5185\u90E8\u7684\u5C5E\u6027\u6216\u65B9\u6CD5</span>
person<span class="token punctuation">.</span>name<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
person<span class="token punctuation">.</span>age
person<span class="token punctuation">.</span>interests<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
person<span class="token punctuation">.</span><span class="token function">bio</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
person<span class="token punctuation">.</span><span class="token function">greeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u63D0\u793A\u5BF9\u8BDD\u6846\u663E\u793A:</span>
<span class="token comment">// Hi! I&#39;m Bob.</span>
<span class="token comment">// Bob Smith is 32 years old. He likes music and skiing.</span>
</code></pre></div><blockquote><p>\u4E00\u4E2A\u5BF9\u8C61<code>person</code>\u6709\u5F88\u591A\u6210\u5458\u7EC4\u6210\u3001\u6BD4\u5982<code>name</code>\u3001<code>age</code> \u3001<code>gender</code>\u3001<code>interests</code></p><p>\u6BCF\u4E00\u4E2A\u6210\u5458\u7528\u9017\u53F7\u5206\u9694\u5F00\u3001\u5E76\u4E14\u540D\u5B57\u548C\u503C\u4E4B\u95F4\u7531\u5192\u53F7 <code>:</code> \u5206\u9694</p></blockquote><p>\u5BF9\u8C61\u6210\u5458\u7684\u503C\u53EF\u4EE5\u662F\u4EFB\u610F\u7684\uFF0C\u5728\u6211\u4EEC\u7684person\u5BF9\u8C61\u91CC\u6709\u5B57\u7B26\u4E32(string)\uFF0C\u6570\u5B57(number)\uFF0C\u4E24\u4E2A\u6570\u7EC4(array)\uFF0C\u4E24\u4E2A\u51FD\u6570(function)\u3002\u524D4\u4E2A\u6210\u5458\u662F\u8D44\u6599\u9879\u76EE\uFF0C\u88AB\u79F0\u4E3A\u5BF9\u8C61\u7684\u5C5E\u6027(property)\uFF0C</p><blockquote><p>\u540E\u4E24\u4E2A\u6210\u5458\u662F\u51FD\u6570\uFF0C\u5141\u8BB8\u5BF9\u8C61\u5BF9\u8D44\u6599\u505A\u4E00\u4E9B\u64CD\u4F5C\uFF0C\u88AB\u79F0\u4E3A\u5BF9\u8C61\u7684\u65B9\u6CD5(method)</p></blockquote><h2 id="\u5B50\u547D\u540D\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u5B50\u547D\u540D\u7A7A\u95F4" aria-hidden="true">#</a> \u5B50\u547D\u540D\u7A7A\u95F4</h2><p>\u53EF\u4EE5\u7528\u4E00\u4E2A\u5BF9\u8C61\u6765\u505A\u53E6\u4E00\u4E2A\u5BF9\u8C61\u6210\u5458\u7684\u503C\u3002\u4F8B\u5982\u5C06name\u6210\u5458</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token literal-property property">name</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Smith&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token comment">// \u5C06\u4E0A\u8FF0\u4EE3\u7801\u6539\u6210\u5982\u4E0B:</span>
<span class="token literal-property property">name</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">first</span> <span class="token operator">:</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">last</span> <span class="token operator">:</span> <span class="token string">&#39;Smith&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>\u4F60\u53EA\u9700\u8981\u94FE\u5F0F\u7684\u518D\u4F7F\u7528\u4E00\u6B21\u70B9\u8868\u793A\u6CD5\uFF0C\u50CF\u8FD9\u6837\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>person<span class="token punctuation">.</span>name<span class="token punctuation">.</span>first
person<span class="token punctuation">.</span>name<span class="token punctuation">.</span>last
</code></pre></div><blockquote><p>\u6CE8\u610F\uFF01\u4F60\u9700\u8981\u6539\u53D8\u4F60\u4E4B\u524D\u7684\u4EE3\u7801</p></blockquote><div class="language-javascript ext-js"><pre class="language-javascript"><code>name<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
name<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token comment">// \u5C06\u4E0A\u8FF0\u4EE3\u7801\u6539\u6210\u5982\u4E0B:</span>
name<span class="token punctuation">.</span>first
name<span class="token punctuation">.</span>last
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">first</span><span class="token operator">:</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">last</span><span class="token operator">:</span> <span class="token string">&#39;Smith&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
            <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">&#39;male&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">interests</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;music&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;skiing&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token function-variable function">bio</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&#39; is &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">+</span> <span class="token string">&#39; years old. He likes &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>interests<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&#39; and &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>interests<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function-variable function">greeting</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Hi! I\\&#39;m &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        person<span class="token punctuation">.</span>name<span class="token punctuation">.</span>first
        person<span class="token punctuation">.</span>name<span class="token punctuation">.</span>last
        person<span class="token punctuation">.</span>age
        person<span class="token punctuation">.</span>interests<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
        person<span class="token punctuation">.</span><span class="token function">bio</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        person<span class="token punctuation">.</span><span class="token function">greeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u62EC\u53F7\u8868\u793A\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u62EC\u53F7\u8868\u793A\u6CD5" aria-hidden="true">#</a> \u62EC\u53F7\u8868\u793A\u6CD5</h2><p>\u53E6\u5916\u4E00\u79CD\u8BBF\u95EE\u5C5E\u6027\u7684\u65B9\u5F0F\u662F\u4F7F\u7528\u62EC\u53F7\u8868\u793A\u6CD5(bracket notation)</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>person<span class="token punctuation">.</span>age
person<span class="token punctuation">.</span>name<span class="token punctuation">.</span>first
<span class="token comment">//  \u5C06\u4E0A\u8FF0\u4EE3\u7801\u6539\u6210\u5982\u4E0B:</span>
person<span class="token punctuation">[</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span>
person<span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;first&#39;</span><span class="token punctuation">]</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u8BBE\u7F6E\u5BF9\u8C61\u6210\u5458\u7684\u503C</span>
person<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">45</span>
person<span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;last&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Cratchit&#39;</span>
</code></pre></div><p>\u8BBE\u7F6E\u6210\u5458\u5E76\u4E0D\u610F\u5473\u7740\u4F60\u53EA\u80FD\u66F4\u65B0\u5DF2\u7ECF\u5B58\u5728\u7684\u5C5E\u6027\u7684\u503C\uFF0C\u4F60\u5B8C\u5168\u53EF\u4EE5\u521B\u5EFA\u65B0\u7684\u6210\u5458\uFF0C\u5C1D\u8BD5\u4EE5\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>person<span class="token punctuation">[</span><span class="token string">&#39;eyes&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;hazel&#39;</span>
person<span class="token punctuation">.</span><span class="token function-variable function">farewell</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;Bye everybody!&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token comment">// \u62EC\u53F7\u8868\u793A\u6CD5\u4E00\u4E2A\u6709\u7528\u7684\u5730\u65B9\u662F\u5B83\u4E0D\u4EC5\u53EF\u4EE5\u52A8\u6001\u7684\u53BB\u8BBE\u7F6E\u5BF9\u8C61\u6210\u5458\u7684\u503C\uFF0C\u8FD8\u53EF\u4EE5\u52A8\u6001\u7684\u53BB\u8BBE\u7F6E\u6210\u5458\u7684\u540D\u5B57\u3002</span>
</code></pre></div><p>\u62EC\u53F7\u8868\u793A\u6CD5\u4E00\u4E2A\u6709\u7528\u7684\u5730\u65B9\u662F\u5B83\u4E0D\u4EC5\u53EF\u4EE5\u52A8\u6001\u7684\u53BB\u8BBE\u7F6E<code>\u5BF9\u8C61\u6210\u5458\u7684\u503C</code>\uFF0C\u8FD8\u53EF\u4EE5\u52A8\u6001\u7684\u53BB\u8BBE\u7F6E<code>\u5BF9\u8C61\u6210\u5458\u7684\u540D\u5B57</code>\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// let myDataName = nameInput.value</span>
<span class="token comment">// let myDataValue = nameValue.value</span>
<span class="token keyword">let</span> myDataName <span class="token operator">=</span> <span class="token string">&#39;height&#39;</span>
<span class="token keyword">let</span> myDataValue <span class="token operator">=</span> <span class="token string">&#39;1.75m&#39;</span>
person<span class="token punctuation">[</span>myDataName<span class="token punctuation">]</span> <span class="token operator">=</span> myDataValue
<span class="token function">alert</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>height<span class="token punctuation">)</span>
</code></pre></div><h2 id="this\u7684\u542B\u4E49" tabindex="-1"><a class="header-anchor" href="#this\u7684\u542B\u4E49" aria-hidden="true">#</a> This\u7684\u542B\u4E49</h2>`,37),i=n('\u4F60\u4E5F\u8BB8\u60F3\u77E5\u9053"this"\u662F\u4EC0\u4E48\uFF0C\u5173\u952E\u5B57"this"\u6307\u5411\u4E86\u5F53\u524D\u4EE3\u7801\u8FD0\u884C\u65F6\u7684\u5BF9\u8C61( \u539F\u6587\uFF1Athe current object the code is being written inside )\u2014\u2014\u8FD9\u91CC\u5373\u6307person\u5BF9\u8C61\uFF0C\u4E3A\u4EC0\u4E48\u4E0D\u76F4\u63A5\u5199person\u5462\uFF1F\u5F53\u4F60\u5B66\u5230\u4E0B\u4E00\u7BC7'),k={href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript",target:"_blank",rel:"noopener noreferrer"},d=n("Object-oriented JavaScript for beginners"),g=n('\u6587\u7AE0\u65F6\uFF0C\u6211\u4EEC\u5F00\u59CB\u4F7F\u7528\u6784\u9020\u5668(constructor)\u65F6\uFF0C"this"\u662F\u975E\u5E38\u6709\u7528\u7684\u2014\u2014\u5B83\u4FDD\u8BC1\u4E86\u5F53\u4EE3\u7801\u7684\u4E0A\u4E0B\u6587(context)\u6539\u53D8\u65F6\u53D8\u91CF\u7684\u503C\u7684\u6B63\u786E\u6027\uFF08\u6BD4\u5982\uFF1A\u4E0D\u540C\u7684person\u5BF9\u8C61\u62E5\u6709\u4E0D\u540C\u7684name\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u5F88\u660E\u663Egreeting\u8FD9\u4E2A\u65B9\u6CD5\u9700\u8981\u4F7F\u7528\u7684\u662F\u5B83\u4EEC\u81EA\u5DF1\u7684name\uFF09\u3002');function m(h,y){const a=t("ExternalLinkIcon");return o(),e("div",null,[u,s("p",null,[i,s("a",k,[d,c(a)]),g])])}var b=p(r,[["render",m],["__file","JaveScript_object.html.vue"]]);export{b as default};
