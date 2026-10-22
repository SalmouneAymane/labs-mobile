---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  section {
    background-color: #0f172a;
    color: #f8fafc;
    font-family: 'Inter', system-ui, sans-serif;
    padding: 40px 60px;
  }
  h1, h2, h3 {
    font-family: 'Inter', system-ui, sans-serif;
    font-weight: 600;
    letter-spacing: -0.02em;
  }
  h1 {
    color: #38bdf8;
    font-size: 1.8em;
  }
  h2 {
    color: #38bdf8;
    font-size: 1.3em;
  }
  h3 {
    color: #7dd3fc;
    font-size: 1.05em;
  }
  section.light {
    background-color: #f8fafc;
    color: #0f172a;
  }
  section.light h1, section.light h2, section.light h3 {
    color: #0284c7;
  }
  pre, code {
    background-color: #1e293b;
    color: #e2e8f0;
    border-radius: 6px;
    font-family: 'Fira Code', 'Consolas', monospace;
  }
  section.light pre, section.light code {
    background-color: #e2e8f0;
    color: #0f172a;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.78em;
    line-height: 1.35;
  }
  th {
    background-color: #1e293b;
    color: #f8fafc;
    font-weight: 600;
    padding: 8px 10px;
    text-align: left;
    vertical-align: top;
  }
  td {
    background-color: #172033;
    color: #f8fafc;
    padding: 8px 10px;
    border-bottom: 1px solid #475569;
    vertical-align: top;
  }
  section.light th {
    background-color: #e0f2fe;
    color: #0f172a;
  }
  section.light td {
    background-color: #ffffff;
    color: #0f172a;
  }
  section.light tbody tr:nth-child(even) td {
    background-color: #f1f5f9;
  }
  section.light td {
    border-bottom: 1px solid #cbd5e1;
  }
---

# JavaScript Errors

---
<!-- _class: light -->

## Lab Plan

1. Introduction
2. Problems Encountered
3. Solutions Implemented

---

## 1. Introduction

- **Purpose & scope:** Recognize common JavaScript errors, understand their causes, and practice fixing them.
- **Objectives:** distinguish syntax, reference, type, range, and asynchronous errors; read useful error details; handle failures deliberately.
- **Key concepts:** `Error`, `try...catch`, `throw`, promises, `async` / `await`, input validation, stack traces.

---
<!-- _class: light -->

## 2. Problems Encountered

- This is a teaching lab, not a report of incidents from a specific project. The examples are intentionally constructed to demonstrate common mistakes.
- **No blocking technical problems encountered during implementation.**
- An error message helps locate a failure, but the message alone does not explain the correct behavior the program should have.

---

## 3. Solutions Implemented

- Identify whether the failure happens while parsing code, during execution, or asynchronously.
- Read the error name, message, and stack trace; inspect the values at the failing line.
- Validate assumptions about inputs and return values before using them.
- Catch errors where the program can respond meaningfully; avoid hiding errors with empty `catch` blocks.

---
<!-- _class: light -->

## Common error types

| Error | Typical cause | First check |
|:---|:---|:---|
| `SyntaxError` | Invalid JavaScript grammar or invalid JSON text | Find the reported token and surrounding syntax |
| `ReferenceError` | Using a name that is not declared in the current scope | Check spelling, declaration, and scope |
| `TypeError` | Using a value in an unsupported way, such as reading a property from `null` | Inspect the value and expected type |
| `RangeError` | A number or argument is outside its permitted range | Check the API's valid bounds |
| Rejected Promise | An asynchronous operation failed | Handle rejection with `await` / `try...catch` or `.catch()` |

Exact wording and stack traces may differ by JavaScript engine.

---

## SyntaxError: code cannot be parsed

The parser rejects invalid syntax before that code can run. To demonstrate it safely, create the invalid source dynamically:

```javascript
try {
  new Function("const total = ;");
} catch (error) {
  console.log(error.name); // SyntaxError
}

const calculateTotal = new Function("return 2 + 3;");
console.log(calculateTotal()); // 5
```

For JSON input, `JSON.parse()` can also throw a `SyntaxError`; catch it when invalid input is expected.

---
<!-- _class: light -->

## ReferenceError: a name cannot be found

A spelling mistake or a variable outside its scope can cause a `ReferenceError`:

```javascript
function showUser(user) {
  return usern.name;
}

try {
  console.log(showUser({ name: "Mina" }));
} catch (error) {
  console.log(error.name); // ReferenceError
}
```

**Fix:** check the identifier and make sure it is declared where it is used. Here, `usern` should be `user`.

---

## TypeError: a value is used the wrong way

Trying to read a property from `null` causes a `TypeError`:

```javascript
function unsafeDisplayName(user) {
  return user.name;
}

try {
  unsafeDisplayName(null);
} catch (error) {
  console.log(error.name); // TypeError
}

function getDisplayName(user) {
  if (user === null || user === undefined) {
    return "Guest";
  }

  return user.name ?? "Guest";
}

console.log(getDisplayName(null)); // Guest
console.log(getDisplayName({ name: "Mina" })); // Mina
```

Check the value before using its properties or calling it as a function.

---
<!-- _class: light -->

## RangeError and invalid numbers

`RangeError` means a value is outside an API's allowed range. For example, `toPrecision()` accepts precision from 1 to 100:

```javascript
try {
  console.log((12.345).toPrecision(101));
} catch (error) {
  console.log(error.name); // RangeError
}

console.log((12.345).toPrecision(3)); // 12.3
```

Invalid numeric text may instead produce `NaN`, which is a value, not an exception:

```javascript
const amount = Number("not a number");
console.log(Number.isNaN(amount)); // true
```

---

## Asynchronous errors: handle rejections

A rejected Promise is not caught by a `try` block unless it is awaited inside that block:

```javascript
async function loadProfile() {
  throw new Error("Profile unavailable");
}

async function main() {
  try {
    await loadProfile();
  } catch (error) {
    console.error(`${error.name}: ${error.message}`);
  }
}

main();
```

For a Promise chain, attach a rejection handler with `.catch()`.

---
<!-- _class: light -->

## Debug systematically

1. Reproduce the problem with the smallest useful input.
2. Read the error **name**, **message**, and **stack trace**.
3. Go to the first relevant line in your own code.
4. Inspect the value, type, and scope of the variables involved.
5. Fix the underlying assumption, then test both normal and edge cases.

`console.log()` can help inspect values; browser DevTools and Node.js debugger tools can pause execution and inspect scope.

---

## Avoid hiding the real problem

```javascript
async function saveProfile(profile) {
  if (!profile.name) {
    throw new Error("Name is required");
  }
  return `Saved ${profile.name}`;
}

async function main() {
  try {
    const result = await saveProfile({});
    console.log(result);
  } catch (error) {
    console.error("Could not save profile:", error.message);
  }
}

main();
```

- Catch errors where you can recover, explain the failure, or add useful context.
- Do not silently ignore an error with an empty `catch`.
- Do not show internal stack traces as user-facing messages in a production application.

---
<!-- _class: light -->

## Practice: diagnose and repair

For each example, identify the error category and propose a fix:

1. A function reads `customer.adress.city`, but the property is named `address`.
2. A function receives `null` and tries to read `user.name`.
3. A number is passed to a method with a documented maximum.
4. An `async` function rejects, but its caller never handles the result.
5. `Number(input)` returns `NaN` for text entered in a form.

Explain how you would test the fix, including one edge case.

---

## References

- [MDN: Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [MDN: `try...catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
- [MDN: `Promise.prototype.catch()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)

---
<!-- _class: light -->

## Summary & Verification Matrix

| Objective | Status | Evidence |
|:---|:---:|:---|
| Recognize common JavaScript errors | Covered | Error-type comparison table |
| Demonstrate causes and fixes | Covered | Runnable examples for syntax, reference, type, range, and async failures |
| Practice debugging and validation | Practice | Diagnosis exercise and checklist |
