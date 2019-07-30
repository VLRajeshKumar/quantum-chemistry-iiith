var prea ,preb,a,b;
var ctx = document.getElementById('mygraph');                                                                                 //                          //
var trace1 = {  
x: [
  3072.796877,3070.50502,3058.896157,
3056.615708,
3044.984028,
3042.709918,
3029.898083,
3027.648058,
3013.625646,
3011.416185,
2997.340533,
2995.74967,
2980.486259,
2978.347784,
2962.489859,
2960.356455,
2943.955988,
2941.841598,
2925.496907,
2922.801947,
2905.966687,
2903.804127,
2864.34819,
2861.033364,
2840.746375,
2842.844286,
2820.24389,
2818.727817,
2798.328009,
2796.228831,
2774.709715,
2772.595325,
2751.130717,
2749.518304,
2726.950867,
2724.7338,
2702.754538,
2700.498175,
2676.793682,
2675.10648,
2651.396917,
2649.110131,
],
y: [
  0.085964912,
0.036842105,
0.153508772,
0.076754386,
0.248684211,
0.156578947,
0.386842105,
0.236403509,
0.598684211,
0.35,
0.84122807,
0.494298246,
1.062280702,
0.641666667,
1.249561404,
0.816666667,
1.338596491,
0.859649123,
1.246491228,
0.773684211,
0.948684211,
0.586403509,
0.948684211,
0.577192982,
0.712280702,
1.231140351,
1.369298246,
0.84122807,
1.249561404,
0.73377193,
1.053070175,
0.574122807,
0.761403509,
0.466666667,
0.525,
0.294736842,
0.328508772,
0.193421053,
0.205701754,
0.092105263,
0.116666667,
0.055263158,
],
type: 'bar',

transforms: [
  {
    target: 'x',
    order: 'descending'
  }
]

  };
  
  var layout = {
    yaxis:{
    type: 'linear',
    title:{
      text:'Intensity'
    }
    },
    xaxis:{
      type: 'linear',
      autorange:'reverse',
      title:{
        text:'Wave Number'
      }
      },
    hovermode:'closest',
    title:'Click on Points',
      autosize: false,
  width: 800,
  height: 500,
  };
  
  var data = [trace1];
  
  Plotly.newPlot('mygraph', data,layout);
ctx.on('plotly_click', function(data){
  prea=a;
  preb=b;
    var pts = '';
    for(var i=0 ;i < data.points.length; i++){
      a=data.points[i].x.toPrecision(4);
      b=data.points[i].y;
        pts = 'x = '+data.points[i].x +'\ny = '+
            data.points[i].y.toPrecision(4) + '\n\n';
            console.log(pts);
    }
   
    
   // alert('Closest point clicked:\n\n'+pts);
});
function cal(){
var temp = (Number(prea)+Number(a))/2;
  var res= prea-a;
  frea=res*2.998*Math.pow(10,10);
  freb=temp*2.998*Math.pow(10,10);
  bondeng=6.41972761*Math.pow(10,-26)*Math.pow(freb,2);
  bondlen=(Math.sqrt((2.07490935*Math.pow(10,-8)/frea)))/Math.pow(10,-9)

  res_str = '';
  res_str ="Bondlength : "+' '+bondlen.toPrecision(3)+ " "+"Bond Energy : "+bondeng;
  var resdiv= document.getElementById("result");
  resdiv.innerHTML=res_str;
  //alert('Closest point clicked:\n\n'+res_str);
}
function select(){
  var bond = document.getElementById("op").selectedIndex;
  var y = document.getElementById("op").options;
console.log(y[bond])
  if(y[bond].value=="Hcl"){
    console.log("uououou");
    document.getElementById("mygraph").style.display = "block";
  }
}