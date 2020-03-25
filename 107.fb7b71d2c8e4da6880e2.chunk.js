(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{396:function(n,a,s){"use strict";s.r(a),a.default='<p>The imports loader allows you to use modules that depend on specific global variables.</p>\n<p>This is useful for third-party modules that rely on global variables like <code>$</code> or <code>this</code> being the <code>window</code> object. The imports loader can add the necessary <code>require(\'whatever\')</code> calls, so those modules work with webpack.</p>\n<h2 id="install">Install<a href="#install" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> imports-loader</code></pre>\n<h2 id="a-hrefhttpswebpackjsorgconceptsloadersusagea"><a href="https://webpack.js.org/concepts/loaders">Usage</a><a href="#a-hrefhttpswebpackjsorgconceptsloadersusagea" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Given you have this file <code>example.js</code></p>\n<pre><code class="hljs language-javascript"><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"img"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">doSomeAwesomeJqueryPluginStuff</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>then you can inject the <code>$</code> variable into the module by configuring the imports-loader like this:</p>\n<pre><code class="hljs language-javascript"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"imports-loader?$=jquery!./example.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>This simply prepends <code>var $ = require("jquery");</code> to <code>example.js</code>.</p>\n<h3 id="syntax">Syntax<a href="#syntax" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<table>\n<thead>\n<tr>\n<th>Query value</th>\n<th>Equals</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><div class="title"><p>Query value</p><p>Equals</p></div>\n<div class="content"><p><code>angular</code><p class="description mobile"> <code>var angular = require("angular");</code></p></p></div></td>\n<td class="description desktop"> \n<code>var angular = require("angular");</code></td>\n</tr>\n<tr>\n<td><div class="title"><p>Query value</p><p>Equals</p></div>\n<div class="content"><p><code>$=jquery</code><p class="description mobile"><code>var $ = require("jquery");</code></p></p></div></td>\n<td class="description desktop"><code>var $ = require("jquery");</code></td>\n</tr>\n<tr>\n<td><div class="title"><p>Query value</p><p>Equals</p></div>\n<div class="content"><p><code>define=>false</code><p class="description mobile"><code>var define = false;</code></p></p></div></td>\n<td class="description desktop"><code>var define = false;</code></td>\n</tr>\n<tr>\n<td><div class="title"><p>Query value</p><p>Equals</p></div>\n<div class="content"><p><code>config=>{size:50}</code><p class="description mobile"><code>var config = {size:50};</code></p></p></div></td>\n<td class="description desktop"><code>var config = {size:50};</code></td>\n</tr>\n<tr>\n<td><div class="title"><p>Query value</p><p>Equals</p></div>\n<div class="content"><p><code>this=>window</code><p class="description mobile"><code>(function () { ... }).call(window);</code></p></p></div></td>\n<td class="description desktop"><code>(function () { ... }).call(window);</code></td>\n</tr>\n</tbody>\n</table>\n<h3 id="multiple-values">Multiple values<a href="#multiple-values" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Multiple values are separated by comma <code>,</code>:</p>\n<pre><code class="hljs language-javascript"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"imports-loader?$=jquery,angular,config=>{size:50}!./file.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 id="webpackconfigjs">webpack.config.js<a href="#webpackconfigjs" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>As always, you should rather configure this in your <code>webpack.config.js</code>:</p>\n<pre><code class="hljs language-javascript"><span class="token comment">// ./webpack.config.js</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n    module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n                test<span class="token punctuation">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"some-module"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                use<span class="token punctuation">:</span> <span class="token string">"imports-loader?this=>window"</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2 id="typical-use-cases">Typical Use Cases<a href="#typical-use-cases" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h3 id="jquery-plugins">jQuery plugins<a href="#jquery-plugins" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>imports-loader?$=jquery</code></p>\n<h3 id="custom-angular-modules">Custom Angular modules<a href="#custom-angular-modules" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>imports-loader?angular</code></p>\n<h3 id="disable-amd">Disable AMD<a href="#disable-amd" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>There are many modules that check for a <code>define</code> function before using CommonJS. Since webpack is capable of both, they default to AMD in this case, which can be a problem if the implementation is quirky.</p>\n<p>Then you can easily disable the AMD path by writing</p>\n<pre><code class="hljs language-javascript">imports<span class="token operator">-</span>loader<span class="token operator">?</span>define<span class="token operator">=></span><span class="token boolean">false</span></code></pre>\n<p>For further hints on compatibility issues, check out <a href="http://webpack.github.io/docs/shimming-modules.html">Shimming Modules</a> of the official docs.</p>\n<h2 id="maintainers">Maintainers<a href="#maintainers" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<table>\n  <tbody>\n    <tr>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars3.githubusercontent.com/u/166921?v=3&s=150">\n        </br>\n        <a href="https://github.com/bebraw">Juho Vepsäläinen</a>\n      </td>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars2.githubusercontent.com/u/8420490?v=3&s=150">\n        </br>\n        <a href="https://github.com/d3viant0ne">Joshua Wiens</a>\n      </td>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars3.githubusercontent.com/u/533616?v=3&s=150">\n        </br>\n        <a href="https://github.com/SpaceK33z">Kees Kluskens</a>\n      </td>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars3.githubusercontent.com/u/3408176?v=3&s=150">\n        </br>\n        <a href="https://github.com/TheLarkInn">Sean Larkin</a>\n      </td>\n    </tr>\n  <tbody>\n</table>\n'}}]);