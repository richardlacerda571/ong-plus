function maskCEP(v){return v.replace(/\D/g,'').replace(/(\d{5})(\d{1,3})$/,'$1-$2');}
document.addEventListener('input',e=>{const t=e.target;if(t.id==='cep')t.value=maskCEP(t.value);});