class TitchyTab extends HTMLElement {
	constructor() {
		super();
		this.pos = 0;
		this._init = this._init.bind(this);
		this.onOn = this.onOn.bind(this);
		this.onOff = this.onOff.bind(this);
		this._observer = new MutationObserver(this._init);
	}

	connectedCallback() {
		if (this.children.length) {
			this._init();
		}

		this._observer.observe(this, { childList: true });
	}

	disconnectedCallback() {
		this._observer.disconnect();
	}

	_init() {
		let offset = this.getAttribute("offset");
		let a = this.querySelector("a");
		a.addEventListener("mouseover", this.onOn);
		a.addEventListener("focus", this.onOn);
		a.addEventListener("mouseout", this.onOff);
		a.addEventListener("blur", this.onOff);
	}
	onOn() {
		// this.pos = this.pos++;
		console.log("onOn", this.pos);
	}
	onOff() {
		// this.pos -= 1;
		console.log("onOff", this.pos);
	}
}

customElements.get("titchy-tab") ||
	customElements.define("titchy-tab", TitchyTab);
