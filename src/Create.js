import React , {useState} from "react";

const Create = () => {

    const [title , setTitle] = useState('');
    const [body, setBody]=useState('');
    const [author , setAuthor] = useState('salah amine');

const handleSubmit = (e) => {
e.preventDefault();

const blog = {title , author , body};
console.log(blog);  

}


  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit} >
        <label>  a blog title</label>
        <input type="text"
         required
         value={title}
         onChange={(e)=> setTitle(e.target.value)}
         
         />

        <label> blog body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label> blog author</label>
        <select
        required
        value={author}
        onChange={(e)=> setAuthor(e.target.value)}
        
        >
          <option value="rami jawadi">rami jawadi</option>
          <option value="salah mouhamed">salah mouhamed</option>
          <option value="ibnou khouldoun">ibnou khouldoun</option>
          <option value="salah amine">salah amine</option>
          <option value="mkadmi mouadh">mkadmi mouadh</option>
        </select>

     

        <button>Add Blog </button>
        <p>{title}</p>
        <p>{body}</p>
        <p>{ author}</p>
       
      </form>
    </div>
  );
};

export default Create;
