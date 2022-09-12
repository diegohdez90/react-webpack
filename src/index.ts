export function log(msg: string) {
	console.log(msg);
}

class A {

	msg: string;
	constructor(msg: string) {
		this.msg = msg;
	}

	greeting() {
		log(this.msg);
	}
}

new A("hi").greeting();


