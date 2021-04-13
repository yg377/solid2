 // Seed data to populate the donut pie chart
        var seedData = [{
            "label": "Tokens presales",
            "value": 18,
            "link": "#"
        }, {
            "label": "At a Time Token Sales",
            "value": 20,
            "link": "#"
        }, {
            "label": "Partners",
            "value": 25,
            "link": "#"
        }, {
            "label": "Advisors",
            "value": 28,
            "link": "#"
        }, {
            "label": "Distributor",
            "value": 9,
            "link": "#"
        }];
        
        // Define size & radius of donut pie chart
        var width = 350,
            height = 350,
            radius = Math.min(width, height) / 2;
        var d3;
        // Define arc colours

        var colour = d3.scaleOrdinal(d3.schemeCategory20);
        
        // Define arc ranges
        var arcText = d3.scaleOrdinal()
            .range([0, width]);
        
        // Determine size of arcs
        var arc = d3.arc()
            .innerRadius(radius - 100)
            .outerRadius(radius - 10);
        
        // Create the donut pie chart layout
        var pie = d3.pie()
            .value(function (d) { return d["value"]; })
            .sort(null);
        
        // Append SVG attributes and append g to the SVG
        var svg = d3.select("#donut-chart")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + radius + "," + radius + ")");
        
        // Define inner circle
        svg.append("circle")
            .attr("cx", 0)
            .attr("cy", 0)
            .attr("r", 100)
            .attr("fill", "#fff") ;
        
        // Calculate SVG paths and fill in the colours
        var g = svg.selectAll(".arc")
            .data(pie(seedData))
            .enter().append("g")
            .attr("class", "arc")
                
            // Make each arc clickable 
            .on("click", function(d, i) {
            window.location = seedData[i].link;
            });
        
            // Append the path to each g
            g.append("path")
                .attr("d", arc)
                .attr("fill", function(d, i) {
                return colour(i);
                });
        
            // Append text labels to each arc
            g.append("text")
                .attr("transform", function(d) {
                return "translate(" + arc.centroid(d) + ")";
                })
                .attr("dy", ".35em")
                .style("text-anchor", "middle")
                .attr("fill", "#fff")
                .text(function(d,i) { return seedData[i].label; })
            
        g.selectAll(".arc text").call(wrap, arcText.range([0, width]));
        
        // Append text to the inner circle
        svg.append("text")
            .attr("dy", "-0.5em")
            .style("text-anchor", "middle")
            .attr("class", "inner-circle")
            .attr("fill", "#36454f")
            .text(function(d) { return 'Distribution'; });
        
        svg.append("text")
            .attr("dy", "1.0em")
            .style("text-anchor", "middle")
            .attr("class", "inner-circle")
            .attr("fill", "#36454f")
            .text(function(d) { return 'of tokens'; });
        
        // Wrap function to handle labels with longer text
        function wrap(text, width) {
            text.each(function() {
            var text = d3.select(this),
                words = text.text().split(/\s+/).reverse(),
                word,
                line = [],
                lineNumber = 0,
                lineHeight = 1.1, // ems
                y = text.attr("y"),
                dy = parseFloat(text.attr("dy")),
                tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
            console.log("tspan: " + tspan);
            while (word = words.pop()) {
                line.push(word);
                tspan.text(line.join(" "));
                if (tspan.node().getComputedTextLength() > 90) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
                }
            }
            });
        }