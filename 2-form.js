import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const t=document.querySelector(".feedback-form");let r={email:"",message:""};const o=()=>{try{if(localStorage.length===0)return;const e=JSON.parse(localStorage.getItem("feedback-form-state"));r=e;for(const a in e)t.elements[a].value=e[a]}catch(e){console.log(e)}};o();const m=e=>{const a=e.target.value.trim(),l=e.target.name;r[l]=a,localStorage.setItem("feedback-form-state",JSON.stringify(r))},s=e=>{if(e.preventDefault(),t.elements.email.value.trim()===""||t.elements.message.value.trim()===""){alert("fill all fields please");return}e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")};t.addEventListener("input",m);t.addEventListener("submit",s);
//# sourceMappingURL=2-form.js.map
