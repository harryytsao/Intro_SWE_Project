import './SearchFriends.css'
import { useState } from 'react'
import { searchUserByUsername, addFriend } from '@/lib/actions/user.actions'
import { useUser } from '@clerk/nextjs'
 const SearchFriends=()=>{
    const [inputVal, setInputVal]=useState('')
    const [found, setFound]=useState(false)
    const [friend, setFriend]=useState({
        id:"",
        name:"",
        username:""
    })
    const {isSignedIn, user, isLoaded}=useUser()
    if(!user) return null
    const handleAdd=(event: any)=>{
        event.preventDefault()
        const addNewFriend=async(currentUser:any)=>{
            await addFriend(currentUser.id, friend.id)
        }
        addNewFriend(user)
    }

    const handleSubmit=(event:any)=>{
        event.preventDefault()
        const searchUsers=async(uname:string)=>{
            const user=await searchUserByUsername(uname)
            return user
        }
        searchUsers(inputVal).then((val:any)=>{
            if(val){
                setFound(true)
                setFriend(val)
                console.log(val)
            }else{
                setFound(false)
            }
        })
    }

    if(found){
        return(
        <div className="space-y-2">
            <form onSubmit={handleSubmit}>
                <h1 className="title">Search for Friends!</h1>
                <input
                    type="text"
                    value={inputVal}
                    onChange={(e)=>setInputVal(e.target.value)}
                    className="search-input"
                    placeholder="Username"
                />
                <button onClick={handleSubmit} className="search-button hover:bg-slate-400 hover:text-slate-700 transition-all">Search</button>
            </form>
            <div className="bg-slate-700 search-result rounded-lg grid grid-cols-2 " >
                <div>{friend.username} - {friend.name}</div>
                <button onClick={handleAdd} className="hover:bg-slate-400 hover:text-slate-700 rounded-lg transition-all">
                    Add
                </button>
            </div>
        </div>
        )
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1 className="title">Search for Friends!</h1>
                <input
                    type="text"
                    value={inputVal}
                    onChange={(e)=>setInputVal(e.target.value)}
                    className="search-input"
                    placeholder="Username"
                />
                <button onClick={handleSubmit} className="search-button">Search</button>
            </form>
        </div>
    )
}
export default SearchFriends