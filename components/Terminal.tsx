"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * Terminal (macOS-style)
 * Auto-types `show profile` and prints an About Me response line-by-line.
 * Listens for a custom `terminal:run` event to reset and re-run.
 */
export default function Terminal(): JSX.Element {
  const command = "show profile";

  const aboutLines = useMemo(
    () => [
      "Software Engineer with experience building scalable backend systems, real-time applications,",
      "and full-stack products. Skilled in designing APIs, handling concurrency, optimizing",
      "performance, and delivering software used by hundreds of users. Experienced in distributed",
      "systems, real-time communication, and data-driven applications.",
      "",
      "Actively seeking Software Engineer roles focused on backend, systems, and product development.",
      "",
      "🏆 LeetCode yearly badge for solving daily DSA problems.",
    ],
    []
  );

  const [typed, setTyped] = useState<string>("");
  const [stage, setStage] = useState<"typing" | "submitted" | "printing">("typing");
  const [printedLines, setPrintedLines] = useState<string[]>([]);
  const [cursorOn, setCursorOn] = useState<boolean>(true);

  // blink cursor
  useEffect(() => {
    const blink = setInterval(() => setCursorOn((c) => !c), 500);
    return () => clearInterval(blink);
  }, []);

  // typing simulation
  useEffect(() => {
    if (stage !== "typing") return;
    if (typed.length === command.length) {
      const t = setTimeout(() => setStage("submitted"), 400);
      return () => clearTimeout(t);
    }
    const id = setTimeout(() => setTyped(command.slice(0, typed.length + 1)), 70);
    return () => clearTimeout(id);
  }, [typed, command, stage]);

  // after submit -> start printing
  useEffect(() => {
    if (stage !== "submitted") return;
    const start = setTimeout(() => setStage("printing"), 300);
    return () => clearTimeout(start);
  }, [stage]);

  // print lines one-by-one
  useEffect(() => {
    if (stage !== "printing") return;
    if (printedLines.length >= aboutLines.length) return;
    const id = setTimeout(() => {
      setPrintedLines((prev) => [...prev, aboutLines[prev.length]]);
    }, 240);
    return () => clearTimeout(id);
  }, [stage, printedLines.length, aboutLines]);

  // screen reader live region
  const liveRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!liveRef.current) return;
    liveRef.current.textContent = printedLines[printedLines.length - 1] || "";
  }, [printedLines]);

  // ✅ Re-run support (Navbar's "About" triggers this)
  useEffect(() => {
    const rerun = () => {
      setTyped("");
      setPrintedLines([]);
      setStage("typing");
      // optional small delay feels nicer
      // setTimeout(() => setStage("typing"), 50);
    };
    document.addEventListener("terminal:run", rerun);
    return () => document.removeEventListener("terminal:run", rerun);
  }, []);

  return (
    <div id="terminal" className="mx-auto w-full max-w-3xl p-4">
      <div className="rounded-2xl shadow-xl ring-1 ring-black/10 overflow-hidden bg-zinc-900">
        <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
          <div className="ml-3 text-xs text-zinc-300/80 select-none">zsh — 80×24</div>
        </div>

        <div className="font-mono text-sm leading-relaxed text-zinc-100 px-4 py-5 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]">
          <div className="flex flex-wrap items-baseline">
            <span className="text-emerald-400">jaykumar@uwindsor</span>
            <span className="mx-2 text-zinc-500">~</span>
            <span className="text-sky-300">$</span>
            <span className="ml-2 whitespace-pre-wrap break-words">{typed}</span>
            {stage === "typing" && (
              <span
                aria-hidden
                className={`ml-0.5 inline-block h-4 w-2 align-baseline bg-zinc-100 ${
                  cursorOn ? "opacity-100" : "opacity-0"
                }`}
              />
            )}
          </div>

          {stage !== "typing" && (
            <div className="mt-1 text-zinc-400">Executing: {command}</div>
          )}

          <div className="mt-4 space-y-1">
            {printedLines.map((line, i) => (
              <div key={i} className="text-zinc-100">
                {line || "\u00A0"}
              </div>
            ))}

            {stage === "printing" && printedLines.length < aboutLines.length && (
              <div className="inline-block h-4 w-2 bg-zinc-100/70 align-middle" />
            )}

            {stage === "printing" && printedLines.length === aboutLines.length && (
              <div className="mt-3 text-emerald-400">✔ Completed</div>
            )}
          </div>

          <div aria-live="polite" aria-atomic="true" className="sr-only" ref={liveRef} />
        </div>
      </div>

      <div className="mx-1 mt-3 text-xs text-zinc-500" />
    </div>
  );
}
