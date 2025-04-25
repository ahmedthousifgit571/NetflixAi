// // components/AuthWrapper.jsx
// import { useEffect } from 'react'
// import { auth } from '../utils/firebase'
// import { onAuthStateChanged } from "firebase/auth"
// import { useDispatch } from 'react-redux'
// import { addUsers, removeUsers } from '../utils/userSlice'
// import { useNavigate } from 'react-router-dom'

// const AuthWrapper = ({ children }) => {
//     const dispatch = useDispatch()
//     const navigate = useNavigate()


//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 const {uid, email, displayName} = user
//                 dispatch(addUsers({uid, email, displayName}))
//                 navigate("/browse")
                
//             } else {
//                 dispatch(removeUsers())
//                 navigate('/')
//             }
//         })

//         // Clean up subscription
//         return () => unsubscribe()
//     }, [])

//     return children
// }

// export default AuthWrapper