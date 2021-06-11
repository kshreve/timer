/*
## Usages
// taken from https://stackoverflow.com/a/13542669/697020, Answer 2

var color1 = "#FF343B";
var color2 = "#343BFF";
var color3 = "rgb(234,47,120)";
var color4 = "rgb(120,99,248)";
var shadedcolor1 = shadeBlend(0.75,color1);
var shadedcolor3 = shadeBlend(-0.5,color3);
var blendedcolor1 = shadeBlend(0.333,color1,color2);
var blendedcolor34 = shadeBlend(-0.8,color3,color4); // Same as using 0.8
*/

function shadeBlend(p: number, c0: string, c1: string) {
  var n = p < 0 ? p * -1 : p,
    u = Math.round,
    w = parseInt;
  if (c0.length > 7) {
    var f = c0.split(','),
      t = (c1 ? c1 : p < 0 ? 'rgb(0,0,0)' : 'rgb(255,255,255)').split(','),
      R = w(f[0].slice(4)),
      G = w(f[1]),
      B = w(f[2]);
    return (
      'rgb(' +
      (u((w(t[0].slice(4)) - R) * n) + R) +
      ',' +
      (u((w(t[1]) - G) * n) + G) +
      ',' +
      (u((w(t[2]) - B) * n) + B) +
      ')'
    );
  } else {
    var f = w(c0.slice(1), 16),
      t = w((c1 ? c1 : p < 0 ? '#000000' : '#FFFFFF').slice(1), 16),
      R1 = f >> 16,
      G1 = (f >> 8) & 0x00ff,
      B1 = f & 0x0000ff;
    return (
      '#' +
      (
        0x1000000 +
        (u(((t >> 16) - R1) * n) + R1) * 0x10000 +
        (u((((t >> 8) & 0x00ff) - G1) * n) + G1) * 0x100 +
        (u(((t & 0x0000ff) - B1) * n) + B1)
      )
        .toString(16)
        .slice(1)
    );
  }
}

export default shadeBlend;
