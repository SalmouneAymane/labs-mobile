# lab-php

## 1. Technical Project Need

PHP projects need to handle exceptional situations clearly, keep classes organized as they grow, and avoid duplicating shared behavior. These practices support code that is easier to maintain and extend.

This lab addresses those needs by introducing error and exception handling, namespaces, and traits through small runnable examples. The examples are standalone learning demonstrations; they are not integrated into a specific application feature. Connect them to a concrete project requirement when that context is available.

## 2. Concepts and Techniques to Learn

- **Error and exception handling:** use `try`, `catch`, and `finally` to handle exceptional situations; understand how a custom exception can report invalid input.
- **Namespaces:** group classes by responsibility, avoid naming conflicts, and import classes with `use`.
- **Traits:** share methods between classes without duplicating code, and understand when a trait is appropriate instead of inheritance.

## 3. Expected Practical Work

Create and run one focused PHP example for each concept. Each example should make the concept observable and explain what the code does and when the technique may be useful:

| Topic | Example | What to observe |
|---|---|---|
| Error and exception handling | Validate an age and handle an invalid value with a custom exception | The exception is caught and the `finally` block runs |
| Namespaces | Use `App\Models\User` and `App\Utils\Formatter` | Classes are organized and used without name conflicts |
| Traits | Share a `Loggable` method between `UserService` and `OrderService` | Both classes reuse the same behavior |

### Quick Start

Requirements: PHP 8.0 or later. The examples were checked with PHP 8.5.12.

From the repository root, enter the lab directory and check PHP:

```bash
cd lab-php
php -v
```

Run a PHP Hello World:

```bash
php -r "echo 'Hello, PHP!', PHP_EOL;"
```

Run each example from the `lab-php` directory:

```bash
php examples/gestion-erreurs/example.php
php examples/namespaces/example.php
php examples/traits/example.php
```

Each example folder contains a README explaining the concept and how to run it. The English presentation outline is available in [presentation.md](./presentation.md).

The AI may suggest relevant improvements—such as an additional exercise or a clearer demonstration—provided they support the lab objectives, match the available project context, and do not imply that standalone examples are integrated into an application.
