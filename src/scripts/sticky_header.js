/* sticky header */
export let isSticky = {
    bodyClass: 'stixxed',
    obj: document.getElementById('isSticky'),
    height: document.getElementById('isSticky').clientHeight,
    width: document.getElementById('isSticky').clientWidth,
    offsetTop: window.scrollY,
    lastOffsetTop: null,
    hideScrollUp: false,
    update() {
        this.lastOffsetTop = this.offsetTop;
        this.height = document.getElementById('isSticky').clientHeight;
        this.width = document.getElementById('isSticky').clientWidth;
        this.offsetTop = window.scrollY;
    },
    hide() {
        this.obj.style.top = -this.height + 'px';
        this.obj.style.opacity = 0;
        document.body.classList.remove(this.bodyClass)
    },
    show() {
        this.obj.style.top = 0 + 'px';
        this.obj.style.opacity = 1;
        document.body.classList.add(this.bodyClass);
    },
    run() {
        this.update();

        if(
            this.hideScrollUp === false)
        {
            if(this.offsetTop > this.height) {
                this.show();
            } else {
                this.hide();
            }
        }

        if(
            this.hideScrollUp === true)
        {
            if(
                this.lastOffsetTop > this.offsetTop &&
                this.offsetTop > this.height)
            {
                this.show();
            } else {
                this.hide();
            }
        }
    }
}