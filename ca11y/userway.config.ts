import { Config } from '@userway/cicd-core';

export default {
    token: process.env.USERWAY_TOKEN,
    organization: 'alex-userway-org',
    project: 'a11y-selenium-java-sample',
    reportPaths: ['./ca11y/uw-a11y-reports'],
    server: "https://api.qa.userway.dev",
    override: {
        'main': {
            retention: 'long',
            scope: 'overall',
        },
    }
} satisfies Config;
