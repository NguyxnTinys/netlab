/**
 * Ambient Network Mesh Background Animation
 * Simulates interconnected routers, nodes, and packet pulses
 */
class NetworkBackground {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.nodes = [];
        this.pulses = [];
        this.maxNodes = 45;
        this.maxDist = 140;
        this.mouse = { x: null, y: null, radius: 120 };

        this.resize();
        this.initNodes();
        this.bindEvents();
        this.animate();
    }

    resize() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
    }

    bindEvents() {
        window.addEventListener('resize', () => {
            this.resize();
            this.initNodes();
        });

        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        window.addEventListener('mouseleave', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    }

    initNodes() {
        this.nodes = [];
        const count = Math.min(this.maxNodes, Math.floor((this.width * this.height) / 22000));
        for (let i = 0; i < count; i++) {
            this.nodes.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                vx: (Math.random() - 0.5) * 0.7,
                vy: (Math.random() - 0.5) * 0.7,
                radius: Math.random() * 2 + 1.5,
                color: Math.random() > 0.4 ? 'rgba(56, 189, 248, ' : 'rgba(168, 85, 247, ',
                alpha: Math.random() * 0.5 + 0.3
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        // Update and draw nodes
        for (let i = 0; i < this.nodes.length; i++) {
            const n = this.nodes[i];
            n.x += n.vx;
            n.y += n.vy;

            if (n.x < 0 || n.x > this.width) n.vx *= -1;
            if (n.y < 0 || n.y > this.height) n.vy *= -1;

            // Mouse interaction
            if (this.mouse.x !== null) {
                const dx = n.x - this.mouse.x;
                const dy = n.y - this.mouse.y;
                const dist = Math.hypot(dx, dy);
                if (dist < this.mouse.radius) {
                    const angle = Math.atan2(dy, dx);
                    const force = (this.mouse.radius - dist) / this.mouse.radius;
                    n.x += Math.cos(angle) * force * 1.5;
                    n.y += Math.sin(angle) * force * 1.5;
                }
            }

            this.ctx.beginPath();
            this.ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = n.color + n.alpha + ')';
            this.ctx.shadowBlur = 8;
            this.ctx.shadowColor = n.color + '0.8)';
            this.ctx.fill();
            this.ctx.shadowBlur = 0;

            // Connect nearby nodes
            for (let j = i + 1; j < this.nodes.length; j++) {
                const n2 = this.nodes[j];
                const dx = n.x - n2.x;
                const dy = n.y - n2.y;
                const dist = Math.hypot(dx, dy);

                if (dist < this.maxDist) {
                    const lineAlpha = (1 - dist / this.maxDist) * 0.25;
                    this.ctx.beginPath();
                    this.ctx.moveTo(n.x, n.y);
                    this.ctx.lineTo(n2.x, n2.y);
                    this.ctx.strokeStyle = `rgba(129, 140, 248, ${lineAlpha})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.stroke();

                    // Random packet pulse travelling along wire
                    if (Math.random() < 0.0006 && this.pulses.length < 8) {
                        this.pulses.push({
                            x1: n.x, y1: n.y,
                            x2: n2.x, y2: n2.y,
                            progress: 0,
                            speed: 0.02 + Math.random() * 0.02
                        });
                    }
                }
            }
        }

        // Draw packet pulses
        for (let pIdx = this.pulses.length - 1; pIdx >= 0; pIdx--) {
            const p = this.pulses[pIdx];
            p.progress += p.speed;
            if (p.progress >= 1) {
                this.pulses.splice(pIdx, 1);
                continue;
            }
            const px = p.x1 + (p.x2 - p.x1) * p.progress;
            const py = p.y1 + (p.y2 - p.y1) * p.progress;
            this.ctx.beginPath();
            this.ctx.arc(px, py, 2.5, 0, Math.PI * 2);
            this.ctx.fillStyle = '#38bdf8';
            this.ctx.shadowBlur = 10;
            this.ctx.shadowColor = '#38bdf8';
            this.ctx.fill();
            this.ctx.shadowBlur = 0;
        }

        requestAnimationFrame(() => this.animate());
    }
}

