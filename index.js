import{a as p,S as d,i}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const f="50677647-868d585e754b962a191c6dabd",m="https://pixabay.com/api/";async function y(s){const o={key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await p.get(m,{params:o})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),g=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const o=s.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}" />
        </a>
        <div class="info">
          <p>👍 ${e.likes}</p>
          <p>👀 ${e.views}</p>
          <p>💬 ${e.comments}</p>
          <p>⬇️ ${e.downloads}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",o),g.refresh()}function L(){c.innerHTML=""}function b(){l.classList.add("visible")}function v(){l.classList.remove("visible")}const u=document.querySelector(".form"),q=u.querySelector('input[name="search-text"]');u.addEventListener("submit",async s=>{s.preventDefault();const o=q.value.trim();if(!o){i.warning({message:"Please enter a search query!",position:"topRight"});return}L(),b();try{const e=await y(o);e.hits.length===0?i.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):h(e.hits)}catch(e){i.error({message:`Error fetching images: ${e.message}`,position:"topRight"})}finally{v()}});
//# sourceMappingURL=index.js.map
