var fs = require('fs');

exports.convert = function () {
    console.log('ASHASU')
    return "ASHASU";
  };

exports.readFile = function(){
    try {
        var data = fs.readFileSync('file.txt').toString().split("\n");
        /*for(i in data) {
            console.log(data[i]);
        }*/
        return data;
    } catch(e) {
        console.log('Error:', e.stack);
    }
}

exports.writeFile = function(){

}

// dms format
exports.convertLatLong = function(lat, lng){

}

// degrees, mins, secs to decimal degrees ######################################
exports.exports = function dms_to_d(d,m,s,dir)
{
	//alert( "d:"+d+" m:"+m+" s:"+s );
	d = d-0;
	m = m-0;
	var sign = ( dir=='W' || dir=='S' ) ? -1 : 1;
	return (((s/60+m)/60)+d)*sign;
}

this.readFile();
