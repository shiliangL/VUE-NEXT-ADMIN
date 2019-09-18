-- 2019年09月17日09:07:44

### 关键要点

- 键盘事件、如何添加事件
- 声音播放
- 添加改变样式
- 自定义属性的添加、获取

### 分解Tips

- 监听键盘事件
- 获取到键盘事件对应的元素、添加选中效果
- 获取对应元素自定义属性找到对应的声音元文件
- 播放完毕去除样式


### 其他

- audio 相关Api操作
- 键盘对应的keyCode,[可查看网站]( http://keycode.info/ )可以用按键盘来查看对应的键码。
- transitionend 事件会在 CSS transition 结束后触发  [MDN](https://developer.mozilla.org/zh-CN/docs/Web/Events/transitionend)


### 问题

- 为什么拼接的HTML字符串不能 el.appendChild()插入
- bug 长按按键最后的边框颜色无法去除,实质就是playing 类名没有清空
