import { createIPX, createIPXMiddleware } from "ipx";
const ipx = createIPX({"dir":"D:/Trabalho/Git/sistemasgl/static","domains":["img.youtube.com","i.vimeocdn.com"],"sharp":{},"alias":{"/youtube":"https://img.youtube.com","/vimeo":"https://i.vimeocdn.com"}});
export default createIPXMiddleware(ipx);
