module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      // 'scope-enum': [
      //   2,
      //   'always',
      //   [
      //     "style", "lint", "review", "uiux", "deps", "build",
      //     "release", "flags", "logs", "security", "perf",
      //     "a11y", "i18n", "typos", "literals", "analytics",
      //     "seo", "linux", "windows", "osx", "android", "ios"
      //   ],
      // ],
      'type-enum': [
        2,
        'always',
        [
          'wip', 'feat', 'fix', 'config', 'refactor', 'revert',
          'chore', 'ci', 'assets', 'test', 'docs', 'init'
        ],
      ],
    },
}