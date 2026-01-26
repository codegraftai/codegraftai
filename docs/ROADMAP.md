# Roadmap

This document outlines the development roadmap for CodeGraft, following [Semantic Versioning](https://semver.org/).

## v0.1: Foundation (Current)
**Goal:** Establish the data layer for structural analysis.
- [x] Core Project Structure
- [ ] **Tree-sitter Integration**: Implement parsing strategies for TypeScript, Python, and Go.
- [ ] **SurrealDB Schema**: Define the Graph (Node/Edge) and Vector schemas.
- [ ] **AST Ingestion**: Build the pipeline to transform raw ASTs into graph nodes.
- [ ] **CLI**: Basic command-line interface for `scan` and `analyze`.

## v0.2: Observability & Visualization
**Goal:** Provide visibility into the architectural graph.
- [ ] **Graph Visualizer**: A web-based dashboard for exploring the dependency graph.
- [ ] **Vector Search API**: Implement the hybrid retrieval logic.
- [ ] **Jira Connector**: Map issue tracking entities to code modules.
- [ ] **Architectural Drift Metrics**: Calculate and display the `drift_score` for modules.

## v1.0: Active Governance
**Goal:** Compute-driven enforcement on Pull Requests.
- [ ] **CI/CD Integration**: GitHub Actions and GitLab CI runners.
- [ ] **LLM Auditor**: Fully integrated LLM analysis of PR diffs against the graph.
- [ ] **Dynamic Analysis**: Symbolic execution for resolving dynamic imports and references.
- [ ] **Remote State**: Support for persistent, self-hosted SurrealDB instances for team collaboration.

## v1.5: Advanced Features
- [ ] **Cross-Repository Federation**: Linking graphs across multiple microservices.
- [ ] **IDE Extensions**: Language Server Protocol (LSP) implementation for real-time feedback.
- [ ] **Formal Verification**: Z3 integration for proving invariant compliance.
