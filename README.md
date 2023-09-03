# React + TypeScript + Vite

# Search system

## Frontend codebase for search system project

<p><strong>Search system Overview</strong></p>

<ol>
  <li>Sends a user request to Google Search.</li>
  <li>Analyzes the response and, if the first 10 search results contain a link to Wikipedia, parses the text of the article (first paragraph) and displays it along with an associated picture as a search result.</li>
  <li>If there are no links to Wikipedia in the search results, it simply displays the search results.</li>
  <li>To simulate a slow service, the backend introduces a 5-second delay before providing results.</li>
  <li>In the case of a request that is already being processed, it doesn't initiate a second request. Instead, it waits for the first request to complete and then returns the result.</li>
</ol>

At first setup (BE)[https://github.com/andrii-bassarab/serch-system-backend]

### Install packeges

```bash
  pnpm i
```

### Run app

```bash
  pnpm run dev
```