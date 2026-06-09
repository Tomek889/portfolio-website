"use client";
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import * as d3 from "d3";
import { techIcons } from "../data/skills";

export default function SkillGraph({ nodes, links }) {
  const svgRef = useRef(null);
  const gRef = useRef(null);

  const ACCENT_COLOR = "#38bdf8"; 

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const g = d3.select(gRef.current);

    g.selectAll("*").remove();

    const { width, height } = svgRef.current.getBoundingClientRect();
    const gWidth = width;
    const gHeight = height;
    
    svg.attr("viewBox", `0 0 ${gWidth} ${gHeight}`);

    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id).distance(d => d.source.group === "root" ? 80 : 80))
      .force("charge", d3.forceManyBody().strength(-350))
      .force("collide", d3.forceCollide().radius(45).iterations(2))
      .force("center", d3.forceCenter(gWidth / 2, gHeight / 2));

    const link = g.append("g")
      .attr("stroke", "#27272a") 
      .attr("stroke-width", 2)
      .selectAll("line")
      .data(links)
      .enter()
      .append("line");

    const nodeBackgrounds = g.append("g")
      .selectAll("rect")
      .data(nodes.filter(d => d.group === "tech"))
      .enter()
      .append("rect")
      .attr("width", 44)
      .attr("height", 44)
      .attr("rx", 10)
      .attr("fill", "#18181b")
      .attr("stroke", "#27272a")
      .attr("stroke-width", 1);

    const techNodes = g.append("g")
      .selectAll("foreignObject")
      .data(nodes.filter(d => d.group === "tech"))
      .enter()
      .append("foreignObject")
      .attr("width", 28)
      .attr("height", 28)
      .style("cursor", "pointer")
      .each(function(d) {
        if (techIcons[d.id]) {
          const root = ReactDOM.createRoot(this);
          root.render(React.createElement(techIcons[d.id], { 
            size: "28px", 
            color: "#d4d4d8" 
          }));
        }
      });

    const techText = g.append("g")
      .selectAll("text")
      .data(nodes.filter(d => d.group === "tech"))
      .enter()
      .append("text")
      .text(d => d.id)
      .attr("font-size", "11px")
      .attr("font-family", "monospace")
      .attr("fill", "#a1a1aa")
      .attr("text-anchor", "middle");

    const node = g.append("g")
      .selectAll("circle")
      .data(nodes.filter(d => d.group === "root" || d.group === "category"))
      .enter()
      .append("circle")
      .attr("r", d => d.group === "root" ? 8 : 5)
      .attr("fill", d => d.group === "root" ? ACCENT_COLOR : "#27272a")
      .attr("stroke", d => d.group === "root" ? "none" : "#52525b")
      .attr("stroke-width", 2)
      .style("cursor", "pointer");

    const text = g.append("g")
      .selectAll("text")
      .data(nodes.filter(d => d.group === "root" || d.group === "category"))
      .enter()
      .append("text")
      .text(d => d.id)
      .attr("font-size", "14px")
      .attr("font-weight", "600")
      .attr("fill", "#ffffff")
      .attr("text-anchor", "middle");

    const drag = d3.drag()
      .on("start", (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on("drag", (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on("end", (event, d) => {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      });

    node.call(drag);
    techNodes.call(drag);
    nodeBackgrounds.call(drag);

    const tooltip = d3.select("body").append("div")
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("background", "#09090b")
      .style("color", "#fff")
      .style("padding", "6px 12px")
      .style("border", "1px solid #27272a")
      .style("border-radius", "6px")
      .style("font-size", "12px")
      .style("font-family", "monospace")
      .style("pointer-events", "none")
      .style("z-index", "1000");

    techNodes
      .on("mouseover", (event, d) => {
        tooltip.style("visibility", "visible").text(d.id);
      })
      .on("mousemove", (event) => {
        tooltip.style("top", `${event.pageY - 35}px`).style("left", `${event.pageX + 15}px`);
      })
      .on("mouseout", () => {
        tooltip.style("visibility", "hidden");
      });

    simulation.on("tick", () => {
      const margin = 40;
      const clamp = (val, min, max) => Math.max(min, Math.min(max, val));
      
      nodes.forEach(d => {
        d.x = clamp(d.x, margin, gWidth - margin);
        d.y = clamp(d.y, margin, gHeight - margin);
      });

      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);

      nodeBackgrounds
        .attr("x", d => d.x - 22)
        .attr("y", d => d.y - 22);

      techNodes
        .attr("x", d => d.x - 14)
        .attr("y", d => d.y - 14);

      techText
        .attr("x", d => d.x)
        .attr("y", d => d.y + 35);

      text
        .attr("x", d => d.x)
        .attr("y", d => d.y - 15);
    });

    return () => {
      simulation.stop();
      tooltip.remove();
    };
  }, [nodes, links]);

  return (
    <svg ref={svgRef} className="w-full h-full cursor-grab active:cursor-grabbing">
      <g ref={gRef}></g>
    </svg>
  );
}