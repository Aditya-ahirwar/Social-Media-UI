import './Stories.scss'

const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/2499699/pexels-photo-2499699.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/3225529/pexels-photo-3225529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

const Stories = () => {
    return(
        <div className="stories">
            <div className="story">
                <img src= 'https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' alt="" />
                <span>Jhon Doe</span>
                <button>
                    +
                </button>
            </div>
            {stories.map((story)=>(
                <div className="story" key={story.id}>
                    <img src= {story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories;