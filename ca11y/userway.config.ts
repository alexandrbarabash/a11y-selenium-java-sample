import { Config } from '@userway/cicd-core';

export default {
    token: process.env.USERWAY_TOKEN,
    organization: 'maksym-panov-userway-org',
    project: 'a11y-selenium-java-sample',
    reportPaths: ['./uw-a11y-reports'],
    server: "https://api.userway.org",
    override: {
        'main': {
            retention: 'long',
            scope: 'overall',
        },
    }
} satisfies Config;