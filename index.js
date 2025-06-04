import{a as u,S as d,i}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const p="50677647-868d585e754b962a191c6dabd",f="https://pixabay.com/api/";async function m(s){const o={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await u.get(f,{params:o})).data}const c=document.querySelector(".gallery");document.querySelector(".loader");const y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const o=s.map(e=>`
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
    `).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()}function g(){c.innerHTML=""}function L(){document.querySelector(".loader").classList.remove("is-hidden")}function b(){document.querySelector(".loader").classList.add("is-hidden")}const l=document.querySelector(".form"),q=l.querySelector('input[name="search-text"]');l.addEventListener("submit",async s=>{s.preventDefault();const o=q.value.trim();if(!o){i.warning({message:"Please enter a search query!",position:"topRight"});return}g(),L();try{const e=await m(o);e.hits.length===0?i.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):h(e.hits)}catch(e){i.error({message:`Error fetching images: ${e.message}`,position:"topRight"})}finally{b()}});
//# sourceMappingURL=index.js.map
