const express=require("express");//express 모듈 불러오기
const app=express();//express 초기화 후 app할당
const port=3000;
app.get("/",(req,res)=>{//'/'로 요청 오는 경우 처리&get 요청 처리
  res.set({"Content-Type":"text/html; charset=utf-8"})
  res.end("헬로 Express")
})
app.listen(port,()=>{//서버를 기동해 클라이언트 요청을 기다림
  console.log(`START SERVER: use${port}`)
})