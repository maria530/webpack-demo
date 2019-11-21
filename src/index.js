import _ from 'lodash';
// import './style.css';
// import TestImage from './img/test.png';
// console.log('TestImage',TestImage);

// import jsonData from './data.json';
// import xmlData from './data.xml';
// import csvData from './data.csv';

/**
 * 可以直接引入json文件，是默认支持的
 * 通过install xml-loader 可以获取.xml格式的数据
 * 通过install csv-loader和papaparse 可以解析.csv格式的数据
 */

// console.log('Data:',jsonData, xmlData, csvData);
import printMe from './print.js';


function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // element.classList.add('hello');

    // const myImage = new Image();
    // myImage.src = TestImage;
    // element.appendChild(myImage);

    const btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console';
    btn.onclick = printMe;
    element.appendChild(btn);
  
    return element;
}
  
  document.body.appendChild(component());

  /**
   * 资源管理器 Asset management

1）为了在Javascript模块中引入css文件，需要安装style-loader和css-loader，并且把这两个npm包加到配置文件中

webpack使用一个正则表达式来决定它应该寻找.css结尾的文件来提供给特定的loader,比如style-loader,css-loader。

在配置文件中配置的rule,使得在.js文件中，通过import './style.css' 这样的引用，可以把css文件引入到依赖它（样式）
的模块中，模块运行之后，会自动添加<style>标签到html文件中的<head>标签，并且将css字符串放到<style>标签中。

在浏览器中打开的index.html页面，通过inspect Element,可以发现head标签中增加了一个<style>标签，内容就是通过
import命令引入的字符串（这个操作是js动态创建的style标签添加的）

2）加载图片Image

我们在背景图片或者icon中的图片的引入，需要使用file-loader或者html-loader

当我们在js文件中通过import TestImage from './img/test.png';引入一个图片文件后，图片会被处理然后加到output的目录中，
例如例子中，图片被添加到/dist文件夹里面，重新命名为bb27d3f19349cbad5c7608ca520ba146.png
处理后这个TestImage变量的值会变为引入这张图片的最终路径，即在这个例子中，也就是bb27d3f19349cbad5c7608ca520ba146.png
因为图片和bundle.js（打包后的js文件）是相同的路径
同理，在css文件中通过url('./my-image.png')，file-loader会把它当成一个本地文件，用这个图片的final path in output directory来代替
括号中的'./my-image.png'内容。
html-loader处理 <img src="./my-image.png" /> 也是相同的方式

https://github.com/tcoopman/image-webpack-loader image-webpack-loader和
https://webpack.js.org/loaders/url-loader/ url-loader可以更优化图片的加载

什么是网络安全字体？
电脑经常使用的两种操作系统： windows和Mac OS，两种系统中安装的字体系列是不一样的，
但是两个系统的字体系列会存在交叉的一些字体，比如Arial,Times New Roman,Verdana,Georgia,Courier New
只有使用两个操作系统存在交叉的字体，才会使得页面展示按照开发人员希望展示的效果展示，否则对于其中某一个
系统就会出现找不到某个在代码中指定的字体而用默认的字体展示（会比较丑），所以这些在两个操作系统中存在交叉的
字体被叫做web-safe字体。 http://www.coffeecup.com/help/articles/what-is-a-web-safe-font/


   */