var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.exec = function () {
        this.hellow();
        if (this.varAboutDecision() == 'two') {
            this.whatDoIfIsTwo();
        }
        else {
            this.whatDoIfIsOne();
        }
    };
    Main.prototype.hellow = function () {
        console.log('hello world');
    };
    Main.prototype.varAboutDecision = function () {
        return 'two';
    };
    Main.prototype.whatDoIfIsTwo = function () {
        for (var i = 0; i < 10000; i++) {
            console.log(i);
        }
    };
    Main.prototype.whatDoIfIsOne = function () {
        console.log('toNoThing');
    };
    return Main;
}());
var main = new Main();
main.exec();
//# sourceMappingURL=index.js.map