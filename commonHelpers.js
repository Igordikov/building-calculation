(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const h=document.querySelector(".btn-calc-js");h.addEventListener("click",F);let c=0;function F(){const a=document.querySelector('[name="widths-openings"]').value,l=document.querySelector('[name="lengths-openings"]').value,n=a.split(";").map(Number),s=l.split(";").map(Number),e=parseFloat(document.querySelector('[name="proportion"]').value),o=parseFloat(document.querySelector('[name="side-a"]').value),r=parseFloat(document.querySelector('[name="side-b"]').value),d=parseFloat(document.querySelector('[name="weight"]').value);for(let t=0;t<n.length;t++)if(n[t]&&s[t]&&!isNaN(n[t])&&!isNaN(s[t])){const g=n[t]*s[t];c+=g,console.log(`Проем ${t+1}: ${g.toFixed(2)} м.кв`)}const i=o*r,p=i-c,f=p*d,m=f*2e3,u=m/(e+1),y=u/25,N=u.toFixed(2)*e;if(isNaN(e)||isNaN(o)||isNaN(r)||isNaN(d))alert("Строки размеров плоскости и толщины слоя не могут быть пустыми или содержать некорректные значения!");else if(i<c){alert("Общая квадратура поверхности не может быть меньше общей квадратуры проемов");return}console.log(`Общая площадь проемов: ${c.toFixed(2)} м.кв`),console.log(`Общая квадратура: ${i} м.кв`),console.log(`Актуальная квадратура (без проемов): ${p.toFixed(2)} м.кв`),console.log(`Объем расствора: ${f.toFixed(2)} м³`),console.log(`Масса раствора: ${m.toFixed()} кг`),console.log(`Цемент: ${u.toFixed()} кг`),console.log(`Цемент в мешках (по 25 кг): ${y.toFixed(2)} шт.`),console.log(`Песок: ${N.toFixed()} кг`),console.log(`Пропорция цемент х песок: 1 x ${e}`)}
//# sourceMappingURL=commonHelpers.js.map