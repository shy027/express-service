/*
 * @Author: shy 1533103845@qq.com
 * @Date: 2025-04-21 16:18:08
 * @LastEditors: shy 1533103845@qq.com
 * @LastEditTime: 2025-04-21 16:18:21
 * @FilePath: \my-express-app\idnex.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
