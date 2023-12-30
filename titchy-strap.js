class TitchyStrap extends HTMLElement {
	connectedCallback() {
		const straps = [
			"Faster, smaller, more dangerous",
			"A little goes a long way",
			"Don't get short with the TitchyMafia",
			"Less is more",
			"No job too small",
			"Good things come in small packages",
			"You talkin' to me?",
			"God is in the details",
			"It's a small world",
		];

		this.innerHTML = straps[this.randomInt(straps.length - 1)];
	}
	randomInt(max = 10) {
		var randNum = Math.random();
		var randInt = Math.round(randNum * max);
		return randInt;
	}
}

customElements.get("titchy-strap") ||
	customElements.define("titchy-strap", TitchyStrap);
