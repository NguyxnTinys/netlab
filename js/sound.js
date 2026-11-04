/**
 * Sound Synthesizer using Web Audio API
 * Generates custom sound effects without external audio files
 */
class SoundManager {
    constructor() {
        this.ctx = null;
        this.muted = localStorage.getItem('mmt_sound_muted') === 'true';
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                this.ctx = new AudioContext();
            }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    toggleMute() {
        this.muted = !this.muted;
        localStorage.setItem('mmt_sound_muted', this.muted);
        return this.muted;
    }

    playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.1, stopDelay = 0) {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;

        try {
            const now = this.ctx.currentTime + stopDelay;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = type;
            osc.frequency.setValueAtTime(freq, now);

            gain.gain.setValueAtTime(gainVal, now);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + duration);
        } catch (e) {
            console.warn('Audio playback error', e);
        }
    }

    playClick() {
        this.playTone(800, 'triangle', 0.04, 0.05);
    }

    playCorrect() {
        if (this.muted) return;
        this.init();
        // Pleasant chime C6 - E6 - G6
        this.playTone(523.25, 'sine', 0.15, 0.1, 0);
        this.playTone(659.25, 'sine', 0.2, 0.12, 0.08);
        this.playTone(783.99, 'triangle', 0.35, 0.15, 0.16);
    }

    playWrong() {
        if (this.muted) return;
        this.init();
        // Descending low saw tone
        try {
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(180, now);
            osc.frequency.exponentialRampToValueAtTime(70, now + 0.3);

            gain.gain.setValueAtTime(0.15, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.35);
        } catch (e) {}
    }

    playJump() {
        if (this.muted) return;
        this.init();
        try {
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'square';
            osc.frequency.setValueAtTime(220, now);
            osc.frequency.exponentialRampToValueAtTime(580, now + 0.15);

            gain.gain.setValueAtTime(0.08, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.16);
        } catch (e) {}
    }

    playCollect() {
        if (this.muted) return;
        this.init();
        this.playTone(987.77, 'sine', 0.08, 0.08, 0);
        this.playTone(1318.51, 'sine', 0.12, 0.1, 0.05);
    }

    playHit() {
        if (this.muted) return;
        this.init();
        try {
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(140, now);
            osc.frequency.linearRampToValueAtTime(40, now + 0.25);

            gain.gain.setValueAtTime(0.25, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.28);
        } catch (e) {}
    }

    playAlarm() {
        if (this.muted) return;
        this.init();
        for (let i = 0; i < 3; i++) {
            this.playTone(880, 'sawtooth', 0.1, 0.12, i * 0.18);
            this.playTone(440, 'sawtooth', 0.1, 0.1, i * 0.18 + 0.09);
        }
    }

    playRevive() {
        if (this.muted) return;
        this.init();
        // Triumphant revival sequence
        const freqs = [330, 392, 493.88, 587.33, 659.25, 783.99, 987.77];
        freqs.forEach((f, idx) => {
            this.playTone(f, 'triangle', 0.2, 0.12, idx * 0.07);
        });
    }

    playGameOver() {
        if (this.muted) return;
        this.init();
        const notes = [440, 415.3, 392, 349.23];
        notes.forEach((f, idx) => {
            this.playTone(f, 'sawtooth', 0.25, 0.12, idx * 0.2);
        });
    }

    playFanfare() {
        if (this.muted) return;
        this.init();
        const chord = [523.25, 659.25, 783.99, 1046.50];
        chord.forEach((f, idx) => {
            this.playTone(f, 'triangle', 0.4, 0.1, idx * 0.08);
        });
    }

    playAttack() {
        if (this.muted) return;
        this.init();
        try {
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(650, now);
            osc.frequency.exponentialRampToValueAtTime(150, now + 0.18);

            gain.gain.setValueAtTime(0.18, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.2);
        } catch (e) {}
    }

    playCrit() {
        if (this.muted) return;
        this.init();
        try {
            const now = this.ctx.currentTime;
            // Laser sweep + explosion
            this.playAttack();
            this.playTone(987.77, 'square', 0.15, 0.15, 0.05);
            this.playTone(1318.51, 'square', 0.25, 0.18, 0.1);
        } catch (e) {}
    }

    playFlagCaptured() {
        if (this.muted) return;
        this.init();
        // Triumphant CTF victory chime
        const notes = [440, 554.37, 659.25, 880, 1108.73, 1318.51];
        notes.forEach((f, idx) => {
            this.playTone(f, 'triangle', 0.3, 0.12, idx * 0.07);
        });
    }

    playLockout() {
        if (this.muted) return;
        this.init();
        this.playTone(130, 'sawtooth', 0.3, 0.2);
        this.playTone(110, 'sawtooth', 0.3, 0.2, 0.1);
    }
}

window.soundManager = new SoundManager();

