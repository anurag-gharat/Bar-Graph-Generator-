
var input=[]; 
 function addElement(){
    var element=document.getElementById('element').value;
    input.push(element);
    console.log(input);
    document.getElementById('element').value="";
}

//javascript
var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];
// var dataset=[1,2,3,4,5,6,7];

    function showGraph(){
            var svgWidth = 600, svgHeight = 400, barPadding = 5;
            var barWidth = (svgWidth / dataset.length);
            
            
            var svg = d3.select('svg')
                        .attr("width", svgWidth)
                        .attr("height", svgHeight);
                
            var yScale = d3.scaleLinear()
                            .domain([0,d3.max(input)])
                            .range([0,svgHeight])
                            
            var barChart = svg.selectAll("rect")
                            .data(input)
                            .enter()
                            .append("rect")
                            .attr("y", function(d) {
                                return svgHeight - yScale(d) 
                            })
                            .attr("height", function(d) { 
                                return yScale(d); 
                            })
                            .attr("width", barWidth - barPadding)
                            .attr("transform", function (d, i) {
                                var translate = [barWidth * i, 0]; 
                                return "translate("+ translate +")";
                            });
                var text = svg.selectAll("text")
                                .data(input)
                                .enter()
                                .append("text")
                                .text(function(d){
                                    return d;
                                })
                                .attr("x",function(d,i){
                                    return barWidth * i + 2;
                                })
                                .attr("y",function(d,i){
                                    return svgHeight;
                                })
                                .attr("fill","#fff");
                            }
 
                                                                                                                                                                                                                 