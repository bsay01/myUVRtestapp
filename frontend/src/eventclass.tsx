class todoEvent {
    name:string;
    description:string;
    type:string;
    priority:number;
    date:string;
    t:string;
    pt:string;
    bt:string;

    constructor(){
        this.name = "";
        this.description = "";
        this.type = "";
        this.priority = 0;
        this.date = "01/01/2001"
        this.t = "9:00AM";
        this.pt = "8:00AM";
        this.bt = "10:00AM";
    };

    setName(n:string): boolean{
        if (n.length <= 200){
           this.name = n;
           return true;
        }else{
            return false;
        }
    };

    setDescription(d:string): boolean{
        if (d.length <= 400){
           this.description = d;
           return true;
        }else{
            return false;
        }
    };

    setType(type:string): boolean{
        if (type.length <= 200){
           this.type = type;
           return true;
        }else{
            return false;
        }
    };

    setPriority(p:number): boolean{
        if (p <= 10 && p >= 0){
           this.priority = p;
           return true;
        }else{
            return false;
        }
    };

    setDate(d:string): boolean{
        if (d.length <= 10){
            this.date = d;
            return true;
         }else{
             return false;
         }
    }

    setT(t:string): boolean{
        if (t.length <= 7){
           this.t = t;
           return true;
        }else{
            return false;
        }
    };

    setPT(pt:string): boolean{
        if (pt.length <= 7){
           this.pt = pt;
           return true;
        }else{
            return false;
        }
    };

    setBT(bt:string): boolean{
        if (bt.length <= 7){
           this.bt = bt;
           return true;
        }else{
            return false;
        }
    };
}

export {todoEvent};