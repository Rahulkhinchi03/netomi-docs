# Netomi Docs

A minimal but functional developer documentation site built with Docusaurus, deployed to GitHub Pages, with automated quality checks on every pull request.

**Live site:** https://Rahulkhinchi03.github.io/netomi-docs/
**Repository:** https://github.com/Rahulkhinchi03/netomi-docs

---

## Decisions

### Information architecture

The docs are organized into three sections: Getting Started, Guides, and API Reference.

This maps to how developers actually use documentation. Getting Started covers the first 30 minutes — what the product is and how to get a working integration quickly. Guides cover the conceptual layer — how the system works and how to connect it to real infrastructure. API Reference is the lookup layer developers return to repeatedly once they are already building.

The default Docusaurus scaffold ships with tutorial-basics and tutorial-extras folders. These are demos for learning Docusaurus itself, not a structure for a real product. I deleted them and started from the user's first question instead.

### Versioning

I created a 1.0 version snapshot immediately after setting up the initial content. The docs folder now represents unreleased changes (Next) while 1.0 is the stable reference.

This matters for a product with enterprise customers. A customer running an older integration should not be forced to read docs for features they are not on yet. Versioning separates what is stable from what is in progress.

### Quality checks

Four checks run automatically on every pull request:

**Build check** — verifies the site compiles without errors before anything merges. A docs PR that breaks the build is the same as a code PR that breaks the build.

**Markdown lint** — enforces consistent formatting across all docs files. Line length limits and inline HTML rules are disabled because documentation legitimately uses long lines in code examples and tables, and Docusaurus MDX files use React components that would trip those rules constantly.

**Spell check** — catches typos before they reach users. Technical terms like Netomi, webhook, and HMAC are added to the word list so the checker does not flag legitimate vocabulary as errors.

**Link check** — builds the full site and crawls every HTML page for broken links. Broken links in docs are a trust problem. A developer who hits a 404 mid-integration loses confidence in the product.

### Deployment

The deploy workflow runs on every push to main using the peaceiris GitHub Pages action. Node 20 is pinned in CI rather than using the latest available version. This prevents the build from breaking when a new Node major version ships with incompatibilities.

---

## What I would add with more time

A changelog page that documents breaking changes between versions. Right now the version dropdown shows 1.0 and Next but there is no record of what changed between them. For enterprise customers this is the first thing they check before upgrading.

Automated screenshot testing for the UI using something like Percy or Playwright. The quality checks currently validate content and links but do not catch visual regressions.

A contribution guide explaining how internal teams submit doc updates, what the review process looks like, and how to add new content without breaking the structure.

Search. Docusaurus ships with Algolia DocSearch integration. For a docs site with more than a few pages, search is not optional.

---

## Assumptions

The audience is developers and technical integration engineers, not end users or support agents. The language and structure assumes familiarity with REST APIs, JSON, and basic command line usage.

The use case is a real developer-facing docs site for a product like Netomi, not a demo or a personal project. The decisions about versioning, quality checks, and information architecture reflect that.