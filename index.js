var fs = require('fs');
exports.convert = function () {
    console.log('ASHASU')
    return "ASHASU";
  };

exports.readFile = function(){
    try {
        var data = fs.readFileSync('posicoes.csv').toString().split("\n");
        for(i in data) {
         // console.log(data[i]);
            this.writeFile(data[i]);
        }
        console.log('Done')
        return data;
    } catch(e) {
        console.log('Error:', e.stack);
    }
}

exports.writeFile = function(data){
    fs.appendFile('output.txt', `${data}\n`, function (err) {
        if (err) throw err;
        //console.log('Saved!');
      });
}

// dms format
exports.convertLatLong = function(lat, lng){
return 'asas'
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

