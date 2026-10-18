# Prompt Log — Isla Marinduque

> **Documentation rule:** This file is a template. Replace every bracketed placeholder with the exact prompt, actual GitHub Copilot output/reference, and observations from your own experiment. Do not invent Copilot results or claim a test passed until you perform it.

## Task 1 — Sector Selection

**Sector:** Tourism & Cultural Innovation

**Local Challenge:** Visitors may need an engaging and accessible starting point for discovering Marinduque's nature, heritage, and community-based experiences.

**Target Users:** Local and prospective visitors, students, and community tourism advocates.

**Proposed Project:** Isla Marinduque — a responsive single-page tourism and culture discovery site.

**Key Features:** Destination/culture/experience sections; interactive trip checklist with progress/reset; responsive mobile navigation.

## Task 2 — Zero-Shot Prompting

**Objective:** Observe what Copilot generates from a basic prompt without examples.

**Exact Prompt:**
> [Paste the exact zero-shot prompt submitted to GitHub Copilot.]

**Actual Copilot Output:**
[Paste the relevant actual response or reference a saved file under `outputs/`, e.g. `outputs/task2-zero-shot.html`.]

**What Worked:**
[Record what the actual output did well.]

**What Needs Improvement:**
[Record omissions or defects you observed.]

**Next Action / Verification:**
[State the next change and how you will test it.]

## Task 3 — Structured Prompt Improvement

**Objective:** Improve relevance using Role, Task, Context, Constraints, Expected Output, and Acceptance Criteria.

**Suggested prompt to adapt and submit:**
> Act as a frontend web developer. Create a responsive single-page Tourism & Cultural Innovation website called “Isla Marinduque” for visitors and students exploring Marinduque, Philippines. Address the challenge that visitors need an engaging starting point for discovering local nature, living cultural heritage, and community-minded experiences. Use semantic HTML, CSS, and vanilla JavaScript only. Include three core features: destination/culture/experience sections, an interactive trip checklist with progress and reset, and a mobile navigation menu. Use clearly identified demonstration content, no backend, database, authentication, external frameworks, or live APIs. Return complete `index.html`, `styles.css`, and `script.js`. The page must work on mobile and desktop, use accessible labels and keyboard-focus styles, and the checklist must update its progress accurately. Keep the scope to one page.

**Actual Copilot Output:**
[Save actual generated source in `outputs/` and reference it here.]

**Comparison with Zero-Shot:**
1. [Difference observed]
2. [Difference observed]

**Next Action / Verification:**
[Test navigation, checklist, semantics, and responsive layout.]

## Task 4A — Few-Shot Prompting

**Objective:** Check whether examples improve consistency of experience data.

**Suggested prompt to adapt and submit:**
> Add tourism experience cards using this format:
>
> Example 1:  
> Name: Heritage trail  
> Category: Culture  
> Description: Explore historic streets and learn how local stories shape the island today.
>
> Example 2:  
> Name: Meet the makers  
> Category: Community  
> Description: Look for community-led crafts and food experiences that support local livelihoods.
>
> Generate three additional demonstration experiences in the same format and render them as semantic cards. Do not invent exact schedules, prices, or claims about provider availability.

**Actual Copilot Output:**
[Paste actual response or reference saved output.]

**Observation:**
[Did the output follow the example format consistently? What required correction?]

**Next Action / Verification:**
[Check consistency, content clarity, and mobile card layout.]

## Task 4B — Role Assignment

**Objective:** Ask for a specialized accessibility review without expanding scope.

**Suggested prompt to adapt and submit:**
> Act as a frontend accessibility reviewer. Examine my Isla Marinduque single-page website. Identify issues involving semantic HTML, keyboard navigation, form/control labels, focus visibility, color contrast, responsive layout, and checklist feedback. Give the two highest-priority findings with a concise reason and a targeted correction. Do not redesign the project or add features. Base findings on the code I provide.

**Actual Copilot Output:**
[Paste the actual Copilot review.]

**Observation:**
[Record which concerns were relevant after checking the source.]

**Next Action / Verification:**
[Apply one targeted correction and test it.]

## Task 5 — Structured Analysis and Refinement

**Objective:** Diagnose and verify a specific implementation issue.

**Suggested prompt to adapt and submit:**
> Review the attached/current code for my Isla Marinduque website against these requirements: the mobile menu opens and closes with an accurate `aria-expanded` value; each checklist checkbox can be operated with keyboard and label; the progress count and bar update when items change; reset clears all items; and the layout remains usable at narrow viewport widths. Identify the two most important issues that are actually present in the provided code. For each, cite the relevant selector/function or code snippet, recommend the smallest correction, and give a manual verification procedure. Do not claim a fix is verified until I run the test.

**Actual Copilot Output:**
[Paste the actual response.]

**Issue selected:**
[Name the issue you chose.]

**Correction applied:**
[Describe or reference the code change.]

**Verification procedure and result:**
[Record browser/viewport, steps, expected result, actual result, and pass/fail.]

## Task 6 — Final Comparison

| Technique | Actual observation |
|---|---|
| Zero-shot | [What Copilot assumed or omitted] |
| Structured prompt | [What improved after adding context and constraints] |
| Few-shot | [What became more consistent] |
| Role assignment | [Which specialist concerns were identified and verified] |
| Structured analysis/refinement | [What correction was tested and the actual result] |

## Final Reflection

[Write a short reflection based on your actual experiments. Explain which prompting technique helped most, what limitations you found, and why generated code needed inspection and testing.]

## Suggested verification checklist

- [ ] Open `index.html` in a desktop browser.
- [ ] Test all navigation links.
- [ ] At mobile width, open and close the menu and check `aria-expanded`.
- [ ] Toggle each trip checklist item using both its label and keyboard.
- [ ] Confirm progress count and bar match the number checked.
- [ ] Reset the checklist and confirm all items clear.
- [ ] Inspect responsive layout at narrow and wide widths.
- [ ] Check browser console for errors.
- [ ] Replace stock images and verify local factual details before public use.
