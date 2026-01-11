<script>
    const apiKey = ""; // Injected by environment

    // --- Data Source ---
    const signsData = [
        { id: 1, group: 'social', title: 'Over-explaining', icon: 'fa-comments', scenario: 'Drafting an email for 20 minutes to avoid misinterpretation.', logic: 'Preemptively soothing others to stay safe from unpredictable reactions.' },
        { id: 2, group: 'social', title: 'Preemptive Self-Attack', icon: 'fa-shield-halved', scenario: 'Calling yourself "stupid" before anyone else can.', logic: 'Controlling the pain of criticism by inflicting it yourself first.' },
        { id: 3, group: 'social', title: 'Ignoring Needs', icon: 'fa-battery-empty', scenario: 'Forgetting to eat because you are focused on tasks.', logic: 'Belief that your needs are a burden/threat to safety.' },
        { id: 4, group: 'social', title: 'Validation Chase', icon: 'fa-trophy', scenario: 'Feeling a high from praise that evaporates instantly.', logic: 'Internal "shame filter" rejects positive data.' },
        { id: 5, group: 'social', title: 'Apologizing for Existing', icon: 'fa-user-slash', scenario: 'Saying "sorry" for taking up physical space.', logic: 'Core existential shame; feeling like a mistake.' },
        { id: 6, group: 'cognitive', title: 'Splitting', icon: 'fa-arrows-split-up-and-left', scenario: 'Viewing a friend as "evil" for one mistake.', logic: 'Inability to handle nuance due to inconsistent safety.' },
        { id: 7, group: 'cognitive', title: 'Hypervigilance', icon: 'fa-eye', scenario: 'Scanning exits and tracking moods in a restaurant.', logic: 'Nervous system permanently set to "Code Red".' },
        { id: 8, group: 'cognitive', title: 'Attachment Extremes', icon: 'fa-magnet', scenario: 'Attaching instantly or isolating completely.', logic: 'Desperate management of relational risk.' },
        { id: 9, group: 'cognitive', title: 'The "Busy" Shield', icon: 'fa-person-running', scenario: 'Working constantly to avoid silence.', logic: 'Outrunning intrusive memories and feelings.' },
        { id: 10, group: 'cognitive', title: 'Dissociation', icon: 'fa-cloud', scenario: 'Checking out mid-conversation; feeling foggy.', logic: 'Mental escape when physical escape is impossible.' },
        { id: 11, group: 'emotional', title: 'Survival Cynicism', icon: 'fa-filter', scenario: 'Thinking "what do they want?" when someone is kind.', logic: 'Kindness historically masked betrayal.' },
        { id: 12, group: 'emotional', title: 'Crowded Loneliness', icon: 'fa-users-slash', scenario: 'Feeling an invisible barrier in a group.', logic: 'Unresolved shame prevents authentic connection.' },
        { id: 13, group: 'emotional', title: 'Trauma Rehearsal', icon: 'fa-film', scenario: 'Imagining worst-case scenarios daily.', logic: 'Practicing pain to avoid being blindsided.' },
        { id: 14, group: 'emotional', title: 'Emotional Freeze', icon: 'fa-icicles', scenario: 'Mind goes blank when asked "how do you feel?".', logic: 'Disconnection from body signals (Interoception).' },
        { id: 15, group: 'emotional', title: 'Disproportionate Reaction', icon: 'fa-explosion', scenario: 'Rage over a dropped glass.', logic: 'Reacting to stored stress, not the immediate trigger.' },
        { id: 16, group: 'emotional', title: 'Comparison Loop', icon: 'fa-scale-unbalanced', scenario: 'Seeing others as whole and yourself as broken.', logic: 'Confirmation of negative self-concept.' },
        { id: 17, group: 'emotional', title: 'Repetition Compulsion', icon: 'fa-rotate-right', scenario: 'Choosing familiar pain/partners.', logic: 'Subconscious attempt to master the original trauma.' }
    ];

    const resourcesData = [
        { name: "National Suicide & Crisis Lifeline", desc: "24/7 Confidential Support", contact: "988" },
        { name: "Crisis Text Line", desc: "Text-based crisis support", contact: "Text HOME to 741741" },
        { name: "National Domestic Violence Hotline", desc: "Safety planning & support", contact: "1-800-799-7233" },
        { name: "SAMHSA National Helpline", desc: "Treatment referral routing", contact: "1-800-662-4357" },
        { name: "National Center for PTSD", desc: "Research & educational resources", contact: "ptsd.va.gov" }
    ];

    const bookTexts = {
        1: `<h1>The Hidden Language of Trauma</h1><p>Trauma is not just a memory of a bad event; it is an invisible architecture that changes how you perceive safety, connection, and your own worth.</p><h2>The 17 Overlooked Signs</h2><p>Identifying these signs is the first act of rebellion against your trauma. You are not "crazy," and you are not "difficult." You are a survivor.</p><h3>Group A: Social Survival</h3><p><strong>1. Over-explaining:</strong> You draft emails for 20 minutes to avoid "danger."</p><p><strong>2. Self-Criticism:</strong> Tearing yourself down first to control the pain.</p><p><strong>3. Ignoring Needs:</strong> Believing your needs are a burden.</p><p><strong>4. Validation Chase:</strong> A "shame filter" rejects praise.</p><p><strong>5. Apologizing for Existing:</strong> Deep existential shame.</p><h3>Group B: Cognitive Warp</h3><p><strong>6. Splitting:</strong> Seeing the world as all-good or all-bad.</p><p><strong>7. Hypervigilance:</strong> Scanning every room for danger.</p><p><strong>8. Attachment Extremes:</strong> Fast attachment or total isolation.</p><p><strong>9. The Busy Shield:</strong> Moving to avoid feeling.</p><p><strong>10. Dissociation:</strong> Mental departure for safety.</p><h3>Group C: Emotional Shadow</h3><p><strong>11. Survival Cynicism:</strong> Distrusting kindness.</p><p><strong>12. Crowded Loneliness:</strong> Feeling fundamentally different.</p><p><strong>13. Trauma Rehearsal:</strong> Imagining disaster to prepare.</p><p><strong>14. Emotional Freeze:</strong> Losing access to feelings.</p><p><strong>15. Disproportionate Reaction:</strong> Stored stress exploding.</p><p><strong>16. Comparison Loop:</strong> Confirming brokenness.</p><p><strong>17. Repetition Compulsion:</strong> Choosing familiar pain.</p>`,
        
        2: `<h1>The Neurochemical Hijack</h1><p>Your brain isn't broken; it is ultra-efficient at survival. When you experience trauma, priority shifts from thriving to staying alive.</p><h2>The Polyvagal Theory</h2><p><strong>Ventral Vagal (Safety):</strong> Social engagement, calm heart rate.</p><p><strong>Sympathetic (Fight/Flight):</strong> Mobilization, adrenaline spikes.</p><p><strong>Dorsal Vagal (Freeze):</strong> Shutdown, numbness, dissociation.</p><h2>The Brain Architecture</h2><p><strong>Amygdala (Smoke Detector):</strong> Becomes hyper-sensitive, screaming "Fire" at burnt toast.</p><p><strong>Prefrontal Cortex (Pilot):</strong> Logic center goes offline during triggers.</p><p><strong>Hippocampus (Librarian):</strong> Fails to timestamp memories, making past trauma feel present.</p><h2>Chemical Soup</h2><p>Chronic Cortisol causes inflammation and brain fog. Adrenaline leads to "wired but tired" exhaustion.</p>`,
        
        3: `<h1>Reclaiming Your Life</h1><p>Healing is the presence of Safety. It happens "bottom-up"—from body to mind.</p><h2>Daily Tools</h2><h3>1. Grounding</h3><p>Use the 5-4-3-2-1 method to anchor in the present.</p><h3>2. TIPP Skill</h3><p>Temperature (Ice), Intense Exercise, Paced Breathing, Paired Relaxation.</p><h3>3. Parts Work</h3><p>Talk to your Inner Critic. Ask what it is afraid will happen if it stops protecting you.</p><h2>Communication</h2><p>Don't say "I'm crazy." Say: "My nervous system is feeling Sympathetic (on edge). I need 15 minutes to regulate."</p><h2>Post-Traumatic Growth</h2><p>You are building a new, integrated version of yourself that is wise and resilient.</p>`
    };

    // --- State Management ---
    let currentView = 'dashboard';
    let isReaderOpen = false;
    let isReadingTTS = false;
    let audioContext = null;
    let currentSource = null;

    // --- Core Functions ---

    function init() {
        renderSigns('all');
        renderResources();
        initCharts();
        
        // Add fade-in classes
        document.querySelectorAll('#content-area > div').forEach(el => el.classList.add('transition-opacity', 'duration-300'));
    }

    function switchView(viewName) {
        // Update UI State
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('bg-slate-800', 'border-l-4', 'border-indigo-500'));
        
        const activeBtn = document.getElementById(`btn-${viewName}`);
        if(activeBtn) {
            activeBtn.classList.add('bg-slate-800');
            if(viewName === 'dashboard') activeBtn.classList.add('border-indigo-500');
            if(viewName === 'east') activeBtn.classList.add('border-yellow-400');
            if(viewName === 'south') activeBtn.classList.add('border-red-500');
            if(viewName === 'west') activeBtn.classList.add('border-slate-400');
            if(viewName === 'north') activeBtn.classList.add('border-white');
        }

        // Hide all views
        ['dashboard', 'east', 'south', 'west', 'north'].forEach(v => {
            document.getElementById(`view-${v}`).classList.add('hidden');
        });

        // Show target view
        const target = document.getElementById(`view-${viewName}`);
        target.classList.remove('hidden');
        
        // Update Header
        const titleMap = {
            'dashboard': 'Trauma Compass Dashboard',
            'east': 'East: Identification & Signs',
            'south': 'South: Biology & Brain',
            'west': 'West: Healing & Tools',
            'north': 'North: Resources & Support'
        };
        document.getElementById('page-title').textContent = titleMap[viewName];
        
        currentView = viewName;
    }

    function renderSigns(filter) {
        const grid = document.getElementById('signs-grid');
        grid.innerHTML = '';
        
        const filteredData = filter === 'all' ? signsData : signsData.filter(s => s.group === filter);
        
        // Update Filter Buttons
        document.querySelectorAll('.sign-filter').forEach(btn => {
            btn.classList.remove('bg-slate-800', 'text-white');
            btn.classList.add('bg-white', 'text-slate-600');
            if(btn.innerText.toLowerCase().includes(filter === 'all' ? 'all' : filter)) {
                btn.classList.remove('bg-white', 'text-slate-600');
                btn.classList.add('bg-slate-800', 'text-white');
            }
        });

        filteredData.forEach(sign => {
            const card = document.createElement('div');
            card.className = 'sign-card bg-white p-6 rounded-xl border border-slate-200 cursor-pointer relative overflow-hidden group';
            card.onclick = () => toggleCardDetails(card);
            
            const colorClass = sign.group === 'social' ? 'text-yellow-600' : (sign.group === 'cognitive' ? 'text-indigo-600' : 'text-red-600');
            const bgClass = sign.group === 'social' ? 'bg-yellow-50' : (sign.group === 'cognitive' ? 'bg-indigo-50' : 'bg-red-50');

            card.innerHTML = `
                <div class="flex items-start justify-between mb-4">
                    <div class="w-10 h-10 rounded-lg ${bgClass} ${colorClass} flex items-center justify-center text-lg">
                        <i class="fa-solid ${sign.icon}"></i>
                    </div>
                    <span class="text-xs font-bold uppercase tracking-wider text-slate-400">#${sign.id}</span>
                </div>
                <h4 class="font-bold text-lg text-slate-800 mb-2">${sign.title}</h4>
                <div class="details hidden mt-4 pt-4 border-t border-slate-100 animate-fade-in">
                    <p class="text-sm text-slate-600 mb-2"><strong class="text-slate-800">Scenario:</strong> ${sign.scenario}</p>
                    <p class="text-sm text-slate-600"><strong class="text-slate-800">Logic:</strong> ${sign.logic}</p>
                </div>
                <div class="absolute bottom-4 right-4 text-slate-300 group-hover:text-indigo-400 transition-colors">
                    <i class="fa-solid fa-chevron-down transform transition-transform duration-300 chevron"></i>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    function toggleCardDetails(card) {
        const details = card.querySelector('.details');
        const chevron = card.querySelector('.chevron');
        if (details.classList.contains('hidden')) {
            details.classList.remove('hidden');
            chevron.classList.add('rotate-180');
            card.classList.add('ring-2', 'ring-indigo-500');
        } else {
            details.classList.add('hidden');
            chevron.classList.remove('rotate-180');
            card.classList.remove('ring-2', 'ring-indigo-500');
        }
    }
    
    function filterSigns(category) {
        renderSigns(category);
    }

    function renderResources() {
        const grid = document.getElementById('resources-grid');
        resourcesData.forEach(res => {
            grid.innerHTML += `
                <div class="bg-white p-6 rounded-xl border-l-4 border-slate-800 shadow-sm flex justify-between items-center">
                    <div>
                        <h4 class="font-bold text-slate-900">${res.name}</h4>
                        <p class="text-sm text-slate-500">${res.desc}</p>
                    </div>
                    <div class="text-lg font-bold text-indigo-600">${res.contact}</div>
                </div>
            `;
        });
    }

    // --- Charts ---

    function initCharts() {
        // Radar Chart: Trauma Spectrum
        const ctxSpectrum = document.getElementById('spectrumChart').getContext('2d');
        new Chart(ctxSpectrum, {
            type: 'radar',
            data: {
                labels: ['Flashbacks', 'Hypervigilance', 'Emotional Regulation', 'Self-Concept', 'Relationship Trust', 'Dissociation'],
                datasets: [{
                    label: 'PTSD (Event-Based)',
                    data: [90, 85, 40, 30, 40, 50],
                    fill: true,
                    backgroundColor: 'rgba(239, 68, 68, 0.2)',
                    borderColor: 'rgb(239, 68, 68)',
                    pointBackgroundColor: 'rgb(239, 68, 68)',
                }, {
                    label: 'CPTSD (Relational)',
                    data: [50, 70, 95, 95, 90, 80],
                    fill: true,
                    backgroundColor: 'rgba(234, 179, 8, 0.2)',
                    borderColor: 'rgb(234, 179, 8)',
                    pointBackgroundColor: 'rgb(234, 179, 8)',
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                scales: {
                    r: {
                        angleLines: { color: '#e2e8f0' },
                        grid: { color: '#e2e8f0' },
                        pointLabels: { font: { size: 10, family: 'Inter' } },
                        ticks: { display: false }
                    }
                },
                plugins: { legend: { position: 'bottom' } }
            }
        });

        // Bar Chart: Polyvagal States
        const ctxPoly = document.getElementById('polyvagalChart').getContext('2d');
        new Chart(ctxPoly, {
            type: 'bar',
            data: {
                labels: ['Ventral Vagal', 'Sympathetic', 'Dorsal Vagal'],
                datasets: [{
                    label: 'Energy Mobilization',
                    data: [40, 95, 10],
                    backgroundColor: ['#4ade80', '#ef4444', '#1e293b'],
                    borderRadius: 6,
                }, {
                    label: 'Sense of Safety',
                    data: [95, 10, 5],
                    backgroundColor: ['#166534', '#991b1b', '#0f172a'],
                    borderRadius: 6
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                scales: { y: { beginAtZero: true, grid: { display: false } }, x: { grid: { display: false } } },
                plugins: { legend: { position: 'bottom' } }
            }
        });
    }

    // --- Reader & TTS Logic ---

    function toggleReader() {
        const modal = document.getElementById('reader-modal');
        const content = document.getElementById('reader-content-box');
        
        if (isReaderOpen) {
            stopTTS();
            content.classList.remove('modal-enter-active');
            content.classList.add('modal-exit-active');
            setTimeout(() => {
                modal.classList.add('hidden');
                content.classList.remove('modal-exit-active');
            }, 300);
        } else {
            modal.classList.remove('hidden');
            // Simple animation trigger
            requestAnimationFrame(() => {
                content.classList.add('modal-enter-active');
                content.style.opacity = "1";
                content.style.transform = "scale(1)";
            });
            
            // Default to Book 1 if empty
            if(document.getElementById('reader-text-area').innerHTML.trim() === '') {
                openBookReader(1);
            }
        }
        isReaderOpen = !isReaderOpen;
    }

    function openBookReader(bookId) {
        // Populate content
        document.getElementById('reader-text-area').innerHTML = bookTexts[bookId];
        document.getElementById('reader-title').textContent = `Book ${bookId}: Full Text`;
        
        if (!isReaderOpen) toggleReader();
    }

    async function toggleTTS() {
        if (isReadingTTS) {
            stopTTS();
            return;
        }

        const text = document.getElementById('reader-text-area').innerText;
        if(!text) return;

        const btn = document.getElementById('reader-tts-btn');
        const status = document.getElementById('tts-status');
        const loader = document.getElementById('tts-loading');

        isReadingTTS = true;
        status.classList.remove('hidden');
        btn.innerHTML = '<i class="fa-solid fa-stop"></i>';
        btn.classList.add('bg-red-500', 'text-white', 'hover:bg-red-600');
        btn.classList.remove('bg-indigo-50', 'text-indigo-600');
        
        loader.classList.remove('hidden');

        try {
            // Chunking logic for long text
            const chunks = splitTextIntoChunks(text, 2000); // 2000 char chunks
            for (const chunk of chunks) {
                if (!isReadingTTS) break;
                await generateAndPlayAudio(chunk);
            }
        } catch (e) {
            console.error("TTS Error", e);
            stopTTS();
        } finally {
            loader.classList.add('hidden');
            // Only reset UI if we finished naturally, not if stopped manually (already handled)
            if(isReadingTTS) stopTTS(); 
        }
    }

    function stopTTS() {
        isReadingTTS = false;
        const btn = document.getElementById('reader-tts-btn');
        const status = document.getElementById('tts-status');
        const loader = document.getElementById('tts-loading');

        status.classList.add('hidden');
        loader.classList.add('hidden');
        
        btn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        btn.classList.remove('bg-red-500', 'text-white', 'hover:bg-red-600');
        btn.classList.add('bg-indigo-50', 'text-indigo-600');

        if (currentSource) { currentSource.stop(); currentSource = null; }
    }

    function splitTextIntoChunks(text, limit) {
        const chunks = [];
        let current = "";
        const sentences = text.match(/[^\.!\?]+[\.!\?]+/g) || [text];
        
        for (const s of sentences) {
            if ((current + s).length > limit) {
                chunks.push(current);
                current = s;
            } else {
                current += s;
            }
        }
        if(current) chunks.push(current);
        return chunks;
    }

    async function generateAndPlayAudio(text) {
        const payload = {
            contents: [{ parts: [{ text: text }] }],
            generationConfig: {
                responseModalities: ["AUDIO"],
                speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: "Aoede" } } }
            },
            model: "gemini-2.5-flash-preview-tts"
        };

        const response = await fetchWithBackoff(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        if(!response.ok) throw new Error("API Failed");
        const result = await response.json();
        const pcmBase64 = result.candidates[0].content.parts[0].inlineData.data;
        
        // Play Audio
        return new Promise((resolve) => {
            if(!isReadingTTS) { resolve(); return; }
            const audioData = base64ToUint8Array(pcmBase64);
            const wavData = pcmToWav(audioData, 24000);
            
            if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            audioContext.decodeAudioData(wavData, (buffer) => {
                if(!isReadingTTS) { resolve(); return; }
                currentSource = audioContext.createBufferSource();
                currentSource.buffer = buffer;
                currentSource.connect(audioContext.destination);
                currentSource.onended = () => resolve();
                currentSource.start(0);
            });
        });
    }

    async function fetchWithBackoff(url, options, retries = 3) {
        let delay = 1000;
        for(let i=0; i<retries; i++){
            try {
                const res = await fetch(url, options);
                if(res.ok || res.status < 500) return res;
            } catch(e) {}
            await new Promise(r => setTimeout(r, delay));
            delay *= 2;
        }
        throw new Error("Retry limit reached");
    }

    // Utils
    function base64ToUint8Array(base64) {
        const binary_string = window.atob(base64);
        const len = binary_string.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) { bytes[i] = binary_string.charCodeAt(i); }
        return bytes;
    }

    function pcmToWav(pcm, rate) {
        const buffer = new ArrayBuffer(44 + pcm.length);
        const view = new DataView(buffer);
        const writeString = (view, offset, string) => {
            for (let i = 0; i < string.length; i++) view.setUint8(offset + i, string.charCodeAt(i));
        };
        writeString(view, 0, 'RIFF');
        view.setUint32(4, 36 + pcm.length, true);
        writeString(view, 8, 'WAVE');
        writeString(view, 12, 'fmt ');
        view.setUint32(16, 16, true);
        view.setUint16(20, 1, true);
        view.setUint16(22, 1, true);
        view.setUint32(24, rate, true);
        view.setUint32(28, rate * 2, true);
        view.setUint16(32, 2, true);
        view.setUint16(34, 16, true);
        writeString(view, 36, 'data');
        view.setUint32(40, pcm.length, true);
        for (let i = 0; i < pcm.length; i++) view.setUint8(44 + i, pcm[i]);
        return buffer;
    }

    // Boot
    window.onload = init;

</script>
