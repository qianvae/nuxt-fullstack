/**
 * 官方全部配置： https://prettier.io/docs/en/options.html
 */
module.exports = {
  /** 指定每行代码的最佳长度， 如果超出长度则换行。 默认80 */
  printWidth: 80,
  /** 每个制表符占用的空格数。 */
  tabWidth: 2,
  /** 在语句末尾打印分号。 */
  semi: false,
  /** 使用单引号而不是双引号 */
  singleQuote: true,
  /** 对象属性的引号使用。 */
  quoteProps: 'as-needed',
  /** 末尾逗号
   * Trailing commas where valid in ES5 (objects, arrays, etc.)
   */
  trailingComma: 'es5',
  /** Use single quotes instead of double quotes in JSX. */
  jsxSingleQuote: false,
  /** 字面量对象括号中的空格。 */
  bracketSpacing: true,
  /** Put the > of a multi-line JSX element at the end of the last line
   *  instead of being alone on the next line (does not apply to self closing elements).
   *  false: > 单独另起一行
   * */
  jsxBracketSameLine: false,
  /** 箭头函数中的括号
   * "always" - Always include parens. Example: (x) => x
   * "avoid" - Omit parens when possible. Example: x => x
   */
  arrowParens: 'always',
}
