(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f=document.querySelector(".btn-calc-js");f.addEventListener("click",function(){a(),m()});let l=0;function a(){const r=document.querySelector('[name="widths-openings"]').value.toString(),s=document.querySelector('[name="lengths-openings"]').value.toString(),o=r.split(";").map(Number),n=s.split(";").map(Number);for(let e=0;e<o.length;e++)if(o[e]&&n[e]&&!isNaN(o[e])&&!isNaN(n[e])){const t=o[e]*n[e];console.log(`Проем ${e+1}: ${t.toFixed(2)} м.кв`),l+=t}return console.log(`Общая площадь проемов: ${l.toFixed(2)} м.кв`),l}a();function m(){const r=parseFloat(document.querySelector('[name="proportion"]').value),s=parseFloat(document.querySelector('[name="side-a"]').value),o=parseFloat(document.querySelector('[name="side-b"]').value),n=parseFloat(document.querySelector('[name="weight"]').value);if(isNaN(r)||isNaN(s)||isNaN(o)||isNaN(n))alert("Строки размеров плоскости и толщины слоя не могут быть пустыми или содержать некорректные значения!");else{const e=s*o;console.log(`Общая квадратура: ${e} м.кв`);const t=e-l;console.log(`Актуальная квадратура (без проемов): ${t} м.кв`);const c=t*n;console.log(`Объем расствора: ${c.toFixed(2)} м³`);const u=c*2e3;console.log(`Масса раствора: ${u.toFixed()} кг`);const i=u/(r+1);console.log(`Цемент: ${i.toFixed()} кг`);const d=i/25;console.log(`Цемент в мешках (по 25 кг): ${d.toFixed(2)} шт.`);const p=i.toFixed(2)*r;console.log(`Песок: ${p.toFixed()} кг`)}}
//# sourceMappingURL=commonHelpers.js.map