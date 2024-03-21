const express=require("express");
const app=express()
let posts=[]; // 게시글 리스트로 사용할 빈 array생성

//req.body를 사용하기 위해 JSON미들웨어를 사용래야함
app.use(express.json())//JSON미들 웨어 활성화
//POST요청시 컨텐트 타입이 application/x-www-form-urlencoded인경우 파싱
app.use(express.urlencoded({extended:true}));//JSON 미들웨어와 함께 사용

app.get("/",(req,res)=>{//'/'로 요청이 오면 실행
  res.json(posts);//게시글 리스트를 JSON형식으로 보여줌
})

app.post("/posts",(req,res)=>{//posts요청이 오면 실행
  const {title,name,text}=req.body;//HTTP요청의 body데이터를 변수에 할당
  //게시글 리시트에서 새로운 게시글 정보 추가
  posts.push({id:posts.length+1,title,name,text,createdDt:Date()});
  res.json({title,name,text});
});

app.delete("/posts/:id",(req,res)=>{
  const id =req.params.id //app.delete에 설정한 path 정보에서 id값을 가져옴
  const filteredPosts=posts.filter((post)=>post.id !== +id); //글 삭제 로직
  const isLengthChanged =posts.length !==filteredPosts.length; //삭제 확인
  posts=filteredPosts;
  if (isLengthChanged){//갯수가 변경 되었으므로 true를 가짐
    res.json("OK");
    return ;
  }
  res.json("NOT CHANGED");//변경 되지 않았을때
});
app.listen(3000,()=>{
  console.log("welcome posts START!")
})