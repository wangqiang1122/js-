/**
 * 适配器模式 其实就是 接口适配
 * 相同的作用可能有不同版本 每个版本触发相同的方法名字不一样
 * 适配器的作用就是兼容不同方法名
 * 让其在适配器里面的方法名都一样
 *
 */


/**
 * 适配器模式主要⽤来解决两个已有接口之间不匹配的问题，它不考虑这些接⼝口是怎样实现的，也不考虑 它们将来可能会如何演化。
 * 适配器器模式不不需要改变已有的接⼝，就能够 使它们协同作⽤用。
 * 装饰者模式和代理理模式也不不会改变原有对象的接⼝口，
 * 但装饰者模式的作⽤用是为了给对象 增加功能。装饰 者模式常形成⼀条⻓的装饰链，
 * 而适配器器模式通常只包装⼀次。代理 模式是为了了控制对对象的访问， 通常也只包装⼀一次。
 * 我们设计很多插件，有默认值，也算是适配器的⼀种应用， vue的prop校验，default也算是适配器的 应⽤了
 * 外观模式的作⽤用倒是和适配器比较相似，有⼈把外观模式看成⼀组对象的适配器，但外观模式最显著的
 * 特点是定义了一个新的接口。
 */

 // 统一触发的方法名字; 都是show
var googleMap = {
    show: function(){
        console.log( '开始渲染⾕谷歌地图' ); }
};
var baiduMap = {
    display: function(){
        console.log( '开始渲染百度地图' );
    } };

var baiduMapAdapter = {
    show: function(){
        return baiduMap.display();
    }
};