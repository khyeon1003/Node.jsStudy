const http =require("http");
const url=require("url");//url모듈 로딩
http.createServer((req,res)=>{
  const path =url.parse(req.url, true).pathname;//패스명 할당(파싱으로 할당하는듯)
  res.setHeader("Content-Type","text/html");

  if (path in urlMap){//urlMap에 path가 있는지 확인
    urlMap[path](req,res);
  }else{
    notFound(req,res)
  }
}).listen("3000",()=>console.log("라우터를 만들어 보자!"))

//함수 나누기
const user=(req,res)=>{
  const userInfo=url.parse(req.url,true).query;
  //쿼리스트링 데이터를 userInfo에 할당(url의qurey부분을 매개변수로 받음)
  res.end(`[user] name:${userInfo.name},age=${userInfo.age}`)

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
const urlMap= {
  "/":(req,res)=>{res.end("HOME")},
  "/user":user,
  "/feed":feed
};