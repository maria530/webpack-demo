export default function printMe() {
    console.log('I get called from print.js');
}

/**
 * 这是一个模拟最简单的webpack插件的功能。由此可看出，插件其实就是一个函数，在函数内部所作的就是插件的
 * 功能。插件可以在config中配置,参考webpack.config.js
 */