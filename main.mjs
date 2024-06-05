import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';

// Function to extract and process the data
async function extractMiles() {
  // URL of the page containing the data-react-props
  const url = 'https://www.strava.com/athletes/134699348';

  // Fetch the HTML content of the page
  const response = await fetch(url);
  const html = await response.text();

  // Parse the HTML content
  const dom = new JSDOM(html);
  const document = dom.window.document;

  // Query the element using a more stable selector
  const element = document.querySelector('div');

  if (!element) {
    console.error('Element not found with the specified selector.');
    return;
  }

  // Log the content of the selected element
  const value = element.textContent;
  console.log('Extracted value:', value);
}

// Run the extraction function
extractMiles().catch(error => console.error('Error:', error));
