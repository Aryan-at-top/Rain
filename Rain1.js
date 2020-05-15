class Rain1 extends Base{
    constructor(x,y,width,height){
      super(x,y,10,50);
      this.y=y;
      this.x=x;
    }
    display(){
      fill("blue")
      super.display();
    }
    distance(){
     this.y=this.y+random(0,400)  
    if(this.y>height){
      this.y=50;
    }
   }   

  }
    