const ErudaHelper = {};
ErudaHelper.init = () => {
  
  const env = document.documentElement.getAttribute(`data-env-node-env`);
  if (env != 'development') return;
  
  const el = document.createElement('div');
  document.body.appendChild(el);
  eruda.init({container : el, tool : ['console', 'elements']});
  
}

setTimeout(() => {
  ErudaHelper.init();
}, 1000);