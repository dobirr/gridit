import { slideUp, slideDown, slideToggle } from "./utilities"

export function accordeon(el) {
   const accEl = document.querySelectorAll(el);

   for (const el of accEl) {

      // get Toggle Header
      let accHeader = el.querySelector('h2');
      el.querySelector('h2').remove();

      // get Content
      let accBody = el.querySelector('ul');
      el.querySelector('ul').remove();

      // prepare toggler
      let toggler = document.createElement('div');
      toggler.classList.add('toggler');
      toggler.append(accHeader);

      let actions = `
         <div class="actions">
            <button class="open">
               <svg width="40" height="40" viewBox="0 0 40 40">
                  <rect y="18" width="40" height="4" rx="2"/>
                  <rect x="22" width="40" height="4" rx="2" transform="rotate(90 22 0)"/>
               </svg>
            </button>
            <button class="close">
                <svg width="40" height="40" viewBox="0 0 40 40">
                    <rect y="18" width="40" height="4" rx="2"/>
               </svg>
            </button>
          
         </div>
      `
      toggler.innerHTML += actions;

      // prepare body
      let body = document.createElement('div');
      body.classList.add('acc_body');
      body.append(accBody);

      // inject to DOM
      el.append(toggler);
      el.append(body);

      /* accordeon main function */
      toggler.addEventListener('click', (e) => {
         if(e.target.closest('.ce_downloads').classList.contains('active')) {
            e.target.closest('.ce_downloads').classList.remove('active');
            slideUp(e.target.closest('.ce_downloads').querySelector('.acc_body', 1000))
         } else {
            //resetActive(e);
            e.target.closest('.ce_downloads').classList.add('active');
            slideDown(e.target.closest('.ce_downloads').querySelector('.acc_body', 1000))
         }
      })
   }

   function resetActive() {
      for (const el of accEl) {
         el.classList.remove('active');
      }
   }
   function closeAccordeon(el) {
      for (const el of accEl) {
         slideDown(el.querySelector('.acc_body', 1000))
      }
   }






}