import { useEffect, useRef, useState } from "react";
import { sections } from "../../data/sections";
import { stack } from "../../data/stack";
import { projects } from "../../data/projects";
import { profile, contact } from "../../data/profile";

/**
 * A REAL terminal.
 *
 * The old Terminal.jsx was labelled "INTERACTIVE SHELL" while accepting
 * no input — it replayed a scripted five-command loop, and re-ran that
 * loop every time you scrolled past. That was the only genuinely
 * dishonest thing on the site.
 *
 * This takes typed input, and every navigation command actually scrolls
 * the page — which makes it the fastest way to move around the site and
 * gives keyboard users a route the dot-nav never offered. It reads the
 * same data modules as the sections, so its output cannot drift.
 */

const line = (text, tone = "out") => ({ text, tone });

function buildCommands(go) {
  const nav = {};
  sections
    .filter((s) => s.id !== "index")
    .forEach((s) => {
      nav[s.id] = {
        help: `jump to ${s.label.toLowerCase()}`,
        run: () => {
          go(s.id);
          return [line(`→ ${s.label}`)];
        },
      };
    });

  return {
    help: {
      help: "list commands",
      run: (cmds) => [
        line("COMMANDS"),
        ...Object.entries(cmds).map(([name, c]) =>
          line(`  ${name.padEnd(10)} ${c.help}`)
        ),
      ],
    },
    whoami: {
      help: "who is this",
      run: () => [
        line(`${profile.name} — ${profile.role}`),
        line(profile.lede),
        line(`${profile.school} · ${profile.location}`),
      ],
    },
    ...nav,
    stack: {
      help: "tech stack",
      run: () => [
        ...stack.map((g) => line(`${g.group.padEnd(12)} ${g.items.join(", ")}`)),
      ],
    },
    ls: {
      help: "list projects",
      run: () => projects.map((p) => line(`  ${p.num}  ${p.title.padEnd(16)} ${p.tech.join(" · ")}`)),
    },
    cv: {
      help: "contact + links",
      run: () => [
        line(contact.email),
        ...contact.links.filter((l) => l.url).map((l) => line(`${l.label}: ${l.url}`)),
      ],
    },
    clear: { help: "clear the screen", run: () => "CLEAR" },
  };
}

export default function CommandBar() {
  const [history, setHistory] = useState([
    line("Type 'help' for commands.", "dim"),
  ]);
  const [value, setValue] = useState("");
  const scrollRef = useRef(null);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const commands = buildCommands(go);

  const submit = (e) => {
    e.preventDefault();
    const raw = value.trim();
    setValue("");
    if (!raw) return;

    const entry = line(`~ $ ${raw}`, "cmd");
    const cmd = commands[raw.toLowerCase()];

    if (!cmd) {
      setHistory((h) => [
        ...h,
        entry,
        line(`command not found: ${raw} — try 'help'`, "err"),
      ]);
      return;
    }

    const result = cmd.run(commands);
    if (result === "CLEAR") {
      setHistory([]);
      return;
    }
    setHistory((h) => [...h, entry, ...result]);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [history]);

  return (
    <div className="relative border-2 border-rule bg-ink-1">
      <div className="terminal-scanlines" />

      <div className="relative z-20 flex items-center justify-between border-b-2 border-rule px-3 py-2">
        <span className="font-mono text-micro uppercase text-paper-3">
          guest@ravishankar — shell
        </span>
        <span className="font-mono text-micro uppercase text-acc">live</span>
      </div>

      <div
        ref={scrollRef}
        className="relative z-20 h-44 overflow-y-auto px-3 py-3 font-mono text-[12px] leading-relaxed"
      >
        {history.map((l, i) => (
          <div
            key={i}
            className={
              l.tone === "cmd"
                ? "text-paper"
                : l.tone === "err"
                  ? "text-acc"
                  : l.tone === "dim"
                    ? "text-paper-3"
                    : "text-paper-2"
            }
          >
            <span className="whitespace-pre-wrap">{l.text}</span>
          </div>
        ))}
      </div>

      <form
        onSubmit={submit}
        className="relative z-20 flex items-center gap-2 border-t-2 border-rule px-3 py-2"
      >
        <label htmlFor="cmd" className="font-mono text-[12px] text-acc">
          ~ $
        </label>
        <input
          id="cmd"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          spellCheck="false"
          autoComplete="off"
          placeholder="help"
          aria-label="Terminal command input. Type help for a list of commands."
          className="w-full bg-transparent font-mono text-[12px] text-paper outline-none placeholder:text-paper-3"
        />
      </form>
    </div>
  );
}
