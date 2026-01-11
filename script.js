  <script>
        const apiKey = ""; // Injected by environment

        const books = {
            1: {
                title: "Book 1: The Hidden Language of Trauma",
                content: `
                    <h1>The Hidden Language of Trauma: 17 Overlooked Signs Leading to Misdiagnosis</h1>
                    <p>If you’ve ever felt like the diagnosis you received just didn’t fit, or that the symptoms you experience daily aren’t being fully addressed, this book is for you.</p>
                    <p>Trauma leaves a mark, and that mark often expresses itself in subtle, often confusing ways that are easily mistaken for character flaws, anxiety, or general depression. These are the <strong>overlooked signs</strong>—the quiet symptoms of Post-Traumatic Stress Disorder (PTSD), Post-Traumatic Stress Syndrome (PTSS), or, most commonly when trauma is chronic, Complex PTSD (CPTSD).</p>
                    <h2>Part I: Defining the Landscape of Trauma</h2>
                    <h3>PTSD, PTSS, and Complex PTSD</h3>
                    <p>While often used interchangeably, these three terms describe distinct patterns of trauma response. Understanding the differences can be crucial for finding the right path to healing.</p>
                    <ul>
                        <li><strong>PTSD:</strong> Typically follows a single, terrifying event (e.g., a serious accident or assault).</li>
                        <li><strong>PTSS:</strong> Sub-clinical symptoms of trauma that don't meet full diagnostic criteria but still cause distress.</li>
                        <li><strong>Complex PTSD (CPTSD):</strong> Results from prolonged, repeated trauma from which there was little or no chance of escape.</li>
                    </ul>
                    <h2>Part II: The 17 Overlooked Signs</h2>
                    <p>These 17 signs describe behaviors that feel like self-sabotage but are actually survival-driven coping mechanisms.</p>
                    <ol class="space-y-4">
                        <li><strong>1. Over-explaining or people-pleasing:</strong> An attempt to control conflict.</li>
                        <li><strong>2. Tearing yourself down:</strong> Hurting yourself first so others can't.</li>
                        <li><strong>3. Ignoring your needs:</strong> A survival response from childhood neglect.</li>
                        <li><strong>4. Chasing validation:</strong> A temporary fix for trauma-based shame.</li>
                        <li><strong>5. Apologizing for existing:</strong> Deep-seated core shame.</li>
                        <li><strong>6. Splitting:</strong> Seeing the world as all-good or all-bad.</li>
                        <li><strong>7. Hypervigilance:</strong> Scanning every room for danger.</li>
                        <li><strong>8. Extreme attachment styles:</strong> Attaching fast or isolating completely.</li>
                        <li><strong>9. Constant busyness:</strong> Working so you don't have to feel.</li>
                        <li><strong>10. Dissociation:</strong> "Checking out" mid-conversation.</li>
                        <li><strong>11. Survival cynicism:</strong> Questioning everyone's motives.</li>
                        <li><strong>12. Chronic loneliness:</strong> Feeling alone even in a crowd.</li>
                        <li><strong>13. Trauma rehearsal:</strong> Expecting disappointment before it happens.</li>
                        <li><strong>14. Emotional freeze:</strong> Shutting down when asked what you feel.</li>
                        <li><strong>15. Disproportionate reactions:</strong> Exploding or withdrawing when hurt.</li>
                        <li><strong>16. Constant comparison:</strong> Fuelled by negative self-concept.</li>
                        <li><strong>17. Repetition compulsion:</strong> Choosing familiar pain because it feels like home.</li>
                    </ol>
                `
            },
            2: {
                title: "Book 2: The Neurochemical Hijack",
                content: `
                    <h1>The Neurochemical Hijack: Root Causes and Survival Mode</h1>
                    <p>Every single sign—from people-pleasing to instant withdrawal—is the logical result of a nervous system that was forced to adapt to an environment it deemed unsafe.</p>
                    <h2>Part I: The Root Cause—The Nervous System Rewired</h2>
                    <h3>The Polyvagal Theory</h3>
                    <p>The nervous system has three main modes of survival, constantly scanning for danger:</p>
                    <ul>
                        <li><strong>Ventral Vagal (Safety):</strong> Calm, connected, and safe.</li>
                        <li><strong>Sympathetic (Action):</strong> The classic Fight or Flight mode.</li>
                        <li><strong>Dorsal Vagal (Collapse):</strong> Freeze or Shutdown when escape is impossible.</li>
                    </ul>
                    <h2>Part II: The Displacement of Normal Thought</h2>
                    <p>When your body senses danger, it executes a protocol that displaces logical thought.</p>
                    <ul>
                        <li><strong>Prefrontal Cortex:</strong> The "Pilot" shuts down, removing logical control.</li>
                        <li><strong>Amygdala:</strong> The fear alarm goes into overdrive.</li>
                        <li><strong>Hippocampus:</strong> Fails to file memories as "past," making them feel present.</li>
                    </ul>
                    <h2>Part III: The Chemical Flood</h2>
                    <p>Chronic stress hormones (Adrenaline, Cortisol) can lead to hypertension, immune dysfunction, and digestive issues.</p>
                `
            },
            3: {
                title: "Book 3: Reclaiming Your Life",
                content: `
                    <h1>Reclaiming Your Life: Daily Healing and Communication</h1>
                    <p>Healing from trauma is not a sudden cure; it is a moment-by-moment practice of gently teaching your nervous system that the danger is over.</p>
                    <h2>Part I: Healing Day by Day</h2>
                    <h3>Grounding Techniques</h3>
                    <p>Grounding brings your awareness back to the present moment.</p>
                    <ul>
                        <li><strong>5-4-3-2-1 Method:</strong> Engage all five senses to anchor yourself.</li>
                        <li><strong>TIPP Skill:</strong> Temperature, Intense exercise, Paced breathing, and Paired muscle relaxation.</li>
                    </ul>
                    <h2>Part II: Advanced Tools</h2>
                    <h3>Hypnosis & Imagery</h3>
                    <p>Therapeutic hypnosis speaks directly to the subconscious mind to bypass the analytical "blockers" of a traumatized brain.</p>
                    <h3>Somatic Release</h3>
                    <p>Techniques like Somatic Experiencing and EMDR help release the physical charge stored in the body.</p>
                    <h2>Part III: Communicating Pain</h2>
                    <p>Protect your ego by using trauma language, not shame language. Frame symptoms as survival strategies, not failures.</p>
                `
            }
        };

        const resources = [
            { name: "National Suicide & Crisis Lifeline", service: "24/7 Counseling", contact: "988" },
            { name: "Crisis Text Line", service: "Text-based support", contact: "HOME to 741741" },
            { name: "National Domestic Violence Hotline", service: "Safety & Support", contact: "1-800-799-7233" },
            { name: "SAMHSA National Helpline", service: "Treatment Referrals", contact: "1-800-662-4357" }
        ];

        let currentBookId = null;
        let isReading = false;
        let audioContext = null;

        // --- View Logic ---

        function openReader(id) {
            currentBookId = id;
            const book = books[id];
            document.getElementById('book-display').innerHTML = book.content;
            document.getElementById('home-view').classList.add('hidden');
            document.getElementById('reader-view').classList.remove('hidden');
            window.scrollTo(0, 0);
        }

        function closeReader() {
            stopTTS();
            document.getElementById('reader-view').classList.add('hidden');
            document.getElementById('home-view').classList.remove('hidden');
            currentBookId = null;
        }

        function scrollToResources() {
            document.getElementById('resources-section').scrollIntoView({ behavior: 'smooth' });
        }

        function populateResources() {
            const list = document.getElementById('resource-list');
            list.innerHTML = resources.map(r => `
                <div class="bg-white p-4 rounded-xl flex justify-between items-center shadow-sm border border-slate-200">
                    <div>
                        <div class="font-bold text-slate-900">${r.name}</div>
                        <div class="text-sm text-slate-500">${r.service}</div>
                    </div>
                    <div class="font-bold text-indigo-600">${r.contact}</div>
                </div>
            `).join('');
        }

        // --- Text To Speech Logic (Gemini API) ---

        async function toggleTTS() {
            if (isReading) {
                stopTTS();
                return;
            }
            
            const textToRead = document.getElementById('book-display').innerText;
            const statusEl = document.getElementById('reading-status');
            const btnEl = document.getElementById('tts-btn');
            const overlay = document.getElementById('loading-overlay');

            try {
                overlay.classList.remove('hidden');
                isReading = true;
                statusEl.classList.remove('hidden');
                btnEl.innerHTML = '<i class="fa-solid fa-stop"></i>';
                btnEl.classList.add('bg-red-500', 'text-white');

                await generateAndPlaySpeech(textToRead);
            } catch (err) {
                console.error(err);
                stopTTS();
            } finally {
                overlay.classList.add('hidden');
            }
        }

        function stopTTS() {
            isReading = false;
            document.getElementById('reading-status').classList.add('hidden');
            const btnEl = document.getElementById('tts-btn');
            btnEl.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
            btnEl.classList.remove('bg-red-500', 'text-white');
            
            if (audioContext) {
                audioContext.close();
                audioContext = null;
            }
        }

        async function generateAndPlaySpeech(text) {
            // Natural language control for Gemini TTS
            const formattedText = `In a calm, compassionate voice: ${text.substring(0, 1000)}`; // Truncate for demo if needed
            
            const payload = {
                contents: [{ parts: [{ text: formattedText }] }],
                generationConfig: {
                    responseModalities: ["AUDIO"],
                    speechConfig: {
                        voiceConfig: {
                            prebuiltVoiceConfig: { voiceName: "Aoede" } // Calm feminine voice
                        }
                    }
                },
                model: "gemini-2.5-flash-preview-tts"
            };

            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            if (!response.ok) throw new Error("TTS API Failure");
            const result = await response.json();
            const pcmBase64 = result.candidates[0].content.parts[0].inlineData.data;
            const mimeType = result.candidates[0].content.parts[0].inlineData.mimeType;
            const sampleRate = parseInt(mimeType.split('rate=')[1]) || 24000;

            const audioData = base64ToUint8Array(pcmBase64);
            const wavData = pcmToWav(audioData, sampleRate);
            playWav(wavData);
        }

        function base64ToUint8Array(base64) {
            const binaryString = atob(base64);
            const bytes = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            return bytes;
        }

        function pcmToWav(pcmData, sampleRate) {
            const numChannels = 1;
            const bitsPerSample = 16;
            const byteRate = (sampleRate * numChannels * bitsPerSample) / 8;
            const blockAlign = (numChannels * bitsPerSample) / 8;
            const dataSize = pcmData.length;
            const buffer = new ArrayBuffer(44 + dataSize);
            const view = new DataView(buffer);

            const writeString = (offset, string) => {
                for (let i = 0; i < string.length; i++) {
                    view.setUint8(offset + i, string.charCodeAt(i));
                }
            };

            writeString(0, 'RIFF');
            view.setUint32(4, 36 + dataSize, true);
            writeString(8, 'WAVE');
            writeString(12, 'fmt ');
            view.setUint32(16, 16, true);
            view.setUint16(20, 1, true); // PCM format
            view.setUint16(22, numChannels, true);
            view.setUint32(24, sampleRate, true);
            view.setUint32(28, byteRate, true);
            view.setUint16(32, blockAlign, true);
            view.setUint16(34, bitsPerSample, true);
            writeString(36, 'data');
            view.setUint32(40, dataSize, true);

            for (let i = 0; i < dataSize; i++) {
                view.setUint8(44 + i, pcmData[i]);
            }

            return buffer;
        }

        function playWav(wavBuffer) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            audioContext.decodeAudioData(wavBuffer, (buffer) => {
                const source = audioContext.createBufferSource();
                source.buffer = buffer;
                source.connect(audioContext.destination);
                source.onended = () => stopTTS();
                source.start(0);
            });
        }

        // Initialize
        window.onload = () => {
            populateResources();
        };
    </script>
