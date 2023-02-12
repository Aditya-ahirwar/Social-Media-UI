import './Post.scss'
import Post from '../postItems/PostItems'

const Posts = ()=>{
    const posts = [
        {
          id: 1,
          name: "John Doe",
          userId: 1,
          profilePic:
            "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          img: "https://images.pexels.com/photos/697244/pexels-photo-697244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 2,
          name: "Jane Doe",
          userId: 2,
          profilePic:
            "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
          img: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
      ];
      return(
        <div className="posts">
            {
            posts.map((post)=>(
                <Post post={post} key={post.id}/>
            ))}
        </div>
      )
}
export default Posts