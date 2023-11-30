
import Post from "../post/Post.jsx";
import "./posts.scss";
import { makeRequest } from "../../axios";
import {
  
  useQuery
} from '@tanstack/react-query';

const Posts = ({userId}) => {
  //TEMPORARY
  const { isLoading, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      makeRequest.get("/posts").then((res)=>res.data),
  });

  // const { isLoading, error, data } = useQuery(["posts"], () =>
  //   makeRequest.get("/posts?userId="+ userId).then((res) => {
  //     return res.data;
  //   })
  // );

 
//   console.log(data);

 


return (
  <div className="posts">
    {error ? "Something went wrong!" 
    : isLoading 
    ? "loading"
    : data.map(post=>( 
      <Post post={post} key={post.id}/>
    ))}
  </div>
  );
};


export default Posts;
