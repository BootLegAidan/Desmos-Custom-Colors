window.alert(`color([hex value], [position in list])`)
var tmpvar;
function color(hex, index){
  tmpvar = Calc.getState();
  tmpvar.expressions.list[(index + 1)].color = hex;
  Calc.setState(tmpvar);
};
