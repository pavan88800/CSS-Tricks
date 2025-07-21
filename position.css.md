## 🧠 CSS position summary (your style, corrected)

## Static

Static (default): The element is in the normal document flow; you cannot use top, left, right, bottom, or z-index.

## Extra note:

“z-index only works on positioned elements.”

---

## ✅ Relative

The element stays in the document flow and can be moved using top, left, right, bottom, and z-index.",

## Extra Note:-

relative → stays in flow → keeps space → yes, affects layout.

---

## ✅ Absolute

“The element is removed from the document flow and is positioned to nearest parent (relative, absolute, fixed), or the body if no such parent.”

---

## ✅ Fixed

“The element is removed from the document flow and positioned to the viewport, it stays fixed even when the page is scrolled.”

---

## ✅ Sticky

“Sticky is a hybrid between relative and fixed. The element is positioned relative until a certain scroll point, after which it is fixed.”

## Extra note:

“Sticky does not get removed from document flow — space is preserved.”

---

## 🧠 Does position affect the layout of other elements:

relative & static → stay in flow → affect layout → take up space

absolute & fixed → removed from flow → don’t affect layout → don’t take up space

sticky → starts in flow → takes space; sticks later but keeps space

---

## ✅ If you want, I can write this as a one-liner memory note too:

“Relative and sticky stays in flow → affects layout (keeps space). Absolute/fixed removed → don’t affect layout”
