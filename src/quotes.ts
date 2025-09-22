import { getRandomQuote, getRandomMovieForQuote } from "./movies";

// Quote functionality - JavaScript string for serving
const quoteHandler = `document.addEventListener('DOMContentLoaded', function() {
    const quoteButton = document.getElementById('quote-button');
    const quoteContainer = document.getElementById('quote-container');
    const quoteText = document.getElementById('quote-text');
    const quoteMovie = document.getElementById('quote-movie');
    
    quoteButton.addEventListener('click', async function() {
        try {
            // Show loading state
            quoteButton.textContent = 'Loading...';
            quoteButton.disabled = true;
            
            // Fetch random quote
            const response = await fetch('/quotes/random/to_text');
            const data = await response.json();
            
            // Display the quote
            quoteText.innerHTML = data.text;
            quoteMovie.textContent = data.character;
            
            // Show the quote container with animation
            quoteContainer.style.display = 'block';
            quoteContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
        } catch (error) {
            console.error('Error fetching quote:', error);
            quoteText.textContent = "Sorry, couldn't fetch a quote right now.";
            quoteMovie.textContent = 'Error';
            quoteContainer.style.display = 'block';
        } finally {
            // Reset button
            quoteButton.textContent = 'RANDOM MOVIE QUOTE!';
            quoteButton.disabled = false;
        }
    });
});`;

export interface ParsedQuote {
    character: string;
    text: string;
}

export const parseQuoteSpeakers = (quote: string) => {
    const lines = quote.split('\n').filter(line => line.trim());
    const speakers = new Set<string>();
    const dialogueLines: { speaker: string; text: string }[] = [];
    
    lines.forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex > 0) {
            const speaker = line.substring(0, colonIndex).trim();
            const text = line.substring(colonIndex + 1).trim();
            speakers.add(speaker);
            dialogueLines.push({ speaker, text });
        }
    });
    
    return { speakers, dialogueLines };
};

export const formatQuoteDisplay = (
    speakers: Set<string>, 
    dialogueLines: { speaker: string; text: string }[], 
    originalQuote: string
): ParsedQuote => {
    if (speakers.size === 0) {
        // No clear speaker attribution, use the full quote
        return {
            character: 'Unknown',
            text: originalQuote.replace(/\n/g, '<br>')
        };
    } else if (speakers.size === 1) {
        // Single speaker
        const character = Array.from(speakers)[0];
        const text = dialogueLines[0]?.text || originalQuote;
        return {
            character,
            text: text.replace(/\n/g, '<br>')
        };
    } else {
        // Multiple speakers - show all dialogue with speaker names
        const character = `Multiple Characters (${Array.from(speakers).join(', ')})`;
        const formattedDialogue = dialogueLines.map(({ speaker, text }) => 
            `<strong>${speaker}:</strong> ${text}`
        ).join('<br><br>');
        
        return {
            character,
            text: formattedDialogue
        };
    }
};

const getRandomQuoteToText = (): ParsedQuote => {
    const quote = getRandomQuote(getRandomMovieForQuote());
    const { speakers, dialogueLines } = parseQuoteSpeakers(quote);
    return formatQuoteDisplay(speakers, dialogueLines, quote);
};


export { quoteHandler, getRandomQuoteToText };
