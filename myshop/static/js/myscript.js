function getdata(){

            var xhttp= new XMLHttpRequest()
            xhttp.open("GET", "/product/getall/"+ document.getElementById("keyword").value, true);
            //xhttp.open("GET", "/product/getall", true);
            xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status== 200){


                var data = JSON.parse(this.responseText);
                console.log(data)


                str= "<table>"
                for (x of data.products){
                    str=str+ "<tr>"
                    str=str+ "<td>" +x.id + "<td>"
                    str=str+ "<td>" +x.name+ "<td>"
                    str=str+ "<td>" +x.price+ "<td>"
                       str=str+ "</tr>"
                }
                    str = str+ "</table>"

                      document.getElementById("data").innerHTML=str

            }
         };

         xhttp.send();
         }

function drawchart(){

            var xhttp= new XMLHttpRequest()
            xhttp.open("GET", "/product/data", true);
            xhttp.onreadystatechange = function(){

               if(this.readyState == 4 && this.status== 200){

                   var data = JSON.parse(this.responseText);
                   console.log(data)

                   displaychart(data)

               }

            }

            xhttp.send();
}

function displaychart(data){

       console.log("inside ...")
       var ctx = document.getElementById('myChart').getContext('2d');
       var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: getlabels(data),
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: getvals(data)
        }]
    },

    // Configuration options go here
    options: {}
});

}

function getlabels(data){

   let labels= []

   for(x of data.products){

      labels.push(x.name)

   }
   return labels;

}

function getvals(data){

   let vals= []

   for(x of data.products){

      vals.push(x.price)

   }
   return vals;
}

