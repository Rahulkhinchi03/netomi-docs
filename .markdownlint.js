module.exports = {
  // Enable all rules by default, then selectively disable below
  default: true,

  // MD013 - Line length
  // Disabled: documentation lines are often long, especially in code examples,
  // tables, and URLs. Enforcing 80-char limits creates noise without value.
  MD013: false,

  // MD025 - Single title / single H1
  // Disabled: some reference pages have multiple top-level sections
  // that each warrant an H1 for clarity in long documents.
  MD025: false,

  // MD033 - No inline HTML
  // Disabled: Docusaurus MDX files legitimately use HTML and React components.
  // This rule would fire constantly on valid content.
  MD033: false,

  // MD034 - No bare URLs
  // Disabled: API reference docs intentionally use bare URLs as examples.
  MD034: false,

  // MD041 - First line should be a top-level heading
  // Disabled: all files use YAML frontmatter at the top, not a heading.
  // Markdownlint does not understand frontmatter by default.
  MD041: false,

  // MD060 - Table column style
  // Disabled: our tables use compact style without padded pipe spacing,
  // which is valid markdown and more readable in raw form.
  MD060: false,

  // MD022 - Headings should be surrounded by blank lines
  // Disabled: our docs use tight heading spacing which is valid and readable.
  MD022: false,

  // MD047 - Files should end with a single newline character
  // Disabled: handled by editor settings, not a docs quality concern.
  MD047: false,
};