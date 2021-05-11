class Ball{
    constructor(){
        this.xposition=10;
        this.yposition=10;
        this.radius=50;
        this.color="grey";
    }

    display(){
      fill(this.color);
        circle(this.xposition,this.yposition,this.radius);
    }
};