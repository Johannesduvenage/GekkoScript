require('shelljs/global');

let btcClient = function(){
    exec("cd ../gekko && node gekko.js --config btcConfig.js", function(status, output) {
        let reset = false
        setInterval(function(){
            if(status == 1 && reset == false){
                console.log("--------------xxxxxxxxx1", status)
                btcClient();
                reset = true;
            }
        }, 60000);
    });
}

let bchClient = function(){
    exec("cd ../gekko && node gekko.js --config bchConfig.js", function(status, output) {
        let reset = false;
        setInterval(function(){
            if(status == 1 && reset == false){
                console.log("--------------xxxxxxxxx2", status)
                bchClient();
                reset = true;
            }
        }, 60000);
    });
}

let ethClient = function(){
    exec("cd ../gekko && node gekko.js --config ethConfig.js", function(status, output) {
        let reset = false
        setInterval(function(){
            if(status == 1 && reset == false){
                console.log("--------------xxxxxxxxx3", status)
                ethClient();
                reset = true;
            }
        }, 60000);
    });
}

let ltcClient = function(){
    exec("cd ../gekko && node gekko.js --config ltcConfig.js", function(status, output) {
        let reset = false;
        setInterval(function(){
            if(status == 1 && reset == false){
                console.log("--------------xxxxxxxxx4", status)
                ltcClient();
                reset = true;
            }
        }, 60000);
    });
}

btcClient();
bchClient();
ethClient();
ltcClient();