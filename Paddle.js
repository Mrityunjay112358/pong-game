class Paddle{
    constructor(){
        this.width=10;
        this.height=70;
        this.color="grey";
        this.xposition=10;
        this.yposition=10; 
}

display(){
fill(this.color);
rect(this.xposition,this.yposition,this.width,this.height);
}
};