"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  pulse: number;
  pulseSpeed: number;
  category: "core" | "satellite" | "packet";
}

interface PulsePacket {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
}

export function SystemCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
      initNodes();
    };

    window.addEventListener("resize", handleResize);

    const mouse = { x: -1000, y: -1000, radius: 140 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Initialize network nodes
    let nodes: Node[] = [];
    let packets: PulsePacket[] = [];

    const initNodes = () => {
      nodes = [];
      packets = [];
      const nodeCount = Math.floor(Math.min(width, 1200) / 28);

      for (let i = 0; i < nodeCount; i++) {
        const isCore = i < 4;
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: isCore ? 3.5 : 1.8 + Math.random() * 1.5,
          baseRadius: isCore ? 3.5 : 1.8 + Math.random() * 1.5,
          pulse: Math.random() * Math.PI,
          pulseSpeed: 0.02 + Math.random() * 0.03,
          category: isCore ? "core" : "satellite",
        });
      }

      // Initialize data pulse packets between proximate nodes
      for (let i = 0; i < 6; i++) {
        packets.push({
          fromNode: Math.floor(Math.random() * nodes.length),
          toNode: Math.floor(Math.random() * nodes.length),
          progress: Math.random(),
          speed: 0.005 + Math.random() * 0.008,
        });
      }
    };

    initNodes();

    const maxDistance = 145;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render subtle telemetry background coordinates & crosses
      ctx.strokeStyle = "rgba(31, 106, 225, 0.07)";
      ctx.lineWidth = 1;

      // Update and draw connections
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];

        // Move nodes
        n1.x += n1.vx;
        n1.y += n1.vy;

        // Bounce from boundaries
        if (n1.x < 0 || n1.x > width) n1.vx *= -1;
        if (n1.y < 0 || n1.y > height) n1.vy *= -1;

        // Mouse subtle magnetic interaction
        const dxMouse = mouse.x - n1.x;
        const dyMouse = mouse.y - n1.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < mouse.radius) {
          const force = (1 - distMouse / mouse.radius) * 0.8;
          n1.x -= (dxMouse / distMouse) * force * 2;
          n1.y -= (dyMouse / distMouse) * force * 2;
        }

        // Draw inter-node links
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const alpha = (1 - distance / maxDistance) * 0.28;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(0, 229, 255, ${alpha})`;
            ctx.lineWidth = distance < 60 ? 1.2 : 0.7;
            ctx.stroke();
          }
        }

        // Draw node
        n1.pulse += n1.pulseSpeed;
        const currentRadius = n1.baseRadius + Math.sin(n1.pulse) * 0.8;

        ctx.beginPath();
        ctx.arc(n1.x, n1.y, currentRadius, 0, Math.PI * 2);

        if (n1.category === "core") {
          ctx.fillStyle = "rgba(0, 229, 255, 0.9)";
          ctx.shadowColor = "#00e5ff";
          ctx.shadowBlur = 10;
        } else {
          ctx.fillStyle = "rgba(123, 92, 255, 0.65)";
          ctx.shadowColor = "#1f6ae1";
          ctx.shadowBlur = 4;
        }
        ctx.fill();
        ctx.shadowBlur = 0; // Reset
      }

      // Update and draw pulse packets traveling along links
      for (const packet of packets) {
        packet.progress += packet.speed;
        if (packet.progress >= 1) {
          packet.progress = 0;
          packet.fromNode = Math.floor(Math.random() * nodes.length);
          packet.toNode = Math.floor(Math.random() * nodes.length);
        }

        const from = nodes[packet.fromNode];
        const to = nodes[packet.toNode];
        if (!from || !to) continue;

        const distance = Math.hypot(to.x - from.x, to.y - from.y);
        if (distance < maxDistance * 1.5) {
          const px = from.x + (to.x - from.x) * packet.progress;
          const py = from.y + (to.y - from.y) * packet.progress;

          ctx.beginPath();
          ctx.arc(px, py, 2, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.shadowColor = "#00e5ff";
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto opacity-70 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
}
