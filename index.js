var fs = require('fs');
exports.convert = function() {
  console.log('ASHASU');
  return 'ASHASU';
};

exports.readFile = function() {
  try {
    var data = fs
      .readFileSync('posicoes.csv')
      .toString()
      .split('\n');
    for (i in data) {
      if (i > 0) {
        // pos 6 Lat, pos 7, lng

        let lineLatLng = data[i].split(';');

        if (lineLatLng.length < 6) return;
        // Deg, min, sec : 25S2636
        let degLat = lineLatLng[6].substring(0, 2),
          minLat = lineLatLng[6].substring(3, 5),
          secLat = lineLatLng[6].substring(5, 7);

        let degLng = lineLatLng[7].substring(0, 2),
          minLng = lineLatLng[7].substring(3, 5),
          secLng = lineLatLng[7].substring(5, 7);

        // console.log('degLat', degLat);
        // console.log('minLat', minLat);
        // console.log('secLat', secLat);
        let lat = this.dms_to_d(degLat, minLat, secLat, 'S');
        let lng = this.dms_to_d(degLng, minLng, secLng, 'W');

        this.writeFile(lat + ';' + lng);
        // this.writeFile(lineLatLng[6] + ';' + lineLatLng[7]);
        // this.writeFile(data[i]);
      }
    }
    console.log('Done');
    return data;
  } catch (e) {
    console.log('Error:', e.stack);
  }
};

exports.writeFile = function(data) {
  fs.appendFile('output/output.csv', `${data}\n`, function(err) {
    if (err) throw err;
    //  console.log('Saved!');
  });
  // console.log('Saved!');
};

// dms format
exports.convertLatLong = function(lat, lng) {
  return 'asas';
};

// degrees, mins, secs to decimal degrees ######################################
exports.dms_to_d = function(d, m, s, dir) {
  //alert( "d:"+d+" m:"+m+" s:"+s );
  d = d - 0;
  m = m - 0;
  var sign = dir == 'W' || dir == 'S' ? -1 : 1;
  return ((s / 60 + m) / 60 + d) * sign;
};

this.readFile();
