var obj = {};
var penny = 1;
var nickel = 5;
var dime = 10;
var quarter = 25;
var one = 100;
var five = 500;
var ten = 1000;
var twenty = 2000;
var fifty = 5000;
var hundred = 10000;
var counter = 0;
function numCal(num){
    num = num * 100;
    if(num >= hundred){
        counter = Math.floor(num/hundred);
        obj.Hundred = counter;
        num -= counter*hundred;
        counter = 0;
    }
    if(num >= fifty){
        counter = Math.floor(num/fifty);
        obj.Fifty = counter;
        num -= counter*fifty;
        counter = 0;
    }
    if(num >= twenty){
        counter = Math.floor(num/twenty);
        obj.Twenty = counter;
        num -= counter*twenty;
        counter = 0;
    }
    if(num >= ten){
        counter = Math.floor(num/ten);
        obj.Ten = counter;
        num -= counter*ten;
        counter = 0;
    }
    if(num >= five){
        counter = Math.floor(num/five);
        obj.Five = counter;
        num -= counter*five;
        counter = 0;
    }
    if(num >= one){
        counter = Math.floor(num/one);
        obj.One = counter;
        num -= counter*one;
        counter = 0;
    }
    if(num >= quarter){
        counter = Math.floor(num/quarter);
        obj.Quarter = counter;
        num -= counter*quarter;
        counter = 0;
    }
    if(num >= dime){
        counter = Math.floor(num/dime);
        obj.Dime = counter;
        num -= counter*dime;
        counter = 0;
    }
    if(num >= nickel){
        counter = Math.floor(num/nickel);
        obj.Nickel = counter;
        num -= counter*nickel;
        counter = 0;
    }
    if(num >= penny){
    counter = Math.floor(num/penny);
    obj.Penny = counter;
    num -= counter*penny;
    counter = 0;
    }
    return obj;
}
