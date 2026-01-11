  <script>
        // Choose Palette: Medicine Wheel Harmony
        // Application Structure Plan: A 4-quadrant interactive dashboard modeled after the Medicine Wheel + Dedicated Tribute Section. 
        // User Flow: Dash -> Detail Quadrants -> Dedication -> Deep Read Modal.
        // Visualization & Content Choices: Radar (Spectrum), Bar (Biology), Grid (Signs), Animation (Breath). 
        // Confirmation: NO SVG graphics used. NO Mermaid JS used.

        const apiKey = ""; // API key managed by environment

        const signs = [
            { title: "Over-explaining", icon: "fa-comments", scenario: "Spending 20 mins drafting a basic email.", logic: "Preemptively soothing others to stay safe from unpredictable moods." },
            { title: "Preemptive Self-Attack", icon: "fa-shield-halved", scenario: "Calling yourself 'stupid' before anyone else can.", logic: "Controlling the pain of criticism by inflicting it yourself first." },
            { title: "Ignoring Needs", icon: "fa-battery-empty", scenario: "Forgetting to eat because you are focused on tasks.", logic: "Deep belief that your needs are a burden to others." },
            { title: "Validation Blocks", icon: "fa-trophy", scenario: "Praise feels like a 'mistake' or evaporates instantly.", logic: "A 'shame filter' rejects positive information about the self." },
            { title: "Apologizing for Existing", icon: "fa-user-slash", scenario: "Saying 'sorry' for taking up physical space.", logic: "Core existential shame planted by early developmental trauma." },
            { title: "Splitting", icon: "fa-arrows-split-up-and-left", scenario: "Seeing a friend as 'evil' after one missed call.", logic: "Inability to handle nuance when safety is inconsistent." },
            { title: "Hypervigilance", icon: "fa-eye", scenario: "Scanning exits in a restaurant immediately.", logic: "Nervous system permanently set to Code Red for survival." },
            { title: "Attachment Extremes", icon: "fa-magnet", scenario: "Attaching instantly or isolating completely.", logic: "Extreme management of relational risk." },
            { title: "The 'Busy' Shield", icon: "fa-person-running", scenario: "Working constantly to avoid the silence.", logic: "Outrunning intrusive memories and hollow feelings." },
            { title: "Dissociation", icon: "fa-cloud", scenario: "Checking out mid-conversation or 'losing time'.", logic: "Mental escape when physical escape was impossible." },
            { title: "Survival Cynicism", icon: "fa-filter", scenario: "Thinking 'what do they want?' when someone is nice.", logic: "Kindness historically masked betrayal." },
            { title: "Crowded Loneliness", icon: "fa-users-slash", scenario: "Feeling an invisible barrier in a group.", logic: "Unresolved shame prevents authentic connection." },
            { title: "Trauma Rehearsal", icon: "fa-film", scenario: "Imagining worst-case scenarios commute.", logic: "Practicing the pain so it won't destroy you later." },
            { title: "Emotional Freeze", icon: "fa-icicles", scenario: "Mind goes blank when asked 'how do you feel?'.", logic: "Biological disconnection from body signals." },
            { title: "Disproportionate Reaction", icon: "fa-explosion", scenario: "Rage over a dropped glass.", logic: "Reacting to stored decades of stress, not the glass." },
            { title: "Comparison Loop", icon: "fa-scale-unbalanced", scenario: "Seeing others as whole and yourself as fragments.", logic: "Internal confirmation of chronic core brokenness." },
            { title: "Repetition Compulsion", icon: "fa-rotate-right", scenario: "Dating the same hurtful type of person.", logic: "Attempting to master the old trauma by recreating the battlefield." }
        ];

        const resources = [
            { name: "National Suicide Lifeline", contact: "988", note: "Anxiety, Depression, Crisis" },
            { name: "Crisis Text Line", contact: "HOME to 741741", note: "Grief, Anxiety, Trauma" },
            { name: "Domestic Violence Hotline", contact: "1-800-799-7233", note: "Safety Planning, PTSD" },
            { name: "SAMHSA Helpline", contact: "1-800-662-4357", note: "Treatment Referral, Delusions" }
        ];

        const fullBookText = `<h1>The Hidden Language of Trauma</h1><p>Trauma is not just a memory; it is an invisible architecture that changes how you perceive safety, connection, and your own worth. It manifests as overlooked signs easily mistaken for character flaws.</p><h2>The 17 Overlooked Signs</h2><p>Identifying these signs is the first act of rebellion. <strong>Over-explaining</strong>, <strong>Preemptive Self-Attack</strong>, and <strong>Hypervigilance</strong> are not who you are—they are how you survived.</p><h1>The Neurochemical Hijack</h1><p>Your brain is ultra-efficient at survival. During trauma, the <strong>Amygdala</strong> (Smoke Detector) screams at the smell of burnt toast, while the <strong>Prefrontal Cortex</strong> (The Pilot) goes offline.</p><h1>Reclaiming Your Life</h1><p>Healing happens from the bottom-up. Starting with the body using <strong>TIPP skills</strong> and <strong>Grounding</strong>, we teach the system that the danger is over.</p>`;

        let isReading = false;
        let audioContext = null;
        let currentSource = null;

        function init() {
            renderSigns();
            renderResources();
            initCharts();
        }

        function switchView(viewId) {
            document.querySelectorAll('#scroll-area > div').forEach(v => v.classList.add('hidden'));
            document.querySelectorAll('nav button').forEach(b => b.classList.remove('active-tab'));
            
            document.getElementById(`view-${viewId}`).classList.remove('hidden');
            document.getElementById(`nav-${viewId}`).classList.add('active-tab');
            
            const titles = { 
                dashboard: "Series Dashboard", 
                dedication: "The Heart of the Project",
                identify: "Identify (East)", 
                biology: "Biology (South)", 
                heal: "Healing (West)", 
                resources: "Resources (North)" 
            };
            const descs = {
                dashboard: "Your roadmap from trauma to integrated healing.",
                dedication: "Honoring the advocacy of Jordan Lynn Stewart.",
                identify: "Recognizing the physical and behavioral manifestations of trauma.",
                biology: "How the brain and nervous system adapt to survive.",
                heal: "Daily tools and strategies for retraining the survival alarm.",
                resources: "Safe harbor and emergency assistance contacts."
            };
            
            document.getElementById('view-title').textContent = titles[viewId];
            document.getElementById('view-desc').textContent = descs[viewId];
            document.getElementById('scroll-area').scrollTop = 0;
        }

        function renderSigns() {
            const grid = document.getElementById('signs-grid');
            signs.forEach(s => {
                const card = document.createElement('div');
                card.className = "bg-white p-6 rounded-3xl border border-slate-200 sign-card group";
                card.innerHTML = `<div class="w-10 h-10 rounded-xl bg-yellow-50 text-yellow-600 flex items-center justify-center mb-4"><i class="fa-solid ${s.icon}"></i></div><h4 class="font-bold mb-2">${s.title}</h4><p class="text-xs text-slate-500 hidden group-hover:block transition-all"><strong>Logic:</strong> ${s.logic}</p>`;
                grid.appendChild(card);
            });
        }

        function renderResources() {
            const list = document.getElementById('resource-list');
            resources.forEach(r => {
                list.innerHTML += `<div class="bg-white p-6 rounded-2xl border border-slate-200 flex justify-between items-center"><div><div class="font-bold text-slate-900">${r.name}</div><div class="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">${r.note}</div></div><div class="text-lg font-black text-indigo-600">${r.contact}</div></div>`;
            });
        }

        function initCharts() {
            new Chart(document.getElementById('mainRadarChart').getContext('2d'), {
                type: 'radar',
                data: {
                    labels: ['Flashbacks', 'Hypervigilance', 'Emotional Regulation', 'Self-Concept', 'Relationship Trust', 'Dissociation'],
                    datasets: [
                        { label: 'PTSD Focus', data: [90, 85, 40, 30, 40, 50], backgroundColor: 'rgba(239, 68, 68, 0.2)', borderColor: 'rgb(239, 68, 68)' },
                        { label: 'CPTSD Focus', data: [50, 70, 95, 95, 90, 80], backgroundColor: 'rgba(234, 179, 8, 0.2)', borderColor: 'rgb(234, 179, 8)' }
                    ]
                },
                options: { maintainAspectRatio: false, scales: { r: { angleLines: { display: false }, ticks: { display: false } } } }
            });

            new Chart(document.getElementById('polyvagalBarChart').getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['Ventral Vagal (Safety)', 'Sympathetic (Fight/Flight)', 'Dorsal Vagal (Freeze)'],
                    datasets: [
                        { label: 'Energy Level', data: [40, 95, 10], backgroundColor: ['#4ade80', '#ef4444', '#1e293b'] },
                        { label: 'Safety Sense', data: [95, 10, 5], backgroundColor: ['#166534', '#991b1b', '#0f172a'] }
                    ]
                },
                options: { maintainAspectRatio: false, scales: { y: { beginAtZero: true, display: false }, x: { grid: { display: false } } } }
            });
        }

        function toggleReader() {
            const modal = document.getElementById('reader-modal');
            const display = document.getElementById('reader-content');
            if (modal.classList.contains('hidden')) {
                display.innerHTML = fullBookText;
                modal.classList.remove('hidden');
            } else {
                stopTTS();
                modal.classList.add('hidden');
            }
        }

        async function toggleTTS() {
            if (isReading) { stopTTS(); return; }
            const text = document.getElementById('reader-content').innerText;
            const loader = document.getElementById('tts-loader');
            const indicator = document.getElementById('tts-indicator');
            const btn = document.getElementById('tts-btn');

            isReading = true;
            loader.classList.remove('hidden');
            indicator.classList.remove('hidden');
            btn.innerHTML = '<i class="fa-solid fa-stop"></i> Stop';
            btn.classList.add('bg-red-500');

            try {
                const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`, {
                    method: "POST", headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: `Read with empathy: ${text.substring(0, 3000)}` }] }],
                        generationConfig: { responseModalities: ["AUDIO"], speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: "Aoede" } } } },
                        model: "gemini-2.5-flash-preview-tts"
                    })
                });
                const result = await res.json();
                const pcmBase64 = result.candidates[0].content.parts[0].inlineData.data;
                playAudio(pcmBase64);
            } catch (e) { stopTTS(); } finally { loader.classList.add('hidden'); }
        }

        function stopTTS() {
            isReading = false;
            document.getElementById('tts-indicator').classList.add('hidden');
            document.getElementById('tts-loader').classList.add('hidden');
            const btn = document.getElementById('tts-btn');
            btn.innerHTML = '<i class="fa-solid fa-volume-high"></i> Listen';
            btn.classList.remove('bg-red-500');
            if (currentSource) { currentSource.stop(); currentSource = null; }
        }

        function playAudio(base64) {
            const binary = atob(base64);
            const bytes = new Uint8Array(binary.length);
            for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
            const wav = createWav(bytes, 24000);
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            audioContext.decodeAudioData(wav, buffer => {
                if (!isReading) return;
                currentSource = audioContext.createBufferSource();
                currentSource.buffer = buffer;
                currentSource.connect(audioContext.destination);
                currentSource.onended = () => stopTTS();
                currentSource.start(0);
            });
        }

        function createWav(pcm, rate) {
            const buf = new ArrayBuffer(44 + pcm.length);
            const v = new DataView(buf);
            const s = (o, str) => { for (let i = 0; i < str.length; i++) v.setUint8(o + i, str.charCodeAt(i)); };
            s(0, 'RIFF'); v.setUint32(4, 36 + pcm.length, true); s(8, 'WAVE'); s(12, 'fmt '); v.setUint32(16, 16, true);
            v.setUint16(20, 1, true); v.setUint16(22, 1, true); v.setUint32(24, rate, true); v.setUint32(28, rate * 2, true);
            v.setUint16(32, 2, true); v.setUint16(34, 16, true); s(36, 'data'); v.setUint32(40, pcm.length, true);
            for (let i = 0; i < pcm.length; i++) v.setUint8(44 + i, pcm[i]);
            return buf;
        }

        window.onload = init;
    </script>
