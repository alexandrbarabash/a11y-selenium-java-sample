import { Config } from '@userway/cicd-core';

export default {
    token: process.env.USERWAY_TOKEN,
    organization: 'volodymyr-kulyk-userway-org-igpgx',
    project: 'a11y-selenium-java-sample',
    reportPaths: ['./uw-a11y-reports'],
    server: "https://api.qa.userway.dev",
    override: {
        'main': {
            retention: 'long',
            scope: 'overall',
        },
    }
} satisfies Config;