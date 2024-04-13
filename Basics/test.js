class A {
    constructor() {
        this.k = 1;
        console.log(this.k);
    }
    aa() {
        this.k = 1;
        console.log(this.k);
    }
}
console.log(A, A.k, this, A.aa());