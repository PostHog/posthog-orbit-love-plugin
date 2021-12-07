# Orbit.love Plugin

This plugin provides an hourly sync of workspace stats from Orbit's [Workspace Stats API](https://docs.orbit.love/reference/get_-workspace-id-reports) into PostHog.

## Installation

1. Open PostHog.
1. Go to the Plugins page from the sidebar.
1. Head to the Repository tab.
1. Search for "orbit" and install the plugin.

## Usage

Workspace stats are sent into your PostHog instance as an `orbit love report` event. 
- Apply a filter on the `report type` event properties specific to a report.
  - Supported report types include: `overview`, `members`, and `activities`.

Refer to the [Workspace Stats API](https://docs.orbit.love/reference/get_-workspace-id-reports) for a full list of properties available in each report.

## Questions?

### [Join our Slack community.](https://join.slack.com/t/posthogusers/shared_invite/enQtOTY0MzU5NjAwMDY3LTc2MWQ0OTZlNjhkODk3ZDI3NDVjMDE1YjgxY2I4ZjI4MzJhZmVmNjJkN2NmMGJmMzc2N2U3Yjc3ZjI5NGFlZDQ)

We're here to help you with anything PostHog!
