export async function runEveryMinute ({ config }) {
    for (const workspaceId of config.workspaceId.split(',')) {
        const apiUrl = `https://app.orbit.love/api/v1/${workspaceId}/reports`
        let res = await fetch(apiUrl, { headers: { 'Authorization': `Bearer ${config.orbitApiKey}` } })
        res = await res.json()
        const attributes = res.data?.attributes

        const sharedReportProps = {
            workspace: attributes['workspace_id'],
            timeframe_start_date: attributes.timeframe.start_date,
            timeframe_end_date: attributes.timeframe.end_date,
            timeframe_start_date_last: attributes.timeframe.start_date_last,
            timeframe_end_date_last: attributes.timeframe.end_date_last,
        }

        const SUPPORTED_REPORTS = ['overview', 'members', 'activities']

        SUPPORTED_REPORTS.forEach((report) => {
            posthog.capture('orbit love report', {
                'report type': report,
                ...attributes[report],
                ...sharedReportProps
            })
        })
    }

}