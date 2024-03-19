import React from 'react'

const commentData=[
    {
        name:"suraj kumar",
        text:"pls help me in backend",
        replies:[
            {
                name:"suraj kumar",
                  text:"pls help me in backend",
                  replies:[]
            }
        ]
    }
    ,
    {
        name:"suraj kumar",
        text:"pls help me in backend",
        replies:[
            {
                name:"suraj kumar",
                  text:"pls help me in backend",
                  replies:[
                    {
                        name:"suraj kumar",
                        text:"pls help me in backend",
                        replies:[
                            {
                                name:"suraj kumar",
                                  text:"pls help me in backend",
                                  replies:[
                                    {
                                        name:"suraj kumar",
                                        text:"pls help me in backend",
                                        replies:[
                                            {
                                                name:"suraj kumar",
                                                  text:"pls help me in backend",
                                                  replies:[
                                                    {
                                                        name:"suraj kumar",
                                                        text:"pls help me in backend",
                                                        replies:[
                                                            {
                                                                name:"suraj kumar",
                                                                  text:"pls help me in backend",
                                                                  replies:[
                                                                    {
                                                                        name:"suraj kumar",
                                                                        text:"pls help me in backend",
                                                                        replies:[
                                                                            {
                                                                                name:"suraj kumar",
                                                                                  text:"pls help me in backend",
                                                                                  replies:[]
                                                                            }
                                                                        ]
                                                                    },
                                                                  ]
                                                            }
                                                        ]
                                                    }
                                                  ]
                                            }
                                        ]
                                    }
                                  ]
                            }
                        ]
                    }
                  ]
            }
        ]
    }
    ,
    {
        name:"suraj kumar",
        text:"pls help me in backend",
        replies:[
            {
                name:"suraj kumar",
                  text:"pls help me in backend",
                  replies:[]
            }
        ]
    },
    {
        name:"suraj kumar",
        text:"pls help me in backend",
        replies:[
            {
                name:"suraj kumar",
                  text:"pls help me in backend",
                  replies:[]
            }
        ]
    },
    {
        name:"suraj kumar",
        text:"pls help me in backend",
        replies:[
            {
                name:"suraj kumar",
                  text:"pls help me in backend",
                  replies:[]
            }
        ]
    },
    {
        name:"suraj kumar",
        text:"pls help me in backend",
        replies:[
            {
                name:"suraj kumar",
                  text:"pls help me in backend",
                  replies:[]
            }
        ]
    },
    {
        name:"suraj kumar",
        text:"pls help me in backend",
        replies:[
            {
                name:"suraj kumar",
                  text:"pls help me in backend",
                  replies:[]
            }
        ]
    }
]


const Comment=({data})=>{
     
       const {name, text}=data;
          
      return (
        <div className='flex  shadow-sm bg-slate-100  rounded-md p-2 my-2 '> 
            <img className='w-12 h-12' src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png" />
          <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
          </div>

        </div>
      )
}

// console.log(commentData[0]);
   const CommentList=({comments})=>{
   return (
    comments.map((comment, index)=>(
            <div> 
         <Comment key={index} data={comment} />
             <div className='pl-5 border border-l-black ml-5'>
             <CommentList comments={comment.replies} />
             {/* <Comment key={index} data={comment} />
             <Comment key={index} data={comment} />
             <Comment key={index} data={comment} /> */}
             </div>
         </div>

         ))
   )
   }
const CommentContainer = () => {
  return (
    <div className='m-5 p-2'> 
       <h1 className='font-bold text-2xl'>Comments:</h1>
       <CommentList comments={commentData} />
    </div>
  )
}

export default CommentContainer