const styles = `/* Clean, Modern Design with Unified Spacing System */
* {
    box-sizing: border-box;
}

/* Spacing Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px */

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    background: #f8fafc;
    color: #1e293b;
    margin: 0;
    padding: 16px;
    min-height: 100vh;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1;
    scroll-behavior: smooth;
}

/* Focus styles for accessibility */
*:focus {
    outline: 2px solid #16a34a;
    outline-offset: 2px;
}

/* Skip link for screen readers */
.skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: #16a34a;
    color: white;
    padding: 8px 12px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 1000;
}

.skip-link:focus {
    top: 6px;
}

/* Main Layout */
main {
    max-width: 1200px;
    margin: 0 auto;
}

/* AdSense Ad Container - Only takes space when ad is loaded */
.adsbygoogle {
    margin: 24px auto;
    display: block;
    max-width: 728px;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    min-height: 90px;
}

/* Hide ad container when no ad is filled */
.adsbygoogle[data-ad-status="unfilled"] {
    display: none !important;
}

/* Also hide if the ad container has no meaningful content */
.adsbygoogle:empty {
    display: none;
}

/* AdSense compliance - ensure proper spacing */
.adsbygoogle + .container {
    margin-top: 32px;
}

/* Layout flow improvements */
header + .styled-button {
    margin-top: 0;
    margin-bottom: 16px;
}

.styled-button + .adsbygoogle {
    margin-top: 0;
}

/* Header */
header {
    text-align: center;
    padding: 32px;
    background: white;
    border-radius: 12px;
    margin-bottom: 16px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border: 1px solid #e2e8f0;
    position: relative;
    overflow: hidden;
}

header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #16a34a, #22c55e, #16a34a);
    background-size: 200% 100%;
    animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
    0%, 100% { background-position: 200% 0; }
    50% { background-position: -200% 0; }
}

h1 {
    font-size: 3rem;
    font-weight: 700;
    margin: 0 0 8px 0;
    color: #1e293b;
    letter-spacing: -0.025em;
    position: relative;
    z-index: 1;
}

h2 {
    font-size: 1.75rem;
    font-weight: 600;
    margin: 32px 0 16px 0;
    color: #1e293b;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 8px;
}

h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 8px 0;
    color: #374151;
}

p {
    font-size: 1.125rem;
    line-height: 1.7;
    margin-bottom: 16px;
    color: #6b7280;
}

text {
    color: #6b7280;
}

a {
    color: #16a34a;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s ease;
    border-radius: 4px;
    padding: 2px 4px;
}

a:hover {
    color: #15803d;
    background-color: #f0fdf4;
    text-decoration: none;
}

/* Container */
.container {
    background: white;
    border-radius: 12px;
    padding: 32px;
    margin-bottom: 24px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border: 1px solid #e2e8f0;
    position: relative;
}

/* Add subtle content indicators */
.container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #16a34a, #22c55e, #16a34a);
    border-radius: 12px 12px 0 0;
}

/* Button */
.styled-button {
    background: linear-gradient(135deg, #16a34a, #22c55e);
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 6px -1px rgba(22, 163, 74, 0.3), 0 2px 4px -1px rgba(22, 163, 74, 0.2);
    display: block;
    text-align: center;
    margin: 0 auto 16px auto;
    text-decoration: none;
    max-width: 300px;
    position: relative;
    overflow: hidden;
}

.styled-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
}

.styled-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
}

.styled-button:hover::before {
    left: 100%;
}

.styled-button:hover {
    background: linear-gradient(135deg, #15803d, #16a34a);
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(22, 163, 74, 0.4), 0 4px 6px -2px rgba(22, 163, 74, 0.3);
    color: white;
    text-decoration: none;
}

.styled-button:active {
    transform: translateY(-1px);
    box-shadow: 0 4px 6px -1px rgba(22, 163, 74, 0.3), 0 2px 4px -1px rgba(22, 163, 74, 0.2);
}

/* Quote Container */
.quote-container {
    background: white;
    border-radius: 12px;
    padding: 32px;
    margin: 24px auto;
    max-width: 600px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border: 1px solid #e2e8f0;
    position: relative;
    animation: slideIn 0.5s ease-out;
}

.quote-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #16a34a, #22c55e, #16a34a);
    border-radius: 12px 12px 0 0;
}

.quote-content {
    text-align: center;
}

.quote-text {
    font-size: 1.25rem;
    line-height: 1.6;
    color: #1e293b;
    margin-bottom: 16px;
    font-style: italic;
    position: relative;
    white-space: pre-line;
    text-align: left;
    max-width: 100%;
    word-wrap: break-word;
}

.quote-text::before {
    content: '"';
    font-size: 3rem;
    color: #16a34a;
    position: absolute;
    top: -5px;
    left: -25px;
    font-family: serif;
    line-height: 1;
}

.quote-text::after {
    content: '"';
    font-size: 3rem;
    color: #16a34a;
    position: absolute;
    bottom: -25px;
    right: -25px;
    font-family: serif;
    line-height: 1;
}

.quote-movie {
    font-size: 1rem;
    color: #16a34a;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Tables */
table {
    width: 100%;
    border-collapse: collapse;
    margin: 24px 0;
    border: none;
    max-width: 100%;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border: 1px solid #e2e8f0;
    position: relative;
}

table::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #16a34a, transparent);
}

th,
td {
    padding: 12px 16px;
    text-align: left;
    border: none;
}

th {
    background: linear-gradient(135deg, #f8fafc, #f1f5f9);
    color: #374151;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-bottom: 2px solid #16a34a;
    position: relative;
}

td {
    background-color: white;
    color: #1f2937;
    font-size: 0.875rem;
    border-bottom: 1px solid #f3f4f6;
}

tr:nth-child(even) td {
    background-color: #f9fafb;
}

tr:hover td {
    background-color: #f3f4f6;
}

tr:last-child td {
    border-bottom: none;
}

/* Lists */
ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

li {
    margin: 8px 0;
    border-bottom: 1px solid #e2e8f0;
}

li:last-child {
    border-bottom: none;
}

/* Code */
code {
    background: #f1f5f9;
    color: #dc2626;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'JetBrains Mono', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 0.875em;
    border: 1px solid #e2e8f0;
}

pre {
    background: #1f2937;
    color: #f9fafb;
    padding: 20px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 20px 0;
    font-family: 'JetBrains Mono', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 0.875rem;
    line-height: 1.6;
    white-space: pre-wrap;
    word-wrap: break-word;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border: 1px solid #374151;
}

pre code {
    background: none;
    color: inherit;
    padding: 0;
    border: none;
    font-size: inherit;
}

/* Footer */
footer {
    text-align: center;
    margin: 32px 0 20px 0;
    padding: 24px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border: 1px solid #e2e8f0;
    color: #6b7280;
    font-size: 0.875rem;
    position: relative;
}

footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #16a34a, #22c55e);
    border-radius: 0 0 3px 3px;
}

/* Mobile Styles */
@media (max-width: 768px) {
    body {
        padding: 12px;
    }

    header {
        padding: 24px 20px;
        margin-bottom: 16px;
    }

    h1 {
        font-size: 2.25rem;
        margin-bottom: 8px;
    }

    h2 {
        font-size: 1.5rem;
        margin: 24px 0 12px 0;
    }

    p,
    a,
    .styled-button {
        font-size: 1rem;
        margin: 8px 0;
    }

    .container {
        padding: 20px;
        margin-bottom: 16px;
    }

    .styled-button {
        width: 100%;
        max-width: 280px;
        margin: 0 auto 12px auto;
        display: block;
        padding: 12px 24px;
    }

    .quote-container {
        padding: 24px 20px;
        margin: 16px auto;
        max-width: 90%;
    }

    .quote-text {
        font-size: 1.125rem;
    }

    .quote-text::before,
    .quote-text::after {
        font-size: 2rem;
    }

    .quote-text::before {
        top: -2px;
        left: -20px;
    }

    .quote-text::after {
        bottom: -20px;
        right: -20px;
    }

    .adsbygoogle {
        margin: 16px auto;
        max-width: 320px;
        min-height: 50px;
    }

    /* Ensure proper spacing on mobile for AdSense */
    .adsbygoogle + .container {
        margin-top: 24px;
    }

    table {
        width: 100%;
        font-size: 0.875rem;
        margin: 16px 0;
    }

    th {
        font-size: 0.75rem;
    }

    /* Responsive table layout for mobile */
    table,
    thead,
    tbody,
    th,
    td,
    tr {
        display: block;
    }

    thead tr {
        position: absolute;
        top: -9999px;
        left: -9999px;
    }

    tr {
        border: 1px solid #e2e8f0;
        margin-bottom: 8px;
        border-radius: 6px;
        padding: 12px;
        background: white;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    }

    td {
        border: none;
        position: relative;
        padding-left: 50%;
        padding-top: 6px;
        padding-bottom: 6px;
    }

    td:before {
        content: attr(data-label);
        position: absolute;
        left: 12px;
        width: 45%;
        white-space: nowrap;
        font-weight: 600;
        color: #16a34a;
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    footer {
        font-size: 0.875rem;
        margin: 24px 0 16px 0;
        padding: 20px;
    }

    pre {
        font-size: 0.75rem;
        padding: 16px;
        overflow-x: auto;
    }
}

/* Tablet Styles */
@media (max-width: 1024px) and (min-width: 769px) {
    .container {
        max-width: 90%;
        padding: 28px;
    }

    h1 {
        font-size: 2.75rem;
    }

    .adsbygoogle {
        max-width: 600px;
    }
}

/* Large Desktop Styles */
@media (min-width: 1200px) {
    .container {
        max-width: 1000px;
        padding: 36px;
    }

    .adsbygoogle {
        max-width: 728px;
    }
}`;

export default styles