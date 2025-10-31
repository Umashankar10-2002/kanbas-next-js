'use client';

import { useParams } from 'next/navigation';

export default function CourseHome() {
  const { id } = useParams();

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 300px', // 3rd col = Modules, 4th = Course Status
        gap: 20,
        width: '100%',
      }}
    >
      {/* 3rd Column: Modules */}
      <section>
        <h2 style={{ marginBottom: 12 }}>Modules</h2>

        <div style={{ display: 'grid', gap: 12 }}>
          {/* Module 1 */}
          <div
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: 8,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                background: '#f3f4f6',
                padding: '10px 12px',
                fontWeight: 600,
              }}
            >
              Week 1 – Introduction
            </div>
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '10px 12px',
                  borderLeft: '4px solid #22c55e',
                  borderTop: '1px solid #f3f4f6',
                }}
              >
                <span>Lesson 1: Welcome & Syllabus</span>
                <span style={{ color: '#6b7280' }}>⋮</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '10px 12px',
                  borderLeft: '4px solid #22c55e',
                  borderTop: '1px solid #f3f4f6',
                }}
              >
                <span>Lesson 2: Setup & Tools</span>
                <span style={{ color: '#6b7280' }}>⋮</span>
              </div>
            </div>
          </div>

          {/* Module 2 */}
          <div
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: 8,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                background: '#f3f4f6',
                padding: '10px 12px',
                fontWeight: 600,
              }}
            >
              Week 2 – Basics
            </div>
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '10px 12px',
                  borderLeft: '4px solid #22c55e',
                  borderTop: '1px solid #f3f4f6',
                }}
              >
                <span>Lesson 1: Components & Props</span>
                <span style={{ color: '#6b7280' }}>⋮</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '10px 12px',
                  borderLeft: '4px solid #22c55e',
                  borderTop: '1px solid #f3f4f6',
                }}
              >
                <span>Lesson 2: State & Events</span>
                <span style={{ color: '#6b7280' }}>⋮</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4th Column: Course Status */}
      <aside
        style={{
          background: '#fff',
          border: '1px solid #ddd',
          borderRadius: 8,
          padding: 16,
          minWidth: 280,
          height: 'fit-content',
        }}
      >
        <h3 style={{ fontWeight: 700, marginBottom: 12 }}>Course Status</h3>
        <div style={{ display: 'grid', gap: 10 }}>
          <button
            style={{
              background: '#c1121f',
              color: '#fff',
              border: 'none',
              padding: '8px 12px',
              borderRadius: 4,
            }}
          >
            Publish
          </button>
          <button
            style={{
              background: '#e5e7eb',
              color: '#111827',
              border: 'none',
              padding: '8px 12px',
              borderRadius: 4,
            }}
          >
            Import
          </button>
          <button
            style={{
              background: '#e5e7eb',
              color: '#111827',
              border: 'none',
              padding: '8px 12px',
              borderRadius: 4,
            }}
          >
            Settings
          </button>
        </div>

        <hr style={{ margin: '16px 0' }} />

        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 8 }}>
          <li>View Course Stream</li>
          <li>View Course Calendar</li>
          <li>Announcements</li>
        </ul>
      </aside>
    </div>
  );
}
