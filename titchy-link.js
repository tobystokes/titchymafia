class TitchyLink extends HTMLElement {
	constructor() {
		super();
		this.pos = 0;
		this.direction = 0;
		this.frameCount = 0;
		this.onOn = this.onOn.bind(this);
		this.onOff = this.onOff.bind(this);
		this.animate = this.animate.bind(this);
	}

	connectedCallback() {
		this.addEventListener("mouseover", this.onOn);
		this.addEventListener("focusin", this.onOn);
		this.addEventListener("mouseout", this.onOff);
		this.addEventListener("focusout", this.onOff);
	}

	onOn(event) {
		this.direction = 1;
		requestAnimationFrame(this.animate);
	}
	onOff(event) {
		this.direction = -1;
		requestAnimationFrame(this.animate);
	}
	clamp(val, min, max) {
		return val > max ? max : val < min ? min : val;
	}
	animate() {
		// slow down to ~20fps
		if (this.frameCount % 3 === 0) {
			let a = this.querySelector("a");
			this.pos = this.clamp(this.pos + this.direction, 0, 10);
			a.style.backgroundPosition = `0px ${this.pos * -15}px`;
			if (this.pos > 0 && this.pos < 10) {
				requestAnimationFrame(this.animate);
			}
		} else {
			requestAnimationFrame(this.animate);
		}
		this.frameCount++;
	}
}

customElements.get("titchy-link") ||
	customElements.define("titchy-link", TitchyLink);
