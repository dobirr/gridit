export function switchLang() {
    const getLangEl = document.querySelectorAll('.sprachwechsler');

    setLang(getLangEl);

    function setLang(getLangEl) {
        for (const el of getLangEl) {
            const getParentPageInfoEl = el.closest('.sprachwechsler').querySelector('.page_info');
            if(el.querySelector('li.active ')) {
                getParentPageInfoEl.innerText = el.querySelector('strong').innerText;
            }
        }
    }
}
