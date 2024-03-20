const http =require("http");
const url=require("url");//url모듈 로딩
http.createServer((req,res)=>{
  const path =url.parse(req.url, true).pathname;//패스명 할당(파싱으로 할당하는듯)
  res.setHeader("Content-Type","text/html");

  if (path ==="/user"){
    res.end("[user] name:andy,age:30")//user 응답 설정
  } else if(path==="/feed"){
    res.end(`
    <ul>
      <li>picture1</li>
      <li>picture2</li>
      <li>picture3</li>
    </ul>
    `);//feed결과 값 설정정
  }else{
    res.statusCode=404; //에러부분 설정
    res.end("404 page not found")
  }
}).listen("3000",()=>console.log("라우터를 만들어 보자!"))