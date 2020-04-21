$("#mon").keyup(function() {
nuevagrafica();
})
$("#tues").keyup(function() {
nuevagrafica();
})
$("#wed").keyup(function() {
nuevagrafica();
})
$("#thur").keyup(function() {
nuevagrafica();
})
$("#fri").keyup(function() {
nuevagrafica();
})
$("#sat").keyup(function() {
nuevagrafica();
})
$("#sund").keyup(function() {
nuevagrafica();
})
var ctx= document.getElementById("myChart").getContext("2d");

function nuevagrafica() {
  var mon = $("#mon").val();

  var tues = $("#tues").val();
  var wed = $("#wed").val();
  var thur = $("#thur").val();
  var fri = $("#fri").val();
  var sat = $("#sat").val();
  var sund = $("#sund").val();
  var ctx= document.getElementById("myChart").getContext("2d");
          var myChart= new Chart(ctx,{
              type:"bar",
              data:{
                  labels:['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'],
                  datasets:[{
                          label:'Num datos',
                          data:[mon,tues,wed,thur,fri,sat,sund],
                          backgroundColor:[
                              'rgb(66, 134, 244,0.5)',
                              'rgb(74, 135, 72,0.5)',
                              'rgb(229, 89, 50,1.5)',
                              'rgb(229, 89, 50,2.5)',
                              'rgb(229, 89, 50,3.5)',
                              'rgb(229, 89, 50,4.5)',
                              'rgb(229, 89, 50,0.8)'
                          ]
                  }]
              },
              options:{
                  scales:{
                      yAxes:[{
                              ticks:{
                                  beginAtZero:true
                              }
                      }]
                  }
              }
          });
}


        var myChart= new Chart(ctx,{
            type:"bar",
            data:{
                labels:['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'],
                datasets:[{
                        label:'Num datos',
                        data:[12,9,15,33,34,11,7],
                        backgroundColor:[
                            'rgb(66, 134, 244,0.5)',
                            'rgb(74, 135, 72,0.5)',
                            'rgb(229, 89, 50,1.5)',
                            'rgb(229, 89, 50,2.5)',
                            'rgb(229, 89, 50,3.5)',
                            'rgb(229, 89, 50,4.5)',
                            'rgb(229, 89, 50,0.8)'
                        ]
                }]
            },
            options:{
                scales:{
                    yAxes:[{
                            ticks:{
                                beginAtZero:true
                            }
                    }]
                }
            }
        });
