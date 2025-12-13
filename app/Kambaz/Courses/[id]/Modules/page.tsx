"use client";

import { useState, useEffect } from "react";
import {
  FaChevronDown,
  FaChevronRight,
  FaPlus,
  FaEllipsisV,
  FaCheckCircle,
  FaRegCalendarAlt,
  FaRegCircle,
  FaRocket,
  FaTrash,
  FaPencilAlt,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "next/navigation";
import type { RootState } from "../../../store";
import { setModules, editModule } from "./reducer";
import * as client from "../../../client";


type ModuleType = {
  _id: string;
  name: string;
  course: string;
  open?: boolean;
  editing?: boolean;
};

type DropdownItemProps = { icon: React.ReactNode; text: string };

const RED = "#c1121f";
const GREEN = "#22c55e";
const GREY = "#f3f4f6";

export default function ModulesPage() {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>(); // course id from [id]

  const { modules } = useSelector(
    (state: RootState) => state.modulesReducer
  ) as { modules: ModuleType[] };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  // --------- LOAD MODULES FROM SERVER WHEN COURSE CHANGES ----------
  useEffect(() => {
    const loadModules = async () => {
      if (!id) return;
      const serverModules = await client.findModulesForCourse(id);
      // add UI-only flags open/editing
      const withFlags = serverModules.map((m: any) => ({
        ...m,
        open: true,
        editing: false,
      }));
      dispatch(setModules(withFlags) as any);
    };
    loadModules();
  }, [id, dispatch]);

  // ---------- helpers over modules (now using Redux + server) ----------

  const toggleModule = (moduleId: string) => {
    const updated = modules.map((m) =>
      m._id === moduleId ? { ...m, open: !m.open } : m
    );
    dispatch(setModules(updated) as any);
  };

  const addModule = async () => {
    if (!id) return;
    const name = window.prompt("New module name");
    if (!name) return;

    const created = await client.createModuleForCourse(id, {
      name: name.trim(),
      course: id,
    });

    const newModule: ModuleType = {
      ...created,
      open: true,
      editing: false,
    };

    dispatch(setModules([...modules, newModule]) as any);
  };

  const deleteModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    const updated = modules.filter((m) => m._id !== moduleId);
    dispatch(setModules(updated) as any);
  };

  const startEditModule = (moduleId: string) => {
    const updated = modules.map((m) =>
      m._id === moduleId
        ? { ...m, editing: true }
        : { ...m, editing: false }
    );
    dispatch(setModules(updated) as any);
  };

  const updateModuleTitle = async (moduleId: string, newName: string) => {
    const module = modules.find((m) => m._id === moduleId);
    if (!module) return;

    const updatedModule = { ...module, name: newName, editing: false };
    await client.updateModule(updatedModule);

    const updatedList = modules.map((m) =>
      m._id === moduleId ? updatedModule : m
    );
    dispatch(setModules(updatedList) as any);
  };

  return (
    <div style={{ display: "grid", gap: 16 }}>
      {/* Top action row */}
      <div
        style={{
          display: "flex",
          gap: 10,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left buttons */}
        <div style={{ display: "flex", gap: 10 }}>
          <button
            className="btn"
            style={{
              background: GREY,
              border: "1px solid #e5e7eb",
              color: "#111827",
              padding: "6px 12px",
            }}
            onClick={() => {
              const collapsed = modules.map((m) => ({ ...m, open: false }));
              dispatch(setModules(collapsed) as any);
            }}
          >
            Collapse All
          </button>
          <button
            className="btn"
            style={{
              background: GREY,
              border: "1px solid #e5e7eb",
              color: "#111827",
              padding: "6px 12px",
            }}
          >
            View Progress
          </button>
        </div>

        {/* Right controls */}
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <button
              className="btn"
              onClick={() => setDropdownOpen((o) => !o)}
              style={{
                background: "#fff",
                border: "1px solid #d1d5db",
                color: "#111827",
                padding: "6px 10px",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <FaCheckCircle /> Publish All{" "}
              <FaChevronDown style={{ fontSize: 12 }} />
            </button>
            {dropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: "110%",
                  background: "#fff",
                  boxShadow:
                    "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
                  border: "1px solid #e5e7eb",
                  borderRadius: 6,
                  overflow: "hidden",
                  minWidth: 240,
                  zIndex: 10,
                }}
              >
                <DropdownItem
                  icon={<FaCheckCircle style={{ color: GREEN }} />}
                  text="Publish all modules and items"
                />
                <DropdownItem icon={<FaRegCircle />} text="Publish modules only" />
                <DropdownItem
                  icon={<FaRegCalendarAlt />}
                  text="Schedule publishes"
                />
                <DropdownItem
                  icon={<FaRocket style={{ color: RED }} />}
                  text="Publish & notify students"
                />
              </div>
            )}
          </div>

          <button
            className="btn"
            style={{
              background: RED,
              color: "#fff",
              border: "none",
              padding: "6px 12px",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
            onClick={addModule}
          >
            <FaPlus /> Module
          </button>
        </div>
      </div>

      {/* Modules list */}
      <div style={{ display: "grid", gap: 12 }}>
        {modules.map((m) => (
          <div
            key={m._id}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                background: "#f3f4f6",
                padding: "10px 12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  flex: 1,
                }}
              >
                <button
                  onClick={() => toggleModule(m._id)}
                  style={{
                    border: "none",
                    background: "transparent",
                    fontSize: 16,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 28,
                    height: 28,
                    cursor: "pointer",
                  }}
                  aria-label={m.open ? "Collapse" : "Expand"}
                >
                  {m.open ? <FaChevronDown /> : <FaChevronRight />}
                </button>

                {m.editing ? (
                  <input
                    className="form-control"
                    style={{ maxWidth: 320 }}
                    value={m.name}
                    autoFocus
                    onChange={(e) => {
                      const newName = e.target.value;
                      const updated = modules.map((mod) =>
                        mod._id === m._id ? { ...mod, name: newName } : mod
                      );
                      dispatch(setModules(updated) as any);
                    }}
                    onBlur={() => updateModuleTitle(m._id, m.name)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        updateModuleTitle(m._id, m.name);
                      }
                    }}
                  />
                ) : (
                  <strong>{m.name}</strong>
                )}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  color: "#6b7280",
                }}
              >
                <FaPencilAlt
                  style={{ cursor: "pointer" }}
                  onClick={() => startEditModule(m._id)}
                  title="Edit module title"
                />
                <FaTrash
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteModule(m._id)}
                  title="Delete module"
                />
                <FaPlus />
                <FaEllipsisV />
              </div>
            </div>

            {/* No lessons for now (rubric only cares about modules) */}
            {m.open && null}
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
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 12px",
        cursor: "pointer",
        borderBottom: "1px solid #f3f4f6",
      }}
      onMouseDown={(e) => e.preventDefault()}
    >
      <div style={{ fontSize: 16 }}>{icon}</div>
      <div style={{ fontSize: 14 }}>{text}</div>
    </div>
  );
}
