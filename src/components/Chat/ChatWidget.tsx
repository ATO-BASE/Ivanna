import React, { useEffect, useRef, useState } from 'react';

type Message = {
  id: string;
  from: 'user' | 'bot';
  text: string;
};

const introText = `---

**Hello everyone! My name is Ivanna, I am a senior full-stack Shopify developer from Ukraine.
Today I want to share the story of how my two passions — programming and cooking — led me to a career in IT.**

My journey in technology did not begin in an office or with a mentor. It began in a small kitchen. There was soup boiling nearby, and I was writing my first code. While someone was stirring the ingredients, I was mixing HTML, CSS, and JavaScript. While others were waiting for the food to arrive, I was waiting for the errors in the console to disappear. Thus began my double life, where cooking was a hobby, and programming gradually became a dream.

I cooked a lot — when I was happy, when I was stressed, when I felt confused. And when you learn programming on your own, confusion is a normal state. But over time, I noticed that I was more drawn to code than to recipes. Instead of cooking videos, I started watching Shopify Liquid tutorials. And so my career quietly moved to the forefront.

I taught myself: documentation, tutorials, online courses, endless trial and error. No one led me by the hand - just me, my laptop and stubbornness. There was code that refused to work. There were services that broke at the most inopportune moment. But I kept going. Step by step I became better.

My story at Shopify began with simple things: changing the color of a button, adjusting the indentation. Even that once seemed like a challenge. But I kept learning - and soon I was working on full-fledged projects.
Since then, I have created dozens of Shopify stores, customized themes, integrated complex features, helped customers all over the world.

Over the years, I have worked with subscriptions, product bundles, file uploads, custom applications, and external backend integrations. I set up domains, DNS, optimized stores, and launched them from scratch.

One of my favorite projects was AWS S3 integration for uploading large files. It was a long and emotional struggle with documentation, but the result was worth it.

I also created multi-payment systems, SEPA transfers, custom accounts, and sales funnels that helped clients scale their businesses.

At the same time, I developed as a full-stack developer: I worked with React, Next.js, Node.js, PHP, Laravel. I created APIs, authentication systems, integrations, and admin panels. I worked with databases — PostgreSQL, MongoDB, MySQL, Supabase. I designed schemas, optimized queries, set up analytics, and real-time updates.

Despite all the technical part, what I like most is solving problems. Taking something broken and making something beautiful and working out of it. For me, programming is like cooking: you experiment, you make mistakes, you try again, and you create something that brings people joy.

My story is not about luck. It’s about perseverance. There were nights when I wanted to give up, projects that were nerve-wracking, mistakes that seemed impossible. But I got up again. And every challenge I overcame made me stronger.

Today, I’m a senior Shopify full-stack developer with a strong portfolio and clients who trust me with their businesses. I create stores from scratch, save them in critical situations, build complex integrations and complete systems from frontend to backend.

And despite the experience, I still feel the same thrill as when I typed code next to a pot of soup. I still get nervous before deployment, I’m happy with working code, and I smile when I hear “thank you.”

And most importantly, I'm still hungry. For knowledge, challenges, and new opportunities.

So, this is me - Ivanna. A woman between two chaos: cooking and programming. A developer who built her path through stubbornness and love for creation.
Thank you for listening to my story. If you need someone who can fix your Shopify store and cook the perfect soup at the same time - you know where to find me.

---`;

const cannedResponses: { keywords: string[]; response: string }[] = [
  { keywords: ['full story', 'story', 'journey', 'introduction', 'bio', 'about me', 'about'], response: introText },
  { keywords: ['name', 'who are', 'who'], response: "I'm Ivanna Havryliuk  a senior Shopify full-stack developer from Ukraine." },
  { keywords: ['skills', 'skil', 'stack', 'technologies', 'tech', 'tools'], response: "Ivanna works with Shopify, Shopify App, React, Next.js, Node.js, PHP (Laravel), Tailwind CSS, Vite, and  (Liquid). She also uses PostgreSQL, MongoDB, MySQL and Supabase for backends." },
  { keywords: ['projects', 'portfolio', 'work'], response: "I have created of Shopify stores, custom themes, integrations (payments, S3 uploads), and full-stack projects  check teh Projects page for examples." },
  { keywords: ['contact', 'email', 'hire', 'reach'], response: "You can reach me via the Contact page or email. My email is shopifygod000922@gmail.com, secretsuperstar000922@gmail.com, discord ID is hoioco_2000, telegram is @discover000922." },
  { keywords: ['resume', 'cv'], response: "My resume is available on request  use the Contact page to get in touch." },
  { keywords: ['cooking', 'kitchen', 'soup'], response: "My journey started in the kitchen  I learned to code while cooking🔥, and she still compares programming to cooking: experiment, make mistakes, try again." },
  { keywords: ['marri', 'love', 'bf'], response: "Ivanna is single yet💕." },
  { keywords: ['where', 'live', 'from', 'location'], response: "Ivanna from Ukraine." },
];

function generateBotReply(text: string) {
  const t = text.toLowerCase();
  for (const item of cannedResponses) {
    for (const kw of item.keywords) {
      if (t.includes(kw)) return item.response;
    }
  }
  return "Thanks for asking  try asking about Ivanna's story, skills, projects or how to contact her.";
}

const ChatWidget: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>(() => [
    { id: 'bot-1', from: 'bot', text: "Hi 🌹 I'm Ivanna. Ask me about my story, skills, projects, or contact info." },
  ]);
  const quickOptions = ['name', 'age', 'skill', 'story', 'projects', 'work', 'contact info'];
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isThinking]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: `u-${Date.now()}`, from: 'user', text };
    setMessages((m) => [...m, userMsg]);
    setInput('');

    // Always use local canned replies (no external API)
    setIsThinking(true);
    setTimeout(() => {
      const reply = generateBotReply(text);
      const botMsg: Message = { id: `b-${Date.now()}`, from: 'bot', text: reply };
      setMessages((m) => [...m, botMsg]);
      setIsThinking(false);
    }, 700 + Math.random() * 600);
  };

  const onSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="w-96 md:w-[36rem] max-w-[95vw] h-[min(80vh,720px)] bg-white/20 backdrop-blur-md border border-white/10 shadow-2xl rounded-xl flex flex-col overflow-hidden">
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
        <div className="flex items-center gap-3">
          <img src="/src/assets/avatar1.jpg" alt="Ivanna" className="h-10 w-10 rounded-full object-cover shadow-sm" />
          <div>
            <div className="text-sm font-semibold">Chat with Ivanna</div>
            <div className="text-xs text-muted-foreground">Ask about projects, skills, contact</div>
          </div>
        </div>
        <div>
          <button onClick={onClose} className="text-xs px-2 py-1 rounded bg-white/10 hover:bg-white/20">Close</button>
        </div>
      </div>

      <div className="flex-1 p-3 overflow-auto space-y-3">
        {messages.map((m) => (
          <div key={m.id} className={m.from === 'user' ? 'flex justify-end' : 'flex justify-start'}>
            <div className={m.from === 'user' ? 'max-w-[80%] bg-primary text-primary-foreground px-3 py-2 rounded-xl rounded-tr-none' : 'max-w-[80%] bg-white/30 px-3 py-2 rounded-xl rounded-tl-none text-foreground'}>
              {m.text}
            </div>
          </div>
        ))}
        {/* Quick options shown only before the user sends a message */}
        {messages.filter((m) => m.from === 'user').length === 0 && (
          <div className="flex flex-wrap gap-2">
            {quickOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => sendMessage(opt)}
                className="text-xs px-2 py-1 rounded-full bg-primary/10 hover:bg-primary/20 text-muted-foreground"
              >
                {opt}
              </button>
            ))}
          </div>
        )}
        {isThinking && (
          <div className="text-left">
            <div className="inline-block px-3 py-2 rounded-lg bg-muted text-foreground">Typing…</div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={onSubmit} className="p-2 border-t border-white/10">
        <div className="flex gap-2 items-center">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 rounded-full border border-white/10 px-3 py-2 text-sm bg-white/10 placeholder:opacity-80 text-foreground"
            placeholder="Ask about Ivanna..."
          />
          <button type="submit" className="rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-primary-foreground shadow">Send</button>
        </div>
      </form>
    </div>
  );
};

export default ChatWidget;
