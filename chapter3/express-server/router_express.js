const url=require("url");
const express=require("express");
const app=express()
const port=3000;
app.listen(port,()=>{
  console.log("익스프레스로 라우터 리팩토링 하기")
})
//GET메소드의 라우팅 설정
app.get("/",(_,res)=>res.end("Home"))
app.get('/user',user);
app.get('/feed',feed);

function user(req,res){
  const user=url.parse(req.url,true).query;
  //결과 값으로 유저명 나이 제공
  res.json(`[user] name:${user.name},age=${user.age}`)
}

function feed(_,res){
  res.json(`
    <ul>
      <li>picture1</li>
      <li>picture2</li>
      <li>picture3</li>
    </ul>
    `);//feed결과 값 설정정
}
