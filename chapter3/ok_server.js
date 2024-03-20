const http=require("http");
const server=http.createServer((req,res)=>{
  res.setHeader("Content-type","text/html");//응답 해더 설정
  res.end("OK");//ok응답하고 종료
})

server.listen("3000",()=>console.log("OK 서버 시작!"))//접속대기
