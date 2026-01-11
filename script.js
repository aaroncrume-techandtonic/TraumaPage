import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Brain, 
  Trophy, 
  ChevronRight, 
  RotateCcw, 
  Volume2, 
  Home,
  Star,
  Settings,
  Sun,
  Snowflake,
  Heart,
  Users,
  Feather,
  Compass,
  X
} from 'lucide-react';

// --- Data: Klamath Language ---

const CATEGORIES = [
  {
    id: 'east',
    title: 'Greetings (East)',
    subtitle: 'New Beginnings',
    icon: <Sun size={32} />,
    // High Contrast Yellow
    bgColor: 'bg-yellow-400',
    textColor: 'text-black',
    borderColor: 'border-yellow-600',
    buttonColor: 'bg-black text-yellow-400 hover:bg-slate-900',
    accentColor: 'text-black',
    words: [
      { id: 1, target: 'Waq lis ʔi?', native: 'How are you?', pronunciation: 'walk-leese-ee' },
      { id: 2, target: 'Sepk\'eec\'a', native: 'Thank you', pronunciation: 'sep-kay-cha' },
      { id: 3, target: 'Moo dic', native: 'Very good', pronunciation: 'moo ditch' },
      { id: 4, target: 'At ma', native: 'Goodbye (Now you)', pronunciation: 'ot ma' },
      { id: 5, target: 'E', native: 'Yes', pronunciation: 'eh' },
    ]
  },
  {
    id: 'south',
    title: 'Colors (South)',
    subtitle: 'Growth & Life',
    icon: <Heart size={32} />,
    // High Contrast Red
    bgColor: 'bg-red-700',
    textColor: 'text-white',
    borderColor: 'border-red-900',
    buttonColor: 'bg-white text-red-700 hover:bg-slate-100',
    accentColor: 'text-white',
    words: [
      { id: 6, target: 'Taktakli', native: 'Red', pronunciation: 'tock-tock-lee' },
      { id: 7, target: 'Gekgekli', native: 'Yellow', pronunciation: 'geck-geck-lee' },
      { id: 8, target: 'Bosbosli', native: 'Black', pronunciation: 'boss-boss-lee' },
      { id: 9, target: 'Balbali', native: 'White', pronunciation: 'ball-ball-ee' },
      { id: 10, target: 'Mecmecli', native: 'Blue', pronunciation: 'metch-metch-lee' },
    ]
  },
  {
    id: 'west',
    title: 'Family (West)',
    subtitle: 'Introspection',
    icon: <Users size={32} />,
    // High Contrast Black
    bgColor: 'bg-black',
    textColor: 'text-white',
    borderColor: 'border-slate-700',
    buttonColor: 'bg-white text-black hover:bg-slate-200',
    accentColor: 'text-white',
    words: [
      { id: 11, target: 'Pkisap', native: 'Mother', pronunciation: 'p-key-sop' },
      { id: 12, target: 'Ptisap', native: 'Father', pronunciation: 'p-tea-sop' },
      { id: 13, target: 'Maqlaqs', native: 'Person / People', pronunciation: 'mock-locks' },
      { id: 14, target: 'Ewksiknii', native: 'Klamath Lake People', pronunciation: 'ewk-sick-nee' },
      { id: 15, target: 'M\'ok\'aak', native: 'Baby', pronunciation: 'm-ok-awk' },
    ]
  },
  {
    id: 'north',
    title: 'Winter/Nature (North)',
    subtitle: 'Wisdom',
    icon: <Snowflake size={32} />,
    // High Contrast White
    bgColor: 'bg-white',
    textColor: 'text-black',
    borderColor: 'border-black',
    buttonColor: 'bg-black text-white hover:bg-slate-800',
    accentColor: 'text-black',
    words: [
      { id: 16, target: 'Loldam', native: 'Winter', pronunciation: 'lool-tum' },
      { id: 17, target: 'Keys', native: 'Snow', pronunciation: 'kay-s' },
      { id: 18, target: 'Slewys', native: 'Wind', pronunciation: 'slou-weash' },
      { id: 19, target: 'We', native: 'Ice', pronunciation: 'waa' },
      { id: 20, target: 'P\'as', native: 'Food', pronunciation: 'pah-s' },
    ]
  }
];

// --- Components ---

const ProgressBar = ({ current, total, activeCategory }) => (
  <div className="w-full h-3 bg-slate-300 rounded-full overflow-hidden border border-slate-400">
    <div 
      className={`h-full transition-all duration-500 ease-out ${activeCategory ? activeCategory.bgColor : 'bg-black'}`}
      style={{ width: `${(current / total) * 100}%` }}
    />
  </div>
);

const Card = ({ children, className = '', onClick, style = {} }) => (
  <div 
    onClick={onClick}
    className={`rounded-xl border-4 p-6 relative overflow-hidden shadow-lg hover:shadow-xl transition-all ${className}`}
    style={style}
  >
    {children}
  </div>
);

// --- Main App Component ---

export default function App() {
  const [view, setView] = useState('home'); // home, learn, quiz, result
  const [activeCategory, setActiveCategory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [streak, setStreak] = useState(5);
  const [xp, setXp] = useState(2450);

  // Audio Handler
  const playAudio = (pronunciation) => {
    if ('speechSynthesis' in window) {
      // Cancel any currently playing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(pronunciation);
      // Try to find a clear English voice to read the phonetic spelling
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(voice => voice.lang === 'en-US' && !voice.name.includes('Google')); // Fallback logic
      if (preferredVoice) utterance.voice = preferredVoice;
      
      utterance.rate = 0.8; // Slower for clarity
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  };

  const startSession = (category, mode) => {
    setActiveCategory(category);
    setCurrentIndex(0);
    setIsFlipped(false);
    setQuizScore(0);
    setView(mode);
  };

  const handleNext = () => {
    if (!activeCategory) return;
    setIsFlipped(false);
    
    if (currentIndex < activeCategory.words.length - 1) {
      setTimeout(() => setCurrentIndex(c => c + 1), 150);
    } else {
      if (view === 'quiz') {
        setView('result');
      } else {
        setView('home'); 
        setXp(x => x + 50);
      }
    }
  };

  const handleQuizAnswer = (isCorrect) => {
    if (isCorrect) {
      setQuizScore(s => s + 1);
    }
    handleNext();
  };

  // --- Views ---

  const HomeScreen = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header with Medicine Wheel Motif */}
      <div className="relative overflow-hidden bg-black text-white p-6 rounded-3xl shadow-xl border-b-8 border-yellow-500">
        <div className="absolute top-0 right-0 p-4 opacity-20 text-yellow-500">
          <Compass size={140} />
        </div>
        <div className="relative z-10">
          <h1 className="text-3xl font-black mb-1 tracking-tight">MAQLAQS</h1>
          <p className="text-slate-300 text-sm font-medium mb-6 uppercase tracking-widest">Medicine Wheel Learning</p>
          
          <div className="flex gap-4">
            <div className="bg-yellow-500 text-black px-4 py-2 rounded-lg flex items-center gap-2 font-bold shadow-md">
              <span className="text-xl">🔥</span>
              <span>{streak} Days</span>
            </div>
            <div className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-bold shadow-md">
              <span className="text-xl">💎</span>
              <span>{xp} XP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="space-y-4 pb-20">
        <h2 className="font-black text-black text-xl px-2 flex items-center gap-2 uppercase">
          <Feather size={24} className="text-black" />
          The Four Directions
        </h2>
        {CATEGORIES.map(cat => (
          <Card 
            key={cat.id} 
            className={`${cat.bgColor} ${cat.textColor} ${cat.borderColor}`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border-2 border-current flex items-center justify-center`}>
                  {cat.icon}
                </div>
                <div>
                  <h3 className="font-black text-xl uppercase tracking-wide">{cat.title}</h3>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-90">{cat.subtitle}</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3 mt-4">
              <button 
                onClick={() => startSession(cat, 'learn')}
                className={`flex-1 px-4 py-3 rounded-xl text-base font-black uppercase tracking-wider transition-transform active:scale-95 flex items-center justify-center gap-2 shadow-lg border-2 border-transparent ${cat.buttonColor}`}
              >
                <BookOpen size={18} /> Learn
              </button>
              <button 
                onClick={() => startSession(cat, 'quiz')}
                className={`flex-1 px-4 py-3 rounded-xl text-base font-black uppercase tracking-wider transition-transform active:scale-95 flex items-center justify-center gap-2 shadow-lg border-2 border-current bg-transparent hover:bg-black/10`}
              >
                <Brain size={18} /> Quiz
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const LearnScreen = () => {
    const word = activeCategory.words[currentIndex];
    
    return (
      <div className="h-full flex flex-col max-w-md mx-auto animate-in zoom-in-95 duration-300">
        <div className="mb-6 flex items-center justify-between bg-white p-2 rounded-xl shadow-sm border border-slate-200">
          <button onClick={() => setView('home')} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <X className="text-black" size={24} />
          </button>
          <div className="flex-1 mx-4">
             <ProgressBar 
                current={currentIndex + 1} 
                total={activeCategory.words.length} 
                activeCategory={activeCategory}
             />
          </div>
          <div className="font-black text-sm">{currentIndex + 1}/{activeCategory.words.length}</div>
        </div>

        <div className="flex-1 flex flex-col justify-center perspective-1000 mb-8">
          <div 
            className="relative h-96 w-full cursor-pointer group"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <div className={`absolute inset-0 w-full h-full transition-all duration-500 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
              
              {/* Front */}
              <div className={`absolute inset-0 backface-hidden bg-white rounded-3xl shadow-2xl border-4 ${activeCategory.borderColor} flex flex-col items-center justify-center p-6`}>
                <div className={`mb-6 p-4 rounded-full ${activeCategory.bgColor} ${activeCategory.textColor} bg-opacity-20`}>
                   {activeCategory.icon}
                </div>
                <h2 className="text-4xl font-black text-black mb-2 text-center leading-tight">{word.target}</h2>
                <div className="mt-4 px-6 py-2 bg-slate-100 rounded-lg border-2 border-slate-200 text-slate-600 text-sm font-bold font-mono tracking-wide">
                   /{word.pronunciation}/
                </div>
                
                <button 
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    playAudio(word.pronunciation);
                  }}
                  className={`mt-8 p-4 rounded-full shadow-lg transition-transform active:scale-90 ${activeCategory.buttonColor}`}
                  title="Play Pronunciation"
                >
                  <Volume2 size={32} />
                </button>
                <p className="absolute bottom-6 text-slate-400 text-xs font-black uppercase tracking-widest">Tap card to see meaning</p>
              </div>

              {/* Back */}
              <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-3xl shadow-2xl border-4 flex flex-col items-center justify-center p-8 ${activeCategory.bgColor} ${activeCategory.textColor} ${activeCategory.borderColor}`}>
                <h3 className="text-sm font-black uppercase tracking-widest opacity-70 mb-6 border-b-2 border-current pb-1">English Translation</h3>
                <h2 className="text-4xl font-black mb-8 text-center leading-tight">{word.native}</h2>
                <RotateCcw size={40} className="opacity-50 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <button 
            onClick={handleNext}
            className={`w-full font-black text-lg uppercase tracking-widest py-5 rounded-2xl shadow-xl active:scale-[0.98] transition-all flex items-center justify-center gap-3 border-2 ${activeCategory.bgColor} ${activeCategory.textColor} ${activeCategory.id === 'north' ? 'border-black' : 'border-transparent'}`}
          >
            {currentIndex === activeCategory.words.length - 1 ? 'Finish' : 'Next Word'} <ChevronRight size={24} />
          </button>
        </div>
      </div>
    );
  };

  const QuizScreen = () => {
    const word = activeCategory.words[currentIndex];
    
    const options = React.useMemo(() => {
      const others = activeCategory.words.filter(w => w.id !== word.id);
      const shuffledOthers = others.sort(() => 0.5 - Math.random()).slice(0, 2);
      return [word, ...shuffledOthers].sort(() => 0.5 - Math.random());
    }, [word, activeCategory]);

    return (
      <div className="h-full flex flex-col max-w-md mx-auto animate-in slide-in-from-right-8 duration-300">
         <div className="mb-8 flex items-center justify-between bg-white p-3 rounded-xl border border-slate-200">
          <button onClick={() => setView('home')} className="text-slate-500 font-black text-xs uppercase hover:text-black tracking-wider flex items-center gap-1">
             <X size={16} /> Quit
          </button>
          <div className="flex-1 mx-4">
            <ProgressBar 
                current={currentIndex} 
                total={activeCategory.words.length} 
                activeCategory={activeCategory}
             />
          </div>
          <span className={`font-black text-sm`}>{currentIndex + 1}/{activeCategory.words.length}</span>
        </div>

        <div className="flex-1">
          <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-slate-100 mb-8 text-center">
            <h2 className="text-lg font-bold text-slate-500 uppercase tracking-wide mb-4">
                How do you say?
            </h2>
            <div className={`text-4xl font-black ${activeCategory.id === 'north' ? 'text-black' : activeCategory.id === 'west' ? 'text-black' : activeCategory.id === 'east' ? 'text-yellow-600' : 'text-red-600'}`}>
                {word.native}
            </div>
          </div>

          <div className="space-y-4">
            {options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => handleQuizAnswer(opt.id === word.id)}
                className={`w-full bg-white border-4 border-slate-200 hover:border-black p-6 rounded-2xl transition-all duration-150 group flex items-center justify-between text-left hover:shadow-xl hover:scale-[1.02] active:scale-95`}
              >
                <span className="text-xl font-bold text-slate-800 group-hover:text-black">{opt.target}</span>
                <div className={`w-6 h-6 rounded-full border-2 border-slate-300 group-hover:${activeCategory.bgColor}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const ResultScreen = () => {
    const percentage = Math.round((quizScore / activeCategory.words.length) * 100);
    const isSuccess = percentage >= 70;

    useEffect(() => {
        if(isSuccess) setXp(prev => prev + 100);
    }, []);

    return (
      <div className="h-full flex flex-col items-center justify-center text-center max-w-md mx-auto animate-in zoom-in-95 duration-500 bg-white p-6 rounded-3xl border-4 border-black">
        <div className={`w-32 h-32 rounded-full flex items-center justify-center mb-8 border-4 border-black ${isSuccess ? 'bg-yellow-400 text-black' : 'bg-slate-200 text-slate-500'}`}>
          {isSuccess ? <Trophy size={64} /> : <Brain size={64} />}
        </div>
        
        <h2 className="text-4xl font-black text-black mb-2 uppercase tracking-tighter">
          {isSuccess ? 'Success!' : 'Keep Going!'}
        </h2>
        
        <p className="text-slate-600 font-medium mb-10 max-w-xs leading-relaxed">
          {isSuccess 
            ? `You have honored the ${activeCategory.title} direction.` 
            : `You got ${quizScore} out of ${activeCategory.words.length} correct. Return to the circle and try again.`}
        </p>

        <div className="grid grid-cols-2 gap-4 w-full mb-10">
          <div className="bg-black p-4 rounded-xl text-white">
            <div className="text-xs text-slate-400 font-black uppercase mb-1 tracking-widest">Score</div>
            <div className="text-3xl font-black text-white">{percentage}%</div>
          </div>
          <div className="bg-yellow-400 p-4 rounded-xl border-2 border-black">
             <div className="text-xs text-black font-black uppercase mb-1 tracking-widest">XP Earned</div>
            <div className="text-3xl font-black text-black">+{isSuccess ? 100 : 25}</div>
          </div>
        </div>

        <button 
          onClick={() => setView('home')}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest py-5 rounded-xl shadow-xl border-4 border-red-800 transition-all active:scale-[0.98]"
        >
          Return to Circle
        </button>
      </div>
    );
  };

  // --- Main Layout ---

  return (
    <div className="min-h-screen bg-slate-200 text-slate-900 font-sans selection:bg-black selection:text-white">
      <div className="max-w-md mx-auto min-h-screen bg-white shadow-2xl overflow-hidden flex flex-col relative border-x-4 border-slate-300">
        
        {/* Main Content Area */}
        <main className="flex-1 p-6 overflow-y-auto custom-scrollbar relative bg-slate-50">
          {view === 'home' && <HomeScreen />}
          {view === 'learn' && <LearnScreen />}
          {view === 'quiz' && <QuizScreen />}
          {view === 'result' && <ResultScreen />}
        </main>

        {/* Bottom Navigation (Only on Home) */}
        {view === 'home' && (
          <nav className="border-t-4 border-slate-200 bg-white px-6 py-4 flex justify-between items-center z-30">
            <button className="flex flex-col items-center gap-1 text-black transition-transform hover:scale-110">
              <Home size={28} />
              <span className="text-[10px] font-black uppercase tracking-wider">Home</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-black transition-all hover:scale-110">
              <Star size={28} />
              <span className="text-[10px] font-black uppercase tracking-wider">Rank</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-black transition-all hover:scale-110">
              <Users size={28} />
              <span className="text-[10px] font-black uppercase tracking-wider">Tribe</span>
            </button>
          </nav>
        )}
      </div>
      
      {/* CSS Utility for 3D flip effect */}
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .preserve-3d { transform-style: preserve-3d; }
      `}</style>
    </div>
  );
}
