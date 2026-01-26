# Contributing to CodeGraft

Thank you for your interest in contributing to CodeGraft. This document details the process for contributing to the project, setting up your development environment, and submitting pull requests.

## Code of Conduct
We are committed to providing a friendly, safe, and welcoming environment for all, regardless of level of experience, gender identity and expression, sexual orientation, disability, personal appearance, body size, race, ethnicity, age, religion, nationality, or other similar characteristic.

## Development Setup

### Prerequisites
- Node.js 18+
- Rust 1.70+ (for core extensions)
- SurrealDB 1.0+
- Git

### Installation

1.  **Fork and Clone**
    ```bash
    git clone https://github.com/YOUR_USERNAME/codegraft.git
    cd codegraft
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Start Local Database**
    ```bash
    # Start an in-memory instance for testing
    surreal start --log debug --user root --pass root memory
    ```

4.  **Run Tests**
    ```bash
    npm test
    ```

## Project Structure
-   `src/parser`: Tree-sitter integration modules.
-   `src/graph`: Database schema and query builders.
-   `src/vector`: Embedding generation and search logic.
-   `src/llm`: Interfaces for LLM providers.
-   `tests/`: Integration and unit tests.

## Submission Guidelines

### Pull Requests
1.  **Branching**: Create a feature branch from `main` (`git checkout -b feature/my-feature`).
2.  **Commits**: Use [Conventional Commits](https://www.conventionalcommits.org/) (e.g., `feat: add python parser support`).
3.  **Testing**: Ensure all new functionality is covered by unit tests. Run `npm test` before submitting.
4.  **Documentation**: Update relevant documentation in `docs/` if APIs or behaviors change.

### Issue Reporting
Please use the GitHub Issue Tracker to report bugs or request features. When reporting a bug, include:
-   Version of CodeGraft.
-   Minimal reproduction steps.
-   Expected vs. Actual behavior.
-   Logs or error traces.
