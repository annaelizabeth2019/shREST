const styles = `/* Global Styles */
body {
    font-family: 'Arial', sans-serif;
    background-color: #3E7A30;
    color: #fff;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-image: url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc4.wallpaperflare.com%2Fwallpaper%2F671%2F413%2F121%2Fshrek-wallpaper-preview.jpg&f=1&nofb=1&ipt=7ed7ad88c49fdbb2a4ac9b5615a076767dc0c29485dd02a30617537270c58cc7&ipo=images');
    background-size: cover;
    background-position: center;
}

footer {
    text-align: center;
    margin: 0;
}

h1 {
    font-family: 'Georgia', serif;
    font-size: 3rem;
    margin: 0 20px;
    text-shadow: 2px 2px 4px #000;
}

p {
    font-size: 1.3rem;
    line-height: 1.7;
    margin-bottom: 20px;
    color: #C4D300;
    /* Slightly darker yellow for better contrast */
    text-shadow: 1px 1px 2px #000;
}

text {
    color: #C4D300;
}

a {
    color: #C4D300;
    text-decoration: none;
    font-weight: bold;
    line-height: 1.7;
}

a:hover {
    text-decoration: underline;
    color: #9ACD32;
}

.container {
    width: 100%;
    max-width: 80%;
    padding: 20px;
    background-color: rgba(85, 107, 47, .8);
    border-radius: 15px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    margin: 20px;
}

.header-container {
    text-align: center;
    margin-top: 60px;
    color: #556b2f;
}

.header-container h1 {
    font-size: 3rem;
    margin: 0;
    text-shadow: 2px 2px 4px #000;
}

.header-container p {
    font-size: 1.2rem;
    line-height: 1.5;
    color: #F5DEB3;
}

footer {
    margin-top: 40px;
    font-size: 1rem;
    color: #C4D300;
    /* Consistent footer text color */
}

.styled-button {
    background-color: rgba(107, 142, 35, .8);
    /* Darker ogre green */
    color: #3E7A30;
    /* Darker text for contrast */
    padding: 15px 30px;
    border: none;
    border-radius: 12px;
    font-size: 1.6rem;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
    box-shadow: 0 0 20px rgba(107, 142, 35, .8), 0 0 30px rgba(107, 142, 35, .6);
    /* Glowing effect */
}

.styled-button:hover {
    background-color: rgba(107, 142, 35, 1);
    /* Slightly lighter gold on hover */
    transform: scale(1.05);
}

/* Table Styles */
table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    border: none;
    max-width: 100%;
}

th,
td {
    border: 1px solid #556B2F;
    padding: 12px;
    text-align: left;
}

th {
    background-color: rgba(107, 142, 35, 0.8);
    color: #FFB700;
    font-size: 1.2rem;
}

td {
    background-color: rgba(255, 255, 255, 0.2);
    color: #F5DEB3;
    /* Wheat-like color for better readability */
    font-size: 1rem;
}

tr:nth-child(even) {
    background-color: rgba(107, 142, 35, 0.5);
}

tr:hover {
    background-color: rgba(107, 142, 35, 0.3);
}

/* Remove bullet points from lists */
ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

pre {
    white-space: pre-wrap;
    /* css-3 */
    white-space: -moz-pre-wrap;
    /* Mozilla, since 1999 */
    white-space: -pre-wrap;
    /* Opera 4-6 */
    white-space: -o-pre-wrap;
    /* Opera 7 */
    word-wrap: break-word;
    /* Internet Explorer 5.5+ */
}

/* Mobile Styles */
@media (max-width: 768px) {
    body {
        padding: 10px;
        /* Add padding to the body for mobile */
    }

    .header-container {
        text-align: center;
        /* Center align text in the header */
        margin: 10px 0;
        /* Adjust margin for mobile */
    }

    h1 {
        font-size: 2.5rem;
        /* Smaller font for smaller screens */
    }

    p,
    a,
    .styled-button {
        font-size: 1rem;
        /* Smaller font for paragraphs and links */
        margin: 10px 0;
        /* Add vertical margin for spacing */
    }

    .container {
        width: 100%;
        /* Ensure container uses full width */
        padding: 10px;
        /* Add padding for mobile */
        margin: 0;
        /* Remove margins for mobile */
    }

    table {
        width: 100%;
        /* Ensure tables use full width */
        font-size: 0.9rem;
        /* Smaller font size for table */
    }

    td {
        /* Behave  like a "row" */
        position: relative;
    }

    /* Add additional styling for the footer */
    footer {
        font-size: 0.9rem;
        /* Smaller footer font size */
        text-align: center;
        /* Center align footer text */
        margin: 20px 0;
        /* Add margin for spacing */
    }

    ul {
        padding-left: 20px;
        /* Indent list items */
        text-align: left;
        /* Align text to the left for better readability */
    }

    /* Force table to not be like tables anymore */
    table,
    thead,
    tbody,
    th,
    td,
    tr {
        display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
        position: absolute;
        top: -9999px;
        left: -9999px;
    }

    td:before {
        /* Now like a table header */
        position: absolute;
        /* Top/left values mimic padding */
        top: 0;
        left: 6px;
        width: 45%;
        white-space: nowrap;
    }
}`;

export default styles