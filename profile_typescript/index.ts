
class Main { 

    public exec() {

        this.hellow();

        if (this.varAboutDecision() == 'two') {
            this.whatDoIfIsTwo()
        } else {
            this.whatDoIfIsOne();
        }
    }

    private hellow() {
        console.log('hello world')
    }

    private varAboutDecision() {
        return 'two';
    }   

    private whatDoIfIsTwo() {

        for(let i = 0; i < 10000; i++) {
            console.log(i)
        }

    }

    private whatDoIfIsOne() {

        console.log('toNoThing');

    }
    
}

let main = new Main()

main.exec()
