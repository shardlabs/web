---
title: "Introducing Shard"
date: "2025-10-21"
description: "Introducing Shard"
---

Shard is a new kind of data workspace — part terminal, part dashboard, part playground. It pairs managed Postgres databases (one per Shard) with a clean, modern UI for building tables, automations, and simple charts without wiring up a full app.

We’re launching Shard in Early Access. During this period, Shard is completely free to use. We’re moving fast, listening closely, and shaping the roadmap with your feedback.

## What is Shard?

At its core, Shard is a lightweight database workspace that makes it easy to:

- Create and manage data in Postgres tables with a spreadsheet-like interface
- Automate workflows with event-driven rules that respond to inserts and updates
- Visualize trends with simple line charts
- Drop down to full SQL whenever you need precision and power

If you’ve ever wished you could get a “just right” stack for internal tools, data entry, and quick automations — without provisioning servers or writing boilerplate — Shard is for you.

## What you can do today

You can use Shard right now to build practical, production-friendly workflows:

- Tables: Create tables, add columns, edit cells inline, paginate through large datasets, and import CSVs. See: [/docs/how-to/tables](/docs/how-to/tables)
- Automations: Run actions when rows are inserted or updated using JSON-logic predicates; send webhooks and more. See: [/docs/how-to/automations](/docs/how-to/automations)
- Charts: Build lightweight line charts to monitor key metrics, with a Live mode for periodic refresh. See: [/docs/how-to/charts](/docs/how-to/charts)
- Export: One-click export of your entire Shard to a Postgres-compatible SQL file. See: [/docs/how-to/export](/docs/how-to/export)

It’s fast, ergonomic, and built for real-world data work.

## Real-world ways to use Shard

Shard shines when you want a database-backed workflow without the overhead of a full app. With Automations today and Forms coming soon, it’s perfect for:

### A modern Microsoft Access alternative

Microsoft Access is fading from the roadmap, but the need hasn’t gone away. Shard is a modern, browser-based alternative for data-entry tools and small internal systems. Examples:

- Orders, inventory, and asset registers
- Issue and ticket trackers for small teams
- Contact lists, vendors, and basic CRM records

Use tables for structure, Automations to trigger webhooks or create related rows, and (soon) Forms to give teammates a friendly data-entry surface.

### Personal tracking and lightweight lists

Manage home inventory, collections, expenses, book logs, or even a basic to-do list. Keep it simple, then layer on Automations to, for example, ping a webhook when an item’s status changes or a due date passes.

### Create a waitlist in minutes

Create a table for signups, add a few columns (name, email, source, notes), and wire an Automation to send a webhook to your email service or CRM when a new row is added. Forms will make capture even more seamless.

### Questionnaires and surveys

Spin up a schema for responses, capture entries (via CSV import now; Forms soon), and analyze with a simple chart. Automate notifications or routing when certain answers match your predicate.

### Internal enterprise forms without the heavy lift

Sometimes you don’t need a bespoke app — you need a secure place to store data and a clean form to collect it. Shard gives you the database, structure, and automation hooks to get it done quickly.

## What’s coming next

We’re shipping quickly. Here’s what’s on the near-term roadmap:

- Forms (in progress): The critical piece for data capture and workflow onboarding
- Formatting: Better display and formatting controls for columns and cells
- Share tables: Simple, safe ways to share data with teammates
- Live feeds: Stream fast-moving data (e.g., stock tickers, aircraft positions) into charts and tables

If a capability matters to your workflow, tell us — we’re prioritizing based on real use cases.

## Early Access — free while we build together

Shard is in Early Access and completely free to use during this period. Create a Shard, add tables, wire up automations, and start exploring. We’ll make it easy to export your data at any time.

## Tell us what to build next

Your feedback will shape Shard. Share ideas, report issues, and tell us about your workflows in GitHub Discussions:

- https://github.com/shardlabs/web/discussions

Thanks for reading — and welcome to Shard.

