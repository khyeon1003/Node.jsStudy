const http =require("http");
const url=require("url");//url모듈 로딩
http.createServer((req,res)=>{
  const path =url.parse(req.url, true).pathname;//패스명 할당(파싱으로 할당하는듯)
  res.setHeader("Content-Type","text/html");

  if (path ==="/user"){
    user(req,res);//user 응답 설정
  } else if(path==="/feed"){
    feed(req,res);
  }else{
    notFound(req,res)
  }
}).listen("3000",()=>console.log("라우터를 만들어 보자!"))

//함수 나누기
const user=(req,res)=>{
  res.end("[user] name:andy,age:30")
}

const feed=(req,res)=>{
  res.end(`
    <ul>
      <li>picture1</li>
      <li>picture2</li>
      <li>picture3</li>
    </ul>
    `);//feed결과 값 설정정
}

const notFound=(req,res)=>{
  res.statusCode=404; //에러부분 설정
  res.end("404 page not found")
}