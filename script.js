<script>
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

        const fullBookText = `
            <h1>Book 1: The Hidden Language of Trauma</h1>
            <p>Trauma is not just a memory; it is an invisible architecture that changes how you perceive safety, connection, and your own worth. It manifests as overlooked signs easily mistaken for character flaws.</p>
            
            <h2>Part I: The 17 Overlooked Signs</h2>
            <p><strong>1. Over-explaining:</strong> You draft emails for 20 minutes to avoid "danger." This is a survival response to unpredictable moods, where you preemptively soothe others to stay safe.</p>
            <p><strong>2. Preemptive Self-Attack:</strong> You call yourself "stupid" before anyone else can. By inflicting the pain yourself first, you feel a distorted sense of control over external criticism.</p>
            <p><strong>3. Ignoring Needs:</strong> You forget to eat or sleep because you are focused on tasks or others. This stems from a deep belief that your needs are a burden to the world.</p>
            <p><strong>4. Validation Blocks:</strong> Praise feels like a "mistake" or evaporates instantly. A "shame filter" in your brain rejects positive information about your self-worth.</p>
            <p><strong>5. Apologizing for Existing:</strong> Saying "sorry" for taking up physical space or simply having a presence. This is core existential shame planted by early developmental trauma.</p>
            <p><strong>6. Splitting:</strong> Seeing the world as all-good or all-bad. Nuance feels unsafe when your early safety was inconsistent.</p>
            <p><strong>7. Hypervigilance:</strong> Scanning every exit and tracking every facial change in a room. Your nervous system is permanently set to Code Red for survival.</p>
            <p><strong>8. Attachment Extremes:</strong> You either dive into a relationship within 48 hours to secure "safety," or you keep everyone at a ten-foot distance. Both are desperate attempts to manage relational risk.</p>
            <p><strong>9. The "Busy" Shield:</strong> If you stop moving, the feelings catch up. You use work or tasks as a way to outrun intrusive memories and hollow feelings.</p>
            <p><strong>10. Dissociation:</strong> Checking out mid-conversation or "losing time." This was a brilliant survival tool when you couldn't physically escape; your mind learned to leave instead.</p>
            <p><strong>11. Survival Cynicism:</strong> Kindness feels like a trap. When someone is nice, your first thought is "what do they want from me?" because kindness historically masked betrayal.</p>
            <p><strong>12. The "Crowded Room" Loneliness:</strong> Even with loved ones, you feel an invisible barrier. You feel fundamentally different, as if you lack the "manual for life" everyone else has.</p>
            <p><strong>13. Trauma Rehearsal:</strong> You spend your commute imagining the worst-case scenarios. You believe that by "practicing" the pain, you won't be destroyed when it happens.</p>
            <p><strong>14. The Emotional Freeze:</strong> When asked "how do you feel?", your mind goes blank. This is biological disconnection from your body's emotional signals (Interoception).</p>
            <p><strong>15. The Disproportionate Reaction:</strong> A small mistake triggers a massive wave of rage. You are reacting to decades of stored stress that the immediate trigger just unlocked.</p>
            <p><strong>16. The Comparison Loop:</strong> You see "wholeness" in others and "fragments" in yourself, using their highlights to confirm your belief that you are uniquely broken.</p>
            <p><strong>17. Repetition Compulsion:</strong> You find yourself in the same hurtful relationship dynamics. Your subconscious is trying to "win" the old war by recreating the battlefield, hoping for a different outcome.</p>

            <h1>Book 2: The Neurochemical Hijack</h1>
            <p>Your brain is not your enemy; it is ultra-efficient at survival. When you experience chronic trauma, your priority shifts from thriving to staying alive. This shift physically changes your blood chemistry and neural pathways.</p>
            
            <h2>The Polyvagal Ladder</h2>
            <p>Recovery requires understanding the Autonomic Nervous System (ANS):</p>
            <ul>
                <li><strong>Ventral Vagal (Safety):</strong> Social engagement, steady heart rate, and connection.</li>
                <li><strong>Sympathetic (Fight/Flight):</strong> Mobilization, adrenaline spikes, and anxiety.</li>
                <li><strong>Dorsal Vagal (Freeze):</strong> Shutdown, numbness, and dissociation.</li>
            </ul>

            <h2>The Architecture of Trauma</h2>
            <p><strong>The Amygdala:</strong> In trauma, the brain's "Smoke Detector" is enlarged and hyper-sensitive. It screams "FIRE!" at the smell of burnt toast.</p>
            <p><strong>The Prefrontal Cortex:</strong> The "Pilot" handles logic. During a trigger, the Amygdala cuts the wires to the Pilot, leaving you unable to think logically.</p>
            <p><strong>The Hippocampus:</strong> The "Librarian" fails to "date stamp" memories, making 20-year-old trauma feel like it is happening right now.</p>
            <p><strong>Chemical Soup:</strong> Chronic levels of Cortisol cause inflammation and memory loss, while Adrenaline leads to "wired but tired" exhaustion.</p>

            <h1>Book 3: Reclaiming Your Life</h1>
            <p>Healing is not the absence of trauma; it is the presence of Safety. Because the thinking brain shuts down during a trigger, healing must happen from the "bottom-up"—starting with the body.</p>

            <h2>Daily Integration Tools</h2>
            <p><strong>Paced Breathing (TIPP):</strong> Splashing ice-cold water on your face triggers the "Mammalian Dive Reflex," which instantly reboots a panicked brain.</p>
            <p><strong>Grounding (5-4-3-2-1):</strong> Anchoring yourself in the present by engaging all five senses manually.</p>
            <p><strong>Sacred Communication:</strong> Instead of shame-based labels, use survival language. Script: "My nervous system is feeling Sympathetic right now. I need 15 minutes of quiet to find safety. It's not about you; it's about my system."</p>

            <h2>Post-Traumatic Growth</h2>
            <p>Survivors often develop "Superpowers": high empathy, the ability to read environments, and incredible resilience. Healing is becoming the integrated, wise, and powerful version of yourself forged in the fire of survival.</p>
            <p><em>Dedicated to Jordan Lynn Stewart.</em></p>
        `;

        let isReading = false;
        const synth = window.speechSynthesis;
        let speechQueue = [];

        function init() {
            renderSigns();
            renderResources();
            initCharts();
            // Pre-warm voices
            synth.getVoices();
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
                card.className = "bg-white p-6 rounded-3xl border border-slate-200 sign-card group shadow-sm";
                card.innerHTML = `<div class="w-10 h-10 rounded-xl bg-yellow-50 text-yellow-600 flex items-center justify-center mb-4 shadow-inner"><i class="fa-solid ${s.icon}"></i></div><h4 class="font-bold mb-2 text-slate-800">${s.title}</h4><p class="text-xs text-slate-500 hidden group-hover:block transition-all duration-300 leading-relaxed"><strong>Logic:</strong> ${s.logic}</p>`;
                grid.appendChild(card);
            });
        }

        function renderResources() {
            const list = document.getElementById('resource-list');
            resources.forEach(r => {
                list.innerHTML += `<div class="bg-white p-6 rounded-2xl border border-slate-200 flex justify-between items-center shadow-sm"><div><div class="font-bold text-slate-900">${r.name}</div><div class="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">${r.note}</div></div><div class="text-lg font-black text-indigo-600">${r.contact}</div></div>`;
            });
        }

        function initCharts() {
            new Chart(document.getElementById('mainRadarChart').getContext('2d'), {
                type: 'radar',
                data: {
                    labels: ['Flashbacks', 'Hypervigilance', 'Emotional Regulation', 'Self-Concept', 'Relationship Trust', 'Dissociation'],
                    datasets: [
                        { label: 'PTSD Focus', data: [90, 85, 40, 30, 40, 50], backgroundColor: 'rgba(239, 68, 68, 0.2)', borderColor: 'rgb(239, 68, 68)', pointBackgroundColor: 'rgb(239, 68, 68)' },
                        { label: 'CPTSD Focus', data: [50, 70, 95, 95, 90, 80], backgroundColor: 'rgba(234, 179, 8, 0.2)', borderColor: 'rgb(234, 179, 8)', pointBackgroundColor: 'rgb(234, 179, 8)' }
                    ]
                },
                options: { maintainAspectRatio: false, scales: { r: { angleLines: { color: '#e2e8f0' }, grid: { color: '#e2e8f0' }, ticks: { display: false } } }, plugins: { legend: { labels: { font: { family: 'Inter', weight: 'bold' } } } } }
            });

            new Chart(document.getElementById('polyvagalBarChart').getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['Ventral Vagal (Safety)', 'Sympathetic (Fight/Flight)', 'Dorsal Vagal (Freeze)'],
                    datasets: [
                        { label: 'Energy Level', data: [40, 95, 10], backgroundColor: ['#4ade80', '#ef4444', '#1e293b'], borderRadius: 4 },
                        { label: 'Safety Sense', data: [95, 10, 5], backgroundColor: ['#166534', '#991b1b', '#0f172a'], borderRadius: 4 }
                    ]
                },
                options: { maintainAspectRatio: false, scales: { y: { beginAtZero: true, display: false }, x: { grid: { display: false }, border: { display: false } } }, plugins: { legend: { position: 'bottom', labels: { font: { family: 'Inter', weight: 'bold' } } } } }
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

        function downloadFullCollection() {
            const content = document.getElementById('reader-content').innerText;
            const title = "Trauma Compass: The Complete Collection\nDedicated to Jordan Lynn Stewart\n\n";
            const fullDoc = title + content;
            const blob = new Blob([fullDoc], { type: 'text/markdown' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = "Trauma_Compass_Complete_Collection.md";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            showToast("Collection downloaded successfully.");
        }

        // --- NATIVE BROWSER TTS ENGINE ---

        function toggleTTS() {
            if (isReading) {
                stopTTS();
                return;
            }

            const text = document.getElementById('reader-content').innerText.trim();
            if (!text) return;

            isReading = true;
            document.getElementById('tts-indicator').classList.remove('hidden');
            const btn = document.getElementById('tts-btn');
            btn.innerHTML = '<i class="fa-solid fa-stop"></i> Stop';
            btn.classList.add('bg-red-500');

            // Split into paragraphs for better stability
            const paragraphs = text.split(/\n+/);
            
            const speakNext = (index) => {
                if (!isReading || index >= paragraphs.length) {
                    stopTTS();
                    return;
                }

                const utterance = new SpeechSynthesisUtterance(paragraphs[index]);
                
                // Try to find a nice voice
                const voices = synth.getVoices();
                // Prefer Google or Microsoft "Natural" or premium voices if available
                const preferredVoice = voices.find(v => v.name.includes('Premium') || v.name.includes('Natural') || v.name.includes('Google US English'));
                if (preferredVoice) utterance.voice = preferredVoice;
                
                utterance.rate = 0.95; // Slightly slower for empathy
                utterance.pitch = 1;

                utterance.onend = () => speakNext(index + 1);
                utterance.onerror = (e) => {
                    console.error('Speech error:', e);
                    stopTTS();
                };

                synth.speak(utterance);
            };

            speakNext(0);
        }

        function stopTTS() {
            isReading = false;
            synth.cancel();
            document.getElementById('tts-indicator').classList.add('hidden');
            const btn = document.getElementById('tts-btn');
            btn.innerHTML = '<i class="fa-solid fa-volume-high"></i> Listen';
            btn.classList.remove('bg-red-500');
        }

        function showToast(msg) {
            const toast = document.getElementById('toast');
            const toastMsg = document.getElementById('toast-msg');
            toastMsg.textContent = msg;
            toast.classList.remove('hidden');
            setTimeout(() => toast.classList.add('hidden'), 5000);
        }

        window.onload = init;
        // Required for Chrome to load voices
        if (speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = () => synth.getVoices();
        }
    </script>
