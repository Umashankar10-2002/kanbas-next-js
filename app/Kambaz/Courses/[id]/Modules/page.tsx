'use client';

import { useState } from "react";
import {
  FaChevronDown, FaChevronRight, FaPlus, FaEllipsisV,
  FaCheckCircle, FaFileAlt, FaRegCalendarAlt, FaRegCircle, FaRocket,
} from "react-icons/fa";

// --- tiny types so TS is happy ---
type Lesson = { id: string; title: string; type: "Page" | "Assignment" | "Quiz" };
type Mod = { id: string; title: string; open: boolean; lessons: Lesson[] };
type DropdownItemProps = { icon: React.ReactNode; text: string };

const RED = "#c1121f";
const GREEN = "#22c55e";
const GREY = "#f3f4f6";

const initialModules: Mod[] = [
  {
    id: "m1",
    title: "Week 1 – Introduction",
    open: true,
    lessons: [
      { id: "l1", title: "Welcome & Syllabus", type: "Page" },
      { id: "l2", title: "Setup & Tools", type: "Assignment" },
    ],
  },
  {
    id: "m2",
    title: "Week 2 – React Basics",
    open: true,
    lessons: [
      { id: "l3", title: "Components & Props", type: "Page" },
      { id: "l4", title: "State & Events", type: "Quiz" },
    ],
  },
];

export default function ModulesPage() {
  const [mods, setMods] = useState<Mod[]>(initialModules);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  // ✅ type the parameter
  const toggleModule = (id: string) =>
    setMods(ms => ms.map(m => (m.id === id ? { ...m, open: !m.open } : m)));

  return (
    <div style={{ display: "grid", gap: 16 }}>
      {/* Top action row */}
      <div style={{ display: "flex", gap: 10, alignItems: "center", justifyContent: "space-between" }}>
        {/* Left buttons (black on grey) */}
        <div style={{ display: "flex", gap: 10 }}>
          <button className="btn" style={{ background: GREY, border: "1px solid #e5e7eb", color: "#111827", padding: "6px 12px" }}>
            Collapse All
          </button>
          <button className="btn" style={{ background: GREY, border: "1px solid #e5e7eb", color: "#111827", padding: "6px 12px" }}>
            View Progress
          </button>
        </div>

        {/* Right controls */}
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <button
              className="btn"
              onClick={() => setDropdownOpen(o => !o)}
              style={{ background: "#fff", border: "1px solid #d1d5db", color: "#111827", padding: "6px 10px",
                       display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              <FaCheckCircle /> Publish All <FaChevronDown style={{ fontSize: 12 }} />
            </button>
            {dropdownOpen && (
              <div
                style={{
                  position: "absolute", right: 0, top: "110%", background: "#fff",
                  boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
                  border: "1px solid #e5e7eb", borderRadius: 6, overflow: "hidden", minWidth: 240, zIndex: 10,
                }}
              >
                <DropdownItem icon={<FaCheckCircle style={{ color: GREEN }} />} text="Publish all modules and items" />
                <DropdownItem icon={<FaRegCircle />} text="Publish modules only" />
                <DropdownItem icon={<FaRegCalendarAlt />} text="Schedule publishes" />
                <DropdownItem icon={<FaRocket style={{ color: RED }} />} text="Publish & notify students" />
              </div>
            )}
          </div>

          <button className="btn" style={{ background: RED, color: "#fff", border: "none", padding: "6px 12px",
                                           display: "inline-flex", alignItems: "center", gap: 8 }}>
            <FaPlus /> Module
          </button>
        </div>
      </div>

      {/* Modules list */}
      <div style={{ display: "grid", gap: 12 }}>
        {mods.map(m => (
          <div key={m.id} style={{ border: "1px solid #e5e7eb", borderRadius: 8, overflow: "hidden" }}>
            <div style={{ background: "#f3f4f6", padding: "10px 12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <button
                  onClick={() => toggleModule(m.id)}
                  style={{ border: "none", background: "transparent", fontSize: 16, display: "inline-flex",
                           alignItems: "center", justifyContent: "center", width: 28, height: 28, cursor: "pointer" }}
                  aria-label={m.open ? "Collapse" : "Expand"}
                >
                  {m.open ? <FaChevronDown /> : <FaChevronRight />}
                </button>
                <strong>{m.title}</strong>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#6b7280" }}>
                <FaPlus />
                <FaEllipsisV />
              </div>
            </div>

            {m.open && (
              <div style={{ display: "grid" }}>
                {m.lessons.map(l => (
                  <div
                    key={l.id}
                    style={{
                      background: "#fff",
                      borderLeft: `4px solid ${GREEN}`,
                      padding: "10px 12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderTop: "1px solid #f3f4f6",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <FaFileAlt style={{ color: "#6b7280" }} />
                      <span>{l.title}</span>
                    </div>
                    <div style={{ color: "#6b7280" }}>
                      <FaEllipsisV />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function DropdownItem({ icon, text }: DropdownItemProps) {
  return (
    <div
      style={{
        display: "flex", alignItems: "center", gap: 10, padding: "10px 12px",
        cursor: "pointer", borderBottom: "1px solid #f3f4f6",
      }}
      onMouseDown={(e) => e.preventDefault()}
    >
      <div style={{ fontSize: 16 }}>{icon}</div>
      <div style={{ fontSize: 14 }}>{text}</div>
    </div>
  );
}
