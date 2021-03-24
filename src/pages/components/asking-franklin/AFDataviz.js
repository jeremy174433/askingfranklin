import React from 'react';
import { 
    Row, 
    Col 
} from 'react-bootstrap';
import Logo from '../../../assets/img/svg/switch/Logo';
import * as d3 from 'd3';

export default class AFDataviz extends React.Component {

    drawChart(propsData) {
        var dataret = [{id: this.props.keywordSearch, value: ""}];

        if(this.props.related) {
            for(var j = 0; j < propsData.length; j++) {
                if(propsData[j].suggestions.length > 0) {
                    for(var x = 0; x < propsData[j].suggestions.length; x++) {
                        var curr_suggest = propsData[j].suggestions[x];
                        dataret.push({id: this.props.keywordSearch + "." + curr_suggest, value: ""});
                    }
                } 
                else {
                    dataret.push({id: this.props.keywordSearch + ".", value: ""});
                }
            }
        } 
        else {
            for(var j = 0; j < propsData.length; j++) {
                dataret.push({id: this.props.keywordSearch + "." + propsData[j].word, value: ""});
                if(propsData[j].suggestions.length > 0) {
                    for(var x = 0; x < propsData[j].suggestions.length; x++) {
                        var curr_suggest = propsData[j].suggestions[x];
                        dataret.push({id: this.props.keywordSearch + "." + propsData[j].word + "." + curr_suggest, value: ""});
                    }
                } 
                else {
                    dataret.push({id: this.props.keywordSearch + "." + propsData[j].word + ".", value: ""});
                }
            }
        }

        var svg = d3.select(this.svg),
        width = +svg.attr("width"),
        height = +svg.attr("height"),
        g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + (height / 2 ) + ")");

        var stratify = d3.stratify()
        .parentId(function(d) { return d.id.substring(0, d.id.lastIndexOf(".")); });
        var cluster = d3.cluster()
        .size([360, width / 2 - 120]);

        var root = stratify(dataret)
        .sort(function(a, b) { return a.height - b.height || a.id.localeCompare(b.id); });
        cluster(root);
        var link = g.selectAll(".link")
        .data(root.descendants().slice(1))
        .enter().append("path")
        .attr("class", "link")
        .attr("d", function(d) {
            return "M" + project(d.x, d.y)
                + "C" + project(d.x, (d.y + d.parent.y) / 2)
                + " " + project(d.parent.x, (d.y + d.parent.y) / 2)
                + " " + project(d.parent.x, d.parent.y);
        });
        var node = g.selectAll(".node")
        .data(root.descendants())
        .enter().append("g")
        .attr("class", function(d) { return "node" + (d.children ? " node--internal" : " node--leaf"); })
        .attr("transform", function(d) { return "translate(" + project(d.x, d.y) + ")"; });

        node.append("circle")
        .attr("r", 3)
        .attr("fill","rgba('#673AB7', .5)")

        node.append("text")
        .attr("dy", "0.30em")
        .attr("x", function(d) { return d.x < 180 === !d.children ? 6 : -6; })
        .style("text-anchor", function(d) { return d.x < 180 === !d.children ? "start" : "end"; })
        .attr("transform", function(d) { return d.depth === 0 ? "rotate(0)" : "rotate(" + (d.x < 180 ? d.x - 90 : d.x + 90) + ")"; })
        .text(function(d) { return d.id.substring(d.id.lastIndexOf(".") + 1); })
        .on("click", function() { return window.open("http://google.com/search?q=" + this.innerHTML) })

        function project(x, y) {
            var angle = (x - 90) / 180 * Math.PI, radius = y;
            return [radius * Math.cos(angle), radius * Math.sin(angle)];
        }
    }

    componentDidMount() {
        this.drawChart(this.props.data);
    }

    render() {
        return (
            <Row id={this.props.idSvg} className="asking-franklin-dataviz px-3 pb-3 mx-0">
                <Col sm="12" className="d-flex justify-content-center align-items-center p-0" style={{ minWidth: 'max-content' }}>
                    <svg ref={el => (this.svg = el)} height="700" width="700" style={{overflow: 'visible'}}/>
                    <Logo icon="picto" width="32" colorPrimary="#BDCCD4" colorSecondary="#FFF" className="position-absolute mt-5" style={{ opacity: '.75' }}/>
                </Col>
            </Row>
        )
    }
}